import { Activity, HeartHandshake, Hospital, ShieldCheck } from "lucide-react";
import type { ImpactPoint, SectionIntro } from "../types/content";

export const hero = {
  badge: "AIESEC in University of Kelaniya Presents",
  heading: "Bloom '26",
  kicker: "Together, we can bloom hope through better healthcare.",
  description:
    "A student-led CSR initiative supporting Galaha Divisional Hospital through essential medical equipment, healthcare supplies, and infrastructure improvements.",
  image:
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1800&q=85",
  imageAlt: "Healthcare professional holding hands with a patient",
};

export const about: SectionIntro & { paragraphs: string[] } = {
  label: "About Bloom '26",
  heading: "Creating lasting change through better healthcare",
  description:
    "Bloom '26 brings students, donors, partners, and communities together around one practical mission: strengthen healthcare where resources are limited.",
  paragraphs: [
    "The project supports Galaha Divisional Hospital by providing essential medical equipment, healthcare supplies, and infrastructure improvements that strengthen patient care.",
    "Bloom '26 is a fundraising initiative. It is a commitment to sustainable social impact led by AIESEC in the University of Kelaniya.",
  ],
};

export const whyBloom: SectionIntro & { points: ImpactPoint[] } = {
  label: "Why Bloom Matters",
  heading: "Every contribution creates real impact",
  description:
    "Many rural healthcare institutions continue to face shortages that affect patients, healthcare professionals, and surrounding communities.",
  points: [
    {
      title: "Essential care access",
      description:
        "Supporting healthcare teams with the equipment and supplies they need to serve patients with dignity.",
      icon: Hospital,
    },
    {
      title: "Community wellbeing",
      description:
        "Helping every family access safe, reliable care at the hospital closest to them.",
      icon: HeartHandshake,
    },
    {
      title: "Long-term value",
      description:
        "Focusing contributions on essential improvements that continue serving the hospital after the campaign.",
      icon: ShieldCheck,
    },
    {
      title: "Collective action",
      description:
        "Mobilizing students, corporate partners, NGOs, and individuals around a transparent impact goal.",
      icon: Activity,
    },
  ],
};

export const countdown = {
  label: "Countdown",
  heading: "Bloom '26 begins in",
  eventDate: "2026-08-15T09:00:00+05:30",
};

export const fundraising = {
  intro: {
    label: "Fundraising Progress",
    heading: "Help us reach our goal",
    description:
      "Every donation directly supports medical equipment, healthcare supplies, and infrastructure improvements for Galaha Divisional Hospital.",
  },
  goal: 1000000,
  raised: 100000,
  currency: "LKR",
  description: "Together, we can make meaningful and lasting change.",
};
