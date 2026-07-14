'use server';

import { z } from 'zod';

const bewerbungSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().min(5, 'Bitte geben Sie eine gültige Telefonnummer ein'),
  position: z.string().min(1, 'Bitte wählen Sie eine Position'),
  message: z.string().min(10, 'Bitte schreiben Sie kurz etwas zu Ihrer Erfahrung (min. 10 Zeichen)'),
});

export type BewerbungFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitBewerbungForm(
  _prevState: BewerbungFormState,
  formData: FormData
): Promise<BewerbungFormState> {
  const raw = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    position: formData.get('position') as string,
    message: formData.get('message') as string,
  };

  const result = bewerbungSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      fieldErrors: result.error.flatten().fieldErrors,
    };
  }

  // Simulate success for now
  console.log('Bewerbung submitted:', result.data);

  return { success: true };
}
