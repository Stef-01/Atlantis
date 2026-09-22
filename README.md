# Atlantis Recovery Centre website

Marketing site for Atlantis Recovery Centre (Atlantis RC), an allied-health centre in Bundall on the Gold Coast. It is a redesign on Everlab's design system: colour tokens, type scale, shapes, and the Lenis + GSAP scroll behaviour. The copy and photography are Atlantis RC's own, taken from atlantisrc.com.au. Design-system notes are in [`PALETTE_UPDATE.md`](PALETTE_UPDATE.md).

Next.js 14 (App Router), React 18, Tailwind CSS 3, TypeScript. Every page is statically generated.

## Run locally

Requires Node 18.17 or newer.

```bash
npm ci
npm run dev
```

Opens at http://localhost:3000. For a production build, run `npm run build`, then `npm start`.

## Where things live

| Path | What it holds |
| --- | --- |
| `content/site.ts` | Contact details, booking link, funding types, services, conditions, team bios, FAQs |
| `content/pages.ts` | Every sub-page (About, Services, each service, condition and technology page, Refer), written as a list of blocks |
| `app/page.tsx` | Home page |
| `app/[slug]/page.tsx` | Renders each entry in `content/pages.ts` at `/<slug>` |
| `app/contact/page.tsx`, `app/team/page.tsx` | Contact and Team pages |
| `components/` | Nav, footer, hero, the block renderers (`Blocks.tsx`) and the scroll effects |
| `tailwind.config.ts`, `app/globals.css` | Design tokens and type scale |
| `public/images/` | Photography and logos |

## Editing content

Most edits go in `content/`, not in the components. The nav and footer menus for services, conditions and technology come from the `services`, `conditions` and `technology` lists in `content/site.ts`. The top-level nav links are in `components/Nav.tsx`, and the footer's Company column is in `components/Footer.tsx`.

To add a page, add an entry to `pages` in `content/pages.ts` with a new `slug`. It is built at `/<slug>` on the next build. Slugs that are not listed return a 404 (`dynamicParams = false`). A page body is an array of blocks: `split`, `features`, `details`, `list`, `cards`, `photo`, `stats` or `video`. The `Block` type at the top of `content/pages.ts` gives the fields for each one.

## Deploy

Vercel detects Next.js without configuration, and no environment variables are needed. `metadataBase` in `app/layout.tsx` is set to `https://atlantisrc.com.au`, so canonical and social-card URLs already point at the real domain.

Vercel's preview deployments are not indexed by search engines, but a production deployment on a `*.vercel.app` address is. Until the site replaces atlantisrc.com.au, keep it on a preview deployment or add `robots: { index: false }` to the metadata.

## Before going live

- **Photo rights.** Every image in `public/images/` was downloaded from atlantisrc.com.au. Confirm Atlantis owns or licenses each one.
- **Team photos.** The `/team` page and the home slider use facility photos in place of headshots (`team[].image`), and Lester Rafanan has no bio yet.
- **"AHPRA registered" chip on `/team`.** Not everyone listed is AHPRA-registered: exercise physiologists are accredited through ESSA, and the list includes the operations lead. Reword the chip or narrow what it covers.
- **Contact form.** `app/contact/page.tsx` posts to a `mailto:` address, which only works if the visitor has a mail app set up. Connect it to a real form endpoint.
- **Contact details.** Confirm the phone, email, fax and address in `content/site.ts`.
