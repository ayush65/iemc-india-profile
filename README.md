# IEMC India Pvt. Ltd. — Company Profile (Next.js)

Full-fledged **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4** rebuild of the
original static IEMC company profile site (`legacy/` holds the previous HTML/CSS/JS
version for reference).

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

Other scripts: `npm run lint` (ESLint), `npm run start -- -p 3100`.

## Routes

| Route                | Type   | Description                                              |
| -------------------- | ------ | -------------------------------------------------------- |
| `/`                  | static | One-page corporate profile (hero, about, vision & mission, products, leadership, contact) |
| `/products`          | static | Product catalog                                          |
| `/products/[slug]`   | SSG    | Product detail page with `generateMetadata` + JSON-LD    |
| `/api/products`      | dynamic | `GET` catalog, `GET /api/products?slug=neeri-sense`     |
| `/api/contact`       | dynamic | `POST` validated contact inquiry                         |
| `/sitemap.xml`, `/robots.txt` | static | SEO files                                        |
| `not-found.tsx` / `error.tsx` | — | 404 page and root error boundary                       |

## Project structure

```
src/
  app/
    layout.tsx              Root layout: fonts, metadata, JSON-LD, header/footer
    page.tsx                Home page (assembles the sections)
    globals.css             Tailwind v4 entry + design tokens + base/button styles
    products/               Catalog + [slug] detail pages
    api/                    Route handlers (contact, products)
    sitemap.ts, robots.ts   SEO
    not-found.tsx, error.tsx
  components/               Header, Hero, Sections, ProductCarousel, ProductModal,
                            Leadership, ContactSection, Footer, StatCounter…
  lib/
    data.ts                 Single source of truth: company, nav, stats, products, team
    types.ts                Shared TS types
    validation.ts           Shared inquiry validation (client + API)
```

## Content editing

All copy, products and team members live in `src/lib/data.ts` — add a product object
and it automatically appears in the carousel, the catalog, the sitemap and
`/api/products`.

## Configuration

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_SITE_URL` — canonical origin for metadata / sitemap / OG tags.
- `CONTACT_WEBHOOK_URL` — optional webhook (CRM, Slack, Zapier…) that receives every
  validated inquiry in addition to the server log.

## Behaviour ported from the original site

- Sticky blurred header, mobile frosted-glass menu, scroll shadow
- Animated stat counters (IntersectionObserver, honours `prefers-reduced-motion`)
- Autoplay product carousel (6s, pauses on hover/focus) with dot indicators
- Product details dialog (Escape / backdrop close, focus + scroll lock)
- Client-side contact validation mirrored by the `/api/contact` route handler
- Responsive breakpoints at 640 / 768 / 1024 / 1280 px

## Notes

- Icons use `lucide-react` (FontAwesome CDN removed); the LinkedIn glyph is inline SVG.
- Fonts (Plus Jakarta Sans, Space Grotesk) are self-hosted via `next/font/google`.
- Remote imagery is served through `next/image` with `images.unsplash.com` allowed in
  `next.config.ts`.
