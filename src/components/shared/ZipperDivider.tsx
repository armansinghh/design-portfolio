"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useVelocity,
  useSpring,
} from "framer-motion";

const TAB_WIDTH = 56;

export function ZipperDivider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () =>
      setTrackWidth(el.getBoundingClientRect().width - TAB_WIDTH);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const x = useMotionValue(0);
  const openPercent = useTransform(x, (v) =>
    trackWidth > 0 ? (v / trackWidth) * 100 : 0,
  );
  const closedClip = useTransform(openPercent, (p) => `inset(0 0 0 ${p}%)`);
  const openClip = useTransform(openPercent, (p) => `inset(0 ${100 - p}% 0 0)`);
  const teethPattern =
    "repeating-linear-gradient(90deg, #444 0px, #444 4px, transparent 4px, transparent 8px)";

  const xVelocity = useVelocity(x);
  const rawRotation = useTransform(xVelocity, [-800, 800], [35, -35]);
  const pullRotation = useSpring(rawRotation, { stiffness: 400, damping: 25 });

  return (
    <div
      ref={trackRef}
      className="relative w-full h-20 bg-[#161616] border-y border-white/10 select-none z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      <motion.div
        className="absolute inset-0 bg-[#b72b2b] flex flex-col justify-between overflow-hidden"
        style={{ clipPath: openClip }}
      >
        {/* top teeth */}
        <div
          className="w-full h-3 border-b-2 border-black/50 shadow-inner"
          style={{ background: teethPattern }}
        />

        {/*  hidden message */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="whitespace-nowrap font-bytesized text-white/90 text-sm md:text-base uppercase tracking-[0.4em] font-bold drop-shadow-md">
            SOME RANDOM TEXT // AHHHHHH
          </div>
        </div>

        {/* bottom teeth */}
        <div
          className="w-full h-3 border-t-2 border-black/50 shadow-inner"
          style={{ background: teethPattern, backgroundPosition: "4px 0" }}
        />
      </motion.div>

      {/* closed state */}
      <motion.div
        className="absolute inset-0 bg-[#161616] flex items-center z-10 overflow-hidden"
        style={{ clipPath: closedClip }}
      >
        {/* The central interlocking track */}
        <div className="w-full h-6 flex flex-col shadow-[inset_0_5px_15px_rgba(0,0,0,0.8)]">
          {/* top closed teeth */}
          <div className="w-full h-3" style={{ background: teethPattern }} />
          {/* bottom closed teeth */}
          <div
            className="w-full h-3"
            style={{ background: teethPattern, backgroundPosition: "4px 0" }}
          />
          {/* split line down the middle */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-px bg-black/80"></div>
        </div>
      </motion.div>

      {/* slider wrapper */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: trackWidth }}
        dragElastic={0.05}
        dragMomentum={false}
        style={{ x }}
        className="absolute top-3 left-0 z-40 flex flex-col items-center cursor-grab active:cursor-grabbing w-14"
      >
        <div className="relative w-12 h-14 bg-[#f0f0f0] border-2 border-[#161616] rounded-sm shadow-[4px_4px_0_#161616] flex items-center justify-center overflow-hidden hover:bg-white transition-colors z-20">
          <div
            className="w-full h-full absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, #161616 2px, #161616 4px)",
            }}
          ></div>
        </div>

        {/* zipper pull tab */}
        <motion.div
          style={{ rotate: pullRotation }}
          className="relative w-5 h-12 bg-[#f0f0f0] border-2 border-[#161616] rounded-b-full shadow-[4px_4px_0_#161616] -mt-2 z-10 origin-top flex flex-col items-center justify-between py-2 hover:bg-white transition-colors"
        >
          <div className="w-1.5 h-3 bg-[#161616] rounded-full"></div>
          <div className="w-1.5 h-3 bg-[#161616] rounded-full"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}
