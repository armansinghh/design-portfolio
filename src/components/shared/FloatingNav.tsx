"use client";

import { useState, useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  Variants,
} from "framer-motion";

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const navRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      const scrollBarGap =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollBarGap > 0)
        document.body.style.paddingRight = `${scrollBarGap}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node))
        setIsOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  const navContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 5,
        staggerChildren: reduceMotion ? 0.1 : 0.3,
      },
    },
  };

  const navItemVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
      }
    : {
        hidden: { y: 12, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", bounce: 0.25, duration: 0.5 },
        },
      };

  const dropdownParentVariants: Variants = {
    hidden: {
      transition: {
        staggerChildren: reduceMotion ? 0.05 : 0.08,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0.05 : 0.08,
        staggerDirection: 1,
      },
    },
  };

  const cardVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 0, transition: { duration: 0.2, ease: "easeOut" } },
        visible: { opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
      }
    : {
        hidden: {
          y: 50,
          opacity: 0,
          rotate: -3,
          transition: { duration: 0.25, ease: [0.7, 0, 0.84, 1] },
        },
        visible: {
          y: 0,
          opacity: 1,
          rotate: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
      };

  const cardVariantsAlt: Variants = reduceMotion
    ? {
        hidden: { opacity: 0, transition: { duration: 0.2, ease: "easeOut" } },
        visible: { opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
      }
    : {
        hidden: {
          y: 60,
          opacity: 0,
          rotate: 6,
          transition: { duration: 0.25, ease: [0.7, 0, 0.84, 1] },
        },
        visible: {
          y: 0,
          opacity: 1,
          rotate: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
      };

  return (
    <div
      ref={navRef}
      className="fixed top-5 right-5 min-[660px]:top-8 min-[660px]:right-8 z-50 flex flex-col items-end gap-3 w-[calc(100%-2.5rem)] min-[660px]:w-90 pointer-events-auto"
    >
      <motion.div
        variants={navContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-between w-full gap-2"
      >
        {/* cta */}
        <motion.a
          variants={navItemVariants}
          href="#contact"
          style={{ transformOrigin: "center" }}
          className="flex-1 h-12 flex items-center justify-center pointer-events-auto
                     bg-[#161616]/70 backdrop-blur-xl backdrop-saturate-150
                     border-2 border-[#f0f0f0]/25
                     rounded-full shadow-[4px_4px_0_#b72b2b]
                     hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#b72b2b] hover:bg-[#161616]/80
                     active:translate-x-1 active:translate-y-1 active:shadow-none
                     transition-all duration-150 ease-out group"
        >
          <span className="font-bytesized text-xs min-[660px]:text-sm uppercase tracking-[0.2em] text-[#f0f0f0]">
            Let&apos;s Talk
          </span>
          <span className="ml-3 w-1 h-1 bg-[#f0f0f0] group-hover:bg-[#e2c140] transition-colors" />
        </motion.a>

        {/* menu/close */}
        <motion.button
          variants={navItemVariants}
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="w-20 h-12 shrink-0 flex items-center justify-center pointer-events-auto
                     bg-[#f0f0f0]/70 backdrop-blur-xl backdrop-saturate-150
                     border-2 border-[#161616]/25
                     rounded-full shadow-[4px_4px_0_#e2c140]
                     hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#e2c140] hover:bg-[#f0f0f0]/85
                     active:translate-x-1 active:translate-y-1 active:shadow-none
                     focus-visible:outline-none transition-all duration-150 ease-out"
        >
          <span className="font-bytesized text-xs min-[660px]:text-sm uppercase tracking-widest text-[#161616]">
            {isOpen ? "CLOSE" : "MENU"}
          </span>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownParentVariants}
            style={{ pointerEvents: "auto" }}
            className="w-full flex flex-col gap-3 mt-1"
          >
            {/* nav links */}
            <motion.div
              variants={cardVariants}
              className="bg-[#f0f0f0]/75 backdrop-blur-2xl backdrop-saturate-150
                 border-2 border-[#161616]/25 rounded-3xl p-6
                 shadow-[6px_6px_0_#161616] flex flex-col gap-4 w-full"
            >
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  tabIndex={0}
                  className="text-3xl font-black uppercase tracking-tighter text-[#161616]
                             hover:text-[#b72b2b] transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <span className="w-3 h-3 bg-[#b72b2b] opacity-0 group-hover:opacity-100 transition-opacity border border-[#161616]" />
                </a>
              ))}
            </motion.div>

            {/* dev portfolio card */}
            <motion.a
              variants={cardVariantsAlt}
              href="https://www.armansingh.me"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              className="bg-[#161616]/70 backdrop-blur-xl backdrop-saturate-150
                         border-2 border-[#f0f0f0]/25 rounded-2xl p-5
                         shadow-[6px_6px_0_#b72b2b]
                         flex items-center justify-between group
                         hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#b72b2b] hover:bg-[#161616]/80
                         active:translate-x-1.5 active:translate-y-1.5 active:shadow-none
                         transition-all duration-150 ease-out w-full"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#f0f0f0] font-bytesized text-2xl group-hover:text-[#e2c140] transition-colors">
                  [+]
                </span>
                <span className="text-[#f0f0f0] font-bytesized text-sm min-[660px]:text-base tracking-widest group-hover:text-[#e2c140] transition-colors">
                  DEV PORTFOLIO
                </span>
              </div>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="w-5 h-5 text-[#f0f0f0] group-hover:text-[#e2c140] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M7 17L17 7M7 7h10v10"
                />
              </svg>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
