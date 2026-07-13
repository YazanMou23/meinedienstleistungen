import { Metadata } from 'next';
import Link from 'next/link';
import AuftragnehmerForm from '@/components/forms/AuftragnehmerForm';

export const metadata: Metadata = {
  title: 'Partner werden | MEINEDIENSTLEISTUNGEN',
  description: 'Werden Sie Teil unseres Netzwerks. Wir suchen zuverlässige Handwerker und Dienstleister für B2B-Projekte.',
};

export default function AuftragnehmerPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container-md">
        {/* Role Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-white border border-slate-200 p-1.5 rounded-2xl inline-flex shadow-sm">
            <Link 
              href="/auftraggeber" 
              className="px-6 py-3 rounded-xl text-sm font-bold text-slate-600 hover:text-slate-900 transition-all hover:bg-slate-50"
            >
              Ich bin Auftraggeber
            </Link>
            <div className="px-6 py-3 rounded-xl text-sm font-bold bg-[#0a1628] text-white shadow-md">
              Ich bin Auftragnehmer
            </div>
          </div>
        </div>

        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900/10 text-slate-900 font-bold text-sm tracking-wide mb-4">
            FÜR AUFTRAGNEHMER
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Starke Partner gesucht.<br />
            <span className="text-slate-600">Werden Sie Teil unseres Netzwerks.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Als Projektkoordinator erhalten wir täglich qualifizierte Anfragen aus dem B2B-Sektor.
            Wir suchen verlässliche Fachbetriebe, die unsere Aufträge in Subunternehmerschaft
            professionell und termingerecht ausführen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Jetzt als Partner bewerben</h2>
            <AuftragnehmerForm />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#c0a678] text-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Ihre Vorteile als Partner</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <strong className="block mb-1">Regelmäßige Aufträge</strong>
                    <span className="text-white/80 text-sm">Profitieren Sie von unserem Vertrieb. Wir bringen Ihnen die Kunden.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <strong className="block mb-1">Keine Akquisekosten</strong>
                    <span className="text-white/80 text-sm">Sie konzentrieren sich auf die Ausführung, wir auf den Rest.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <strong className="block mb-1">Faire Partnerschaft</strong>
                    <span className="text-white/80 text-sm">Pünktliche Zahlung und transparente Prozesse.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 text-white rounded-3xl shadow-sm p-8 text-center">
              <h3 className="font-bold mb-2">Wie geht es weiter?</h3>
              <p className="text-slate-400 text-sm mb-4">
                Nach Ihrer Bewerbung prüfen wir Ihre Unterlagen und melden uns telefonisch bei Ihnen, um die weiteren Schritte zu besprechen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
