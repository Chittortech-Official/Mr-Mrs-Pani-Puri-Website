'use client';

import React from 'react';
import { Star, Sparkles, Quote, CheckCircle2 } from 'lucide-react';
import { reviewsData, restaurantInfo } from '../data/restaurantData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#141110] text-[#FAF8F5] relative overflow-hidden bg-jali-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-element">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#B99470]/20 text-[#D4B999] text-xs font-semibold uppercase tracking-widest mb-3 border border-[#B99470]/30">
            <Sparkles size={14} className="text-[#B99470]" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Loved Across Chittorgarh & Begun
          </h2>
          <div className="w-24 h-0.5 bg-[#B99470] mx-auto mb-6" />
          <div className="flex items-center justify-center gap-2 text-sm text-[#D4B999]">
            <div className="flex items-center gap-1 text-[#f59e0b]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-current" />
              ))}
            </div>
            <span className="font-bold text-white text-base">4.9 / 5.0</span>
            <span className="text-[#B99470]">•</span>
            <span>Based on 380+ Verified Reviews</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((review, index) => (
            <div
              key={review.name}
              className="reveal-element bg-[#1F1A18] rounded-3xl p-6 border border-[#B99470]/20 hover:border-[#B99470] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div>
                {/* Top Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-current" />
                    ))}
                  </div>
                  <Quote size={20} className="text-[#B99470]/40 group-hover:text-[#B99470] transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#E8DFD3]/90 leading-relaxed font-light mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-sm text-white group-hover:text-[#B99470] transition-colors">
                      {review.name}
                    </h4>
                    <span className="text-[10px] text-[#B99470] block">
                      Ordered: {review.dish}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-[#4ade80] bg-[#1E7246]/20 px-2 py-0.5 rounded-full">
                    <CheckCircle2 size={11} />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-[#1F1A18]/80 border border-[#B99470]/30 text-center max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-xs text-[#D4B999] uppercase tracking-wider font-semibold">Join Our Foodie Community</p>
            <p className="text-sm font-bold text-white">{restaurantInfo.instagram}</p>
          </div>
          <a
            href={restaurantInfo.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#B99470] to-[#8C6A48] hover:from-[#A8835E] hover:to-[#765636] text-white text-xs font-semibold tracking-wider uppercase transition-all"
          >
            Follow on Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
