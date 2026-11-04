'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ZoomIn, X, ChevronLeft, Download, BookOpen, MessageCircle } from 'lucide-react';
import HaldiramHeader from '../../components/HaldiramHeader';
import HaldiramFooter from '../../components/HaldiramFooter';
import FloatingWidgets from '../../components/FloatingWidgets';
import { scannedMenuPages, restaurantInfo } from '../../data/restaurantData';

export default function DigitalMenuPage() {
  const [activePage, setActivePage] = useState(null);

  const openLightbox = (index) => setActivePage(index);
  const closeLightbox = () => setActivePage(null);

  const prevPage = () => {
    setActivePage((prev) => (prev === 0 ? scannedMenuPages.length - 1 : prev - 1));
  };

  const nextPage = () => {
    setActivePage((prev) => (prev + 1) % scannedMenuPages.length);
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#1F2937] flex flex-col font-sans">
      <HaldiramHeader />

      {/* Breadcrumb strip */}
      <div className="bg-[#FAF7F2] border-b border-[#E5DFD7] py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-[#6B7280]">
          <Link href="/" className="hover:text-[#C4161C]">Home</Link>
          <ChevronRight size={13} />
          <span className="font-semibold text-[#1F2937]">Original Printed Menu Book</span>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-[#FAF7F2] py-12 border-b border-[#ECE7DE]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#C4161C]/10 text-[#C4161C] text-xs font-bold uppercase tracking-wider mb-2">
            Authentic Physical Edition
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2937] mb-3">
            Original Scanned Menu Book
          </h1>
          <div className="w-16 h-1 bg-[#C4161C] mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-[#6B7280] max-w-xl mx-auto leading-relaxed">
            Click on any page below to open our high-resolution spiral-bound menu card. Inspect real pricing, customizations, and official contact numbers.
          </p>
        </div>
      </section>

      {/* Grid of Scanned Pages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {scannedMenuPages.map((page, index) => (
            <div
              key={page.title}
              onClick={() => openLightbox(index)}
              className="bg-white rounded-2xl overflow-hidden border border-[#ECE7DE] hover:border-[#C4161C] hover:shadow-xl cursor-pointer group transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#FAF7F2]">
                <Image
                  src={page.image}
                  alt={page.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-[#C4161C] text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn size={22} />
                  </div>
                </div>

                {/* Page Number Pill */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-bold text-white border border-white/20">
                  Page {index + 1}
                </div>
              </div>

              <div className="p-3.5 bg-white border-t border-[#ECE7DE]">
                <h4 className="font-bold text-xs sm:text-sm text-[#1F2937] truncate group-hover:text-[#C4161C] transition-colors">
                  {page.title}
                </h4>
                <p className="text-[11px] text-[#6B7280] truncate mt-0.5 font-light">
                  {page.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#FFF1E8] border border-[#FDD5C2] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-base text-[#7A230B]">Have questions about any item?</h4>
            <p className="text-xs text-[#9A2F12]">Chat directly with our counter at Fawwara Chowk for real-time recommendations.</p>
          </div>
          <a
            href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
              "Hello Mr Mrs Panipuriwala! I am viewing your menu book and would like some assistance."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#20ba59] transition-all shrink-0 flex items-center gap-2"
          >
            <MessageCircle size={16} />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <button
            onClick={prevPage}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 text-white hover:bg-[#C4161C] transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 text-white hover:bg-[#C4161C] transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          <div className="relative max-w-2xl w-full h-[84vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
            <Image
              src={scannedMenuPages[activePage].image}
              alt={scannedMenuPages[activePage].title}
              fill
              className="object-contain"
              priority
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs text-white">
              <div>
                <span className="font-bold text-white">
                  {scannedMenuPages[activePage].title}
                </span>
                <span className="text-white/60 ml-2">
                  (Page {activePage + 1} of {scannedMenuPages.length})
                </span>
              </div>
              <a
                href={scannedMenuPages[activePage].image}
                target="_blank"
                rel="noreferrer"
                download
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C4161C] hover:bg-[#9B1117] text-white text-xs font-bold transition-colors"
              >
                <Download size={13} />
                <span>Full Resolution</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <FloatingWidgets />
      <HaldiramFooter />
    </div>
  );
}
