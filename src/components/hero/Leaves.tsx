export function Leaves() {
  const leafSrc = "/assets/hero/leaf.png";

  const leafPositions = [
    // TOP
    "-top-16 -left-16 w-72 md:w-96 -rotate-[20deg] drop-shadow-2xl", // top left
    "-top-20 left-[15%] w-56 md:w-72 -rotate-[20deg]",           // top mid left
    "-top-24 right-1/3 w-64 md:w-80 -rotate-[20deg]",            // top mid right
    "-top-10 -right-40 w-80 md:w-[28rem] rotate-[30deg]",      // top right

    // RIGHT
    "top-1/4 -right-24 w-64 md:w-80 rotate-[90deg]",           // right upper
    "top-1/2 -right-32 w-56 md:w-72 rotate-[90deg]",           // right mid
    "top-[70%] -right-20 w-48 md:w-64 rotate-[90deg]",         // right lower

    // BOTTOM
    "-bottom-24 -right-16 w-72 md:w-[26rem] -rotate-[180deg]",  // bottom right
    "-bottom-24 right-[30%] w-64 md:w-80 -rotate-[180deg]",     // bottom mid right
    "-bottom-22 left-1/4 w-64 md:w-80 -rotate-[180deg]",        // bottom mid left
    "-bottom-20 -left-10 w-72 md:w-96 -rotate-[180deg]",         // bottom left

    // LEFT
    "top-[65%] -left-24 w-56 md:w-80 -rotate-[90deg]",          // left lower
    "top-[40%] -left-32 w-56 md:w-80 -rotate-[90deg]",          // left mid
    "top-[15%] -left-20 w-48 md:w-64 -rotate-[90deg]"           // left upper
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {leafPositions.map((classes, index) => (
        <img 
          key={index}
          src={leafSrc}
          alt=""
          className={`absolute opacity-35 ${classes}`} 
        />
      ))}
    </div>
  );
}