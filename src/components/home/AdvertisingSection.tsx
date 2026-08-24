"use client";

import React from "react";
import Link from "next/link";
import { ADVERTISING_DATA } from "@/lib/advertisingData";
import { useBookModal } from "@/context/BookModalContext";

export function AdvertisingSection() {
  const { intro, benefits, process, cta } = ADVERTISING_DATA;
  const { openBookModal } = useBookModal();

  const handleBookAdClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openBookModal();
  };

  return (
    <section 
      id="advertising"
      aria-label="Advertising Opportunity Overview"
      className="w-full bg-[#14161B] text-[#F4F1EA] py-20 lg:py-28 border-t border-[#242832]/80"
      style={{
        backgroundColor: "#14161B",
        color: "#F4F1EA",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderTop: "1px solid rgba(36, 40, 50, 0.8)",
        width: "100%",
      }}
    >
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        {/* 1. SECTION INTRO */}
        <div className="max-w-3xl text-left mb-14 lg:mb-16">
          <span 
            className="text-xs font-bold tracking-widest text-[#F05A24] uppercase font-mono mb-3 block"
            style={{ color: "#F05A24", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            {intro.eyebrow}
          </span>
          
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase mb-4 font-sans leading-tight"
            style={{
              color: "#FFFFFF",
              fontWeight: 800,
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            {intro.heading}
          </h2>

          <p 
            className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl leading-relaxed font-normal"
            style={{
              color: "#9CA3AF",
              maxWidth: "640px",
              fontSize: "1.0625rem",
              lineHeight: 1.6,
            }}
          >
            {intro.supportingCopy}
          </p>
        </div>

        {/* 2. KEY BENEFITS (4 CLEAN CONTENT CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="p-6 sm:p-8 bg-[#0B0C0E] border border-[#242832] flex flex-col text-left"
              style={{
                backgroundColor: "#0B0C0E",
                border: "1px solid #242832",
                padding: "1.75rem",
              }}
            >
              <span 
                className="text-2xl font-extrabold text-[#F05A24] font-mono mb-2 block"
                style={{ color: "#F05A24", fontWeight: 800, fontFamily: "monospace", fontSize: "1.5rem" }}
              >
                {benefit.number}
              </span>

              <h3 
                className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase font-sans mb-2"
                style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1.125rem", textTransform: "uppercase" }}
              >
                {benefit.title}
              </h3>

              <p 
                className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed font-normal"
                style={{ color: "#9CA3AF", fontSize: "0.9375rem", lineHeight: 1.6 }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* 3. HOW IT WORKS (3-STEP PROCESS) */}
        <div className="pt-4 pb-16 border-t border-[#242832]/60" style={{ borderTop: "1px solid rgba(36, 40, 50, 0.6)", paddingTop: "3rem" }}>
          <h3 
            className="text-xs font-bold tracking-widest text-[#F05A24] uppercase font-mono mb-10"
            style={{ color: "#F05A24", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            {process.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {process.steps.map((step) => (
              <div 
                key={step.stepNumber}
                className="p-6 sm:p-8 bg-[#0B0C0E]/50 border border-[#242832] flex flex-col text-left"
                style={{
                  backgroundColor: "rgba(11, 12, 14, 0.5)",
                  border: "1px solid #242832",
                  padding: "1.75rem",
                }}
              >
                <span 
                  className="text-3xl lg:text-4xl font-extrabold text-[#F05A24] font-mono mb-3 block"
                  style={{ color: "#F05A24", fontWeight: 800, fontFamily: "monospace", fontSize: "2.25rem" }}
                >
                  {step.stepNumber}
                </span>

                <h4 
                  className="text-base sm:text-lg font-bold tracking-wide text-white uppercase font-sans mb-2"
                  style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", textTransform: "uppercase" }}
                >
                  {step.title}
                </h4>

                <p 
                  className="text-sm text-[#9CA3AF] leading-relaxed"
                  style={{ color: "#9CA3AF", fontSize: "0.875rem", lineHeight: 1.6 }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. SECTION CTA BANNER */}
        <div 
          className="bg-[#0B0C0E] border border-[#242832] p-8 sm:p-12 lg:p-14 text-center mt-6 flex flex-col items-center justify-center"
          style={{
            backgroundColor: "#0B0C0E",
            border: "1px solid #242832",
            padding: "3rem 1.5rem",
            textAlign: "center",
          }}
        >
          <h3 
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white uppercase mb-3 font-sans"
            style={{
              color: "#FFFFFF",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
              textTransform: "uppercase",
            }}
          >
            {cta.heading}
          </h3>

          <p 
            className="text-base text-[#9CA3AF] max-w-lg mb-8 leading-relaxed font-normal"
            style={{ color: "#9CA3AF", fontSize: "1rem", maxWidth: "480px", marginBottom: "2rem" }}
          >
            {cta.supportingCopy}
          </p>

          <div 
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}
          >
            <button
              type="button"
              onClick={handleBookAdClick}
              className="inline-flex items-center justify-center bg-[#F05A24] hover:bg-[#D94A17] text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-8 py-4 rounded-none transition-colors duration-200 shadow-md border-none cursor-pointer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F05A24",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.875rem 2rem",
                border: "none",
                cursor: "pointer",
                borderRadius: "0px",
              }}
            >
              {cta.primaryCta.label}
            </button>

            <Link
              href={cta.secondaryCta.href}
              className="inline-flex items-center justify-center bg-transparent hover:bg-[#14161B] text-[#F4F1EA] hover:text-white font-medium text-xs sm:text-sm tracking-wider uppercase px-8 py-4 border border-[#242832] transition-colors duration-200 no-underline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(20, 22, 27, 0.6)",
                color: "#F4F1EA",
                fontWeight: 500,
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.875rem 2rem",
                border: "1px solid #242832",
                textDecoration: "none",
              }}
            >
              {cta.secondaryCta.label}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
