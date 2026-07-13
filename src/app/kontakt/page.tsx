import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import ContactForm from '@/components/forms/ContactForm';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = genMeta({
  title: 'Kontakt — Projekt anfragen',
  description:
    'Projekt anfragen oder Beratung buchen: Kontaktieren Sie MEINEDIENSTLEISTUNGEN per Formular, Telefon oder E-Mail. Rückmeldung garantiert innerhalb von 24 Stunden.',
  path: '/kontakt',
});

const contactOptions = [
  {
    icon: Phone,
    title: 'Telefon',
    value: SITE_CONFIG.phoneDisplay,
    href: `tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`,
    sub: 'Sofortige Beratung',
  },
  {
    icon: Mail,
    title: 'E-Mail',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    sub: 'Antwort innerhalb 24h',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    value: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.zip} ${SITE_CONFIG.address.city}`,
    href: null,
    sub: 'Büro & Anschrift',
  },
  {
    icon: Clock,
    title: 'Erreichbarkeit',
    value: 'Mo–Fr: 8:00–18:00 Uhr',
    href: null,
    sub: 'Außerhalb per E-Mail',
  },
];

export default function KontaktPage() {
  return (
    <>
      <HeroSection
        variant="compact"
        label="Kontakt"
        headline="Sprechen Sie mit uns — unverbindlich"
        subheadline="Schildern Sie uns Ihr Projekt. Wir melden uns innerhalb von 24 Stunden mit einer ersten Einschätzung und einem unverbindlichen Angebot."
        backgroundImage="/images/case-studies/logistik-kabel.png"
        lightOverlay={true}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16">
            {/* Left: Contact options + info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                So erreichen Sie uns
              </h2>
              <p className="text-slate-600 mb-8">
                Wählen Sie den für Sie einfachsten Weg — oder nutzen Sie das Kontaktformular rechts.
              </p>

              <div className="space-y-4 mb-10">
                {contactOptions.map((option, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <option.icon size={18} className="text-blue-700" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                        {option.title}
                      </div>
                      {option.href ? (
                        <a
                          href={option.href}
                          className="font-semibold text-slate-900 hover:text-blue-600 transition-colors text-sm"
                        >
                          {option.value}
                        </a>
                      ) : (
                        <div className="font-semibold text-slate-900 text-sm">{option.value}</div>
                      )}
                      <div className="text-xs text-slate-500 mt-0.5">{option.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response promise */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare size={20} className="text-blue-600" />
                  <span className="font-bold text-slate-900">Unser Versprechen</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Auf jede Anfrage antworten wir innerhalb von <strong>24 Stunden</strong>. Sie
                  erhalten eine erste Einschätzung und — wenn gewünscht — direkt einen Termin für
                  ein Erstgespräch.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 md:p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Projekt anfragen
                </h2>
                <p className="text-slate-600 text-sm mb-8">
                  Alle mit <span className="text-rose-500">*</span> markierten Felder sind
                  Pflichtfelder.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
