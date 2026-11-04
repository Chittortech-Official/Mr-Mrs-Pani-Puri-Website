'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles, MessageCircle, ShieldCheck,
  Clock, ArrowRight, Utensils, Star, Gift, CheckCircle2, Heart
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
    }, 6000);
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

      {/* 1. Haldiram Style Hero Promotional Carousel (Compact, Clean & Arrow-Free) */}
      <section className="relative w-full overflow-hidden bg-[#7F1D1D]">
        <div className="relative min-h-[260px] sm:min-h-[380px] md:min-h-[460px] flex items-center">
          {heroPromos.map((promo, idx) => (
            <div
              key={promo.title}
              className={`absolute inset-0 transition-opacity duration-700 flex items-center bg-gradient-to-r ${promo.bgGradient} ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Subtle Festive Pattern Overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FDE047_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

              <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 md:py-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center">

                {/* Left Column: Festive Haldiram Typography */}
                <div className="lg:col-span-7 flex flex-col items-start text-white text-left">

                  {/* Top Haldiram Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/15 backdrop-blur-md text-[#FEF08A] text-[9px] sm:text-xs font-bold uppercase tracking-wider mb-2 border border-[#FDE047]/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] inline-block" />
                    <span>{promo.highlight}</span>
                  </div>

                  <h1 className="font-serif text-lg sm:text-2xl md:text-4xl font-black text-white leading-tight mb-1 sm:mb-1.5 drop-shadow-sm">
                    {promo.title}
                  </h1>

                  <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-[#FDE047] uppercase mb-2 sm:mb-3">
                    {promo.subtitle}
                  </p>

                  <p className="hidden sm:block text-xs sm:text-sm md:text-base text-white/95 leading-relaxed mb-4 font-light max-w-xl">
                    {promo.description}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2.5 sm:mb-4">
                    <Link
                      href={promo.ctaLink}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-white text-[#991B1B] hover:bg-[#FFF1E8] text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-md transition-colors"
                    >
                      <span>{promo.ctaText}</span>
                      <ArrowRight size={13} />
                    </Link>

                    <a
                      href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
                        `Hello Mr Mrs Panipuriwala! I would like to order: ${promo.dishName || 'from menu'}.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-md transition-colors"
                    >
                      <MessageCircle size={14} />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>

                  {/* Trust Badges Bar inside Hero */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-[9px] sm:text-xs text-white/90 border-t border-white/20 pt-2">
                    <span className="flex items-center gap-1">
                      <span className="text-[#4ade80]">✓</span> RO Water
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-[#4ade80]">✓</span> 100% Pure Veg
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-[#FDE047]">★</span> 4.9 Rating in Begun
                    </span>
                  </div>

                </div>

                {/* Right Column: Haldiram Arch Food Showcase Card (Tablet & Desktop) */}
                <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
                  <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-4 border-[#FDE047]/70 shadow-2xl bg-white p-2">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={promo.image}
                        alt={promo.dishName || promo.title}
                        fill
                        priority={idx === 0}
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-bold text-[#991B1B] shadow">
                        {promo.badge}
                      </div>
                    </div>
                    <div className="p-3 text-center bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EE]">
                      <h4 className="font-serif font-bold text-base text-[#1F2937]">
                        {promo.dishName || promo.title}
                      </h4>
                      <p className="text-[11px] text-[#78350F] font-semibold mt-0.5">
                        Fawwara Chowk, Begun • Made Fresh Daily
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}

          {/* Dots Indicator (No arrows as requested) */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
            {heroPromos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentSlide ? 'w-6 bg-[#FDE047]' : 'w-1.5 bg-white/50'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestsellers.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#ECE7DE] hover:border-[#C4161C] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Food Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF7F2]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />

                    {/* Haldiram Style Veg Square Icon */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-1 rounded border border-[#22c55e] shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                    </div>

                    {/* Tag / Badge */}
                    {item.tag && (
                      <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#C4161C] text-white text-[10px] font-bold uppercase tracking-wide shadow-md">
                        {item.tag}
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] uppercase tracking-wider text-[#9CA3AF] font-bold">
                          {item.categoryName}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-[#E5DFD7] text-[#6B7280] bg-[#FAF7F2]">
                          Fresh Daily
                        </span>
                      </div>

                      <h4 className="font-serif font-bold text-base text-[#1F2937] group-hover:text-[#C4161C] transition-colors leading-snug mb-1.5 line-clamp-1">
                        {item.name}
                      </h4>

                      <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed mb-3">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#F3EDE2] flex items-center justify-between mb-3">
                      <div>
                        <span className="text-[10px] text-[#9CA3AF] block font-medium">Daily Price</span>
                        <span className="font-serif text-lg font-black text-[#C4161C]">
                          ₹{item.price}/-
                        </span>
                      </div>
                      <span className="text-[11px] text-[#15803D] font-bold bg-[#DCFCE7] px-2 py-0.5 rounded">
                        100% Veg
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Order Button (NO CART) */}
                <div className="p-4 sm:p-5 pt-0">
                  <a
                    href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
                      `Hello Mr Mrs Panipuriwala! I would like to order: *${item.name}* (₹${item.price}/-).`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-md"
                  >
                    <MessageCircle size={15} />
                    <span>Order on WhatsApp</span>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="rounded-2xl overflow-hidden border border-[#ECE7DE] bg-[#FFFDFB] group shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
                  alt="Royal Combo Chaat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] text-[#9CA3AF] uppercase font-semibold">Chaat Special</span>
                <h4 className="font-bold text-sm text-[#1F2937] mb-1 group-hover:text-[#C4161C] transition-colors">
                  5-in-1 Royal Combo Chaat Platter
                </h4>
                <p className="text-xs text-[#6B7280] line-clamp-2 mb-3">
                  2 Sev Puri, 2 Ragada Puri, 2 Dahi Puri, 2 Tokri Chaat & 2 Masala Puri served in one grand royal plate.
                </p>
                <Link href="/menu?cat=chaat" className="text-xs font-bold text-[#C4161C] hover:underline flex items-center gap-1">
                  <span>Explore Chaats</span> →
                </Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#ECE7DE] bg-[#FFFDFB] group shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"
                  alt="Grand Basket Chaat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] text-[#9CA3AF] uppercase font-semibold">Dahi Indulgence</span>
                <h4 className="font-bold text-sm text-[#1F2937] mb-1 group-hover:text-[#C4161C] transition-colors">
                  Grand Basket Chaat Supreme
                </h4>
                <p className="text-xs text-[#6B7280] line-clamp-2 mb-3">
                  Crispy edible potato basket overflowing with spiced sprouts, sweet churned curd, pomegranate & saunth.
                </p>
                <Link href="/menu?cat=dahichaat" className="text-xs font-bold text-[#C4161C] hover:underline flex items-center gap-1">
                  <span>Explore Dahi Chaats</span> →
                </Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#ECE7DE] bg-[#FFFDFB] group shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
                  alt="Royal Paan Shake"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] text-[#9CA3AF] uppercase font-semibold">Beverages</span>
                <h4 className="font-bold text-sm text-[#1F2937] mb-1 group-hover:text-[#C4161C] transition-colors">
                  Signature Royal Paan Shake
                </h4>
                <p className="text-xs text-[#6B7280] line-clamp-2 mb-3">
                  Infused with natural betel leaf, scented gulkand, rich cream, and traditional cooling spices.
                </p>
                <Link href="/menu?cat=shakes" className="text-xs font-bold text-[#C4161C] hover:underline flex items-center gap-1">
                  <span>Explore Shakes</span> →
                </Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#ECE7DE] bg-[#FFFDFB] group shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80"
                  alt="Lotus Biscoff Frappe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] text-[#9CA3AF] uppercase font-semibold">Artisan Cafe</span>
                <h4 className="font-bold text-sm text-[#1F2937] mb-1 group-hover:text-[#C4161C] transition-colors">
                  Lotus Biscoff Cold Frappe
                </h4>
                <p className="text-xs text-[#6B7280] line-clamp-2 mb-3">
                  Espresso blended with genuine speculoos cookie butter, whipped cream & crunchy caramelized biscuit crumb.
                </p>
                <Link href="/menu?cat=coldcoffee" className="text-xs font-bold text-[#C4161C] hover:underline flex items-center gap-1">
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
                Hosting an event in Begun, Chittorgarh or nearby regions? Treat your guests to the royal magic of live Gol Gappe stations with 5 flavored waters, Dahi Tokri Chaats & artisan coffee counters.
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
