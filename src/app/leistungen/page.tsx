import { Metadata } from 'next';
import Link from 'next/link';
import { Cable, Sparkles, Package, Trash2, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = genMeta({
  title: 'Unsere Leistungen — Fünf Branchen, ein Koordinationspartner',
  description:
    'Kabelzieharbeiten, Reinigungsdienst, Lagerlogistik, Entrümpelung & Entsorgung und Innenausbau & Trockenbau — MEINEDIENSTLEISTUNGEN koordiniert qualitätsgesicherte B2B-Projekte in Duisburg und NRW.',
  path: '/leistungen',
});

const iconMap: Record<string, React.ElementType> = {
  cable: Cable, sparkles: Sparkles, package: Package, 'trash-2': Trash2, layers: Layers,
};

const crossServiceBenefits = [
  'Qualitätskontrolle nach definierten Standards',
  'Verbindliche Terminplanung mit Meilenstein-Tracking',
  'Lückenlose Projektdokumentation bei Abnahme',
  'Persönlicher Projektkoordinator — ein Ansprechpartner',
  'Konsolidierte Abrechnung über einen Vertragspartner',
  'Absicherung durch Partnerversicherungen',
];

export default function LeistungenPage() {
  return (
    <>
      <HeroSection
        variant="compact"
        label="Leistungsbereiche"
        headline="Fünf Branchen. Ein Koordinationspartner."
        subheadline="MEINEDIENSTLEISTUNGEN koordiniert qualitätsgesicherte B2B-Projekte in fünf Leistungsbereichen — mit einem Ansprechpartner und garantierter Umsetzungsqualität in Duisburg und NRW."
        primaryCta={{ label: 'Projekt anfragen', href: '/kontakt' }}
        secondaryCta={{ label: 'Ablauf ansehen', href: '/ablauf' }}
        backgroundImage="/images/case-studies/logistik-kabel.png"
        lightOverlay
      />

      {/* Services list */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <SectionHeading
            label="Unsere Leistungen"
            title="Was wir für Sie koordinieren"
            subtitle="Jeder Bereich mit geprüften Fachpartnern, definierten Qualitätsstandards und einem persönlichen Projektkoordinator."
            align="center"
          />

          <div className="space-y-6">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Cable;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.slug}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-0 ${
                      !isEven ? 'lg:grid-cols-[2fr_1fr]' : ''
                    }`}
                  >
                    {/* Color panel */}
                    <div
                      className={`p-8 md:p-10 flex flex-col justify-center ${
                        isEven ? '' : 'lg:order-last'
                      }`}
                      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #060e1a 100%)' }}
                    >
                      <div className="w-14 h-14 rounded-xl bg-[#c0a678]/20 flex items-center justify-center mb-5">
                        <Icon size={28} className="text-[#c0a678]" />
                      </div>
                      <h2 className="text-2xl font-black text-white mb-3">{service.title}</h2>
                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link
                        href={`/leistungen/${service.slug}`}
                        className="inline-flex items-center gap-2 bg-[#c0a678] hover:bg-[#aa905d] text-white font-bold px-6 py-3 rounded-xl transition-all text-sm w-fit"
                      >
                        Mehr erfahren
                        <ArrowRight size={16} />
                      </Link>
                    </div>

                    {/* Features panel */}
                    <div className="p-8 md:p-10">
                      <h3 className="font-bold text-slate-500 mb-5 text-xs uppercase tracking-wider">
                        Was wir koordinieren
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2.5">
                            <CheckCircle2 size={16} className="text-[#c0a678] shrink-0" />
                            <span className="text-slate-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={`/leistungen/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c0a678] hover:text-[#aa905d] transition-colors"
                      >
                        Alle Details zu {service.shortTitle}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-service benefits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Bei jeder Leistung inklusive"
            title="Was Sie bei jedem Projekt erhalten"
            subtitle="Diese Koordinationsleistungen sind in jedem Projekt enthalten — unabhängig vom Leistungsbereich."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {crossServiceBenefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-blue-100 shadow-sm"
              >
                <CheckCircle2 size={18} className="text-[#c0a678] shrink-0" />
                <span className="text-slate-700 text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Welche Leistung benötigen Sie?"
        subline="Erzählen Sie uns von Ihrem Projekt — wir finden die richtige Lösung."
        primaryLabel="Jetzt Projekt anfragen"
        primaryHref="/kontakt"
        showPhone
      />
    </>
  );
}
