import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { services } from "@/content/site";

export default function ServiceCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((s, i) => (
        <Reveal key={s.slug} delay={i * 80}>
          <Link href={`/${s.slug}`} className="group block card overflow-hidden h-full text-black">
            <div className="relative aspect-[4/3] m-3 rounded-sm overflow-hidden">
              <Image src={s.image} alt={s.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
            </div>
            <div className="px-6 pb-6 pt-2 flex flex-col gap-2">
              <h3 className="h3 flex items-center justify-between">
                {s.title}
                <span className="h-9 w-9 rounded-full bg-white flex items-center justify-center text-black transition-transform duration-500 group-hover:translate-x-1" aria-hidden>→</span>
              </h3>
              <p className="text-[15px] text-black/64">{s.blurb}</p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
