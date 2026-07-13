'use client';

import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="flex items-stretch shadow-2xl border-t border-white/10">
        {/* Call Button */}
        <a
          href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
          className="flex-1 flex items-center justify-center gap-2 bg-[#0a1628] text-white h-14 font-semibold text-sm hover:bg-[#060e1a] transition-colors active:bg-[#060e1a]"
          aria-label="Jetzt anrufen"
        >
          <Phone size={18} className="text-[#c0a678]" />
          <span>Anrufen</span>
        </a>
        {/* Divider */}
        <div className="w-px h-14 bg-white/10" />
        {/* CTA Button */}
        <Link
          href="/kontakt"
          className="flex-[2] flex items-center justify-center gap-2 bg-[#c0a678] text-white h-14 font-bold text-sm hover:bg-[#aa905d] transition-colors active:bg-[#aa905d]"
        >
          <MessageSquare size={18} />
          Jetzt Projekt anfragen
        </Link>
      </div>
    </div>
  );
}
