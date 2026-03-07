# OBTURA — Marketing Website · Project Specification
**Version:** 1.0  
**Date:** March 2026  
**Repo:** `AALXX/Obtura-MarketWebsite`  
**Live domain:** `obtura.dev`  
**Stack:** Next.js 15 · TypeScript · Tailwind CSS · App Router

---

## 1. Purpose & Goals

The Obtura marketing website is the primary conversion surface for the product. It must accomplish four things in order:

1. **Hook** — Communicate the core value proposition in under 5 seconds
2. **Educate** — Explain the problem and why Obtura solves it better than alternatives
3. **Trust** — Establish credibility with European SMEs (GDPR, EU infra, flat pricing)
4. **Convert** — Drive visitors to request early access or book a demo


---

## 2. Target Audience

| Segment | Role | Pain Point |
|---|---|---|
| Primary | CTO / Lead Developer at 5–50 person EU startup | Wastes 20–30% of dev time on infra |
| Secondary | Founder / Co-founder (technical) | Cannot justify a €60K+ DevOps hire |
| Tertiary | Senior Developer at EU agency | Repetitive setup for each client project |

**Key buyer insight:** They are not looking for another cloud dashboard — they want confidence that Obtura will not surprise them with a bill, will not require learning Kubernetes, and will not leave them stranded when something breaks at 2am.

---

## 3. Page Structure

### 3.1 Single-Page Layout (scrollable sections)

```
/               → Full marketing landing page
/privacy        → GDPR Privacy Policy
/terms          → Terms of Service
```

All conversion actions (early access, demo) open a lightweight modal — no separate page redirects.

---

### 3.2 Section Breakdown

#### § NAV — Sticky Navigation
- Logo (left)
- Links: Features · Pricing · About (smooth scroll anchors)
- CTA button: **"Get Early Access"** (primary, right-aligned)
- Mobile: hamburger collapse
- Behaviour: transparent on load → solid on scroll past hero

---

#### § HERO — Above the fold
**Goal:** Land the value prop in one breath.

- **Headline:** `Deploy production code in 5 minutes. No DevOps team required.`
- **Subheadline:** `Obtura is the autonomous DevOps platform built for European SME dev teams — flat pricing, GDPR-native, zero infrastructure expertise needed.`
- **CTAs:** `Get Early Access` (primary) · `See How It Works` (secondary/ghost)
- **Visual:** Animated terminal/deploy flow — shows a `git push` resolving to a live deployment in seconds. Dark background, code aesthetic.
- **Trust bar below fold:** `GDPR Compliant · EU Hosted · Flat Pricing · No Kubernetes`

---

#### § PROBLEM — The cost of the status quo
**Goal:** Make the pain visceral and quantified.

Three stat cards:
- `40–60 hrs` wasted per project on infra setup
- `20–30%` of developer time lost to DevOps work
- `€350+/day` unpredictable cloud bills on competitors

Short paragraph below: *"European SMEs cannot afford a dedicated DevOps engineer — but they can't afford to keep burning developer time on infrastructure either. Obtura eliminates the choice."*

---

#### § SOLUTION — How Obtura works
**Goal:** Concrete, scannable feature explanation.

**Section headline:** `Push code. Get production. Autonomously.`

Six feature tiles (2×3 grid on desktop, stack on mobile):

| Icon | Title | Description |
|---|---|---|
| 🚀 | Zero-Config Deployment | Push to Git → production in 5–10 minutes. Auto-generates Dockerfiles. Supports Node.js, Python, PHP, React, Vue, Next.js. |
| 🤖 | AI DevOps Agent | Monitors logs, optimises performance, and responds to critical incidents autonomously — without waking you up. |
| 🔀 | Native Git Integration | Built-in staging, production, and preview environments. 80% of web app workflows automated out of the box. |
| 📊 | Complete Observability | Unified monitoring, logging, error tracking, and analytics. No third-party tools required. |
| 👥 | Team Management | Role-based access, deployment approvals, easy onboarding. Built for teams, not solo developers. |
| 💶 | Predictable Pricing | Flat monthly rates. No usage spikes. No surprise bills. Ever. |

---

#### § HOW IT WORKS — Step flow
**Goal:** Reduce perceived complexity to zero.

Three-step horizontal flow (with connecting arrows):

1. **Connect your repo** — GitHub, GitLab, or Obtura's built-in Git server
2. **Push your code** — Obtura detects your stack and configures everything automatically
3. **Ship to production** — Live in minutes. AI agent monitors and maintains from there.

Optional: small animated demo GIF or video embed (autoplay, muted, looped).

---

#### § COMPARISON — Why not the alternatives?
**Goal:** Disqualify Vercel, Replit, GitHub Codespaces for SME teams.

