"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site, services, conditions, technology } from "@/content/site";

const primary = [
  { label: "Services", href: "/services" },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Refer", href: "/refer" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const light = !scrolled && !open; // white text over the photo hero, black once scrolled

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        light ? "text-white" : "text-black bg-atlantis/95 backdrop-blur-md border-b border-black/10"
      }`}
    >
      <div className="max-w-wide mx-auto pl-6 pr-3 h-[74px] md:h-[86px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Atlantis Recovery Centre home">
          <span className="relative h-10 w-10 md:h-11 md:w-11">
            <Image src="/images/logo-emblem.png" alt="" fill sizes="44px" priority className="object-contain" />
          </span>
          <span className="font-medium text-[17px] tracking-[-0.01em]">Atlantis RC</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {primary.map((l) => (
            <Link key={l.href} href={l.href} className={`text-[16px] transition-opacity hover:opacity-70 ${pathname === l.href ? "opacity-100" : "opacity-90"}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <Link href="/contact" className="text-[16px] hover:opacity-70 transition-opacity">Contact</Link>
          <a href={site.booking} target="_blank" rel="noreferrer" className={`btn-nav ${light ? "bg-white text-black hover:bg-offwhite" : "bg-black text-offwhite hover:bg-neutral-darker"}`}>
            Book a service
          </a>
        </div>

        <button
          className={`lg:hidden h-11 w-11 rounded-full flex items-center justify-center ${light ? "bg-white/10" : "bg-black/10"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative w-5 h-3 block">
            <span className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-transform ${open ? "translate-y-[5.5px] rotate-45" : ""}`} />
            <span className={`absolute left-0 bottom-0 h-[1.5px] w-5 bg-current transition-transform ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white text-black border-t border-black/[0.06] max-h-[calc(100vh-74px)] overflow-y-auto">
          <div className="px-6 py-6 grid gap-8">
            <div className="grid gap-3">
              {primary.map((l) => (
                <Link key={l.href} href={l.href} className="text-[28px] font-medium tracking-[-0.5px]">{l.label}</Link>
              ))}
              <Link href="/contact" className="text-[28px] font-medium tracking-[-0.5px]">Contact</Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="eyebrow mb-3">ARC's technology</p>
                {technology.map((t) => (
                  <Link key={t.slug} href={`/${t.slug}`} className="block py-1 text-[15px] text-black/64">{t.title}</Link>
                ))}
                <p className="eyebrow mb-3 mt-6">Services</p>
                {services.map((s) => (
                  <Link key={s.slug} href={`/${s.slug}`} className="block py-1 text-[15px] text-black/64">{s.title}</Link>
                ))}
              </div>
              <div>
                <p className="eyebrow mb-3">What we treat</p>
                {conditions.map((c) => (
                  <Link key={c.slug} href={`/${c.slug}`} className="block py-1 text-[15px] text-black/64">{c.title}</Link>
                ))}
              </div>
            </div>
            <a href={site.booking} target="_blank" rel="noreferrer" className="btn-black w-full">Book a service</a>
          </div>
        </div>
      )}
    </header>
  );
}
