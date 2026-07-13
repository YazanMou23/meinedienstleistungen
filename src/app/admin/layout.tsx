import { ReactNode } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Users, Briefcase, LogOut } from 'lucide-react';
import { logout } from './login/actions';

export const dynamic = 'force-dynamic';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col hidden md:flex fixed h-full">
        <div className="p-6">
          <Link href="/admin" className="text-xl font-bold tracking-wider text-white">
            MDL<span className="text-[#c0a678]">.</span>ADMIN
          </Link>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-slate-300 hover:text-white">
            <LayoutDashboard size={20} />
            <span>Übersicht</span>
          </Link>
          <Link href="/admin/leads" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-slate-300 hover:text-white">
            <Briefcase size={20} />
            <span>Projektanfragen</span>
          </Link>
          <Link href="/admin/partners" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-slate-300 hover:text-white">
            <Users size={20} />
            <span>Partner</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <form action={logout}>
            <button className="flex w-full items-center gap-3 px-4 py-3 rounded-xl hover:bg-rose-900/30 text-slate-400 hover:text-rose-400 transition-colors">
              <LogOut size={20} />
              <span>Abmelden</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden bg-slate-900 text-white p-4 flex justify-between items-center">
          <Link href="/admin" className="text-xl font-bold tracking-wider">
            MDL<span className="text-[#c0a678]">.</span>ADMIN
          </Link>
          <form action={logout}>
            <button className="p-2 text-slate-400 hover:text-white">
              <LogOut size={20} />
            </button>
          </form>
        </header>
        <main className="flex-1 p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
