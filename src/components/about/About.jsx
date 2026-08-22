"use client";
import { useRef } from "react";
import { AboutText } from "./AboutText";
import { ProfileCardOne, ProfileCardTwo } from "./ProfileCards";
import { SkillsExperience } from "./SkillsExperience";
import { ScrollSnake } from "./ScrollSnake";

export function About() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen w-full text-[#161616] overflow-hidden flex flex-col items-center justify-center py-20 px-6 md:px-16"
    >
      <ScrollSnake containerRef={sectionRef} />
      <div className="relative w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-12 lg:gap-20 z-10">
        {/* left side */}
        <div className="relative w-full flex flex-col justify-center">
          <AboutText />
        </div>

        {/* right side */}
        <div className="relative w-full min-h-125 flex items-center justify-center">
          <img
            src="/assets/about/mat.jpg"
            alt="Background Mat"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 object-cover shadow-xl -rotate-2 z-0"
          />

          <div className="relative z-10 w-full max-w-lg flex flex-col gap-4 justify-center md:justify-end">
            <img
              src="/assets/about/sticker-2.webp"
              alt="Sticker"
              className="absolute -top-2 -left-6 w-25 h-25 z-10 rotate-6"
            />
            <ProfileCardOne />
            <img
              src="/assets/about/sticker-1.webp"
              alt="Sticker"
              className="absolute bottom-38 -right-12 w-30 h-30 z-10"
            />
            <ProfileCardTwo />
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <SkillsExperience />
      </div>
    </section>
  );
}