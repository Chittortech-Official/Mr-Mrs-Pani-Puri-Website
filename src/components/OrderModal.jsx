'use client';

import React, { useState, useEffect } from 'react';
import { X, Sparkles, MessageCircle, Phone, Calendar, Clock, Users, UtensilsCrossed, CheckCircle2 } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function OrderModal({ isOpen, onClose, preselectedItem }) {
  const [requestType, setRequestType] = useState('order'); // 'order' | 'table' | 'catering'
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [orderDetails, setOrderDetails] = useState('');
  const [dietPreference, setDietPreference] = useState('Standard');

  useEffect(() => {
    if (preselectedItem) {
      setOrderDetails(`${preselectedItem.name} (₹${preselectedItem.price})`);
    }
  }, [preselectedItem]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    let message = `*Namaste Mr. & Mrs. Panipuriwala & Chathouse!*\n`;
    message += `I would like to submit a request:\n\n`;
    message += `*Request Type:* ${
      requestType === 'order'
        ? 'Food Order (Takeaway/Delivery)'
        : requestType === 'table'
        ? 'Table Reservation'
        : 'Event Catering Inquiry'
    }\n`;
    message += `*Customer Name:* ${name || 'Valued Guest'}\n`;
    message += `*Contact Phone:* ${phone || 'Not provided'}\n`;

    if (requestType === 'table' || requestType === 'catering') {
      message += `*Date/Time:* ${dateTime || 'As soon as possible'}\n`;
      message += `*Guests / Servings:* ${guests}\n`;
    }

    if (orderDetails) {
      message += `*Selected Items / Notes:* ${orderDetails}\n`;
    }

    message += `*Dietary Note:* 100% Pure Veg (${dietPreference})\n`;
    message += `\nSent via Mr. & Mrs. Panipuriwala Official Website.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl border border-[#B99470]/50 max-h-[92vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="p-5 sm:p-6 bg-[#141110] text-white flex items-center justify-between border-b border-[#B99470]/30 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#B99470]/20 border border-[#B99470] flex items-center justify-center text-[#B99470]">
              <UtensilsCrossed size={18} />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                Book / Place Your Order
              </h3>
              <p className="text-[11px] text-[#D4B999]">
                Mr. & Mrs. Panipuriwala & Chathouse
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#FAF8F5]/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 text-sm text-[#2C2725]">
          
          {/* Service Selector Tabs */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#766C66] font-semibold mb-2">
              Select What You Need
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setRequestType('order')}
                className={`py-2 px-2 rounded-xl text-xs font-semibold tracking-wide border transition-all ${
                  requestType === 'order'
                    ? 'bg-[#141110] text-[#FAF8F5] border-[#141110]'
                    : 'bg-white text-[#766C66] border-[#E8DFD3] hover:border-[#B99470]'
                }`}
              >
                Food Order
              </button>
              <button
                type="button"
                onClick={() => setRequestType('table')}
                className={`py-2 px-2 rounded-xl text-xs font-semibold tracking-wide border transition-all ${
                  requestType === 'table'
                    ? 'bg-[#141110] text-[#FAF8F5] border-[#141110]'
                    : 'bg-white text-[#766C66] border-[#E8DFD3] hover:border-[#B99470]'
                }`}
              >
                Table Booking
              </button>
              <button
                type="button"
                onClick={() => setRequestType('catering')}
                className={`py-2 px-2 rounded-xl text-xs font-semibold tracking-wide border transition-all ${
                  requestType === 'catering'
                    ? 'bg-[#141110] text-[#FAF8F5] border-[#141110]'
                    : 'bg-white text-[#766C66] border-[#E8DFD3] hover:border-[#B99470]'
                }`}
              >
                Event Catering
              </button>
            </div>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#766C66] mb-1">Your Name</label>
              <input
                type="text"
                required
                placeholder="Rajesh Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DFD3] focus:border-[#B99470] outline-none text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#766C66] mb-1">WhatsApp Phone Number</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DFD3] focus:border-[#B99470] outline-none text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Date & Guests if booking or catering */}
          {(requestType === 'table' || requestType === 'catering') && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#766C66] mb-1">Preferred Date & Time</label>
                <input
                  type="text"
                  placeholder="Tonight at 8:00 PM"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DFD3] focus:border-[#B99470] outline-none text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#766C66] mb-1">
                  {requestType === 'catering' ? 'Estimated Guests' : 'Number of Seats'}
                </label>
                <input
                  type="text"
                  placeholder={requestType === 'catering' ? '50 - 100 people' : '4 people'}
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DFD3] focus:border-[#B99470] outline-none text-xs sm:text-sm"
                />
              </div>
            </div>
          )}

          {/* Items / Details textarea */}
          <div>
            <label className="block text-xs font-medium text-[#766C66] mb-1">
              {requestType === 'order'
                ? 'Delicacies you want to order (e.g. 2 Masala Puri, 1 Basket Chaat, 2 Biscoff Frappes)'
                : 'Special Preferences or Questions'}
            </label>
            <textarea
              rows={3}
              placeholder="Enter your choices or special preferences (e.g., extra spicy, no onion-garlic Jain style, sweet curd)..."
              value={orderDetails}
              onChange={(e) => setOrderDetails(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DFD3] focus:border-[#B99470] outline-none text-xs sm:text-sm"
            />
          </div>

          {/* Dietary radio options */}
          <div>
            <label className="block text-xs font-medium text-[#766C66] mb-1.5">Dietary Preference</label>
            <div className="flex items-center gap-4 text-xs">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="diet"
                  value="Standard Pure Veg"
                  checked={dietPreference === 'Standard'}
                  onChange={() => setDietPreference('Standard')}
                />
                <span>Standard Pure Veg</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="diet"
                  value="Jain (No Onion/Garlic)"
                  checked={dietPreference === 'Jain'}
                  onChange={() => setDietPreference('Jain')}
                />
                <span>Jain Available</span>
              </label>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-all"
            >
              <MessageCircle size={18} />
              <span>Confirm & Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${restaurantInfo.primaryPhone.replace(/\s+/g, '')}`}
              className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#B99470]/50 hover:bg-[#FAF8F5] text-[#141110] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Phone size={14} className="text-[#B99470]" />
              <span>Or Call Restaurant: {restaurantInfo.primaryPhone}</span>
            </a>
          </div>

        </form>

      </div>
    </div>
  );
}

