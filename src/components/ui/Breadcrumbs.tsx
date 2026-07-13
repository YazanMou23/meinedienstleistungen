import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_CONFIG.url },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `${SITE_CONFIG.url}${item.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 bg-white border-b border-slate-100">
        <div className="container-base">
          <ol className="flex items-center gap-1 text-sm text-slate-500 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#c0a678] transition-colors font-medium">
                Startseite
              </Link>
            </li>
            {items.map((item, i) => {
              const isLast = i === items.length - 1;
              return (
                <li key={item.href} className="flex items-center gap-1">
                  <ChevronRight size={14} className="text-slate-300 shrink-0" />
                  {isLast ? (
                    <span className="text-slate-900 font-semibold">{item.name}</span>
                  ) : (
                    <Link href={item.href} className="hover:text-[#c0a678] transition-colors">
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
