import React from "react";
import { KEY_STATS_DATA } from "@/lib/statsData";

export function KeyStatsStrip() {
  return (
    <section 
      aria-label="Key Advertising Statistics" 
      className="w-full bg-[#14161B] text-[#F4F1EA] border-y border-[#242832]/80 py-8 lg:py-10"
      style={{
        backgroundColor: "#14161B",
        borderTop: "1px solid rgba(36, 40, 50, 0.8)",
        borderBottom: "1px solid rgba(36, 40, 50, 0.8)",
        paddingTop: "2rem",
        paddingBottom: "2rem",
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
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {KEY_STATS_DATA.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col text-left p-6 bg-[#0B0C0E]/60 border border-[#242832] rounded-none shadow-sm"
              style={{
                backgroundColor: "rgba(11, 12, 14, 0.6)",
                border: "1px solid #242832",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Stat Value */}
              <div className="mb-2">
                <span 
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-mono"
                  style={{ color: "#FFFFFF", fontWeight: 800, fontFamily: "monospace", fontSize: "2rem", lineHeight: 1.1 }}
                >
                  {stat.value}
                </span>
              </div>

              {/* Primary Label */}
              <span 
                className="text-xs sm:text-sm font-bold tracking-wider text-[#F05A24] uppercase font-mono mb-1"
                style={{ color: "#F05A24", fontWeight: 700, fontSize: "0.8125rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                {stat.label}
              </span>

              {/* Explanation Sublabel */}
              <span 
                className="text-xs text-[#9CA3AF] font-normal"
                style={{ color: "#9CA3AF", fontSize: "0.75rem" }}
              >
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
