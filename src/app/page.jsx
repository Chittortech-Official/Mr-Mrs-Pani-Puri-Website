'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import QuickInfoBar from '../components/QuickInfoBar';
import AboutSection from '../components/AboutSection';
import SpecialtiesSection from '../components/SpecialtiesSection';
import MenuSection from '../components/MenuSection';
import DigitalMenuViewer from '../components/DigitalMenuViewer';
import CateringSection from '../components/CateringSection';
import ReviewsSection from '../components/ReviewsSection';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';
import OrderModal from '../components/OrderModal';
import RoyalCursor from '../components/RoyalCursor';
import ScrollParallax from '../components/ScrollParallax';

export default function Home() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenOrder = () => {
    setSelectedItem(null);
    setOrderModalOpen(true);
  };

  const handleSelectItemForOrder = (item) => {
    setSelectedItem(item);
    setOrderModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] selection:bg-[#B99470] selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Luxury Golden Magnetic Cursor for Desktop */}
      <RoyalCursor />

      {/* Cinematic Scroll Parallax & Reveal Engine */}
      <ScrollParallax />

      {/* Fixed Royal Heritage Navbar */}
      <Navbar onOpenOrderModal={handleOpenOrder} />

      {/* Fullscreen Hero Slider with Mascot Crest */}
      <HeroSlider onOpenOrderModal={handleOpenOrder} />

      {/* Heritage Floating Quick Info Bar */}
      <QuickInfoBar onOpenOrderModal={handleOpenOrder} />

      {/* Story & Philosophy: Begun's Ode to Authentic Chaats */}
      <AboutSection onOpenOrderModal={handleOpenOrder} />

      {/* Signature Dishes Spotlight */}
      <SpecialtiesSection onSelectItemForOrder={handleSelectItemForOrder} />

      {/* Interactive Complete 70+ Item Menu with Search & Category Tabs */}
      <MenuSection onSelectItemForOrder={handleSelectItemForOrder} />

      {/* High-Resolution Digital Menu Book Browser */}
      <DigitalMenuViewer />

      {/* Live Event Catering & Live Chaat Stations */}
      <CateringSection onOpenOrderModal={handleOpenOrder} />

      {/* Guest Reviews & Social Proof */}
      <ReviewsSection />

      {/* Interactive Location, Google Map & Timings */}
      <LocationSection />

      {/* Grand Heritage Footer */}
      <Footer />

      {/* Floating WhatsApp & Call Buttons */}
      <FloatingWidgets />

      {/* Interactive Reservation & WhatsApp Ordering Dialog */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        preselectedItem={selectedItem}
      />
    </main>
  );
}

