'use client';

import React, { useState, useMemo } from 'react';
import { Search, Sparkles, MessageCircle, Flame, Star, Tag, UtensilsCrossed } from 'lucide-react';
import { menuCategories, menuItems, restaurantInfo } from '../data/restaurantData';

export default function MenuSection({ onSelectItemForOrder }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden bg-jali-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-element">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#B99470]/15 text-[#8C6A48] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles size={14} className="text-[#B99470]" />
            <span>Pure Veg Delights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141110] mb-4">
            Our Complete Culinary Menu
          </h2>
          <div className="w-24 h-0.5 bg-[#B99470] mx-auto mb-6" />
          <p className="text-[#766C66] text-sm sm:text-base leading-relaxed">
            Every dish is freshly crafted upon order using pure dairy, RO purified mineral water, and genuine whole spices. All prices in Indian Rupees (₹).
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 reveal-element">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B99470]" size={18} />
            <input
              type="text"
              placeholder="Search pani puri, biscoff, burger, pizza, shake..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-[#E8DFD3] focus:border-[#B99470] focus:ring-2 focus:ring-[#B99470]/20 text-sm text-[#2C2725] placeholder-[#766C66]/70 shadow-sm outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#766C66] hover:text-[#141110]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start lg:justify-center">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-200 shrink-0 border ${
                activeCategory === cat.id
                  ? 'bg-[#141110] text-[#FAF8F5] border-[#141110] shadow-md'
                  : 'bg-white text-[#766C66] border-[#E8DFD3] hover:border-[#B99470] hover:text-[#141110]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Items Count Notification */}
        <div className="flex items-center justify-between text-xs text-[#766C66] mb-6 px-1">
          <span>Showing {filteredItems.length} delicacies</span>
          <span className="hidden sm:inline">100% Pure Veg Kitchen • RO Water Clean</span>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="reveal-element bg-white rounded-2xl p-5 border border-[#E8DFD3] hover:border-[#B99470] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B99470]/0 to-transparent group-hover:via-[#B99470] transition-all duration-300" />

              <div>
                {/* Header row: Veg dot, Name & Price */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-start gap-2.5">
                    {/* Pure Veg Green Dot Box */}
                    <div className="w-4 h-4 rounded border border-[#22c55e] flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#141110] group-hover:text-[#883563] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-[#B99470]/15 text-[#8C6A48] mt-1">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-serif text-lg font-bold text-[#8C6A48]">
                      ₹{item.price}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#766C66] leading-relaxed mb-3 font-light pl-6">
                  {item.desc}
                </p>

                {/* Customization Notes */}
                {item.notes && (
                  <p className="text-[11px] text-[#B99470] font-medium pl-6 mb-3 italic">
                    ℹ️ {item.notes}
                  </p>
                )}
              </div>

              {/* Bottom Quick Order Button */}
              <div className="pt-3 border-t border-[#E8DFD3]/60 flex items-center justify-between pl-6">
                <span className="text-[10px] uppercase tracking-wider text-[#766C66] font-medium">
                  Freshly Prepared
                </span>
                
                <a
                  href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
                    `Hello Mr. & Mrs. Panipuriwala! I would like to order: *${item.name}* (₹${item.price}).`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#1E7246] hover:text-white border border-[#25D366]/30 text-xs font-semibold transition-all duration-200"
                >
                  <MessageCircle size={13} />
                  <span>Order</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E8DFD3] max-w-lg mx-auto p-8">
            <UtensilsCrossed size={40} className="mx-auto text-[#B99470] mb-3" />
            <h4 className="font-serif text-lg font-bold text-[#141110] mb-1">
              No matching delicacies found
            </h4>
            <p className="text-xs text-[#766C66] mb-4">
              Try searching for something else like "chaat", "frappe", "sandwich", or clear the search filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full bg-[#141110] text-white text-xs font-semibold tracking-wider uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
