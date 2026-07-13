import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  titleClassName?: string;
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  titleClassName,
  dark = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={cn('space-y-4', isCenter ? 'text-center' : 'text-left', 'mb-12 md:mb-16')}>
      {label && (
        <span
          className={cn(
            'inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full',
            dark
              ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
              : 'bg-blue-50 text-blue-700 border border-blue-100'
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold leading-tight tracking-tight',
          dark ? 'text-white' : 'text-slate-900',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg max-w-2xl leading-relaxed',
            isCenter && 'mx-auto',
            dark ? 'text-slate-300' : 'text-slate-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
