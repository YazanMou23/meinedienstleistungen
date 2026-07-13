import { Metadata } from 'next';
import Link from 'next/link';
import { BadgeCheck, Clock, Tag, ArrowRight } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import TestimonialSlider from '@/components/sections/TestimonialSlider';
import SectionHeading from '@/components/ui/SectionHeading';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { CASE_STUDIES, SERVICES } from '@/lib/constants';

export const metadata: Metadata = genMeta({
  title: 'Referenzprojekte — Erfolgsgeschichten unserer Kunden',
  description:
    'Projekte, die für sich sprechen: Referenzen aus Kabelverlegung, Trockenbau, Fliesenarbeiten und Lager & Logistik. Termingerecht, qualitätsgesichert, dokumentiert.',
  path: '/referenzen',
});

const allIndustries = ['Alle', ...SERVICES.map((s) => s.title)];

export default function ReferenzenPage() {
  return (
    <>
      <HeroSection
        variant="compact"
        label="Referenzprojekte"
        headline="Projekte, die für sich sprechen"
        subheadline="Echte Koordinationsleistung. Messbare Ergebnisse. Zufriedene Kunden aus vier Branchen."
        primaryCta={{ label: 'Ähnliches Projekt besprechen', href: '/kontakt' }}
        backgroundImage="/images/case-studies/logistik-kabel.png"
        lightOverlay={true}
      />

      {/* Stats bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '120+', label: 'Abgeschlossene Projekte' },
              { value: '100%', label: 'Qualitätsabnahmen' },
              { value: '4', label: 'Branchen' },
              { value: '40+', label: 'Zufriedene Kunden' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Unsere Projekte"
            title="Fallstudien aus der Praxis"
            subtitle="Jedes Projekt zeigt, wie MEINEDIENSTLEISTUNGEN Koordination, Qualität und Termine zusammenbringt."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((study) => (
              <Link
                key={study.slug}
                href={`/referenzen/${study.slug}`}
                className="group block rounded-2xl overflow-hidden border border-slate-100 bg-white hover:border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Image area */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-5">
                    <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      <BadgeCheck size={12} />
                      {study.industry}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>

                  {/* Metric */}
                  <div className="flex items-center gap-2 mb-4 p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
                    <BadgeCheck size={16} className="text-emerald-600 shrink-0" />
                    <span className="text-sm font-semibold text-emerald-800">{study.metric}</span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-5">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {study.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Tag size={12} />
                      {study.scope}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                    Fallstudie lesen
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm mb-4">
              Weitere Projekte werden laufend hinzugefügt.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-sm"
            >
              Ihr Projekt könnte das nächste sein
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <TestimonialSlider />
    </>
  );
}
