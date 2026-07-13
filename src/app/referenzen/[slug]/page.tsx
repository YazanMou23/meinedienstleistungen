import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, BadgeCheck, Clock, Tag, Building2, MapPin } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { CASE_STUDIES } from '@/lib/constants';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);
  if (!study) return {};
  return genMeta({
    title: study.title,
    description: `Fallstudie: ${study.title}. ${study.metric} — koordiniert durch MEINEDIENSTLEISTUNGEN.`,
    path: `/referenzen/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!study) {
    notFound();
  }

  const related = CASE_STUDIES.filter((cs) => cs.slug !== slug).slice(0, 2);

  return (
    <>
      <HeroSection
        variant="compact"
        label={study.industry}
        headline={study.title}
        subheadline={`Koordiniert durch MEINEDIENSTLEISTUNGEN — ${study.metric}`}
        primaryCta={{ label: 'Ähnliches Projekt anfragen', href: '/kontakt' }}
        backgroundImage={study.image}
        lightOverlay={true}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/referenzen"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Zurück zu allen Referenzen
          </Link>

          {/* Quick facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Building2, label: 'Auftraggeber', value: study.client },
              { icon: Clock, label: 'Projektdauer', value: study.duration },
              { icon: Tag, label: 'Umfang', value: study.scope },
              { icon: BadgeCheck, label: 'Ergebnis', value: study.metric },
            ].map((fact, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <fact.icon size={16} className="text-blue-600" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {fact.label}
                  </span>
                </div>
                <div className="font-semibold text-slate-900 text-sm">{fact.value}</div>
              </div>
            ))}
          </div>

          {/* Case Study Image */}
          <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden mb-12 border border-slate-100 shadow-sm bg-slate-100">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key metric highlight */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 mb-16 text-center">
            <BadgeCheck size={32} className="text-emerald-600 mx-auto mb-3" />
            <div className="text-2xl font-black text-emerald-800 mb-2">{study.metric}</div>
            <p className="text-emerald-700 text-sm">{study.metricDetail}</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Die Herausforderung</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{study.challenge}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Unsere Lösung</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{study.solution}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Das Ergebnis</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{study.result}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ähnliches Projekt geplant?
            </h3>
            <p className="text-slate-300 mb-6">
              Lassen Sie uns über Ihr Projekt sprechen — kostenlos und unverbindlich.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Jetzt Projekt anfragen
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="font-bold text-slate-900 text-xl mb-6">Weitere Referenzprojekte</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/referenzen/${rel.slug}`}
                    className="group flex items-center gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all"
                  >
                    <div>
                      <span className="text-xs font-bold text-blue-600 mb-1 block">{rel.industry}</span>
                      <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-sm">
                        {rel.title}
                      </div>
                      <div className="text-xs text-emerald-600 font-medium mt-1">{rel.metric}</div>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-slate-300 group-hover:text-blue-400 transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
