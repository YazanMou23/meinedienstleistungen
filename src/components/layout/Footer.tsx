import Link from 'next/link';
import { Phone, Mail, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, SERVICES } from '@/lib/constants';

const footerLinks = {
  leistungen: SERVICES.map((s) => ({ label: s.title, href: `/leistungen/${s.slug}` })),
  unternehmen: [
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'So funktioniert\'s', href: '/so-funktionierts' },
    { label: 'Referenzen', href: '/referenzen' },
    { label: 'Partner werden', href: '/partner-werden' },
  ],
  ressourcen: [
    { label: 'Blog & Insights', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  legal: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'AGB', href: '/agb' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Banner */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Bereit für Ihr nächstes Projekt?
              </h2>
              <p className="text-blue-100">
                Ein Ansprechpartner. Geprüfte Partner. Termingerechte Umsetzung.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm"
              >
                <Phone size={16} />
                Jetzt anrufen
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm"
              >
                Projekt anfragen
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <img
                src="/images/logo.png"
                alt="MEINEDIENSTLEISTUNGEN Logo"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Ihr Projekt-Koordinationspartner für Kabelverlegung, Trockenbau, Fliesenarbeiten und
              Lager & Logistik — Ein Ansprechpartner. Geprüfte Partner. Garantierte Qualität.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-blue-600/20 flex items-center justify-center transition-colors">
                  <Phone size={14} className="text-blue-400" />
                </div>
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-blue-600/20 flex items-center justify-center transition-colors">
                  <Mail size={14} className="text-blue-400" />
                </div>
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-blue-400" />
                </div>
                <span>
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.zip}{' '}
                  {SITE_CONFIG.address.city}
                </span>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <ExternalLink size={16} className="text-slate-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Leistungen
            </h3>
            <ul className="space-y-3">
              {footerLinks.leistungen.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Unternehmen
            </h3>
            <ul className="space-y-3">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressourcen */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Ressourcen
            </h3>
            <ul className="space-y-3">
              {footerLinks.ressourcen.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
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
