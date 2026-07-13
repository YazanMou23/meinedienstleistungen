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
