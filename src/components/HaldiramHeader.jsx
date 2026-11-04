'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Phone, MessageCircle, Clock, MapPin, Menu, X, Sparkles, Gift, ChevronRight } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function HaldiramHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Prevent background scrolling when mobile hamburger menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (searchQuery.trim()) {
      router.push(`/menu?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/menu');
    }
  };

  const categories = [
    { name: 'All Categories', href: '/menu' },
    { name: 'Chaat & Gol Gappe', href: '/menu?cat=chaat' },
    { name: 'Royal Dahi Chaat', href: '/menu?cat=dahichaat' },
    { name: 'Morning Hot Snacks', href: '/menu?cat=snacks' },
    { name: 'Bhelpuri', href: '/menu?cat=bhel' },
    { name: 'Cold Coffee & Frappes', href: '/menu?cat=coldcoffee' },
    { name: 'Gourmet Shakes', href: '/menu?cat=shakes' },
    { name: 'Pizzas & Burgers', href: '/menu?cat=burgers' },
    { name: 'Momos & Chinese', href: '/menu?cat=chinese' },
    { name: 'Bulk Orders & Catering', href: '/catering' },
    { name: 'Our Story', href: '/about' },
    { name: 'Store Location', href: '/contact' },
  ];

  return (
    <>
      <header className="w-full bg-white shadow-sm sticky top-0 z-40">
        
        {/* 1. Haldiram Style Festive Top Announcement Bar */}
        <div className="bg-[#FFF1E8] border-b border-[#FDD5C2] text-[#9A2F12] text-xs py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 font-medium">
            <div className="flex items-center gap-2">
              <span className="inline-block px-1.5 py-0.5 text-[10px] bg-[#C4161C] text-white rounded font-bold uppercase tracking-wider">
                100% Pure Veg
              </span>
              <span>✨ Authentic Street Food, Chaats & Café in Begun, Chittorgarh • Prepared with RO Purified Water</span>
            </div>

            <div className="hidden md:flex items-center gap-5 text-xs text-[#7A230B]">
              <span className="flex items-center gap-1">
                <Clock size={12} className="text-[#C4161C]" />
                <span>Daily: 6:00 AM – 12:00 PM & 4:00 PM – 11:00 PM</span>
              </span>
              <a
                href={`tel:${restaurantInfo.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1 hover:text-[#C4161C] font-semibold"
              >
                <Phone size={12} className="text-[#C4161C]" />
                <span>Helpline: {restaurantInfo.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Main Middle Bar: Logo, Search Bar, Quick Contact & WhatsApp */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Haldiram Style Red Oval Emblem Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#C4161C] shadow-md bg-white group-hover:scale-105 transition-transform">
              <Image
                src="/logo.jpg"
                alt="Mr Mrs Panipuriwala Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#C4161C] font-serif">
                  Mr Mrs
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#C4161C]/10 text-[#C4161C] font-bold uppercase">
                  Est. 2023
                </span>
              </div>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#730B10]">
                Panipuriwala & Chathouse
              </p>
            </div>
          </Link>

          {/* Central Search Bar (Matches Haldiram's layout) */}
          <div className="flex-1 max-w-xl mx-2 hidden lg:block">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search For Anything (Pani Puri, Kachori, Biscoff Frappe, Pizza...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-11 py-2.5 rounded-full bg-[#FAF7F2] border border-[#E5E0D8] focus:border-[#C4161C] focus:bg-white text-xs sm:text-sm text-[#1F2937] placeholder-[#8C827A] outline-none transition-all shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#C4161C] text-white flex items-center justify-center hover:bg-[#9B1117] transition-colors"
                aria-label="Search"
              >
                <Search size={15} />
              </button>
            </form>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/catering"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#D97706] text-[#B45309] hover:bg-[#FFFBEB] text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Gift size={15} />
              <span>Bulk / Catering</span>
            </Link>

            <a
              href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
                "Hello Mr Mrs Panipuriwala! I would like to order."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all"
            >
              <MessageCircle size={16} />
              <span className="hidden xs:inline">WhatsApp Order</span>
              <span className="xs:hidden">Order</span>
            </a>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl border border-[#ECE7DE] bg-[#FAF7F2] text-[#1F2937] hover:bg-white"
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} />
            </button>
          </div>

        </div>

        {/* 3. Horizontal Category Ribbon (Matches Haldiram's top shop categories on both Desktop & Mobile) */}
        <div className="bg-[#FAF7F2] border-t border-b border-[#ECE7DE]">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-start lg:justify-between gap-1 text-xs font-semibold text-[#4A403A] overflow-x-auto no-scrollbar">
            {categories.map((cat, idx) => (
              <Link
                key={cat.name}
                href={cat.href}
                className={`py-2 sm:py-2.5 px-2.5 sm:px-3 hover:text-[#C4161C] hover:bg-white transition-colors whitespace-nowrap shrink-0 ${
                  idx === 0 ? 'text-[#C4161C] font-bold border-b-2 border-[#C4161C]' : ''
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

      </header>

      {/* FULLSCREEN SOLID MOBILE DRAWER MENU (Glitch-Free & No Background Peeking) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          
          {/* 1. Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu backdrop"
          />

          {/* 2. Slide-out Drawer Panel */}
          <div className="relative w-full max-w-sm h-full bg-white shadow-2xl flex flex-col justify-between overflow-y-auto z-10">
            
            {/* Top Bar inside Drawer */}
            <div>
              <div className="p-4 bg-[#FAF7F2] border-b border-[#ECE7DE] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C4161C] bg-white">
                    <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#C4161C]">Mr Mrs</h3>
                    <p className="text-[10px] text-[#730B10] uppercase font-semibold">Panipuriwala & Chathouse</p>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-white border border-[#ECE7DE] text-[#1F2937] hover:bg-[#C4161C] hover:text-white transition-colors"
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search Inside Drawer */}
              <div className="p-4 pb-2">
                <form onSubmit={handleSearchSubmit} className="relative">
                  <input
                    type="text"
                    placeholder="Search Pani Puri, Kachori, Shakes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-10 py-2.5 rounded-full bg-[#FAF7F2] border border-[#E5DFD7] text-xs text-[#1F2937] outline-none focus:border-[#C4161C]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#C4161C] text-white flex items-center justify-center"
                    aria-label="Search"
                  >
                    <Search size={14} />
                  </button>
                </form>
              </div>

              {/* Navigation Links List */}
              <div className="px-4 py-2 divide-y divide-[#F3EDE2]">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#1F2937] hover:text-[#C4161C] transition-colors"
                  >
                    <span>{cat.name}</span>
                    <ChevronRight size={15} className="text-[#9CA3AF]" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="p-4 bg-[#FAF7F2] border-t border-[#ECE7DE] space-y-3">
              <a
                href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
                  "Hello Mr Mrs Panipuriwala! I would like to place an order."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle size={16} />
                <span>Quick WhatsApp Order</span>
              </a>

              <div className="text-[11px] text-[#6B7280] space-y-1 text-center">
                <p className="font-semibold text-[#1F2937]">📍 Fawwara Chowk, Begun, Chittorgarh</p>
                <p>⏰ 6:00 AM – 12:00 PM & 4:00 PM – 11:00 PM</p>
                <p>📞 Helpline: {restaurantInfo.primaryPhone}</p>
              </div>
            </div>

          </div>

        </div>
      )}
    </>
  );
}
