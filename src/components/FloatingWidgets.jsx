'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function FloatingWidgets() {
  const whatsappUrl = `https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
    "Namaste Mr Mrs Panipuriwala! I would like to place an order."
  )}`;

  return (
    <aside aria-label="Quick contact" className="fixed right-4 sm:right-6 bottom-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Order on WhatsApp"
        className="flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-transform hover:scale-105 border-2 border-white"
      >
        <MessageCircle size={22} className="fill-current" />
        <span className="text-xs font-bold tracking-wide uppercase hidden sm:inline">
          Order on WhatsApp
        </span>
      </a>
    </aside>
  );
}

