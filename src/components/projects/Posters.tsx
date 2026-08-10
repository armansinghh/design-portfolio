import { SectionHeading } from "./SectionHeading";

export function Posters() {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeading 
        id="category-posters"
        title="posters"
        subtitle="visual communication & print"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        shapeFill="text-[#4ade80]" 
        shapeType="ticket"
      />
      
      {/* grid */}
      <div className="w-full columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div 
            key={num} 
            className="relative group overflow-hidden rounded-xl break-inside-avoid bg-white/5 border border-white/10"
          >
            <img
              src={`/assets/projects/posters/${num}.png`}
              alt={`Poster Design ${num}`}
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}