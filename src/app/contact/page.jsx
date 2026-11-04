'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Clock, Navigation, Check, MessageCircle, ChevronRight, ShieldCheck } from 'lucide-react';
import HaldiramHeader from '../../components/HaldiramHeader';
import HaldiramFooter from '../../components/HaldiramFooter';
import FloatingWidgets from '../../components/FloatingWidgets';
import { restaurantInfo } from '../../data/restaurantData';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(restaurantInfo.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mapDirectionUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Fawwara Chowk Pratap Nagar Chittorgarh Rajasthan 312001"
  )}`;

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#1F2937] flex flex-col font-sans">
      <HaldiramHeader />

      {/* Breadcrumb */}
      <div className="bg-[#FAF7F2] border-b border-[#E5DFD7] py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-[#6B7280]">
          <Link href="/" className="hover:text-[#C4161C]">Home</Link>
          <ChevronRight size={13} />
          <span className="font-semibold text-[#1F2937]">Store Location & Contact</span>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-[#FAF7F2] py-14 border-b border-[#ECE7DE]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#C4161C]/10 text-[#C4161C] text-xs font-bold uppercase tracking-wider mb-2">
            Visit Our Store
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2937] mb-3">
            Find Us at Fawwara Chowk, Chittorgarh
          </h1>
          <div className="w-16 h-1 bg-[#C4161C] mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-[#6B7280] max-w-lg mx-auto">
            Located in the center of Chittorgarh. Come enjoy hot kachoris in the morning or refreshing chaat and frappes in the evening.
          </p>
        </div>
      </section>

      {/* 2 Column Details & Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#ECE7DE] shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Full Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-2xl bg-[#C4161C]/10 text-[#C4161C] shrink-0 mt-1">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#9CA3AF] mb-1">
                    Store Address
                  </h4>
                  <p className="text-sm font-semibold text-[#1F2937] leading-relaxed">
                    {restaurantInfo.address}
                  </p>
                  <p className="text-xs text-[#6B7280] mt-1">
                    Landmark: {restaurantInfo.landmark}
                  </p>
                  <button
                    onClick={copyAddress}
                    className="inline-flex items-center gap-1.5 text-xs text-[#C4161C] font-semibold mt-2 hover:underline"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-green-600" />
                        <span className="text-green-600">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <span>📋 Copy Full Address</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Service Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#F3EDE2]">
                <div className="p-3 rounded-2xl bg-[#D97706]/10 text-[#D97706] shrink-0 mt-1">
                  <Clock size={22} />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#9CA3AF] mb-1">
                    Store Timings
                  </h4>
                  <div className="space-y-1.5 text-xs sm:text-sm text-[#1F2937]">
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Morning Breakfast:</span>
                      <span className="font-bold">6:00 AM – 12:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Evening Chaat & Café:</span>
                      <span className="font-bold">4:00 PM – 11:00 PM</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-[#6B7280]">Operational Days:</span>
                      <span className="font-bold text-[#15803D]">Open All 7 Days</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Lines */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#F3EDE2]">
                <div className="p-3 rounded-2xl bg-[#15803D]/10 text-[#15803D] shrink-0 mt-1">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#9CA3AF] mb-1">
                    Phone Inquiries & Takeaway
                  </h4>
                  <p className="font-bold text-sm sm:text-base text-[#1F2937]">
                    {restaurantInfo.primaryPhone}
                  </p>
                  <p className="text-xs text-[#6B7280]">
                    Founder: {restaurantInfo.contactPerson} ({restaurantInfo.secondaryPhone})
                  </p>
                </div>
              </div>

            </div>

            {/* Buttons */}
            <div className="pt-8 border-t border-[#F3EDE2] flex flex-col sm:flex-row gap-3">
              <a
                href={mapDirectionUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C4161C] hover:bg-[#9B1117] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <Navigation size={16} />
                <span>Get Directions</span>
              </a>

              <a
                href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
                  "Hello Mr Mrs Panipuriwala! I would like to inquire about your store timings."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Verification Card */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#ECE7DE] shadow-xl relative bg-[#E8DFD3]">
              <iframe
                title="Mr Mrs Panipuriwala Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14516.32684824707!2d75.0210214!3d24.9863484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968b556f890cf25%3A0xb30491a67ad84b72!2sBegun%2C%20Rajasthan%20312023!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-[#E5DFD7] max-w-xs hidden sm:block">
                <p className="text-xs font-bold text-[#1F2937]">Mr Mrs Panipuriwala & Chathouse</p>
                <p className="text-[10px] text-[#6B7280]">Fawwara Chowk, Chittorgarh</p>
              </div>
            </div>

            {/* Store Verification Card */}
            <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#ECE7DE] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C4161C] shrink-0 bg-white shadow-sm">
                  <Image src="/logo.jpg" alt="Mr Mrs Official Mascot" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1F2937]">Mr Mrs Panipuriwala & Chathouse</p>
                  <p className="text-[11px] text-[#15803D] font-semibold">✓ Verified Registered Food Outlet & Event Planner</p>
                </div>
              </div>
              <a
                href={mapDirectionUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#C4161C] text-white text-xs font-bold hover:bg-[#9B1117] transition-colors shrink-0"
              >
                Open Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>

      <FloatingWidgets />
      <HaldiramFooter />
    </div>
  );
}

