import type { SectionIntro, VideoItem } from "../types/content";

export const videoIntro: SectionIntro = {
  label: "Campaign Aftermovie",
  heading: "Look back at Bloom '25",
  description:
    "Relive the moments, the smiles, and the impact of last year's campaign. Watch the official aftermovie of Bloom '25 to see how your support changes lives.",
};

export const featuredVideos: VideoItem[] = [
  {
    id: "bloom-aftermovie-25",
    provider: "vimeo",
    url: "https://vimeo.com/1206496137",
    title: "Bloom '25 Official Aftermovie",
    description:
      "The official aftermovie detailing the journey and medical impact of the Bloom '25 initiative.",
    thumbnail:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1400&q=85",
  },
];
