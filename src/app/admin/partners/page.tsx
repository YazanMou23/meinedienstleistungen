import { db } from '@/lib/db';
import { partners } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { Mail, Phone, ExternalLink, MapPin } from 'lucide-react';

export default async function AdminPartnersPage() {
  const allPartners = await db.select().from(partners).orderBy(desc(partners.createdAt));

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Partner-Bewerbungen</h1>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-sm text-slate-500">
                <th className="px-6 py-4 font-medium whitespace-nowrap">Datum</th>
                <th className="px-6 py-4 font-medium">Partner</th>
                <th className="px-6 py-4 font-medium">Gewerke & Profil</th>
                <th className="px-6 py-4 font-medium">Einsatzgebiet</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {allPartners.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                    Noch keine Partner-Bewerbungen vorhanden.
                  </td>
                </tr>
              ) : (
                allPartners.map((partner) => (
                  <tr key={partner.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                    <td className="px-6 py-4 text-sm text-slate-600 align-top whitespace-nowrap">
                      {partner.createdAt?.toLocaleDateString('de-DE')}
                    </td>
                    <td className="px-6 py-4 align-top">
                      <div className="font-semibold text-slate-900">{partner.firma}</div>
                      <div className="text-sm text-slate-600 mb-2">AP: {partner.ansprechpartner}</div>
                      <div className="flex flex-col gap-1 mt-2">
                        <a href={`mailto:${partner.email}`} className="text-xs text-blue-600 flex items-center gap-1.5 hover:underline">
                          <Mail size={12} /> {partner.email}
                        </a>
                        {partner.telefon && (
                          <a href={`tel:${partner.telefon}`} className="text-xs text-slate-500 flex items-center gap-1.5 hover:text-slate-900">
                            <Phone size={12} /> {partner.telefon}
                          </a>
                        )}
                        {partner.website && (
                          <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-600 flex items-center gap-1.5 hover:underline mt-1">
                            <ExternalLink size={12} /> Website
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 align-top max-w-xs">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {partner.gewerke?.map(g => (
                          <span key={g} className="bg-slate-100 text-slate-700 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">
                            {g}
                          </span>
                        ))}
                      </div>
                      <div className="text-xs text-slate-500 mb-2">
                        Mitarbeiter: <strong>{partner.mitarbeiter || 'k.A.'}</strong>
                      </div>
                      <p className="text-sm text-slate-600 line-clamp-3">{partner.beschreibung}</p>
                    </td>
                    <td className="px-6 py-4 align-top text-sm text-slate-700 max-w-[200px]">
                      <div className="flex flex-wrap gap-1">
                        {partner.einsatzgebiet?.map(ort => (
                          <span key={ort} className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full whitespace-nowrap">
                            <MapPin size={10} /> {ort}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 align-top">
                      {/* In a real app, this would be a Client Component dropdown to update status via Server Action */}
                      <select 
                        defaultValue={partner.status || 'beworben'}
                        className="text-xs font-semibold rounded-lg border border-slate-200 px-3 py-1.5 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="beworben">Beworben</option>
                        <option value="geprueft">Geprüft</option>
                        <option value="aktiv">Aktiv (Im Pool)</option>
                        <option value="inaktiv">Inaktiv</option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
