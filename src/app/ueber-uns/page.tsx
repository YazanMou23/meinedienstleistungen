import { Metadata } from 'next';
import { Shield, Star, Heart, Target, Zap, Users, CheckCircle2 } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = genMeta({
  title: 'Über MDL — Ihr B2B Projektkoordinationspartner',
  description:
    'Lernen Sie MEINEDIENSTLEISTUNGEN kennen: Unser Ansatz, unsere Werte und warum wir als B2B Projektkoordinationspartner den Unterschied machen. Tätig in Duisburg und NRW.',
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

const promises = [
  'Ein persönlicher Ansprechpartner für Ihr gesamtes Projekt',
  'Nur geprüfte, zertifizierte Partnerunternehmen',
  'Verbindliche Terminplanung — keine leeren Versprechen',
  'Dokumentierte Qualitätskontrolle bei jedem Schritt',
  'Vollständige Projektdokumentation bei Abnahme',
  'Klare Verantwortung — wir stehen für das Ergebnis',
];

const partnerSteps = [
  { step: '01', title: 'Bewerbung & Prüfung', desc: 'Zertifikate, Versicherungen, Referenzen und Kapazitäten werden geprüft.' },
  { step: '02', title: 'Pilotprojekt', desc: 'Erste Zusammenarbeit mit engem Feedback und Qualitätsbewertung.' },
  { step: '03', title: 'Partnerschaft', desc: 'Langfristige Zusammenarbeit mit regelmäßigen Projekten und Bewertungen.' },
];

export default function UeberUnsPage() {
  return (
    <>
      <HeroSection
        variant="compact"
        label="Über MDL"
        headline="Wir koordinieren — damit Sie sich auf Ihr Kerngeschäft konzentrieren können"
        subheadline="MEINEDIENSTLEISTUNGEN ist kein Handwerksbetrieb und kein Marktplatz. Wir sind Ihr B2B Projektkoordinationspartner — ein Modell, das Verlässlichkeit und Qualität in der B2B-Dienstleistung neu definiert."
        backgroundImage="/images/case-studies/lager-logistik.png"
        lightOverlay
      />

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading label="Unsere Mission" title="Warum es uns gibt" align="left" />
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Unternehmen, die Dienstleistungen beauftragen, stehen vor einem immer größer werdenden
                  Problem: Die Koordination von Subunternehmern kostet enorm viel Zeit, Nerven und Geld.
                  Qualität ist nicht garantiert. Termine werden nicht eingehalten. Niemand fühlt sich verantwortlich.
                </p>
                <p>
                  MEINEDIENSTLEISTUNGEN wurde gegründet, um dieses Problem ein für alle Mal zu lösen.
                  Als Ihr Projektkoordinationspartner übernehmen wir die gesamte Steuerung — von der
                  Partnerauswahl über die Terminplanung bis zur qualitätsgesicherten Abnahme.
                </p>
                <p>
                  <strong className="text-slate-900">Das Ergebnis:</strong> Sie haben einen Ansprechpartner.
                  Wir haben die Verantwortung. Ihr Projekt wird termingerecht und qualitätsgesichert umgesetzt.
                </p>
              </div>
            </div>

            <div className="bg-[#0a1628] rounded-3xl p-10 text-white">
              <h3 className="text-xl font-bold mb-6 text-[#c0a678]">Unser Versprechen</h3>
              <div className="space-y-4">
                {promises.map((promise, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#c0a678] mt-0.5 shrink-0" />
                    <span className="text-slate-300 text-sm leading-relaxed">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-base">
          <SectionHeading
            label="Unsere Werte"
            title="Was uns antreibt"
            subtitle="Diese Werte leiten jeden Schritt unserer Arbeit — und jede Entscheidung in Ihrem Projekt."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:border-[#c0a678]/30 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#0a1628] group-hover:bg-[#c0a678] flex items-center justify-center mb-5 transition-colors">
                  <value.icon size={22} className="text-[#c0a678] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-[#c0a678]">
        <div className="container-base">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {SITE_CONFIG.metrics.map((metric, i) => (
              <div key={i} className="text-white">
                <div className="text-4xl font-black mb-1">
                  {metric.value}{metric.suffix}
                </div>
                <p className="text-white/70 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner network */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Unser Netzwerk"
            title="Geprüfte Partner als Fundament"
            subtitle="Unser Partnernetzwerk ist das Herzstück von MEINEDIENSTLEISTUNGEN. Jeder Partner durchläuft ein strukturiertes Aufnahmeverfahren."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {partnerSteps.map((step) => (
              <div key={step.step} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-left hover:border-[#c0a678]/30 transition-colors">
                <span className="text-4xl font-black text-slate-200 leading-none block mb-4">{step.step}</span>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Lernen Sie uns kennen"
        subline="Sprechen Sie persönlich mit uns über Ihr nächstes Projekt."
        primaryLabel="Kostenlose Erstberatung"
        primaryHref="/kontakt"
        showPhone
      />
    </>
  );
}
