'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben'),
  company: z.string().optional(),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Bitte wählen Sie eine Leistung'),
  message: z.string().min(20, 'Nachricht muss mindestens 20 Zeichen haben'),
});

export type ContactFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get('name') as string,
    company: formData.get('company') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    service: formData.get('service') as string,
    message: formData.get('message') as string,
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      fieldErrors: result.error.flatten().fieldErrors,
    };
  }

  // In production: send via Resend or email service
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({...});

  // Simulate success for now
  console.log('Contact form submitted:', result.data);

  return { success: true };
}
