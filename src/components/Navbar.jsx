'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Clock, MapPin, Sparkles, UtensilsCrossed } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function Navbar({ onOpenOrderModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#about' },
    { name: 'Full Menu', href: '#menu' },
    { name: 'Signatures', href: '#specialties' },
    { name: 'Digital Menu Book', href: '#digital-menu' },
    { name: 'Live Catering', href: '#catering' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      {/* Top Heritage Utility Strip */}
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        <div className="bg-[#141110] text-[#E8DFD3] text-xs py-2 px-4 border-b border-[#B99470]/30 hidden lg:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wide">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-[#B99470]">
                <MapPin size={13} />
                <span>{restaurantInfo.address}</span>
              </span>
              <span className="flex items-center gap-1.5 text-[#E8DFD3]/80">
                <Clock size={13} className="text-[#B99470]" />
                <span>6:00 AM – 12:00 PM & 4:00 PM – 11:00 PM</span>
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1E7246]/20 border border-[#1E7246]/40 text-[#4ade80] text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></span>
                <span>100% PURE VEG</span>
              </div>
              <a
                href={`tel:${restaurantInfo.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-[#B99470] transition-colors"
              >
                <Phone size={13} className="text-[#B99470]" />
                <span>{restaurantInfo.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-[#141110]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#B99470]/30'
              : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-4 sm:py-5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            {/* Brand Logo & Title */}
            <a href="#hero" className="flex items-center gap-3 sm:gap-3.5 group">
              <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#B99470] shadow-lg group-hover:scale-105 transition-transform duration-300 bg-white">
                <Image
                  src="/logo.jpg"
                  alt="Mr Mrs Panipuriwala Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#B99470] transition-colors">
                    Mr Mrs
                  </span>
                  <span className="hidden sm:inline-block text-[9px] uppercase tracking-widest text-[#B99470] px-1.5 py-0.5 border border-[#B99470]/40 rounded">
                    Est. 2023
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#D4B999] font-medium">
                  Panipuriwala & Chathouse
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-7 text-sm font-medium tracking-wide">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#E8DFD3] hover:text-[#B99470] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B99470] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenOrderModal}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B99470] to-[#8C6A48] hover:from-[#A8835E] hover:to-[#765636] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-xl hover:shadow-[#B99470]/20 hover:scale-105 transition-all duration-300 border border-[#D4B999]/30"
              >
                <UtensilsCrossed size={16} />
                <span>Order / Reserve</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2.5 rounded-full bg-[#1F1A18]/80 text-[#B99470] hover:text-white border border-[#B99470]/40 transition-colors"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 xl:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-[#141110] border-l border-[#B99470]/30 p-6 flex flex-col justify-between transition-transform duration-500 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#B99470]/20">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#B99470]">
                  <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">Mr Mrs</h3>
                  <p className="text-[10px] text-[#B99470] uppercase tracking-wider">
                    Panipuriwala & Chathouse
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#E8DFD3] hover:text-[#B99470]"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-[#FAF8F5] hover:text-[#B99470] py-1 border-b border-white/5 transition-colors font-medium flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#B99470]/60">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer inside drawer */}
          <div className="pt-6 border-t border-[#B99470]/20 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#B99470] to-[#8C6A48] text-white font-medium text-sm text-center uppercase tracking-wider shadow-lg"
            >
              Order Online / Reserve Table
            </button>
            <div className="text-center text-xs text-[#D4B999]/80 space-y-1">
              <p>Fawwara Chowk, Pratap Nagar, Begun, Chittorgarh</p>
              <p className="text-white font-medium">{restaurantInfo.primaryPhone}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

