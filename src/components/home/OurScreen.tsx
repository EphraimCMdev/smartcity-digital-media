import React from "react";
import Image from "next/image";
import { OUR_SCREEN_DATA } from "@/lib/ourScreenData";

export function OurScreen() {
  const { title, supportingCopy, image, details } = OUR_SCREEN_DATA;

  return (
    <section 
      id="screen-preview"
      aria-label="Our Screen Overview" 
      className="w-full bg-[#0B0C0E] text-[#F4F1EA] py-20 lg:py-24"
      style={{
        backgroundColor: "#0B0C0E",
        color: "#F4F1EA",
        paddingTop: "5rem",
        paddingBottom: "5rem",
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
        {/* SINGLE SECTION HEADING & COPY (GUARANTEES 1 SINGLE INSTANCE ACROSS ALL VIEWPORTS) */}
        <div className="max-w-3xl text-left mb-12 lg:mb-16">
          <h2 
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase mb-4 font-sans leading-tight"
            style={{
              color: "#FFFFFF",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            {title}
          </h2>
          
          <p 
            className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl leading-relaxed font-normal"
            style={{
              color: "#9CA3AF",
              maxWidth: "600px",
              fontSize: "1.0625rem",
              lineHeight: 1.6,
            }}
          >
            {supportingCopy}
          </p>
        </div>

        {/* 2-COLUMN LAYOUT: LEFT VISUAL SHOWCASE | RIGHT INFORMATION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: LARGE BILLBOARD SCREEN VISUAL */}
          <div className="lg:col-span-6 w-full">
            <div 
              className="relative w-full aspect-[16/10] lg:aspect-[4/3] border border-[#242832] bg-[#14161B] overflow-hidden shadow-2xl"
              style={{
                position: "relative",
                width: "100%",
                backgroundColor: "#14161B",
                border: "1px solid #242832",
                overflow: "hidden",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transform hover:scale-[1.01] transition-transform duration-500 ease-out"
                style={{ objectFit: "cover" }}
              />

              {/* Subtle bottom edge vignette */}
              <div 
                className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0B0C0E]/60 via-transparent to-transparent" 
                aria-hidden="true" 
              />
            </div>
          </div>

          {/* RIGHT: INFORMATION DESIGN LIST */}
          <div className="lg:col-span-6 w-full flex flex-col justify-center text-left">
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6"
              style={{ display: "grid", rowGap: "2rem", columnGap: "1.5rem" }}
            >
              {details.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col pb-4 border-b border-[#242832]/60"
                  style={{ borderBottom: "1px solid rgba(36, 40, 50, 0.6)", paddingBottom: "1rem" }}
                >
                  <span 
                    className="text-xs font-semibold tracking-widest text-[#9CA3AF] uppercase mb-1.5 font-mono"
                    style={{ color: "#9CA3AF", fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                  >
                    {item.label}
                  </span>

                  <div className="flex items-center gap-2">
                    {/* Location Pin Icon */}
                    {item.label === "LOCATION" && (
                      <svg
                        className="w-4 h-4 text-[#F05A24] flex-shrink-0"
                        style={{ width: "16px", height: "16px", color: "#F05A24" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}

                    <span 
                      className={`text-lg font-bold tracking-wide ${
                        item.isPlaceholder ? "text-[#9CA3AF]/70 font-mono text-base" : "text-white"
                      }`}
                      style={{
                        color: item.isPlaceholder ? "rgba(156, 163, 175, 0.7)" : "#FFFFFF",
                        fontWeight: 700,
                        fontSize: item.isPlaceholder ? "0.9375rem" : "1.125rem",
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
