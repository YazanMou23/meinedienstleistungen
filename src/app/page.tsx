import { Metadata } from 'next';
import { Shield, Clock, Users, FileCheck, AlertTriangle, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import TrustMetrics from '@/components/sections/TrustMetrics';
import ServiceGrid from '@/components/sections/ServiceGrid';
import ProcessSteps from '@/components/sections/ProcessSteps';
import TestimonialSlider from '@/components/sections/TestimonialSlider';
import CaseStudyPreview from '@/components/sections/CaseStudyPreview';
import FaqAccordion from '@/components/sections/FaqAccordion';
import SectionHeading from '@/components/ui/SectionHeading';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata: Metadata = genMeta({
  title: 'Projekt-Koordinationspartner für Gewerbe & Industrie',
  description:
    'MEINEDIENSTLEISTUNGEN — Ein Ansprechpartner koordiniert Ihre Projekte in Kabelverlegung, Trockenbau, Fliesen und Logistik. Geprüfte Partner. Garantierte Qualität.',
  path: '/',
});

const painPoints = [
  {
    problem: 'Subunternehmer tauchen nicht auf',
    solution: 'Geprüfte Partner mit nachgewiesener Zuverlässigkeit',
    icon: XCircle,
    solIcon: CheckCircle2,
  },
  {
    problem: 'Qualität schwankt von Auftrag zu Auftrag',
    solution: 'Dokumentierte Qualitätskontrolle bei jedem Projekt',
    icon: AlertTriangle,
    solIcon: Shield,
  },
  {
    problem: '10 Anbieter zu managen kostet enorm viel Zeit',
    solution: 'Ein Ansprechpartner koordiniert alles für Sie',
    icon: XCircle,
    solIcon: Users,
  },
  {
    problem: 'Termine werden regelmäßig nicht eingehalten',
    solution: 'Verbindliche Terminplanung mit Meilenstein-Tracking',
    icon: AlertTriangle,
    solIcon: Clock,
  },
  {
    problem: 'Fehlende Dokumentation bei der Abnahme',
    solution: 'Lückenlose Berichte, Fotos und Unterlagen inklusive',
    icon: XCircle,
    solIcon: FileCheck,
  },
  {
    problem: 'Schuldfragen bei Mängeln — niemand fühlt sich verantwortlich',
    solution: 'Klare Verantwortung: ein Vertragspartner, ein Ansprechpartner',
    icon: AlertTriangle,
    solIcon: CheckCircle2,
  },
];

const valueProps = [
  {
    icon: Users,
    title: 'Ein Ansprechpartner',
    desc: 'Kein Vendor-Management-Chaos. Wir übernehmen die gesamte Koordination.',
  },
  {
    icon: Shield,
    title: 'Geprüfte Qualität',
    desc: 'Alle Partner sind zertifiziert, versichert und nach definierten Standards bewertet.',
  },
  {
    icon: Clock,
    title: 'Terminzuverlässigkeit',
    desc: 'Verbindliche Meilensteine, Fortschrittsberichte und Termingarantie.',
  },
  {
    icon: FileCheck,
    title: 'Lückenlose Dokumentation',
    desc: 'Vollständige Projektberichte, Fotos und Unterlagen bei Abnahme.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection
        variant="full"
        label="Ihr Projekt-Koordinationspartner"
        headline="Sie haben ein Projekt. Wir machen den Rest."
        subheadline="Ein Ansprechpartner koordiniert Ihr gesamtes Projekt — von der Partnerauswahl über Terminplanung und Qualitätskontrolle bis zur Abnahme. Für Kabelverlegung, Trockenbau, Fliesenarbeiten und Lager & Logistik."
        primaryCta={{ label: 'Projekt anfragen', href: '/kontakt' }}
        secondaryCta={{ label: "So funktioniert's", href: '/so-funktionierts' }}
        showPhone
      />

      {/* 2. Trust Metrics */}
      <TrustMetrics />

      {/* 3. Problem → Solution Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Kennen Sie das?"
            title="Typische Probleme — und wie wir sie lösen"
            subtitle="Die häufigsten Frustrationen bei der Subunternehmer-Koordination — und warum MEINEDIENSTLEISTUNGEN das anders macht."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {painPoints.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Problem */}
                  <div className="flex-1 p-5 border-b sm:border-b-0 sm:border-r border-slate-100">
                    <div className="flex items-start gap-3">
                      <item.icon size={18} className="text-rose-400 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-600">{item.problem}</p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="flex items-center justify-center p-2 sm:px-3">
                    <ArrowRight size={16} className="text-blue-400 rotate-90 sm:rotate-0 shrink-0" />
                  </div>
                  {/* Solution */}
                  <div className="flex-1 p-5 bg-blue-50/50">
                    <div className="flex items-start gap-3">
                      <item.solIcon size={18} className="text-blue-600 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-700 font-medium">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Value Props */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {valueProps.map((vp, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 mx-auto flex items-center justify-center">
                  <vp.icon size={22} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{vp.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{vp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Services */}
      <ServiceGrid />

      {/* 6. Process (compact 3-step preview) */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="So arbeiten wir"
            title="Vom Erstgespräch bis zur Abnahme"
            subtitle="Sechs klar definierte Phasen — Sie behalten den Überblick, wir übernehmen die Arbeit."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { num: '01', title: 'Sie stellen die Anfrage', desc: 'Per Formular, Telefon oder E-Mail. Beschreiben Sie Ihr Projekt in wenigen Sätzen.' },
              { num: '02', title: 'Wir koordinieren alles', desc: 'Wir analysieren, wählen Partner aus, planen Termine und überwachen die Umsetzung.' },
              { num: '03', title: 'Sie nehmen ab', desc: 'Abnahme mit vollständiger Dokumentation — Ihr Projekt ist fertig. Kein Stress, keine Überraschungen.' },
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm relative">
                <span className="text-6xl font-black text-slate-100 leading-none absolute top-4 right-5">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-3 relative">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed relative">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/so-funktionierts"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Vollständigen Prozess ansehen
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Case Studies */}
      <CaseStudyPreview />

      {/* 8. Testimonials */}
      <TestimonialSlider />

      {/* 9. FAQ Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Häufige Fragen"
            title="Antworten auf Ihre Fragen"
            subtitle="Alles, was Sie wissen müssen — bevor Sie uns kontaktieren."
            align="center"
          />
          <FaqAccordion maxItems={4} />
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors"
            >
              Alle Fragen ansehen
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a1628 0%, #060e1a 50%, #0a1628 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(192,166,120,0.15) 0%, transparent 60%)`,
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Bereit für Ihr nächstes Projekt?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Sprechen Sie mit uns. Kostenlose Erstberatung, unverbindliches Angebot — und ein
            Ansprechpartner, der alles in die Hand nimmt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 text-base"
            >
              Jetzt Projekt anfragen
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/so-funktionierts"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 font-semibold px-10 py-5 rounded-xl transition-all duration-200 text-base"
            >
              So funktioniert&apos;s
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
