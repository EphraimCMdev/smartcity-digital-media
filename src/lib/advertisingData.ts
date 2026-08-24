export interface BenefitItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface StepItem {
  stepNumber: string;
  title: string;
  description: string;
}

export interface AdvertisingData {
  intro: {
    eyebrow: string;
    heading: string;
    supportingCopy: string;
  };
  benefits: BenefitItem[];
  process: {
    title: string;
    steps: StepItem[];
  };
  cta: {
    heading: string;
    supportingCopy: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
}

export const ADVERTISING_DATA: AdvertisingData = {
  intro: {
    eyebrow: "ADVERTISING THAT GETS NOTICED",
    heading: "PUT YOUR BRAND WHERE DHARWAD LOOKS.",
    supportingCopy:
      "Reach thousands of people every day with high-impact digital advertising on Dharwad's giant digital screen.",
  },
  benefits: [
    {
      id: "visibility",
      number: "01",
      title: "HIGH VISIBILITY",
      description: "Put your brand in front of people where traffic and attention converge.",
    },
    {
      id: "footfall",
      number: "02",
      title: "90K–120K+ DAILY FOOTFALL",
      description: "Reach a large daily audience in Dharwad.",
    },
    {
      id: "frequency",
      number: "03",
      title: "390× AD DISPLAYS / DAY",
      description: "Keep your brand visible with repeated daily exposure.",
    },
    {
      id: "screen",
      number: "04",
      title: "22 × 16 FT LED SCREEN",
      description: "Make your message stand out on a large-format digital display.",
    },
  ],
  process: {
    title: "HOW IT WORKS",
    steps: [
      {
        stepNumber: "01",
        title: "CHOOSE YOUR CAMPAIGN",
        description: "Tell us what you want to promote.",
      },
      {
        stepNumber: "02",
        title: "SHARE YOUR CREATIVE",
        description: "Provide your advertisement for the digital screen.",
      },
      {
        stepNumber: "03",
        title: "GET YOUR BRAND SEEN",
        description: "Your campaign goes live on the Smart City Digital Media screen.",
      },
    ],
  },
  cta: {
    heading: "READY TO GET YOUR BRAND SEEN?",
    supportingCopy: "Let's put your business in front of the people who matter.",
    primaryCta: {
      label: "BOOK YOUR AD",
      href: "/book",
    },
    secondaryCta: {
      label: "VIEW OUR SCREEN",
      href: "#screen-preview",
    },
  },
};
