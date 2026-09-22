# Atlantis RC x Everlab — Design System Notes (v3)

## What changed in this version
The site now mirrors Everlab's **actual** extracted system 1:1 (colour, type scale,
shape, layout format and scroll behaviour), populated with Atlantis RC's own copy
and photography pulled from atlantisrc.com.au. The earlier teal-merged palette was
dropped in favour of Everlab's exact tokens, per the "match Everlab exactly" brief.

## Palette (Everlab tokens, applied as-is)

| Token | Value | Role |
|---|---|---|
| white | #ffffff | Page background |
| offwhite | #f4f4f3 | Cards, section surfaces |
| grey | #fafafa | Stats / FAQ sections |
| cream / beige | #faf7f4 / #ece4dc | Available, unused by default |
| black / ink | #000000 / #181818 | Text, primary buttons, footer |
| neutral | #777670 (dark #545454, light #b6b5b5, lighter #dadada) | Secondary text, hairlines |
| accent | #d04926 (light #f17551, hot #ff4d00) | Reserved, not used in UI |
| success | #1db16b | Status only |

Text opacity steps match Everlab: black/64 (body), white/72 (hero chips), white/24 (hairlines on dark).

## Typography
- Display: Everlab uses **Tobias** (licensed). Shipped with **Fraunces** (Google Fonts, variable, opsz + SOFT axes) via next/font.
- Body/UI: Everlab uses **Saans**. Shipped with **Inter**. Section headings are sans 32px / 500 / -0.5px, exactly as Everlab.
- Mono chips: Everlab uses **Saans Mono**. Shipped with **IBM Plex Mono** (uppercase 13–14px).

## Shape
Hero 24px (inset 12px from viewport), cards 20px, small 12px, nav CTA 14px, buttons 50px pill at 54px tall with 18px/35px padding.

## Scroll features (mirroring Everlab's Lenis + GSAP ScrollTrigger + Webflow IX2 stack)
- Lenis smooth scroll synced to GSAP ticker (`components/SmoothScroll.tsx`).
- Reveal-on-scroll fade/lift (`components/Reveal.tsx`).
- Logo/funding marquee 50s linear; alternating-direction pill marquees.
- Sticky stats section that the next section slides over (`StatsSticky`).
- Pinned stacking cards with scrubbed scale-down (`StackingCards`).
- Full-viewport pinned photo band behind sliding content (`TextureBand`).
- Horizontal snap slider with round prev/next buttons (`TeamSlider`).
- Nav is transparent/white over the photo hero and switches to white/black after 60px.

## Photography
All images in `public/images/` were downloaded from atlantisrc.com.au (wp-content uploads).
Confirm Atlantis owns/licenses each photo before going live. `logo-mark.png` is the ARC mark.

## Still to do before shipping
- Replace placeholder testimonials with real, consented patient reviews (AHPRA).
- Team portraits: current images are facility photos as stand-ins; swap for real headshots.
- Wire the contact form to a real endpoint (currently a mailto fallback).
- Confirm phone, email, fax and address.
