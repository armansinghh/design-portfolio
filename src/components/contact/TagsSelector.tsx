"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BentoCard } from "./BentoCard";

const TAGS = ["...1", "...2", "...3", "...4", "Other"];

export function TagsSelector() {
  const [activeTag, setActiveTag] = useState("...1");

  return (
    <BentoCard
      span="col-span-1 md:col-span-2"
      rotate="none"
      className="justify-center font-bytesized gap-2"
    >
      <label className="text-sm tracking-widest text-[#161616]/40 uppercase">
        Scope of Work
      </label>

      <div className="flex flex-wrap gap-1.5 min-[660px]:gap-2 md:gap-3">
        {TAGS.map((tag) => {
          const isActive = activeTag === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`relative px-4 py-2 min-[660px]:px-5 min-[660px]:py-2.5 rounded-lg text-xs min-[660px]:text-sm tracking-wide transition-colors duration-200 z-10 active:scale-95 ${
                isActive
                  ? "text-[#f0f0f0]"
                  : "text-[#161616]/60 hover:text-[#161616] bg-[#f7f7f7] hover:bg-[#eaeaea]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="tag-bg"
                  className="absolute inset-0 bg-[#161616] rounded-lg -z-10"
                  transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 0.25,
                  }}
                />
              )}
              {tag}
            </button>
          );
        })}
      </div>
    </BentoCard>
  );
}
