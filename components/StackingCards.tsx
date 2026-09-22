"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type StackCard = { step: string; title: string; body: string; points: string[]; image: string };

// Everlab's "feature-grid-new is-sticky" pattern: each card sticks at the top while the next one
// slides over it; earlier cards scale down slightly via a scrubbed ScrollTrigger.
export default function StackingCards({ cards }: { cards: StackCard[] }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".stack-card");
      items.forEach((card, i) => {
        if (i === items.length - 1) return;
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.6,
          ease: "none",
          scrollTrigger: { trigger: items[i + 1], start: "top bottom", end: "top top+=96", scrub: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="grid gap-4">
      {cards.map((c, i) => (
        <article
          key={c.step}
          className="stack-card sticky bg-offwhite rounded-card overflow-hidden grid md:grid-cols-2 min-h-[520px] md:min-h-[560px] origin-top will-change-transform"
          style={{ top: `calc(96px + ${i * 12}px)` }}
        >
          <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-between">
            <div>
              <p className="eyebrow mb-8">{c.step}</p>
              <h3 className="h2 max-w-[18ch]">{c.title}</h3>
              <p className="lead mt-5 max-w-[46ch]">{c.body}</p>
            </div>
            <ul className="mt-10 grid gap-3">
              {c.points.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] text-black/64">
                  <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-black shrink-0" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[260px] md:min-h-0 m-3 md:ml-0 rounded-md overflow-hidden">
            <Image src={c.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        </article>
      ))}
    </div>
  );
}
