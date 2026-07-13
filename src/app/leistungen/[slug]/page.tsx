import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Cable, Layers, Grid3X3, Package, CheckCircle2, ArrowRight, Phone, ShieldCheck, Clock, FileCheck, Users } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import ProcessSteps from '@/components/sections/ProcessSteps';
import FaqAccordion from '@/components/sections/FaqAccordion';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES, SITE_CONFIG } from '@/lib/constants';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

const iconMap: Record<string, React.ElementType> = {
  cable: Cable,
  layers: Layers,
  grid: Grid3X3,
  package: Package,
};

const colorMap: Record<string, string> = {
  blue: 'bg-blue-600',
  slate: 'bg-slate-700',
  emerald: 'bg-emerald-600',
  amber: 'bg-amber-500',
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/leistungen/${service.slug}` },
  };
}

const serviceBenefits: Record<string, string[]> = {
  kabelverlegung: [
    'Koordination zertifizierter Kabelverlegebetriebe',
    'Planung und Terminierung ohne Ihre Zeitinvestition',
    'Qualitätsprüfung nach VDE-Normen',
    'Dokumentation aller verlegten Kabel und Datenpunkte',
    'Flexible Kapazität: 1 Raum bis zur ganzen Halle',
  ],
  trockenbau: [
    'Koordination zertifizierter Trockenbaubetriebe',
    'Brandschutz-konforme Ausführung mit Dokumentation',
    'Akustik- und Schallschutzplanung eingeschlossen',
    'Abstimmung mit anderen Gewerken durch uns',
    'Einhaltung aller DIN-Normen im Trockenbau',
  ],
  fliesenarbeiten: [
    'Zertifizierte Fliesenleger aus dem Partnernetzwerk',
    'Beratung zu Materialauswahl und Format',
    'Koordination mit Vorarbeiten (Estrich, Abdichtung)',
    'Qualitätskontrolle: Ebenheit, Fugenbreite, Haftung',
    'Gewährleistungsdokumentation inklusive',
  ],
  'lager-logistik': [
    'Qualifiziertes Personal innerhalb von 48 Stunden',
    'Einweisung und Supervision durch uns organisiert',
    'Flexible Kapazitäten für Saisonspitzen',
    'Versichertes Personal, alle compliance-Anforderungen',
    'Regelmäßige Leistungsbewertung und Qualitätssicherung',
  ],
};

const serviceFaqs: Record<string, Array<{ question: string; answer: string }>> = {
  kabelverlegung: [
    { question: 'Arbeiten Sie auch während des laufenden Betriebs?', answer: 'Ja. Wir koordinieren Kabelverlegungsarbeiten auch außerhalb der Betriebszeiten oder in Phasen, die den laufenden Betrieb minimal stören. Die Planung dafür ist Teil unseres Koordinationsprozesses.' },
    { question: 'Welche Arten von Kabeln verlegen Ihre Partner?', answer: 'Unsere Partner sind spezialisiert auf Netzwerkkabel (Cat.6/Cat.7), Glasfaser (LWL), Stromkabel, Datenleitungen und Structured-Cabling-Systeme.' },
    { question: 'Erhalte ich eine Dokumentation aller Datenpunkte?', answer: 'Ja. Teil jedes Projekts ist eine vollständige Kabeldokumentation mit Trassenplänen, Datenpunktlisten und Fotos der verlegten Strukturen.' },
  ],
  trockenbau: [
    { question: 'Übernehmen Sie auch Brandschutzwände?', answer: 'Ja. Unsere Partner sind qualifiziert für Brandschutzwände gemäß F30, F60 und F90 — inklusive vollständiger Dokumentation und Abnahmeunterstützung.' },
    { question: 'Können Sie gleichzeitig mit anderen Gewerken koordinieren?', answer: 'Das ist genau unser Kerngeschäft. Wir stimmen Trockenbauarbeiten mit Elektro, Sanitär, Kabelverlegung und anderen Gewerken ab — Sie haben weiterhin nur einen Ansprechpartner.' },
    { question: 'Wie lange dauert ein typisches Trockenbau-Projekt?', answer: 'Das hängt stark von Umfang und Komplexität ab. Ein einzelner Büroraum: 1–3 Tage. Eine vollständige Büroetage: 3–6 Wochen. Wir erstellen vorab einen verbindlichen Zeitplan.' },
  ],
  fliesenarbeiten: [
    { question: 'Arbeiten Sie auch in Nassbereichen und Bädern?', answer: 'Ja. Unsere Partnerpartner sind für Nassbereiche, Bäder, Duschen und feuchtigkeitsbelastete Industriebereiche qualifiziert — inklusive Abdichtung nach DIN 18534.' },
    { question: 'Können Sie großformatige Fliesen verlegen?', answer: 'Ja. Unsere Partner sind auf moderne Großformatfliesen (ab 60×60 cm bis zu 120×260 cm) spezialisiert — für Böden, Wände und Außenbereiche.' },
    { question: 'Was ist bei der Vorarbeit (Estrich) zu beachten?', answer: 'Wir koordinieren auch die Abstimmung mit Estrichlegen und prüfen die Belegreife, bevor die Fliesen gesetzt werden. Das verhindert Mängel durch feuchten Untergrund.' },
  ],
  'lager-logistik': [
    { question: 'Wie schnell können Sie Personal bereitstellen?', answer: 'Bei kurzfristigen Anfragen stellen wir in der Regel innerhalb von 24–48 Stunden qualifiziertes Personal bereit. Bei geplanten Projekten koordinieren wir längerfristig.' },
    { question: 'Sind die Mitarbeiter versichert und compliance-konform?', answer: 'Ja. Alle koordinierten Mitarbeiter sind sozialversicherungspflichtig beschäftigt, verfügen über notwendige Qualifikationen und sind vollumfänglich versichert.' },
    { question: 'Können Sie auch langfristige Personalkoordination übernehmen?', answer: 'Ja. Neben einmaligen Saisonspitzen koordinieren wir auch dauerhafte Personalunterstützung für Lager und Logistik — flexibel und skalierbar nach Ihrem Bedarf.' },
  ],
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Cable;
  const benefits = serviceBenefits[service.slug] || [];
  const faqs = serviceFaqs[service.slug] || [];

  // Get other services for cross-linking
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  const serviceImages: Record<string, string> = {
    kabelverlegung: '/images/case-studies/logistik-kabel.png',
    trockenbau: '/images/case-studies/trockenbau-buero.png',
    fliesenarbeiten: '/images/case-studies/fliesenarbeiten.png',
    'lager-logistik': '/images/case-studies/lager-logistik.png',
  };

  return (
    <>
      <HeroSection
        variant="compact"
        label={service.title}
        headline={service.headline}
        subheadline={service.description}
        primaryCta={{ label: `${service.shortTitle}-Projekt anfragen`, href: '/kontakt' }}
        secondaryCta={{ label: "So funktioniert's", href: '/so-funktionierts' }}
        backgroundImage={serviceImages[service.slug]}
        lightOverlay={true}
      />

      {/* What we coordinate */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                label="Was wir koordinieren"
                title={`${service.title} — Ihr Leistungsumfang`}
                subtitle="Als Koordinationspartner steuern wir qualifizierte Fachbetriebe für alle Leistungen in diesem Bereich."
                align="left"
              />
              <div className="grid grid-cols-1 gap-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                label="Ihr Mehrwert"
                title="Warum MEINEDIENSTLEISTUNGEN für diesen Bereich?"
                align="left"
              />
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-slate-700">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSteps />

      {/* Guarantees */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Clock, label: '24h Rückmeldung' },
              { icon: ShieldCheck, label: 'Qualitätskontrolle' },
              { icon: FileCheck, label: 'Vollständige Doku' },
              { icon: Users, label: 'Ein Ansprechpartner' },
            ].map((g, i) => (
              <div key={i} className="text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 mx-auto flex items-center justify-center mb-3">
                  <g.icon size={22} />
                </div>
                <div className="font-bold text-sm">{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Häufige Fragen"
              title={`Fragen zu ${service.title}`}
              align="center"
            />
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-slate-100 bg-white overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-semibold text-slate-900 text-sm select-none list-none">
                    {faq.question}
                    <span className="shrink-0 w-6 h-6 rounded-full bg-slate-100 group-open:bg-blue-600 flex items-center justify-center transition-colors text-slate-500 group-open:text-white text-xs font-bold">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center font-bold text-slate-900 mb-8">
            Weitere Leistungsbereiche
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherServices.map((other) => {
              const OtherIcon = iconMap[other.icon] || Cable;
              return (
                <Link
                  key={other.slug}
                  href={`/leistungen/${other.slug}`}
                  className="flex items-center gap-4 bg-white rounded-xl p-5 border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <OtherIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                      {other.title}
                    </div>
                    <div className="text-xs text-slate-500">{other.features[0]}, …</div>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-slate-300 group-hover:text-blue-400 transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20 md:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #060e1a 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            {service.shortTitle}-Projekt anfragen
          </h2>
          <p className="text-slate-300 mb-10 text-lg">
            Kostenlose Erstberatung. Verbindliches Angebot in 1–3 Werktagen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all text-base shadow-lg"
            >
              Jetzt Projekt anfragen
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all text-base"
            >
              <Phone size={18} />
              {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
