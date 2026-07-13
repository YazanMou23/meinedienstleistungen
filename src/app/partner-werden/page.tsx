import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Briefcase, TrendingUp, Shield, Users, Star, Award } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = genMeta({
  title: 'Partner werden — Wachsen Sie mit uns',
  description:
    'Werden Sie Teil des MEINEDIENSTLEISTUNGEN-Partnernetzwerks. Steady Auftragsflow, keine eigene Akquise, professionelle Koordination. Jetzt bewerben.',
  path: '/partner-werden',
});

const benefits = [
  { icon: Briefcase, title: 'Konstanter Auftragsflow', desc: 'Wir bringen die Projekte — Sie konzentrieren sich auf Ihre Kernkompetenz.' },
  { icon: TrendingUp, title: 'Kein Akquise-Aufwand', desc: 'Kein Kaltakquise, kein Marketing, keine Angebotserstellung. Das übernehmen wir.' },
  { icon: Shield, title: 'Professionelle Koordination', desc: 'Wir klären alles mit dem Kunden, planen Termine und managen die Kommunikation.' },
  { icon: Users, title: 'Langfristige Zusammenarbeit', desc: 'Keine Einmal-Aufträge. Wir streben dauerhafte Partnerbeziehungen an.' },
  { icon: Star, title: 'Faire Vergütung', desc: 'Transparente, marktgerechte Preise — ohne versteckte Abzüge oder Gebühren.' },
  { icon: Award, title: 'Tier-Aufstieg', desc: 'Qualitätspartner erhalten bevorzugt Projekte und bessere Konditionen.' },
];

const tiers = [
  {
    name: 'Bronze',
    color: 'bg-amber-700',
    projects: 'Erstprojekte',
    perks: ['Projektzuweisung nach Bedarf', 'Standard-Koordination', 'Leistungsbewertung'],
  },
  {
    name: 'Silber',
    color: 'bg-slate-500',
    projects: 'Ab 5 Projekten',
    perks: ['Bevorzugte Projektzuweisung', 'Erweiterte Koordination', 'Co-Marketing-Optionen'],
  },
  {
    name: 'Gold',
    color: 'bg-amber-500',
    projects: 'Ab 15 Projekten',
    perks: ['Exklusiver Projektzugang', 'Premium-Vergütung', 'Kapazitäts-Commitment beiderseits'],
  },
];

export default function PartnerWerdenPage() {
  return (
    <>
      <HeroSection
        variant="compact"
        label="Partnernetzwerk"
        headline="Fokussieren Sie sich auf Ihre Arbeit — wir bringen die Aufträge"
        subheadline="Als Partner von MEINEDIENSTLEISTUNGEN erhalten Sie kontinuierlichen Auftragsflow ohne eigene Akquise. Sie liefern Qualität, wir koordinieren den Rest."
        primaryCta={{ label: 'Jetzt Partner-Bewerbung starten', href: '#bewerbung' }}
        backgroundImage="/images/case-studies/lager-logistik.png"
        lightOverlay={true}
      />

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Ihre Vorteile"
            title="Warum Partnerunternehmen mit uns arbeiten"
            subtitle="Steady Aufträge, keine Akquise, professionelle Koordination — und ein starkes Netzwerk im Rücken."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <benefit.icon size={22} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Partner-Stufen"
            title="Wachsen Sie mit uns — Schritt für Schritt"
            subtitle="Qualitätspartner werden bevorzugt und erhalten mit der Zeit exklusivere Projekte und bessere Konditionen."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className={`${tier.color} p-6 text-white`}>
                  <div className="font-black text-2xl mb-1">{tier.name}</div>
                  <div className="text-sm opacity-80">{tier.projects}</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {tier.perks.map((perk, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we expect */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Unsere Anforderungen"
            title="Was wir von Partnern erwarten"
            subtitle="Wir arbeiten nur mit Unternehmen zusammen, die unsere Qualitätsstandards erfüllen und langfristig mit uns wachsen wollen."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Nachgewiesene Berufserfahrung in Ihrem Fachbereich',
              'Gültige Versicherungen (Betriebs- und Haftpflicht)',
              'Gewerbeanmeldung und steuerliche Registrierung',
              'Zertifikate und Qualifikationen nach Branche',
              'Zuverlässigkeit und Termintreue (Priorität 1)',
              'Bereitschaft zur Qualitätsdokumentation',
              'Kapazität für mindestens 2–3 Projekte pro Monat',
              'Professionelle Kommunikation mit MDL',
            ].map((req, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                <span className="text-slate-700 text-sm">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="bewerbung" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Partner-Bewerbung"
            title="Jetzt bewerben — in 3 Minuten"
            subtitle="Füllen Sie das Formular aus. Wir melden uns innerhalb von 48 Stunden für ein Kennenlerngespräch."
            align="center"
          />
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 md:p-10">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Unternehmen *</label>
                  <input type="text" placeholder="Musterbau GmbH" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Ansprechpartner *</label>
                  <input type="text" placeholder="Max Mustermann" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">E-Mail *</label>
                  <input type="email" placeholder="info@musterbau.de" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Telefon *</label>
                  <input type="tel" placeholder="+49 201 123456" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Fachbereich / Gewerke *</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required>
                  <option value="">Bitte wählen …</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                  ))}
                  <option value="other">Sonstiges</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Region / Einsatzgebiet *</label>
                <input type="text" placeholder="z.B. NRW, Ruhrgebiet, bundesweit" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Kurze Vorstellung</label>
                <textarea rows={4} placeholder="Beschreiben Sie kurz Ihr Unternehmen, Ihre Stärken und warum Sie gerne Partner werden möchten." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-y" />
              </div>
              <div className="flex items-start gap-3">
                <input id="partner-privacy" type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600" />
                <label htmlFor="partner-privacy" className="text-xs text-slate-500 leading-relaxed">
                  Ich stimme der Verarbeitung meiner Daten gemäß der <Link href="/datenschutz" className="text-blue-600 hover:underline">Datenschutzerklärung</Link> zu. *
                </label>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all text-base shadow-sm">
                Partner-Bewerbung absenden
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
