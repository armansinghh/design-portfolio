"use client";

import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const ASSETS = [
  {
    name: "player sprite",
    src: "/assets/games/ember.png",
    timelapse: "https://res.cloudinary.com/dpwepeiok/video/upload/v1787361419/timelapse-ember_aeneus.mp4",
  },
  {
    name: "platform",
    src: "/assets/games/tiles.png",
    timelapse: "https://res.cloudinary.com/dpwepeiok/video/upload/v1787361410/timelapse-tiles_jzknqj.mp4",
  },
  {
    name: "lantern sprite",
    src: "/assets/games/lantern.png",
    timelapse: "https://res.cloudinary.com/dpwepeiok/video/upload/v1787361417/timelapse-lantern_galw2g.mp4",
  },
  {
    name: "bg parallax layers",
    src: "/assets/games/bg.png",
    timelapse: "https://res.cloudinary.com/dpwepeiok/video/upload/v1787361410/timelapse-bg_xfl6hp.mp4",
  },
];

export function GameAssets() {
  const [selected, setSelected] = useState(0);
  const active = ASSETS[selected];

  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        id="category-games"
        title="game assets"
        subtitle="2D pixel props and environments"
        description="sprites, platforms, and parallax layers  built pixel by pixel."
        shapeFill="text-[#dfa127]"
        shapeType="dpad"
      />

      {/* asset grid  click to select */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        {ASSETS.map((asset, i) => (
          <button
            key={asset.name}
            type="button"
            onClick={() => setSelected(i)}
            className={`relative w-full aspect-square rounded-xl overflow-hidden
                       border border-white/10 flex items-center justify-center p-6
                       transition-opacity duration-200
                       ${i === selected ? "bg-white/10" : "bg-white/5 opacity-60 hover:opacity-100"}`}
          >
            <img
              src={asset.src}
              alt={`${asset.name}  pixel game asset by Hefy`}
              className="w-full h-full object-contain"
              style={{ imageRendering: "pixelated" }}
              loading="lazy"
            />
            <span
              className="absolute bottom-2 left-1/2 -translate-x-1/2 font-bytesized text-[10px] md:text-xs
                         uppercase tracking-widest text-[#f0f0f0]/70 bg-black/50 backdrop-blur-sm
                         px-3 py-1 rounded-full border border-white/10 whitespace-nowrap"
            >
              {asset.name}
            </span>
          </button>
        ))}
      </div>

      {/* timelapse  swaps based on selection */}
      <div className="w-full flex flex-col gap-3">
        <span className="font-bytesized text-xs uppercase tracking-widest text-[#f0f0f0]/50">
          process {active.name} timelapse
        </span>
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5">
          <video
            key={active.timelapse}
            src={active.timelapse}
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </div>
  );
}
