export function ProfileCards() {
  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col gap-4 text-[#161616]">
      <img 
        src="/assets/about/sticker-2.webp" 
        alt="Sticker" 
        className="absolute -top-12 -right-10 w-35 h-35 z-10 rotate-6" 
      />
      <div className="h-80 bg-amber-200 rounded-md p-4 shadow-sm">
      </div>
      <img 
        src="/assets/about/sticker-1.webp" 
        alt="Sticker" 
        className="absolute bottom-22 -left-14 w-40 h-40 z-10 rotate-6" 
      />
      <div className="h-40 bg-lime-300 rounded-md p-4 shadow-sm">
      </div>
    </div>
  );
}