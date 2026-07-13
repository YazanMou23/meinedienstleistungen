import { Metadata } from 'next';
import Link from 'next/link';
import { MessageSquare, Search, Users, HardHat, ShieldCheck, CheckCircle2, ArrowRight, Phone, Clock, FileCheck, Shield } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = genMeta({
  title: "So funktioniert's — Unser Koordinationsprozess",
  description:
    'Vom Erstgespräch bis zur Abnahme: Erfahren Sie, wie MEINEDIENSTLEISTUNGEN Ihr Projekt koordiniert. Sechs klare Phasen, ein Ansprechpartner, null Überraschungen.',
  path: '/so-funktionierts',
});

const phases = [
  {
    number: '01',
    title: 'Anfrage & Erstgespräch',
    icon: MessageSquare,
    client: 'Sie schildern Ihr Projekt kurz — per Formular, E-Mail oder Telefon.',
    we: 'Wir melden uns innerhalb von 24 Stunden und stellen die richtigen Fragen, um Ihren Bedarf vollständig zu verstehen.',
    duration: '< 24 Stunden',
  },
  {
    number: '02',
    title: 'Analyse & Angebotserstellung',
    icon: Search,
    client: 'Sie stellen uns ggf. Pläne oder Unterlagen zur Verfügung.',
    we: 'Wir analysieren Umfang, Anforderungen und Zeitrahmen — und erstellen ein transparentes Festpreisangebot.',
    duration: '1–3 Werktage',
  },
  {
    number: '03',
    title: 'Partnerauswahl & Planung',
    icon: Users,
    client: 'Sie genehmigen das Angebot und bestätigen den Projektstart.',
    we: 'Wir wählen die geeigneten Fachpartner aus unserem geprüften Netzwerk, koordinieren Verfügbarkeiten und erstellen einen verbindlichen Projektplan.',
    duration: '3–7 Werktage',
  },
  {
    number: '04',
    title: 'Umsetzung & Koordination',
    icon: HardHat,
    client: 'Sie erhalten regelmäßige Statusupdates von Ihrem Projektkoordinator.',
    we: 'Wir steuern alle Partner vor Ort, halten Termine ein, lösen Probleme sofort — und halten Sie auf dem Laufenden.',
    duration: 'Projektabhängig',
  },
  {
    number: '05',
    title: 'Qualitätskontrolle',
    icon: ShieldCheck,
    client: 'Optional: Sie begutachten Zwischenstände nach Meilensteinen.',
    we: 'Wir dokumentieren jeden Fortschritt, prüfen Qualität nach definierten Standards und sorgen für sofortige Nachbesserung bei Abweichungen.',
    duration: 'Laufend',
  },
  {
    number: '06',
    title: 'Abnahme & Dokumentation',
    icon: CheckCircle2,
    client: 'Sie nehmen das Projekt gemeinsam mit uns ab.',
    we: 'Wir übergeben vollständige Dokumentation: Abschlussberichte, Fotodokumentation, Gewährleistungsunterlagen — alles in Ihren Händen.',
    duration: '1 Tag',
  },
];

const guarantees = [
  {
    icon: Clock,
    title: '24h Rückmeldung',
    desc: 'Auf jede Anfrage antworten wir innerhalb von 24 Stunden.',
  },
  {
    icon: Shield,
    title: 'Qualitätsversprechen',
    desc: 'Dokumentierte Qualitätskontrolle bei jedem Projektschritt.',
  },
  {
    icon: FileCheck,
    title: 'Vollständige Dokumentation',
    desc: 'Abschlussbericht, Fotos und Unterlagen inklusive.',
  },
  {
    icon: Users,
    title: 'Ein Ansprechpartner',
    desc: 'Persönlicher Projektkoordinator von Anfang bis Ende.',
  },
];

export default function SoFunktioniertSPage() {
  return (
    <>
      <HeroSection
        variant="compact"
        label="Unser Prozess"
        headline="Vom Erstgespräch bis zur Abnahme — transparent & zuverlässig"
        subheadline="Sechs klar definierte Phasen. Ein Ansprechpartner. Null Überraschungen. So sieht professionelle Projektkoordination aus."
        primaryCta={{ label: 'Jetzt Projekt anfragen', href: '/kontakt' }}
        backgroundImage="/images/case-studies/trockenbau-buero.png"
        lightOverlay={true}
      />

      {/* Guarantees bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {guarantees.map((g, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <g.icon size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{g.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Phase Process Detail */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Sechs Phasen"
            title="Ihr Projekt — Schritt für Schritt erklärt"
            subtitle="Was Sie tun müssen und was wir übernehmen — in jeder Phase."
            align="center"
          />

          <div className="space-y-6">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-0">
                  {/* Phase header */}
                  <div className="bg-blue-600 text-white p-6 md:p-8 flex flex-col justify-center items-center min-w-[120px]">
                    <phase.icon size={28} className="mb-3" />
                    <span className="text-3xl font-black">{phase.number}</span>
                    <span className="text-xs text-blue-200 mt-1 text-center">{phase.duration}</span>
                  </div>
                  {/* Client column */}
                  <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-100">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Ihr Aufwand
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-3">{phase.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{phase.client}</p>
                  </div>
                  {/* Our column */}
                  <div className="p-6 md:p-8 bg-blue-50/30">
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                      Was wir tun
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">{phase.we}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this model works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Das Koordinationsmodell"
            title="Warum ein Koordinationspartner besser ist"
            subtitle="Der klassische Weg — mehrere Subunternehmer selbst managen — kostet Zeit, Nerven und Geld."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border-2 border-rose-100 bg-rose-50/30 p-8">
              <h3 className="font-bold text-rose-700 mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 text-xs font-bold flex items-center justify-center">✕</span>
                Ohne MEINEDIENSTLEISTUNGEN
              </h3>
              <ul className="space-y-3">
                {[
                  'Mehrere Subunternehmer eigenständig suchen',
                  'Unterschiedliche Qualitätsstandards',
                  'Koordinationsaufwand bindet eigene Ressourcen',
                  'Kein einheitlicher Ansprechpartner',
                  'Schuldfragen bei Mängeln ungeklärt',
                  'Lückenhafte oder fehlende Dokumentation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-rose-400 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-blue-100 bg-blue-50/30 p-8">
              <h3 className="font-bold text-blue-700 mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center">✓</span>
                Mit MEINEDIENSTLEISTUNGEN
              </h3>
              <ul className="space-y-3">
                {[
                  'Geprüfte Partner aus dem Netzwerk — sofort verfügbar',
                  'Einheitliche Qualitätsstandards und Kontrolle',
                  'Sie konzentrieren sich auf Ihr Kerngeschäft',
                  'Persönlicher Projektkoordinator, jederzeit erreichbar',
                  'Klare Verantwortung — wir stehen dafür gerade',
                  'Vollständige Dokumentation bei der Abnahme',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 md:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #060e1a 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Überzeugt? Starten Sie Ihr Projekt.
          </h2>
          <p className="text-slate-300 mb-10 text-lg">
            Kostenlose Erstberatung — wir melden uns innerhalb von 24 Stunden.
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
