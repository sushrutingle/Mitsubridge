# MitsuBridge — Corporate Homepage

A modern, premium, responsive homepage for **MitsuBridge**, a consulting company with two distinct business divisions: **Global Market Expansion** and the **Executive AI Guild (MEAG)**.

Built with Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, and Lucide React. Deployed via GitHub Pages.

---

## Pages

| Route | Content |
|---|---|
| `/` | Homepage — two-division overview, journey cards, stats, expertise, about, partners, CTA |
| `/global` | Global Business Expansion — services, insight article, contact |
| `/meag` | MitsuBridge Executive AI Guild — programme info, benefits, accreditation, leadership |

Internal navigation (Navbar, hero buttons, division cards, CTA) links between pages seamlessly. The Navbar highlights the current page with a gold active state.

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
| Deployment | GitHub Pages (static export via GitHub Actions) |

---

## Project Structure

```
src/
  app/
    globals.css          # Tailwind v4 theme, brand colors, global styles
    layout.tsx           # Root layout with font loading and metadata
    page.tsx             # Homepage assembling all sections
    global/
      page.tsx           # Global Business Expansion page
    meag/
      page.tsx           # MEAG page
  components/
    # Shared
    Navbar.tsx           # Sticky navigation — transparent → white on scroll
    Footer.tsx           # Four-column footer with navigation and contact

    # Homepage sections
    Hero.tsx             # Full-viewport split hero with unified background
    JourneySection.tsx   # "Choose Your Journey" — two premium division cards
    StatsSection.tsx     # "Why MitsuBridge" — animated stat counters
    ExpertiseSection.tsx # Four core capability cards with Lucide icons
    AboutSection.tsx     # Two-column about layout with image
    PartnersSection.tsx  # Auto-scrolling partner logo carousel
    CTASection.tsx       # Final call-to-action with dark navy + gold

    # Global page sections
    GlobalHero.tsx       # Manufacturing-themed hero
    GlobalAbout.tsx      # Who We Are — capabilities with check icons
    GlobalServices.tsx   # 3×2 grid of six service cards
    GlobalStats.tsx      # Animated stat counters (countries, experience)
    GlobalInsight.tsx    # "Bridging Continents" featured article
    GlobalCTA.tsx        # Dark navy CTA with contact email
    GlobalContact.tsx    # Contact information cards

    # MEAG page sections
    MeagHero.tsx         # Education-themed hero with CPD badge
    MeagAbout.tsx        # Programme overview with 4 feature cards
    MeagCrisisSection.tsx# "86% AI skills shortage" dark section
    MeagVisionMission.tsx# Vision & Mission split layout
    MeagStudentBenefits.tsx # 12 benefit icon grid
    MeagSchoolBenefits.tsx  # 6 institution benefit cards
    MeagLearningModels.tsx  # 3 delivery model cards
    MeagAccreditation.tsx   # UK CPD certificate placeholder
    MeagCareerPathways.tsx  # UK / USA / Singapore destination cards
    MeagLeadership.tsx      # Anita Nadkarni profile + qualifications
    MeagRegionalSupport.tsx # Regional lead profile
    MeagCTA.tsx             # "Transform AI Education" CTA
```

---

## Brand Identity

- **Primary Navy:** `#0D2C54`
- **Gold Accent:** `#C9A34E`
- **Light Background:** `#F8F9FB`
- **Dark Text:** `#222222`
- **Light Gray:** `#E8ECF3`

Custom theme defined in `globals.css` via `@theme inline` — enables utility classes like `bg-navy`, `text-gold`, `font-heading`.

---

## Features

- Sticky navbar with transparent-to-white transition on scroll, mobile hamburger menu, active-route highlighting, and square logo placeholder
- Full-viewport hero with cinematic background, navy gradient overlay, and two side-by-side division panels
- Three stand-alone sub-pages (`/global`, `/meag`) inheriting the same design language
- Scroll-triggered section reveals using Framer Motion `whileInView`
- Premium division cards with hover lift, gold border accent, and bottom bar animation
- Animated number counters via IntersectionObserver
- Auto-scrolling partner logo carousel with hover-pause
- Formatted insight article with pull quotes, callout boxes, and sector badges
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

### Build (local)

```bash
npm run build
```

Generates a Next.js server build. Static export is only enabled during GitHub Actions deployment.

### Lint

```bash
npm run lint
```

> **Note:** In Next.js 16, `next build` does not run the linter automatically.

---

## Deployment

The site is deployed to **GitHub Pages** via a GitHub Actions workflow.

### How it works

1. Push to `master` (or `main`) triggers `.github/workflows/deploy.yml`
2. The workflow runs `npm ci && npm run build`
3. The `next.config.ts` detects `GITHUB_ACTIONS=true` and applies:
   - `output: "export"` — generates static HTML/CSS/JS into `./out`
   - `basePath: "/Mitsubridge"` — prefixes all asset URLs for the sub-path
   - `trailingSlash: true` — cleaner URLs
   - `images: { unoptimized: true }` — bypasses Next.js image optimizer
4. The `./out` folder is uploaded as a Pages artifact
5. The `deploy-pages` action publishes it

### Live URL

```
https://sushrutingle.github.io/Mitsubridge/
```

### Manual deploy

Go to **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

### One-time setup required

In your GitHub repo: **Settings → Pages → Source: GitHub Actions**.

---

## Configuration Files

File | Purpose
|---|---|
| `next.config.ts` | Static export, basePath, image optimization |
| `postcss.config.mjs` | PostCSS with `@tailwindcss/postcss` |
| `.github/workflows/deploy.yml` | GitHub Actions CI/CD pipeline |
| `tsconfig.json` | TypeScript with `@/` path alias |

No `tailwind.config.js` is needed — Tailwind v4 uses CSS-based configuration via `@theme` in `globals.css`.

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
- **Certificate placeholder:** `src/components/MeagAccreditation.tsx`
- **Flag placeholders:** `src/components/MeagCareerPathways.tsx`

Replace these with your official assets.

### Adding a new page

1. Create `src/app/<route>/page.tsx`
2. Create any new section components in `src/components/`
3. Update `Navbar.tsx` to add the route to `navLinks`
4. Build and verify

---

## Image Credits

Hero and section background images are sourced from Unsplash. Replace the URLs in the respective components before production deployment.

Key image locations:

| Component | Usage |
|---|---|
| `Hero.tsx` | Homepage hero background |
| `GlobalHero.tsx` | Global page hero background |
| `MeagHero.tsx` | MEAG page hero background |
| `GlobalAbout.tsx` | About section image |
| `MeagAbout.tsx` | Programme section image |
| `MeagLeadership.tsx` | Leadership profile image |
| `MeagRegionalSupport.tsx` | Regional lead profile image |
| `AboutSection.tsx` | Homepage about image |

---

## License

Proprietary — MitsuBridge. All rights reserved.
