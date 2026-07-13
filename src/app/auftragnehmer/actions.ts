'use server';

import { z } from 'zod';
import { db } from '@/lib/db';
import { partners } from '@/lib/db/schema';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@meinedienstleistungen.de';

export type AuftragnehmerFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

const formSchema = z.object({
  firma: z.string().min(2, 'Firmenname muss mindestens 2 Zeichen lang sein.'),
  ansprechpartner: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein.'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
  telefon: z.string().optional(),
  gewerke: z.array(z.string()).min(1, 'Bitte wählen Sie mindestens ein Gewerk aus.'),
  einsatzgebiet: z.string().min(2, 'Bitte geben Sie Ihr Einsatzgebiet an.'),
  mitarbeiter: z.string().optional(),
  website: z.string().optional(),
  beschreibung: z.string().optional(),
});

export async function submitAuftragnehmerForm(
  prevState: AuftragnehmerFormState,
  formData: FormData
): Promise<AuftragnehmerFormState> {
  const data = Object.fromEntries(formData.entries());
  
  // Handle multiple checkboxes for 'gewerke'
  const gewerke = formData.getAll('gewerke') as string[];
  
  try {
    const validatedData = formSchema.parse({
      ...data,
      gewerke,
    });

    // Insert into database
    await db.insert(partners).values({
      firma: validatedData.firma,
      ansprechpartner: validatedData.ansprechpartner,
      email: validatedData.email,
      telefon: validatedData.telefon || '',
      gewerke: validatedData.gewerke,
      // Store einsatzgebiet as array even though it's a string input for now (can be comma separated)
      einsatzgebiet: validatedData.einsatzgebiet.split(',').map(s => s.trim()),
      mitarbeiter: validatedData.mitarbeiter || '',
      website: validatedData.website || '',
      beschreibung: validatedData.beschreibung || '',
    });

    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'MDL CRM <onboarding@resend.dev>',
        to: [ADMIN_EMAIL],
        subject: `Neue Partnerbewerbung: ${validatedData.firma}`,
        html: `
          <h2>Neue Partnerbewerbung eingegangen</h2>
          <p><strong>Firma:</strong> ${validatedData.firma}</p>
          <p><strong>Ansprechpartner:</strong> ${validatedData.ansprechpartner}</p>
          <p><strong>E-Mail:</strong> ${validatedData.email}</p>
          <p><strong>Telefon:</strong> ${validatedData.telefon || '-'}</p>
          <p><strong>Gewerke:</strong> ${validatedData.gewerke.join(', ')}</p>
          <p><strong>Einsatzgebiet:</strong> ${validatedData.einsatzgebiet}</p>
          <p><strong>Mitarbeiteranzahl:</strong> ${validatedData.mitarbeiter || '-'}</p>
          <p><strong>Website:</strong> ${validatedData.website || '-'}</p>
          <p><strong>Beschreibung:</strong><br/>${validatedData.beschreibung ? validatedData.beschreibung.replace(/\n/g, '<br/>') : '-'}</p>
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

    console.error('Failed to submit partner application:', error);
    return {
      success: false,
      error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
    };
  }
}
