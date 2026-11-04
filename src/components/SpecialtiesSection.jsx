'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Star, MessageCircle, Utensils } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function SpecialtiesSection({ onSelectItemForOrder }) {
  const specialties = [
    {
      name: "Royal Combo Chaat Platter",
      category: "Authentic Chaat",
      price: "₹70",
      tag: "Best Value Platter",
      desc: "The ultimate chaat lover's paradise: 2 Sev Puri + 2 Ragada Puri + 2 Dahi Puri + 2 Tokri Chaat + 2 Masala Puri served in royal style.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Grand Basket Chaat",
      category: "Chef's Signature",
      price: "₹100",
      tag: "Customer Favorite",
      desc: "Crunchy golden edible potato basket brimming with spiced potatoes, sprouted pulses, chilled sweetened curd, date chutney, and pomegranate.",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Royal Paan Shake",
      category: "Signature Beverages",
      price: "₹100",
      tag: "Mewari Royalty",
      desc: "A true Indian gourmet indulgence crafted with fresh betel leaves, scented royal gulkand, and thick ice cream.",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Lotus Biscoff Frappe",
      category: "Café Coffee",
      price: "₹140",
      tag: "Trending",
      desc: "Double espresso blended with rich Belgian Lotus Biscoff cookie spread, whole milk, and crunchy caramelized speculoos dust.",
      image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Paneer Tandoori Special Pizza",
      category: "Stone-Baked Style Pizza",
      price: "₹200",
      tag: "Cheesy Delight",
      desc: "Crispy crust layered with herb marinara, roasted smoky paneer tikka cubes, onions, green bell peppers, and bubbling 100% mozzarella.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Jodhpur Famous Pyaaz Kachori",
      category: "Morning Hot Snacks",
      price: "₹20",
      tag: "Morning Star",
      desc: "Flaky, golden puffed pastry filled with seasoned caramelized onions and whole Rajasthani spices. Available hot every morning from 6:00 AM.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="specialties" className="py-20 lg:py-28 bg-[#141110] text-[#FAF8F5] relative overflow-hidden bg-jali-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-element">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#B99470]/20 text-[#D4B999] text-xs font-semibold uppercase tracking-widest mb-3 border border-[#B99470]/30">
            <Sparkles size={14} className="text-[#B99470]" />
            <span>Chef's Masterpieces</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Signature House Specials
          </h2>
          <div className="w-24 h-0.5 bg-[#B99470] mx-auto mb-6" />
          <p className="text-[#D4B999]/80 text-sm sm:text-base leading-relaxed">
            From our celebrated combo platters to handcrafted European cold brews and royal shakes, these are the showstoppers our guests keep returning for.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <div
              key={item.name}
              className="reveal-element bg-[#1F1A18] rounded-3xl overflow-hidden border border-[#B99470]/30 hover:border-[#B99470] transition-all duration-300 group flex flex-col justify-between shadow-xl hover:-translate-y-1.5"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div>
                {/* Image & Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A18] via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#141110]/90 backdrop-blur-md border border-[#B99470]/40 text-[#D4B999] text-xs font-semibold">
                    {item.tag}
                  </div>

                  {/* Price */}
                  <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#B99470] to-[#8C6A48] text-white text-sm font-bold shadow-lg">
                    {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-widest text-[#B99470] font-medium block mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mb-2.5 group-hover:text-[#B99470] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E8DFD3]/80 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Order Button */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5">
                <a
                  href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
                    `Hello Mr. & Mrs. Panipuriwala! I would like to order: *${item.name}* (${item.price}).`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-[#4ade80] hover:text-white border border-[#25D366]/40 text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View full menu banner */}
        <div className="mt-14 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B99470] to-[#8C6A48] hover:from-[#A8835E] hover:to-[#765636] text-white text-sm font-semibold tracking-wider uppercase shadow-xl hover:scale-105 transition-all"
          >
            <Utensils size={18} />
            <span>Explore Complete 70+ Item Menu</span>
          </a>
        </div>

      </div>
    </section>
  );
}
