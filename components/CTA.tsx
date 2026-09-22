import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/content/site";

export default function CTA({ heading = "Ready when you are.", body = "Leave your details for a phone or face-to-face consult within 7 days." }: { heading?: string; body?: string }) {
  return (
    <section className="p-3">
      <Reveal className="bg-black text-offwhite rounded-hero px-6 py-24 md:py-32 text-center">
        <div className="relative">
        <p className="chip text-white/72 justify-center mb-6">Get started</p>
        <h2 className="h2-serif max-w-[16ch] mx-auto">{heading}</h2>
        <p className="mt-6 text-white/72 max-w-[44ch] mx-auto">{body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-white">Get in touch</Link>
          <a href={site.booking} target="_blank" rel="noreferrer" className="btn-outline-light">Book online</a>
        </div>
        </div>
      </Reveal>
    </section>
  );
}
