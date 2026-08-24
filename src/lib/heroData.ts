export interface HeroMediaConfig {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
}

export interface HeroData {
  eyebrow: string;
  headline: {
    line1: string;
    line2: string;
    line3: string;
  };
  supportingCopy: string;
  locationTag: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  media: HeroMediaConfig;
}

export const HERO_DATA: HeroData = {
  eyebrow: "SMART ADVERTISING FOR SMART CITIES",
  headline: {
    line1: "YOUR BRAND.",
    line2: "RIGHT IN THE HEART",
    line3: "OF DHARWAD.",
  },
  supportingCopy:
    "Put your business in front of thousands of people every day with high-impact advertising on Dharwad's giant digital screen.",
  locationTag: "DHARWAD, KARNATAKA",
  primaryCta: {
    label: "BOOK YOUR AD",
    href: "/book",
  },
  secondaryCta: {
    label: "VIEW OUR SCREEN",
    href: "#screen-preview",
  },
  media: {
    type: "image",
    src: "/images/hero-billboard-placeholder.jpg",
    alt: "Smart City Digital Media outdoor LED screen in prominent city center of Dharwad",
  },
};
