'use client';

import { useActionState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { submitBewerbungForm, type BewerbungFormState } from '@/app/karriere/actions';

const initialState: BewerbungFormState = { success: false };

export default function BewerberForm() {
  const [state, action, isPending] = useActionState(submitBewerbungForm, initialState);

  if (state.success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Bewerbung erfolgreich gesendet!
        </h3>
        <p className="text-slate-600">
          Vielen Dank für Ihre Bewerbung. Wir werden uns so schnell wie möglich bei Ihnen melden.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c0a678] focus:border-transparent transition-all text-sm';

  return (
    <form action={action} className="space-y-5">
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Vollständiger Name <span className="text-rose-500">*</span>
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
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Telefonnummer <span className="text-rose-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="0176 12345678"
            className={inputClass}
            required
          />
          {state.fieldErrors?.phone && (
            <p className="text-rose-500 text-xs mt-1">{state.fieldErrors.phone[0]}</p>
          )}
        </div>
      </div>

      {/* Email + Position */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
            E-Mail Adresse <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="max@beispiel.de"
            className={inputClass}
            required
          />
          {state.fieldErrors?.email && (
            <p className="text-rose-500 text-xs mt-1">{state.fieldErrors.email[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="position" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Gewünschte Position <span className="text-rose-500">*</span>
          </label>
          <select
            id="position"
            name="position"
            className={inputClass}
            required
          >
            <option value="">Bitte wählen …</option>
            <option value="lagerhelfer">Lagerhelfer</option>
            <option value="kabelzieharbeiter">Kabelzieharbeiter</option>
            <option value="entruempelungsmitarbeiter">Entrümpelungsmitarbeiter</option>
            <option value="reinigungskraft">Reinigungskraft</option>
            <option value="andere">Andere Position</option>
          </select>
          {state.fieldErrors?.position && (
            <p className="text-rose-500 text-xs mt-1">{state.fieldErrors.position[0]}</p>
          )}
        </div>
      </div>

      {/* Message / Experience */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Erfahrung & Motivation <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Erzählen Sie uns kurz etwas über Ihre bisherigen Erfahrungen und warum Sie bei uns arbeiten möchten."
          className={`${inputClass} resize-y`}
          required
          minLength={10}
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
          <a href="/datenschutz" className="text-[#c0a678] hover:underline" target="_blank" rel="noopener noreferrer">
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
          'Bewerbung absenden'
        )}
      </button>
    </form>
  );
}
