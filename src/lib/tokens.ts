/**
 * Smart City Digital Media Design Tokens
 * Centralized visual identity system based on official logo and Instagram branding.
 * 
 * Aesthetic Direction: BOLD, MODERN, LOCAL, TRUSTWORTHY
 */

export const DESIGN_TOKENS = {
  colors: {
    // Foundation dark background
    bgPrimary: "#0B0C0E",       // Deep obsidian charcoal
    bgSecondary: "#14161B",     // Dark surface container
    bgElevated: "#1C1F26",      // Elevated dark surface

    // Typography
    textPrimary: "#F4F1EA",     // Warm off-white / cream display text
    textMuted: "#9CA3AF",       // Silver muted text

    // Structural borders
    borderDefault: "#242832",   // Subtle dark border
    borderSubtle: "#1E222A",    // Subtle divider

    // Brand warm orange / coral accent (Instagram branding)
    accentOrange: "#F05A24",     // Warm orange / coral accent
    accentOrangeHover: "#D94A17",// Orange hover state
    accentOrangeSoft: "rgba(240, 90, 36, 0.12)",

    // Official logo cream
    brandCream: "#EFECE6",       // Logo background cream
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;
