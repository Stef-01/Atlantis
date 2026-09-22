import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import VideoEmbed from "./VideoEmbed";
import type { Block } from "@/content/pages";

// Facility photos used when a feature card has no image of its own.
const pool = ["/images/cardio-deck.jpg", "/images/reax-run-console.jpg", "/images/reaxing-light-wall.jpg", "/images/aquatread-session.jpg", "/images/reaxing-wall-in-use.jpg", "/images/arc-dumbbells-closeup.jpg"];

export function SplitBlock({ b }: { b: Extract<Block, { type: "split" }> }) {
  return (
    <section className="section">
      <div className={`container-l pad-x grid gap-10 lg:gap-20 items-center ${b.image ? "lg:grid-cols-2" : "lg:grid-cols-[1fr_1.2fr]"}`}>
        <Reveal>
          {b.eyebrow && <p className="eyebrow mb-4">{b.eyebrow}</p>}
          <h2 className="h2 max-w-[22ch]">{b.heading}</h2>
          <div className="mt-6 grid gap-4 max-w-[54ch]">
            {b.body.map((p) => <p key={p} className="text-[16px] leading-[1.6] text-black/64">{p}</p>)}
          </div>
          {b.cta && <Link href={b.cta.href} className="btn-black mt-8">{b.cta.label}</Link>}
        </Reveal>
        {b.image && (
          <Reveal delay={100} className="relative aspect-[4/3] lg:aspect-[5/4] rounded-card overflow-hidden">
            <Image src={b.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function FeaturesBlock({ b }: { b: Extract<Block, { type: "features" }> }) {
  const cols = b.items.length % 3 === 0 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4";
  return (
    <section className="section bg-offwhite">
      <div className="container-l pad-x">
        <Reveal className="max-w-[44ch]">
          {b.eyebrow && <p className="eyebrow mb-4">{b.eyebrow}</p>}
          <h2 className="h2">{b.heading}</h2>
          {b.intro && <p className="lead mt-4">{b.intro}</p>}
        </Reveal>
        <div className={`mt-12 grid gap-4 ${cols}`}>
          {b.items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 4) * 80} className="card-white overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] m-3 rounded-sm overflow-hidden">
                <Image src={it.image ?? pool[i % pool.length]} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" style={{ objectPosition: it.position }} />
                <span className="absolute left-3 top-3 h-9 w-9 rounded-full bg-white text-black text-[13px] font-medium flex items-center justify-center">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="px-6 pb-7 pt-2">
                <h3 className="h3">{it.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.55] text-black/64">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ListBlock({ b }: { b: Extract<Block, { type: "list" }> }) {
  return (
    <section className="section">
      <div className="container-l pad-x grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
        <Reveal>
          {b.eyebrow && <p className="eyebrow mb-4">{b.eyebrow}</p>}
          <h2 className="h2 max-w-[18ch]">{b.heading}</h2>
          {b.intro && <p className="lead mt-4 max-w-[44ch]">{b.intro}</p>}
        </Reveal>
        <div className="grid gap-8 content-start">
          <Reveal delay={100} className="flex flex-wrap gap-3">
            {b.items.map((it) => <span key={it} className="pill h-12 px-6 text-[16px]">{it}</span>)}
          </Reveal>
          {b.image && (
            <Reveal delay={200} className="relative aspect-[16/10] rounded-card overflow-hidden">
              <Image src={b.image} alt="" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

export function DetailsBlock({ b }: { b: Extract<Block, { type: "details" }> }) {
  return (
    <section className="section">
      <div className="container-l pad-x grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
        <div className="lg:sticky lg:top-28 self-start">
          <Reveal>
            {b.eyebrow && <p className="eyebrow mb-4">{b.eyebrow}</p>}
            <h2 className="h2 max-w-[20ch]">{b.heading}</h2>
            {b.intro && <p className="lead mt-4 max-w-[44ch]">{b.intro}</p>}
          </Reveal>
          {b.image && (
            <Reveal delay={100} className="relative aspect-[4/3] rounded-card overflow-hidden mt-8 hidden lg:block">
              <Image src={b.image} alt="" fill sizes="40vw" className="object-cover" />
            </Reveal>
          )}
        </div>
        <div className="border-t border-black/[0.08]">
          {b.items.map((it, i) => (
            <Reveal key={it.title} delay={Math.min(i, 5) * 60} className="grid grid-cols-[3rem_1fr] gap-4 py-6 border-b border-black/[0.08]">
              <span className="eyebrow pt-1">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="h3">{it.title}</h3>
                {it.body && <p className="mt-2 text-[15px] leading-[1.6] text-black/64 max-w-[60ch]">{it.body}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CardsBlock({ b }: { b: Extract<Block, { type: "cards" }> }) {
  const cols = b.items.length % 3 === 0 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <section className="section bg-white">
      <div className="container-l pad-x">
        <Reveal className="max-w-[46ch]">
          {b.eyebrow && <p className="eyebrow mb-4">{b.eyebrow}</p>}
          <h2 className="h2">{b.heading}</h2>
          {b.intro && <p className="lead mt-4">{b.intro}</p>}
        </Reveal>
        <div className={`mt-12 grid gap-4 ${cols}`}>
          {b.items.map((it, i) => (
            <Reveal key={it.href} delay={(i % 4) * 80}>
              <Link href={it.href} className="group block card overflow-hidden h-full text-black">
                <div className="relative aspect-[4/3] m-3 rounded-sm overflow-hidden">
                  <Image src={it.image} alt={it.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{ objectPosition: it.position }} />
                </div>
                <div className="px-6 pb-6 pt-2 flex flex-col gap-2">
                  <h3 className="h3 flex items-center justify-between gap-3">
                    {it.title}
                    <span className="h-9 w-9 shrink-0 rounded-full bg-white flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1" aria-hidden>→</span>
                  </h3>
                  <p className="text-[15px] text-black/64">{it.body}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PhotoBlock({ b }: { b: Extract<Block, { type: "photo" }> }) {
  return (
    <section className="p-3">
      <Reveal className="relative aspect-[16/9] md:aspect-[21/9] rounded-hero overflow-hidden">
        <Image src={b.image} alt={b.caption || ""} fill sizes="100vw" className="object-cover" />
      </Reveal>
    </section>
  );
}

export function StatsBlock({ b }: { b: Extract<Block, { type: "stats" }> }) {
  return (
    <section className="section bg-grey">
      <div className="container-l pad-x grid md:grid-cols-3 gap-10">
        {b.items.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="hairline pt-6">
            <p className="stat">{s.value}</p>
            <p className="mt-4 text-[15px] text-black/64 max-w-[30ch]">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function VideoBlock({ b }: { b: Extract<Block, { type: "video" }> }) {
  const two = b.videos.length > 1;
  return (
    <section className="section bg-offwhite">
      <div className="container-l pad-x">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-[44ch]">
            {b.eyebrow && <p className="eyebrow mb-4">{b.eyebrow}</p>}
            <h2 className="h2">{b.heading}</h2>
            {b.body && <p className="lead mt-4">{b.body}</p>}
          </div>
        </Reveal>
        <div className={`mt-10 grid gap-4 ${two ? "lg:grid-cols-2" : ""}`}>
          {b.videos.map((v, i) => (
            <Reveal key={v.id} delay={i * 100}>
              <VideoEmbed id={v.id} title={v.title} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RenderBlock({ b }: { b: Block }) {
  switch (b.type) {
    case "split": return <SplitBlock b={b} />;
    case "features": return <FeaturesBlock b={b} />;
    case "list": return <ListBlock b={b} />;
    case "photo": return <PhotoBlock b={b} />;
    case "stats": return <StatsBlock b={b} />;
    case "video": return <VideoBlock b={b} />;
    case "details": return <DetailsBlock b={b} />;
    case "cards": return <CardsBlock b={b} />;
  }
}
