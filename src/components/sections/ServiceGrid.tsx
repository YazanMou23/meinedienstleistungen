'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Cable, Layers, Grid3X3, Package, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  cable: <Cable size={28} className="text-blue-600" />,
  layers: <Layers size={28} className="text-blue-600" />,
  grid: <Grid3X3 size={28} className="text-blue-600" />,
  package: <Package size={28} className="text-blue-600" />,
};

export default function ServiceGrid() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Unsere Leistungen"
          title="Was wir für Sie koordinieren"
          subtitle="Vier Branchen, ein Ansprechpartner — wir steuern qualitätsgesicherte Projekte von der Anfrage bis zur Abnahme."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              className="flex h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/leistungen/${service.slug}`}
                className="group flex flex-col justify-between w-full bg-white border border-slate-100 hover:border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center shrink-0 transition-colors">
                    {iconMap[service.icon]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5 mb-5">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sm:pl-[76px] mt-4">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                    Mehr erfahren
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors"
          >
            Alle Leistungsbereiche ansehen
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
