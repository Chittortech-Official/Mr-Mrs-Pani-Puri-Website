'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Clock, MapPin, MessageCircle, Heart, Sparkles } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141110] text-[#E8DFD3] pt-16 pb-10 border-t border-[#B99470]/30 relative overflow-hidden bg-jali-dark">
      {/* Decorative Golden Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#B99470] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#B99470] shadow-xl bg-white shrink-0">
                <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Mr. & Mrs.
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[#B99470] font-semibold">
                  Panipuriwala & Chathouse
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D4B999]/80 leading-relaxed font-light max-w-md">
              Chittorgarh’s beloved destination for authentic street food, artisan chaats, and contemporary café indulgence. Serving crisp puris with mineral RO waters, stone-baked pizzas, and royal thick shakes since 2023.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E7246]/20 border border-[#1E7246]/40 text-[#4ade80] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              <span>100% PURE VEGETARIAN KITCHEN</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#B99470] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#E8DFD3]/80">
              <li>
                <a href="#about" className="hover:text-[#B99470] transition-colors">Our Story & Heritage</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#B99470] transition-colors">Complete 70+ Item Menu</a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-[#B99470] transition-colors">Signature House Specials</a>
              </li>
              <li>
                <a href="#digital-menu" className="hover:text-[#B99470] transition-colors">Digital Scanned Menu Book</a>
              </li>
              <li>
                <a href="#catering" className="hover:text-[#B99470] transition-colors">Live Wedding & Party Catering</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#B99470] transition-colors">Fawwara Chowk Location Map</a>
              </li>
            </ul>
          </div>

          {/* Contact & Timings (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#B99470] font-semibold">
              Visit & Connect
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#B99470] shrink-0 mt-0.5" />
                <span className="text-[#D4B999]/90">
                  Fawwara Chowk, Pratap Nagar, 7B, Begun, Chittorgarh, Rajasthan - 312001
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock size={16} className="text-[#B99470] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">6:00 AM – 12:00 PM</p>
                  <p className="text-[#D4B999]/80">4:00 PM – 11:00 PM (Daily)</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-[#B99470] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${restaurantInfo.primaryPhone.replace(/\s+/g, '')}`} className="text-white font-bold hover:text-[#B99470] transition-colors block">
                    {restaurantInfo.primaryPhone}
                  </a>
                  <p className="text-xs text-[#766C66]">
                    {restaurantInfo.secondaryPhone} ({restaurantInfo.contactPerson})
                  </p>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={restaurantInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[#1F1A18] hover:bg-[#B99470] text-[#D4B999] hover:text-white border border-[#B99470]/30 flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={`https://wa.me/${restaurantInfo.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-full bg-[#1F1A18] hover:bg-[#25D366] text-[#D4B999] hover:text-white border border-[#B99470]/30 flex items-center justify-center transition-colors"
                >
                  <MessageCircle size={17} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#766C66]">
          <p>© {currentYear} Mr. & Mrs. Panipuriwala & Chathouse. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-center">
            <span>Crafted with</span>
            <Heart size={13} className="text-[#883563] fill-current" />
            <span>for Chittorgarh's food connoisseurs</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
