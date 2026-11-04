'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck, Heart, Award, Sparkles } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function HaldiramFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1F1916] text-[#E5DFD7] pt-6 sm:pt-10 pb-4 border-t-4 border-[#C4161C]">
      {/* 4 Trust Badges Strip (Haldiram Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8 border-b border-[#382E28]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center sm:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-2 rounded-xl bg-white/5 sm:bg-transparent">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#15803D]/20 border border-[#15803D]/40 text-[#4ade80] flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h5 className="font-bold text-xs sm:text-sm text-white">100% Pure Veg</h5>
              <p className="text-[10px] sm:text-xs text-[#A89F95]">Strict vegetarian prep</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-2 rounded-xl bg-white/5 sm:bg-transparent">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C4161C]/20 border border-[#C4161C]/40 text-[#F87171] flex items-center justify-center shrink-0">
              <Award size={20} />
            </div>
            <div>
              <h5 className="font-bold text-xs sm:text-sm text-white">RO Mineral Water</h5>
              <p className="text-[10px] sm:text-xs text-[#A89F95]">100% RO puri water</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-2 rounded-xl bg-white/5 sm:bg-transparent">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D97706]/20 border border-[#D97706]/40 text-[#FBBF24] flex items-center justify-center shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <h5 className="font-bold text-xs sm:text-sm text-white">Made Fresh Daily</h5>
              <p className="text-[10px] sm:text-xs text-[#A89F95]">6 AM to 11 PM live</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-2 rounded-xl bg-white/5 sm:bg-transparent">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#4ade80] flex items-center justify-center shrink-0">
              <MessageCircle size={20} />
            </div>
            <div>
              <h5 className="font-bold text-xs sm:text-sm text-white">WhatsApp Orders</h5>
              <p className="text-[10px] sm:text-xs text-[#A89F95]">1-Click takeaway</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4 sm:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-8">
        
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C4161C] bg-white shrink-0">
              <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
            </div>
            <div>
              <span className="text-xl font-bold font-serif text-white tracking-wide block">
                Mr Mrs
              </span>
              <span className="text-xs text-[#C4161C] font-bold uppercase tracking-wider">
                Panipuriwala & Chathouse
              </span>
            </div>
          </div>
          <p className="text-xs text-[#B5ABA1] leading-relaxed">
            Chittorgarh’s beloved pure veg street food, artisan chaats, and café brand. Serving crispy puris with cooling hing-pudina waters, stone-baked pizzas, and royal thick shakes at Fawwara Chowk, Chittorgarh.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#15803D]/20 border border-[#15803D]/40 text-[#4ade80] text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span>100% PURE VEGETARIAN</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2 space-y-3">
          <h5 className="text-sm font-bold text-white uppercase tracking-wider">Explore</h5>
          <ul className="space-y-2 text-xs text-[#B5ABA1]">
            <li><Link href="/" className="hover:text-white transition-colors">Home Storefront</Link></li>
            <li><Link href="/menu" className="hover:text-white transition-colors">Complete Food Menu</Link></li>
            <li><Link href="/catering" className="hover:text-white transition-colors">Live Event Catering</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Our Story & Heritage</Link></li>
            <li><Link href="/reviews" className="hover:text-white transition-colors">Customer Reviews</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Store Location & Map</Link></li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div className="lg:col-span-3 space-y-3">
          <h5 className="text-sm font-bold text-white uppercase tracking-wider">Top Categories</h5>
          <ul className="space-y-2 text-xs text-[#B5ABA1]">
            <li><Link href="/menu?cat=chaat" className="hover:text-white transition-colors">Chaat & Gol Gappe</Link></li>
            <li><Link href="/menu?cat=dahichaat" className="hover:text-white transition-colors">Royal Dahi Chaats</Link></li>
            <li><Link href="/menu?cat=snacks" className="hover:text-white transition-colors">Jodhpur Pyaaz Kachori & Samosa</Link></li>
            <li><Link href="/menu?cat=shakes" className="hover:text-white transition-colors">Royal Paan & Biscoff Shakes</Link></li>
            <li><Link href="/menu?cat=pizza" className="hover:text-white transition-colors">Cheese Burst Pizzas & Burgers</Link></li>
            <li><Link href="/menu?cat=chinese" className="hover:text-white transition-colors">Chilli Paneer & Momos</Link></li>
          </ul>
        </div>

        {/* Store Info */}
        <div className="lg:col-span-3 space-y-3">
          <h5 className="text-sm font-bold text-white uppercase tracking-wider">Store Location</h5>
          <div className="space-y-2.5 text-xs text-[#B5ABA1]">
            <p className="flex items-start gap-2">
              <MapPin size={15} className="text-[#C4161C] shrink-0 mt-0.5" />
              <span>{restaurantInfo.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock size={15} className="text-[#C4161C] shrink-0" />
              <span>6:00 AM – 12:00 PM & 4:00 PM – 11:00 PM</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={15} className="text-[#C4161C] shrink-0" />
              <a href={`tel:${restaurantInfo.primaryPhone.replace(/\s+/g, '')}`} className="font-bold text-white hover:text-[#C4161C]">
                {restaurantInfo.primaryPhone}
              </a>
            </p>
            <p className="text-[11px] text-[#8C827A]">
              Owner: {restaurantInfo.contactPerson} ({restaurantInfo.secondaryPhone})
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-4 border-t border-[#382E28] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#8C827A]">
        <p>© {currentYear} {restaurantInfo.name}. All rights reserved.</p>
        <p className="flex items-center gap-1.5 flex-wrap justify-center">
          <span>Crafted with</span>
          <span className="text-red-500">❤️</span>
          <span>by Chittor&apos;s Best IT Company</span>
          <a
            href="https://chittortech.in"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#C4161C] font-bold underline transition-colors"
          >
            ChittorTech
          </a>
        </p>
      </div>
    </footer>
  );
}

