'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, HeartHandshake, PartyPopper, Building2, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { cateringServices, restaurantInfo } from '../data/restaurantData';

export default function CateringSection({ onOpenOrderModal }) {
  const iconMap = {
    HeartHandshake: HeartHandshake,
    PartyPopper: PartyPopper,
    Building2: Building2,
  };

  return (
    <section id="catering" className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden bg-jali-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-element">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1E7246]/15 text-[#1E7246] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles size={14} className="text-[#1E7246]" />
            <span>Event Planner & Catering</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141110] mb-4">
            Live Chaat Counters & Grand Event Catering
          </h2>
          <div className="w-24 h-0.5 bg-[#B99470] mx-auto mb-6" />
          <p className="text-[#766C66] text-sm sm:text-base leading-relaxed">
            Planning a wedding, ring ceremony, birthday bash, or corporate function in Begun or Chittorgarh? Treat your guests to the unforgettable magic of live, hygienic street food stations.
          </p>
        </div>

        {/* 3 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cateringServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.title}
                className="reveal-element bg-white rounded-3xl p-8 border border-[#E8DFD3] hover:border-[#B99470] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#B99470]/15 group-hover:bg-[#B99470] text-[#8C6A48] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                      <Icon size={26} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#141110] text-[#D4B999] text-[11px] font-semibold uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#141110] mb-3 group-hover:text-[#883563] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#766C66] leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#E8DFD3]">
                  <div className="flex items-center gap-2 text-xs text-[#2C2725]">
                    <CheckCircle2 size={14} className="text-[#1E7246]" />
                    <span>Uniformed professional chaat chefs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#2C2725]">
                    <CheckCircle2 size={14} className="text-[#1E7246]" />
                    <span>100% Pure Veg & RO mineral water</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#2C2725]">
                    <CheckCircle2 size={14} className="text-[#1E7246]" />
                    <span>Customized menu curation</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grand Catering Call-To-Action Banner */}
        <div className="reveal-element bg-[#141110] rounded-3xl p-8 sm:p-12 border border-[#B99470]/40 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B99470]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#B99470] font-semibold">
                Direct Contact With The Owner
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Book Catering for Your Next Celebration
              </h3>
              <p className="text-sm sm:text-base text-[#D4B999]/90 max-w-xl font-light">
                Connect directly with <strong>Rajendra Tripathi</strong> to plan live stalls, package quotes, and custom tasting sessions.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#FAF8F5]/80">
                <span>📞 {restaurantInfo.primaryPhone}</span>
                <span>•</span>
                <span>📱 {restaurantInfo.secondaryPhone} (Rajendra Tripathi)</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
                  "Namaste Rajendra ji! I would like to inquire about live chaat catering for an upcoming event."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold tracking-wider transition-all shadow-xl"
              >
                <MessageCircle size={18} />
                <span>Inquire on WhatsApp</span>
              </a>

              <a
                href={`tel:${restaurantInfo.secondaryPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold tracking-wider transition-all border border-white/20"
              >
                <Phone size={16} />
                <span>Call Owner Directly</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

