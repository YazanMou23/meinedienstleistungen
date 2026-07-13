import { Metadata } from 'next';
import Link from 'next/link';
import AuftraggeberForm from '@/components/forms/AuftraggeberForm';

export const metadata: Metadata = {
  title: 'Projekt anfragen | MEINEDIENSTLEISTUNGEN',
  description: 'Sie haben ein Projekt, wir haben die Partner. Jetzt unverbindlich Projekt anfragen und wir kümmern uns um den Rest.',
};

export default function AuftraggeberPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container-md">
        {/* Role Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-white border border-slate-200 p-1.5 rounded-2xl inline-flex shadow-sm">
            <div className="px-6 py-3 rounded-xl text-sm font-bold bg-[#0a1628] text-white shadow-md">
              Ich bin Auftraggeber
            </div>
            <Link 
              href="/auftragnehmer" 
              className="px-6 py-3 rounded-xl text-sm font-bold text-slate-600 hover:text-slate-900 transition-all hover:bg-slate-50"
            >
              Ich bin Auftragnehmer
            </Link>
          </div>
        </div>

        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#c0a678]/10 text-[#c0a678] font-bold text-sm tracking-wide mb-4">
            FÜR AUFTRAGGEBER
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Sie haben ein Projekt.<br />
            <span className="text-[#c0a678]">Wir machen den Rest.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Sparen Sie sich die mühsame Suche nach zuverlässigen Handwerkern und Dienstleistern.
            Beschreiben Sie Ihr Projekt, und wir stellen Ihnen das perfekte Team aus unserem
            geprüften Partnernetzwerk zusammen – mit uns als Ihrem einzigen Ansprechpartner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Projektdetails angeben</h2>
            <AuftraggeberForm />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-4">Ihre Vorteile</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c0a678]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#c0a678] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <strong className="block mb-1">Ein Ansprechpartner</strong>
                    <span className="text-slate-400 text-sm">Kein Koordinationschaos. Wir regeln alles für Sie.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c0a678]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#c0a678] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <strong className="block mb-1">Geprüfte Qualität</strong>
                    <span className="text-slate-400 text-sm">Wir arbeiten nur mit zertifizierten und verlässlichen Partnern.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c0a678]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#c0a678] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <strong className="block mb-1">Schnelle Umsetzung</strong>
                    <span className="text-slate-400 text-sm">Durch unser großes Netzwerk finden wir schnell Kapazitäten.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 text-center">
              <h3 className="font-bold text-slate-900 mb-2">Fragen vorab?</h3>
              <p className="text-slate-600 text-sm mb-4">Rufen Sie uns gerne direkt an.</p>
              <a href="tel:+49201123456" className="inline-block font-bold text-[#c0a678] hover:text-[#aa905d] transition-colors text-lg">
                +49 201 123 456
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
