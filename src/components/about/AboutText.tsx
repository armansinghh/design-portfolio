import { Highlight } from "../shared/Highlight";
import { Greeting } from "./Greeting";

export function AboutText() {
  return (
    <div className="flex flex-col gap-6 md:pr-10 z-10">
      {/* greeting */}
      <Greeting />

      {/* para 1 */}
      <p className="font-sans text-lg md:text-xl font-medium leading-relaxed tracking-tight text-[#3a3a3a]">
        it started with{" "}
        <Highlight color="orange">video editing</Highlight> back in 2021,
        fandom edits, mostly. that ended up opening the door to everything
        else: motion graphics, posters, and more recently, actual{" "}
        <Highlight color="yellow" tilt="rotate-1">
          design
        </Highlight>
        . one thing just kept leading to the next.
      </p>

      {/* para 2 */}
      <p className="font-sans text-lg md:text-xl font-medium leading-relaxed tracking-tight text-[#3a3a3a]">
        since then it&apos;s been a bit of everything, celeb and media
        posters, promo content for my college society, a custom pixel font,
        even hand-drawn 2D game assets. lately I&apos;ve been pulled toward{" "}
        <Highlight color="green">frontend design</Highlight> too, just
        chasing whatever looks fun to build.
      </p>

      {/* para 3 */}
      <p className="font-sans text-lg md:text-xl font-medium leading-relaxed tracking-tight text-[#3a3a3a]">
        my process is always the same though: find inspo, sketch it out on
        paper, then take it digital. style wise I lean{" "}
        <Highlight color="orange" tilt="rotate-1">
          minimal
        </Highlight>{" "}
        until it isn&apos;t, some projects just want to go maximal and I let
        them. I&apos;ve turned down more work than I&apos;ve taken lately
        since I can&apos;t do it all at once, but I still make time to create
        when I can.
      </p>
    </div>
  );
}