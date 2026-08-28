"use client";

import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";

const CLIPS = [
  { src: "https://res.cloudinary.com/dpwepeiok/video/upload/v1787944159/1_wbopd9.mp4" },
  { src: "https://res.cloudinary.com/dpwepeiok/video/upload/v1787944158/2_n3dsrz.mp4" },
  { src: "https://res.cloudinary.com/dpwepeiok/video/upload/v1787944163/3_ztkncs.mp4" },
];

export function MotionGraphics() {
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
    <div className="flex flex-col gap-8">
      <SectionHeading
        id="category-motion"
        title="motion graphics and vid edits"
        subtitle="bringing designs to life"
        description="reels, transitions, whatever needed movement to land right."
        shapeFill="text-[#4b68ff]"
        shapeType="blob"
      />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CLIPS.map((clip, i) => (
          <div
            key={clip.src}
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={() => handleLeave(i)}
            className="group relative w-full aspect-3/4 rounded-xl overflow-hidden border border-white/10 bg-white/5"
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

            {/* hover-for-sound hint */}
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

      {/* instagram cta */}
      
      <a  href="https://instagram.com/hefy.ae"
        target="_blank"
        rel="noopener noreferrer"
        className="self-center mt-2 flex items-center gap-3 px-6 py-3 rounded-full
                   bg-white/5 border border-white/15 text-[#f0f0f0]/80
                   font-bytesized text-sm uppercase tracking-widest
                   transition-all duration-200 hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5"
      >
        more on instagram
        <span className="text-[#4b68ff]"></span>
      </a>
    </div>
  );
} 