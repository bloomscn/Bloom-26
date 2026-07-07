import type { PartnerTier, SectionIntro } from "../types/content";

export const partnersIntro: SectionIntro = {
  label: "Partners & Sponsors",
  heading: "Together we create greater impact",
  description:
    "Bloom '26 is made possible through organizations that share our commitment to healthier communities and meaningful social impact.",
};

export const partnerCtaBlock = {
  heading: "Interested in partnering with Bloom?",
  description:
    "Join Bloom '26 to contribute to meaningful healthcare improvements while strengthening your organization's commitment to community wellbeing.",
};

export const partnerTiers: PartnerTier[] = [
  {
    title: "Title Partner",
    description: "Primary project partner recognition.",
    partners: [{ name: "Partner Pending", logoText: "Title" }],
  },
  {
    title: "Sustainability Partners",
    description: "Organizations supporting lasting impact.",
    partners: [
      { name: "Partner Pending", logoText: "Sustain" },
      { name: "Partner Pending", logoText: "Care" },
    ],
  },
  {
    title: "Impact Partners",
    description: "Contributors helping Bloom reach practical healthcare goals.",
    partners: [
      { name: "Partner Pending", logoText: "Impact" },
      { name: "Partner Pending", logoText: "Health" },
    ],
  },
  {
    title: "Community Partners",
    description: "Supporters amplifying community engagement.",
    partners: [{ name: "Partner Pending", logoText: "Community" }],
  },
  {
    title: "Visionary Partners",
    description: "Supporters aligned with Bloom's long-term mission.",
    partners: [{ name: "Partner Pending", logoText: "Vision" }],
  },
];
