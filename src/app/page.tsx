"use client";

import React from "react";
import { BookModalProvider } from "@/context/BookModalContext";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/home/Hero";
import { KeyStatsStrip } from "@/components/home/KeyStatsStrip";
import { OurScreen } from "@/components/home/OurScreen";
import { AdvertisingSection } from "@/components/home/AdvertisingSection";
import { BookAdModal } from "@/components/booking/BookAdModal";

export default function Home() {
  return (
    <BookModalProvider>
      <div className="min-h-screen bg-[#0B0C0E] text-[#F4F1EA] relative">
        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Content Area */}
        <main id="main-content">
          {/* Component #1: Refined Hero Section */}
          <Hero />

          {/* Component #1B: Key Statistics Strip */}
          <KeyStatsStrip />

          {/* Component #2: Our Screen Section */}
          <OurScreen />

          {/* Component #3: Advertising Section */}
          <AdvertisingSection />
        </main>

        {/* Book Your Ad Centered Modal Overlay */}
        <BookAdModal />
      </div>
    </BookModalProvider>
  );
}
