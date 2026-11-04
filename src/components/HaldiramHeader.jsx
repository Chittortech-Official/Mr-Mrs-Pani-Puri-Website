'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Phone, MessageCircle, Clock, MapPin, Menu, X, Sparkles, Gift, ChevronRight } from 'lucide-react';
import { restaurantInfo, allMenuItems } from '../data/restaurantData';

export default function HaldiramHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
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

  // Handle outside click to close desktop suggestions dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update live suggestions as user types
  const handleSearchChange = (val) => {
    setSearchQuery(val);
    const q = val.trim().toLowerCase();
    if (q.length > 0) {
      const matches = allMenuItems
        .filter((item) => {
          const nameMatch = item.name?.toLowerCase().includes(q);
          const catMatch = item.categoryName?.toLowerCase().includes(q) || item.category?.toLowerCase().includes(q);
          const descMatch = item.desc?.toLowerCase().includes(q);
          const tagMatch = item.tag?.toLowerCase().includes(q);
          return nameMatch || catMatch || descMatch || tagMatch;
        })
        .slice(0, 6);
      setSuggestions(matches);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setShowSuggestions(false);
    setMobileMenuOpen(false);
    if (searchQuery.trim()) {
      router.push(`/menu?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/menu');
    }
  };

  const handleSelectSuggestion = (itemName) => {
    setSearchQuery(itemName);
    setShowSuggestions(false);
    router.push(`/menu?q=${encodeURIComponent(itemName)}`);
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
        
        {/* 1. Haldiram Style Festive Top Announcement Bar (Mobile Optimized) */}
        <div className="bg-[#FFF1E8] border-b border-[#FDD5C2] text-[#9A2F12] text-[11px] sm:text-xs py-1 px-3 sm:px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 font-medium">
            <div className="flex items-center gap-1.5 truncate">
              <span className="inline-block px-1.5 py-0.2 text-[9px] sm:text-[10px] bg-[#C4161C] text-white rounded font-bold uppercase tracking-wider shrink-0">
                100% Pure Veg
              </span>
              <span className="truncate">
                ✨ Authentic Chaats & Café in Begun • RO Purified Water
              </span>
            </div>

            <div className="hidden md:flex items-center gap-4 text-xs text-[#7A230B] shrink-0">
              <span className="flex items-center gap-1">
                <Clock size={12} className="text-[#C4161C]" />
                <span>Daily: 6 AM – 12 PM & 4 PM – 11 PM</span>
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

        {/* 2. Main Middle Bar: Hamburger, Logo, Search Bar, Quick Contact & WhatsApp */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Hamburger Button + Logo + Title */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 sm:px-3 sm:py-2 rounded-xl border border-[#ECE7DE] bg-[#FAF7F2] text-[#1F2937] hover:bg-[#C4161C] hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold"
              aria-label="Open Navigation Menu"
            >
              <Menu size={19} />
              <span className="hidden sm:inline">Menu</span>
            </button>

            {/* Brand Logo & Name */}
            <Link href="/" className="flex items-center gap-2 sm:gap-2.5">
              <div className="relative w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#C4161C] shadow-sm bg-white shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Mr Mrs Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-base sm:text-xl font-black tracking-tight text-[#C4161C] font-serif leading-none">
                    Mr Mrs
                  </span>
                  <span className="hidden xs:inline text-[9px] px-1 py-0.2 rounded bg-[#C4161C]/10 text-[#C4161C] font-bold uppercase">
                    Begun
                  </span>
                </div>
                <p className="text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-[#730B10] leading-tight">
                  Panipuriwala & Chathouse
                </p>
              </div>
            </Link>
          </div>

          {/* Central Search Bar with Live Suggestions (Desktop / Laptop only) */}
          <div ref={searchRef} className="flex-1 max-w-md mx-3 hidden md:block relative">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search Pani Puri, Kachori, Biscoff, Pizza..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                onFocus={() => {
                  if (searchQuery.trim().length > 0) setShowSuggestions(true);
                }}
                className="w-full pl-4 pr-16 py-2 rounded-full bg-[#FAF7F2] border border-[#E5E0D8] focus:border-[#C4161C] focus:bg-white text-xs text-[#1F2937] placeholder-[#8C827A] outline-none transition-all shadow-inner"
              />
              <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSuggestions([]);
                      setShowSuggestions(false);
                    }}
                    className="p-1 rounded-full text-[#9CA3AF] hover:text-[#1F2937] transition-colors"
                    aria-label="Clear Search"
                  >
                    <X size={13} />
                  </button>
                )}
                <button
                  type="submit"
                  className="w-7 h-7 rounded-full bg-[#C4161C] text-white flex items-center justify-center hover:bg-[#9B1117] transition-colors"
                  aria-label="Search"
                >
                  <Search size={13} />
                </button>
              </div>
            </form>

            {/* Desktop Autocomplete Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-[#ECE7DE] overflow-hidden z-50 text-left">
                <div className="px-3.5 py-1.5 bg-[#FAF7F2] border-b border-[#ECE7DE] flex items-center justify-between text-[11px] font-bold text-[#8C827A] uppercase tracking-wider">
                  <span>Suggestions</span>
                  <span>{suggestions.length} items</span>
                </div>
                <div className="max-h-80 overflow-y-auto divide-y divide-[#F7F2EB]">
                  {suggestions.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectSuggestion(item.name)}
                      className="w-full px-3.5 py-2.5 flex items-center gap-3 hover:bg-[#FFF5F0] transition-colors text-left"
                    >
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-[#FAF7F2] border border-[#E5DFD7]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#1F2937] truncate">
                            {item.name}
                          </span>
                          {item.isBestseller && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#C4161C]/10 text-[#C4161C] font-semibold shrink-0">
                              Bestseller
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-[#8C827A] truncate">
                          {item.categoryName}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-black text-[#059669]">
                          ₹{item.price}/-
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => handleSearchSubmit()}
                  className="w-full py-2.5 bg-[#FAF7F2] hover:bg-[#FFF1E8] text-center text-xs font-bold text-[#C4161C] flex items-center justify-center gap-1 border-t border-[#ECE7DE] transition-colors"
                >
                  <span>View all matching results in Menu</span>
                  <ChevronRight size={13} />
                </button>
              </div>
            )}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Catering shortcut (Desktop) */}
            <Link
              href="/catering"
              className="hidden lg:inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#D97706] text-[#B45309] hover:bg-[#FFFBEB] text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Gift size={13} />
              <span>Bulk Orders</span>
            </Link>

            {/* Quick Call Icon (Mobile) */}
            <a
              href={`tel:${restaurantInfo.primaryPhone.replace(/\s+/g, '')}`}
              className="md:hidden w-8 h-8 rounded-full bg-[#FFF1E8] border border-[#FDD5C2] text-[#C4161C] flex items-center justify-center"
              aria-label="Call Store"
            >
              <Phone size={14} />
            </a>

            {/* WhatsApp Order Button */}
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
                "Hello Mr Mrs Panipuriwala! I would like to order."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-sm transition-colors"
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">WhatsApp Order</span>
              <span className="sm:hidden text-[11px]">Order</span>
            </a>
          </div>

        </div>


        {/* 3. Horizontal Category Ribbon (Desktop only - Mobile uses clean Hamburger Menu) */}
        <div className="bg-[#FAF7F2] border-b border-[#ECE7DE] hidden md:block">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-1 text-xs font-semibold text-[#4A403A] py-2">
            {categories.map((cat, idx) => (
              <Link
                key={cat.name}
                href={cat.href}
                className={`py-1 px-3 hover:text-[#C4161C] hover:bg-white rounded-md transition-colors whitespace-nowrap text-xs ${
                  idx === 0 ? 'text-[#C4161C] font-bold bg-white shadow-xs' : ''
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

      </header>

      {/* FULLSCREEN SOLID DRAWER MENU (Universal: Works on Laptop & Mobile without Glitch) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          
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
