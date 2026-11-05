'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles, MessageCircle, ShieldCheck,
  Clock, ArrowRight, Utensils, Star, Gift, CheckCircle2, Heart,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import HaldiramHeader from '../components/HaldiramHeader';
import HaldiramFooter from '../components/HaldiramFooter';
import FloatingWidgets from '../components/FloatingWidgets';
import {
  restaurantInfo, mainCategories, heroPromos, allMenuItems, reviewsData
} from '../data/restaurantData';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroPromos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroPromos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroPromos.length) % heroPromos.length);

  // Bestsellers items
  const bestsellers = allMenuItems.filter((item) => item.isBestseller).slice(0, 8);

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#1F2937] flex flex-col font-sans">

      {/* Header */}
      <HaldiramHeader />

      {/* 1. Best-in-Class Gourmet Food Banner Carousel (Laptop & Mobile Optimized) */}
      <section className="w-full bg-[#FFFDFB] pt-2 pb-3 sm:pt-4 sm:pb-5">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="relative w-full h-[220px] xs:h-[260px] sm:h-[320px] md:h-[360px] lg:h-[390px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-xl border border-[#EBE4D8] bg-[#FAF7F2] group">
            {heroPromos.map((promo, idx) => (
              <Link
                key={promo.title}
                href={promo.ctaLink || '/menu'}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out block ${
                  idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <Image
                  src={promo.image}
                  alt={promo.dishName || promo.title}
                  fill
                  priority={idx === 0}
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
              </Link>
            ))}

            {/* Desktop Left / Right Navigation Arrows (Always visible on laptop, clean glassmorphism) */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-[#C4161C] text-[#1F2937] hover:text-white items-center justify-center backdrop-blur-md border border-white/60 shadow-lg transition-all hover:scale-105"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Slide"
              className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-[#C4161C] text-[#1F2937] hover:text-white items-center justify-center backdrop-blur-md border border-white/60 shadow-lg transition-all hover:scale-105"
            >
              <ChevronRight size={22} />
            </button>

            {/* Subtle Minimalist Slide Counter (Bottom Right) */}
            <div className="hidden sm:flex absolute bottom-3.5 right-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wider items-center gap-1.5 shadow-md pointer-events-none">
              <span className="text-[#FDE047]">{currentSlide + 1}</span>
              <span className="text-white/40">/</span>
              <span>{heroPromos.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Haldiram Style "Shop By Category" Grid */}
      <section className="py-8 sm:py-12 bg-white border-b border-[#F0EAE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between gap-3 mb-6 pb-2.5 border-b border-[#ECE7DE]">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#C4161C] block mb-0.5">
                Fresh From Kitchen
              </span>
              <h2 className="font-serif text-lg sm:text-2xl md:text-3xl font-bold text-[#1F2937] tracking-tight">
                Explore Categories
              </h2>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF1E8] border border-[#FDD5C2] text-[#C4161C] hover:bg-[#C4161C] hover:text-white transition-colors text-xs font-bold shrink-0 shadow-xs"
            >
              <span>View All Menu</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5 sm:gap-4 md:gap-6">
            {mainCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/menu?cat=${cat.id}`}
                className="group flex flex-col items-center text-center p-2 sm:p-3 rounded-2xl bg-[#FFFBF8] border border-[#F3EDE2] hover:border-[#C4161C] hover:shadow-md transition-all"
              >
                <div className="relative w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#E5E0D8] group-hover:border-[#C4161C] mb-1.5 sm:mb-2 transition-colors shadow-xs bg-white">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-[11px] sm:text-xs md:text-sm text-[#1F2937] group-hover:text-[#C4161C] transition-colors leading-tight min-h-[26px] flex items-center justify-center text-center">
                  {cat.shortName || cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Haldiram Style Bestsellers Product Cards (NO CART - WhatsApp Order) */}
      <section className="py-14 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="flex items-end justify-between gap-3 mb-8 pb-3 border-b border-[#E5DFD7]">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#C4161C] block mb-0.5">
                Customer Favorites
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#1F2937]">
                Best Selling Delicacies
              </h2>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF1E8] border border-[#FDD5C2] text-[#C4161C] hover:bg-[#C4161C] hover:text-white transition-colors text-xs font-bold shrink-0 shadow-xs"
            >
              <span>Full Catalog</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
            {bestsellers.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#ECE7DE] hover:border-[#C4161C] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  {/* Food Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF7F2]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Haldiram Style Veg Square Icon */}
                    <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm p-0.5 sm:p-1 rounded border border-[#22c55e] shadow-xs">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#22c55e]" />
                    </div>

                    {/* Tag / Badge */}
                    {item.tag && (
                      <div className="absolute top-2 right-2 px-1.5 sm:px-2.5 py-0.5 rounded-full bg-[#C4161C] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wide shadow-xs">
                        {item.tag}
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#9CA3AF] font-bold truncate">
                          {item.categoryName}
                        </span>
                        <span className="hidden sm:inline-block text-[9px] sm:text-[10px] font-semibold px-1.5 py-0.5 rounded border border-[#E5DFD7] text-[#6B7280] bg-[#FAF7F2]">
                          Fresh Daily
                        </span>
                      </div>

                      <h4 className="font-serif font-bold text-xs sm:text-base text-[#1F2937] group-hover:text-[#C4161C] transition-colors leading-snug mb-1 line-clamp-1">
                        {item.name}
                      </h4>

                      <p className="hidden sm:block text-xs text-[#6B7280] line-clamp-2 leading-relaxed mb-2.5">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-1.5 sm:pt-2 border-t border-[#F3EDE2] flex items-center justify-between mb-2 sm:mb-3">
                      <div>
                        <span className="hidden sm:block text-[9px] text-[#9CA3AF] font-medium leading-none mb-0.5">Daily Price</span>
                        <span className="font-serif text-sm sm:text-lg font-black text-[#C4161C]">
                          ₹{item.price}/-
                        </span>
                      </div>
                      <span className="text-[9px] sm:text-[11px] text-[#15803D] font-bold bg-[#DCFCE7] px-1.5 py-0.5 rounded">
                        100% Veg
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Order Button (NO CART) */}
                <div className="p-2 sm:p-4 pt-0">
                  <a
                    href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
                      `Hello Mr Mrs Panipuriwala! I would like to order: *${item.name}* (₹${item.price}/-).`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2.5 px-2 rounded-lg sm:rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-colors shadow-xs hover:shadow-md"
                  >
                    <MessageCircle size={13} className="shrink-0" />
                    <span className="truncate">Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Haldiram Style "Our Recipes / Chef Secrets" Section (Screenshot 4) */}
      <section className="py-14 bg-white border-b border-[#F0EAE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C4161C] block mb-1">
              Crafted With Passion
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937]">
              Chef's Signature Creations
            </h2>
            <div className="w-16 h-0.5 bg-[#C4161C] mx-auto mt-2 mb-3" />
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Secret spice blends, slow-churned chutneys, and royal Mewari recipes
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">

            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-[#ECE7DE] bg-[#FFFDFB] group shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
                    alt="Royal Combo Chaat"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-2.5 sm:p-4">
                  <span className="text-[9px] sm:text-[10px] text-[#9CA3AF] uppercase font-semibold block mb-0.5">Chaat Special</span>
                  <h4 className="font-bold text-xs sm:text-sm text-[#1F2937] mb-1 group-hover:text-[#C4161C] transition-colors line-clamp-1">
                    5-in-1 Royal Combo Chaat Platter
                  </h4>
                  <p className="hidden sm:block text-xs text-[#6B7280] line-clamp-2 mb-2.5">
                    2 Sev Puri, 2 Ragada Puri, 2 Dahi Puri, 2 Tokri Chaat & 2 Masala Puri served in one grand royal plate.
                  </p>
                </div>
              </div>
              <div className="p-2.5 sm:p-4 pt-0">
                <Link href="/menu?cat=chaat" className="text-[11px] sm:text-xs font-bold text-[#C4161C] hover:underline flex items-center gap-1">
                  <span>Explore Chaats</span> →
                </Link>
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-[#ECE7DE] bg-[#FFFDFB] group shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"
                    alt="Grand Basket Chaat"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-2.5 sm:p-4">
                  <span className="text-[9px] sm:text-[10px] text-[#9CA3AF] uppercase font-semibold block mb-0.5">Dahi Indulgence</span>
                  <h4 className="font-bold text-xs sm:text-sm text-[#1F2937] mb-1 group-hover:text-[#C4161C] transition-colors line-clamp-1">
                    Grand Basket Chaat Supreme
                  </h4>
                  <p className="hidden sm:block text-xs text-[#6B7280] line-clamp-2 mb-2.5">
                    Crispy edible potato basket overflowing with spiced sprouts, sweet churned curd, pomegranate & saunth.
                  </p>
                </div>
              </div>
              <div className="p-2.5 sm:p-4 pt-0">
                <Link href="/menu?cat=dahichaat" className="text-[11px] sm:text-xs font-bold text-[#C4161C] hover:underline flex items-center gap-1">
                  <span>Explore Dahi Chaats</span> →
                </Link>
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-[#ECE7DE] bg-[#FFFDFB] group shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
                    alt="Royal Paan Shake"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-2.5 sm:p-4">
                  <span className="text-[9px] sm:text-[10px] text-[#9CA3AF] uppercase font-semibold block mb-0.5">Beverages</span>
                  <h4 className="font-bold text-xs sm:text-sm text-[#1F2937] mb-1 group-hover:text-[#C4161C] transition-colors line-clamp-1">
                    Signature Royal Paan Shake
                  </h4>
                  <p className="hidden sm:block text-xs text-[#6B7280] line-clamp-2 mb-2.5">
                    Infused with natural betel leaf, scented gulkand, rich cream, and traditional cooling spices.
                  </p>
                </div>
              </div>
              <div className="p-2.5 sm:p-4 pt-0">
                <Link href="/menu?cat=shakes" className="text-[11px] sm:text-xs font-bold text-[#C4161C] hover:underline flex items-center gap-1">
                  <span>Explore Shakes</span> →
                </Link>
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-[#ECE7DE] bg-[#FFFDFB] group shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80"
                    alt="Lotus Biscoff Frappe"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-2.5 sm:p-4">
                  <span className="text-[9px] sm:text-[10px] text-[#9CA3AF] uppercase font-semibold block mb-0.5">Artisan Cafe</span>
                  <h4 className="font-bold text-xs sm:text-sm text-[#1F2937] mb-1 group-hover:text-[#C4161C] transition-colors line-clamp-1">
                    Lotus Biscoff Cold Frappe
                  </h4>
                  <p className="hidden sm:block text-xs text-[#6B7280] line-clamp-2 mb-2.5">
                    Espresso blended with genuine speculoos cookie butter, whipped cream & crunchy caramelized biscuit crumb.
                  </p>
                </div>
              </div>
              <div className="p-2.5 sm:p-4 pt-0">
                <Link href="/menu?cat=coldcoffee" className="text-[11px] sm:text-xs font-bold text-[#C4161C] hover:underline flex items-center gap-1">
                  <span>Explore Coffees</span> →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Haldiram Style "Bulk Orders & Corporate Orders" Banner (Screenshot 2 & 3) */}
      <section className="py-12 bg-gradient-to-r from-[#C4161C] via-[#9B1117] to-[#730B10] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-[#FEF08A] text-xs font-bold uppercase tracking-wider">
                <Gift size={14} />
                <span>Wedding Stalls • Birthdays • Corporate Parties</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-white">
                Live Chaat Counters & Outdoor Catering
              </h2>
              <p className="text-xs sm:text-sm text-white/90 max-w-2xl font-light leading-relaxed">
                Hosting an event in Chittorgarh or nearby regions? Treat your guests to the royal magic of live Gol Gappe stations with 5 flavored waters, Dahi Tokri Chaats & artisan coffee counters.
              </p>
              <p className="text-xs text-[#FDE047] font-semibold">
                Direct Contact with Founder Rajendra Tripathi: +91 95878 98150 / +91 91191 69333
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/catering"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#C4161C] hover:bg-[#FFF1E8] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xl"
              >
                <span>View Catering Packages</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
                  "Namaste Rajendra ji! I would like to inquire about live chaat catering for an event."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xl"
              >
                <MessageCircle size={16} />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Reviews Strip */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-1 text-[#F59E0B] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-current" />
              ))}
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2937]">
              Rated 4.9 ★ by 380+ Food Lovers in Chittorgarh
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsData.slice(0, 3).map((r) => (
              <div key={r.name} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD7]">
                <p className="text-xs sm:text-sm text-[#4B5563] italic mb-3">"{r.comment}"</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#1F2937]">{r.name}</span>
                  <span className="text-[#C4161C] font-semibold">{r.dish}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/reviews" className="text-xs font-bold text-[#C4161C] hover:underline">
              Read All Verified Guest Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <FloatingWidgets />

      {/* Footer */}
      <HaldiramFooter />

    </div>
  );
}
