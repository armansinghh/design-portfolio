import { Posters } from "./Posters";
import { Typography } from "./Typography";
import { MotionGraphics } from "./MotionGraphics";
import { GameAssets } from "./GameAssets";
import { SocietyWork } from "./SocietyWork";

export function Projects() {
  return (
    <section id="projects" className="relative w-full py-32 px-6 md:px-16 text-[#f0f0f0] overflow-hidden z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col items-center text-center gap-6 mb-10">
          <h2 className="font-erica text-7xl md:text-8xl text-[#b72b2b] -rotate-2 drop-shadow-sm">
            FEATURED WORK
          </h2>
          <p className="max-w-2xl font-medium text-lg text-[#f0f0f0]/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
