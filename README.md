# MitsuBridge — Corporate Homepage

A modern, premium, responsive homepage for **MitsuBridge**, a consulting company with two distinct business divisions: **Global Market Expansion** and the **Executive AI Guild (MEAG)**.

Built with Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, and Lucide React. Deployed via GitHub Pages.

---

## Pages

| Route | Content |
|---|---|
| `/` | Homepage — two-division overview, journey cards, stats, expertise, about, testimonials, CTA |
| `/global` | Global Business Expansion — services, insight article, contact |
| `/meag` | MitsuBridge Executive AI Guild — programme info, benefits, accreditation, career pathways, insights (thought leadership + news), brochures, CTA |
| `/studio` | Embedded [Sanity Studio](https://www.sanity.io) CMS for editing content |

Internal navigation (Navbar, hero buttons, division cards, CTA) links between pages seamlessly. The Navbar highlights the current page with a gold active state. The Navbar "Insights" link scrolls to the Thought Leadership + News section on the MEAG page.

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
| CMS | Sanity (`sanity`, `next-sanity`, `@sanity/client`, `@sanity/vision`, `@sanity/image-url`) |
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
    studio/
      page.tsx           # Sanity Studio route (server shell)
      StudioClient.tsx   # Studio client wrapper (dynamic, ssr:false)
  sanity/                # Sanity CMS integration
    client.ts            # Sanity client (null-safe without env vars)
    config.ts            # Studio config (structure + vision tools)
    types.ts             # TypeScript types for all content types
    queries.ts           # GROQ queries + typed data-fetching functions
    utils.ts             # urlFor/imageUrl, sanityFetch, youtubeEmbed, formatDate
    schemas/             # Content type definitions
      index.ts
      heroSection.ts     # Hero: heading, subheading, CTA, background image
      testimonial.ts     # name, designation, company, quote, profile image
      thoughtLeadership.ts # title, rich body, cover, publish date
      news.ts            # title, description, cover, external link, date
      video.ts           # title, YouTube URL, thumbnail
      brochure.ts        # title, image/PDF, description, button, download link
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
    TestimonialsSection.tsx # CMS-driven testimonials (Sanity)
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
    MeagAbout.tsx        # Programme overview with 4 feature cards + CMS video
    MeagCrisisSection.tsx# "86% AI skills shortage" dark section
    MeagVisionMission.tsx# Vision & Mission split layout
    MeagStudentBenefits.tsx # 12 benefit icon grid
    MeagSchoolBenefits.tsx  # 6 institution benefit cards
    MeagLearningModels.tsx  # 3 delivery model cards
    MeagAccreditation.tsx   # UK CPD certificate placeholder
    MeagCareerPathways.tsx  # UK / USA / Singapore destination cards
    InsightsSection.tsx     # CMS-driven Thought Leadership + News (Sanity)
    BrochuresSection.tsx    # CMS-driven Brochures (Sanity)
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
- Two stand-alone sub-pages (`/global`, `/meag`) inheriting the same design language
- Scroll-triggered section reveals using Framer Motion `whileInView`
- Premium division cards with hover lift, gold border accent, and bottom bar animation
- Animated number counters via IntersectionObserver
- Auto-scrolling partner logo carousel with hover-pause
- Formatted insight article with pull quotes, callout boxes, and sector badges
- CMS-driven content (hero, testimonials, insights, news, brochures, video) via Sanity
- Fully responsive: desktop, tablet, mobile
- Semantic HTML5 with ARIA labels on interactive elements
- Premium spacing (28px/36px section padding, 8px grid system)
- Rounded corners (18–24px), soft shadows, elegant gradients

---

## Sanity CMS

The site is backed by [Sanity](https://www.sanity.io) for editable content. The Studio is embedded at `/studio`, and content is fetched server-side at build time with GROQ queries.

### Content types

| Type | Fields | Where it renders |
|---|---|---|
| `heroSection` (singleton) | heading, subheading, CTA text, CTA link, background image | Homepage hero |
| `testimonial` | name, designation, company, quote, profile image | Homepage testimonials |
| `thoughtLeadership` | title, rich body, cover image, publish date | MEAG "Thought Leadership" (Insights section) |
| `news` | title, description, cover image, external link, publish date | MEAG "Latest News" (Insights section) |
| `video` | title, YouTube URL, thumbnail | MEAG page programme video |
| `brochure` | title, image/PDF, description, button text, download link | MEAG "Resources & Brochures" section |

Schema definitions live in `src/sanity/schemas/`, GROQ queries in `src/sanity/queries.ts`.

### Using the Studio

1. Run `npm run dev` and open `http://localhost:3000/studio`.
2. Sign in with the Sanity account that owns the project.
3. Add content under the document types in the left sidebar. Changes are fetched at build time, so run `npm run build` (or redeploy) to publish them to the site.

### CORS origins added

## Getting Started

### Prerequisites

- Node.js 20.9+
- A Sanity project with its Project ID and dataset

### Install

```bash
npm install
```

### Environment variables

Copy `.env.example` to `.env.local` and fill in your Sanity values:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-01
```

> `.env.local` is gitignored and never committed. It is required to use the Sanity Studio; without it the site builds and runs but shows placeholder/static content.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The Sanity Studio is at [http://localhost:3000/studio](http://localhost:3000/studio).

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



## Configuration Files

File | Purpose
|---|---|
| `next.config.ts` | Static export, basePath, image optimization |
| `postcss.config.mjs` | PostCSS with `@tailwindcss/postcss` |
| `.github/workflows/deploy.yml` | GitHub Actions CI/CD pipeline (reads Sanity env secrets) |
| `tsconfig.json` | TypeScript with `@/` path alias |
| `src/sanity/config.ts` | Sanity Studio config (schema types, tools, basePath) |
| `src/sanity/client.ts` | Sanity API client (null-safe without env vars) |
| `.env.example` | Template for the required Sanity environment variables |

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

- **Navbar logo:** `src/components/Navbar.tsx` — actual logo image (white/navy variant switching on scroll)
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

Hero and section background images are sourced from Unsplash.

Key image locations:

| Component | Usage |
|---|---|
| `Hero.tsx` | Homepage hero background (overridable via Sanity) |
| `GlobalHero.tsx` | Global page hero background |
| `MeagHero.tsx` | MEAG page hero background |
| `GlobalAbout.tsx` | About section image |
| `AboutSection.tsx` | Homepage about image |

Hero, section, and CMS images are optionally sourced from Sanity. Local interim images remain from Unsplash.

---

## License

Proprietary — MitsuBridge. All rights reserved.
