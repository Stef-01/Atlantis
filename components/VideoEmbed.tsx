"use client";

import { useState } from "react";
import Image from "next/image";

// Click-to-play YouTube embed (privacy-enhanced domain). Shows the poster until tapped so no
// third-party script loads on page view. Video ids come from atlantisrc.com.au embeds.
export default function VideoEmbed({ id, title, className = "" }: { id: string; title: string; className?: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div className={`relative aspect-video rounded-card overflow-hidden bg-black ${className}`}>
      {play ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlay(true)} className="group absolute inset-0 w-full text-left" aria-label={`Play video: ${title}`}>
          <Image src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" fill unoptimized sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
          <span className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-lg">
            <span className="ml-1 border-y-[10px] border-y-transparent border-l-[16px] border-l-black" aria-hidden />
          </span>
          <span className="absolute left-5 bottom-5 right-5 text-white">
            <span className="chip text-white/72 block mb-1">Video</span>
            <span className="text-[15px] md:text-[16px] font-medium">{title}</span>
          </span>
        </button>
      )}
    </div>
  );
}
