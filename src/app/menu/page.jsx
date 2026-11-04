'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, MessageCircle, Filter, ArrowUpDown, Sparkles, Check, ChevronRight } from 'lucide-react';
import HaldiramHeader from '../../components/HaldiramHeader';
import HaldiramFooter from '../../components/HaldiramFooter';
import FloatingWidgets from '../../components/FloatingWidgets';
import { allMenuItems, restaurantInfo, mainCategories } from '../../data/restaurantData';

function MenuContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';
  const initialQuery = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortBy, setSortBy] = useState('default'); // 'default', 'price-low', 'price-high'

  const categories = [
    { id: 'all', name: 'All Categories' },
    ...mainCategories.map((c) => ({ id: c.id, name: c.name })),
  ];

  // Sync state when URL params change (e.g. from header search bar on laptop)
  React.useEffect(() => {
    const q = searchParams.get('q');
    const cat = searchParams.get('cat');
    if (q !== null) {
      setSearchQuery(q);
      setSelectedCategory('all');
    } else if (cat !== null) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    let result = allMenuItems.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        (item.categoryName && item.categoryName.toLowerCase().includes(q)) ||
        (item.tag && item.tag.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });

    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#1F2937] flex flex-col font-sans">
      <HaldiramHeader />

      {/* Breadcrumb strip */}
      <div className="bg-[#FAF7F2] border-b border-[#E5DFD7] py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-[#6B7280]">
          <Link href="/" className="hover:text-[#C4161C]">Home</Link>
          <ChevronRight size={13} />
          <span className="font-semibold text-[#1F2937]">Store Menu Catalog</span>
          {selectedCategory !== 'all' && (
            <>
              <ChevronRight size={13} />
              <span className="text-[#C4161C] font-semibold">
                {categories.find((c) => c.id === selectedCategory)?.name}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full">
        
        {/* Title & Stats */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#ECE7DE]">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937]">
              {selectedCategory === 'all'
                ? 'All Fresh Delicacies'
                : categories.find((c) => c.id === selectedCategory)?.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
              Showing {filteredItems.length} fresh vegetarian preparations • Pure RO water & fresh dairy
            </p>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input
                type="text"
                placeholder="Search this menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-2 rounded-full bg-[#FAF7F2] border border-[#E5DFD7] text-xs text-[#1F2937] outline-none focus:border-[#C4161C] w-48 sm:w-60"
              />
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E5DFD7] rounded-full px-3 py-1.5 text-xs">
              <ArrowUpDown size={13} className="text-[#6B7280]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-xs text-[#1F2937] outline-none cursor-pointer"
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* 2-Column Layout: Sidebar Categories + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Category Filter Sidebar (Desktop) */}
          <div className="lg:col-span-3 bg-[#FAF7F2] p-5 rounded-2xl border border-[#ECE7DE] hidden lg:block sticky top-36">
            <h3 className="font-bold text-xs uppercase tracking-wider text-[#730B10] mb-4 pb-2 border-b border-[#E5DFD7] flex items-center justify-between">
              <span>Categories</span>
              <Filter size={14} />
            </h3>
            <ul className="space-y-1 text-xs font-medium">
              {categories.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => setSelectedCategory(c.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center justify-between ${
                      selectedCategory === c.id
                        ? 'bg-[#C4161C] text-white font-bold shadow-sm'
                        : 'text-[#4A403A] hover:bg-white hover:text-[#C4161C]'
                    }`}
                  >
                    <span>{c.name}</span>
                    {selectedCategory === c.id && <Check size={14} />}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-[#E5DFD7] text-xs text-[#6B7280] space-y-2">
              <p className="font-semibold text-[#1F2937]">Need Party Catering?</p>
              <p className="text-[11px]">We provide live counters for weddings, kitty parties & birthdays.</p>
              <Link href="/catering" className="text-[#C4161C] font-bold block hover:underline">
                View Catering Stalls →
              </Link>
            </div>
          </div>

          {/* Category Scroll Pills (Mobile / Tablet) */}
          <div className="lg:hidden col-span-1 flex items-center gap-2 overflow-x-auto pb-2 -mt-4 mb-2 no-scrollbar">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 border ${
                  selectedCategory === c.id
                    ? 'bg-[#C4161C] text-white border-[#C4161C]'
                    : 'bg-white text-[#4B5563] border-[#E5DFD7]'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Product Cards Grid (9 Cols on Desktop) */}
          <div className="lg:col-span-9">
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl overflow-hidden border border-[#ECE7DE] hover:border-[#C4161C] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Product Image */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF7F2]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />

                        {/* Haldiram Style Veg Square */}
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-1 rounded border border-[#22c55e] shadow-sm">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                        </div>

                        {/* Tag */}
                        {item.tag && (
                          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#C4161C] text-white text-[10px] font-bold uppercase tracking-wide shadow-md">
                            {item.tag}
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="text-[10px] uppercase tracking-wider text-[#9CA3AF] font-bold">
                              {item.categoryName}
                            </span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-[#E5DFD7] text-[#6B7280] bg-[#FAF7F2]">
                              Fresh Daily
                            </span>
                          </div>

                          <h3 className="font-serif font-bold text-sm sm:text-base text-[#1F2937] group-hover:text-[#C4161C] transition-colors leading-snug mb-1 line-clamp-1">
                            {item.name}
                          </h3>

                          <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed mb-3 font-light">
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

                    {/* WhatsApp Action Button (NO CART) */}
                    <div className="p-4 pt-0">
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
            ) : (
              <div className="p-12 text-center bg-[#FAF7F2] rounded-2xl border border-[#E5DFD7]">
                <p className="text-sm font-bold text-[#1F2937]">No items found matching your filters</p>
                <p className="text-xs text-[#6B7280] mt-1 mb-4">Try clearing your search query or selecting All Categories.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-5 py-2 rounded-full bg-[#C4161C] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

      <FloatingWidgets />
      <HaldiramFooter />
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading Store Menu...</div>}>
      <MenuContent />
    </Suspense>
  );
}

