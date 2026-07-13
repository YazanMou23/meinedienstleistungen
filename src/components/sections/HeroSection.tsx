'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface HeroProps {
  variant?: 'full' | 'compact';
  label?: string;
  headline: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: string;
  lightOverlay?: boolean;
  trustPills?: string[];
  children?: React.ReactNode;
}

export default function HeroSection({
  variant = 'full',
  label,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  backgroundImage,
  lightOverlay = false,
  trustPills,
  children,
}: HeroProps) {
  const isFull = variant === 'full';

  const defaultTrustPills = [
    'B2B Projektpartner',
    'Duisburg & NRW',
    '24h Rückmeldung',
    'Geprüfte Partner',
  ];

  const pills = trustPills ?? (isFull ? defaultTrustPills : undefined);

  return (
    <section
      className={cn(
        'relative overflow-hidden flex items-center',
        isFull ? 'min-h-screen' : 'min-h-[480px] md:min-h-[560px]'
      )}
    >
      {/* Background (B2B dark navy gradient with optional background image) */}
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div
            className={cn(
              'absolute inset-0',
              lightOverlay
                ? 'bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/75 to-[#0a1628]/40'
                : 'bg-gradient-to-r from-[#060e1a]/95 via-[#0a1628]/85 to-[#0a1628]/70'
            )}
          />
        </>
      ) : (
        <div className="absolute inset-0 gradient-navy" />
      )}

      {/* Animated decorative orbs */}
      {isFull && (
        <>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#c0a678]/8 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full bg-[#c0a678]/5 blur-3xl pointer-events-none" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className={cn(isFull ? 'lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center' : '')}>
          <div className={cn(isFull ? 'lg:col-span-7' : 'max-w-3xl')}>
            {/* Label */}
            {label && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full bg-[#c0a678]/20 text-[#c0a678] border border-[#c0a678]/30 mb-6">
                  {label}
                </span>
              </motion.div>
            )}

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={cn(
                'font-black text-white leading-[1.1] tracking-tight text-balance mb-6',
                isFull
                  ? 'text-4xl sm:text-5xl md:text-6xl lg:text-6xl'
                  : 'text-3xl md:text-4xl lg:text-5xl'
              )}
            >
              {headline}
            </motion.h1>

            {/* Sub */}
            {subheadline && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-300 leading-relaxed mb-8 text-balance"
                style={{ fontSize: isFull ? '1.125rem' : '1rem' }}
              >
                {subheadline}
              </motion.p>
            )}

            {/* CTAs */}
            {(primaryCta || secondaryCta) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center gap-2 bg-[#c0a678] hover:bg-[#aa905d] text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-[#c0a678]/25 active:scale-[0.98] text-sm md:text-base"
                  >
                    {primaryCta.label}
                    <ArrowRight size={18} />
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 font-semibold px-7 py-4 rounded-xl transition-all duration-200 text-sm md:text-base"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </motion.div>
            )}

            {/* Phone CTA */}
            {isFull && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mb-10"
              >
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium"
                >
                  <Phone size={16} className="text-[#c0a678]" />
                  Direkt anrufen: {SITE_CONFIG.phoneDisplay}
                </a>
              </motion.div>
            )}

            {/* Trust Pills */}
            {pills && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {pills.map((pill) => (
                  <div key={pill} className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-white/10 border border-white/20 text-slate-200 rounded-full font-medium">
                    <CheckCircle2 size={12} className="text-[#c0a678] shrink-0" />
                    {pill}
                  </div>
                ))}
              </motion.div>
            )}

            {children}
          </div>

          {/* Desktop shape collage with service photos */}
          {isFull && (
            <div className="hidden lg:block lg:col-span-5 relative h-[520px]">
              <div className="relative w-full h-full">
                {/* Photo 1: Kabelzieharbeiten */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                  animate={{ opacity: 1, scale: 1, rotate: -6 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute top-2 left-2 w-[180px] h-[130px] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20 group hover:z-40 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src="/images/services/kabelzieharbeiten/kabelzug-logistikhalle.jpg"
                    alt="Professioneller Kabelzug in einer Logistikhalle in Duisburg"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-300" />
                </motion.div>

                {/* Photo 2: Lagerlogistik */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 8 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="absolute top-16 right-4 w-[160px] h-[160px] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10 group hover:z-40 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src="/images/services/lagerlogistik/kommissionierung-lager.jpg"
                    alt="Lagerlogistik Kommissionierung im Duisburger Hafen"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-300" />
                </motion.div>

                {/* Photo 3: Reinigungsdienst */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 4 }}
                  animate={{ opacity: 1, scale: 1, rotate: 4 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="absolute top-[150px] left-[60px] w-[180px] h-[130px] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-30 group hover:z-40 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src="/images/services/reinigungsdienst/bueroreinigung-modern.jpg"
                    alt="Gewerbliche Büroreinigung in Essen"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-300" />
                </motion.div>

                {/* Photo 4: Entrümpelung */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                  animate={{ opacity: 1, scale: 1, rotate: -4 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="absolute top-[230px] right-2 w-[190px] h-[130px] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20 group hover:z-40 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src="/images/services/entruempelung/gewerberaum-raeumung.jpg"
                    alt="Gewerbliche Räumung und Entrümpelung in Oberhausen"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-300" />
                </motion.div>

                {/* Photo 5: Innenausbau */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: -8 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="absolute bottom-[60px] left-2 w-[170px] h-[130px] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20 group hover:z-40 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src="/images/services/innenausbau/trockenbau-buerogebaeude.jpg"
                    alt="Innenausbau und Trockenbau in modernem Büro in Düsseldorf"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-300" />
                </motion.div>

                {/* Photo 6: Lagerentrümpelung / General B2B */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
                  animate={{ opacity: 1, scale: 1, rotate: 6 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="absolute bottom-2 right-[40px] w-[190px] h-[130px] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-30 group hover:z-40 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src="/images/services/entruempelung/lager-entruempelung.jpg"
                    alt="Lagerhallen Entrümpelung und Sortierung in NRW"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-300" />
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
