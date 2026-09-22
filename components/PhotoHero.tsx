import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

type Props = {
  image: string;
  eyebrow?: string;
  title: string;
  sub?: string;
  primary?: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string };
  chips?: string[];
  tall?: boolean;
  priority?: boolean;
};

// Everlab hero: inset 12px, 24px radius, 60% black overlay, white serif headline, pill CTAs, mono chips.
export default function PhotoHero({ image, eyebrow, title, sub, primary, secondary, chips, tall = false, priority = true }: Props) {
  const heightClass = tall ? "min-h-[calc(100svh-24px)]" : "min-h-[560px] md:min-h-[650px]";
  return (
    <section className="-mt-[74px] md:-mt-[86px] p-3">
      <div className={`relative ${heightClass} rounded-hero overflow-hidden flex flex-col justify-end`}>
        <Image src={image} alt="" fill priority={priority} sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 text-white">
          {eyebrow && (
            <Reveal fade><p className="chip text-white/72 mb-6">{eyebrow}</p></Reveal>
          )}
          <Reveal><h1 className="h1 max-w-[16ch] mx-auto text-white">{title}</h1></Reveal>
          {sub && (
            <Reveal delay={100}><p className="mt-6 max-w-[52ch] text-[16px] md:text-[18px] leading-[1.45] text-white/80">{sub}</p></Reveal>
          )}
          {(primary || secondary) && (
            <Reveal delay={200} className="mt-9 flex flex-wrap items-center justify-center gap-3">
              {primary && (primary.external ? (
                <a href={primary.href} target="_blank" rel="noreferrer" className="btn-white">{primary.label}</a>
              ) : (
                <Link href={primary.href} className="btn-white">{primary.label}</Link>
              ))}
              {secondary && <Link href={secondary.href} className="btn-outline-light">{secondary.label}</Link>}
            </Reveal>
          )}
        </div>
        {chips && chips.length > 0 && (
          <div className="relative z-10 px-6 pb-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/72">
            {chips.map((c, i) => (
              <span key={c} className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-white/72" aria-hidden />
                {c}
                {i < chips.length - 1 && <span className="hidden md:inline-block w-px h-4 bg-white/24 ml-8" aria-hidden />}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
