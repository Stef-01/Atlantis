import Marquee from "./Marquee";
import { pillRows } from "@/content/site";

export default function PillMarquee({ dark = false }: { dark?: boolean }) {
  return (
    <div className="grid gap-3">
      {pillRows.map((row, i) => (
        <Marquee key={i} speed="fast" reverse={i % 2 === 1}>
          {row.map((p) => (
            <span key={p} className={dark ? "pill bg-white/10 border-white/10 text-white" : "pill"}>{p}</span>
          ))}
        </Marquee>
      ))}
    </div>
  );
}
