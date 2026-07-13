'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  MessageSquare, Search, ClipboardList, Users,
  HardHat, ShieldCheck, CheckCircle2, ArrowRight,
} from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  'message-square': MessageSquare,
  search: Search,
  'clipboard-list': ClipboardList,
  users: Users,
  'hard-hat': HardHat,
  'shield-check': ShieldCheck,
  'check-circle': CheckCircle2,
};

interface ProcessTimelineProps {
  compact?: boolean;
  showCta?: boolean;
}

export default function ProcessTimeline({ compact = false, showCta = true }: ProcessTimelineProps) {
  const steps = compact ? PROCESS_STEPS.slice(0, 4) : PROCESS_STEPS;

  return (
    <section className={cn('section-padding', compact ? 'bg-white' : 'bg-slate-50')}>
      <div className="container-base">
        {!compact && (
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
              Unser Prozess
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Sieben Schritte zum fertigen Projekt
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Von der ersten Anfrage bis zur vollständigen Dokumentation — transparent, termingerecht und qualitätsgesichert.
            </p>
          </div>
        )}

        {compact && (
          <div className="mb-10">
            <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-4">
              So funktioniert's
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
              Ihr Projekt in klaren Schritten
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Ein Ansprechpartner koordiniert alles — von der Anfrage bis zur Abnahme.
            </p>
          </div>
        )}

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[28px] md:left-1/2 md:-translate-x-px top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#c0a678] via-[#c0a678]/40 to-transparent hidden sm:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon] || CheckCircle2;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: compact ? 0 : (isEven ? -24 : 24) }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={cn(
                    'relative',
                    !compact && 'md:grid md:grid-cols-2 md:gap-8'
                  )}
                >
                  {!compact ? (
                    <>
                      {/* Even: content left, step right | Odd: step left, content right */}
                      <div className={cn('flex', isEven ? 'md:justify-end' : 'md:order-last md:justify-start')}>
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow max-w-md w-full">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#0a1628] flex items-center justify-center shrink-0">
                              <Icon size={18} className="text-[#c0a678]" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Schritt {step.number}</span>
                                <span className="text-xs text-slate-300">·</span>
                                <span className="text-xs text-slate-400">{step.duration}</span>
                              </div>
                              <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Center dot */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#c0a678] border-4 border-white shadow-md items-center justify-center z-10">
                        <span className="text-white text-xs font-black">{index + 1}</span>
                      </div>
                    </>
                  ) : (
                    /* Compact: simple list */
                    <div className="flex items-start gap-4 pl-0 sm:pl-2">
                      <div className="w-14 h-14 rounded-xl bg-[#0a1628] flex flex-col items-center justify-center shrink-0">
                        <Icon size={16} className="text-[#c0a678] mb-0.5" />
                        <span className="text-white text-xs font-black">{step.number}</span>
                      </div>
                      <div className="pt-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-slate-900 text-sm">{step.title}</h3>
                          <span className="text-xs text-slate-400">· {step.duration}</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {showCta && compact && (
          <div className="mt-8 pt-6 border-t border-slate-100">
            <Link
              href="/ablauf"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#c0a678] hover:text-[#aa905d] transition-colors"
            >
              Vollständigen Ablauf ansehen
              <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
