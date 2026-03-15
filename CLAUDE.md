# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

Obtura is a marketing/waitlist website for an autonomous DevOps deployment platform targeting European SMEs. It is a pre-launch product — all CTAs lead to a contact/waitlist form. No actual platform UI exists here.

## Commands

```bash
npm run dev      # Start dev server (Next.js on port 3000)
npm run build    # Production build
npm run lint     # ESLint
```

Prettier runs automatically — format is enforced via `.prettierrc` with `prettier-plugin-tailwindcss`.

## Architecture

**Next.js 16 App Router** with React 19. TypeScript throughout.

### Page pattern

Every interactive page is split into two files:
- `page.tsx` — Server component. Handles `metadata` export and any JSON-LD structured data injection.
- `*Client.tsx` — `'use client'` component with all interactive state (forms, sliders, animations).

Example: `src/app/page.tsx` passes JSON-LD then renders `<HomeClient />`. `src/app/contact/page.tsx` renders `<ContactPageClient />`.

Static legal/compliance pages (`/terms`, `/privacy`, `/gdpr`, `/cookies`, `/security`) are pure server components with no client split needed.

### API routes

- `POST /api/send-email` — Sends lead notification emails via Nodemailer + Gmail. Accepts `{ formType: 'demo' | 'waitlist', formData }`.
- `POST /api/newsletter` — Validates email with Zod, then calls `/api/send-email` internally.

### Blog

Blog posts are **hardcoded static data** in `src/lib/data/blog-posts.ts` as a `BlogPost[]` array. There is no CMS. Adding a post means adding to that array. The `[slug]` dynamic route reads from this array.

### Design system

All colors and spacing are CSS custom properties defined in `src/app/globals.css`. Tailwind v4 is used for layout/spacing utilities, but color and typography always use CSS variables via inline `style` props.

Key tokens:
- `--bg-base` / `--bg-subtle` / `--bg-surface` / `--bg-elevated` — dark warm backgrounds
- `--fg-primary` / `--fg-secondary` / `--fg-tertiary` — text hierarchy
- `--brand` (`#ff6b35`, orange) — primary action color; use `text-brand`, `bg-brand`, or `style={{ color: 'var(--brand)' }}`
- `--brand-secondary` (steel blue) — trust/compliance indicators

Three fonts loaded via `next/font/google` in `layout.tsx`:
- `--font-display` → Fraunces (headlines, `font-black`)
- `--font-sans` → DM Sans (body text)
- `--font-mono` → Geist Mono (labels, terminal UI)

### Environment variables

```
EMAIL_USERNAME              # Gmail address used as sender/recipient
EMAIL_PASS                  # Gmail app password
NEXT_PUBLIC_GOOGLE_VERIFICATION  # Google Search Console verification token
NEXT_PUBLIC_BASE_URL        # Full origin URL (e.g. https://obtura.dev) — used by newsletter route to call internal API
```

### SEO

Heavy structured data (JSON-LD) is injected via `<script type="application/ld+json">` in both `layout.tsx` (Organization, WebSite, SoftwareApplication schemas) and individual `page.tsx` files (Product/Pricing schema on home). Sitemap is at `src/app/sitemap.ts`. RSS feed at `src/app/rss.xml/route.ts`.
