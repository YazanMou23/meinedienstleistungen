import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  imageUrl?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path = '',
  imageUrl = '/og-image.jpg',
  noIndex = false,
}: GenerateMetadataProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`;
  const desc = description || SITE_CONFIG.description;
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'de_DE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

// Schema.org Organization Schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: 'MEINEDIENSTLEISTUNGEN B2B Projektkoordination',
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/images/logo.png`,
      caption: SITE_CONFIG.name,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+49${SITE_CONFIG.phone}`,
      contactType: 'customer service',
      email: SITE_CONFIG.email,
      availableLanguage: ['German'],
    },
    sameAs: [
      SITE_CONFIG.social.linkedin,
      'https://www.wikidata.org/wiki/Q11069' // Duisburg relation
    ],
  };
}

// Schema.org LocalBusiness JSON-LD
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    telephone: `+49${SITE_CONFIG.phone}`,
    email: SITE_CONFIG.email,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: SITE_CONFIG.address.countryCode,
      addressRegion: SITE_CONFIG.address.region,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.4344',
      longitude: '6.7623', // Center coordinates for Duisburg
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        '@id': 'https://en.wikipedia.org/wiki/Duisburg',
        name: 'Duisburg',
        sameAs: 'https://www.wikidata.org/wiki/Q11069'
      },
      {
        '@type': 'AdministrativeArea',
        '@id': 'https://en.wikipedia.org/wiki/North_Rhine-Westphalia',
        name: 'Nordrhein-Westfalen',
        sameAs: 'https://www.wikidata.org/wiki/Q1198'
      },
      {
        '@type': 'AdministrativeArea',
        '@id': 'https://en.wikipedia.org/wiki/Ruhr',
        name: 'Ruhrgebiet',
        sameAs: 'https://www.wikidata.org/wiki/Q150995'
      }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '08:00',
        closes: '18:00'
      }
    ],
    sameAs: [
      SITE_CONFIG.social.linkedin
    ],
  };
}

// Schema.org ProfessionalService JSON-LD (For every service page)
export function generateProfessionalServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
  wikidataId?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_CONFIG.url}/leistungen/${service.slug}/#service`,
    name: `${service.title} Duisburg & NRW`,
    description: service.description,
    url: `${SITE_CONFIG.url}/leistungen/${service.slug}`,
    telephone: `+49${SITE_CONFIG.phone}`,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: SITE_CONFIG.address.countryCode,
      addressRegion: SITE_CONFIG.address.region,
    },
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      '@id': `${SITE_CONFIG.url}/#localbusiness`
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Duisburg',
        sameAs: 'https://www.wikidata.org/wiki/Q11069'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Nordrhein-Westfalen',
        sameAs: 'https://www.wikidata.org/wiki/Q1198'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Ruhrgebiet',
        sameAs: 'https://www.wikidata.org/wiki/Q150995'
      }
    ],
    sameAs: service.wikidataId ? [service.wikidataId] : [],
  };
}

// Schema.org Service JSON-LD
export function generateServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
  wikidataId?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}/leistungen/${service.slug}/#service-entity`,
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      '@id': `${SITE_CONFIG.url}/#localbusiness`
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Duisburg',
        sameAs: 'https://www.wikidata.org/wiki/Q11069'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Nordrhein-Westfalen',
        sameAs: 'https://www.wikidata.org/wiki/Q1198'
      }
    ],
    url: `${SITE_CONFIG.url}/leistungen/${service.slug}`,
    sameAs: service.wikidataId ? [service.wikidataId] : [],
  };
}

// Schema.org FAQPage JSON-LD
export function generateFaqSchema(faqs: readonly { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Schema.org BreadcrumbList JSON-LD
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Schema.org ImageObject Schema for gallery images
export function generateImageObjectSchema(
  images: readonly { readonly src: string; readonly alt: string; readonly caption?: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@graph': images.map((img) => ({
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}${img.src}`,
      name: img.alt,
      caption: img.caption || img.alt,
      description: img.caption || img.alt,
      license: `${SITE_CONFIG.url}/datenschutz`,
      acquireLicensePage: `${SITE_CONFIG.url}/kontakt`
    }))
  };
}
