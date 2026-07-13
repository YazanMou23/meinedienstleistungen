import { db } from '@/lib/db';
import { leads, partners } from '@/lib/db/schema';
import { desc, sql } from 'drizzle-orm';
import { Users, Briefcase, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default async function AdminOverviewPage() {
  const leadsCount = await db.select({ count: sql<number>`count(*)` }).from(leads);
  const partnersCount = await db.select({ count: sql<number>`count(*)` }).from(partners);
  
  const recentLeads = await db.select().from(leads).orderBy(desc(leads.createdAt)).limit(5);

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Dashboard Übersicht</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 font-medium text-sm mb-1">Neue Projektanfragen</p>
              <h2 className="text-4xl font-bold text-slate-900">{leadsCount[0].count}</h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
              <Briefcase className="text-blue-600" size={24} />
            </div>
          </div>
          <Link href="/admin/leads" className="text-sm font-semibold text-blue-600 hover:underline">
            Alle ansehen →
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 font-medium text-sm mb-1">Registrierte Partner</p>
              <h2 className="text-4xl font-bold text-slate-900">{partnersCount[0].count}</h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
              <Users className="text-emerald-600" size={24} />
            </div>
          </div>
          <Link href="/admin/partners" className="text-sm font-semibold text-emerald-600 hover:underline">
            Partner verwalten →
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 font-medium text-sm mb-1">Conversion-Rate (Beispiel)</p>
              <h2 className="text-4xl font-bold text-slate-900">24%</h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center">
              <TrendingUp className="text-purple-600" size={24} />
            </div>
          </div>
          <p className="text-sm text-slate-500">Aus gewonnenen Projekten</p>
        </div>
      </div>

      <h2 className="text-xl font-bold text-slate-900 mb-6">Neueste Anfragen</h2>
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-sm text-slate-500">
                <th className="px-6 py-4 font-medium">Datum</th>
                <th className="px-6 py-4 font-medium">Kunde</th>
                <th className="px-6 py-4 font-medium">Service</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                    Noch keine Projektanfragen vorhanden.
                  </td>
                </tr>
              ) : (
                recentLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {lead.createdAt?.toLocaleDateString('de-DE')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{lead.name}</div>
                      {lead.firma && <div className="text-xs text-slate-500">{lead.firma}</div>}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {lead.service}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">
                        {lead.status}
                      </span>
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
