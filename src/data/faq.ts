import type { FaqItem, SectionIntro } from "../types/content";

export const faqIntro: SectionIntro = {
  label: "Frequently Asked Questions",
  heading: "Have questions? We've got answers.",
};

export const faqItems: FaqItem[] = [
  {
    question: "What is Bloom '26?",
    answer:
      "Bloom '26 is a Corporate Social Responsibility initiative organized by AIESEC in the University of Kelaniya to improve healthcare access for underserved rural communities.",
  },
  {
    question: "How can I donate?",
    answer:
      'Click the "Be a Donor" button anywhere on the website to contact our team via WhatsApp.',
  },
  {
    question: "How can my organization become a partner?",
    answer:
      'Click "Become a Partner" to connect with our Partnership Development team through WhatsApp.',
  },
  {
    question: "Where will my contribution go?",
    answer:
      "All contributions support the purchase of medical equipment, healthcare supplies, and hospital infrastructure improvements.",
  },
  {
    question: "Which hospital will benefit?",
    answer: "The beneficiary of this initiative is Galaha Divisional Hospital.",
  },
  {
    question: "Who organizes Bloom '26?",
    answer: "Bloom '26 is organized by AIESEC in the University of Kelaniya.",
  },
];
