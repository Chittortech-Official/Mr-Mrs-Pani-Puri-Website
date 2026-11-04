'use client';

import React from 'react';
import Link from 'next/link';
import { Star, ChevronRight, MessageCircle, Quote, CheckCircle2, Instagram } from 'lucide-react';
import HaldiramHeader from '../../components/HaldiramHeader';
import HaldiramFooter from '../../components/HaldiramFooter';
import FloatingWidgets from '../../components/FloatingWidgets';
import { reviewsData, restaurantInfo } from '../../data/restaurantData';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#1F2937] flex flex-col font-sans">
      <HaldiramHeader />

      {/* Breadcrumb */}
      <div className="bg-[#FAF7F2] border-b border-[#E5DFD7] py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-[#6B7280]">
          <Link href="/" className="hover:text-[#C4161C]">Home</Link>
          <ChevronRight size={13} />
          <span className="font-semibold text-[#1F2937]">Customer Reviews</span>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-[#FAF7F2] py-14 border-b border-[#ECE7DE]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-1 text-[#F59E0B] mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="fill-current" />
            ))}
          </div>
          <span className="text-2xl sm:text-3xl font-black text-[#1F2937] block font-serif">
            4.9 Out of 5.0 Rating
          </span>
          <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
            Based on 380+ Verified Customer Ratings in Begun & Chittorgarh
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#ECE7DE] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} size={15} className="fill-current" />
                    ))}
                  </div>
                  <Quote size={20} className="text-[#C4161C]/20" />
                </div>

                <p className="text-xs sm:text-sm text-[#4B5563] italic leading-relaxed mb-6 font-light">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3EDE2] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#1F2937]">{review.name}</h4>
                  <span className="text-[11px] text-[#C4161C] block font-medium">
                    Dish: {review.dish}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-[#15803D] bg-[#15803D]/10 px-2.5 py-0.5 rounded-full font-semibold">
                  <CheckCircle2 size={12} />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Foodie Community Box */}
        <div className="mt-14 p-8 rounded-3xl bg-[#FAF7F2] border border-[#ECE7DE] text-center max-w-xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-wider text-[#C4161C] block mb-1">
            Follow Our Food Journey
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2937] mb-2">
            Join 5,000+ Foodies on Instagram
          </h3>
          <p className="text-xs sm:text-sm text-[#6B7280] mb-5">
            Tag us in your pani puri stories & reels at <strong>{restaurantInfo.instagram}</strong>
          </p>
          <a
            href={restaurantInfo.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all"
          >
            <span>Follow {restaurantInfo.instagram}</span>
          </a>
        </div>
      </div>

      <FloatingWidgets />
      <HaldiramFooter />
    </div>
  );
}

