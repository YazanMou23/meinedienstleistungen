import { Metadata } from 'next';
import { Briefcase, ChevronRight } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import { generateMetadata as genMeta } from '@/lib/metadata';
import Link from 'next/link';

export const metadata: Metadata = genMeta({
  title: 'Karriere bei MDL — Werden Sie Teil unseres Teams',
  description:
    'Wir sind auf der Suche nach motivierten Mitarbeitern in Duisburg und NRW. Offene Stellen: Lagerhelfer, Kabelzieharbeiter, Entrümpelungsmitarbeiter, Reinigungskraft.',
  path: '/karriere',
});

const jobOpenings = [
  { 
    title: 'Lagerhelfer', 
    desc: 'Unterstützung bei der Warenannahme, Kommissionierung und allgemeinen Lagertätigkeiten.',
  },
  { 
    title: 'Kabelzieharbeiter', 
    desc: 'Zuverlässiger Kabelzug für B2B-Projekte im gewerblichen und industriellen Bereich.',
  },
  { 
    title: 'Entrümpelungsmitarbeiter', 
    desc: 'Tatkräftige Unterstützung bei gewerblichen Räumungen und Entsorgungsarbeiten.',
  },
  { 
    title: 'Reinigungskraft', 
    desc: 'Professionelle Unterhalts- und Baureinigung für unsere B2B-Kunden in NRW.',
  },
];

export default function KarrierePage() {
  return (
    <>
      <HeroSection
        variant="compact"
        label="Karriere bei MDL"
        headline="Komm in unser Team"
        subheadline="Wir wachsen weiter und suchen motivierte Mitarbeiter für unsere Projekte in Duisburg und ganz NRW."
        lightOverlay
      />

      <section className="section-padding bg-slate-50">
        <div className="container-base">
          <SectionHeading
            label="Offene Stellen"
            title="Wir sind offen für neue Talente"
            subtitle="Aktuell suchen wir Verstärkung in den folgenden Bereichen:"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
            {jobOpenings.map((job) => (
              <div key={job.title} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:border-[#c0a678]/30 hover:shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0a1628] group-hover:bg-[#c0a678] flex items-center justify-center mb-5 transition-colors">
                    <Briefcase size={22} className="text-[#c0a678] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl mb-3">{job.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{job.desc}</p>
                </div>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 text-[#c0a678] font-semibold text-sm group-hover:text-[#aa905d] transition-colors"
                >
                  Jetzt bewerben
                  <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Bereit für den nächsten Schritt?"
        subline="Sende uns deine Unterlagen oder melde dich telefonisch bei uns für ein erstes Kennenlernen."
        primaryLabel="Jetzt Kontakt aufnehmen"
        primaryHref="/kontakt"
        showPhone
      />
    </>
  );
}
