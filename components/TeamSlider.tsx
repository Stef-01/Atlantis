"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { team } from "@/content/site";

// Everlab's experts slider: horizontal cards with round prev/next buttons.
export default function TeamSlider() {
  const track = useRef<HTMLDivElement>(null);
  const by = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  return (
    <section className="section overflow-hidden">
      <div className="container-l pad-x flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-[44ch]">
          <p className="eyebrow mb-4">The team</p>
          <h2 className="h2">Real clinicians behind every plan.</h2>
          <p className="lead mt-4">Psychologists, physiotherapists and exercise physiologists working as one team, with the Aquatread and REAXING systems at their disposal.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/team" className="btn-black">Meet the team</Link>
          <div className="hidden md:flex gap-2">
            <button onClick={() => by(-1)} aria-label="Previous" className="h-11 w-11 rounded-full border border-black/10 bg-white hover:bg-offwhite transition-colors">←</button>
            <button onClick={() => by(1)} aria-label="Next" className="h-11 w-11 rounded-full border border-black/10 bg-white hover:bg-offwhite transition-colors">→</button>
          </div>
        </div>
      </div>
      <div ref={track} tabIndex={0} role="region" aria-label="Team members" className="mt-12 flex gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-smooth px-4 sm:px-6 lg:px-[max(44px,calc((100vw-1280px)/2))] scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-[max(44px,calc((100vw-1280px)/2))] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
        {team.map((m) => (
          <article key={m.name} className="snap-start shrink-0 w-[280px] md:w-[320px] card overflow-hidden">
            <div className="relative aspect-[4/5] m-3 rounded-sm overflow-hidden">
              <Image src={m.image} alt={m.name} fill sizes="320px" className="object-cover" />
            </div>
            <div className="px-6 pb-6 pt-1">
              <p className="font-medium text-[17px]">{m.name}</p>
              <p className="text-[14px] text-black/64 mt-1">{m.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
