# AGENTS.md — Obtura Marketing Website
> AI working file for autonomous and assisted development.  
> Every agent, LLM session, or pair-programming tool must read this file before touching any code.

---

## 0. What This File Is

This is the single source of truth for any AI agent (Cursor, GitHub Copilot, Claude, Codeium, etc.) working on the `Obtura-MarketWebsite` repository. It defines:

- The project's purpose, architecture, and constraints
- Coding standards and patterns to follow
- What to build, what to avoid, and what to never touch without human approval
- Section-by-section implementation guidance

**Rule #1:** If something is not described in this file or the project spec, do not invent it. Ask first.

---

## 1. Project Identity

```yaml
project:       Obtura Marketing Website
purpose:       Convert visitors into early-access signups
repo:          AALXX/Obtura-MarketWebsite
live_url:      https://obtura.dev
stack:         Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion
deployed_on:   Obtura platform (dogfood)
spec_file:     OBTURA_MARKETING_SPEC.md
```

---

## 2. Repository Map

```
src/
├── app/
│   ├── layout.tsx              # Root layout — fonts, global metadata, providers
│   ├── page.tsx                # Landing page — ONLY composes <Section> components
│   ├── privacy/page.tsx        # Static privacy policy
│   ├── terms/page.tsx          # Static terms of service
│   └── api/
│       └── early-access/
│           └── route.ts        # POST /api/early-access — email capture
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav, scroll state, mobile menu
│   │   └── Footer.tsx          # Links, tagline, EU branding
│   │
│   ├── sections/               # One file per page section — pure presentational
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Comparison.tsx
│   │   ├── Pricing.tsx
│   │   ├── EarlyAccessCTA.tsx
│   │   └── About.tsx
│   │
│   ├── ui/                     # Reusable atomic components
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── FeatureTile.tsx
│   │   ├── PricingCard.tsx
│   │   ├── StatCard.tsx
│   │   ├── TerminalDemo.tsx
│   │   └── Modal.tsx
│   │
│   └── providers/
│       └── AnimationProvider.tsx
│
├── lib/
│   ├── constants.ts            # ALL copy strings live here — never hardcode text
│   ├── pricing.ts              # Pricing tier definitions
│   └── features.ts             # Feature tile data array
│
├── hooks/
│   ├── useScrollAnimation.ts   # Intersection Observer for reveal animations
│   └── useCountUp.ts           # Animated number counter
│
└── styles/
    └── globals.css             # CSS variables + base reset
```

### Strict Rules About Structure
- `app/page.tsx` must ONLY import section components — no logic, no JSX primitives
- `sections/` components are presentational — no API calls, no state beyond UI state
- ALL copy text must come from `lib/constants.ts` — never hardcode strings in JSX
- `ui/` components must be fully generic — no Obtura-specific content inside them

---

## 3. Design Tokens

These are the canonical values. Never use arbitrary colours or font families in components — always use these CSS variables or Tailwind classes mapped to them.

```css
/* styles/globals.css */
:root {
  --bg-primary:       #0A0C10;
  --bg-surface:       #111318;
  --bg-elevated:      #1A1D24;
  --accent-primary:   #00D4A0;   /* teal-green — primary CTAs */
  --accent-secondary: #3B82F6;   /* blue — links */
  --text-primary:     #F1F5F9;
  --text-muted:       #64748B;
  --border:           #1E2430;
  --danger:           #EF4444;
}
```

```
Fonts:
  Display/mono headings → "DM Mono" (Google Fonts)
  Body / UI             → "DM Sans" (Google Fonts)
  Code snippets         → "Fira Code" (Google Fonts)
```

**Agent rule:** If you're tempted to use `text-purple-500`, `bg-gray-900`, or `font-inter` — stop. Map everything to the variables above.

---

## 4. Component Patterns

### 4.1 Section Component Template

Every section follows this exact pattern:

```tsx
// src/components/sections/ExampleSection.tsx
'use client'

import { motion } from 'framer-motion'
import { COPY } from '@/lib/constants'

export default function ExampleSection() {
  return (
    <section id="example" className="section-padding">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-headline"
        >
          {COPY.EXAMPLE_HEADLINE}
        </motion.h2>
        {/* content */}
      </div>
    </section>
  )
}
```

