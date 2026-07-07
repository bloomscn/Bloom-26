# Bloom '26 — Official CSR Initiative Website

> **"Real dreams bloom in real hearts."**

Bloom '26 is a premium Corporate Social Responsibility (CSR) landing experience developed for **AIESEC in the University of Kelaniya**. The initiative aims to improve healthcare access in underserved rural communities in Sri Lanka by raising funds for critical medical equipment, healthcare supplies, and hospital infrastructure improvements.

The website delivers a highly engaging visual experience comparable to modern nonprofit and product landing pages, featuring fluid animations, smooth scrolling, dynamic countdown counters, and direct donation pathways.

---

## 🚀 Key Features

- **Premium Visual Design:** Custom themed modern layouts built with cream, white, mint, and sky gradients, accented by gold highlights and dark headers/footers.
- **Separation of Concerns:** 100% data-driven architecture. Page text, statistics, team members, and sponsors are fully decoupled from components and managed in static configuration files.
- **Smooth Scrolling & Motion:** Implements **Lenis** smooth scrolling coupled with **GSAP** and **Framer Motion** for performant scroll-triggered reveal animations.
- **Bloom '25 Impact Gallery:** A full-width swiping showcase built with **Embla Carousel** featuring inline image scale transitions and sliding visual indicator tracks.
- **Interactive Initiative Lightbox:** An overlay slideshow system integrated into the legacy campaigns block (_CEO 3.0_, _Wavez '25_, _Polish Up_) that displays close-up photos on click.
- **Live Countdown Timer:** Displays days, hours, minutes, and seconds remaining until the launch of the project campaign using custom reactive timer hooks.
- **Interactive Donor Pathways:** Custom WhatsApp redirect handlers that strip formatting and dynamically open chat threads pre-filled with AIESEC donor and partner messages.
- **Custom Video Interface:** A Vimeo embed system that connects directly to the official campaign video, handling cross-origin communication with responsive progress bars.

---

## 🛠️ Technology Stack

- **Runtime:** Node.js (LTS)
- **Package Manager:** `pnpm`
- **Framework:** React 19 (Functional Hooks & Composition)
- **Bundler & Dev Server:** Vite 7
- **Language:** TypeScript (Strict Typing)
- **Styling:** Tailwind CSS v4 (Utility-first, no arbitrary brackets where standard classes exist)
- **Animation:** Framer Motion (Transitions) + GSAP & ScrollTrigger (Scroll reveals)
- **Carousel:** Embla Carousel
- **Forms:** React Hook Form + Zod (Validation)
- **Scroll Engine:** Lenis Smooth Scroll

---

## 📁 Directory Structure

```text
bloom-26/
├── public/                # Static assets
│   ├── favicon.png        # Circular masked icon
│   ├── site.webmanifest   # Web App Manifest config
│   ├── logos/             # AIESEC and partner branding logos
│   └── images/            # Square cropped team photos and campaign media
│
├── src/
│   ├── assets/            # Fonts, stylesheets, and local icons
│   ├── components/        # Reusable UI components
│   │   ├── common/        # Shared components (Button, Section container, Vimeo player)
│   │   ├── navigation/    # Header sticky navigation bar
│   │   ├── countdown/     # Timer card blocks
│   │   └── gallery/       # Slider tracks and progress indicators
│   │
│   ├── data/              # Centralized site configurations (EDIT THESE TO CHANGE TEXT)
│   │   ├── site.ts        # Navigation headers, global links, WhatsApp campaigns
│   │   ├── content.ts     # About copy, countdown target, fundraising stats
│   │   ├── team.ts        # Member names, positions, custom email/LinkedIn links
│   │   ├── partners.ts    # Tiers and sponsor arrays
│   │   ├── contact.ts     # Phone numbers, location URLs, and WhatsApp numbers
│   │   └── faq.ts         # Accordion question/answer listings
│   │
│   ├── sections/          # Page sections (Hero, About, Team, Partners, FAQ, etc.)
│   ├── styles/            # global.css with custom Tailwind directives
│   ├── App.tsx            # Main application layout entry
│   └── main.tsx           # React DOM renderer
│
├── tsconfig.json          # TypeScript configurations
├── package.json           # Dependencies and scripts
└── vite.config.ts         # Build bundler configuration
```

---

## ⚙️ Updating Website Content

To maintain code cleanliness, **never hardcode text inside React components**. To change content, edit the corresponding file in `src/data/`:

- **Change Beneficiary Hospital Target:** Open [src/data/faq.ts](file:///d:/JS/Bloom/src/data/faq.ts) and modify the answer values.
- **Update Team Member Profiles:** Open [src/data/team.ts](file:///d:/JS/Bloom/src/data/team.ts). Append or remove team objects containing square headshot image names from `public/images/team/`, emails, and LinkedIn handles.
- **Modify Fundraising Progress:** Open [src/data/content.ts](file:///d:/JS/Bloom/src/data/content.ts#L65) and update the `raised` amount or the `goal` threshold. The animated bar and percentage count-ups will automatically adjust.
- **Change Countdown Date:** Open [src/data/content.ts](file:///d:/JS/Bloom/src/data/content.ts#L62) and update the `eventDate` ISO string.
- **Change Campaign Contacts:** Open [src/data/contact.ts](file:///d:/JS/Bloom/src/data/contact.ts) to update the global campaign phone, email, and Google Map locations.

---

## 💻 Getting Started

### Prerequisites

Ensure you have Node.js (v18+) and `pnpm` installed on your system.

### Installation

Clone the repository and install the dependencies from the project root:

```bash
pnpm install
```

### Local Development

Start the local Vite development server:

```bash
pnpm dev
```

The server will spin up on `http://localhost:5173`.

### Production Build

To compile a highly optimized production bundle:

```bash
pnpm build
```

The compiled assets will be outputted to the `dist/` directory.

### Linting and Formatting

To run code quality checking and automatic formatting:

```bash
# Run ESLint validation checks
pnpm lint

# Format codebase using Prettier config
pnpm format
```

---

## ❤️ Credits

Developed with passion by **AIESEC in the University of Kelaniya**.
All rights reserved © 2026.
