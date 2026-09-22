import type { ReactNode } from "react";

type Props = { children: ReactNode; speed?: "slow" | "fast"; reverse?: boolean; className?: string; gap?: string };

// Duplicated track, translated -50% on loop, exactly like Everlab's .marquee-track / .marquee-track-alt.
export default function Marquee({ children, speed = "slow", reverse = false, className = "", gap = "gap-3" }: Props) {
  const anim = reverse ? "animate-marquee-alt" : speed === "fast" ? "animate-marquee-fast" : "animate-marquee";
  return (
    <div className={`overflow-hidden marquee-mask ${className}`}>
      <div className={`flex w-max ${gap} ${anim} will-change-transform`}>
        <div className={`flex shrink-0 ${gap} pr-3`}>{children}</div>
        <div className={`flex shrink-0 ${gap} pr-3`} aria-hidden>{children}</div>
      </div>
    </div>
  );
}
