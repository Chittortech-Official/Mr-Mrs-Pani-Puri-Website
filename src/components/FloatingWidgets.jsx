'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function FloatingWidgets() {
  const whatsappUrl = `https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
    "Namaste Mr Mrs Panipuriwala! I would like to inquire about ordering / table booking."
  )}`;

  return (
    <div className="fixed right-3.5 sm:right-6 bottom-6 sm:bottom-8 z-40 flex flex-col gap-2.5 sm:gap-3">
      {/* WhatsApp Floating Circle */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Order or Chat on WhatsApp"
        className="w-12 h-12 sm:w-13 sm:h-13 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group relative border-2 border-white/90"
      >
        <MessageCircle size={24} className="fill-current" />
        <span className="hidden md:block absolute right-full mr-3 bg-black/85 text-white text-[11px] px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Order on WhatsApp
        </span>
      </a>

      {/* Call Floating Circle */}
      <a
        href={`tel:${restaurantInfo.primaryPhone.replace(/\s+/g, '')}`}
        aria-label="Call Mr Mrs Panipuriwala"
        className="w-12 h-12 sm:w-13 sm:h-13 bg-[#B99470] hover:bg-[#9E7B58] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group relative border-2 border-white/90"
      >
        <Phone size={22} className="fill-current" />
        <span className="hidden md:block absolute right-full mr-3 bg-black/85 text-white text-[11px] px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Call {restaurantInfo.primaryPhone}
        </span>
      </a>
    </div>
  );
}

