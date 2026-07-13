import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Redirects from old URLs to new ones
  async redirects() {
    return [
      // Old service slugs → new service slugs
      { source: '/leistungen/kabelverlegung', destination: '/leistungen/kabelzieharbeiten', permanent: true },
      { source: '/leistungen/trockenbau', destination: '/leistungen/innenausbau-trockenbau', permanent: true },
      { source: '/leistungen/fliesenarbeiten', destination: '/leistungen/reinigungsdienst', permanent: true },
      { source: '/leistungen/lager-logistik', destination: '/leistungen/lagerlogistik', permanent: true },
      // Old page routes → new routes
      { source: '/so-funktionierts', destination: '/ablauf', permanent: true },
      { source: '/referenzen', destination: '/leistungen', permanent: true },
      { source: '/referenzen/:slug', destination: '/leistungen', permanent: true },
      { source: '/partner-werden', destination: '/kontakt', permanent: true },
      { source: '/faq', destination: '/', permanent: true },
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:slug', destination: '/', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
