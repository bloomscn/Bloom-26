import type { LegacyProject, SectionIntro } from "../types/content";

export const legacyIntro: SectionIntro = {
  label: "Other Initiatives",
  heading: "Our Other Legacy of Impact",
  description:
    "Explore some of the other successful social, corporate, and environmental campaigns organized by AIESEC in University of Kelaniya.",
};

export const legacyProjects: LegacyProject[] = [
  {
    id: "ceo-3",
    title: "CEO 3.0",
    period: "Early 2025",
    description:
      "A premium leadership development summit connecting students with top executive leaders.",
    longDescription:
      "CEO 3.0 acted as a catalyst for professional growth by bringing together top corporate executives, industry directors, and undergraduates for design workshops, case study pitches, and corporate networking dinners.",
    coverImage: "/images/thumbnails/ceo_5.webp",
    stats: [
      { label: "Delegates", value: "300+" },
      { label: "Sponsor Brands", value: "15+" },
      { label: "Pitch Teams", value: "12" },
    ],
  },
  {
    id: "wavez-25",
    title: "Wavez '25",
    period: "Mid 2025",
    description:
      "An environmental beach conservation campaign targeting coastal plastics and ocean care.",
    longDescription:
      "Wavez '25 mobilized volunteers to clean heavily polluted shorelines, retrieving and sorting waste to promote microplastic reduction and sea turtle nesting safety.",
    coverImage: "/images/thumbnails/wavez_25_2.webp",
    stats: [
      { label: "Waste Diverted", value: "500kg+" },
      { label: "Shore Restored", value: "1.2km" },
      { label: "Active Cleaners", value: "80+" },
    ],
  },
  {
    id: "polishup",
    title: "Polish Up",
    period: "Late 2024",
    description:
      "A career readiness seminar providing undergraduates with mock interviews and CV coaching.",
    longDescription:
      "Polish Up prepared students for the competitive corporate landscape through resume reviews, mock interviews, and communication training, certified by experienced HR recruiters.",
    coverImage: "/images/thumbnails/polishup_2.webp",
    stats: [
      { label: "CV Reviews Done", value: "180+" },
      { label: "Mock Interviews", value: "65+" },
      { label: "Corporate Coaches", value: "8" },
    ],
  },
];
