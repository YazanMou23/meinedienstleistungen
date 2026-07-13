'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: readonly FaqItem[] | FaqItem[];
  withSchema?: boolean;
}

export default function FaqAccordion({ items, withSchema = true }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className={cn(
                'rounded-xl border transition-all duration-200',
                isOpen
                  ? 'bg-white border-[#c0a678]/30 shadow-sm'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300'
              )}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left flex items-start justify-between gap-4 px-6 py-5"
                aria-expanded={isOpen}
              >
                <span className={cn('font-semibold text-sm md:text-base', isOpen ? 'text-slate-900' : 'text-slate-800')}>
                  {item.question}
                </span>
                <span
                  className={cn(
                    'shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200',
                    isOpen
                      ? 'bg-[#c0a678] text-white'
                      : 'bg-slate-200 text-slate-500 hover:bg-slate-300'
                  )}
                >
                  {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
