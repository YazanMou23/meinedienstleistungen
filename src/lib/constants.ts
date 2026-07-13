// Site-wide constants for MEINEDIENSTLEISTUNGEN

export const SITE_CONFIG = {
  name: 'MEINEDIENSTLEISTUNGEN',
  shortName: 'MDL',
  tagline: 'Ein Ansprechpartner. Geprüfte Partner. Garantierte Qualität.',
  description:
    'Ihr Projekt-Koordinationspartner für Kabelverlegung, Trockenbau, Fliesenarbeiten und Lager & Logistik. Qualitätsgesicherte Umsetzung aus einer Hand.',
  url: 'https://meinedienstleistungen.de',
  phone: '017663477268',
  phoneDisplay: '0176 63477268',
  email: 'info@meinediensleistungen.de',
  address: {
    street: 'Musterstraße 1',
    city: 'Duisburg',
    zip: '47001',
    country: 'Deutschland',
    countryCode: 'DE',
  },
  social: {
    linkedin: 'https://linkedin.com/company/meinedienstleistungen',
  },
  // Metrics for trust bar - update as company grows
  metrics: [
    { value: 120, suffix: '+', label: 'Projekte abgeschlossen' },
    { value: 40, suffix: '+', label: 'Geprüfte Partner' },
    { value: 4, suffix: '', label: 'Branchen' },
    { value: 24, suffix: 'h', label: 'Rückmeldung garantiert' },
  ],
} as const;

