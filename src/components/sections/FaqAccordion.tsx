'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';

type FaqItem = {
  readonly question: string;
  readonly answer: string;
  readonly category?: string;
};

interface FaqAccordionProps {
  items?: readonly FaqItem[];
  maxItems?: number;
}

export default function FaqAccordion({ items = FAQ_ITEMS, maxItems }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const displayItems = maxItems ? items.slice(0, maxItems) : items;

  return (
    <div className="space-y-3">
      {displayItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'border-blue-200 bg-blue-50/50'
                : 'border-slate-100 bg-white hover:border-blue-100'
            }`}
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-slate-900 text-sm md:text-base">
                {item.question}
              </span>
              <span
                className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                  isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
