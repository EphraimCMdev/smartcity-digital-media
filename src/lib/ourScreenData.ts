export interface ScreenDetailItem {
  label: string;
  value: string;
  isPlaceholder?: boolean;
}

export interface OurScreenData {
  title: string;
  supportingCopy: string;
  image: {
    src: string;
    alt: string;
  };
  details: ScreenDetailItem[];
}

export const OUR_SCREEN_DATA: OurScreenData = {
  title: "THE SCREEN THAT GETS YOU SEEN",
  supportingCopy:
    "A giant digital display in the heart of Dharwad, built to put your business in front of the people who matter.",
  image: {
    src: "/images/hero-billboard-placeholder.jpg",
    alt: "Smart City Digital Media outdoor 22 x 16 FT LED screen in Dharwad",
  },
  details: [
    {
      label: "LOCATION",
      value: "Dharwad, Karnataka",
      isPlaceholder: false,
    },
    {
      label: "SCREEN SIZE",
      value: "22 × 16 FT LED Screen",
      isPlaceholder: false,
    },
    {
      label: "DAILY VISIBILITY",
      value: "90K–120K+ Daily Footfall",
      isPlaceholder: false,
    },
    {
      label: "DISPLAY FREQUENCY",
      value: "390× Ad Displays / Day",
      isPlaceholder: false,
    },
  ],
};
