'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Clock, Tag } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { CASE_STUDIES } from '@/lib/constants';

interface CaseStudyPreviewProps {
  maxItems?: number;
  showHeading?: boolean;
}

export default function CaseStudyPreview({ maxItems = 3, showHeading = true }: CaseStudyPreviewProps) {
  const studies = CASE_STUDIES.slice(0, maxItems);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            label="Referenzprojekte"
            title="Projekte, die für sich sprechen"
            subtitle="Echte Koordinationsleistung. Messbare Ergebnisse. Zufriedene Kunden."
            align="center"
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map((study, index) => (
            <motion.div
              key={study.slug}
              className="flex h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/referenzen/${study.slug}`}
                className="group flex flex-col justify-between w-full rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full"
              >
                {/* Image with gradient overlay */}
                <div className="relative h-48 overflow-hidden bg-slate-900 shrink-0">
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

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>

                  {/* Key metric */}
                  <div className="flex items-center gap-2 mb-4 p-3 bg-emerald-50 rounded-lg">
                    <BadgeCheck size={16} className="text-emerald-600 shrink-0" />
                    <span className="text-sm font-semibold text-emerald-800">{study.metric}</span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-5">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {study.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Tag size={12} />
                      {study.scope}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all mt-auto">
                    Fallstudie lesen
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/referenzen"
            className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-blue-600 text-slate-600 hover:text-blue-600 font-semibold px-8 py-3 rounded-xl transition-all duration-200"
          >
            Alle Referenzprojekte ansehen
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
