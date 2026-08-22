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
        description="celeb and media posters, I made"
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
              alt={`Poster design by Hefy, piece ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none"></div>
          </div>
        ))}
      </div>
      <a
        href="https://instagram.com/hefy.ps"
        target="_blank"
        rel="noopener noreferrer"
        className="self-center mt-2 flex items-center gap-3 px-6 py-3 rounded-full
                   bg-white/5 border border-white/15 text-[#f0f0f0]/80
                   font-bytesized text-sm uppercase tracking-widest
                   transition-all duration-200 hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5"
      >
        more on instagram
        <span className="text-[#4b68ff]"></span>
      </a>
    </div>
  );
}
