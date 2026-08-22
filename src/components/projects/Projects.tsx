import { Posters } from "./Posters";
import { Typography } from "./Typography";
import { MotionGraphics } from "./MotionGraphics";
import { GameAssets } from "./GameAssets";
import { SocietyWork } from "./SocietyWork";

export function Projects() {
  return (
    <section id="projects" className="relative w-full text-[#f0f0f0] overflow-hidden z-10 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        <div className="mb-10 flex flex-col items-start">
          <h2 className="font-erica text-7xl md:text-8xl text-[#b72b2b] origin-left drop-shadow-sm mb-2">
            FEATURED WORK
          </h2>

          <p className="font-sans text-base min-[660px]:text-lg md:text-xl text-[#f0f0f0]/60 max-w-lg mt-3 min-[660px]:mt-4 font-medium pl-0 md:pl-2">
            a log of edits, posters, motion, and whatever else needed making!
          </p>
        </div>

        <Posters />
        <Typography />
        <MotionGraphics />
        <GameAssets />
        <SocietyWork />
      </div>
    </section>
  );
}