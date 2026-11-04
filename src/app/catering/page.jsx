'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Gift, Phone, MessageCircle, CheckCircle2, ChevronRight, Sparkles, Users, Calendar, MapPin } from 'lucide-react';
import HaldiramHeader from '../../components/HaldiramHeader';
import HaldiramFooter from '../../components/HaldiramFooter';
import FloatingWidgets from '../../components/FloatingWidgets';
import { cateringPackages, restaurantInfo } from '../../data/restaurantData';

export default function CateringPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Wedding Live Counter');
  const [guestCount, setGuestCount] = useState('100 - 250 Guests');
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    let msg = `*Namaste Rajendra ji (Mr Mrs Panipuriwala)!*\n`;
    msg += `I would like to inquire about event catering:\n\n`;
    msg += `*Name:* ${name}\n`;
    msg += `*Phone:* ${phone}\n`;
    msg += `*Event Type:* ${eventType}\n`;
    msg += `*Estimated Guests:* ${guestCount}\n`;
    msg += `*Event Date:* ${eventDate || 'To be decided'}\n`;
    if (notes) msg += `*Special Preferences:* ${notes}\n`;
    msg += `\nSent via Official Catering Portal.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#1F2937] flex flex-col font-sans">
      <HaldiramHeader />

      {/* Breadcrumb */}
      <div className="bg-[#FAF7F2] border-b border-[#E5DFD7] py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-[#6B7280]">
          <Link href="/" className="hover:text-[#C4161C]">Home</Link>
          <ChevronRight size={13} />
          <span className="font-semibold text-[#1F2937]">Bulk Orders & Event Catering</span>
        </div>
      </div>

      {/* Banner */}
      <section className="bg-gradient-to-r from-[#C4161C] via-[#9B1117] to-[#730B10] text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-[#FEF08A] text-xs font-bold uppercase tracking-wider mb-3">
            Registered Event Planner & Catering
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Live Chaat Stalls & Outdoor Event Catering
          </h1>
          <div className="w-20 h-1 bg-[#FCD34D] mx-auto mb-5" />
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Planning a grand wedding, ring ceremony, birthday party, or corporate event in Begun, Chittorgarh, or nearby areas? Delight your guests with live, hygienic chaat stalls operated by uniformed chefs.
          </p>
        </div>
      </section>

      {/* 3 Packages Cards */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937]">
              Our Signature Catering Packages
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
              Customized menus prepared with 100% pure vegetarian ingredients & mineral RO water
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cateringPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ECE7DE] shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#C4161C]/10 text-[#C4161C] text-xs font-bold uppercase tracking-wider">
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-semibold text-[#9CA3AF]">
                      {pkg.guests}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1F2937] mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#D97706] mb-5">
                    {pkg.tagline}
                  </p>

                  <ul className="space-y-3 text-xs text-[#4B5563] pb-6 border-b border-[#ECE7DE]">
                    {pkg.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-[#15803D] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <a
                    href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
                      `Hello Rajendra ji! I would like to inquire about package: *${pkg.title}*.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    <MessageCircle size={15} />
                    <span>Inquire for This Package</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Inquiry Form & Direct Call Box */}
      <section className="py-16 bg-white border-t border-[#ECE7DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#ECE7DE] shadow-xl">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C4161C] block mb-1">
                Fast Response
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937]">
                Request a Custom Catering Quote
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                Fill the details below to chat instantly with Founder Rajendra Tripathi on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4B5563] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Sanjay Rathore"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5DFD7] focus:border-[#C4161C] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4B5563] mb-1">WhatsApp Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5DFD7] focus:border-[#C4161C] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4B5563] mb-1">Event Type</label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5DFD7] focus:border-[#C4161C] outline-none cursor-pointer"
                  >
                    <option value="Wedding Live Stalls">Wedding Live Stalls</option>
                    <option value="Ring Ceremony / Sangeet">Ring Ceremony / Sangeet</option>
                    <option value="Birthday / Kitty Party">Birthday / Kitty Party</option>
                    <option value="Corporate Bulk Breakfast Boxes">Corporate Breakfast Boxes</option>
                    <option value="Anniversary Party">Anniversary Party</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4B5563] mb-1">Estimated Guests</label>
                  <input
                    type="text"
                    placeholder="150 - 300 Guests"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5DFD7] focus:border-[#C4161C] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4B5563] mb-1">Preferred Date</label>
                  <input
                    type="text"
                    placeholder="e.g. 15 December 2026"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5DFD7] focus:border-[#C4161C] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4B5563] mb-1">
                  Specific Dish Preferences or Venue Location
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you would like (e.g. 5 flavored gol gappe waters, cheese burst pizzas, biscoff frappes, Jain options)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5DFD7] focus:border-[#C4161C] outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>Send Catering Inquiry via WhatsApp</span>
                </button>
              </div>

              <div className="pt-2 text-center text-xs text-[#6B7280]">
                Or call founder Rajendra Tripathi directly at{' '}
                <a href={`tel:${restaurantInfo.secondaryPhone.replace(/\s+/g, '')}`} className="font-bold text-[#C4161C]">
                  {restaurantInfo.secondaryPhone}
                </a>{' '}
                / {' '}
                <a href={`tel:${restaurantInfo.primaryPhone.replace(/\s+/g, '')}`} className="font-bold text-[#C4161C]">
                  {restaurantInfo.primaryPhone}
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <FloatingWidgets />
      <HaldiramFooter />
    </div>
  );
}

