# Texas Scratch Kitchen

Premium artisan bakery & market website for **Texas Scratch Kitchen** — Menard, Texas.

> *Freshly Baked. Locally Loved.*

## Tech Stack

- **SvelteKit 2** + **Svelte 5** (runes)
- **TypeScript** (strict mode)
- **Tailwind CSS 3** + `tailwindcss-animate`
- **Lucide** icons (`lucide-svelte`)
- Custom scroll-reveal & parallax actions (Motion-style, zero extra deps)
- shadcn-style UI primitives (Button, Badge, Card, etc.)
- Fully SEO optimized: meta tags, Open Graph, Twitter cards, JSON-LD **LocalBusiness / Bakery** schema, sitemap & robots
- Prerendered static output — deploys to **Vercel** or **Cloudflare Pages** as-is

## Getting Started

```bash
npm install
npm run dev        # local dev server
npm run build      # production build
npm run preview    # preview the production build
npm run check      # type-check
```

## Project Structure

```
src/
├─ app.css                     # design tokens, base styles, reveal utilities
├─ app.html                    # document shell, font preloads
├─ lib/
│  ├─ actions/                 # inview (scroll reveal), parallax
│  ├─ components/
│  │  ├─ ui/                   # Button, Badge, Stars, ProductCard, SectionHeading
│  │  ├─ home/                 # Hero, Marquee, Featured, AboutPreview, ReviewsStrip, Location
│  │  ├─ Navbar / Footer / Seo / PageHero / CTASection / ReviewCard
│  ├─ config/
│  │  ├─ site.ts               # single source of truth: NAP, hours, social
│  │  └─ schema.ts             # JSON-LD structured data
│  ├─ data/                    # menu, reviews, gallery, featured
│  └─ utils.ts                 # cn() class merge
└─ routes/
   ├─ +layout.svelte           # nav, footer, global schema, skip link
   ├─ +page.svelte             # Home
   ├─ about / menu / reviews / gallery / contact
   ├─ +error.svelte
   └─ sitemap.xml/+server.ts
```

## Customization

- **Business info** — edit [`src/lib/config/site.ts`](src/lib/config/site.ts) (address, phone, hours, social, geo).
- **Menu / Reviews / Gallery** — edit the typed data files in [`src/lib/data/`](src/lib/data/).
- **Brand colors / fonts** — [`tailwind.config.ts`](tailwind.config.ts) + [`src/app.css`](src/app.css).
- **Contact form** — [`src/routes/contact/+page.svelte`](src/routes/contact/+page.svelte) uses a demo handler; wire `handleSubmit` to a form backend (Formspree, Resend, Web3Forms, etc.).

## Notes

- Imagery uses Unsplash CDN URLs for the demo. Swap for your own optimized photography (and host in `static/`) before launch.
- Update `site.url`, `site.geo`, and the Google Maps embed query in `site.ts` to your verified business listing.

## Deploy

Uses `@sveltejs/adapter-auto` — zero-config on Vercel & Cloudflare Pages. For a specific target, swap in `@sveltejs/adapter-vercel` or `@sveltejs/adapter-cloudflare`.