**Rules:**
- Use `id="section-name"` for scroll-spy nav linking
- `section-padding` and `container` are utility classes defined in globals.css
- All text comes from `COPY` object in `lib/constants.ts`
- Animations use `whileInView` with `once: true` — never `useEffect` scroll listeners

### 4.2 UI Component Template

```tsx
// src/components/ui/Button.tsx
import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
```

### 4.3 Data Files Pattern

```typescript
// src/lib/features.ts
export const FEATURES = [
  {
    id: 'zero-config',
    icon: '🚀',
    title: 'Zero-Config Deployment',
    description: 'Push to Git → production in 5–10 minutes. Auto-generates Dockerfiles.',
  },
  // ...
] as const
```

Data arrays always live in `lib/` — never inline in components.

---

## 5. Coding Standards

### TypeScript
- Strict mode ON — no `any`, no `@ts-ignore` without a comment explaining why
- All props interfaces explicitly typed — no implicit prop types
- Use `as const` for static data arrays
- Prefer `type` over `interface` for props (use `interface` for extendable contracts)

### React / Next.js
- Use `'use client'` only when genuinely needed (animations, event handlers, browser APIs)
- Server components by default — sections with only static content should be server components
- `<Image>` from `next/image` for every image — never raw `<img>`
- `<Link>` from `next/link` for every internal link — never raw `<a>`
- No `useEffect` for data fetching — use Server Components or `fetch` in route handlers

### Tailwind
- Mobile-first: base styles → `md:` → `lg:` modifiers
- No arbitrary values like `w-[347px]` — use spacing scale or CSS variables
- Complex repeated patterns → extract to a component, not a long className string

### Animations (Framer Motion)
```tsx
// Standard reveal animation — use this everywhere, don't invent variants
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

// Stagger children
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
}
```

- Always `viewport={{ once: true }}` — animations do not replay on scroll back
- No layout animations (`layout` prop) unless explicitly needed
- Respect `prefers-reduced-motion` — wrap motion in a check or use `useReducedMotion()`

---

## 6. Constants File — Required Structure

```typescript
// src/lib/constants.ts
export const COPY = {
  // NAV
  NAV_CTA: 'Get Early Access',

  // HERO
  HERO_HEADLINE: 'Deploy production code in 5 minutes. No DevOps team required.',
  HERO_SUBHEADLINE: 'Obtura is the autonomous DevOps platform built for European SME dev teams — flat pricing, GDPR-native, zero infrastructure expertise needed.',
  HERO_CTA_PRIMARY: 'Get Early Access',
  HERO_CTA_SECONDARY: 'See How It Works',

  // PROBLEM
  PROBLEM_HEADLINE: 'Your developers are DevOps engineers. They shouldn\'t be.',
  PROBLEM_STAT_1: '40–60 hrs',
  PROBLEM_STAT_1_LABEL: 'wasted per project on infra setup',
  PROBLEM_STAT_2: '20–30%',
  PROBLEM_STAT_2_LABEL: 'of developer time lost to DevOps work',
  PROBLEM_STAT_3: '€350+/day',
  PROBLEM_STAT_3_LABEL: 'unpredictable bills on competitor platforms',

  // SOLUTION
  SOLUTION_HEADLINE: 'Push code. Get production. Autonomously.',

  // HOW IT WORKS
  HOWITWORKS_HEADLINE: 'From git push to live in 5 minutes',

  // PRICING
  PRICING_HEADLINE: 'Flat pricing. No surprises. Ever.',
  PRICING_NOTE: 'All plans include EU hosting, GDPR compliance, and zero usage spikes.',

  // EARLY ACCESS
  EARLY_ACCESS_HEADLINE: 'Be among the first European teams on Obtura',
  EARLY_ACCESS_SUBLINE: 'Limited early access spots. Lock in founding pricing before public launch.',
  EARLY_ACCESS_CTA: 'Request Access',

  // FOOTER
  FOOTER_TAGLINE: 'Built in Europe, for Europe.',
  FOOTER_COPYRIGHT: '© 2026 Obtura.',
} as const
```

**Agent rule:** If you need to add new copy, ADD it to `constants.ts` first, then reference it. Do not hardcode new strings in components.

---

## 7. API Route — Early Access

```typescript
// src/app/api/early-access/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  gdprConsent: z.literal(true),          // must be explicitly true
  company: z.string().max(100).optional(),
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  // TODO: store to DB or forward to CRM
  // For now: log and return success
  console.log('Early access request:', parsed.data)

  return NextResponse.json({ success: true }, { status: 201 })
}
```

