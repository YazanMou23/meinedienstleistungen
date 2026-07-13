'use server';

import { z } from 'zod';
import { db } from '@/lib/db';
import { leads } from '@/lib/db/schema';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@meinedienstleistungen.de';

export type AuftraggeberFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

const formSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein.'),
  firma: z.string().optional(),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
  telefon: z.string().optional(),
  service: z.string().min(1, 'Bitte wählen Sie einen Leistungsbereich.'),
  projektort: z.string().min(2, 'Bitte geben Sie den Projektort an.'),
  zeitraum: z.string().optional(),
  budget: z.string().optional(),
  beschreibung: z.string().min(10, 'Bitte beschreiben Sie das Projekt genauer.'),
});

export async function submitAuftraggeberForm(
  prevState: AuftraggeberFormState,
  formData: FormData
): Promise<AuftraggeberFormState> {
  const data = Object.fromEntries(formData.entries());

  try {
    const validatedData = formSchema.parse(data);

    // Insert into database
    await db.insert(leads).values({
      name: validatedData.name,
      firma: validatedData.firma || '',
      email: validatedData.email,
      telefon: validatedData.telefon || '',
      service: validatedData.service,
      projektort: validatedData.projektort,
      zeitraum: validatedData.zeitraum || '',
      budget: validatedData.budget || '',
      beschreibung: validatedData.beschreibung,
    });

    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'MDL CRM <onboarding@resend.dev>',
        to: [ADMIN_EMAIL],
        subject: `Neue Projektanfrage: ${validatedData.service}`,
        html: `
          <h2>Neue Projektanfrage eingegangen</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Firma:</strong> ${validatedData.firma || '-'}</p>
          <p><strong>E-Mail:</strong> ${validatedData.email}</p>
          <p><strong>Telefon:</strong> ${validatedData.telefon || '-'}</p>
          <p><strong>Leistung:</strong> ${validatedData.service}</p>
          <p><strong>Projektort:</strong> ${validatedData.projektort}</p>
          <p><strong>Zeitraum:</strong> ${validatedData.zeitraum || '-'}</p>
          <p><strong>Budget:</strong> ${validatedData.budget || '-'}</p>
          <p><strong>Beschreibung:</strong><br/>${validatedData.beschreibung.replace(/\n/g, '<br/>')}</p>
        `,
      });
    }

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        fieldErrors: error.flatten().fieldErrors,
        error: 'Bitte überprüfen Sie Ihre Eingaben.',
      };
    }

    console.error('Failed to submit form:', error);
    return {
      success: false,
      error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
    };
  }
}
