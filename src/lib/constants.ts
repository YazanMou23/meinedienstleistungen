// Site-wide constants for MEINEDIENSTLEISTUNGEN

export const SITE_CONFIG = {
  name: 'MEINEDIENSTLEISTUNGEN',
  shortName: 'MDL',
  tagline: 'Ein Ansprechpartner. Geprüfte Partner. Garantierte Qualität.',
  description:
    'Ihr B2B Projektkoordinationspartner in Duisburg und NRW. Wir koordinieren Kabelzieharbeiten, Reinigungsdienste, Lagerlogistik, Entrümpelung und Innenausbau mit geprüften Partnern.',
  url: 'https://meinedienstleistungen.de',
  phone: '017663477268',
  phoneDisplay: '0176 63477268',
  whatsapp: '4917663477268',
  email: 'info@meinedienstleistungen.de',
  address: {
    street: 'Musterstraße 1',
    city: 'Duisburg',
    zip: '47001',
    country: 'Deutschland',
    countryCode: 'DE',
    region: 'Nordrhein-Westfalen',
  },
  social: {
    linkedin: 'https://linkedin.com/company/meinedienstleistungen',
  },
  serviceArea: ['Duisburg', 'Ruhrgebiet', 'Nordrhein-Westfalen', 'NRW'],
  metrics: [
    { value: 120, suffix: '+', label: 'Projekte abgeschlossen' },
    { value: 40, suffix: '+', label: 'Geprüfte Partner' },
    { value: 5, suffix: '', label: 'Leistungsbereiche' },
    { value: 24, suffix: 'h', label: 'Rückmeldung garantiert' },
  ],
} as const;

