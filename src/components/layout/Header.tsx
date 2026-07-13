'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Determine if we're on a dark hero page (homepage)
  const isHomePage = pathname === '/';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/images/logo.png"
                alt="MEINEDIENSTLEISTUNGEN Logo"
                className={cn(
                  'h-8 md:h-10 w-auto transition-all duration-300',
                  isScrolled || !isHomePage ? '' : 'brightness-0 invert'
                )}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                if ('children' in item) {
                  return (
                    <div key={item.href} className="relative group">
                      <button
                        className={cn(
                          'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                          isScrolled || !isHomePage
                            ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                        )}
                      >
                        {item.label}
                        <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                      </button>
                      {/* Dropdown */}
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center px-4 py-2.5 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                      pathname === item.href
                        ? isScrolled || !isHomePage
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-white bg-white/20'
                        : isScrolled || !isHomePage
                        ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className={cn(
                  'flex items-center gap-2 text-sm font-medium transition-colors',
                  isScrolled || !isHomePage
                    ? 'text-slate-600 hover:text-blue-600'
                    : 'text-white/80 hover:text-white'
                )}
              >
                <Phone size={16} />
                {SITE_CONFIG.phoneDisplay}
              </a>
              <Link
                href="/kontakt"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-blue-600/25 active:scale-[0.98]"
              >
                Projekt anfragen
              </Link>
            </div>

            {/* Mobile: Phone + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  isScrolled || !isHomePage
                    ? 'text-slate-700 hover:bg-slate-100'
                    : 'text-white hover:bg-white/10'
                )}
                aria-label="Anrufen"
              >
                <Phone size={20} />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  isScrolled || !isHomePage
                    ? 'text-slate-700 hover:bg-slate-100'
                    : 'text-white hover:bg-white/10'
                )}
                aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          mobileOpen ? 'visible' : 'invisible'
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300',
            mobileOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer */}
        <div
          className={cn(
            'absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl transition-transform duration-300',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-slate-100">
            <img
              src="/images/logo.png"
              alt="MEINEDIENSTLEISTUNGEN Logo"
              className="h-8 w-auto"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
              aria-label="Menü schließen"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="px-4 py-4 space-y-1 overflow-y-auto h-full pb-32">
            {NAV_ITEMS.map((item) => {
              if ('children' in item) {
                return (
                  <div key={item.href}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 font-medium transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={cn('transition-transform', servicesOpen && 'rotate-180')}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center px-4 py-2.5 rounded-lg text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center px-4 py-3 rounded-xl font-medium transition-colors',
                    pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Link
                href="/partner-werden"
                className="flex items-center px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 font-medium text-sm transition-colors"
              >
                Partner werden
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-50 text-slate-700 font-medium transition-colors"
              >
                <Phone size={18} className="text-blue-600" />
                {SITE_CONFIG.phoneDisplay}
              </a>
              <Link
                href="/kontakt"
                className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-center"
              >
                Projekt anfragen
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
