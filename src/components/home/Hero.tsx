"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HERO_DATA } from "@/lib/heroData";
import { useBookModal } from "@/context/BookModalContext";

export function Hero() {
  const { eyebrow, headline, supportingCopy, locationTag, primaryCta, secondaryCta, media } = HERO_DATA;
  const { openBookModal } = useBookModal();

  const handlePrimaryCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openBookModal();
  };

  return (
    <section 
      aria-label="Hero Showcase" 
      className="relative w-full min-h-[calc(100vh-80px)] bg-[#0B0C0E] text-[#F4F1EA] flex flex-col justify-between overflow-hidden"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "calc(100vh - 80px)",
        backgroundColor: "#0B0C0E",
        color: "#F4F1EA",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* LAYER 0: FULL-BLEED BACKGROUND BILLBOARD PHOTOGRAPH */}
      <div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{ position: "absolute", inset: 0, zIndex: 0, width: "100%", height: "100%" }}
      >
        <Image
          src={media.src}
          alt={media.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-right opacity-90"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* LAYER 1: CINEMATIC DARK GRADIENT OVERLAY (DESKTOP / TABLET) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none hidden md:block"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          pointerEvents: "none",
          background: "linear-gradient(to right, #0B0C0E 0%, #0B0C0E 25%, rgba(11,12,14,0.78) 48%, rgba(11,12,14,0.18) 72%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* LAYER 1B: MOBILE GRADIENT VIGNETTE (< 768px) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none md:hidden"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          pointerEvents: "none",
          background: "linear-gradient(to bottom, #0B0C0E 0%, #0B0C0E 50%, rgba(11,12,14,0.75) 75%, rgba(11,12,14,0.3) 100%)",
        }}
        aria-hidden="true"
      />

      {/* LAYER 2: HERO CONTENT CONTAINER */}
      <div 
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 md:py-16 my-auto flex flex-col justify-center flex-grow"
        style={{
          position: "relative",
          zIndex: 20,
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          width: "100%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <div className="max-w-2xl text-left my-auto">
          
          {/* Eyebrow Category */}
          <div className="flex items-center gap-3 mb-2.5">
            <span 
              className="text-xs font-bold tracking-widest text-[#F05A24] uppercase font-mono"
              style={{ color: "#F05A24", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              {eyebrow}
            </span>
          </div>

          {/* Editorial Display Headline */}
          <h1 
            className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.08] mb-4 uppercase font-sans"
            style={{
              color: "#FFFFFF",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 5.5vw, 3.25rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              marginTop: "0.25rem",
              marginBottom: "1rem",
            }}
          >
            <span className="block" style={{ display: "block" }}>{headline.line1}</span>
            <span className="block text-white" style={{ display: "block", color: "#FFFFFF" }}>{headline.line2}</span>
            <span className="block text-white" style={{ display: "block", color: "#FFFFFF" }}>{headline.line3}</span>
          </h1>

          {/* Supporting Copy */}
          <p 
            className="text-sm sm:text-lg text-[#D1D5DB] max-w-xl mb-6 sm:mb-8 leading-relaxed font-normal"
            style={{
              color: "#D1D5DB",
              maxWidth: "500px",
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              fontWeight: 400,
              marginBottom: "1.5rem",
            }}
          >
            {supportingCopy}
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div 
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6 sm:mb-8"
            style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginBottom: "1.5rem" }}
          >
            <button
              type="button"
              onClick={handlePrimaryCtaClick}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#F05A24] hover:bg-[#D94A17] text-white font-bold text-xs sm:text-sm tracking-wider uppercase min-h-[44px] px-8 py-3.5 rounded-none transition-colors duration-200 shadow-md border-none cursor-pointer"
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
                minHeight: "44px",
                padding: "0.75rem 2rem",
                border: "none",
                cursor: "pointer",
                borderRadius: "0px",
              }}
            >
              {primaryCta.label}
            </button>

            <Link
              href={secondaryCta.href}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent hover:bg-[#14161B] text-[#F4F1EA] hover:text-white font-medium text-xs sm:text-sm tracking-wider uppercase min-h-[44px] px-8 py-3.5 border border-[#242832] transition-colors duration-200 no-underline"
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
                minHeight: "44px",
                padding: "0.75rem 2rem",
                border: "1px solid #242832",
                textDecoration: "none",
              }}
            >
              {secondaryCta.label}
            </Link>
          </div>

          {/* Location Context Tag */}
          <div>
            <span 
              className="text-xs font-semibold tracking-widest text-[#9CA3AF] uppercase font-mono"
              style={{ color: "#9CA3AF", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              {locationTag}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
