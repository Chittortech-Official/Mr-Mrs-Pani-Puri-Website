'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck, Award } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function HaldiramFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1A1615] text-[#D1C7BD] border-t-2 border-[#C4161C]">

      {/* Top Value Badges: Clean, realistic 4-column strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 border-b border-[#2E2825]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#241E1C] border border-[#3A322E] text-[#4ADE80] flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-white">100% Pure Veg</p>
              <p className="text-[11px] text-[#9A8F85]">Strict vegetarian prep</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#241E1C] border border-[#3A322E] text-[#60A5FA] flex items-center justify-center shrink-0">
              <Award size={20} />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-white">RO Mineral Water</p>
              <p className="text-[11px] text-[#9A8F85]">Puri water purified by RO</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#241E1C] border border-[#3A322E] text-[#FBBF24] flex items-center justify-center shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-white">Fresh From 6 AM</p>
              <p className="text-[11px] text-[#9A8F85]">Morning snacks & all-day chaat</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#241E1C] border border-[#3A322E] text-[#4ADE80] flex items-center justify-center shrink-0">
              <MessageCircle size={20} />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-white">WhatsApp Orders</p>
              <p className="text-[11px] text-[#9A8F85]">Direct takeaway & inquiries</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer: Real, Grounded Restaurant Architecture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">

        {/* Brand Info */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#C4161C] bg-white shrink-0">
              <Image src="/logo.jpg" alt="Mr Mrs Logo" fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white leading-tight">
                Mr Mrs
              </h3>
              <p className="text-[11px] font-semibold tracking-wider uppercase text-[#C4161C]">
                Panipuriwala & Chathouse
              </p>
            </div>
          </div>

          <p className="text-xs text-[#A89E94] leading-relaxed">
            Chittorgarh’s beloved street food & royal chaat destination. Serving crispy puris with 5 authentic waters, fresh Jodhpur pyaaz kachoris, artisan cold coffees, and shakes at Fawwara Chowk.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#4ADE80] text-xs font-semibold transition-colors"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs text-[#A89E94]">
            <li><Link href="/" className="hover:text-white transition-colors">Home Storefront</Link></li>
            <li><Link href="/menu" className="hover:text-white transition-colors">Complete Menu</Link></li>
            <li><Link href="/catering" className="hover:text-white transition-colors">Event Catering</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Our Story & Heritage</Link></li>
            <li><Link href="/reviews" className="hover:text-white transition-colors">Customer Reviews</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Store Location & Map</Link></li>
          </ul>
        </div>

        {/* Menu Categories */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Categories
          </h4>
          <ul className="space-y-2 text-xs text-[#A89E94]">
            <li><Link href="/menu?cat=chaat" className="hover:text-white transition-colors">Chaat & Gol Gappe</Link></li>
            <li><Link href="/menu?cat=dahichaat" className="hover:text-white transition-colors">Royal Dahi Chaats</Link></li>
            <li><Link href="/menu?cat=snacks" className="hover:text-white transition-colors">Jodhpur Pyaaz Kachori & Samosa</Link></li>
            <li><Link href="/menu?cat=shakes" className="hover:text-white transition-colors">Artisan Cold Shakes & Frappes</Link></li>
            <li><Link href="/menu?cat=pizza" className="hover:text-white transition-colors">Stone-Baked Pizzas & Burgers</Link></li>
            <li><Link href="/menu?cat=chinese" className="hover:text-white transition-colors">Momos & Chinese Specials</Link></li>
          </ul>
        </div>

        {/* Outlet Location & Contact */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Store Location
          </h4>
          <div className="space-y-2.5 text-xs text-[#A89E94]">
            <p className="flex items-start gap-2.5">
              <MapPin size={16} className="text-[#C4161C] shrink-0 mt-0.5" />
              <span>{restaurantInfo.address}</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Clock size={15} className="text-[#C4161C] shrink-0" />
              <span>6:00 AM – 12:00 PM & 4:00 PM – 11:00 PM</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone size={15} className="text-[#C4161C] shrink-0" />
              <a
                href={`tel:${restaurantInfo.primaryPhone.replace(/\s+/g, '')}`}
                className="text-white hover:text-[#C4161C] font-semibold transition-colors"
              >
                {restaurantInfo.primaryPhone}
              </a>
            </p>
            <p className="text-[11px] text-[#7E746A] pt-0.5">
              Owner: {restaurantInfo.contactPerson} ({restaurantInfo.secondaryPhone})
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Realistic Copyright & Credits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 border-t border-[#2E2825] flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-[#7E746A]">
        <p className="text-center sm:text-left">
          © {currentYear} {restaurantInfo.name}. All rights reserved.
        </p>

        <p className="text-center sm:text-right">
          Crafted with care by{' '}
          <a
            href="https://chittortech.in"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#C4161C] font-semibold underline transition-colors"
          >
            ChittorTech
          </a>
        </p>
      </div>

    </footer>
  );
}

