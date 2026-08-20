"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const GREETINGS = [
  "HELLO!",
  "NAMASTE!",
  "BONJOUR!",
  "HOLA!",
  "CIAO!",
  "OL!",
  "ALOHA!",
  "SALUT!",
];
const HOLD_MS = 5000;

export function Greeting() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % GREETINGS.length);
    }, HOLD_MS);
    return () => clearInterval(id);
  }, []);

  const current = GREETINGS[index];

  return (
    <h2
      className="font-erica text-7xl md:text-8xl text-[#b72b2b] origin-left drop-shadow-sm mb-2 flex overflow-hidden"
      style={{ lineHeight: 1, perspective: "800px" }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={current}
          className="flex"
          variants={{
            animate: { transition: { staggerChildren: 0.04 } },
            exit: { transition: { staggerChildren: 0.025 } },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {current.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block origin-bottom"
              variants={{
                initial: {
                  y: "-110%",
                  opacity: 0,
                  rotateX: -80,
                  filter: "blur(4px)",
                },
                animate: {
                  y: "0%",
                  opacity: 1,
                  rotateX: 0,
                  filter: "blur(0px)",
                },
                exit: {
                  y: "110%",
                  opacity: 0,
                  rotateX: 80,
                  filter: "blur(4px)",
                },
              }}
              transition={{
                duration: 0.65,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </h2>
  );
}