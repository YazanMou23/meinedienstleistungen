import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  headline?: string;
  subline?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showPhone?: boolean;
  variant?: 'navy' | 'gold';
  className?: string;
}

export default function CTASection({
  headline = 'Bereit für Ihr nächstes Projekt?',
  subline = 'Kostenlose Erstberatung — wir melden uns innerhalb von 24 Stunden.',
  primaryLabel = 'Jetzt Projekt anfragen',
  primaryHref = '/kontakt',
  showPhone = true,
  variant = 'navy',
  className,
}: CTASectionProps) {
  const isNavy = variant === 'navy';

  return (
    <section
      className={cn('py-20 md:py-24 relative overflow-hidden', className)}
      style={{
        background: isNavy
          ? 'linear-gradient(135deg, #0a1628 0%, #060e1a 100%)'
          : 'linear-gradient(135deg, #aa905d 0%, #c0a678 50%, #d4c390 100%)',
      }}
    >
      {/* Decorative orb */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: isNavy ? '#c0a678' : '#fff' }}
      />
      <div className="container-base relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={cn('text-3xl md:text-4xl font-black mb-4 tracking-tight', isNavy ? 'text-white' : 'text-white')}>
            {headline}
          </h2>
          <p className={cn('mb-10 text-lg', isNavy ? 'text-slate-300' : 'text-white/80')}>
            {subline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryHref}
              className={cn(
                'inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl transition-all text-base shadow-lg active:scale-[0.98]',
                isNavy
                  ? 'bg-[#c0a678] hover:bg-[#aa905d] text-white hover:shadow-[#c0a678]/25'
                  : 'bg-white text-[#aa905d] hover:bg-slate-50 hover:shadow-white/25'
              )}
            >
              {primaryLabel}
              <ArrowRight size={18} />
            </Link>
            {showPhone && (
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className={cn(
                  'inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all text-base border-2',
                  isNavy
                    ? 'border-white/20 text-white hover:border-white/50 hover:bg-white/10'
                    : 'border-white/40 text-white hover:border-white hover:bg-white/10'
                )}
              >
                <Phone size={18} />
                {SITE_CONFIG.phoneDisplay}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
