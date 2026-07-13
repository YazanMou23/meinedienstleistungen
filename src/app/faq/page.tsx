import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import FaqAccordion from '@/components/sections/FaqAccordion';
import SectionHeading from '@/components/ui/SectionHeading';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { FAQ_ITEMS } from '@/lib/constants';

export const metadata: Metadata = genMeta({
  title: 'FAQ — Häufige Fragen',
  description:
    'Antworten auf die häufigsten Fragen zu MEINEDIENSTLEISTUNGEN: Wie funktioniert die Koordination? Welche Branchen? Was kostet es? Alle Infos hier.',
  path: '/faq',
});

const categories = ['Allgemein', 'Prozess', 'Qualität', 'Preise', 'Branchen'];

export default function FaqPage() {
  return (
    <>
      <HeroSection
        variant="compact"
        label="FAQ"
        headline="Häufige Fragen — ehrliche Antworten"
        subheadline="Hier finden Sie Antworten auf die wichtigsten Fragen zu unserem Koordinationsmodell, unserem Prozess und unseren Leistungen."
        backgroundImage="/images/case-studies/trockenbau-buero.png"
        lightOverlay={true}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const items = FAQ_ITEMS.filter((item) => item.category === category);
            if (items.length === 0) return null;

            return (
              <div key={category} className="mb-14">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                    {category.charAt(0)}
                  </span>
                  {category}
                </h2>
                <FaqAccordion items={items} />
              </div>
            );
          })}

          {/* CTA */}
          <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-10 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Ihre Frage war nicht dabei?
            </h3>
            <p className="text-slate-600 mb-6">
              Sprechen Sie uns direkt an — wir beantworten jede Frage persönlich.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
