'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles, BookOpen, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { heroSlides, restaurantInfo } from '../data/restaurantData';

export default function HeroSlider({ onOpenOrderModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#141110]">
      {/* Background Image Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="relative w-full h-full animate-kenburns">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center brightness-[0.35]"
            />
          </div>
          {/* Subtle Royal Radial Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141110] via-black/40 to-[#141110]/80" />
          <div className="absolute inset-0 bg-jali-dark opacity-30" />
        </div>
      ))}

      {/* Main Content Hero Card */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16 text-center text-white flex flex-col items-center">
        {/* Official Mascot Crest Medallion */}
        <div className="reveal-element mb-6 flex flex-col items-center">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-b from-[#B99470] via-[#FAF8F5] to-[#8C6A48] shadow-2xl shadow-[#B99470]/30 hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
              <Image
                src="/logo.jpg"
                alt="Mr. & Mrs. Panipuriwala Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Pure Veg & Est Badge */}
        <div className="reveal-element reveal-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F1A18]/90 border border-[#B99470]/50 text-xs sm:text-sm text-[#D4B999] mb-5 shadow-lg backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
          <span className="font-semibold tracking-wider uppercase">100% Pure Veg</span>
          <span className="text-[#B99470]">•</span>
          <span>EST. 2023</span>
          <span className="text-[#B99470]">•</span>
          <span>BEGUN, CHITTORGARH</span>
        </div>

        {/* Grand Royal Typography */}
        <h1 className="reveal-element reveal-delay-2 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF8F5] mb-3 leading-[1.15]">
          Mr. & Mrs.{' '}
          <span className="block sm:inline bg-gradient-to-r from-[#D4B999] via-[#FAF8F5] to-[#B99470] bg-clip-text text-transparent">
            Panipuriwala
          </span>
        </h1>

        <p className="reveal-element reveal-delay-2 font-sans text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] text-[#B99470] font-semibold mb-6">
          Authentic Street Food • Chaat • Café
        </p>

        {/* Slide Description */}
        <p className="reveal-element reveal-delay-3 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#E8DFD3]/90 font-light mb-8 leading-relaxed">
          {heroSlides[currentSlide].description}
        </p>

        {/* Action Buttons */}
        <div className="reveal-element reveal-delay-4 flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full max-w-md sm:max-w-none">
          <a
            href="#menu"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#B99470] to-[#8C6A48] hover:from-[#A8835E] hover:to-[#765636] text-white text-sm font-semibold tracking-wider uppercase shadow-xl hover:shadow-[#B99470]/30 hover:scale-105 transition-all duration-300 border border-[#D4B999]/30"
          >
            <UtensilsCrossed size={18} />
            <span>Explore Menu & Prices</span>
          </a>

          <a
            href="#digital-menu"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1F1A18]/85 hover:bg-[#2C2725] text-[#FAF8F5] text-sm font-semibold tracking-wider uppercase border border-[#B99470]/40 hover:border-[#B99470] hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm"
          >
            <BookOpen size={18} className="text-[#B99470]" />
            <span>View Digital Menu Book</span>
          </a>

          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1E7246] hover:bg-[#165a36] text-white text-sm font-semibold tracking-wider uppercase shadow-xl hover:scale-105 transition-all duration-300 border border-green-400/30"
          >
            <Sparkles size={18} />
            <span>Order / Book Table</span>
          </button>
        </div>

        {/* Slide Dots */}
        <div className="flex items-center gap-2.5 mt-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                i === currentSlide ? 'w-8 bg-[#B99470]' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-black/40 hover:bg-[#B99470] text-white/80 hover:text-white border border-[#B99470]/30 transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-black/40 hover:bg-[#B99470] text-white/80 hover:text-white border border-[#B99470]/30 transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Subtle Bottom Fade Border */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FDFBF7] to-transparent z-20 pointer-events-none" />
    </section>
  );
}

