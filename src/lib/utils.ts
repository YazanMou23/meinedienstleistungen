export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatPhone(phone: string): string {
  return phone.replace(/\s/g, '');
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '…';
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function generateBreadcrumbs(
  pathname: string,
  siteUrl: string
): { name: string; url: string }[] {
  const segments = pathname.split('/').filter(Boolean);
  const crumbs: { name: string; url: string }[] = [
    { name: 'Startseite', url: siteUrl },
  ];

  const labelMap: Record<string, string> = {
    leistungen: 'Leistungen',
    'ueber-uns': 'Über MDL',
    ablauf: 'Ablauf',
    kontakt: 'Kontakt',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
    kabelzieharbeiten: 'Kabelzieharbeiten',
    reinigungsdienst: 'Reinigungsdienst',
    lagerlogistik: 'Lagerlogistik',
    'entruempelung-entsorgung': 'Entrümpelung & Entsorgung',
    'innenausbau-trockenbau': 'Innenausbau & Trockenbau',
  };

  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const label = labelMap[segment] || segment;
    crumbs.push({ name: label, url: `${siteUrl}${currentPath}` });
  }

  return crumbs;
}