Comparison table:

| | Obtura | Vercel | Replit | Self-hosted |
|---|---|---|---|---|
| Zero-config deploy | ✅ | ✅ | ✅ | ❌ |
| AI autonomous ops | ✅ | ❌ | ❌ | ❌ |
| EU-hosted & GDPR-native | ✅ | ❌ | ❌ | ✅ |
| Flat predictable pricing | ✅ | ❌ | ❌ | ❌ |
| Built for SME teams (5–25) | ✅ | ❌ | ❌ | ❌ |
| Full observability included | ✅ | Partial | ❌ | DIY |

---

#### § PRICING — Flat plans
**Goal:** Remove the pricing anxiety that blocks B2B SaaS conversions.

Three tiers (cards):

| Plan | Price | Target | Key limits |
|---|---|---|---|
| **Starter** | €199/mo | Solo devs / 1–2 person teams | 3 projects, 2 team members |
| **Team** | €250/mo | 5–15 person dev teams | 10 projects, 10 members, AI agent |
| **Business** | 650/mo | 15–25 person teams / agencies | Unlimited projects, priority support |
| **Enterprise** | 899/mo | 15–50 person teams / agencies | Unlimited projects, priority support |

All plans: EU hosting · GDPR-native · flat rate · no usage spikes.  
Annual billing toggle (show 2 months free).  
Note below: *"Need something custom? Talk to us."* → links to contact.


---


#### § ABOUT — Team & mission
Short section, not a full "About Us" page:
- 2-sentence mission statement
- Founder cards: Alexandru-Nicolae Șerban (Founder & CEO) (Head of Marketing & CFO)
- LinkedIn links

---

#### § FOOTER
- Logo + tagline
- Links: Privacy · Terms · GitHub · LinkedIn
- `© 2026 Obtura. Built in Europe 🇪🇺`

---

## 4. Design System

### 4.1 Aesthetic Direction
**Dark-industrial / precision tech.** Think: terminal-green on deep slate, sharp grid lines, monospaced accents alongside clean sans-serif body. Not generic SaaS purple. Feels like something senior engineers built, for engineers.

### 4.2 Colour Palette
```
--bg-primary:       #0A0C10   /* near-black base */
--bg-surface:       #111318   /* card/section surfaces */
--bg-elevated:      #1A1D24   /* elevated components */
--accent-primary:   #00D4A0   /* teal-green — deploy success, CTAs */
--accent-secondary: #3B82F6   /* blue — links, highlights */
--text-primary:     #F1F5F9   /* near-white body */
--text-muted:       #64748B   /* secondary text */
--border:           #1E2430   /* subtle borders */
--danger:           #EF4444   /* errors / alerts */
```

### 4.3 Typography
```
Display headings:   "DM Mono" or "JetBrains Mono" — monospaced, technical authority
Body / UI:          "DM Sans" — clean, readable, modern
Code snippets:      "Fira Code" — ligatures, inline code blocks
```

### 4.4 Spacing & Layout
- Max content width: `1200px`
- Section vertical padding: `100px` desktop / `60px` mobile
- 12-column grid, 24px gutters
- Card border-radius: `8px`
- Button border-radius: `6px`

### 4.5 Motion Principles
- Hero terminal: typewriter animation on deploy sequence
- Section reveals: fade-up on scroll enter (60px offset, 0.4s ease-out)
- CTA button: subtle pulse glow on idle
- Stat counters: count-up animation on scroll into view
- No gratuitous motion — every animation must serve clarity

---

## 5. Technical Specification

### 5.1 Stack
```
Framework:      Next.js 15 (App Router)
Language:       TypeScript (strict mode)
Styling:        Tailwind CSS v4 + CSS variables
Animations:     Framer Motion
Forms:          React Hook Form + Zod validation
Email capture:  API route → store in DB or forward to CRM
Analytics:      Self-hosted Plausible (GDPR-compliant, no cookie banner needed)
Deployment:     Obtura itself (dogfooding)
```

