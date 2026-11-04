'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Phone, MessageCircle, Clock, MapPin, Menu, X, Sparkles, Gift, ChevronDown } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function HaldiramHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
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
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      
      {/* 1. Haldiram Style Festive Top Announcement Bar */}
      <div className="bg-[#FFF1E8] border-b border-[#FDD5C2] text-[#9A2F12] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 font-medium">
          <div className="flex items-center gap-2">
            <span className="inline-block px-1.5 py-0.2 text-[10px] bg-[#C4161C] text-white rounded font-bold uppercase tracking-wider">
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1F2937] hover:bg-[#FAF7F2]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* 3. Horizontal Category Ribbon (Matches Haldiram's top shop categories) */}
      <div className="bg-[#FAF7F2] border-t border-b border-[#ECE7DE] hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-semibold text-[#4A403A] overflow-x-auto no-scrollbar">
          {categories.map((cat, idx) => (
            <Link
              key={cat.name}
              href={cat.href}
              className={`py-2.5 px-3 hover:text-[#C4161C] hover:bg-white transition-colors whitespace-nowrap ${
                idx === 0 ? 'text-[#C4161C] font-bold' : ''
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#ECE7DE] px-4 py-4 space-y-3 shadow-xl">
          <form onSubmit={handleSearchSubmit} className="relative mb-3">
            <input
              type="text"
              placeholder="Search Pani Puri, Kachori, Shakes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-full bg-[#FAF7F2] border border-[#E5E0D8] text-xs text-[#1F2937] outline-none"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#C4161C] text-white flex items-center justify-center"
            >
              <Search size={13} />
            </button>
          </form>

          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#4A403A]">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-[#FAF7F2] hover:bg-[#FFF1E8] hover:text-[#C4161C] transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-[#ECE7DE] flex flex-col gap-2 text-xs text-[#766C66]">
            <p>📍 Fawwara Chowk, Begun, Chittorgarh</p>
            <p>⏰ 6:00 AM – 12:00 PM & 4:00 PM – 11:00 PM</p>
            <p>📞 {restaurantInfo.primaryPhone}</p>
          </div>
        </div>
      )}

    </header>
  );
}

