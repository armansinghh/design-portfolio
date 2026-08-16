import { SectionHeading } from "./SectionHeading";

export function Posters() {
  const posterIds = [
    "1_zxqbhr",
    "2_kx5rfx",
    "3_m2gstk",
    "4_peqep2",
    "5_ur7zjr",
    "6_zq2ttb",
  ];

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
        {posterIds.map((id, index) => (
          <div 
            key={id} 
            className="relative group overflow-hidden rounded-xl break-inside-avoid bg-white/5 border border-white/10"
          >
            <img
              src={`https://res.cloudinary.com/dpwepeiok/image/upload/f_auto,q_auto/${id}.png`}
              alt={`Poster Design ${index + 1}`}
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