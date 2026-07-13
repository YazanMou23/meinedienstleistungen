import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import CTASection from '@/components/sections/CTASection';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = genMeta({
  title: "Ablauf — Vom Erstgespräch bis zur Abnahme",
  description:
    'So koordiniert MEINEDIENSTLEISTUNGEN Ihr Projekt: Sieben klare Phasen, ein Ansprechpartner, null Überraschungen. Transparent und termingerecht in Duisburg und NRW.',
  path: '/ablauf',
});

const guarantees = [
  { emoji: '⏱', title: '24h Rückmeldung', desc: 'Auf jede Anfrage antworten wir innerhalb von 24 Stunden.' },
  { emoji: '🛡', title: 'Qualitätsversprechen', desc: 'Dokumentierte Qualitätskontrolle bei jedem Projektschritt.' },
  { emoji: '📋', title: 'Vollständige Dokumentation', desc: 'Abschlussbericht, Fotos und Unterlagen inklusive.' },
  { emoji: '👤', title: 'Ein Ansprechpartner', desc: 'Persönlicher Projektkoordinator von Anfang bis Ende.' },
];

const comparison = {
  without: [
    'Mehrere Subunternehmer eigenständig suchen',
    'Unterschiedliche Qualitätsstandards',
    'Koordinationsaufwand bindet eigene Ressourcen',
    'Kein einheitlicher Ansprechpartner',
    'Schuldfragen bei Mängeln ungeklärt',
    'Lückenhafte oder fehlende Dokumentation',
  ],
  with: [
    'Geprüfte Partner aus dem Netzwerk — sofort verfügbar',
    'Einheitliche Qualitätsstandards und Kontrolle',
    'Sie konzentrieren sich auf Ihr Kerngeschäft',
    'Persönlicher Projektkoordinator, jederzeit erreichbar',
    'Klare Verantwortung — wir stehen dafür gerade',
    'Vollständige Dokumentation bei der Abnahme',
  ],
};

export default function AblaufPage() {
  return (
    <>
      <HeroSection
        variant="compact"
        label="Unser Prozess"
        headline="Vom Erstgespräch bis zur Abnahme — transparent & zuverlässig"
        subheadline="Sieben klar definierte Schritte. Ein Ansprechpartner. Null Überraschungen. So sieht professionelle Projektkoordination aus."
        primaryCta={{ label: 'Jetzt Projekt anfragen', href: '/kontakt' }}
        backgroundImage="/images/case-studies/trockenbau-buero.png"
        lightOverlay
      />

      {/* Guarantees bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-base py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {guarantees.map((g) => (
              <div key={g.title} className="flex items-start gap-3">
                <div className="text-2xl shrink-0">{g.emoji}</div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{g.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Step Process */}
      <ProcessTimeline compact={false} showCta={false} />

      {/* Comparison: Without vs. With MDL */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
              Das Koordinationsmodell
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
              Warum ein Koordinationspartner besser ist
            </h2>
            <p className="text-slate-600">
              Der klassische Weg — mehrere Subunternehmer selbst managen — kostet Zeit, Nerven und Geld.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Without */}
            <div className="rounded-2xl border-2 border-rose-100 bg-rose-50/30 p-8">
              <h3 className="font-bold text-rose-700 mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 text-xs font-bold flex items-center justify-center">✕</span>
                Ohne MEINEDIENSTLEISTUNGEN
              </h3>
              <ul className="space-y-3">
                {comparison.without.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-rose-400 mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div className="rounded-2xl border-2 border-[#c0a678]/30 bg-[#f9f7f2] p-8">
              <h3 className="font-bold text-[#aa905d] mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#c0a678]/20 text-[#c0a678] text-xs font-bold flex items-center justify-center">✓</span>
                Mit MEINEDIENSTLEISTUNGEN
              </h3>
              <ul className="space-y-3">
                {comparison.with.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                    <span className="text-[#c0a678] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Überzeugt? Starten Sie Ihr Projekt."
        subline="Kostenlose Erstberatung — wir melden uns innerhalb von 24 Stunden."
        primaryLabel="Jetzt Projekt anfragen"
        primaryHref="/kontakt"
        showPhone
      />
    </>
  );
}
