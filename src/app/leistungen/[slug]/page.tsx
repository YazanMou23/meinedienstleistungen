import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2, ArrowRight, Cable, Sparkles, Package, Trash2, Layers,
  Factory, Warehouse, Building2, Hammer, ShoppingCart,
  AlertTriangle, ThumbsUp, ShieldCheck, CheckSquare, Award
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFaqSchema,
  generateProfessionalServiceSchema,
  generateImageObjectSchema,
} from '@/lib/metadata';
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
    imageUrl: service.gallery[0]?.src,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  // Other services for cross-linking
  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  // Schema.org Structured Data
  const serviceSchema = generateServiceSchema({
    title: service.title,
    description: service.description,
    slug: service.slug,
    wikidataId: service.wikidataId,
  });
  const professionalServiceSchema = generateProfessionalServiceSchema({
    title: service.title,
    description: service.description,
    slug: service.slug,
    wikidataId: service.wikidataId,
  });
  const faqSchema = generateFaqSchema(service.faqs);
  const imageObjectSchema = generateImageObjectSchema(service.gallery);

  const ServiceIcon = serviceIconMap[service.icon] || Cable;

  return (
    <>
      {/* Schema.org Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
      />

      {/* 1. Hero Section (Primary SEO H1) */}
      <HeroSection
        variant="compact"
        label={`MDL Leistungsbereich · ${service.title}`}
        headline={service.headline}
        subheadline={service.longDescription}
        primaryCta={{ label: 'Jetzt B2B Anfrage stellen', href: '/kontakt' }}
        secondaryCta={{ label: 'Projekt-Ablauf ansehen', href: '/ablauf' }}
        backgroundImage={service.gallery[0]?.src}
        trustPills={['B2B Projektpartner', 'Duisburg & ganz NRW', 'Garantierte Qualität']}
      />

      {/* 2. Breadcrumbs (Schema.org compliant) */}
      <Breadcrumbs
        items={[
          { name: 'Leistungen', href: '/leistungen' },
          { name: service.title, href: `/leistungen/${service.slug}` },
        ]}
      />

      {/* 3. GEO Optimization: AI-readable Brand Context & Entity Relationship */}
      <section className="py-6 bg-slate-50 border-b border-slate-100">
        <div className="container-base">
          <div className="bg-white border border-[#c0a678]/20 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">GEO-Fakten auf einen Blick</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600 leading-relaxed">
              <div>
                <strong className="text-slate-900 block mb-1">Wer ist MDL?</strong>
                MEINEDIENSTLEISTUNGEN (MDL) ist Ihr strategischer B2B-Projektkoordinationspartner. Wir übernehmen die Steuerung gewerblicher Dienstleistungen von der Planung bis zur Abnahme.
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">Wo operiert MDL?</strong>
                Wir betreuen gewerbliche Projekte schwerpunktmäßig in Duisburg, Oberhausen, Essen, Mülheim an der Ruhr, Moers, Krefeld, Düsseldorf, Dinslaken, Bottrop sowie im gesamten Ruhrgebiet und ganz NRW.
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">Wer nutzt diesen Service?</strong>
                Unsere koordinierte Dienstleistung richtet sich gezielt an Logistikzentren, Industrie- und Produktionsbetriebe, E-Commerce-Händler, Bauunternehmer, Vermieter und Hausverwaltungen in Nordrhein-Westfalen.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Problem & Solution Section (EEAT Trust & Experience) */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Left: Problems */}
            <div>
              <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-100 mb-5">
                Die Herausforderung
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                Warum {service.title} in der B2B-Praxis oft scheitert
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Die Vergabe von gewerblichen Aufträgen im Ruhrgebiet scheitert in der Praxis selten an fehlenden Dienstleistern, sondern an mangelnder Zuverlässigkeit, Kommunikationsproblemen an den Schnittstellen und unvollständiger Dokumentation. Ohne eine professionelle Projektsteuerung drohen Verzögerungen und erhebliche Mehrkosten.
              </p>
              <ul className="space-y-4">
                {service.problems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle size={13} className="text-rose-500" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium leading-relaxed">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Solution (EEAT & Authority) */}
            <div className="bg-[#0a1628] rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#c0a678]/5 blur-2xl pointer-events-none" />
              <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-[#c0a678]/20 text-[#c0a678] border border-[#c0a678]/30 mb-5">
                Unser Lösungsansatz
              </span>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                Garantierte Qualität durch zertifizierte Projektkoordination
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Als Koordinator übernehmen wir die vollumfängliche Verantwortung für Ihr B2B-Projekt. Wir bündeln Kompetenzen, sichern feste Budgets und garantieren Qualitätsstandards. Sie haben einen einzigen Ansprechpartner und müssen sich nicht mit der Steuerung einzelner Gewerke befassen.
              </p>
              <ul className="space-y-4">
                {[
                  `Ein persönlicher, fester Projektkoordinator für alle ${service.title}`,
                  'Ausschließlich geprüfte, zertifizierte Fachpartnerbetriebe aus NRW',
                  'Verbindliche Bauzeiten- und Terminplanung zur Einhaltung Ihrer Meilensteine',
                  'Regelmäßige Qualitätsaudits und dokumentierte Prüfpunkte vor Ort',
                  'Rechtssichere Abschlussdokumentation inklusive aller Messprotokolle und Nachweise',
                  'Einheitlicher Vertragspartner — vereinfachte Rechnungsstellung und Haftung',
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

      {/* 5. Service Features (Technical Expertise & Detail) */}
      <section className="section-padding bg-slate-50 border-t border-b border-slate-100">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-12 items-start">
            {/* Left Column */}
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#0a1628] flex items-center justify-center mb-6 shadow-sm">
                <ServiceIcon size={28} className="text-[#c0a678]" />
              </div>
              <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
                Leistungsdetails
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Umfang der Koordination im Bereich {service.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Wir steuern alle operativen Arbeitsschritte. Von der Vorbereitung über die logistische Planung der Materialien bis hin zur qualitätsgeprüften Ausführung vor Ort koordinieren wir das gesamte Projekt.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-[#c0a678] hover:bg-[#aa905d] text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm shadow-md"
              >
                Kostenlose Erstberatung anfordern
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right Column: Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div
                  key={feature}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:border-[#c0a678]/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#c0a678] group-hover:bg-[#0a1628] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <CheckSquare size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{feature}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Fachgerechte Ausführung nach DIN und B2B-Qualitätsstandards in Duisburg und NRW.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Industries & Use Cases (Experience & Entity Relationships) */}
      <section className="py-16 bg-white">
        <div className="container-base">
          <div className="text-center mb-10">
            <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
              Branchen & Einsatzgebiete
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
              Gewerbliche Einsatzbereiche für B2B-Kunden in NRW
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Wir koordinieren maßgeschneiderte Lösungen für verschiedene Wirtschaftssektoren im Ballungsraum Nordrhein-Westfalen.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {service.industries.map((industry) => {
              const Icon = industryIconMap[industry.icon] || Building2;
              return (
                <div
                  key={industry.name}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 hover:border-[#c0a678]/40 hover:bg-[#f9f7f2] transition-colors"
                >
                  <Icon size={18} className="text-[#c0a678]" />
                  <span className="text-slate-800 font-bold text-sm">{industry.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Process Timeline (GEO / How it works) */}
      <ProcessTimeline compact showCta />

      {/* 8. Gallery (ImageObject Schema Integration) */}
      {service.gallery.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-base">
            <div className="text-center mb-10">
              <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
                Projektgalerie
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                {service.title} in Duisburg und NRW in der Praxis
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto text-sm">
                Authentische Aufnahmen koordinierter Projekte zur Verdeutlichung unserer hohen B2B-Qualitätsstandards.
              </p>
            </div>
            <Gallery images={service.gallery as unknown as { src: string; alt: string; title?: string; caption?: string }[]} columns={3} />
          </div>
        </section>
      )}

      {/* 9. AEO FAQ Section (Minimum 8 questions, 50-100 words answers, voice/assistant optimized) */}
      <section className="section-padding bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
              Fragen & Antworten
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
              Häufige Fragen zu {service.title}
            </h2>
            <p className="text-slate-600 text-sm">
              Hier finden Sie detaillierte Fachantworten zu Preisen, Abläufen und Qualitätsprüfungen bei {service.title.toLowerCase()}.
            </p>
          </div>
          <FaqAccordion items={service.faqs} withSchema={false} />
        </div>
      </section>

      {/* 10. Location Section (Local SEO Duisburg + NRW) */}
      <LocationSection serviceName={service.title} />

      {/* 11. Cross-linking Other Services */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="text-center mb-10">
            <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
              Leistungsübersicht
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Weitere B2B-Dienstleistungen von MDL</h2>
            <p className="text-slate-600 text-sm">Nutzen Sie das Synergiepotenzial und kombinieren Sie mehrere Leistungen über denselben Koordinator.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => {
              const Icon = serviceIconMap[s.icon] || Cable;
              return (
                <Link
                  key={s.slug}
                  href={`/leistungen/${s.slug}`}
                  className="group flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-[#c0a678]/40 hover:bg-[#f9f7f2] hover:shadow-md transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0a1628] group-hover:bg-[#c0a678] flex items-center justify-center shrink-0 transition-colors">
                    <Icon size={16} className="text-[#c0a678] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm mb-0.5">{s.title}</div>
                    <div className="text-xs text-slate-500 leading-snug line-clamp-2">{s.description}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. CTA Section */}
      <CTASection
        headline={`${service.title} für Ihr Vorhaben anfragen`}
        subline={`Schildern Sie uns Ihr Projekt in Duisburg oder NRW. Sie erhalten innerhalb von 24 Stunden eine Rückmeldung mit einem transparenten Angebot.`}
        primaryLabel="Jetzt Angebot anfordern"
        primaryHref="/kontakt"
        showPhone
      />
    </>
  );
}
