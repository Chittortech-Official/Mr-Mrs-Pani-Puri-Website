'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Award, HeartHandshake, Sparkles, Clock, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import HaldiramHeader from '../../components/HaldiramHeader';
import HaldiramFooter from '../../components/HaldiramFooter';
import FloatingWidgets from '../../components/FloatingWidgets';
import { restaurantInfo } from '../../data/restaurantData';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#1F2937] flex flex-col font-sans">
      <HaldiramHeader />

      {/* Breadcrumbs */}
      <div className="bg-[#FAF7F2] border-b border-[#E5DFD7] py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-[#6B7280]">
          <Link href="/" className="hover:text-[#C4161C]">Home</Link>
          <ChevronRight size={13} />
          <span className="font-semibold text-[#1F2937]">Our Story & Heritage</span>
        </div>
      </div>

      {/* Hero Strip */}
      <section className="bg-[#FAF7F2] py-14 border-b border-[#ECE7DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#C4161C]/10 text-[#C4161C] text-xs font-bold uppercase tracking-wider mb-3">
            Since 2023 • Begun, Chittorgarh
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2937] leading-tight mb-4">
            The Legend of Mr Mrs Panipuriwala & Chathouse
          </h1>
          <div className="w-20 h-1 bg-[#C4161C] mx-auto mb-5" />
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
            Born at Fawwara Chowk with a heartfelt mission: to offer the rich, unforgettable heritage of Indian street food with the purity, quality, and hygiene benchmarks of an iconic Indian brand.
          </p>
        </div>
      </section>

      {/* 2-Column Story Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card with Menu Cover & Mascot */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[3/4]">
              <Image
                src="/114054.jpg"
                alt="Mr Mrs Panipuriwala Original Menu Cover"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#FCD34D] font-bold block mb-1">
                  Original Menu Edition
                </span>
                <h4 className="font-serif text-xl font-bold text-white">
                  Mr Mrs Panipuriwala
                </h4>
                <p className="text-xs text-white/80">Fawwara Chowk, Begun • Est. 2023</p>
              </div>
            </div>

            {/* Mascot Medallion Badge */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-2xl border-4 border-[#C4161C] bg-white">
              <Image src="/logo.jpg" alt="Mascot Logo" fill className="object-cover" />
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C4161C]">
                Heritage & Purity
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937]">
                Where Authentic Street Flavors Meet Uncompromising Hygiene
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Street food in India is not merely food — it is an emotion, a childhood memory, and a celebration of togetherness. Yet, for years, families often hesitated to enjoy street chaats due to hygiene concerns.
            </p>

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Under the visionary leadership of <strong>Rajendra Tripathi</strong>, Mr Mrs Panipuriwala & Chathouse changed that forever in Begun. We introduced a 100% pure vegetarian kitchen where every single drop of pani puri water is filtered through advanced multi-stage RO purification, puris are crisp and fresh, and chutneys are slow-simmered with genuine tamarind, dates, and garden mint.
            </p>

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Today, our menu spans over 70 handcrafted items: from traditional Jodhpur Pyaaz Kachoris and Grand Basket Chaat to modern Italian pizzas, Mexican club sandwiches, and trending European Lotus Biscoff lattes and thick shakes.
            </p>

            {/* Quality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E5DFD7]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C4161C] mb-1">
                  <ShieldCheck size={16} />
                  <span>100% RO Purified Water</span>
                </div>
                <p className="text-xs text-[#6B7280]">
                  Strictly RO water used across all five flavored waters and kitchen cooking.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E5DFD7]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C4161C] mb-1">
                  <Award size={16} />
                  <span>Pure Ghee & Fresh Dairy</span>
                </div>
                <p className="text-xs text-[#6B7280]">
                  Thick sweetened curd for dahi chaats and rich pure dairy for our famous shakes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E5DFD7]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C4161C] mb-1">
                  <HeartHandshake size={16} />
                  <span>Warm Mewari Hospitality</span>
                </div>
                <p className="text-xs text-[#6B7280]">
                  Every guest is welcomed with respect, warmth, and prompt courteous service.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E5DFD7]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C4161C] mb-1">
                  <Clock size={16} />
                  <span>Morning to Late Night</span>
                </div>
                <p className="text-xs text-[#6B7280]">
                  Breakfast from 6:00 AM to 12:00 PM; evening café from 4:00 PM to 11:00 PM.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                href="/menu"
                className="px-6 py-3 rounded-full bg-[#C4161C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#9B1117] transition-all"
              >
                Browse Complete Menu
              </Link>

              <Link
                href="/catering"
                className="px-6 py-3 rounded-full border border-[#D97706] text-[#B45309] text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#FFFBEB] transition-all"
              >
                Book Live Event Catering
              </Link>
            </div>
          </div>

        </div>
      </section>

      <FloatingWidgets />
      <HaldiramFooter />
    </div>
  );
}
