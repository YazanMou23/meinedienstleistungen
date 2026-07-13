import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

interface LocationSectionProps {
  serviceName?: string;
}

const cities = [
  'Duisburg', 'Essen', 'Düsseldorf', 'Dortmund', 'Bochum',
  'Oberhausen', 'Mülheim a.d.R.', 'Krefeld', 'Gelsenkirchen',
  'Bottrop', 'Moers', 'Wesel', 'Dinslaken', 'Voerde',
];

export default function LocationSection({ serviceName }: LocationSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-5">
              Einsatzgebiet
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              {serviceName
                ? `${serviceName} in Duisburg und ganz NRW`
                : 'Ihr Projektpartner in Duisburg und NRW'}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              MEINEDIENSTLEISTUNGEN ist schwerpunktmäßig in{' '}
              <strong className="text-slate-900">Duisburg</strong>,{' '}
              <strong className="text-slate-900">dem Ruhrgebiet</strong> und ganz{' '}
              <strong className="text-slate-900">Nordrhein-Westfalen (NRW)</strong> tätig.
              Bei Bedarf koordinieren wir auch Projekte darüber hinaus.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Als regionaler B2B Projektkoordinationspartner kennen wir die lokalen Gegebenheiten,
              Behörden und Infrastruktur — das beschleunigt Ihre Projekte und spart Kosten.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[#c0a678] hover:bg-[#aa905d] text-white font-bold px-6 py-3 rounded-xl transition-all text-sm shadow-sm"
            >
              Projekt anfragen
            </Link>
          </div>

          {/* Right: City grid */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <MapPin size={18} className="text-[#c0a678]" />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                Wir sind in Ihrer Region
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {cities.map((city) => (
                <span
                  key={city}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 font-medium hover:border-[#c0a678]/50 hover:bg-[#f9f7f2] transition-colors"
                >
                  {city}
                </span>
              ))}
              <span className="px-3 py-1.5 bg-[#c0a678]/10 border border-[#c0a678]/30 rounded-lg text-sm text-[#aa905d] font-semibold">
                + ganz NRW
              </span>
            </div>

            {/* Info box */}
            <div className="mt-6 bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-900">Standort:</strong>{' '}
                {SITE_CONFIG.address.street}, {SITE_CONFIG.address.zip} {SITE_CONFIG.address.city}
                <span className="mx-2 text-slate-300">·</span>
                <strong className="text-slate-900">Erreichbar:</strong>{' '}
                Mo–Fr 8:00–18:00 Uhr
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
