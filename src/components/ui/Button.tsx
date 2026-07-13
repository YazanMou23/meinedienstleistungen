'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'white';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md hover:shadow-blue-600/20 active:scale-[0.98]',
  secondary:
    'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white active:scale-[0.98]',
  ghost:
    'text-white/80 hover:text-white border border-white/20 hover:border-white/40 hover:bg-white/10 active:scale-[0.98]',
  white:
    'bg-white text-blue-700 hover:bg-blue-50 shadow-sm active:scale-[0.98]',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'text-sm px-4 py-2 gap-1.5',
  md: 'text-sm px-6 py-3 gap-2',
  lg: 'text-base px-8 py-4 gap-2',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  icon,
  iconPosition = 'right',
  external,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer select-none',
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
