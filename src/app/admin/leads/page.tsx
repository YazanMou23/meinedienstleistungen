import { db } from '@/lib/db';
import { leads } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default async function AdminLeadsPage() {
  const allLeads = await db.select().from(leads).orderBy(desc(leads.createdAt));

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Projektanfragen</h1>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-sm text-slate-500">
                <th className="px-6 py-4 font-medium whitespace-nowrap">Datum</th>
                <th className="px-6 py-4 font-medium">Kunde</th>
                <th className="px-6 py-4 font-medium">Projekt</th>
                <th className="px-6 py-4 font-medium">Ort</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {allLeads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                    Noch keine Projektanfragen vorhanden.
                  </td>
                </tr>
              ) : (
                allLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                    <td className="px-6 py-4 text-sm text-slate-600 align-top whitespace-nowrap">
                      {lead.createdAt?.toLocaleDateString('de-DE')}
                    </td>
                    <td className="px-6 py-4 align-top">
                      <div className="font-semibold text-slate-900">{lead.name}</div>
                      {lead.firma && <div className="text-sm text-slate-600 mb-2">{lead.firma}</div>}
                      <div className="flex flex-col gap-1 mt-2">
                        <a href={`mailto:${lead.email}`} className="text-xs text-blue-600 flex items-center gap-1.5 hover:underline">
                          <Mail size={12} /> {lead.email}
                        </a>
                        {lead.telefon && (
                          <a href={`tel:${lead.telefon}`} className="text-xs text-slate-500 flex items-center gap-1.5 hover:text-slate-900">
                            <Phone size={12} /> {lead.telefon}
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 align-top max-w-xs">
                      <div className="font-semibold text-slate-900 mb-1">{lead.service}</div>
                      <div className="text-xs text-slate-500 mb-2">
                        <span className="inline-block bg-slate-100 rounded px-1.5 py-0.5 mr-2">Budget: {lead.budget || 'k.A.'}</span>
                        <span className="inline-block bg-slate-100 rounded px-1.5 py-0.5">Start: {lead.zeitraum || 'k.A.'}</span>
                      </div>
                      <p className="text-sm text-slate-600 line-clamp-3">{lead.beschreibung}</p>
                    </td>
                    <td className="px-6 py-4 align-top text-sm text-slate-700">
                      <div className="flex items-start gap-1.5">
                        <MapPin size={14} className="text-slate-400 mt-0.5 shrink-0" />
                        <span>{lead.projektort}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 align-top">
                      {/* In a real app, this would be a Client Component dropdown to update status via Server Action */}
                      <select 
                        defaultValue={lead.status || 'neu'}
                        className="text-xs font-semibold rounded-lg border border-slate-200 px-3 py-1.5 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="neu">Neu</option>
                        <option value="kontaktiert">Kontaktiert</option>
                        <option value="angebot">Angebot gesendet</option>
                        <option value="gewonnen">Gewonnen</option>
                        <option value="verloren">Verloren</option>
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
