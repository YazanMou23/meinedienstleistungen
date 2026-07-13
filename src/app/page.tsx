import { Metadata } from 'next';
import { generateMetadata as genMeta, generateLocalBusinessSchema } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import HeroSection from '@/components/sections/HeroSection';
import TrustSection from '@/components/sections/TrustSection';
import ServiceGrid from '@/components/sections/ServiceGrid';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import FaqAccordion from '@/components/sections/FaqAccordion';
import LocationSection from '@/components/sections/LocationSection';
import CTASection from '@/components/sections/CTASection';
import { GENERAL_FAQS, SITE_CONFIG as SC } from '@/lib/constants';

export const metadata: Metadata = genMeta({
  title: `${SITE_CONFIG.name} — B2B Projektkoordination in Duisburg & NRW`,
  description:
    'Ihr B2B Projektkoordinationspartner in Duisburg und NRW. Kabelzieharbeiten, Reinigungsdienst, Lagerlogistik, Entrümpelung & Innenausbau — koordiniert, termingerecht, qualitätsgesichert.',
  path: '/',
});

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      {/* Schema.org LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* 1. Hero */}
      <HeroSection
        variant="full"
        label="B2B Projektkoordination · Duisburg & NRW"
        headline="Ein Ansprechpartner für Ihre Projekte in Duisburg und NRW"
        subheadline="Kabelzieharbeiten, Reinigungsdienst, Lagerlogistik, Entrümpelung und Innenausbau — koordiniert, qualitätsgesichert und termingerecht. Sie haben ein Projekt, wir machen den Rest."
        primaryCta={{ label: 'Jetzt Projekt anfragen', href: '/kontakt' }}
        secondaryCta={{ label: 'Leistungen entdecken', href: '/leistungen' }}
        backgroundImage="/images/case-studies/logistik-kabel.png"
        trustPills={[
          'B2B Projektpartner',
          'Duisburg & NRW',
          '24h Rückmeldung',
          'Geprüfte Fachpartner',
          'Dokumentierte Qualität',
        ]}
      />

      {/* 2. Trust Pillars */}
      <TrustSection />

      {/* 3. Service Grid */}
      <ServiceGrid />

      {/* 4. Process Preview */}
      <ProcessTimeline compact showCta />

      {/* 5. FAQ — AEO/GEO */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
              Häufige Fragen
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Alles über MDL — schnell erklärt
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Antworten auf die häufigsten Fragen zur Projektkoordination durch MEINEDIENSTLEISTUNGEN.
            </p>
          </div>
          <FaqAccordion items={GENERAL_FAQS} withSchema />
        </div>
      </section>

      {/* 6. Location */}
      <LocationSection />

      {/* 7. CTA */}
      <CTASection
        headline="Sprechen Sie mit uns — unverbindlich & kostenlos"
        subline="Schildern Sie uns Ihr Projekt. Wir melden uns innerhalb von 24 Stunden mit einer ersten Einschätzung."
        primaryLabel="Jetzt Projekt anfragen"
        primaryHref="/kontakt"
        showPhone
      />
    </>
  );
}
