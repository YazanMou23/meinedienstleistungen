import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2, ArrowRight, Cable, Sparkles, Package, Trash2, Layers,
  Factory, Warehouse, Building2, Hammer, ShoppingCart,
  AlertTriangle, ThumbsUp,
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { generateMetadata as genMeta, generateServiceSchema, generateFaqSchema } from '@/lib/metadata';
import HeroSection from '@/components/sections/HeroSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Gallery from '@/components/sections/Gallery';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import FaqAccordion from '@/components/sections/FaqAccordion';
import LocationSection from '@/components/sections/LocationSection';
import CTASection from '@/components/sections/CTASection';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Icon maps
const serviceIconMap: Record<string, React.ElementType> = {
  cable: Cable, sparkles: Sparkles, package: Package, 'trash-2': Trash2, layers: Layers,
};
const industryIconMap: Record<string, React.ElementType> = {
  factory: Factory, warehouse: Warehouse, building: Building2, hammer: Hammer,
  'shopping-cart': ShoppingCart,
};

// Generate static params for all service slugs
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return genMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/leistungen/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  // Other services for cross-linking
  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  // Schema.org
  const serviceSchema = generateServiceSchema({
    title: service.title,
    description: service.description,
    slug: service.slug,
  });
  const faqSchema = generateFaqSchema(service.faqs);

  const ServiceIcon = serviceIconMap[service.icon] || Cable;

  return (
    <>
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero */}
      <HeroSection
        variant="compact"
        label={service.title}
        headline={service.headline}
        subheadline={service.longDescription}
        primaryCta={{ label: 'Jetzt Projekt anfragen', href: '/kontakt' }}
        secondaryCta={{ label: 'Ablauf ansehen', href: '/ablauf' }}
        backgroundImage={service.gallery[0]?.src}
        trustPills={['24h Rückmeldung', 'Geprüfte Partner', 'Duisburg & NRW']}
      />

      {/* 2. Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Leistungen', href: '/leistungen' },
          { name: service.title, href: `/leistungen/${service.slug}` },
        ]}
      />

      {/* 3. Problem — Solution Section */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            {/* Problems */}
            <div>
              <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-100 mb-5">
                Die Herausforderung
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                Warum {service.title} ohne den richtigen Partner schwierig ist
              </h2>
              <ul className="space-y-4">
                {service.problems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle size={13} className="text-rose-500" />
                    </div>
                    <span className="text-slate-600 text-sm leading-relaxed">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-[#0a1628] rounded-2xl p-8 md:p-10 text-white">
              <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-[#c0a678]/20 text-[#c0a678] border border-[#c0a678]/30 mb-5">
                MDL löst das
              </span>
              <h3 className="text-xl font-bold text-white mb-6">
                So koordiniert MEINEDIENSTLEISTUNGEN Ihre {service.title}
              </h3>
              <ul className="space-y-4">
                {[
                  `Ein persönlicher Projektkoordinator für alle ${service.title}`,
                  'Nur geprüfte, zertifizierte Fachpartnerbetriebe',
                  'Verbindliche Terminplanung — pünktlich, verlässlich',
                  'Dokumentierte Qualitätskontrolle bei jedem Schritt',
                  'Vollständige Projektdokumentation bei der Abnahme',
                  'Klare Verantwortung — wir stehen für das Ergebnis',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#c0a678] shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service Features */}
      <section className="section-padding bg-slate-50">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
            {/* Left: heading + icon */}
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#0a1628] flex items-center justify-center mb-6">
                <ServiceIcon size={28} className="text-[#c0a678]" />
              </div>
              <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
                Leistungsumfang
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Was wir für Sie koordinieren
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-[#c0a678] hover:bg-[#aa905d] text-white font-bold px-6 py-3 rounded-xl transition-all text-sm shadow-sm"
              >
                Anfrage stellen
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right: feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:border-[#c0a678]/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0a1628] flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-[#c0a678]" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Industries */}
      <section className="py-16 bg-white">
        <div className="container-base">
          <div className="text-center mb-10">
            <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
              Zielgruppen
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
              Für wen sind unsere {service.title} geeignet?
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Wir koordinieren {service.title.toLowerCase()} für Unternehmen aller Größen und Branchen in NRW.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {service.industries.map((industry) => {
              const Icon = industryIconMap[industry.icon] || Building2;
              return (
                <div
                  key={industry.name}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 hover:border-[#c0a678]/40 hover:bg-[#f9f7f2] transition-colors"
                >
                  <Icon size={18} className="text-[#c0a678]" />
                  <span className="text-slate-800 font-medium text-sm">{industry.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Process */}
      <ProcessTimeline compact showCta />

      {/* 7. Gallery */}
      {service.gallery.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-base">
            <div className="text-center mb-10">
              <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
                Galerie
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                {service.title} in der Praxis
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Einblicke in koordinierte Projekte von MEINEDIENSTLEISTUNGEN im Bereich {service.title}.
              </p>
            </div>
            <Gallery images={service.gallery as unknown as { src: string; alt: string; title?: string; caption?: string }[]} columns={3} />
          </div>
        </section>
      )}

      {/* 8. FAQ */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
              Häufige Fragen zu {service.title}
            </h2>
          </div>
          <FaqAccordion items={service.faqs} withSchema={false} />
        </div>
      </section>

      {/* 9. Location */}
      <LocationSection serviceName={service.title} />

      {/* 10. Other Services */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Weitere Leistungen</h2>
            <p className="text-slate-600">Entdecken Sie weitere koordinierte Leistungsbereiche von MDL.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => {
              const Icon = serviceIconMap[s.icon] || Cable;
              return (
                <Link
                  key={s.slug}
                  href={`/leistungen/${s.slug}`}
                  className="group flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-[#c0a678]/40 hover:bg-[#f9f7f2] hover:shadow-sm transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0a1628] group-hover:bg-[#c0a678] flex items-center justify-center shrink-0 transition-colors">
                    <Icon size={16} className="text-[#c0a678] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm mb-0.5">{s.title}</div>
                    <div className="text-xs text-slate-500 leading-snug line-clamp-2">{s.description}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. CTA */}
      <CTASection
        headline={`${service.title} koordiniert anfragen`}
        subline="Kostenlose Erstberatung. Wir melden uns innerhalb von 24 Stunden mit einem verbindlichen Angebot."
        primaryLabel="Jetzt anfragen"
        primaryHref="/kontakt"
        showPhone
      />
    </>
  );
}
