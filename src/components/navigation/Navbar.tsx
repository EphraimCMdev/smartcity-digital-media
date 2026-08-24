"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandWordmark } from "@/components/common/BrandWordmark";
import { useBookModal } from "@/context/BookModalContext";

const NAV_LINKS = [
  { label: "Our Screen", href: "#screen-preview" },
  { label: "Advertising", href: "#advertising" },
  { label: "How It Works", href: "/how-it-works" },
] as const;

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBookModal } = useBookModal();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleBookAdClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMobileMenu();
    openBookModal();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#242832]/60 bg-[#0B0C0E]/85 backdrop-blur-md">
      <style>{`
        .nav-desktop-only {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }
        .nav-cta-desktop-only {
          display: flex;
          align-items: center;
        }
        .nav-mobile-trigger-only {
          display: none;
        }
        @media (max-width: 767px) {
          .nav-desktop-only {
            display: none !important;
          }
          .nav-cta-desktop-only {
            display: none !important;
          }
          .nav-mobile-trigger-only {
            display: flex !important;
            align-items: center;
          }
        }
      `}</style>

      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* Left: Official Logo & Brand Wordmark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <BrandWordmark />
        </div>

        {/* Center: Desktop Navigation Links (Restored exact 2.5rem gap) */}
        <nav 
          aria-label="Main Navigation" 
          className="nav-desktop-only"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#9CA3AF] hover:text-white transition-colors duration-200 tracking-wide no-underline whitespace-nowrap"
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#9CA3AF",
                textDecoration: "none",
                letterSpacing: "0.025em",
                whiteSpace: "nowrap",
                display: "inline-block",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Desktop Primary CTA */}
        <div className="nav-cta-desktop-only">
          <button
            type="button"
            onClick={handleBookAdClick}
            className="inline-flex items-center justify-center bg-[#F05A24] hover:bg-[#D94A17] text-white font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-none transition-colors duration-200 shadow-sm border-none cursor-pointer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F05A24",
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "0.625rem 1.375rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            BOOK YOUR AD
          </button>
        </div>

        {/* Mobile Menu Trigger Button (Appears ONLY < 768px) */}
        <div className="nav-mobile-trigger-only">
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex items-center justify-center text-[#9CA3AF] hover:text-white hover:bg-[#14161B] border border-[#242832] transition-colors"
            style={{
              width: "44px",
              height: "44px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9CA3AF",
              backgroundColor: "transparent",
              border: "1px solid #242832",
              cursor: "pointer",
            }}
          >
            <svg
              className="w-6 h-6"
              style={{ width: "24px", height: "24px" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Panel */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile Navigation"
          className="border-b border-[#242832] bg-[#14161B] px-4 pt-3 pb-6 space-y-3"
          style={{
            backgroundColor: "#14161B",
            borderBottom: "1px solid #242832",
            padding: "1rem 1rem 1.5rem 1rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="block text-base font-medium text-[#9CA3AF] hover:text-white py-3 transition-colors border-b border-[#1E222A] no-underline"
              style={{
                display: "block",
                color: "#9CA3AF",
                padding: "0.75rem 0",
                textDecoration: "none",
                borderBottom: "1px solid #1E222A",
              }}
            >
              {link.label}
            </Link>
          ))}

          <div style={{ paddingTop: "0.75rem" }}>
            <button
              type="button"
              onClick={handleBookAdClick}
              className="w-full inline-flex items-center justify-center bg-[#F05A24] hover:bg-[#D94A17] text-white font-bold text-xs tracking-wider uppercase min-h-[44px] py-3 transition-colors text-center border-none cursor-pointer"
              style={{
                width: "100%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F05A24",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                minHeight: "44px",
                padding: "0.75rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              BOOK YOUR AD
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
