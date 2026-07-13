'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  variant?: 'full' | 'compact';
  label?: string;
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  showPhone?: boolean;
  backgroundImage?: string;
  lightOverlay?: boolean;
}

export default function HeroSection({
  variant = 'full',
  label,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  showPhone = false,
  backgroundImage,
  lightOverlay = false,
}: HeroSectionProps) {
  const isFull = variant === 'full';

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        isFull ? 'min-h-screen flex items-center' : 'pt-24 pb-16 md:pt-32 md:pb-20'
      )}
      style={{
        background: backgroundImage
          ? `url(${backgroundImage}) center/cover no-repeat`
          : 'linear-gradient(135deg, #060e1a 0%, #0a1628 40%, #060e1a 70%, #0a1628 100%)',
      }}
    >
      {/* Background Image Overlay */}
      {backgroundImage && (
        <div
          className={cn(
            'absolute inset-0 z-0',
            lightOverlay
              ? 'bg-gradient-to-r from-white/98 via-slate-50/97 to-[#0a1628]/12 backdrop-blur-[1px]'
              : 'bg-slate-950/80 backdrop-blur-[2px]'
          )}
          aria-hidden="true"
        />
      )}

      {/* Background Pattern */}
      {!backgroundImage && (
        <div className="absolute inset-0 opacity-35" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(192, 166, 120, 0.15) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(192, 166, 120, 0.1) 0%, transparent 40%),
                               radial-gradient(circle at 60% 80%, rgba(192, 166, 120, 0.08) 0%, transparent 35%)`,
            }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(192, 166, 120, 0.05) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(192, 166, 120, 0.05) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className={cn(
          isFull ? 'py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center' : 'py-0'
        )}>
          {/* Left Column: Text & CTAs */}
          <div className={cn(isFull ? 'lg:col-span-7' : 'max-w-4xl')}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {label && (
                <div className={cn(
                  'inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8',
                  lightOverlay
                    ? 'bg-blue-50 border border-blue-200 text-blue-700'
                    : 'bg-blue-500/20 border border-blue-400/30 text-blue-300'
                )}>
                  <span className={cn('w-1.5 h-1.5 rounded-full animate-pulse', lightOverlay ? 'bg-blue-600' : 'bg-blue-400')} />
                  {label}
                </div>
              )}

              <h1 className={cn(
                'text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 text-balance',
                lightOverlay ? 'text-slate-900' : 'text-white'
              )}>
                {headline}
              </h1>

              <p className={cn(
                'text-lg md:text-xl leading-relaxed mb-10 max-w-2xl',
                lightOverlay ? 'text-slate-600' : 'text-slate-300'
              )}>
                {subheadline}
              </p>

              {/* CTAs */}
              {(primaryCta || secondaryCta || showPhone) && (
                <div className="flex flex-wrap gap-4 items-center">
                  {primaryCta && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <Link
                        href={primaryCta.href}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 active:scale-[0.98] text-base"
                      >
                        {primaryCta.label}
                        <ArrowRight size={18} />
                      </Link>
                    </motion.div>
                  )}
                  {secondaryCta && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45, duration: 0.5 }}
                    >
                      <Link
                        href={secondaryCta.href}
                        className={cn(
                          'inline-flex items-center gap-2 border-2 font-semibold px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.98] text-base',
                          lightOverlay
                            ? 'border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50'
                            : 'border-white/30 text-white hover:border-white/60 hover:bg-white/10'
                        )}
                      >
                        {secondaryCta.label}
                      </Link>
                    </motion.div>
                  )}
                  {showPhone && (
                    <motion.a
                      href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                      className={cn(
                        'flex items-center gap-2 transition-colors text-sm font-semibold',
                        lightOverlay ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'
                      )}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Phone size={16} className="text-blue-600 animate-pulse" />
                      {SITE_CONFIG.phoneDisplay}
                    </motion.a>
                  )}
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column: Collage (only for homepage/full variant) */}
          {isFull && (
            <div className="lg:col-span-5 relative w-full h-[400px] md:h-[450px] lg:h-[500px] mt-12 lg:mt-0 select-none">
              {/* Backglow decor */}
              <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full z-0 pointer-events-none" />
              
              {/* Main Center Image */}
              <motion.div
                className="absolute top-[10%] left-[15%] w-[65%] h-[65%] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-950/80 z-20 bg-slate-900"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="/images/case-studies/logistik-kabel.png"
                  alt="Kabelmontage und Kabelzug"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>

              {/* Top Right Image */}
              <motion.div
                className="absolute top-[0%] right-[5%] w-[45%] h-[45%] rounded-2xl overflow-hidden shadow-xl border-4 border-slate-955/80 z-10 bg-slate-900"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src="/images/case-studies/trockenbau-buero.png"
                  alt="Trockenbau und Innenausbau"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>

              {/* Bottom Left Image */}
              <motion.div
                className="absolute bottom-[5%] left-[5%] w-[50%] h-[50%] rounded-2xl overflow-hidden shadow-xl border-4 border-slate-955/80 z-30 bg-slate-900"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <img
                  src="/images/case-studies/lager-logistik.png"
                  alt="Lager und Logistik"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
