import Link from "next/link";
import Reveal from "./Reveal";

const stats = [
  { value: "4", label: "Disciplines under one roof: psychology, physiotherapy, exercise physiology and hydrotherapy." },
  { value: "7 days", label: "Target time to your first phone or face-to-face consult after you reach out." },
  { value: "1 of 1", label: "The only Aquatread underwater treadmill in Australia, on site in Bundall." },
];

// Everlab's grey stats section holds (position: sticky) while the page scrolls on. Only where it fits on one
// screen (the `stack` screen): on a phone it is taller than the display, so pinning it would hide its end.
export default function StatsSticky() {
  return (
    <div className="relative stack:h-[180vh]">
      <section className="stack:sticky top-0 stack:min-h-[100svh] bg-grey flex items-center">
        <div className="container-l pad-x py-24 w-full">
          <Reveal>
            <p className="eyebrow mb-4">Stats</p>
            <h2 className="h2 max-w-[22ch]">From first call to measurable outcomes.</h2>
          </Reveal>
          <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-10 md:gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.value} delay={i * 100} className="hairline pt-6">
                <p className="stat">{s.value}</p>
                <p className="mt-4 text-[15px] text-black/64 max-w-[30ch]">{s.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300} className="mt-14">
            <Link href="/about" className="btn-black">See how we work</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