export const NAV_ITEMS = [
  { label: 'Startseite', href: '/' },
  {
    label: 'Leistungen',
    href: '/leistungen',
    children: [
      { label: 'Kabelzieharbeiten', href: '/leistungen/kabelzieharbeiten' },
      { label: 'Reinigungsdienst', href: '/leistungen/reinigungsdienst' },
      { label: 'Lagerlogistik', href: '/leistungen/lagerlogistik' },
      { label: 'Entrümpelung & Entsorgung', href: '/leistungen/entruempelung-entsorgung' },
      { label: 'Innenausbau & Trockenbau', href: '/leistungen/innenausbau-trockenbau' },
    ],
  },
  { label: 'Über MDL', href: '/ueber-uns' },
  { label: 'Ablauf', href: '/ablauf' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Partner werden', href: '/auftragnehmer' },
  { label: 'Projekt anfragen', href: '/auftraggeber', highlight: true },
] as const;

export const SERVICES = [
  {
    slug: 'kabelzieharbeiten',
    title: 'Kabelzieharbeiten',
    shortTitle: 'Kabelzieharbeiten',
    icon: 'cable',
    color: 'blue',
    wikidataId: 'https://www.wikidata.org/wiki/Q1313426', // Cable laying entity
    headline: 'Kabelzieharbeiten für Unternehmen in Duisburg und NRW',
    description:
      'Kabelzug, Kabelmontage und Unterstützung bei Infrastrukturprojekten für Gewerbe und Industrie. Ein Ansprechpartner koordiniert alles.',
    longDescription:
      'Professionelle Kabelzieharbeiten für Gewerbe, Industrie und Logistikzentren in Duisburg, dem Ruhrgebiet und ganz NRW. Wir koordinieren zertifizierte Fachbetriebe für Kabelzug, Kabelmontage und die komplette Kabelinfrastruktur Ihres Projekts.',
    features: [
      'Kabelzug und Kabelmontage',
      'Kabeltrassen und Kabelkanäle',
      'Datenleitungen und Netzwerkkabel',
      'Glasfaser (LWL)',
      'Elektroinstallation',
      'Structured Cabling',
    ],
    industries: [
      { name: 'Industrie & Produktion', icon: 'factory' },
      { name: 'Logistikzentren', icon: 'warehouse' },
      { name: 'Gewerbehallen', icon: 'building' },
      { name: 'Bauprojekte', icon: 'hammer' },
    ],
    problems: [
      'Zeitmangel bei der Koordination mehrerer Fachbetriebe vor Ort',
      'Fehlendes qualifiziertes Personal für anspruchsvolle Kabelarbeiten',
      'Projektverzögerungen durch unzuverlässige Subunternehmer im Baufortschritt',
      'Keine einheitliche Dokumentation der Kabelinfrastruktur nach Fertigstellung',
    ],
    gallery: [
      { src: '/images/services/kabelzieharbeiten/kabelzug-logistikhalle.jpg', alt: 'Kabelzug in Logistikhalle Duisburg', title: 'Kabelzug Logistikhalle', caption: 'Kabelmontage in einer modernen Logistikhalle im Ruhrgebiet' },
      { src: '/images/services/kabelzieharbeiten/kabelmontage-gewerbe.jpg', alt: 'Kabelmontage Gewerbegebäude NRW', title: 'Kabelmontage Gewerbe', caption: 'Professionelle Kabelmontage für Gewerbeprojekte in NRW' },
      { src: '/images/services/kabelzieharbeiten/kabeltrasse-industrie.jpg', alt: 'Kabeltrasse Industrieanlage', title: 'Kabeltrassen Installation', caption: 'Installation von Kabeltrassen in einer Industrieanlage' },
      { src: '/images/services/kabelzieharbeiten/glasfaser-verlegung.jpg', alt: 'Glasfaser Verlegung Duisburg', title: 'Glasfaserverlegung', caption: 'Glasfaserverlegung für schnelle Datenübertragung' },
      { src: '/images/services/kabelzieharbeiten/netzwerkkabel-datenzentrum.jpg', alt: 'Netzwerkkabel Datenzentrum', title: 'Netzwerkkabel', caption: 'Strukturierte Verkabelung im Rechenzentrum' },
      { src: '/images/services/kabelzieharbeiten/elektroinstallation-halle.jpg', alt: 'Elektroinstallation Gewerbehalle', title: 'Elektroinstallation', caption: 'Elektroinstallation in einer modernen Gewerbehalle' },
    ],
    faqs: [
      {
        question: 'Was kostet ein professioneller Kabelzieher-Einsatz in NRW?',
        answer: 'Die Kosten für Kabelzieharbeiten hängen stark vom Projektumfang, der Verlegeumgebung (z.B. Kabeltrassen, Erdarbeiten, Schutzrohre) sowie der Kabelart ab. MEINEDIENSTLEISTUNGEN kalkuliert für B2B-Projekte transparente Festpreisangebote nach Metern oder Aufwand. Ein typischer gewerblicher Kabelzug-Einsatz in Industriehallen in Duisburg oder Essen wird nach einer detaillierten Analyse und Begehung passgenau kalkuliert, um unerwartete Nachberechnungen konsequent zu vermeiden.'
      },
      {
        question: 'Welche Sicherheits- und Qualitätsstandards gelten bei Kabelzieharbeiten?',
        answer: 'Bei allen von MDL koordinierten Kabelzieharbeiten achten wir penibel auf die Einhaltung der VDE-Richtlinien, DIN-Normen und Unfallverhütungsvorschriften (UVV). Unsere geprüften Partnerbetriebe setzen qualifizierte Fachkräfte ein, die regelmäßig geschult werden. Jedes verlegte Kabel wird bei der Abnahme auf Durchgang und Dämpfung geprüft, digital dokumentiert und dem Kunden in Form eines vollständigen Messprotokolls zur Absicherung übergeben.'
      },
      {
        question: 'Wie schnell kann MDL Kabelzieharbeiten in Duisburg und NRW koordinieren?',
        answer: 'Wir garantieren eine erste Rückmeldung innerhalb von 24 Stunden nach Ihrer Anfrage. Ein Vor-Ort-Termin zur Analyse der Kabelwege in Städten wie Duisburg, Düsseldorf oder Oberhausen kann meist innerhalb von 2 bis 3 Werktagen stattfinden. Nach Freigabe des Festpreisangebots können die Arbeiten vor Ort in der Regel innerhalb von 5 bis 10 Werktagen starten.'
      },
      {
        question: 'Koordiniert MDL auch Arbeiten in großen Industrie- und Logistikhallen?',
        answer: 'Ja, die Koordination von Kabelzieharbeiten in Logistikzentren (z. B. im Duisburger Hafen / logport) und Industriehallen im Ruhrgebiet gehört zu unseren Kernkompetenzen. Wir koordinieren die Verlegung von schweren Stromkabeln, strukturierten Netzwerkkabeln und Glasfaserstrecken auch in großen Höhen unter Einsatz von Hebebühnen und speziellem Abrollwerkzeug, stets unter Beachtung aller B2B-Arbeitsschutzrichtlinien.'
      },
      {
        question: 'Was ist der Unterschied zwischen Kabelzug, Kabelmontage und Anschlussarbeiten?',
        answer: 'Unter Kabelzug versteht man das Einziehen von Kabeln in Trassen, Leerrohre oder Kanäle. Die Kabelmontage beinhaltet das Befestigen und Sichern dieser Kabel. Anschlussarbeiten (Terminierung) umfassen das fachgerechte Auflegen der Adern auf Klemmen, Patchpanels oder Dosen. MDL koordiniert alle drei Phasen aus einer Hand, sodass Sie einen einzigen B2B-Ansprechpartner für das gesamte Projekt haben.'
      },
      {
        question: 'Werden Kabelzieharbeiten auch außerhalb von Duisburg in NRW durchgeführt?',
        answer: 'Ja, unser Einsatzgebiet erstreckt sich über das gesamte Ruhrgebiet und ganz Nordrhein-Westfalen. Wir koordinieren regelmäßig Kabelzieharbeiten für Industrie und Gewerbe in Nachbarstädten wie Oberhausen, Essen, Mülheim an der Ruhr, Moers, Krefeld, Düsseldorf, Dinslaken und Bottrop. Durch unser breites Partnernetzwerk können wir Projekte an mehreren Standorten in NRW simultan steuern.'
      },
      {
        question: 'Welche Dokumente und Nachweise erhält der Kunde nach Projektabschluss?',
        answer: 'Nach erfolgreicher Fertigstellung und gemeinsamer Abnahme erhalten B2B-Kunden eine lückenlose Projektdokumentation. Diese enthält ein detailliertes Übergabeprotokoll, Fotodokumentationen aller verlegten Kabeltrassen, Mess- und Prüfprotokolle (z. B. Fluke-Messungen für Netzwerke) sowie die entsprechenden Konformitätserklärungen der ausführenden Partnerbetriebe zur Vorlage bei Versicherungen und Behörden.'
      },
      {
        question: 'Wie läuft die Zusammenarbeit mit MDL als B2B-Projektkoordinator ab?',
        answer: 'Der Prozess beginnt mit Ihrer Anfrage per Formular, E-Mail oder Telefon. Wir analysieren Ihren Bedarf, führen bei Bedarf eine Begehung durch und erstellen ein transparentes Festpreisangebot. Nach Freigabe wählen wir den optimalen Fachpartner aus unserem Netzwerk, koordinieren den gesamten Bauablauf vor Ort und übergeben das Projekt nach einer strengen Qualitätskontrolle schlüsselfertig.'
      }
    ],
    metaTitle: 'Kabelzieharbeiten Duisburg & NRW | B2B Kabelmontage | MDL',
    metaDescription: 'Professionelle Kabelzieharbeiten für Gewerbe und Industrie in Duisburg und NRW. Kabelmontage, Kabelzug, Glasfaser — koordiniert, termingerecht, qualitätsgesichert.',
  },
  {
    slug: 'reinigungsdienst',
    title: 'Reinigungsdienst',
    shortTitle: 'Reinigung',
    icon: 'sparkles',
    color: 'teal',
    wikidataId: 'https://www.wikidata.org/wiki/Q2166649', // Commercial cleaning entity
    headline: 'Professioneller Reinigungsdienst für Unternehmen in Duisburg und NRW',
    description:
      'Professionelle Reinigungslösungen für Unternehmen, Gewerbeobjekte und Baustellen. Koordiniert, zuverlässig und nach höchsten Hygienestandards.',
    longDescription:
      'Gewerbliche Reinigungsdienstleistungen für Unternehmen, Industrieanlagen, Bürogebäude und Baustellen in Duisburg und ganz NRW. Wir koordinieren professionelle Reinigungsteams für Unterhaltsreinigung, Grundreinigung, Baureinigung und Sonderreinigung.',
    features: [
      'Unterhaltsreinigung',
      'Grundreinigung',
      'Baureinigung',
      'Industriereinigung',
      'Büroreinigung',
      'Sonderreinigung',
    ],
    industries: [
      { name: 'Bürogebäude', icon: 'building' },
      { name: 'Industrieanlagen', icon: 'factory' },
      { name: 'Baustellen', icon: 'hammer' },
      { name: 'Lagerhallen', icon: 'warehouse' },
    ],
    problems: [
      'Unzuverlässige Reinigungskräfte und häufige Personalwechsel im Betrieb',
      'Keine einheitlichen und überprüfbaren Qualitätsstandards bei der Reinigung',
      'Hoher Koordinationsaufwand für mehrere verschiedene Reinigungsdienstleister',
      'Kurzfristiger Reinigungsbedarf (z. B. nach Bauarbeiten) ohne verfügbare Kapazitäten',
    ],
    gallery: [
      { src: '/images/services/reinigungsdienst/bueroreinigung-modern.jpg', alt: 'Bürogenreinigung modernes Bürogebäude NRW', title: 'Büroreinigung', caption: 'Professionelle Büroreinigung in Duisburg' },
      { src: '/images/services/reinigungsdienst/industriereinigung-halle.jpg', alt: 'Industriereinigung Lagerhalle Duisburg', title: 'Industriereinigung', caption: 'Reinigung großer Industriehallen im Ruhrgebiet' },
      { src: '/images/services/reinigungsdienst/baureinigung-baustelle.jpg', alt: 'Baureinigung Baustelle NRW', title: 'Baureinigung', caption: 'Endreinigung nach Baumaßnahmen' },
      { src: '/images/services/reinigungsdienst/grundreinigung-gewerbe.jpg', alt: 'Grundreinigung Gewerbeobjekt', title: 'Grundreinigung', caption: 'Gründliche Grundreinigung von Gewerbeobjekten' },
      { src: '/images/services/reinigungsdienst/reinigungteam-einsatz.jpg', alt: 'Professionelles Reinigungsteam im Einsatz', title: 'Reinigungsteam', caption: 'Erfahrene Reinigungsteams für alle Anforderungen' },
      { src: '/images/services/reinigungsdienst/hygiene-standard.jpg', alt: 'Hygiene Standards gewerbliche Reinigung', title: 'Hygienestandards', caption: 'Höchste Hygienestandards nach HACCP und ISO' },
    ],
    faqs: [
      {
        question: 'Welche gewerblichen Reinigungsdienste koordiniert MDL in Duisburg?',
        answer: 'MEINEDIENSTLEISTUNGEN koordiniert ein breites Spektrum gewerblicher Reinigungsdienste in Duisburg und NRW. Dazu gehören die regelmäßige Büro- und Unterhaltsreinigung, intensive Grundreinigungen, Baureinigungen (Baugrob- und Baufeinreinigung) sowie hochspezialisierte Industriereinigungen für Fabriken und Lagerhallen. Jedes Projekt wird von geschulten Teams durchgeführt, die genau auf die B2B-Anforderungen der jeweiligen Branche und die gesetzlichen Hygienevorgaben abgestimmt sind.'
      },
      {
        question: 'Wie stellt MDL die Einhaltung von Hygiene- und Umweltstandards sicher?',
        answer: 'Wir arbeiten ausschließlich mit zertifizierten Reinigungsfachbetrieben zusammen, die nachweislich moderne Standards (wie ISO 9001 und ISO 14001) einhalten. Die Reinigung erfolgt mit umweltfreundlichen, materialschonenden und hochwirksamen Reinigungsmitteln gemäß den Gefahrstoffverordnungen. Für sensible B2B-Bereiche wie Küchen oder Sozialräume werden detaillierte Reinigungs- und Desinfektionspläne nach HACCP-Richtlinien erstellt und lückenlos dokumentiert.'
      },
      {
        question: 'Welche Unternehmen und Branchen nutzen die Reinigungsdienste von MDL?',
        answer: 'Unser Kundenkreis umfasst Logistikunternehmen im Duisburger Hafen, Industrie- und Produktionsbetriebe in Oberhausen und Essen, Bauträger in Düsseldorf, sowie Verwaltungsbüros, Kanzleien und Arztpraxen im gesamten Ruhrgebiet. Dank unseres Netzwerks können wir sowohl für KMUs als auch für Großkonzerne maßgeschneiderte Reinigungskonzepte koordinieren, die sich nahtlos in die jeweiligen B2B-Betriebsabläufe integrieren.'
      },
      {
        question: 'Wie schnell sind Reinigungsteams für Baureinigungen in NRW einsatzbereit?',
        answer: 'Da Verzögerungen auf Baustellen teuer sind, koordinieren wir Baureinigungen äußerst flexibel. In Ballungsräumen wie Duisburg, Mülheim an der Ruhr oder Essen können wir bei akutem Bedarf oft innerhalb von 24 bis 48 Stunden ein qualifiziertes Reinigungsteam bereitstellen. So wird gewährleistet, dass Ihr Neubau- oder Sanierungsprojekt termingerecht besenrein für die offizielle Übergabe an den Mieter oder Eigentümer bereitsteht.'
      },
      {
        question: 'Bietet MDL auch regelmäßige Büroreinigung in Düsseldorf und Essen an?',
        answer: 'Ja, die regelmäßige Unterhalts- und Büroreinigung gehört zu unseren meistgefragten Koordinationsleistungen im Großraum Düsseldorf, Essen und Duisburg. Wir erstellen gemeinsam mit Ihnen ein Leistungsverzeichnis, das Reinigungsintervalle (täglich, wöchentlich, zweitägig) und spezifische Aufgaben definiert. Sie erhalten eine feste Zuteilung von Reinigungskräften, um maximale Konstanz und Vertrauenswürdigkeit in Ihren Geschäftsräumen zu garantieren.'
      },
      {
        question: 'Sind die von MDL koordinierten Reinigungskräfte haftpflichtversichert?',
        answer: 'Ja, absolute Sicherheit hat im gewerblichen Bereich höchste Priorität. Alle von MDL eingesetzten und koordinierten Partnerbetriebe verfügen über eine umfassende Betriebshaftpflichtversicherung mit hoher Deckungssumme für Sach- und Personenschäden. Sollte es während der Reinigung (z. B. an IT-Geräten im Büro oder an Maschinen in der Industrie) zu einem Schaden kommen, wird die Schadensabwicklung professionell und zügig über uns koordiniert.'
      },
      {
        question: 'Was kostet ein gewerblicher Reinigungsdienst pro Quadratmeter oder Stunde?',
        answer: 'Die Kosten einer B2B-Reinigung hängen von der Art der Reinigung (z. B. einfache Unterhaltsreinigung vs. intensive Industriereinigung), der Quadratmeterzahl, der Oberflächenbeschaffenheit und der Reinigungshäufigkeit ab. MDL erstellt nach einer kostenlosen Erstberatung und einer kurzen Objektbegehung ein transparentes Festpreisangebot. Dadurch haben Sie volle Kalkulationssicherheit für Ihr Budget ohne nachträgliche Überraschungen.'
      },
      {
        question: 'Wie flexibel können die Reinigungszeiten an B2B-Betriebsabläufe angepasst werden?',
        answer: 'Um Ihren täglichen Arbeitsablauf nicht zu stören, koordinieren wir die Reinigungsarbeiten sehr flexibel. Die Teams können wahlweise vor den regulären Bürozeiten (z. B. ab 6:00 Uhr morgens), nach Feierabend (ab 18:00 Uhr) oder am Wochenende zum Einsatz kommen. Auch Schichtbetriebe in Industrie und Logistik können durch maßgeschneiderte Reinigungszeiten abseits der Hauptproduktionszeiten optimal bedient werden.'
      }
    ],
    metaTitle: 'Reinigungsdienst Duisburg & NRW | B2B Gebäudereinigung | MDL',
    metaDescription: 'Professionelle Reinigungsdienstleistungen für Unternehmen in Duisburg und NRW. Büroreinigung, Industriereinigung, Baureinigung — koordiniert und qualitätsgesichert.',
  },
  {
    slug: 'lagerlogistik',
    title: 'Lagerlogistik',
    shortTitle: 'Lagerlogistik',
    icon: 'package',
    color: 'amber',
    wikidataId: 'https://www.wikidata.org/wiki/Q383884', // Warehouse logistics entity
    headline: 'Flexible Lagerlogistik-Unterstützung für Unternehmen in Duisburg und NRW',
    description:
      'Flexible Unterstützung durch qualifizierte Lagerhelfer für Kommissionierung, Verpackung und operative Logistik. Schnell verfügbar, zuverlässig, skalierbar.',
    longDescription:
      'Qualifizierte Lagerlogistik-Unterstützung für Unternehmen, E-Commerce-Händler und Logistikbetriebe in Duisburg und ganz NRW. Wir koordinieren eingewiesene Lagerhelfer und Logistikfachkräfte für Kommissionierung, Verpackung, Wareneingang/-ausgang und Inventur.',
    features: [
      'Kommissionierung',
      'Verpackung & Versand',
      'Wareneingang & -ausgang',
      'Inventur',
      'Produktionsunterstützung',
      'Saisonale Kapazitätserweiterung',
    ],
    industries: [
      { name: 'E-Commerce', icon: 'shopping-cart' },
      { name: 'Logistikzentren', icon: 'warehouse' },
      { name: 'Produktion', icon: 'factory' },
      { name: 'Großhandel', icon: 'building' },
    ],
    problems: [
      'Saisonale Nachfrageschwankungen ohne flexible, verlässliche Personalkapazitäten',
      'Kurzfristiger Personalausfall in operativen Schlüsselbereichen der Logistik',
      'Extrem hoher zeitlicher Koordinationsaufwand für mehrere Zeitarbeitsfirmen',
      'Fehlende fachliche Einweisung und mangelnde Qualitätssicherung beim Hilfspersonal',
    ],
    gallery: [
      { src: '/images/services/lagerlogistik/kommissionierung-lager.jpg', alt: 'Kommissionierung Lager Duisburg', title: 'Kommissionierung', caption: 'Effiziente Kommissionierung im Logistikzentrum' },
      { src: '/images/services/lagerlogistik/verpackung-versand.jpg', alt: 'Verpackung Versand E-Commerce NRW', title: 'Verpackung & Versand', caption: 'Professionelle Verpackung für E-Commerce' },
      { src: '/images/services/lagerlogistik/wareneingang-halle.jpg', alt: 'Wareneingang Lagerhalle Ruhrgebiet', title: 'Wareneingang', caption: 'Wareneingang und -prüfung in der Lagerhalle' },
      { src: '/images/services/lagerlogistik/inventur-lagerbestand.jpg', alt: 'Inventur Lagerbestand', title: 'Inventur', caption: 'Gründliche Inventur mit geschultem Personal' },
      { src: '/images/services/lagerlogistik/lagerhelfer-team.jpg', alt: 'Lagerhelfer Team Duisburg', title: 'Lagerhelfer Team', caption: 'Eingespieltes Lagerhelfer-Team im Einsatz' },
      { src: '/images/services/lagerlogistik/logistik-prozess.jpg', alt: 'Logistik Prozesse Optimierung NRW', title: 'Logistik Prozesse', caption: 'Optimierte Logistikprozesse für Ihren Betrieb' },
    ],
    faqs: [
      {
        question: 'Welche Aufgaben übernehmen die von MDL koordinierten Lagerhelfer?',
        answer: 'Die von MEINEDIENSTLEISTUNGEN koordinierten Lagerhelfer und Logistikfachkräfte decken das gesamte Spektrum der operativen Lagerlogistik ab. Dazu gehören das Kommissionieren von B2B- und B2C-Bestellungen (z. B. per Pick-by-Light oder Handscanner), das transportsichere Verpacken und Etikettieren von Waren, die Unterstützung im Wareneingang und Warenausgang sowie die Durchführung strukturierter Inventuren. Auch einfache Tätigkeiten in der Konfektionierung oder Displaybestückung werden zuverlässig übernommen.'
      },
      {
        question: 'Wie flexibel kann das Logistikpersonal bei saisonalen Spitzen skaliert werden?',
        answer: 'Flexibilität ist unsere größte Stärke. Gerade im E-Commerce und Großhandel gibt es starke saisonale Schwankungen (z. B. Black Friday, Weihnachtsgeschäft). MDL ermöglicht es Unternehmen in Duisburg und NRW, ihre Personalkapazitäten im Lager kurzfristig hoch- oder herunterzuskalieren. Durch unser großes Partnernetzwerk können wir bei Planungsänderungen in der Regel innerhalb von 24 bis 48 Stunden zusätzliches, eingewiesenes Personal bereitstellen.'
      },
      {
        question: 'Sind die Logistikhelfer für die Arbeit in modernen Logistikzentren geschult?',
        answer: 'Ja, alle koordinierten Lagerhelfer verfügen über praktische Erfahrung im Logistikbereich und sind mit den grundlegenden Sicherheitsunterweisungen (z. B. Verhalten im Lager, Arbeitsschutz) vertraut. Vor dem Ersteinsatz stimmen wir uns eng mit Ihrer Betriebsleitung ab, um sicherzustellen, dass die Arbeitskräfte mit den spezifischen Systemen (z. B. ERP-Software, Handscannern) vor Ort schnell produktiv arbeiten können.'
      },
      {
        question: 'Unterstützt MDL auch Logistikbetriebe im Duisburger Hafen und logport?',
        answer: 'Ja, der Duisburger Hafen (einschließlich logport I, II und III) ist einer der wichtigsten Logistik-Hubs weltweit und bildet den Schwerpunkt unseres Einsatzgebietes. Wir koordinieren täglich Personal für namhafte Logistiker, Speditionen und Fulfillment-Dienstleister in Duisburg, Moers, Rheinhausen und Krefeld. Wir kennen die hohen Anforderungen an Geschwindigkeit und Präzision in diesen Großhubs und stellen passende Teams bereit.'
      },
      {
        question: 'Wie unterscheidet sich die MDL-Personalkoordination von klassischer Zeitarbeit?',
        answer: 'Im Gegensatz zu reinen Zeitarbeitsfirmen fungiert MDL als B2B-Projektkoordinationspartner. Wir übernehmen die Verantwortung für das Gesamtergebnis. Das bedeutet: Sie haben nur einen Ansprechpartner (Single Point of Contact), der die Abstimmung, Qualitätskontrolle, Zeiterfassung und das Ausfallmanagement steuert. Sie sparen wertvolle Zeit im HR-Bereich und erhalten eine konsolidierte Abrechnung ohne den üblichen administrativen Aufwand.'
      },
      {
        question: 'Welche Regionen in NRW deckt MDL für Lagerlogistik ab?',
        answer: 'Wir koordinieren Lagerlogistik-Unterstützung im gesamten Ruhrgebiet und im Großraum Nordrhein-Westfalen. Zu unseren Haupteinsatzorten gehören Duisburg, Essen, Oberhausen, Mülheim an der Ruhr, Krefeld, Düsseldorf, Neuss, Dinslaken und Bottrop. Dank unserer regionalen Verwurzelung können wir auch an mehreren Standorten eines B2B-Kunden in NRW gleichzeitig qualifiziertes Personal koordinieren.'
      },
      {
        question: 'Wie läuft die Zeiterfassung und Dokumentation bei Logistikeinsätzen ab?',
        answer: 'Die Zeiterfassung erfolgt absolut transparent und digital. Die Arbeitsstunden der koordinierten Logistikhelfer werden täglich oder wöchentlich über Stundenzettel erfasst, die von Ihrer Schicht- oder Betriebsleitung vor Ort abgezeichnet werden. MDL bündelt diese Daten und stellt Ihnen eine übersichtliche wöchentliche Aufstellung zur Verfügung. So behalten Sie jederzeit die volle Kontrolle über die Projektkosten und die Einhaltung des Budgets.'
      },
      {
        question: 'Welche B2B-Zielgruppen profitieren am meisten von der Lagerunterstützung?',
        answer: 'Unsere Dienstleistung richtet sich an E-Commerce-Händler mit eigenem Fulfillment, Kontraktlogistiker, Speditionen, Großhändler sowie Industriebetriebe mit angeschlossener Lagerhaltung in NRW. Überall dort, wo Arbeitsspitzen abzufangen sind oder struktureller Personalmangel die Lieferfähigkeit gefährdet, bietet MDL eine schnelle, unkomplizierte und rechtssichere Koordinationslösung an.'
      }
    ],
    metaTitle: 'Lagerlogistik Duisburg & NRW | B2B Lagerhelfer | MDL',
    metaDescription: 'Flexible Lagerlogistik-Unterstützung in Duisburg und NRW. Qualifizierte Lagerhelfer für Kommissionierung, Verpackung, Inventur — schnell verfügbar, skalierbar.',
  },
  {
    slug: 'entruempelung-entsorgung',
    title: 'Entrümpelung & Entsorgung',
    shortTitle: 'Entrümpelung',
    icon: 'trash-2',
    color: 'orange',
    wikidataId: 'https://www.wikidata.org/wiki/Q1195655', // Waste management entity
    headline: 'Gewerbliche Entrümpelung & Entsorgung in Duisburg und NRW',
    description:
      'Gewerbliche Räumungen, Sortierung und professionelle Entsorgung. Schnell, zuverlässig und umweltgerecht koordiniert.',
    longDescription:
      'Professionelle Entrümpelung und Entsorgung für Unternehmen, Gewerbeobjekte, Lager und Industrieanlagen in Duisburg und ganz NRW. Wir koordinieren erfahrene Teams für Räumung, Sortierung, Wertstofftrennung und fachgerechte Entsorgung.',
    features: [
      'Gewerbliche Räumungen',
      'Sperrmüllentsorgung',
      'Wertstofftrennung & Recycling',
      'Aktenvernichtung',
      'Schadstoffentsorgung',
      'Besenreine Übergabe',
    ],
    industries: [
      { name: 'Gewerbeobjekte', icon: 'building' },
      { name: 'Industrieanlagen', icon: 'factory' },
      { name: 'Lager & Magazine', icon: 'warehouse' },
      { name: 'Baustellen', icon: 'hammer' },
    ],
    problems: [
      'Enorme Großmengen an Abfall und Altmaterialien ohne eigene Entsorgungskapazität',
      'Strenge rechtliche Compliance-Anforderungen bei der Entsorgung von Gefahrstoffen',
      'Hoher Zeitdruck bei Räumungen für Nachmieter oder anstehende Sanierungen',
      'Koordinationsaufwand für Transportlogistik und behördliche Entsorgungsnachweise',
    ],
    gallery: [
      { src: '/images/services/entruempelung/gewerberaum-raeumung.jpg', alt: 'Gewerberaum Räumung Duisburg', title: 'Gewerberäumung', caption: 'Vollständige Räumung von Gewerbeobjekten' },
      { src: '/images/services/entruempelung/lager-entruempelung.jpg', alt: 'Lager Entrümpelung NRW', title: 'Lagerentrümpelung', caption: 'Professionelle Entrümpelung von Lagerflächen' },
      { src: '/images/services/entruempelung/entsorgung-sortierung.jpg', alt: 'Entsorgung Sortierung Wertstoffe', title: 'Sortierung & Entsorgung', caption: 'Fachgerechte Sortierung und Entsorgung von Wertstoffen' },
      { src: '/images/services/entruempelung/transporter-entsorgung.jpg', alt: 'Transporter Entsorgung Ruhrgebiet', title: 'Transport & Entsorgung', caption: 'Logistik und Transport für Entsorgungsprojekte' },
      { src: '/images/services/entruempelung/bueroaufloesung.jpg', alt: 'Büroauflösung gewerblich', title: 'Büroauflösung', caption: 'Vollständige Büroauflösung mit besenreiner Übergabe' },
      { src: '/images/services/entruempelung/recycling-trennung.jpg', alt: 'Recycling Mülltrennung gewerblich NRW', title: 'Recycling', caption: 'Umweltgerechtes Recycling und Wertstofftrennung' },
    ],
    faqs: [
      {
        question: 'Was kostet eine gewerbliche Entrümpelung in Duisburg und NRW?',
        answer: 'Die Kosten für eine gewerbliche Entrümpelung hängen vom Ladevolumen (in Kubikmetern), der Art des Materials (z. B. Holz, Metall, Elektronikschrott, gefährliche Abfälle) und dem Arbeitsaufwand ab. MDL führt grundsätzlich eine kostenlose Erstbegehung in Duisburg, Essen oder Düsseldorf durch und kalkuliert daraufhin ein verbindliches Festpreisangebot. Eventuell vorhandene B2B-Wertgegenstände (wie intakte Büromöbel oder Metallschrott) können wertmindernd angerechnet werden.'
      },
      {
        question: 'Welche Abfallarten und Materialien darf MDL entsorgen?',
        answer: 'Über unser zertifiziertes Entsorgungsnetzwerk koordinieren wir die fachgerechte Entsorgung fast aller Abfallarten. Dazu gehören Sperrmüll, Bauschutt, Altholz, Altmetalle, Elektroaltgeräte (WEEE), Akten und Datenträger sowie gefährliche Abfälle (Sonderabfälle). Jede Entsorgung erfolgt streng nach dem Kreislaufwirtschaftsgesetz (KrWG), wobei wir dem B2B-Kunden alle behördlich vorgeschriebenen Entsorgungsnachweise und Übernahmescheine lückenlos aushändigen.'
      },
      {
        question: 'Wie wird eine datenschutzkonforme Aktenvernichtung koordiniert?',
        answer: 'Bei Büroauflösungen koordiniert MDL die Entsorgung sensibler Dokumente streng nach der DSGVO und der DIN 66399 (Schutzklassen 1-3). Die Akten werden in verschlossenen Sicherheitsbehältern abtransportiert und in zertifizierten Schredderanlagen vernichtet. Nach Abschluss des Zerkleinerungsprozesses erhalten Sie ein offizielles Vernichtungszertifikat für Ihre Unterlagen, das die rechtssichere B2B-Entsorgung gegenüber Prüfern und Behörden zweifelsfrei belegt.'
      },
      {
        question: 'Wie schnell kann MDL eine Betriebsauflösung in NRW abwickeln?',
        answer: 'Zeit ist Geld, besonders bei auslaufenden Mietverträgen. Nach Ihrer Anfrage führen wir innerhalb von 24 Stunden eine Besichtigung durch. Die eigentliche Räumung eines typischen Bürogebäudes oder Lagers in Städten wie Duisburg, Oberhausen oder Mülheim an der Ruhr kann meist innerhalb von 3 bis 5 Werktagen nach Beauftragung komplett abgeschlossen sein. Wir arbeiten auch an Wochenenden, um Ihren laufenden Betrieb nicht zu beeinträchtigen.'
      },
      {
        question: 'Was bedeutet die sogenannte „besenreine Übergabe“ bei Räumungen?',
        answer: 'Eine besenreine Übergabe durch MDL garantiert, dass alle Räumlichkeiten komplett geräumt, grober Schmutz entfernt und die Böden gründlich gefegt oder gesaugt übergeben werden. Dazu gehört auch das Entfernen von Einbauten, Teppichböden, Wandverkleidungen und Deckenabhängungen, falls dies im Mietvertrag gefordert ist. Ihr Objekt ist nach unserer Arbeit sofort bereit für die Übergabe an den Vermieter oder für Renovierungsarbeiten.'
      },
      {
        question: 'Unterstützt MDL auch bei der Räumung großer Industrie- und Lagerhallen?',
        answer: 'Ja, die Räumung von Industrieanlagen, Fabrikhallen und großen Lagern im Ruhrgebiet gehört zu unseren Spezialgebieten. Wir koordinieren den Abbau und Abtransport von schweren Maschinen, Stahlkonstruktionen, Regalsystemen (z. B. Hochregalen) und Altmetallen. Hierbei setzen wir spezialisierte Partner mit schwerem Gerät wie Kränen, Gabelstaplern und Containern ein, um einen sicheren und effizienten Ablauf zu garantieren.'
      },
      {
        question: 'Wie umweltfreundlich ist das Entsorgungssystem von MEINEDIENSTLEISTUNGEN?',
        answer: 'MDL fühlt sich dem Umweltschutz verpflichtet. Wir achten bei jeder Entrümpelung konsequent auf eine saubere Mülltrennung direkt vor Ort. Wertstoffe wie Metalle, Kunststoffe, Holz und Papier werden getrennt und dem Recyclingkreislauf zugeführt. Nur nicht-verwertbare Reststoffe werden in zugelassenen Müllverbrennungsanlagen in NRW entsorgt. Dadurch minimieren wir die Umweltbelastung und senken gleichzeitig die Deponiekosten für unsere B2B-Kunden.'
      },
      {
        question: 'Welche Haftungsabsicherung besteht bei Schäden während der Entrümpelung?',
        answer: 'Sicherheit steht an erster Stelle, doch bei schweren Transporten im Gebäude lässt sich ein Risiko nie ganz ausschließen. Alle von MDL eingesetzten Teams sind über eine umfassende Betriebshaftpflichtversicherung der Partnerbetriebe abgesichert. Sollte es während der Räumung zu Schäden an Wänden, Türen, Aufzügen oder verbleibendem Inventar kommen, koordinieren wir die Regulierung schnell und unbürokratisch für Sie. Sie sind als Auftraggeber jederzeit abgesichert.'
      }
    ],
    metaTitle: 'Entrümpelung & Entsorgung Duisburg & NRW | B2B Räumung | MDL',
    metaDescription: 'Gewerbliche Entrümpelung und Entsorgung in Duisburg und NRW. Räumungen, Sortierung, fachgerechte Entsorgung — koordiniert, schnell und mit Entsorgungsnachweis.',
  },
  {
    slug: 'innenausbau-trockenbau',
    title: 'Innenausbau & Trockenbau',
    shortTitle: 'Innenausbau',
    icon: 'layers',
    color: 'slate',
    wikidataId: 'https://www.wikidata.org/wiki/Q1663990', // Interior construction entity
    headline: 'Innenausbau & Trockenbau für Unternehmen in Duisburg und NRW',
    description:
      'Unterstützung bei Innenausbau, Trockenbau und gewerblichen Ausbauprojekten. Koordiniert mit geprüften Fachbetrieben, termingerecht und qualitätsgesichert.',
    longDescription:
      'Professioneller Innenausbau und Trockenbau für Gewerbe, Industrie und Immobilienprojekte in Duisburg und ganz NRW. Wir koordinieren zertifizierte Trockenbaubetriebe für Ständerwerkbau, Akustikdecken, Brandschutzwände und vollständigen Innenausbau.',
    features: [
      'Ständerwerkbau',
      'Akustikdecken',
      'Brandschutzwände (F30/F60/F90)',
      'Innenausbau Gewerbe',
      'Systemtrennwände',
      'Deckenverkleidungen',
    ],
    industries: [
      { name: 'Bürogebäude', icon: 'building' },
      { name: 'Industriehallen', icon: 'factory' },
      { name: 'Gewerbeobjekte', icon: 'warehouse' },
      { name: 'Bauprojekte', icon: 'hammer' },
    ],
    problems: [
      'Mangelnde Koordination zwischen verschiedenen Gewerken verzögert die Fertigstellung',
      'Komplexe gesetzliche Brandschutzanforderungen ohne spezialisierte Fachbetriebe',
      'Fehlende Projektsteuerung und mangelhafte Qualitätskontrolle beim Innenausbau',
      'Signifikante Termin- und Kostenüberschreitungen durch unzureichende Planung',
    ],
    gallery: [
      { src: '/images/services/innenausbau/trockenbau-buerogebaeude.jpg', alt: 'Trockenbau Bürogebäude NRW', title: 'Büroausbau Trockenbau', caption: 'Moderner Trockenbauausbau für Bürogebäude in NRW' },
      { src: '/images/services/innenausbau/staenderwerkbau-gewerbe.jpg', alt: 'Ständerwerkbau Gewerbe Duisburg', title: 'Ständerwerkbau', caption: 'Professioneller Ständerwerkbau für Gewerbeprojekte' },
      { src: '/images/services/innenausbau/akustikdecke-montage.jpg', alt: 'Akustikdecke Montage Büro', title: 'Akustikdecken', caption: 'Montage von Akustikdecken für optimale Raumakustik' },
      { src: '/images/services/innenausbau/brandschutzwand.jpg', alt: 'Brandschutzwand F60 Industrie', title: 'Brandschutzwände', caption: 'Zertifizierte Brandschutzwände nach F30/F60/F90' },
      { src: '/images/services/innenausbau/innenausbau-halle.jpg', alt: 'Innenausbau Industriehalle Ruhrgebiet', title: 'Halleneausbau', caption: 'Vollständiger Innenausbau einer Industriehalle' },
      { src: '/images/services/innenausbau/systemtrennwaende.jpg', alt: 'Systemtrennwände flexibles Büro', title: 'Systemtrennwände', caption: 'Flexible Systemtrennwände für moderne Arbeitswelten' },
    ],
    faqs: [
      {
        question: 'Welche Trockenbau-Leistungen koordiniert MDL in Duisburg und NRW?',
        answer: 'MEINEDIENSTLEISTUNGEN koordiniert alle gängigen Trockenbau- und Innenausbauarbeiten für gewerbliche B2B-Kunden. Dazu gehören die Errichtung von leichten Trennwänden im Ständerwerkverfahren, der Einbau von Schallschutz- und Akustikdecken für Büros, der fachgerechte Brandschutzausbau sowie die Montage von modernen Systemtrennwänden zur flexiblen Raumnutzung. Wir koordinieren erfahrene Stuckateure und Trockenbauer, die Ihr Projekt sauber, maßgenau und nach DIN-Normen umsetzen.'
      },
      {
        question: 'Welche Brandschutzklassen werden im Trockenbau abgedeckt?',
        answer: 'Unsere qualifizierten Partnerbetriebe im Bereich Innenausbau decken alle geforderten B2B-Brandschutzklassen ab, darunter F30 (feuerhemmend), F60 (hochfeuerhemmend) und F90 (feuerbeständig). Wir koordinieren den fachgerechten Einbau von Brandschutzdecken und Brandschutzwänden nach DIN 4102. Nach Abschluss der Arbeiten erhalten Sie alle notwendigen Übereinstimmungserklärungen und Dokumente zur Vorlage beim Bauamt und Ihrer Sachversicherungen.'
      },
      {
        question: 'Wie läuft die Koordinierung zwischen Trockenbau und Elektroinstallation ab?',
        answer: 'Eine mangelnde Abstimmung zwischen Trockenbauern und Elektrikern führt oft zu Bauverzögerungen. Als Ihr B2B-Projektkoordinator sorgt MDL für einen nahtlosen Ablauf: Wir koordinieren die Gewerke so, dass Kabelwege und Hohlwanddosen passgenau während der Ständerwerkerrichtung installiert werden, bevor die Beplankung mit Gipsplatten erfolgt. Das spart wertvolle Zeit, verhindert teure Doppelarbeiten und stellt eine saubere Schnittstellenkoordination sicher.'
      },
      {
        question: 'Können Akustikdecken in bestehenden Bürogebäuden nachträglich montiert werden?',
        answer: 'Ja, das nachträgliche Montieren von Akustikdecken (z. B. Rasterdecken oder abgehängten Decken mit schallabsorbierenden Gips- oder Mineralfaserplatten) ist in den meisten Gewerbeobjekten in Essen, Düsseldorf oder Duisburg problemlos möglich. Dies verbessert die Raumakustik in Großraumbüros erheblich. MDL plan und koordiniert diese Arbeiten flexibel abseits Ihrer Kernarbeitszeiten, um den Bürobetrieb so wenig wie möglich zu stören.'
      },
      {
        question: 'Unterstützt MDL B2B-Kunden bei Büro-Umgestaltungen in Düsseldorf und Essen?',
        answer: 'Ja, die Neugestaltung und Raumaufteilung bestehender Gewerbeflächen ist ein Hauptpfeiler unserer B2B-Leistungen. Wir koordinieren den Rückbau alter Wände, die Installation neuer Ständerwerke und Akustikelemente sowie Malerarbeiten. Egal ob Sie zusätzliche Meetingräume, Einzelbüros oder eine moderne Open-Space-Fläche in Düsseldorf, Duisburg oder Essen realisieren möchten — MDL steuert das Projekt termingerecht und schlüsselfertig.'
      },
      {
        question: 'Wie wird die Qualität der Trockenbauarbeiten vor Ort kontrolliert?',
        answer: 'Qualitätssicherung is fest in unserem Koordinationsprozess verankert. Ihr persönlicher MDL-Projektkoordinator führt regelmäßige Kontrollen auf der Baustelle durch. Dabei werden kritische Punkte wie Achs- und Fluchtmaße, Profilabstände, Brandschutzdetails und die Oberflächenqualität der Spachtelarbeiten (Q1 bis Q4) nach strengen Richtlinien geprüft. Erst nach bestandener Endkontrolle erfolgt die offizielle Abnahme gemeinsam mit Ihnen.'
      },
      {
        question: 'Was kostet ein Quadratmeter Trockenbauwand inklusive Montage?',
        answer: 'Die Kosten für eine Trockenbauwand variieren je nach Wandstärke, Dämmung, Beplankung (einfach oder doppelt beplankt mit Standard- oder Feuchtraumplatten) und den Brandschutzanforderungen. MDL erstellt für Ihr Projekt in NRW ein transparentes und detailliertes B2B-Festpreisangebot auf Basis der Quadratmeterzahl. Dies gibt Ihnen absolute Budgetsicherheit ohne das Risiko von Nachforderungen während der Bauphase.'
      },
      {
        question: 'Wie stellt MDL die Einhaltung des Zeitplans beim Innenausbau sicher?',
        answer: 'Wir arbeiten mit detaillierten Bauzeitenplänen und Meilensteinen. Durch unser großes Partnernetzwerk in NRW können wir bei Bedarf zusätzliche Arbeitskräfte mobilisieren, um Verzögerungen auszugleichen. Da wir die Koordination aller beteiligten Gewerke (Trockenbau, Maler, Elektro) übernehmen, entfallen Reibungsverluste an den Schnittstellen. So garantieren wir eine pünktliche Fertigstellung Ihres Innenausbaus.'
      }
    ],
    metaTitle: 'Innenausbau & Trockenbau Duisburg & NRW | B2B Trockenbau | MDL',
    metaDescription: 'Innenausbau und Trockenbau für Gewerbe in Duisburg und NRW. Ständerwerkbau, Akustikdecken, Brandschutzwände — koordiniert, termingerecht, qualitätsgesichert.',
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Anfrage',
    description: 'Sie schildern Ihr Projekt per Formular, Telefon oder E-Mail. Wir melden uns innerhalb von 24 Stunden zurück.',
    icon: 'message-square',
    duration: '< 24 Stunden',
    clientAction: 'Projektanfrage stellen',
    ourAction: 'Erstgespräch & Bedarfsanalyse',
  },
  {
    number: '02',
    title: 'Analyse',
    description: 'Wir analysieren Ihren Bedarf, klären Umfang, Anforderungen und Zeitrahmen — transparent und verbindlich.',
    icon: 'search',
    duration: '1–3 Werktage',
    clientAction: 'Pläne & Unterlagen bereitstellen',
    ourAction: 'Angebot & Projektplan erstellen',
  },
  {
    number: '03',
    title: 'Planung',
    description: 'Sie erhalten ein verbindliches Festpreisangebot. Nach Ihrer Freigabe starten wir die Detailplanung.',
    icon: 'clipboard-list',
    duration: '2–5 Werktage',
    clientAction: 'Angebot freigeben',
    ourAction: 'Partnerauswahl & Zeitplanung',
  },
  {
    number: '04',
    title: 'Koordination',
    description: 'Wir wählen geprüfte Fachpartner aus unserem Netzwerk und koordinieren alle Beteiligten für Ihr Projekt.',
    icon: 'users',
    duration: '3–7 Werktage',
    clientAction: 'Regelmäßige Updates erhalten',
    ourAction: 'Fachpartner auswählen & beauftragen',
  },
  {
    number: '05',
    title: 'Durchführung',
    description: 'Unsere Partner führen die Arbeiten durch — wir steuern vor Ort, halten Termine und lösen Probleme sofort.',
    icon: 'hard-hat',
    duration: 'Projektabhängig',
    clientAction: 'Fortschrittsberichte empfangen',
    ourAction: 'Vor-Ort-Koordination & Steuerung',
  },
  {
    number: '06',
    title: 'Kontrolle',
    description: 'Wir überwachen Qualität nach definierten Standards und sorgen sofort für Nachbesserung bei Abweichungen.',
    icon: 'shield-check',
    duration: 'Laufend',
    clientAction: 'Optional: Zwischenstände begutachten',
    ourAction: 'Qualitätskontrolle & Fortschrittsdokumentation',
  },
  {
    number: '07',
    title: 'Dokumentation',
    description: 'Gemeinsame Abnahme mit vollständiger Dokumentation — Berichte, Fotos und Unterlagen in Ihren Händen.',
    icon: 'check-circle',
    duration: '1 Tag',
    clientAction: 'Projekt abnehmen',
    ourAction: 'Abschlussdokumentation übergeben',
  },
] as const;

export const TRUST_PILLARS = [
  {
    icon: 'briefcase',
    title: 'B2B Projektpartner',
    description: 'Spezialisiert auf gewerbliche Auftraggeber — von KMU bis Konzern.',
  },
  {
    icon: 'map-pin',
    title: 'NRW Einsatzgebiet',
    description: 'Duisburg, Ruhrgebiet und ganz Nordrhein-Westfalen. Vor Ort verfügbar.',
  },
  {
    icon: 'user-check',
    title: 'Ein Ansprechpartner',
    description: 'Kein Vendor-Management-Chaos. Sie haben eine feste B2B-Kontaktperson.',
  },
  {
    icon: 'shield-check',
    title: 'Dokumentierte Qualität',
    description: 'Jedes Projekt wird nach definierten Standards kontrolliert und dokumentiert.',
  },
  {
    icon: 'zap',
    title: 'Flexible Unterstützung',
    description: 'Kurzfristig, skalierbar und saisonal — genau dann, wenn Sie es brauchen.',
  },
] as const;

export const GENERAL_FAQS = [
  {
    question: 'Was macht MEINEDIENSTLEISTUNGEN?',
    answer: 'MEINEDIENSTLEISTUNGEN (MDL) ist ein B2B Projektkoordinationspartner. Das bedeutet: Sie haben ein Projekt, wir übernehmen die gesamte Steuerung — von der Partnerauswahl über die Terminplanung bis zur Qualitätskontrolle und Abnahme. Sie haben einen Ansprechpartner, wir managen die Umsetzung. Einsatzgebiete: Kabelzieharbeiten, Reinigungsdienst, Lagerlogistik, Entrümpelung & Entsorgung sowie Innenausbau & Trockenbau.',
  },
  {
    question: 'Welche Regionen betreut MEINEDIENSTLEISTUNGEN?',
    answer: 'MDL ist schwerpunktmäßig in Duisburg, dem Ruhrgebiet und ganz Nordrhein-Westfalen (NRW) tätig. Bei Bedarf koordinieren wir auch Projekte darüber hinaus — sprechen Sie uns direkt an.',
  },
  {
    question: 'Wie schnell kann MDL mit einem Projekt starten?',
    answer: 'Wir melden uns innerhalb von 24 Stunden auf jede Anfrage zurück. Nach Auftragserteilung und Projektklärung starten wir in der Regel innerhalb von 5–10 Werktagen mit der Umsetzung. Bei dringenden Projekten kontaktieren Sie uns direkt per Telefon.',
  },
  {
    question: 'Was kostet die Projektkoordination durch MDL?',
    answer: 'Die Koordinationsleistung ist in unserem transparenten Gesamtangebot enthalten — keine versteckten Kosten. Sie erhalten ein verbindliches Festpreisangebot vor Projektbeginn. Abgerechnet wird nach Projektabschluss oder vereinbarten Meilensteinen.',
  },
  {
    question: 'Wie stellt MDL die Qualität der Partnerbetriebe sicher?',
    answer: 'Alle Partnerbetriebe durchlaufen ein strukturiertes Aufnahmeverfahren: Zertifikatsprüfung, Referenzprüfung, Versicherungsnachweis und engmaschige Begleitung bei Erstaufträgen. Jedes Projekt wird mit definierten Qualitätsprüfpunkten überwacht.',
  },
  {
    question: 'Kann MDL kurzfristig Personal und Kapazitäten bereitstellen?',
    answer: 'Ja. Über unser geprüftes Partnernetzwerk können wir auch bei kurzfristigen Projekten schnell reagieren. Für Lagerlogistik-Unterstützung stellen wir oft innerhalb von 24–48 Stunden Personal bereit.',
  },
] as const;
