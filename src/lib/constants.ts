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
] as const;

export const SERVICES = [
  {
    slug: 'kabelzieharbeiten',
    title: 'Kabelzieharbeiten',
    shortTitle: 'Kabelzieharbeiten',
    icon: 'cable',
    color: 'blue',
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
      'Zeitmangel bei der Koordination mehrerer Fachbetriebe',
      'Fehlendes qualifiziertes Personal für Kabelarbeiten',
      'Projektverzögerungen durch unzuverlässige Subunternehmer',
      'Keine einheitliche Dokumentation der Kabelinfrastruktur',
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
      { question: 'Was sind Kabelzieharbeiten?', answer: 'Kabelzieharbeiten (auch Kabelmontage oder Kabelzug) umfassen das professionelle Verlegen, Einziehen und Befestigen von Kabeln in Gebäuden, Hallen und Industrieanlagen. Dazu gehören Netzwerkkabel, Datenleitungen, Glasfaserkabel und Stromkabel.' },
      { question: 'Welche Regionen betreut MDL für Kabelzieharbeiten?', answer: 'MEINEDIENSTLEISTUNGEN koordiniert Kabelzieharbeiten in Duisburg, dem gesamten Ruhrgebiet und in ganz Nordrhein-Westfalen (NRW). Bei Bedarf auch darüber hinaus — sprechen Sie uns an.' },
      { question: 'Wie schnell kann MDL Kabelzieharbeiten koordinieren?', answer: 'Nach Auftragserteilung und Klärung des Projektumfangs können wir in der Regel innerhalb von 5–10 Werktagen mit der Umsetzung beginnen. Bei dringenden Projekten sprechen Sie uns direkt an.' },
      { question: 'Kann MDL kurzfristig Personal für Kabelzieharbeiten bereitstellen?', answer: 'Ja. Über unser geprüftes Partnernetzwerk können wir auch bei kurzfristigen Projekten qualifizierte Fachkräfte für Kabelzieharbeiten koordinieren und einsetzen.' },
      { question: 'Was kostet die Koordination von Kabelzieharbeiten?', answer: 'Die Koordinationsleistung von MDL ist in unserem Gesamtangebot enthalten. Sie erhalten ein transparentes Festpreisangebot, bevor das Projekt startet — keine versteckten Kosten.' },
    ],
    metaTitle: 'Kabelzieharbeiten Duisburg & NRW | MEINEDIENSTLEISTUNGEN',
    metaDescription: 'Professionelle Kabelzieharbeiten für Gewerbe und Industrie in Duisburg und NRW. Kabelmontage, Kabelzug, Glasfaser — koordiniert, termingerecht, qualitätsgesichert.',
  },
  {
    slug: 'reinigungsdienst',
    title: 'Reinigungsdienst',
    shortTitle: 'Reinigung',
    icon: 'sparkles',
    color: 'teal',
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
      'Unzuverlässige Reinigungskräfte und häufige Wechsel',
      'Keine einheitlichen Qualitätsstandards bei der Reinigung',
      'Koordinationsaufwand für mehrere Reinigungsdienstleister',
      'Kurzfristiger Reinigungsbedarf ohne verfügbare Kapazitäten',
    ],
    gallery: [
      { src: '/images/services/reinigungsdienst/bueroreinigung-modern.jpg', alt: 'Bürogenreinigung modernes Bürogebäude NRW', title: 'Büroreinigung', caption: 'Professionelle Büroreinigung in Duisburg' },
      { src: '/images/services/reinigungsdienst/industriereinigung-halle.jpg', alt: 'Industriereinigung Lagerhalle Duisburg', title: 'Industriereinigung', caption: 'Reinigung großer Industriehallen im Ruhrgebiet' },
      { src: '/images/services/reinigungsdienst/baureinigung-baustelle.jpg', alt: 'Baureinigung Baustelle NRW', title: 'Baureinigung', caption: 'Endreinigung nach Baumaßnahmen' },
      { src: '/images/services/reinigungsdienst/grundreinigung-gewerbe.jpg', alt: 'Grundreinigung Gewerbeobjekt', title: 'Grundreinigung', caption: 'Gründliche Grundreinigung von Gewerbeobjekten' },
      { src: '/images/services/reinigungsdienst/reinigungsteam-einsatz.jpg', alt: 'Professionelles Reinigungsteam im Einsatz', title: 'Reinigungsteam', caption: 'Erfahrene Reinigungsteams für alle Anforderungen' },
      { src: '/images/services/reinigungsdienst/hygiene-standard.jpg', alt: 'Hygiene Standards gewerbliche Reinigung', title: 'Hygienestandards', caption: 'Höchste Hygienestandards nach HACCP und ISO' },
    ],
    faqs: [
      { question: 'Was umfasst ein professioneller Reinigungsdienst für Unternehmen?', answer: 'Ein gewerblicher Reinigungsdienst umfasst Unterhaltsreinigung (regelmäßige Pflegereinigung), Grundreinigung (intensive Tiefenreinigung), Baureinigung (nach Baumaßnahmen), Industriereinigung und Sonderreinigung. MDL koordiniert alle Reinigungsarten für Ihr Objekt.' },
      { question: 'Welche Regionen betreut MDL für Reinigungsdienstleistungen?', answer: 'MDL koordiniert Reinigungsdienstleistungen in Duisburg, dem Ruhrgebiet und ganz Nordrhein-Westfalen (NRW).' },
      { question: 'Wie schnell kann MDL einen Reinigungsdienst koordinieren?', answer: 'Bei regelmäßiger Unterhaltsreinigung planen wir 3–5 Werktage für die Koordination ein. Kurzfristige Baureinigungen oder Einzelreinigungen sind oft innerhalb von 24–48 Stunden möglich.' },
      { question: 'Sind die Reinigungskräfte von MDL versichert?', answer: 'Ja. Alle von MDL koordinierten Reinigungsteams sind sozialversicherungspflichtig beschäftigt und vollumfänglich versichert. MDL prüft alle Partner auf Qualifikationen und Versicherungsnachweis.' },
    ],
    metaTitle: 'Reinigungsdienst Duisburg & NRW | Gewerbliche Reinigung | MEINEDIENSTLEISTUNGEN',
    metaDescription: 'Professionelle Reinigungsdienstleistungen für Unternehmen in Duisburg und NRW. Büroreinigung, Industriereinigung, Baureinigung — koordiniert und qualitätsgesichert.',
  },
  {
    slug: 'lagerlogistik',
    title: 'Lagerlogistik',
    shortTitle: 'Lagerlogistik',
    icon: 'package',
    color: 'amber',
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
      'Saisonale Nachfrageschwankungen ohne flexible Personalkapazität',
      'Kurzfristiger Personalausfall in Schlüsselbereichen der Logistik',
      'Hoher Koordinationsaufwand für mehrere Zeitarbeitsfirmen',
      'Fehlende Einweisung und Qualitätssicherung beim Lagerpersonal',
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
      { question: 'Was ist Lagerlogistik-Unterstützung von MDL?', answer: 'MDL koordiniert qualifizierte Lagerhelfer und Logistikfachkräfte für Ihr Unternehmen. Das umfasst Kommissionierung, Verpackung, Wareneingang/-ausgang, Inventur und Produktionsunterstützung — eingewiesenes, geprüftes Personal.' },
      { question: 'Wie schnell kann MDL Lagerlogistik-Personal bereitstellen?', answer: 'In der Regel stellen wir qualifiziertes Lagerpersonal innerhalb von 24–48 Stunden bereit. Bei Saisonspitzen oder geplanten Projekten koordinieren wir längerfristig für maximale Verfügbarkeit.' },
      { question: 'Kann MDL auch für die Weihnachtssaison Lagerpersonal koordinieren?', answer: 'Ja. Saisonale Personalkoordination ist eine unserer Kernleistungen. Wir koordinieren flexible Kapazitätserweiterungen für Saisonspitzen ohne Qualitätseinbußen.' },
      { question: 'Welche Regionen betreut MDL für Lagerlogistik?', answer: 'MDL koordiniert Lagerlogistik-Unterstützung in Duisburg, dem Ruhrgebiet und ganz NRW.' },
    ],
    metaTitle: 'Lagerlogistik Duisburg & NRW | Lagerhelfer koordiniert | MEINEDIENSTLEISTUNGEN',
    metaDescription: 'Flexible Lagerlogistik-Unterstützung in Duisburg und NRW. Qualifizierte Lagerhelfer für Kommissionierung, Verpackung, Inventur — schnell verfügbar, skalierbar.',
  },
  {
    slug: 'entruempelung-entsorgung',
    title: 'Entrümpelung & Entsorgung',
    shortTitle: 'Entrümpelung',
    icon: 'trash-2',
    color: 'orange',
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
      'Großmengen an Abfall und Materialien ohne Entsorgungskapazität',
      'Compliance-Anforderungen bei der Entsorgung von Gefahrstoffen',
      'Zeitdruck bei Räumungen für Nachmieter oder Sanierungen',
      'Koordinationsaufwand für Transportlogistik und Entsorgungsnachweise',
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
      { question: 'Was umfasst eine gewerbliche Entrümpelung durch MDL?', answer: 'Eine gewerbliche Entrümpelung durch MDL umfasst die vollständige Räumung von Objekten, die Sortierung von Abfallmaterialien, die fachgerechte Entsorgung und Übergabe des Objekts in besenreinem Zustand. MDL koordiniert alle Abläufe und Entsorgungsnachweise.' },
      { question: 'Wie schnell kann MDL eine Entrümpelung koordinieren?', answer: 'Kleinere Entrümpelungen koordinieren wir oft innerhalb von 2–5 Werktagen. Bei größeren Projekten erstellen wir vorab einen verbindlichen Zeitplan.' },
      { question: 'Stellt MDL Entsorgungsnachweise aus?', answer: 'Ja. Für alle entsorgungspflichtigen Materialien erhalten Sie vollständige Entsorgungsnachweise und Dokumentation — wichtig für Compliance und Umweltvorschriften.' },
      { question: 'Welche Regionen betreut MDL für Entrümpelung & Entsorgung?', answer: 'MDL koordiniert Entrümpelung und Entsorgung in Duisburg, dem Ruhrgebiet und ganz Nordrhein-Westfalen.' },
    ],
    metaTitle: 'Entrümpelung & Entsorgung Duisburg & NRW | MEINEDIENSTLEISTUNGEN',
    metaDescription: 'Gewerbliche Entrümpelung und Entsorgung in Duisburg und NRW. Räumungen, Sortierung, fachgerechte Entsorgung — koordiniert, schnell und mit Entsorgungsnachweis.',
  },
  {
    slug: 'innenausbau-trockenbau',
    title: 'Innenausbau & Trockenbau',
    shortTitle: 'Innenausbau',
    icon: 'layers',
    color: 'slate',
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
      'Mangelnde Koordination zwischen Gewerken verzögert Projekte',
      'Brandschutzanforderungen ohne spezialisierte Fachbetriebe',
      'Fehlende Projektsteuerung und Qualitätskontrolle beim Innenausbau',
      'Termin- und Kostenüberschreitungen durch schlechte Planung',
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
      { question: 'Was umfasst Innenausbau und Trockenbau durch MDL?', answer: 'MDL koordiniert alle Leistungen rund um Innenausbau und Trockenbau: Ständerwerkbau, Akustikdecken, Brandschutzwände (F30/F60/F90), Systemtrennwände und vollständiger Innenausbau von Gewerbe- und Industrieobjekten.' },
      { question: 'Übernimmt MDL auch Brandschutzwände?', answer: 'Ja. Unsere Partnerbetriebe sind qualifiziert für Brandschutzwände nach F30, F60 und F90 — mit vollständiger Dokumentation und Abnahmeunterstützung gemäß DIN-Normen.' },
      { question: 'Wie lange dauert ein typisches Innenausbau-Projekt?', answer: 'Das hängt vom Umfang ab. Ein einzelner Büroraum: 1–3 Tage. Eine vollständige Büroetage: 3–6 Wochen. MDL erstellt vorab einen verbindlichen Zeitplan.' },
      { question: 'Welche Regionen betreut MDL für Innenausbau?', answer: 'MDL koordiniert Innenausbau und Trockenbau in Duisburg, dem Ruhrgebiet und ganz NRW.' },
    ],
    metaTitle: 'Innenausbau & Trockenbau Duisburg & NRW | MEINEDIENSTLEISTUNGEN',
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
    description: 'Kein Vendor-Management-Chaos. Sie haben eine feste Kontaktperson.',
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
