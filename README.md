# MitsuBridge — Corporate Homepage

A modern, premium, responsive homepage for **MitsuBridge**, a consulting company with two distinct business divisions: **Global Market Expansion** and the **Executive AI Guild (MEAG)**.

Built with Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, and Lucide React.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Playfair Display (headings), Inter (body) via `next/font` |

---

## Project Structure

```
src/
  app/
    globals.css          # Tailwind v4 theme, brand colors, global styles
    layout.tsx           # Root layout with font loading and metadata
    page.tsx             # Homepage assembling all sections
  components/
    Navbar.tsx           # Sticky navigation — transparent → white on scroll
    Hero.tsx             # Full-viewport split hero with unified background
    JourneySection.tsx   # "Choose Your Journey" — two premium division cards
    StatsSection.tsx     # "Why MitsuBridge" — animated stat counters
    ExpertiseSection.tsx # Four core capability cards with Lucide icons
    AboutSection.tsx     # Two-column about layout with image
    PartnersSection.tsx  # Auto-scrolling partner logo carousel
    CTASection.tsx       # Final call-to-action with dark navy + gold
    Footer.tsx           # Four-column footer with navigation and contact
```

---

## Brand Identity

- **Primary Navy:** `#0D2C54`
- **Gold Accent:** `#C9A34E`
- **Light Background:** `#F8F9FB`
- **Dark Text:** `#222222`
- **Light Gray:** `#E8ECF3`

Tailwind CSS v4 custom theme is defined in `globals.css` using the `@theme inline` directive, enabling utility classes like `bg-navy`, `text-gold`, and `font-heading`.

---

## Features

- Sticky navbar with transparent-to-white transition on scroll, mobile hamburger menu, and a square logo placeholder
- Full-viewport hero with a single cinematic background image, unified navy gradient overlay, and two side-by-side division panels with divider
- Scroll-triggered section reveals using Framer Motion `whileInView`
- "Choose Your Journey" section with two large cards featuring hover lift, gold border accent, and gold bottom bar animation
- Animated number counters using IntersectionObserver
- Auto-scrolling partner logo carousel with hover-pause
- Smooth scrolling throughout
- Fully responsive: desktop, tablet, mobile
- Semantic HTML5 with ARIA labels on interactive elements
- Premium spacing (28px/36px section padding, 8px grid system)
- Rounded corners (18–24px), soft shadows, elegant gradients

---

## Getting Started

### Prerequisites

- Node.js 20.9+

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

> **Note:** In Next.js 16, `next build` does not run the linter automatically. Use the script above.

---

## Configuration Files

- `next.config.ts` — Image qualities and Turbopack root configuration
- `postcss.config.mjs` — PostCSS with `@tailwindcss/postcss`
- `tsconfig.json` — TypeScript configuration with `@/` path alias
- No `tailwind.config.js` is needed — Tailwind v4 uses CSS-based configuration via `@theme` in `globals.css`

---

## Customisation

### Colors

Edit the `@theme inline` block in `src/app/globals.css`:

```css
@theme inline {
  --color-navy: #0D2C54;
  --color-gold: #C9A34E;
  /* ... */
}
```

### Fonts

Swap Google Font imports in `src/app/layout.tsx` and update the CSS variables in `globals.css`.

### Logo Placeholders

- **Navbar logo:** `src/components/Navbar.tsx` — 40×40px rounded square with inline SVG
- **Division logos:** `src/components/JourneySection.tsx` — 72×72px rounded-2xl placeholders labelled "Division Logo"

Replace these with your official assets.

---

## Image Credits

Hero and About section background images are sourced from Unsplash. Replace the URLs in the respective components with your own images before production deployment.

---

## License

Proprietary — MitsuBridge. All rights reserved.
