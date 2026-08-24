import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandWordmarkProps {
  className?: string;
}

export function BrandWordmark({ className = "" }: BrandWordmarkProps) {
  return (
    <Link 
      href="/" 
      className={`inline-flex items-center gap-3 no-underline group focus:outline-none ${className}`}
      style={{ textDecoration: "none", color: "#F4F1EA", display: "inline-flex", alignItems: "center", gap: "0.75rem" }}
      aria-label="Smart City Digital Media Home"
    >
      {/* Official Circular Logo Symbol */}
      <div 
        className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-[#EFECE6] p-0.5 border border-[#EFECE6]/40"
        style={{ width: "40px", height: "40px", borderRadius: "9999px", flexShrink: 0, position: "relative" }}
      >
        <Image
          src="/images/smartcity-official-logo.png"
          alt="Smart City Digital Media Official Logo"
          width={40}
          height={40}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Title Text */}
      <div className="flex flex-col text-left justify-center">
        <span 
          className="font-extrabold tracking-wider text-white text-base sm:text-lg leading-none font-sans uppercase"
          style={{ fontWeight: 800, letterSpacing: "0.06em", color: "#FFFFFF", fontSize: "1rem", lineHeight: 1.1, textTransform: "uppercase" }}
        >
          SMART CITY
        </span>
        <span 
          className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#F05A24] uppercase mt-0.5"
          style={{ color: "#F05A24", fontWeight: 700, fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          DIGITAL MEDIA
        </span>
      </div>
    </Link>
  );
}
