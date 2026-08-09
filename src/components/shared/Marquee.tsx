export function Marquee() {
  const tapeText = "VIDEO EDITING ✦ CAUTION: WET INK ✦ MOTION GRAPHICS ✦ DON'T PEEL THE STICKERS ✦ AFTER EFFECTS ✦ CUTTING CLIPS & PASTING PAPER ✦ ";

  return (
    // black tape container 
    <div className="relative w-full overflow-hidden bg-[#161616] border-y-[3px] border-[#161616] py-3 shadow-xl z-40 flex items-center">
      
      {/* scrolling text */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        
        {/* first block */}
        <span className="text-[#fdfdfd] font-sans font-black text-lg md:text-xl tracking-widest uppercase px-2 whitespace-nowrap">
          {tapeText}
        </span>
        
        {/* duplicate block to create the endless loop */}
        <span className="text-[#fdfdfd] font-sans font-black text-lg md:text-xl tracking-widest uppercase px-2 whitespace-nowrap">
          {tapeText}
        </span>
        
      </div>
    </div>
  );
}