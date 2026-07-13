'use client';

import { useActionState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { submitAuftraggeberForm, type AuftraggeberFormState } from '@/app/auftraggeber/actions';
import { SERVICES } from '@/lib/constants';

const initialState: AuftraggeberFormState = { success: false };

export default function AuftraggeberForm() {
  const [state, action, isPending] = useActionState(submitAuftraggeberForm, initialState);

  if (state.success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Projektanfrage erfolgreich gesendet!
        </h3>
        <p className="text-slate-600">
          Wir haben Ihre Daten erhalten. Ein Projektkoordinator wird sich in Kürze mit Ihnen in Verbindung setzen.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c0a678] focus:border-transparent transition-all text-sm';

  return (
    <form action={action} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Name <span className="text-rose-500">*</span>
          </label>
          <input id="name" name="name" type="text" placeholder="Max Mustermann" className={inputClass} required />
          {state.fieldErrors?.name && <p className="text-rose-500 text-xs mt-1">{state.fieldErrors.name[0]}</p>}
        </div>
        <div>
          <label htmlFor="firma" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Unternehmen
          </label>
          <input id="firma" name="firma" type="text" placeholder="Musterfirma GmbH" className={inputClass} />
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Leistungsbereich <span className="text-rose-500">*</span>
          </label>
          <select id="service" name="service" className={inputClass} required>
            <option value="">Bitte wählen …</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
            <option value="other">Mehrere Bereiche / Sonstiges</option>
          </select>
          {state.fieldErrors?.service && <p className="text-rose-500 text-xs mt-1">{state.fieldErrors.service[0]}</p>}
        </div>
        <div>
          <label htmlFor="projektort" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Projektort (PLZ, Stadt) <span className="text-rose-500">*</span>
          </label>
          <input id="projektort" name="projektort" type="text" placeholder="47051 Duisburg" className={inputClass} required />
          {state.fieldErrors?.projektort && <p className="text-rose-500 text-xs mt-1">{state.fieldErrors.projektort[0]}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="zeitraum" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Gewünschter Zeitraum
          </label>
          <select id="zeitraum" name="zeitraum" className={inputClass}>
            <option value="">Bitte wählen …</option>
            <option value="Sofort">Sofort</option>
            <option value="1-3 Monate">Innerhalb der nächsten 1-3 Monate</option>
            <option value="3-6 Monate">In 3-6 Monaten</option>
            <option value="Flexibel">Flexibel</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Budget-Rahmen
          </label>
          <select id="budget" name="budget" className={inputClass}>
            <option value="">Bitte wählen …</option>
            <option value="Unter 5.000 €">Unter 5.000 €</option>
            <option value="5.000 € - 20.000 €">5.000 € - 20.000 €</option>
            <option value="20.000 € - 50.000 €">20.000 € - 50.000 €</option>
            <option value="Über 50.000 €">Über 50.000 €</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="beschreibung" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Projektbeschreibung <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="beschreibung"
          name="beschreibung"
          rows={5}
          placeholder="Beschreiben Sie Ihr Projekt: Umfang, Besonderheiten, spezifische Anforderungen..."
          className={`${inputClass} resize-y`}
          required
          minLength={10}
        />
        {state.fieldErrors?.beschreibung && <p className="text-rose-500 text-xs mt-1">{state.fieldErrors.beschreibung[0]}</p>}
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
        className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-900/60 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 text-sm shadow-sm disabled:cursor-not-allowed active:scale-[0.99]"
      >
        {isPending ? <><Loader2 size={18} className="animate-spin" /> Wird gesendet …</> : 'Projekt unverbindlich anfragen'}
      </button>
    </form>
  );
}
