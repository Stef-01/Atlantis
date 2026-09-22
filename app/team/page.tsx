import type { Metadata } from "next";
import Image from "next/image";
import PhotoHero from "@/components/PhotoHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { team } from "@/content/site";

export const metadata: Metadata = { title: "Team", description: "Meet the psychologists, physiotherapists and exercise physiologists behind Atlantis RC." };



export default function Team() {
  return (
    <>
      <PhotoHero
        image="/images/team-sport.jpg"
        eyebrow="The team"
        title="Recovery is a team sport."
        sub="Real clinicians behind every plan. Psychologists, physiotherapists and exercise physiologists working as one."
        primary={{ label: "Get in touch", href: "/contact" }}
        chips={["AHPRA registered", "Multidisciplinary", "Bundall"]}
      />
      <section className="section">
        <div className="container-l pad-x grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 80} className="card overflow-hidden flex flex-col">
              <div className="relative aspect-[4/5] m-3 rounded-sm overflow-hidden">
                <Image src={m.image} alt={m.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="px-6 pb-7 pt-1">
                <p className="h3">{m.name}</p>
                <p className="text-[14px] text-black/64 mt-1">{m.role}</p>
                {m.bio.map((para) => <p key={para.slice(0, 40)} className="text-[15px] leading-[1.55] text-black/64 mt-4">{para}</p>)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="p-3">
        <Reveal className="relative aspect-[16/9] md:aspect-[21/9] rounded-hero overflow-hidden">
          <Image src="/images/team-photo.jpg" alt="The Atlantis Recovery Centre team" fill sizes="100vw" className="object-cover" />
        </Reveal>
      </section>
      <CTA heading="Work with a team that moves with you." />
    </>
  );
}