**Rules:**
- GDPR consent must be `true` — reject requests without it
- Validate with Zod before any processing
- Rate limit this endpoint (add `upstash/ratelimit` or middleware when deploying)
- Never log full email lists to console in production — add `NODE_ENV` guard

---

## 8. Performance Rules

The agent must not introduce:
- `'use client'` on components that don't need browser APIs or interactivity
- Unoptimised images (`<img>` tags, no width/height, no `next/image`)
- Inline SVGs larger than 2KB (use a component or external file)
- Third-party scripts without `strategy="lazyOnload"` on Next `<Script>`
- Google Fonts via `<link>` — use `next/font/google` exclusively

```typescript
// app/layout.tsx — correct font loading
import { DM_Sans, DM_Mono, Fira_Code } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-code' })
```

---

## 9. SEO Rules

- Every page must have unique `<title>` and `<meta name="description">`
- `app/page.tsx` must export `generateMetadata` or a static `metadata` object
- OG image: `/public/og-image.png` — 1200×630px, referenced in metadata
- Canonical URL must be set: `https://obtura.dev`
- No `noindex` anywhere in production builds
- `robots.txt` and `sitemap.xml` must exist — use `next-sitemap` or App Router metadata APIs

---

## 10. GDPR & Privacy Rules

These are non-negotiable for EU compliance:

1. **No Google Analytics** — Use Plausible (self-hosted or cloud) or nothing
2. **No Meta Pixel** — not permitted
3. **No third-party fonts loaded from external CDN** — use `next/font`
4. **Email capture form must have:**
   - Explicit checkbox for GDPR consent (not pre-checked)
   - Link to `/privacy` policy
   - Clear statement of what data is collected and why
5. **Do not store emails in localStorage or client state** — always POST to API immediately

---

## 11. What Agents Must NOT Do

The following actions require explicit human approval before being executed:

| Action | Reason |
|---|---|
| Change any copy string in `lib/constants.ts` | Marketing owns copy — not engineering |
| Change pricing tiers or prices in `lib/pricing.ts` | CFO approval required |
| Add any third-party analytics, tracking, or ad scripts | GDPR compliance risk |
| Modify `app/api/early-access/route.ts` data persistence logic | Data handling is legally sensitive |
| Change the domain, redirects, or `next.config.ts` rewrites | Deployment team decision |
| Add new pages beyond the spec (blog, dashboard, etc.) | Out of scope for v1 |
| Change font families | Design system decision |

---

## 12. Definition of Done — Per Component

A component is considered complete when:

- [ ] TypeScript compiles with zero errors (`tsc --noEmit`)
- [ ] ESLint passes with zero warnings
- [ ] All text comes from `lib/constants.ts`
- [ ] Mobile responsive from 320px to 1440px
- [ ] Scroll animations use `once: true`
- [ ] `<Image>` used for all images with explicit `width` and `height`
- [ ] `aria-label` on all icon-only interactive elements
- [ ] No hardcoded colour values (only CSS variables or Tailwind mapped tokens)

---

## 13. Git Conventions

```
Branch naming:
  feature/hero-section
  feature/pricing-cards
  fix/navbar-mobile-menu
  chore/update-copy-constants

Commit format (Conventional Commits):
  feat(hero): add typewriter animation to terminal demo
  fix(pricing): correct annual billing toggle calculation
  chore(constants): update hero subheadline per marketing review
  style(global): add missing section-padding utility class

PR rules:
  - One logical change per PR
  - Screenshots required for any visual change
  - Lighthouse score must not decrease by more than 2 points
```

---

## 14. Quick-Start Checklist for New Agents

When starting a new session on this repo:

1. Read this file completely
2. Read `OBTURA_MARKETING_SPEC.md` for full design and content requirements
3. Run `npm run dev` and check the current state of the site
4. Run `npx tsc --noEmit` to check for existing type errors
5. Identify which section you are implementing (refer to § 3.2 of the spec)
6. Check `lib/constants.ts` for existing copy strings before creating new ones
7. Build the component, wire it into `app/page.tsx`, verify mobile + desktop
8. Run Lighthouse locally before committing

---

## 15. Contacts

| Role | Name | Contact |
|---|---|---|
| Technical lead (architecture decisions) | Alexandru-Nicolae Șerban | alexserbwork@gmail.com |