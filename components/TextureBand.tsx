import Image from "next/image";
import Reveal from "./Reveal";

// Everlab's "section_fixed-texture": a full-viewport image pinned behind the page (sticky, z-index -1)
// while the following white section slides up over it.
export default function TextureBand({ image, quote, attribution }: { image: string; quote: string; attribution?: string }) {
  return (
    <div className="relative h-[160vh]">
      <div className="sticky top-0 h-screen -z-10 p-3">
        <div className="relative h-full rounded-hero overflow-hidden">
          <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <Reveal>
              <p className="h2-serif text-white max-w-[20ch]">{quote}</p>
              {attribution && <p className="chip text-white/72 mt-8 justify-center">{attribution}</p>}
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
