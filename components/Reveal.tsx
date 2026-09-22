"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = { children: ReactNode; className?: string; delay?: number; fade?: boolean; as?: "div" | "section" | "li" | "span" };

export default function Reveal({ children, className = "", delay = 0, fade = false, as = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Above-the-fold content shows immediately (also covers background tabs where IO never fires).
    if (el.getBoundingClientRect().top < window.innerHeight) {
      requestAnimationFrame(() => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as as any;
  return (
    <Tag ref={ref} className={`${fade ? "reveal-fade" : "reveal"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
