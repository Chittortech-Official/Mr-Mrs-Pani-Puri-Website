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

            {restaurantInfo.instagramUrl && (
              <a
                href={restaurantInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
            )}
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

