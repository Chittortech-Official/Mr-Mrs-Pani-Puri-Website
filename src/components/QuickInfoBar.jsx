'use client';

import React from 'react';
import { Clock, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function QuickInfoBar({ onOpenOrderModal }) {
  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 -mt-8 sm:-mt-10 mb-16">
      <div className="bg-[#1F1A18] text-[#FAF8F5] rounded-2xl shadow-2xl border border-[#B99470]/40 p-4 sm:p-6 backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center divide-y md:divide-y-0 md:divide-x divide-[#B99470]/20">
          
          {/* Timings */}
          <div className="flex items-start gap-3 sm:px-2 pt-2 md:pt-0">
            <div className="p-2.5 rounded-xl bg-[#B99470]/15 text-[#B99470] shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#B99470] font-semibold">Service Hours</p>
              <p className="text-sm font-semibold text-[#FAF8F5]">6:00 AM – 12:00 PM</p>
              <p className="text-xs text-[#D4B999]">4:00 PM – 11:00 PM (Daily)</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3 sm:px-4 pt-4 md:pt-0">
            <div className="p-2.5 rounded-xl bg-[#B99470]/15 text-[#B99470] shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#B99470] font-semibold">Prime Location</p>
              <p className="text-sm font-semibold text-[#FAF8F5]">Fawwara Chowk, Begun</p>
              <p className="text-xs text-[#D4B999]">Pratap Nagar, Chittorgarh</p>
            </div>
          </div>

          {/* Quality & Hygiene */}
          <div className="flex items-start gap-3 sm:px-4 pt-4 md:pt-0">
            <div className="p-2.5 rounded-xl bg-[#1E7246]/20 text-[#4ade80] shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#4ade80] font-semibold">100% Pure Veg</p>
              <p className="text-sm font-semibold text-[#FAF8F5]">RO Water & Pure Ghee</p>
              <p className="text-xs text-[#D4B999]">Uncompromised Freshness</p>
            </div>
          </div>

          {/* Fast Call / Action */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 sm:px-4 pt-4 md:pt-0 justify-center">
            <a
              href={`tel:${restaurantInfo.primaryPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#141110] hover:bg-[#2C2725] text-xs font-semibold text-[#D4B999] border border-[#B99470]/30 transition-colors"
            >
              <Phone size={14} className="text-[#B99470]" />
              <span>{restaurantInfo.primaryPhone}</span>
            </a>
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-gradient-to-r from-[#B99470] to-[#8C6A48] hover:from-[#A8835E] hover:to-[#765636] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
            >
              <Sparkles size={14} />
              <span>Book Table / Order</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
