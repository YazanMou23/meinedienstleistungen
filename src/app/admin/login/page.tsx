'use client';

import { useActionState } from 'react';
import { login } from './actions';
import { Lock } from 'lucide-react';

export default function AdminLoginPage() {
  const [state, action, isPending] = useActionState(login, null);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-4">
            <Lock className="text-white" size={28} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">MDL Admin Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">Bitte melden Sie sich an.</p>
        </div>

        <form action={action} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              E-Mail Adresse
            </label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#c0a678] focus:border-transparent transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Passwort
            </label>
            <input
              name="password"
              type="password"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#c0a678] focus:border-transparent transition-all"
              required
            />
          </div>

          {state?.error && (
            <div className="bg-rose-50 border border-rose-200 text-rose-600 px-4 py-3 rounded-xl text-sm">
              {state.error}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-900/60 text-white font-bold py-3.5 px-4 rounded-xl transition-all"
          >
            {isPending ? 'Anmelden...' : 'Anmelden'}
          </button>
        </form>
      </div>
    </main>
  );
}
