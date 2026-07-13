'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Search, Users, HardHat, ShieldCheck, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROCESS_STEPS } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = {
  'message-square': MessageSquare,
  search: Search,
  users: Users,
  'hard-hat': HardHat,
  'shield-check': ShieldCheck,
  'check-circle': CheckCircle,
};

interface ProcessStepsProps {
  variant?: 'full' | 'compact';
  dark?: boolean;
}

export default function ProcessSteps({ variant = 'full', dark = false }: ProcessStepsProps) {
  const steps = variant === 'compact' ? PROCESS_STEPS.slice(0, 3) : PROCESS_STEPS;

  return (
    <section className={dark ? 'bg-slate-900 py-20 md:py-28' : 'bg-slate-50 py-20 md:py-28'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Unser Prozess"
          title="So arbeiten wir — transparent von Anfang an"
          subtitle="Von der Anfrage bis zur Abnahme: Sechs klar definierte Phasen, ein Ansprechpartner, null Überraschungen."
          align="center"
          dark={dark}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon] || CheckCircle;
            return (
              <motion.div
                key={step.number}
                className={`relative rounded-2xl p-8 ${
                  dark ? 'bg-white/5 border border-white/10' : 'bg-white border border-slate-100 shadow-sm'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Step Number */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-200/30 flex items-center justify-center">
                    <Icon size={22} className="text-blue-500" />
                  </div>
                  <span
                    className={`text-5xl font-black leading-none ${
                      dark ? 'text-white/5' : 'text-slate-100'
                    }`}
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className={`text-lg font-bold mb-3 ${dark ? 'text-white' : 'text-slate-900'}`}>
                  {step.title}
                </h3>
                <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {step.description}
                </p>
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-gradient-to-r from-blue-300 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
