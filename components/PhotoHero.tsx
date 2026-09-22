import Image from "next/image";
import Link from "next/link";

type Action = { label: string; href: string; external?: boolean };
type Props = {
  image: string;
  eyebrow?: string;
  title: string;
  sub?: string;
  primary?: Action;
  secondary?: Action;
  chips?: string[];
  tall?: boolean;
  priority?: boolean;
};

// Everlab hero: inset 12px, 24px radius, 60% black overlay, white serif headline, pill CTAs, mono chips.
// On phones the spacing is tighter and the two CTAs share one row, so the whole hero fits the first screen.
// Its entrance is CSS (.rise), not <Reveal>, so it plays at first paint without waiting for JavaScript.
export default function PhotoHero({ image, eyebrow, title, sub, primary, secondary, chips, tall = false, priority = true }: Props) {
  const heightClass = tall ? "min-h-[calc(100svh-24px)]" : "min-h-[560px] md:min-h-[650px]";
  return (
    <section className="-mt-[74px] md:-mt-[86px] p-3">
      <div className={`relative ${heightClass} rounded-hero overflow-hidden flex flex-col justify-end`}>
        <Image src={image} alt="" fill priority={priority} sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 pb-12 sm:pt-32 sm:pb-16 text-white">
          {eyebrow && (
            <div className="rise-fade"><p className="chip text-white/72 mb-5 sm:mb-6">{eyebrow}</p></div>
          )}
          <h1 className="h1 max-w-[16ch] mx-auto text-white rise">{title}</h1>
          {sub && (
            <p className="mt-5 sm:mt-6 max-w-[52ch] text-[16px] md:text-[18px] leading-[1.45] text-white/80 rise [--rise-delay:100ms]">{sub}</p>
          )}
          {(primary || secondary) && (
            <div className="mt-8 sm:mt-9 flex w-full max-w-[22rem] flex-wrap justify-center gap-3 sm:w-auto sm:max-w-none rise [--rise-delay:200ms]">
              {primary && <HeroButton {...primary} className="btn-white" />}
              {secondary && <HeroButton {...secondary} className="btn-outline-light" />}
            </div>
          )}
        </div>
        {chips && chips.length > 0 && (
          <div className="relative z-10 px-6 pb-6 sm:pb-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/72">
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

// Phones: equal shares of one row (they stack full width only if they can't fit), with 20px side padding.
function HeroButton({ label, href, external, className }: Action & { className: string }) {
  const cls = `${className} flex-1 basis-0 px-5 sm:flex-none sm:basis-auto sm:px-[35px]`;
  // Links off the site (the booking system) open in a new tab, like every other booking button.
  return external || /^https?:/.test(href) ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>{label}</a>
  ) : (
    <Link href={href} className={cls}>{label}</Link>
  );
}
