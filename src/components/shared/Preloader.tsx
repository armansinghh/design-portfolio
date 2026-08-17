"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      let increment = 1.4;

      if (current > 70) increment = 0.7;
      if (current > 90) increment = 0.3;
      if (current > 97) increment = 0.12;

      current += increment;

      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onComplete();
          }, 750);
        }, 300);
      } else {
        setProgress(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="
        fixed
        inset-0
        z-999
        overflow-hidden
        bg-[#050505]
        text-white
        select-none
        pointer-events-none
      "
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: isExiting ? 0 : 1,
      }}
      transition={{
        duration: 0.5,
        delay: isExiting ? 0.25 : 0,
        ease: [0.76, 0, 0.24, 1],
      }}
    >

      <motion.div
        className="
          absolute
          bottom-8
          left-8
          md:bottom-10
          md:left-10
          z-10
        "
        initial={{
          opacity: 0,
          y: 30,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: isExiting ? 0 : 1,
          y: isExiting ? 10 : 0,
          filter: isExiting ? "blur(4px)" : "blur(0px)",
        }}
        transition={{
          opacity: {
            duration: 0.25,
            ease: "easeOut",
          },
          y: {
            duration: 0.35,
            ease: [0.76, 0, 0.24, 1],
          },
          filter: {
            duration: 0.25,
          },
        }}
      >
        <div
          className="
            flex
            items-baseline
            font-mono
            font-medium
            leading-none
            tracking-[-0.08em]
            tabular-nums
            text-[clamp(4rem,8vw,8rem)]
          "
        >
          <motion.span
            key={progress}
            initial={{
              y: 6,
              opacity: 0.5,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.12,
              ease: "easeOut",
            }}
          >
            {progress.toString().padStart(3, "0")}
          </motion.span>

          <span
            className="
              ml-2
              text-[0.28em]
              tracking-normal
              text-white/40
            "
          >
            %
          </span>
        </div>
      </motion.div>

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
        "
      >

        <motion.div
          className="
            relative
            h-18
            w-45
            md:h-21
            md:w-60
            overflow-hidden
            bg-[#161616]
          "
          initial={{
            scale: 0.92,
            opacity: 0,
          }}
          animate={
            isExiting
              ? {
                  scale: 12,
                  opacity: 0,
                  filter: "blur(1px)",
                }
              : {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)",
                }
          }
          transition={
            isExiting
              ? {
                  duration: 0.65,
                  ease: [0.76, 0, 0.24, 1],
                }
              : {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }
          }
        >

          <motion.div
            className="
              absolute
              inset-y-0
              left-0
              bg-white
            "
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.18,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}