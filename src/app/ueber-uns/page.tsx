import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Heart, Zap, Shield, Star, Users, CheckCircle2 } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = genMeta({
  title: 'Über uns — Ihr Projekt-Koordinationspartner',
  description:
    'Lernen Sie MEINEDIENSTLEISTUNGEN kennen: Unser Ansatz, unsere Werte und warum wir als Projekt-Koordinationspartner den Unterschied machen.',
  path: '/ueber-uns',
});

const values = [
  { icon: Shield, title: 'Zuverlässigkeit', desc: 'Wir stehen zu unseren Versprechen — bei jedem Projekt, in jeder Phase.' },
  { icon: Star, title: 'Qualitätsorientierung', desc: 'Jedes Projekt wird nach definierten Standards koordiniert und geprüft.' },
  { icon: Heart, title: 'Partnerschaft', desc: 'Langfristige Kundenbeziehungen sind uns wichtiger als einzelne Aufträge.' },
  { icon: Target, title: 'Effizienz', desc: 'Wir eliminieren Reibungsverluste — für Sie und für unsere Partner.' },
  { icon: Zap, title: 'Transparenz', desc: 'Keine versteckten Kosten, keine Überraschungen, klare Kommunikation.' },
  { icon: Users, title: 'Teamwork', desc: 'Unser Netzwerk aus Partnern, Koordinatoren und Kunden arbeitet als Team.' },
];

const team = [
  {
    name: 'MEINEDIENSTLEISTUNGEN Team',
    role: 'Projektkoordination & Qualitätsmanagement',
    bio: 'Erfahrene B2B-Koordinationsexperten mit jahrelanger Erfahrung in Bau, Logistik und Facility Management.',
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <HeroSection
        variant="compact"
        label="Über uns"
        headline="Wir koordinieren — damit Sie sich auf Ihr Kerngeschäft konzentrieren können"
        subheadline="MEINEDIENSTLEISTUNGEN ist kein Handwerksbetrieb und kein Marktplatz. Wir sind Ihr Projekt-Koordinationspartner — ein neues Modell, das Verlässlichkeit und Qualität in der B2B-Dienstleistung neu definiert."
        backgroundImage="/images/case-studies/lager-logistik.png"
        lightOverlay={true}
      />

      {/* Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="Unsere Mission"
                title="Warum es uns gibt"
                align="left"
              />
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Unternehmen, die Dienstleistungen beauftragen, stehen vor einem immer größer werdenden
                  Problem: Die Koordination von Subunternehmern kostet enorm viel Zeit, Nerven und Geld.
                  Qualität ist nicht garantiert. Termine werden nicht eingehalten. Niemand fühlt sich
                  verantwortlich.
                </p>
                <p>
                  MEINEDIENSTLEISTUNGEN wurde gegründet, um dieses Problem ein für alle Mal zu lösen.
                  Als Ihr Projekt-Koordinationspartner übernehmen wir die gesamte Steuerung — von der
                  Partnerauswahl über die Terminplanung bis zur qualitätsgesicherten Abnahme.
                </p>
                <p>
                  <strong className="text-slate-900">Das Ergebnis:</strong> Sie haben einen Ansprechpartner.
                  Wir haben die Verantwortung. Ihr Projekt wird termingerecht und qualitätsgesichert umgesetzt.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-10 text-white">
              <h3 className="text-xl font-bold mb-6 text-blue-300">Unser Versprechen</h3>
              <div className="space-y-5">
                {[
                  'Ein persönlicher Ansprechpartner für Ihr gesamtes Projekt',
                  'Nur geprüfte, zertifizierte Partnerunternehmen',
                  'Verbindliche Terminplanung — keine leeren Versprechen',
                  'Dokumentierte Qualitätskontrolle bei jedem Schritt',
                  'Vollständige Projektdokumentation bei Abnahme',
                  'Klare Verantwortung — wir stehen für das Ergebnis',
                ].map((promise, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-blue-400 mt-0.5 shrink-0" />
                    <span className="text-slate-300 text-sm">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Unsere Werte"
            title="Was uns antreibt"
            subtitle="Diese Werte leiten jeden Schritt unserer Arbeit — und jede Entscheidung in Ihrem Projekt."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <value.icon size={22} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {SITE_CONFIG.metrics.map((metric, i) => (
              <div key={i} className="text-white">
                <div className="text-4xl font-black mb-1">
                  {metric.value}{metric.suffix}
                </div>
                <p className="text-blue-200 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner network */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Unser Netzwerk"
            title="Geprüfte Partner als Fundament"
            subtitle="Unser Partnernetzwerk ist das Herzstück von MEINEDIENSTLEISTUNGEN. Jeder Partner durchläuft ein strukturiertes Aufnahmeverfahren."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { step: '01', title: 'Bewerbung & Prüfung', desc: 'Zertifikate, Versicherungen, Referenzen und Kapazitäten werden geprüft.' },
              { step: '02', title: 'Pilotprojekt', desc: 'Erste Zusammenarbeit mit engem Feedback und Qualitätsbewertung.' },
              { step: '03', title: 'Partnerschaft', desc: 'Langfristige Zusammenarbeit mit regelmäßigen Projekten und Bewertungen.' },
            ].map((step, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-left">
                <span className="text-4xl font-black text-slate-200 leading-none block mb-4">{step.step}</span>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/partner-werden"
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all"
          >
            Jetzt Partner werden
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 md:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #060e1a 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Lernen Sie uns kennen
          </h2>
          <p className="text-slate-300 mb-10">
            Sprechen Sie persönlich mit uns über Ihr nächstes Projekt.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
          >
            Kostenlose Erstberatung
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
