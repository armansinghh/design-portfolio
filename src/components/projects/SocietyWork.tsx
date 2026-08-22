"use client";

import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";

// will replace later
const FEATURED_CLIPS = [
  { src: "/assets/society/clip-1.mp4" },
  { src: "/assets/society/clip-2.mp4" },
  { src: "/assets/society/clip-3.mp4" },
];

// here too
const MORE_REELS = [
  { title: "orientation day recap", href: "https://instagram.com/reel/REPLACE_ME_1" },
  { title: "hackathon promo", href: "https://instagram.com/reel/REPLACE_ME_2" },
  { title: "workshop announcement", href: "https://instagram.com/reel/REPLACE_ME_3" },
  { title: "fest highlights", href: "https://instagram.com/reel/REPLACE_ME_4" },
];

export function SocietyWork() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleEnter = (i: number) => {
    const vid = videoRefs.current[i];
    if (vid) vid.muted = false;
  };

  const handleLeave = (i: number) => {
    const vid = videoRefs.current[i];
    if (vid) vid.muted = true;
  };

  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        id="category-society"
        title="society work"
        subtitle="promo edits for gfg mits"
        description="promotional reels edited for the college media team."
        shapeFill="text-[#f97316]"
        shapeType="burst"
      />

      {/* featured */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURED_CLIPS.map((clip, i) => (
          <div
            key={clip.src}
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={() => handleLeave(i)}
            className="group relative w-full aspect-9/16 rounded-xl overflow-hidden border border-white/10 bg-white/5"
          >
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={clip.src}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />

            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none
                         opacity-100 group-hover:opacity-0 transition-opacity duration-300"
            >
              <span
                className="font-bytesized text-xs uppercase tracking-widest text-[#f0f0f0]
                           bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
              >
                hover for sound
              </span>
            </div>

            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
          </div>
        ))}
      </div>

      {/* remaining reels as a link list */}
      <div className="w-full flex flex-col gap-3">
        <span className="font-bytesized text-xs uppercase tracking-widest text-[#f0f0f0]/50">
          more from gfg mits
        </span>
        <div className="w-full flex flex-col border-t border-white/10">
          {MORE_REELS.map((reel) => (
            
            <a  key={reel.href}
              href={reel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4 border-b border-white/10
                         text-[#f0f0f0]/70 hover:text-[#f0f0f0] transition-colors duration-150"
            >
              <span className="font-medium text-base md:text-lg lowercase">
                {reel.title}
              </span>
              <span
                className="font-bytesized text-xs uppercase tracking-widest text-[#f0f0f0]/40
                           group-hover:text-[#f97316] group-hover:translate-x-1 transition-all duration-150
                           flex items-center gap-2"
              >
                watch on instagram
                <span></span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}