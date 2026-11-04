'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Clock, Navigation, Check, Sparkles, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(restaurantInfo.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mapDirectionUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Fawwara Chowk Pratap Nagar Begun Chittorgarh Rajasthan 312001"
  )}`;

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden bg-jali-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-element">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#B99470]/15 text-[#8C6A48] text-xs font-semibold uppercase tracking-widest mb-3">
            <MapPin size={14} className="text-[#B99470]" />
            <span>Visit Us In Person</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141110] mb-4">
            Find Us at Fawwara Chowk, Begun
          </h2>
          <div className="w-24 h-0.5 bg-[#B99470] mx-auto mb-6" />
          <p className="text-[#766C66] text-sm sm:text-base leading-relaxed">
            Conveniently situated in the bustling heart of Begun, Chittorgarh. Stop by for morning breakfast kachoris or a relaxing evening chaat & coffee session with family.
          </p>
        </div>

        {/* 2 Column Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Location & Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between reveal-element bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD3] shadow-xl">
            <div className="space-y-6">
              
              {/* Full Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#B99470]/15 text-[#8C6A48] shrink-0 mt-1">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#141110] uppercase tracking-wider mb-1">
                    Complete Address
                  </h4>
                  <p className="text-sm text-[#2C2725] font-medium leading-relaxed">
                    {restaurantInfo.address}
                  </p>
                  <p className="text-xs text-[#766C66] mt-1">
                    Landmark: {restaurantInfo.landmark}
                  </p>
                  <button
                    onClick={copyAddress}
                    className="inline-flex items-center gap-1.5 text-xs text-[#8C6A48] hover:text-[#141110] font-medium mt-2 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-green-600" />
                        <span className="text-green-600">Address Copied to Clipboard!</span>
                      </>
                    ) : (
                      <span>📋 Copy Full Address</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Service Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#E8DFD3]">
                <div className="p-3 rounded-2xl bg-[#883563]/15 text-[#883563] shrink-0 mt-1">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#141110] uppercase tracking-wider mb-1">
                    Service Hours
                  </h4>
                  <div className="space-y-1 text-xs sm:text-sm text-[#2C2725]">
                    <div className="flex justify-between gap-4">
                      <span className="text-[#766C66]">Morning Hours:</span>
                      <span className="font-semibold">6:00 AM – 12:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-[#766C66]">Evening Hours:</span>
                      <span className="font-semibold">4:00 PM – 11:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4 pt-1">
                      <span className="text-[#766C66]">Days:</span>
                      <span className="font-semibold text-[#1E7246]">Open All 7 Days</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Lines */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#E8DFD3]">
                <div className="p-3 rounded-2xl bg-[#1E7246]/15 text-[#1E7246] shrink-0 mt-1">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#141110] uppercase tracking-wider mb-1">
                    Reservations & Inquiries
                  </h4>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <p className="font-bold text-[#141110]">{restaurantInfo.primaryPhone}</p>
                    <p className="text-[#766C66]">
                      {restaurantInfo.secondaryPhone} ({restaurantInfo.contactPerson})
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Direction & WhatsApp Buttons */}
            <div className="pt-6 border-t border-[#E8DFD3] flex flex-col sm:flex-row gap-3">
              <a
                href={mapDirectionUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#141110] hover:bg-[#2C2725] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors"
              >
                <Navigation size={16} />
                <span>Get Directions</span>
              </a>

              <a
                href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
                  "Hello Mr Mrs Panipuriwala! I'm planning to visit and would like to confirm your open status."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors"
              >
                <MessageCircle size={16} />
                <span>Chat Location</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps & Authentic Visiting Proof */}
          <div className="lg:col-span-7 flex flex-col gap-6 reveal-element reveal-delay-2">
            
            {/* Embedded Google Map */}
            <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#E8DFD3] shadow-xl relative bg-[#E8DFD3]">
              <iframe
                title="Mr Mrs Panipuriwala Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14516.32684824707!2d75.0210214!3d24.9863484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968b556f890cf25%3A0xb30491a67ad84b72!2sBegun%2C%20Rajasthan%20312023!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-110"
              />
              
              {/* Map floating pin card */}
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-[#B99470]/30 max-w-xs hidden sm:block">
                <p className="text-[11px] font-bold text-[#141110]">Mr Mrs Panipuriwala & Chathouse</p>
                <p className="text-[10px] text-[#766C66]">Fawwara Chowk, Begun, Chittorgarh</p>
              </div>
            </div>

            {/* Authentic Card Snapshot from User upload */}
            <div className="bg-white rounded-2xl p-4 border border-[#E8DFD3] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#B99470]/30 shrink-0">
                  <Image src="/114057.jpg" alt="WhatsApp Business Verification" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#141110]">Verified WhatsApp Business Account</p>
                  <p className="text-[11px] text-[#766C66]">Restaurant • Hotel • Event Planner Registered</p>
                </div>
              </div>
              <a
                href={mapDirectionUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#B99470]/15 hover:bg-[#B99470] text-[#8C6A48] hover:text-white text-xs font-semibold transition-colors shrink-0"
              >
                Open Maps
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