export const NAV_ITEMS = [
  { label: 'Startseite', href: '/' },
  {
    label: 'Leistungen',
    href: '/leistungen',
    children: [
      { label: 'Kabelverlegung', href: '/leistungen/kabelverlegung' },
      { label: 'Trockenbau', href: '/leistungen/trockenbau' },
      { label: 'Fliesenarbeiten', href: '/leistungen/fliesenarbeiten' },
      { label: 'Lager & Logistik', href: '/leistungen/lager-logistik' },
    ],
  },
  { label: 'So funktioniert\'s', href: '/so-funktionierts' },
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;

export const SERVICES = [
  {
    slug: 'kabelverlegung',
    title: 'Kabelverlegung',
    shortTitle: 'Kabelverlegung',
    icon: 'cable',
    headline: 'Professionelle Kabelverlegung — koordiniert aus einer Hand',
    description:
      'Netzwerkkabel, Glasfaser, Elektroinstallation und Datenleitungen — wir koordinieren qualifizierte Fachpartner für Ihre Kabelprojekte.',
    features: [
      'Netzwerkkabel (LAN/WAN)',
      'Glasfaser (FTTH/FTTO)',
      'Elektroinstallation',
      'Datenleitungen',
      'Structured Cabling',
    ],
    metaTitle: 'Kabelverlegung Gewerbe — Koordinierter Fachservice | MEINEDIENSTLEISTUNGEN',
    metaDescription:
      'Professionelle Kabelverlegung für Unternehmen. Netzwerkkabel, Glasfaser, Elektro. Geprüfte Partner, ein Ansprechpartner, garantierte Qualität.',
    color: 'blue',
  },
  {
    slug: 'trockenbau',
    title: 'Trockenbau',
    shortTitle: 'Trockenbau',
    icon: 'layers',
    headline: 'Trockenbau-Koordination für Gewerbe und Industrie',
    description:
      'Ständerwerkbau, Akustikdecken, Brandschutzwände und Innenausbau — koordiniert durch unser geprüftes Partnernetzwerk.',
    features: [
      'Ständerwerkbau',
      'Akustikdecken',
      'Brandschutzwände (F30/F60/F90)',
      'Innenausbau',
      'Systemtrennwände',
    ],
    metaTitle: 'Trockenbau Unternehmen — Koordinierter Ausbau | MEINEDIENSTLEISTUNGEN',
    metaDescription:
      'Trockenbau für Gewerbe: Ständerwerkbau, Brandschutz, Akustik. Ein Ansprechpartner koordiniert alles. Termingerecht & qualitätsgesichert.',
    color: 'slate',
  },
  {
    slug: 'fliesenarbeiten',
    title: 'Fliesenarbeiten',
    shortTitle: 'Fliesen',
    icon: 'grid',
    headline: 'Fliesenarbeiten für Gewerbe und Industrie — professionell koordiniert',
    description:
      'Großformat-Fliesen, Industrieböden, Nassbereiche und Sanierungen — wir koordinieren zertifizierte Fliesenlegerbetriebe für Ihr Projekt.',
    features: [
      'Großformat-Fliesen',
      'Industrieböden',
      'Nassbereiche & Bäder',
      'Außenbereiche',
      'Sanierung & Renovierung',
    ],
    metaTitle: 'Fliesenleger Gewerbe — Koordinierte Fliesenarbeiten | MEINEDIENSTLEISTUNGEN',
    metaDescription:
      'Professionelle Fliesenarbeiten für Gewerbeprojekte. Zertifizierte Partner, ein Ansprechpartner, dokumentierte Qualität. Jetzt anfragen.',
    color: 'emerald',
  },
  {
    slug: 'lager-logistik',
    title: 'Lager & Logistik Personal',
    shortTitle: 'Lager & Logistik',
    icon: 'package',
    headline: 'Qualifiziertes Lager- und Logistikpersonal — flexibel koordiniert',
    description:
      'Kommissionierung, Verpackung, Wareneingang/-ausgang und Inventur — wir koordinieren zuverlässiges, eingewiesenes Personal für Ihren Betrieb.',
    features: [
      'Kommissionierung',
      'Verpackung & Versand',
      'Wareneingang & -ausgang',
      'Inventur',
      'Produktionsunterstützung',
    ],
    metaTitle: 'Lager Personal — Qualifizierte Logistikkräfte | MEINEDIENSTLEISTUNGEN',
    metaDescription:
      'Zuverlässiges Lagerpersonal auf Abruf. Kommissionierung, Verpackung, Inventur. Geprüfte Mitarbeiter, flexible Kapazitäten, ein Ansprechpartner.',
    color: 'amber',
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Anfrage',
    description:
      'Sie schildern uns Ihr Projekt — per Formular, Telefon oder E-Mail. Kein Aufwand für Sie.',
    icon: 'message-square',
  },
  {
    number: '02',
    title: 'Analyse',
    description:
      'Wir analysieren Ihren Bedarf, klären Umfang, Termine und Anforderungen — und erstellen ein verbindliches Angebot.',
    icon: 'search',
  },
  {
    number: '03',
    title: 'Partnerauswahl',
    description:
      'Wir wählen aus unserem geprüften Partnernetzwerk die geeigneten Fachbetriebe für Ihr Projekt aus.',
    icon: 'users',
  },
  {
    number: '04',
    title: 'Umsetzung',
    description:
      'Unsere Partner führen die Arbeiten durch — koordiniert, termingerecht und nach definierten Qualitätsstandards.',
    icon: 'hard-hat',
  },
  {
    number: '05',
    title: 'Qualitätskontrolle',
    description:
      'Wir überwachen jede Phase, dokumentieren den Fortschritt und sichern die Qualität durch definierte Prüfpunkte.',
    icon: 'shield-check',
  },
  {
    number: '06',
    title: 'Abnahme',
    description:
      'Gemeinsame Abnahme mit vollständiger Dokumentation — Sie erhalten Berichte, Fotos und Unterlagen für Ihre Unterlagen.',
    icon: 'check-circle',
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      'MEINEDIENSTLEISTUNGEN hat unser Kabelprojekt in 3 Wochen termingerecht abgeliefert. Ein Ansprechpartner, keine Überraschungen — genau das, was wir gebraucht haben.',
    name: 'Klaus Weber',
    title: 'Projektleiter',
    company: 'Bau & Technik GmbH',
    industry: 'Kabelverlegung',
    rating: 5,
  },
  {
    quote:
      'Endlich ein Koordinationspartner, der wirklich koordiniert. Die Dokumentation war lückenlos, die Qualität einwandfrei. Wir kommen definitiv wieder.',
    name: 'Sandra Müller',
    title: 'Leiterin Facility Management',
    company: 'ImmoPro Verwaltung AG',
    industry: 'Trockenbau',
    rating: 5,
  },
  {
    quote:
      'Als Logistikleiter brauche ich flexible und zuverlässige Unterstützung. MDL liefert genau das — und das ohne dass ich 10 Anbieter managen muss.',
    name: 'Thomas Schmidt',
    title: 'Leiter Lager & Logistik',
    company: 'Handelszentrum Nord GmbH',
    industry: 'Lager & Logistik',
    rating: 5,
  },
] as const;

export const CASE_STUDIES = [
  {
    slug: 'kabelverlegung-logistikzentrum',
    title: 'Kabelmontage, Kabelverlegung und Kabelzug für Logistikzentrum',
    industry: 'Kabelverlegung',
    client: 'Logistik GmbH (Nordrhein-Westfalen)',
    duration: '3 Wochen',
    scope: '12.000 m² Lagerhalle, 48 Datenpunkte',
    metric: 'Termingerecht in 21 Tagen',
    metricDetail: '3 Wochen Projektlaufzeit, 100% Qualitätsabnahme',
    challenge:
      'Ein Logistikzentrum benötigte kurzfristig Kabelmontage, Kabelverlegung und Kabelzug für 48 Arbeitsstationen in einer 12.000 m² Halle — innerhalb von 4 Wochen.',
    solution:
      'MEINEDIENSTLEISTUNGEN koordinierte zwei zertifizierte Kabelverlegebetriebe gleichzeitig, optimierte den Arbeitsablauf um laufende Betriebsprozesse und sicherte die Qualität durch tägliche Fortschrittsberichte.',
    result:
      'Erfolgreiche Kabelmontage, Kabelverlegung und Kabelzug in 21 Tagen (eine Woche vor Deadline), lückenlose Dokumentation, null Störungen im laufenden Betrieb.',
    image: '/images/case-studies/logistik-kabel.png',
    tags: ['Kabelmontage', 'Kabelverlegung', 'Kabelzug', 'Logistik', 'NRW'],
  },
  {
    slug: 'trockenbau-buerogebaeude',
    title: 'Innenausbau Bürogebäude — 3.200 m²',
    industry: 'Trockenbau',
    client: 'Immobilienprojekt Rheinland (Projektentwickler)',
    duration: '6 Wochen',
    scope: '3.200 m² Bürofläche, F60-Brandschutzwände',
    metric: '6 Wochen — pünktlich',
    metricDetail: 'Termingerechte Übergabe trotz Planänderung in Woche 3',
    challenge:
      'Ein Bürogebäude-Ausbau mit Brandschutzanforderungen, Akustikdecken und flexiblen Trennwandsystemen — der Bauträger hatte keine eigene Koordinationskapazität.',
    solution:
      'MDL übernahm vollständige Projektsteuerung: Partnerauswahl, Terminplanung, Brandschutzkoordination und Abnahme. Bei einer Planänderung in Woche 3 wurde der Zeitplan ohne Mehrkosten angepasst.',
    result:
      'Termingerechte Übergabe, vollständige Brandschutz-Dokumentation, Bauherr-Abnahme ohne Mängel.',
    image: '/images/case-studies/trockenbau-buero.png',
    tags: ['Trockenbau', 'Brandschutz', 'Büro'],
  },
  {
    slug: 'lagerpersonal-saisonspitze',
    title: 'Lager-Personalkoordination zur Hochsaison',
    industry: 'Lager & Logistik',
    client: 'E-Commerce Händler (Ruhrgebiet)',
    duration: 'Laufend',
    scope: '25 Mitarbeiter, Kommissionierung + Verpackung',
    metric: '25 Mitarbeiter in 48h bereitgestellt',
    metricDetail: 'Flexible Kapazitätserweiterung ohne Qualitätseinbußen',
    challenge:
      'Ein E-Commerce-Händler brauchte zur Weihnachtssaison kurzfristig 25 eingewiesene Lagerhelfer für Kommissionierung und Verpackung — zuverlässig und sofort verfügbar.',
    solution:
      'MDL koordinierte ein Team aus geprüften Lager-Fachkräften, organisierte Einweisung und Supervision, und stellte alle 25 Mitarbeiter innerhalb von 48 Stunden bereit.',
    result:
      'Saisonziel erreicht, null Ausfälle, Folgeauftrag für die nächste Saison bereits beauftragt.',
    image: '/images/case-studies/lager-logistik.png',
    tags: ['Lagerpersonal', 'E-Commerce', 'Ruhrgebiet'],
  },
] as const;

export const FAQ_ITEMS = [
  {
    category: 'Allgemein',
    question: 'Was genau macht MEINEDIENSTLEISTUNGEN?',
    answer:
      'Wir sind Ihr Projekt-Koordinationspartner. Das bedeutet: Sie haben ein Projekt, wir übernehmen die gesamte Steuerung — von der Partnerauswahl über die Terminplanung bis zur Qualitätskontrolle und Abnahme. Sie haben einen Ansprechpartner, wir managen die Umsetzung.',
  },
  {
    category: 'Allgemein',
    question: 'Sind Sie selbst ein Handwerksbetrieb?',
    answer:
      'Nein. Wir sind spezialisiert auf Projektkoordination, nicht auf die Ausführung selbst. Die Arbeiten werden von unserem geprüften Netzwerk aus zertifizierten Fachbetrieben durchgeführt — koordiniert und qualitätsüberwacht durch MEINEDIENSTLEISTUNGEN.',
  },
  {
    category: 'Prozess',
    question: 'Wie schnell können Sie mit einem Projekt starten?',
    answer:
      'In der Regel melden wir uns innerhalb von 24 Stunden auf Ihre Anfrage zurück und können nach Auftragserteilung und Klärung des Projektumfangs innerhalb von 5-10 Werktagen mit der Umsetzung beginnen. Bei dringenden Projekten sprechen Sie uns direkt an.',
  },
  {
    category: 'Prozess',
    question: 'Wie läuft die Kommunikation während des Projekts?',
    answer:
      'Sie haben genau einen Ansprechpartner bei uns — Ihren persönlichen Projektkoordinator. Dieser hält Sie regelmäßig per E-Mail oder Telefon auf dem Laufenden, erstellt Zwischenberichte und ist bei Fragen immer erreichbar.',
  },
  {
    category: 'Qualität',
    question: 'Wie stellen Sie die Qualität der Partnerunternehmen sicher?',
    answer:
      'Alle Partnerunternehmen durchlaufen ein strukturiertes Aufnahmeverfahren: Zertifikatsprüfung, Referenzprüfung, Versicherungsnachweis und — bei Erstaufträgen — engmaschige Begleitung. Darüber hinaus bewerten wir jeden Auftrag und entwickeln unser Netzwerk kontinuierlich weiter.',
  },
  {
    category: 'Qualität',
    question: 'Was passiert, wenn die Qualität nicht stimmt?',
    answer:
      'MEINEDIENSTLEISTUNGEN ist Ihr einziger Vertragspartner und trägt die Verantwortung für die Qualität. Bei Mängeln organisieren wir umgehend Nachbesserung — ohne Diskussionen darüber, wer schuld ist.',
  },
  {
    category: 'Preise',
    question: 'Wie wird abgerechnet?',
    answer:
      'Sie erhalten von uns ein transparentes Gesamtangebot vor Projektbeginn. Die Koordinationsleistung ist in unserem Angebot bereits enthalten — keine versteckten Kosten. Abgerechnet wird nach Projektabschluss oder nach vereinbarten Meilensteinen.',
  },
  {
    category: 'Branchen',
    question: 'Welche Leistungen bieten Sie an?',
    answer:
      'Aktuell koordinieren wir Projekte in den Bereichen Kabelverlegung, Trockenbau, Fliesenarbeiten und Lager- & Logistikpersonal. Weitere Branchen folgen — sprechen Sie uns an, auch wenn Ihr Bedarf hier nicht aufgeführt ist.',
  },
] as const;
