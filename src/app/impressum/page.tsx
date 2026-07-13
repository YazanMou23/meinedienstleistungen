import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = genMeta({
  title: 'Impressum',
  path: '/impressum',
  noIndex: true,
});

export default function ImpressumPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-10">Impressum</h1>

        <div className="prose prose-slate max-w-none space-y-8 text-sm text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              MEINEDIENSTLEISTUNGEN<br />
              {SITE_CONFIG.address.street}<br />
              {SITE_CONFIG.address.zip} {SITE_CONFIG.address.city}<br />
              {SITE_CONFIG.address.country}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Kontakt</h2>
            <p>
              Telefon: {SITE_CONFIG.phoneDisplay}<br />
              E-Mail: {SITE_CONFIG.email}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE [XXXXXXXX] — bitte ergänzen
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              [Name des Verantwortlichen]<br />
              {SITE_CONFIG.address.street}<br />
              {SITE_CONFIG.address.zip} {SITE_CONFIG.address.city}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Haftungsausschluss</h2>
            <h3 className="font-semibold text-slate-800 mb-2">Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <h3 className="font-semibold text-slate-800 mb-2 mt-4">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
