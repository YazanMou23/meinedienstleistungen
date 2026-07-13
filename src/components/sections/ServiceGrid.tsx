'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Cable, Sparkles, Package, Trash2, Layers } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  cable: Cable,
  sparkles: Sparkles,
  package: Package,
  'trash-2': Trash2,
  layers: Layers,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServiceGrid() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-base">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Fünf Branchen. Ein Koordinationspartner.
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Jede Leistung mit geprüften Fachpartnern, definierten Qualitätsstandards
            und einem persönlichen Projektkoordinator.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Cable;
            const isLarge = index === 0; // first card spans 2 cols on lg

            return (
              <motion.div
                key={service.slug}
                variants={item}
                className={cn(
                  'group relative bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-blue-100 hover:shadow-xl transition-all duration-300',
                  isLarge ? 'sm:col-span-2 lg:col-span-1' : ''
                )}
              >
                {/* Top bar accent */}
                <div className="h-1 bg-gradient-to-r from-[#c0a678] to-[#d4c390]" />

                <div className="p-6 md:p-8">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#0a1628] flex items-center justify-center mb-5 group-hover:bg-[#c0a678] transition-colors duration-300">
                    <Icon size={22} className="text-[#c0a678] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature list (top 3) */}
                  <ul className="space-y-2 mb-7">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c0a678] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={`/leistungen/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c0a678] hover:text-[#aa905d] transition-colors group/link"
                  >
                    Mehr erfahren
                    <ArrowRight size={15} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 border-2 border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm"
          >
            Alle Leistungen ansehen
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
