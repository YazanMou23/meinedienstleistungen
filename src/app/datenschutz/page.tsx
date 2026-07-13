import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = genMeta({
  title: 'Datenschutzerklärung',
  path: '/datenschutz',
  noIndex: true,
});

export default function DatenschutzPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Datenschutzerklärung</h1>
        <p className="text-sm text-slate-500 mb-10">Stand: Juli 2026</p>

        <div className="space-y-10 text-sm text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">1. Verantwortlicher</h2>
            <p>
              Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br /><br />
              MEINEDIENSTLEISTUNGEN<br />
              {SITE_CONFIG.address.street}<br />
              {SITE_CONFIG.address.zip} {SITE_CONFIG.address.city}<br />
              E-Mail: {SITE_CONFIG.email}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
              Wir erheben personenbezogene Daten nur, wenn Sie diese uns freiwillig mitteilen — zum Beispiel durch das Ausfüllen unseres Kontaktformulars oder das Senden einer E-Mail. Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">3. Zweck der Datenverarbeitung</h2>
            <p>
              Wir verarbeiten Ihre Daten zur Beantwortung von Anfragen, zur Anbahnung und Durchführung von Verträgen sowie zur Erfüllung gesetzlicher Pflichten (Art. 6 Abs. 1 lit. b und c DSGVO). Die Verarbeitung für Werbezwecke erfolgt nur mit Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">4. Cookies und Analyse-Tools</h2>
            <p>
              Diese Website verwendet Cookies und ggf. Analyse-Tools (wie Google Analytics). Sie können dem Einsatz von Cookies jederzeit über unsere Cookie-Einstellungen widersprechen. Nähere Informationen zum Einsatz von Cookies finden Sie in unserem Cookie-Banner.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">5. Weitergabe an Dritte</h2>
            <p>
              Ihre personenbezogenen Daten werden ohne Ihre ausdrückliche Einwilligung nicht an Dritte weitergegeben, es sei denn, dies ist zur Erfüllung gesetzlicher Pflichten erforderlich oder zur Abwicklung eines Vertrages notwendig (z. B. Weitergabe an Partner im Rahmen eines Auftrags nach Ihrer Zustimmung).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">6. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie auf Datenübertragbarkeit. Zudem haben Sie das Recht, jederzeit eine erteilte Einwilligung zu widerrufen. Bitte wenden Sie sich dazu an: {SITE_CONFIG.email}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">7. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren. Die zuständige Behörde in Nordrhein-Westfalen ist der Landesbeauftragte für Datenschutz und Informationsfreiheit NRW.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
