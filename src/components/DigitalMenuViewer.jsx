'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BookOpen, Sparkles, ZoomIn, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { scannedMenuPages } from '../data/restaurantData';

export default function DigitalMenuViewer() {
  const [activeModalPage, setActiveModalPage] = useState(null);

  const openLightbox = (pageIndex) => setActiveModalPage(pageIndex);
  const closeLightbox = () => setActiveModalPage(null);

  const prevPage = () => {
    setActiveModalPage((prev) =>
      prev === 0 ? scannedMenuPages.length - 1 : prev - 1
    );
  };

  const nextPage = () => {
    setActiveModalPage((prev) =>
      (prev + 1) % scannedMenuPages.length
    );
  };

  return (
    <section id="digital-menu" className="py-20 lg:py-28 bg-[#1F1A18] text-[#FAF8F5] relative overflow-hidden bg-jali-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-element">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#B99470]/20 text-[#D4B999] text-xs font-semibold uppercase tracking-widest mb-3 border border-[#B99470]/30">
            <BookOpen size={14} className="text-[#B99470]" />
            <span>Original Print Editions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Browse the Original Menu Book
          </h2>
          <div className="w-24 h-0.5 bg-[#B99470] mx-auto mb-6" />
          <p className="text-[#D4B999]/80 text-sm sm:text-base leading-relaxed">
            Click any scanned page from our physical menu card to inspect full high-resolution pages, seasonal items, and authentic pricing.
          </p>
        </div>

        {/* Scanned Pages Carousel Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {scannedMenuPages.map((page, index) => (
            <div
              key={page.title}
              onClick={() => openLightbox(index)}
              className="reveal-element bg-[#141110] rounded-2xl overflow-hidden border border-[#B99470]/30 hover:border-[#B99470] cursor-pointer group shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/60">
                <Image
                  src={page.image}
                  alt={page.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-[#B99470] text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={22} />
                  </div>
                </div>

                {/* Page Number Pill */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-semibold text-[#D4B999] border border-white/10">
                  Page {index + 1}
                </div>
              </div>

              {/* Title & info */}
              <div className="p-3.5 bg-[#141110] border-t border-white/5">
                <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#FAF8F5] truncate group-hover:text-[#B99470] transition-colors">
                  {page.title}
                </h4>
                <p className="text-[10px] text-[#766C66] truncate mt-0.5">
                  {page.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalPage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 text-white hover:bg-[#B99470] transition-colors border border-white/10"
            aria-label="Previous Page"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 text-white hover:bg-[#B99470] transition-colors border border-white/10"
            aria-label="Next Page"
          >
            <ChevronRight size={24} />
          </button>

          {/* Page Image */}
          <div className="relative max-w-2xl w-full h-[82vh] rounded-2xl overflow-hidden shadow-2xl border border-[#B99470]/50 bg-black">
            <Image
              src={scannedMenuPages[activeModalPage].image}
              alt={scannedMenuPages[activeModalPage].title}
              fill
              className="object-contain"
              priority
            />

            {/* Bottom Caption Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs sm:text-sm text-white">
              <div>
                <span className="font-serif font-bold text-[#D4B999]">
                  {scannedMenuPages[activeModalPage].title}
                </span>
                <span className="text-white/60 ml-2">
                  (Page {activeModalPage + 1} of {scannedMenuPages.length})
                </span>
              </div>
              <a
                href={scannedMenuPages[activeModalPage].image}
                target="_blank"
                rel="noreferrer"
                download
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B99470] hover:bg-[#9E7B58] text-white text-xs font-medium transition-colors"
              >
                <Download size={13} />
                <span>Open Full Size</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

