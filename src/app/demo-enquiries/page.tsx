"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandWordmark } from "@/components/common/BrandWordmark";
import {
  DemoEnquiry,
  getDemoEnquiries,
  seedSampleEnquiries,
  clearDemoEnquiries,
} from "@/lib/demoStorage";

export default function DemoEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<DemoEnquiry[]>([]);
  const [isClient, setIsClient] = useState(false);

  const refreshData = () => {
    setEnquiries(getDemoEnquiries());
  };

  useEffect(() => {
    setIsClient(true);
    refreshData();
  }, []);

  const handleSeedSamples = () => {
    seedSampleEnquiries();
    refreshData();
  };

  const handleClearAll = () => {
    if (window.confirm("Clear all demo enquiries from browser localStorage?")) {
      clearDemoEnquiries();
      refreshData();
    }
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F4F1EA] flex flex-col font-sans">
      {/* Top Demo Header */}
      <header className="w-full border-b border-[#242832] bg-[#14161B] py-4 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <BrandWordmark />
          <span className="hidden sm:inline-block h-6 w-px bg-[#242832]" />
          <span className="text-xs font-bold tracking-widest text-[#F05A24] uppercase font-mono bg-[#F05A24]/10 border border-[#F05A24]/30 px-2.5 py-1">
            Demo Enquiries Panel
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#1E222A] hover:bg-[#282D38] text-white font-medium text-xs tracking-wider uppercase px-4 py-2 border border-[#242832] transition-colors no-underline min-h-[38px]"
          >
            ← Back to Main Website
          </Link>
        </div>
      </header>

      {/* Main Body Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 flex-grow">
        {/* Page Title & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#242832]">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#9CA3AF] uppercase font-mono block mb-1">
              Frontend Prototype Dashboard
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight font-sans">
              Customer Ad Enquiries ({enquiries.length})
            </h1>
            <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1 max-w-xl">
              This page displays enquiries stored locally in your browser&apos;s localStorage for Demonstration V1.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleSeedSamples}
              className="inline-flex items-center justify-center bg-[#14161B] hover:bg-[#1E222A] text-[#F05A24] font-bold text-xs tracking-wider uppercase px-4 py-2.5 border border-[#F05A24]/50 transition-colors cursor-pointer"
            >
              + Load Sample Data
            </button>

            {enquiries.length > 0 && (
              <button
                type="button"
                onClick={handleClearAll}
                className="inline-flex items-center justify-center bg-[#14161B] hover:bg-red-950/40 text-red-400 font-medium text-xs tracking-wider uppercase px-4 py-2.5 border border-red-900/40 transition-colors cursor-pointer"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Enquiries Grid / List */}
        {enquiries.length === 0 ? (
          <div className="bg-[#14161B] border border-[#242832] p-12 text-center my-8 max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#1E222A] border border-[#242832] flex items-center justify-center mx-auto mb-4 text-[#9CA3AF]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white uppercase mb-2">No enquiries yet.</h3>
            <p className="text-sm text-[#9CA3AF] mb-6 max-w-md mx-auto">
              Submit a new enquiry via the main website modal or click the button below to load sample demo data.
            </p>
            <button
              type="button"
              onClick={handleSeedSamples}
              className="inline-flex items-center justify-center bg-[#F05A24] hover:bg-[#D94A17] text-white font-bold text-xs tracking-wider uppercase px-6 py-3 transition-colors cursor-pointer border-none"
            >
              Load Sample Demo Enquiries
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {enquiries.map((item) => (
              <div
                key={item.id}
                className="bg-[#14161B] border border-[#242832] p-5 sm:p-7 text-left relative shadow-lg"
              >
                {/* Card Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#242832]">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-extrabold text-[#F05A24] font-mono tracking-wider">
                      {item.referenceCode}
                    </span>
                    <span className="text-xs font-bold tracking-widest uppercase font-mono px-2.5 py-0.5 bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                      {item.status}
                    </span>
                    {item.isSample && (
                      <span className="text-[10px] font-mono uppercase bg-[#1E222A] text-[#9CA3AF] border border-[#242832] px-2 py-0.5">
                        Sample Data
                      </span>
                    )}
                  </div>

                  <span className="text-xs text-[#9CA3AF] font-mono">
                    Received: {item.createdAt}
                  </span>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  {/* Col 1: Contact Details */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold tracking-widest text-[#9CA3AF] uppercase font-mono block">
                      Business & Contact
                    </span>
                    <div className="text-base font-bold text-white">
                      {item.businessName}
                    </div>
                    <div className="text-sm text-[#D1D5DB]">
                      Contact: <span className="text-white font-medium">{item.contactPerson}</span>
                    </div>
                    <div className="text-xs text-[#9CA3AF]">
                      Category: {item.businessType}
                    </div>
                  </div>

                  {/* Col 2: Communication */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold tracking-widest text-[#9CA3AF] uppercase font-mono block">
                      Reach Out
                    </span>
                    <div className="text-sm text-[#F4F1EA] font-mono">
                      📞 {item.phone}
                    </div>
                    <div className="text-sm text-[#F4F1EA] font-mono truncate">
                      ✉️ {item.email}
                    </div>
                  </div>

                  {/* Col 3: Campaign Specs */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold tracking-widest text-[#9CA3AF] uppercase font-mono block">
                      Campaign Details
                    </span>
                    <div className="text-xs text-[#D1D5DB]">
                      Duration: <span className="text-white font-bold">{item.campaignDuration}</span>
                    </div>
                    <div className="text-xs text-[#D1D5DB]">
                      Start Date: <span className="text-white font-bold">{item.startDate}</span>
                    </div>
                  </div>
                </div>

                {/* Message Box */}
                {item.message && (
                  <div className="mt-4 pt-4 border-t border-[#1E222A] bg-[#0B0C0E]/60 p-3.5 border-l-2 border-l-[#F05A24]">
                    <span className="text-[10px] font-bold tracking-widest text-[#9CA3AF] uppercase font-mono block mb-1">
                      Requirements / Message:
                    </span>
                    <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed italic">
                      &ldquo;{item.message}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#242832] bg-[#0B0C0E] py-4 text-center text-xs text-[#9CA3AF] font-mono">
        Smart City Digital Media — Demo V1 Enquiries View (Frontend Prototype)
      </footer>
    </div>
  );
}
