import Marquee from "./Marquee";
import { funding } from "@/content/site";

export default function FundingMarquee({ label = "Funding accepted" }: { label?: string }) {
  return (
    <section className="py-8 md:py-10">
      <div className="container-l pad-x flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
        <p className="eyebrow shrink-0">{label}</p>
        <Marquee gap="gap-12" className="flex-1">
          {funding.map((f) => (
            <span key={f} className="text-[22px] md:text-[26px] font-medium tracking-[-0.5px] text-black/40 whitespace-nowrap">{f}</span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
