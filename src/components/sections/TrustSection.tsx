'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, UserCheck, ShieldCheck, Zap } from 'lucide-react';
import { TRUST_PILLARS } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = {
  briefcase: Briefcase,
  'map-pin': MapPin,
  'user-check': UserCheck,
  'shield-check': ShieldCheck,
  zap: Zap,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TrustSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {TRUST_PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Briefcase;
            return (
              <motion.div
                key={pillar.title}
                variants={item}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#c0a678]/30 hover:bg-[#f9f7f2] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0a1628] group-hover:bg-[#c0a678] flex items-center justify-center mb-4 transition-colors duration-300 shrink-0">
                  <Icon size={22} className="text-[#c0a678] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{pillar.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
