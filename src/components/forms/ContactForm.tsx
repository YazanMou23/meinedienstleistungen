'use client';

import { useActionState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { submitContactForm, type ContactFormState } from '@/app/kontakt/actions';
import { SERVICES } from '@/lib/constants';

const initialState: ContactFormState = { success: false };

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Anfrage erfolgreich gesendet!
        </h3>
        <p className="text-slate-600">
          Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c0a678] focus:border-transparent transition-all text-sm';

  return (
    <form action={action} className="space-y-5">
      {/* Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Max Mustermann"
            className={inputClass}
            required
          />
          {state.fieldErrors?.name && (
            <p className="text-rose-500 text-xs mt-1">{state.fieldErrors.name[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Unternehmen
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Musterfirma GmbH"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
            E-Mail <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="max@musterfirma.de"
            className={inputClass}
            required
          />
          {state.fieldErrors?.email && (
            <p className="text-rose-500 text-xs mt-1">{state.fieldErrors.email[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+49 201 123456"
            className={inputClass}
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Leistungsbereich <span className="text-rose-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          className={inputClass}
          required
        >
          <option value="">Bitte wählen …</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="other">Sonstiges / Mehrere Bereiche</option>
        </select>
        {state.fieldErrors?.service && (
          <p className="text-rose-500 text-xs mt-1">{state.fieldErrors.service[0]}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Projektbeschreibung <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Beschreiben Sie Ihr Projekt kurz: Was soll gemacht werden? Ungefähre Größe/Menge? Gewünschter Zeitrahmen?"
          className={`${inputClass} resize-y`}
          required
          minLength={20}
        />
        {state.fieldErrors?.message && (
          <p className="text-rose-500 text-xs mt-1">{state.fieldErrors.message[0]}</p>
        )}
      </div>

      {/* Datenschutz */}
      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 rounded border-slate-300 text-[#c0a678] focus:ring-[#c0a678] accent-[#c0a678]"
        />
        <label htmlFor="privacy" className="text-xs text-slate-500 leading-relaxed">
          Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
          <a href="/datenschutz" className="text-[#c0a678] hover:underline">
            Datenschutzerklärung
          </a>{' '}
          zu. <span className="text-rose-500">*</span>
        </label>
      </div>

      {state.error && (
        <div className="bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 text-rose-700 text-sm">
          {state.error}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full flex items-center justify-center gap-2 bg-[#c0a678] hover:bg-[#aa905d] disabled:bg-[#c0a678]/60 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 text-sm shadow-sm disabled:cursor-not-allowed active:scale-[0.99]"
      >
        {isPending ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Wird gesendet …
          </>
        ) : (
          'Anfrage absenden'
        )}
      </button>
    </form>
  );
}
