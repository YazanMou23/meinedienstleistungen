import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG, SERVICES } from '@/lib/constants';

const footerLinks = {
  leistungen: SERVICES.map((s) => ({ label: s.title, href: `/leistungen/${s.slug}` })),
  unternehmen: [
    { label: 'Über MDL', href: '/ueber-uns' },
    { label: 'Ablauf', href: '/ablauf' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  legal: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-slate-300">
      {/* CTA Banner */}
      <div className="bg-[#c0a678]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                Bereit für Ihr nächstes Projekt?
              </h2>
              <p className="text-white/80">
                Ein Ansprechpartner. Geprüfte Partner. Termingerechte Umsetzung in Duisburg und NRW.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#aa905d] hover:bg-slate-50 font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-sm"
              >
                <Phone size={16} />
                Jetzt anrufen
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#aa905d] font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
              >
                Projekt anfragen
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <img
                src="/images/logo.png"
                alt="MEINEDIENSTLEISTUNGEN Logo"
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Ihr B2B Projektkoordinationspartner in Duisburg und NRW — für Kabelzieharbeiten,
              Reinigung, Lagerlogistik, Entrümpelung und Innenausbau.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#c0a678]/20 flex items-center justify-center transition-colors shrink-0">
                  <Phone size={14} className="text-[#c0a678]" />
                </div>
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#c0a678]/20 flex items-center justify-center transition-colors shrink-0">
                  <Mail size={14} className="text-[#c0a678]" />
                </div>
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-[#c0a678]" />
                </div>
                <span>
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.zip}{' '}
                  {SITE_CONFIG.address.city}
                </span>
              </div>
            </div>

            {/* Service area badge */}
            <div className="flex flex-wrap gap-2">
              {SITE_CONFIG.serviceArea.map((area) => (
                <span
                  key={area}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">
              Leistungen
            </h3>
            <ul className="space-y-3">
              {footerLinks.leistungen.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#c0a678] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/leistungen"
                  className="text-sm text-slate-500 hover:text-[#c0a678] transition-colors"
                >
                  → Alle Leistungen
                </Link>
              </li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">
              Unternehmen
            </h3>
            <ul className="space-y-3">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#c0a678] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">
              Projekt anfragen
            </h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Kostenlose Erstberatung. Wir melden uns innerhalb von 24 Stunden.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#c0a678] hover:bg-[#aa905d] text-white font-bold px-5 py-3 rounded-xl transition-all text-sm shadow-sm"
            >
              Jetzt anfragen
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} MEINEDIENSTLEISTUNGEN. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
