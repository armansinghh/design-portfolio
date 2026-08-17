"use client";

import { motion } from "framer-motion";
import { Hero3D } from "./Hero3D";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <Hero3D />
      {/* 
        MAIN WRAPPER 
        we use scale to shrink the entire locked composition for smaller screens
      */}
      <div className="relative -translate-y-4 flex flex-col items-center select-none z-10 origin-center scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-90 xl:scale-100">
        {/* horizontal lines */}
        <div className="absolute top-8 -left-12 -right-14 border-t border-dashed border-white/20"></div>
        <div className="absolute bottom-4 -left-12 -right-14 border-t border-dashed border-white/20"></div>
        <div className="absolute -bottom-3 -left-12 -right-14 border-t border-dashed border-white/20"></div>
        <div className="absolute -bottom-12 left-34 right-34 border-t border-dashed border-white/20"></div>

        {/* vertical lines */}
        <div className="absolute left-1 -top-8 -bottom-16 border-l border-dashed border-white/20"></div>
        <div className="absolute -left-10 -top-8 -bottom-16 border-l border-dashed border-white/20"></div>
        <div className="absolute right-0 -top-8 -bottom-16 border-l border-dashed border-white/20"></div>
        <div className="absolute -right-12 -top-8 -bottom-16 border-l border-dashed border-white/20"></div>
        <div className="absolute left-38 top-36 -bottom-16 border-l border-dashed border-white/20"></div>
        <div className="absolute right-38 top-36 -bottom-16 border-l border-dashed border-white/20"></div>

        <span className="absolute top-3 -right-4 text-white/30 text-xs font-sans">
          ©
        </span>

        <h1 className="font-erica relative z-10 text-[10rem] text-(--color-primary) uppercase leading-none tracking-tight text-shadow-">
          hefy
        </h1>

        <div className="absolute -top-16 -left-26 z-20 flex items-center justify-center spin-box">
          <svg
            viewBox="0 0 100 100"
            className="w-48 text-yellow-400"
            fill="currentColor"
          >
            <path d="M50 5 L58 35 L85 15 L70 45 L95 50 L70 55 L85 85 L58 65 L50 95 L42 65 L15 85 L30 55 L5 50 L30 45 L15 15 L42 35 Z" />
          </svg>
        </div>

        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20">
          <span className="font-sans text-(--color-primary) text-sm tracking-widest whitespace-nowrap opacity-55">
            .ae & .ps
          </span>
        </div>

        <div className="absolute -bottom-2 -right-12 bg-[#b72b2b] text-(--color-primary) px-3 py-1 font-bytesized text-sm uppercase tracking-widest rotate-3 shadow-lg z-20 hover-effect">
          created by arman
        </div>
      </div>

      {/* reminder to scroll :) */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 1,
              staggerChildren: 0.1,
            },
          },
        }}
        className="absolute bottom-8 w-full flex items-center justify-between px-8 md:px-16 z-30 text-(--color-primary)/50 font-sans uppercase"
      >
        <motion.span
          className="text-2xl"
          variants={{
            hidden: { scale: 0, rotate: -180, opacity: 0 },
            visible: {
              scale: 1,
              rotate: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          +
        </motion.span>

        <motion.span
          className="text-2xl hidden sm:block"
          variants={{
            hidden: { scale: 0, rotate: -180, opacity: 0 },
            visible: {
              scale: 1,
              rotate: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          +
        </motion.span>

        <div className="text-sm tracking-wider flex gap-2">
          {["SCROLL", "TO", "EXPLORE"].map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { scale: 0.7, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.span
          className="text-2xl hidden sm:block"
          variants={{
            hidden: { scale: 0, rotate: -180, opacity: 0 },
            visible: {
              scale: 1,
              rotate: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          +
        </motion.span>

        <motion.span
          className="text-2xl"
          variants={{
            hidden: { scale: 0, rotate: -180, opacity: 0 },
            visible: {
              scale: 1,
              rotate: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          +
        </motion.span>
      </motion.div>
    </section>
  );
}
