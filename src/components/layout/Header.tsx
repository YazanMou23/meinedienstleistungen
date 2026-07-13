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
    setServicesOpen(false);
  }, [pathname]);

  const isHomePage = pathname === '/';
  const solidHeader = isScrolled || !isHomePage;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          solidHeader
            ? 'bg-white/97 backdrop-blur-md shadow-sm border-b border-slate-100'
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
                  !solidHeader ? 'brightness-0 invert' : ''
                )}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => {
                if ('children' in item) {
                  return (
                    <div key={item.href} className="relative group">
                      <button
                        className={cn(
                          'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                          solidHeader
                            ? 'text-slate-700 hover:text-[#c0a678] hover:bg-slate-50'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                        )}
                      >
                        {item.label}
                        <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                      </button>
                      {/* Mega dropdown */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 overflow-hidden">
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                'flex items-center px-4 py-3 text-sm rounded-xl transition-all duration-150',
                                pathname === child.href
                                  ? 'text-[#c0a678] bg-blue-50 font-semibold'
                                  : 'text-slate-700 hover:text-[#c0a678] hover:bg-slate-50 font-medium'
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-slate-100 px-4 py-3 bg-slate-50">
                          <Link
                            href="/leistungen"
                            className="text-xs font-semibold text-slate-500 hover:text-[#c0a678] transition-colors"
                          >
                            Alle Leistungen ansehen →
                          </Link>
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
                        ? solidHeader
                          ? 'text-[#c0a678] bg-blue-50'
                          : 'text-white bg-white/20'
                        : solidHeader
                        ? 'text-slate-700 hover:text-[#c0a678] hover:bg-slate-50'
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
                  'flex items-center gap-2 text-sm font-semibold transition-colors',
                  solidHeader
                    ? 'text-slate-700 hover:text-[#c0a678]'
                    : 'text-white/80 hover:text-white'
                )}
              >
                <Phone size={15} />
                {SITE_CONFIG.phoneDisplay}
              </a>
              <Link
                href="/kontakt"
                className="bg-[#c0a678] hover:bg-[#aa905d] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#c0a678]/25 active:scale-[0.98]"
              >
                Projekt anfragen
              </Link>
            </div>

            {/* Mobile: Phone + Hamburger */}
            <div className="flex lg:hidden items-center gap-1">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  solidHeader ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                )}
                aria-label="Anrufen"
              >
                <Phone size={20} />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  solidHeader ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
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
          mobileOpen ? 'visible' : 'invisible pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300',
            mobileOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer */}
        <div
          className={cn(
            'absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl transition-transform duration-300 flex flex-col',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-slate-100 shrink-0">
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

          <nav className="flex-1 px-4 py-4 overflow-y-auto space-y-1 pb-24">
            {NAV_ITEMS.map((item) => {
              if ('children' in item) {
                return (
                  <div key={item.href}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 font-semibold transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={cn('transition-transform text-slate-400', servicesOpen && 'rotate-180')}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="ml-2 mt-1 space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'flex items-center px-4 py-2.5 rounded-xl text-sm transition-colors',
                              pathname === child.href
                                ? 'text-[#c0a678] bg-blue-50 font-semibold'
                                : 'text-slate-600 hover:text-[#c0a678] hover:bg-slate-50 font-medium'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                        <Link
                          href="/leistungen"
                          className="flex items-center px-4 py-2.5 rounded-xl text-sm text-slate-400 hover:text-[#c0a678] hover:bg-slate-50 transition-colors"
                        >
                          Alle Leistungen →
                        </Link>
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
                    'flex items-center px-4 py-3 rounded-xl font-semibold transition-colors',
                    pathname === item.href
                      ? 'text-[#c0a678] bg-blue-50'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 space-y-3 mt-4">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 text-slate-700 font-semibold transition-colors hover:bg-slate-100"
              >
                <Phone size={18} className="text-[#c0a678]" />
                {SITE_CONFIG.phoneDisplay}
              </a>
              <Link
                href="/kontakt"
                className="flex items-center justify-center gap-2 w-full bg-[#c0a678] hover:bg-[#aa905d] text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-center shadow-sm"
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
