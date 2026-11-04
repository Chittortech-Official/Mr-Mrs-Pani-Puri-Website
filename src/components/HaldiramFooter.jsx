'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, MapPin, Clock, MessageCircle, ShieldCheck,
  Award, Sparkles, Navigation, ExternalLink
} from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function HaldiramFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#140506] text-[#E5DFD7] relative overflow-hidden border-t-2 border-[#EAB308]/60 shadow-[0_-4px_24px_rgba(234,179,8,0.12)]">

      {/* Subtle Festive Radial Glow & Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(196,22,28,0.25),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FDE047_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* 1. Top Trust Badges Strip (Haldiram Quality Guarantee) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-6 border-b border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">

          <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#22c55e]/40 transition-colors">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#15803D]/25 border border-[#15803D]/40 text-[#4ade80] flex items-center justify-center shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div className="min-w-0">
              <h5 className="font-bold text-xs sm:text-sm text-white truncate">100% Pure Veg</h5>
              <p className="text-[10px] text-[#A89F95] truncate">Strict pure vegetarian kitchen</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#38bdf8]/40 transition-colors">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#0284c7]/25 border border-[#0284c7]/40 text-[#38bdf8] flex items-center justify-center shrink-0">
              <Award size={18} />
            </div>
            <div className="min-w-0">
              <h5 className="font-bold text-xs sm:text-sm text-white truncate">RO Mineral Water</h5>
              <p className="text-[10px] text-[#A89F95] truncate">Safe & hygienic water only</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#f59e0b]/40 transition-colors">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#d97706]/25 border border-[#d97706]/40 text-[#fbbf24] flex items-center justify-center shrink-0">
              <Clock size={18} />
            </div>
            <div className="min-w-0">
              <h5 className="font-bold text-xs sm:text-sm text-white truncate">Fresh Daily</h5>
              <p className="text-[10px] text-[#A89F95] truncate">Served hot from 6:00 AM</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#22c55e]/40 transition-colors">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#16a34a]/25 border border-[#16a34a]/40 text-[#4ade80] flex items-center justify-center shrink-0">
              <MessageCircle size={18} />
            </div>
            <div className="min-w-0">
              <h5 className="font-bold text-xs sm:text-sm text-white truncate">WhatsApp Takeaway</h5>
              <p className="text-[10px] text-[#A89F95] truncate">Instant 1-click orders</p>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">

        {/* Brand Column (Left) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FDE047] shadow-[0_0_12px_rgba(253,224,71,0.3)] bg-white shrink-0">
              <Image src="/logo.jpg" alt="Mr Mrs Official Logo" fill className="object-cover" />
            </div>
            <div>
              <span className="text-xl font-bold font-serif text-white tracking-wide block leading-none">
                Mr Mrs
              </span>
              <span className="text-[11px] text-[#FDE047] font-semibold uppercase tracking-wider block mt-1">
                Panipuriwala & Chathouse
              </span>
            </div>
          </div>

          <p className="text-xs text-[#C5BCB3] leading-relaxed">
            Chittorgarh’s beloved street food & royal chaat destination. Renowned for 5 signature RO waters, authentic Mewari pyaaz kachoris, stone-baked pizzas, and royal thick shakes.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#15803D]/25 border border-[#15803D]/50 text-[#4ade80] text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
              <span>100% PURE VEG</span>
            </div>

            {restaurantInfo.instagramUrl && (
              <a
                href={restaurantInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white hover:text-[#FDE047] text-[11px] font-semibold transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-[#F43F5E] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
            )}

            <a
              href={`https://wa.me/${restaurantInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#4ade80] text-[11px] font-semibold transition-colors"
            >
              <MessageCircle size={13} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Quick Links + Top Categories (Side-by-Side 2-Column Grid on Mobile) */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-4 sm:gap-6 pt-2 lg:pt-0">

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-black text-[#FDE047] uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={12} />
              <span>Explore</span>
            </h5>
            <ul className="space-y-2 text-xs text-[#B5ABA1]">
              <li>
                <Link href="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Full Menu
                </Link>
              </li>
              <li>
                <Link href="/catering" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Categories */}
          <div className="space-y-3">
            <h5 className="text-xs font-black text-[#FDE047] uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={12} />
              <span>Top Menus</span>
            </h5>
            <ul className="space-y-2 text-xs text-[#B5ABA1]">
              <li>
                <Link href="/menu?cat=chaat" className="hover:text-white hover:translate-x-1 transition-all inline-block truncate max-w-full">
                  Chaat & Pani Puri
                </Link>
              </li>
              <li>
                <Link href="/menu?cat=dahichaat" className="hover:text-white hover:translate-x-1 transition-all inline-block truncate max-w-full">
                  Royal Dahi Chaats
                </Link>
              </li>
              <li>
                <Link href="/menu?cat=snacks" className="hover:text-white hover:translate-x-1 transition-all inline-block truncate max-w-full">
                  Pyaaz Kachori
                </Link>
              </li>
              <li>
                <Link href="/menu?cat=shakes" className="hover:text-white hover:translate-x-1 transition-all inline-block truncate max-w-full">
                  Royal Shakes
                </Link>
              </li>
              <li>
                <Link href="/menu?cat=pizza" className="hover:text-white hover:translate-x-1 transition-all inline-block truncate max-w-full">
                  Stone Pizzas
                </Link>
              </li>
              <li>
                <Link href="/menu?cat=chinese" className="hover:text-white hover:translate-x-1 transition-all inline-block truncate max-w-full">
                  Momos & Wok
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Store Location Aesthetic Card (Right) */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/15 backdrop-blur-md shadow-xl space-y-3.5">

            <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
                <MapPin size={16} className="text-[#FDE047]" />
                <span>Store Location</span>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#15803D]/25 border border-[#15803D]/40 text-[#4ade80] text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-ping" />
                <span>Open Daily</span>
              </span>
            </div>

            <p className="text-xs text-[#E5DFD7] leading-relaxed">
              {restaurantInfo.address}
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[#A89F95]">
              <Clock size={13} className="text-[#FDE047] shrink-0" />
              <span>6:00 AM – 12:00 PM & 4:00 PM – 11:00 PM</span>
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-wrap gap-2">
              <a
                href={`tel:${restaurantInfo.primaryPhone.replace(/\s+/g, '')}`}
                className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors border border-white/10"
              >
                <Phone size={13} className="text-[#4ade80]" />
                <span>{restaurantInfo.primaryPhone}</span>
              </a>

              <a
                href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent('Hello Mr Mrs Panipuriwala! I would like to inquire about your menu & orders.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-all shadow-md hover:scale-105"
              >
                <MessageCircle size={14} />
                <span>Chat</span>
              </a>
            </div>

            <p className="text-[10px] text-[#8C827A] pt-1 text-center sm:text-left">
              Founder: {restaurantInfo.contactPerson} ({restaurantInfo.secondaryPhone})
            </p>

          </div>
        </div>

      </div>

      {/* 3. Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-[#8C827A]">
        <p className="text-center sm:text-left">
          © {currentYear} {restaurantInfo.name}. All rights reserved.
        </p>

        <p className="flex items-center gap-1.5 flex-wrap justify-center text-center">
          <span>Crafted with</span>
          <span className="text-red-500 animate-pulse">❤️</span>
          <span>by Chittor&apos;s Best IT Company</span>
          <a
            href="https://chittortech.in"
            target="_blank"
            rel="noreferrer"
            className="text-[#FDE047] hover:underline font-bold transition-colors inline-flex items-center gap-0.5"
          >
            <span>ChittorTech</span>
            <ExternalLink size={10} />
          </a>
        </p>
      </div>

    </footer>
  );
}

