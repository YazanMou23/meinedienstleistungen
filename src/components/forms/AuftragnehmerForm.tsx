'use client';

import { useActionState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { submitAuftragnehmerForm, type AuftragnehmerFormState } from '@/app/auftragnehmer/actions';
import { SERVICES } from '@/lib/constants';

const initialState: AuftragnehmerFormState = { success: false };

export default function AuftragnehmerForm() {
  const [state, action, isPending] = useActionState(submitAuftragnehmerForm, initialState);

  if (state.success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Bewerbung erfolgreich eingegangen!
        </h3>
        <p className="text-slate-600">
          Vielen Dank für Ihr Interesse an einer Partnerschaft. Wir prüfen Ihre Unterlagen und melden uns zeitnah bei Ihnen.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c0a678] focus:border-transparent transition-all text-sm';

  return (
    <form action={action} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firma" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Firmenname <span className="text-rose-500">*</span>
          </label>
          <input id="firma" name="firma" type="text" placeholder="Musterfirma GmbH" className={inputClass} required />
          {state.fieldErrors?.firma && <p className="text-rose-500 text-xs mt-1">{state.fieldErrors.firma[0]}</p>}
        </div>
        <div>
          <label htmlFor="ansprechpartner" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Ansprechpartner <span className="text-rose-500">*</span>
          </label>
          <input id="ansprechpartner" name="ansprechpartner" type="text" placeholder="Max Mustermann" className={inputClass} required />
          {state.fieldErrors?.ansprechpartner && <p className="text-rose-500 text-xs mt-1">{state.fieldErrors.ansprechpartner[0]}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
            E-Mail <span className="text-rose-500">*</span>
          </label>
          <input id="email" name="email" type="email" placeholder="max@musterfirma.de" className={inputClass} required />
          {state.fieldErrors?.email && <p className="text-rose-500 text-xs mt-1">{state.fieldErrors.email[0]}</p>}
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Telefon
          </label>
          <input id="telefon" name="telefon" type="tel" placeholder="+49 201 123456" className={inputClass} />
        </div>
      </div>

      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
        <label className="block text-sm font-semibold text-slate-700 mb-3">
          Ihre Gewerke / Leistungsbereiche <span className="text-rose-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SERVICES.map((s) => (
            <label key={s.slug} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="gewerke"
                value={s.slug}
                className="w-5 h-5 rounded border-slate-300 text-[#c0a678] focus:ring-[#c0a678] accent-[#c0a678]"
              />
              <span className="text-sm text-slate-700">{s.title}</span>
            </label>
          ))}
        </div>
        {state.fieldErrors?.gewerke && <p className="text-rose-500 text-xs mt-2">{state.fieldErrors.gewerke[0]}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="einsatzgebiet" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Einsatzgebiet <span className="text-rose-500">*</span>
          </label>
          <input id="einsatzgebiet" name="einsatzgebiet" type="text" placeholder="Duisburg, Essen, komplett NRW..." className={inputClass} required />
          {state.fieldErrors?.einsatzgebiet && <p className="text-rose-500 text-xs mt-1">{state.fieldErrors.einsatzgebiet[0]}</p>}
        </div>
        <div>
          <label htmlFor="mitarbeiter" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Mitarbeiteranzahl
          </label>
          <select id="mitarbeiter" name="mitarbeiter" className={inputClass}>
            <option value="">Bitte wählen …</option>
            <option value="1-5">1 - 5</option>
            <option value="6-20">6 - 20</option>
            <option value="21-50">21 - 50</option>
            <option value="50+">Mehr als 50</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Website oder Link zu Referenzen
        </label>
        <input id="website" name="website" type="url" placeholder="https://www.musterfirma.de" className={inputClass} />
      </div>

      <div>
        <label htmlFor="beschreibung" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Kurze Firmenbeschreibung
        </label>
        <textarea
          id="beschreibung"
          name="beschreibung"
          rows={4}
          placeholder="Ihre Spezialisierungen, Zertifizierungen, Maschinenpark..."
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 rounded border-slate-300 text-[#c0a678] focus:ring-[#c0a678] accent-[#c0a678]"
        />
        <label htmlFor="privacy" className="text-xs text-slate-500 leading-relaxed">
          Ich stimme der Verarbeitung meiner Daten gemäß der <a href="/datenschutz" className="text-[#c0a678] hover:underline">Datenschutzerklärung</a> zu. <span className="text-rose-500">*</span>
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
        {isPending ? <><Loader2 size={18} className="animate-spin" /> Wird gesendet …</> : 'Als Partner bewerben'}
      </button>
    </form>
  );
}
