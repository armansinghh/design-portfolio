interface MarqueeProps {
  variant?: "brand" | "tech";
}

// each "text" must be long enough to fill the viewport on its own ~!
const VARIANTS = {
  brand: {
    text: "RENDER QUEUE: 1 OF 47 ✦ export failed, trying again ✦ TIMELINE.AEP - DO NOT CLOSE ✦ ctrl+z doesn't work on real life ✦ 4AM ✦",
    tapeClasses: "bg-[#161616] text-[#fdfdfd]",
    textClasses:
      "font-sans font-black text-lg md:text-xl tracking-widest uppercase",
    direction: "normal" as const,
    speed: 15,
  },
  tech: {
    text: "POSTERS · FONTS · MOTION GRAPHICS · FANDOM EDITS · PROMOTIONAL EDITS · 2D GAME ASSETS · POSTERS · FONTS · MOTION GRAPHICS · FANDOM EDITS · PROMOTIONAL EDITS ·",
    tapeClasses: "bg-[#b72b2b] text-[#f5efd6]",
    textClasses:
      "font-bytesized text-sm md:text-base tracking-[0.2em] uppercase",
    direction: "reverse" as const,
    speed: 12,
  },
};

export function Marquee({ variant = "brand" }: MarqueeProps) {
  const { text, tapeClasses, textClasses, direction, speed } =
    VARIANTS[variant];

  return (
    <div
      className={`relative w-full overflow-hidden py-3 shadow-xl z-40 flex items-center ${tapeClasses}`}
    >
      {/* scrolling text */}
      <div
        className="flex w-max animate-marquee hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction,
        }}
      >
        {/* first block */}
        <span className={`${textClasses} px-2 whitespace-nowrap`}>{text}</span>

        {/* duplicate block to create the endless loop */}
        <span className={`${textClasses} px-2 whitespace-nowrap`}>{text}</span>
      </div>
    </div>
  );
}
