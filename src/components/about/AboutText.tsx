import { Highlight } from "../shared/Highlight";

export function AboutText() {
  return (
    <div className="flex flex-col gap-6 md:pr-10 z-10">
      {/* greeting */}
      <h2 className="font-erica text-7xl md:text-8xl text-[#b72b2b] -rotate-3 origin-left drop-shadow-sm mb-2">
        OLÁ!
      </h2>
      {/* will replace the content later */}
      {/* para 1 */}
      <p className="font-sans text-lg md:text-xl font-medium leading-relaxed tracking-tight text-[#3a3a3a]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud <Highlight color="orange">exercitation.</Highlight>{" "}
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      {/* para 2 */}
      <p className="font-sans text-lg md:text-xl font-medium leading-relaxed tracking-tight text-[#3a3a3a]">
        Duis aute irure dolor in{" "}
        <Highlight color="yellow" tilt="rotate-1">
          reprehenderit
        </Highlight>{" "}
        in <Highlight color="green">voluptate</Highlight> velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia.
      </p>

      {/* para 3 */}
      <p className="font-sans text-lg md:text-xl font-medium leading-relaxed tracking-tight text-[#3a3a3a]">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui. Neque porro quisquam
        est, qui dolorem ipsum{" "}
        <Highlight color="orange" tilt="rotate-1">
          consectetur
        </Highlight>{" "}
        adipisci velit, sed quia non numquam eius modi.
      </p>
    </div>
  );
}
