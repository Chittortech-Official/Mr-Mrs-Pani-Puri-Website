'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Award, ShieldCheck, HeartHandshake, Utensils, Clock, CheckCircle2 } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function AboutSection({ onOpenOrderModal }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden bg-jali-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-element">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#B99470]/15 text-[#8C6A48] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles size={14} className="text-[#B99470]" />
            <span>The Story of Authentic Flavors</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141110] mb-4">
            Where Royal Tradition Meets{' '}
            <span className="italic font-normal text-[#883563]">Contemporary Indulgence</span>
          </h2>
          <div className="w-24 h-0.5 bg-[#B99470] mx-auto mb-6" />
          <p className="text-[#766C66] text-sm sm:text-base leading-relaxed">
            Established in 2023 at Fawwara Chowk, Pratap Nagar, Begun, Mr Mrs Panipuriwala & Chathouse was born from a simple passion: to elevate beloved Indian street food and chaat into an unforgettable, hygienic, and royal culinary experience.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Logo & Menu Cover */}
          <div className="lg:col-span-5 relative reveal-element">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Menu Cover Scan */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[3/4]">
                <Image
                  src="/114054.jpg"
                  alt="Mr Mrs Panipuriwala Original Menu Cover"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4B999] font-semibold block mb-1">
                    Authentic Original Menu
                  </span>
                  <h4 className="font-serif text-xl font-bold text-white">
                    Mr Mrs Panipuriwala
                  </h4>
                  <p className="text-xs text-[#E8DFD3]/90">Begun, Chittorgarh • Est. 2023</p>
                </div>
              </div>

              {/* Floating Mascot Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#B99470] bg-white group hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo.jpg"
                  alt="Official Mascot"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Pure Veg Stamp */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 px-4 py-2 rounded-2xl bg-[#141110] text-white border border-[#B99470]/40 shadow-xl flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                <span className="text-xs font-semibold tracking-wider text-[#FAF8F5]">100% PURE VEG</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6 reveal-element reveal-delay-2">
            
            <div className="space-y-4 text-[#2C2725]">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141110]">
                Crafted with Pure Ingredients, Served with Heartfelt Mewari Hospitality
              </h3>
              <p className="text-sm sm:text-base text-[#766C66] leading-relaxed">
                Whether it is our signature crispy puris filled with soothing hing-pudina jal, our rich and velvety Dahi Tokri Chaat, or our trending Lotus Biscoff Latte — every recipe is prepared with meticulous cleanliness and fresh ingredients.
              </p>
              <p className="text-sm sm:text-base text-[#766C66] leading-relaxed">
                Under the guidance of <strong>Rajendra Tripathi</strong>, our kitchen combines the rich street gastronomic traditions of Rajasthan, Mumbai, and Indore with a contemporary café menu including stone-baked pizzas, cheesy burgers, momos, and handcrafted thick shakes.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm flex items-start gap-3.5 hover:border-[#B99470] transition-colors">
                <div className="p-2 rounded-xl bg-[#B99470]/15 text-[#8C6A48] shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#141110]">RO Purified Mineral Water</h4>
                  <p className="text-xs text-[#766C66] mt-0.5">All pani puri pani and cooking strictly utilizes RO water.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm flex items-start gap-3.5 hover:border-[#B99470] transition-colors">
                <div className="p-2 rounded-xl bg-[#883563]/15 text-[#883563] shrink-0">
                  <Utensils size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#141110]">House-Churned Chutneys</h4>
                  <p className="text-xs text-[#766C66] mt-0.5">Slow-cooked saunth, sweet date-tamarind & fresh mint-coriander.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm flex items-start gap-3.5 hover:border-[#B99470] transition-colors">
                <div className="p-2 rounded-xl bg-[#B99470]/15 text-[#8C6A48] shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#141110]">Breakfast to Late Dinner</h4>
                  <p className="text-xs text-[#766C66] mt-0.5">Morning kachoris from 6:00 AM; evening café until 11:00 PM.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm flex items-start gap-3.5 hover:border-[#B99470] transition-colors">
                <div className="p-2 rounded-xl bg-[#1E7246]/15 text-[#1E7246] shrink-0">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#141110]">Live Party & Event Counters</h4>
                  <p className="text-xs text-[#766C66] mt-0.5">Full catering for weddings, birthdays & family get-togethers.</p>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141110] hover:bg-[#2C2725] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors"
              >
                <span>Browse Full Menu & Prices</span>
                <span>→</span>
              </a>
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B99470] hover:bg-[#9E7B58] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors shadow-md"
              >
                <span>Reserve Table / Bulk Order</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

