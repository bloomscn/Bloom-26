import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface CtaLink {
  label: string;
  message: string;
}

export interface SectionIntro {
  label: string;
  heading: string;
  description?: string;
}

export interface ImpactPoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FundraisingData {
  goal: number;
  raised: number;
  currency: string;
  description: string;
}

export type VideoProvider = "youtube" | "vimeo";

export interface VideoItem {
  id: string;
  provider: VideoProvider;
  url: string;
  title: string;
  description?: string;
  thumbnail: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  thumbnail: string;
  alt: string;
  project: string;
}

export interface Partner {
  name: string;
  logoText: string;
  website?: string;
}

export interface PartnerTier {
  title: string;
  description: string;
  partners: Partner[];
}

export interface TeamMember {
  name: string;
  position: string;
  photo: string;
  linkedIn?: string;
  email?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface LegacyStat {
  label: string;
  value: string;
}

export interface LegacyProject {
  id: string;
  title: string;
  period: string;
  description: string;
  longDescription: string;
  coverImage: string;
  stats: LegacyStat[];
}
