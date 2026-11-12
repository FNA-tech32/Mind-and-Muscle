# Mind&Muscle — Somatic & Wellness Coaching

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF.svg)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-EA4C89.svg)](https://www.framer.com/motion/)

Welcome to the official repository for **Mind&Muscle** — a high-performance wellness and somatic-informed coaching website designed to help individuals regulate their nervous systems, unwind chronic stress, and bridge mental ease with embodied strength.

---

## 🌿 Overview

**Mind&Muscle** provides a modern, serene, and highly interactive digital space showcasing evidence-based somatic coaching, nervous-system reset programs, and personalized daily ritual design. Built with clean typography, calming earth tones, smooth physics-driven spring animations, and accessible components.

---

## 📞 Brand & Contact Information

| Channel | Primary Detail | Alternative Detail |
| :--- | :--- | :--- |
| **Brand Name** | `Mind&Muscle` | — |
| **Email Address** | [`contact@mindandmuscle.com`](mailto:contact@mindandmuscle.com) | [`support@mindandmuscle.com`](mailto:support@mindandmuscle.com) |
| **Phone / WhatsApp** | [`+1 (555) 234-5678`](https://wa.me/15552345678) (WhatsApp) | [`+1 (555) 876-5432`](tel:+15558765432) (Direct Line) |
| **Office Hours** | Mon – Fri: 9:00 AM – 6:00 PM EST | Response within 24–48 hours |
| **Location** | Worldwide Online (Zoom / Google Meet) | Studio Consultations by Appointment |

---

## ✨ Features & Architecture

### 1. Navigation & Header (`Header.jsx`)
- Fixed header with blur background backdrop on scroll.
- Responsive design featuring desktop navigation links and quick-booking CTA.

### 2. Interactive Hero (`Hero.jsx`)
- Dynamic cycling focus words with smooth text animations.
- Interactive user intent pills ("calmer sleep", "more energy", "less overwhelm").
- Physics-based mouse parallax effect with Framer Motion spring physics.

### 3. Core Philosophy & Media (`Marquee.jsx`, `Logos.jsx`)
- Three core pillars: **Attune (Compassion)**, **Regulate (Sustainability)**, and **Strengthen (Transformation)**.
- Media showcase grid highlighting featured wellness publications.

### 4. About Mind&Muscle (`About.jsx`)
- Tabbed interface switching between **Approach** and **Credentials & Pillars**.
- Animated viewport counters for client milestones (250+ sessions, 12+ countries, 6+ years coaching).
- Highlighting ICF-aligned and trauma-aware somatic methodologies.

### 5. Offerings & Packages (`Services.jsx`)
- Tiered coaching programs:
  - **Clarity Session** (60-minute focused reset)
  - **4-Week Nervous System Reset** (Most popular intensive container)
  - **8-Week Deepen** (Complete nervous system & lifestyle transformation)
- Expandable detail drawers with animated heights.

### 6. Client Testimonials (`Testimonials.jsx`)
- Smooth quote carousel powered by Framer Motion's `AnimatePresence`.
- Autoplay with hover pause, keyboard arrow key navigation, and pagination dots.

### 7. Free Resource & Lead Magnet (`LeadMagnet.jsx`)
- Lead capture card for *“Mind&Muscle: Nervous System Reset in 5 Minutes”* mini-guide.
- Trust signals and client avatar stack.

### 8. FAQ Section (`FAQ.jsx`)
- Interactive accordion addressing common questions regarding somatic coaching, remote Zoom consultations, and booking processes.

### 9. Comprehensive Contact Section (`Contact.jsx`)
- Complete dual-contact system:
  - **Primary Contact**: `contact@mindandmuscle.com` & WhatsApp `+1 (555) 234-5678`.
  - **Alternative Contact**: `support@mindandmuscle.com` & Phone line `+1 (555) 876-5432`.
- Interactive contact form with:
  - Form validation and honeypot spam protection.
  - Inquiry topic selection and preferred contact method (Email, WhatsApp, Phone).
  - Direct mailto dispatch (with alternative email CC) and pre-formatted WhatsApp messenger launcher.

### 10. Footer (`Footer.jsx`)
- Brand statement, direct contact links, and copyright info.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 7](https://vite.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: *Playfair Display* (headings) & *Sora* (body)

---

## 📁 Project Structure

```text
Mind-and-muscle/
├── public/
│   ├── images/              # Hero imagery, avatars, publication logos
│   │   └── avatars/         # Testimonial client profile pictures
│   └── favicon.svg          # Website favicon
├── src/
│   ├── assets/              # Static SVG and assets
│   ├── components/
│   │   ├── About.jsx        # About Mind&Muscle, approach & credentials
│   │   ├── Contact.jsx      # Contact form with primary & alternative details
│   │   ├── FAQ.jsx          # Accordion FAQ component
│   │   ├── Footer.jsx       # Global footer
│   │   ├── Header.jsx       # Sticky responsive navbar
│   │   ├── Hero.jsx         # Hero section with interactive parallax
│   │   ├── LeadMagnet.jsx   # Newsletter & free guide sign-up
│   │   ├── Logos.jsx        # "As featured in" publications
│   │   ├── Marquee.jsx      # Three core wellness pillars
│   │   ├── Services.jsx     # Coaching packages & pricing
│   │   └── Testimonials.jsx # Client review carousel
│   ├── App.css              # Custom styling
│   ├── App.jsx              # Main application layout
│   ├── index.css            # Tailwind directives and root typography setup
│   └── main.jsx             # React DOM entry point
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML5 template with SEO & schema metadata
├── package.json             # NPM package scripts and dependencies
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS theme configuration
└── vite.config.js           # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone the repository
```bash
git clone https://github.com/your-username/Mind-and-muscle.git
cd Mind-and-muscle
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to view the live site with Hot Module Replacement (HMR).

### 4. Build for production
```bash
npm run build
```
This generates optimized production assets in the `dist/` directory.

### 5. Preview production build
```bash
npm run preview
```

### 6. Lint code
```bash
npm run lint
```

---

## 🌐 Deployment

The production build can be hosted on any static site platform:

- **Vercel**: Import repository -> Framework preset: `Vite` -> Click `Deploy`.
- **Netlify**: Connect repository -> Build command: `npm run build` -> Publish directory: `dist`.
- **GitHub Pages**: Build the project and deploy the `dist/` directory using `gh-pages` or GitHub Actions.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
© 2026 Mind&Muscle. All rights reserved.