### 5.2 File Structure
```
obtura-market-website/
├── public/
│   ├── Logo2.png
│   ├── og-image.png              # 1200×630 Open Graph image
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout, fonts, metadata
│   │   ├── page.tsx              # Landing page — composes all sections
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── api/
│   │       └── early-access/
│   │           └── route.ts      # POST handler for email capture
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── Solution.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Comparison.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── EarlyAccessCTA.tsx
│   │   │   └── About.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── FeatureTile.tsx
│   │   │   ├── PricingCard.tsx
│   │   │   ├── StatCard.tsx
│   │   │   ├── TerminalDemo.tsx  # Animated terminal component
│   │   │   └── Modal.tsx
│   │   └── providers/
│   │       └── AnimationProvider.tsx
│   ├── lib/
│   │   ├── constants.ts          # Site-wide content strings
│   │   ├── pricing.ts            # Pricing tier data
│   │   └── features.ts           # Feature tile data
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   └── useCountUp.ts
│   └── styles/
│       └── globals.css           # CSS variables, base styles
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### 5.3 Performance Targets
- Lighthouse Performance: ≥ 95
- LCP (Largest Contentful Paint): < 2.0s
- CLS (Cumulative Layout Shift): < 0.05
- Bundle size (JS): < 150KB gzipped
- All images: WebP format, Next.js `<Image>` with proper sizing

### 5.4 SEO & Metadata
```typescript
// app/layout.tsx — base metadata
export const metadata = {
  title: 'Obtura — Deploy Production Code in 5 Minutes',
  description: 'The autonomous DevOps platform for European SME dev teams. Zero config deployment, AI monitoring, predictable flat pricing. GDPR-native.',
  openGraph: {
    title: 'Obtura — Autonomous DevOps for European SMEs',
    description: '...',
    image: '/og-image.png',
    url: 'https://obtura.dev',
  },
  twitter: { card: 'summary_large_image' },
}
```

Structured data (JSON-LD): `SoftwareApplication` schema on homepage.

### 5.5 GDPR Requirements
- No Google Analytics (use Plausible self-hosted or Obtura's own analytics)
- No third-party tracking pixels
- Email capture: explicit consent checkbox required
- Privacy policy page: required before launch
- Cookie banner: NOT required if using cookieless analytics

---

## 6. Content Copy — Key Strings

These are the canonical approved strings. Do not rewrite without marketing sign-off.

```
HERO_HEADLINE      = "Deploy production code in 5 minutes. No DevOps team required."
HERO_SUBHEADLINE   = "Obtura is the autonomous DevOps platform built for European SME dev teams — flat pricing, GDPR-native, zero infrastructure expertise needed."
HERO_CTA_PRIMARY   = "Get Early Access"
HERO_CTA_SECONDARY = "See How It Works"

PROBLEM_HEADLINE   = "Your developers are DevOps engineers. They shouldn't be."
SOLUTION_HEADLINE  = "Push code. Get production. Autonomously."
HOWITWORKS_HEADLINE = "From git push to live in 5 minutes"
PRICING_HEADLINE   = "Flat pricing. No surprises. Ever."
EARLY_ACCESS_HEADLINE = "Be among the first European teams on Obtura"
FOOTER_TAGLINE     = "Built in Europe, for Europe."
```

---

## 7. Conversion Strategy

### Primary CTA: Early Access
- Appears in: Hero, mid-page CTA section, Navbar
- Action: Opens modal with email + name fields + GDPR consent
- Post-submit: "You're on the list" confirmation, add to waitlist spreadsheet/CRM

### Secondary CTA: Book a Demo
- Appears in: Hero (secondary), Pricing section (Studio tier)
- Action: Links to Calendly or inline calendar embed

### Trust Signals (distributed throughout page)
- GDPR badge
- EU flag / "Built in Europe"
- "No credit card required" near CTAs
- Founder names + LinkedIn links (humans behind the product)
- GitHub link (open development)

---

## 8. Launch Checklist

### Pre-launch
- [ ] All copy reviewed and approved by Alexandru + Rareș
- [ ] Pricing confirmed with CFO
- [ ] Privacy Policy and Terms pages written (legal review)
- [ ] OG image created (1200×630)
- [ ] Favicon set (use Logo2.png as base)
- [ ] GDPR consent on email form wired up
- [ ] Early access API route tested end-to-end
- [ ] Plausible analytics configured on obtura.dev
- [ ] Mobile responsive QA (320px → 1440px)
- [ ] Lighthouse audit ≥ 95 on all metrics
- [ ] Deployed to obtura.dev via Obtura platform (dogfood)

### Post-launch
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Plausible dashboard for team
- [ ] A/B test hero headline (Week 2)
- [ ] Track early access conversion rate (target: ≥ 8%)

---

## 9. Out of Scope (v1)

The following are explicitly excluded from this spec and should not be built for launch:

- Blog / content marketing section
- Documentation or API reference
- Changelog / release notes page
- Multi-language support (EN only for v1)
- Dashboard or authenticated areas
- Live chat widget
- Video testimonials

---

## 10. Contacts & Ownership

| Role | Name | Email |
|---|---|---|
| Founder & CEO (technical decisions) | Alexandru-Nicolae Șerban | alexserbwork@gmail.com |

**Repo:** https://github.com/AALXX/Obtura-MarketWebsite  
**Platform repo:** https://github.com/AALXX/Obtura  
**Domain:** https://obtura.dev