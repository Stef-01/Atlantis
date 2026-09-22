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

## Phones

The layout is tuned for iPhone first, and a few rules hold it together:

- **Pinned sections only where they fit.** The `stack` screen in `tailwind.config.ts` (at least 768px wide and 720px tall) decides where the "How it works" cards stack and where the stats section pins. Below that size they are plain sections, because a pinned panel taller than the screen hides its own bottom. `StackingCards.tsx` repeats the same media query for its GSAP tweens, so change both together.
- **44pt tap targets.** Links in the footer, the mobile menu and the contact details have 44px rows below the `lg` breakpoint and keep the compact desktop spacing above it.
- **Form fields use 16px text.** iOS Safari zooms the page into any smaller field when it is tapped.
- **Hero entrance is CSS** (`.rise` in `globals.css`), not `<Reveal>`, so the headline shows at first paint rather than after JavaScript loads.
- **Brand teal in Display P3.** Wide-gamut screens get a richer version of `#60d0d8` at the same lightness. The value appears in `.nav-glass` and `.brand-teal` in `globals.css` and in `TEAL` in `components/Nav.tsx`, which also sets Safari's `theme-color` so the browser bars match the nav.
- **iOS accessibility settings.** Reduce Transparency makes the nav solid, Increase Contrast darkens the grey text, and Reduce Motion turns off the animations. The site stays light when the phone is in Dark Mode.

## Deploy

Vercel detects Next.js without configuration, and no environment variables are needed. `metadataBase` in `app/layout.tsx` is set to `https://atlantisrc.com.au`, so canonical and social-card URLs already point at the real domain.

Vercel's preview deployments are not indexed by search engines, but a production deployment on a `*.vercel.app` address is. Until the site replaces atlantisrc.com.au, keep it on a preview deployment or add `robots: { index: false }` to the metadata.

## Before going live

- **Photo rights.** Every image in `public/images/` was downloaded from atlantisrc.com.au. Confirm Atlantis owns or licenses each one, and that anyone shown as a client in a session photo has agreed to appear on the site.
- **Team headshots.** `public/images/team/` holds Atlantis's own profile photos from atlantisrc.com.au/team, cropped to 4:5. All eight share one backdrop and look AI-styled (Atlantis's media library also holds a `ChatGPT-Image` version of Bart's), so have each person confirm they're happy with their likeness.
- **Yuri's surname.** Atlantis's team page says Dr Yuri Lima, but its Refer page and the file title of his photo say Yuri Lopez. This site follows the team page.
- **"AHPRA registered" chip on `/team`.** Not everyone listed is AHPRA-registered: exercise physiologists are accredited through ESSA, and the list includes the operations lead. Reword the chip or narrow what it covers.
- **Contact form.** `app/contact/page.tsx` posts to a `mailto:` address, which only works if the visitor has a mail app set up. Connect it to a real form endpoint.
- **Contact details.** Confirm the phone, email, fax and address in `content/site.ts`. The contact block on atlantisrc.com.au shows info@atlantisrc.com.au, but this site uses admin@atlantisrc.com.au.
