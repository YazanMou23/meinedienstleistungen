'use client';

import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="flex items-center gap-0 shadow-2xl">
        {/* Call Button */}
        <a
          href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
          className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white h-14 font-semibold text-sm hover:bg-slate-800 transition-colors active:bg-slate-700"
          aria-label="Jetzt anrufen"
        >
          <Phone size={18} className="text-blue-400" />
          Anrufen
        </a>
        {/* Divider */}
        <div className="w-px h-14 bg-slate-700" />
        {/* CTA Button */}
        <Link
          href="/kontakt"
          className="flex-[2] flex items-center justify-center gap-2 bg-blue-600 text-white h-14 font-semibold text-sm hover:bg-blue-700 transition-colors active:bg-blue-800"
        >
          <MessageSquare size={18} />
          Projekt anfragen
        </Link>
      </div>
    </div>
  );
}
