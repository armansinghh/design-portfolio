interface SectionHeadingProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  shapeFill?: string;
  shapeType: "ticket" | "sparkle" | "blob" | "dpad" | "burst";
}

export function SectionHeading({
  id,
  title,
  subtitle,
  description,
  shapeFill = "text-[#4ade80]",
  shapeType,
}: SectionHeadingProps) {
  const getShapePath = () => {
    switch (shapeType) {
      case "ticket":
        return "M 10 15 Q 10 10 15 10 L 85 10 Q 90 10 90 15 L 90 38 A 8 8 0 0 0 90 62 L 90 85 Q 90 90 85 90 L 15 90 Q 10 90 10 85 L 10 62 A 8 8 0 0 0 10 38 Z";

      case "sparkle":
        return "M 42 5 L 58 5 L 90 88 L 70 88 L 63 68 L 37 68 L 30 88 L 10 88 Z M 44 52 L 56 52 L 50 32 Z";

      case "blob":
        return "M 50 8 C 68 6 85 18 88 36 C 92 54 84 68 72 80 C 60 92 40 94 26 84 C 12 74 6 56 10 40 C 14 22 32 10 50 8 Z";

      case "dpad":
        return "M 40 8 L 60 8 Q 65 8 65 13 L 65 35 L 87 35 Q 92 35 92 40 L 92 60 Q 92 65 87 65 L 65 65 L 65 87 Q 65 92 60 92 L 40 92 Q 35 92 35 87 L 35 65 L 13 65 Q 8 65 8 60 L 8 40 Q 8 35 13 35 L 35 35 L 35 13 Q 35 8 40 8 Z";

      case "burst":
        return "M 50 2 L 61 28 L 88 12 L 72 39 L 98 50 L 72 61 L 88 88 L 61 72 L 50 98 L 39 72 L 12 88 L 28 61 L 2 50 L 28 39 L 12 12 L 39 28 Z";

      default:
        return "";
    }
  };

  return (
    <div
      id={id}
      className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 border-b border-white/10 scroll-mt-24"
    >
      {/* left side */}
      <div className="flex items-center gap-4 md:gap-8">
        {/* shape */}
        <div className={`w-16 h-16 md:w-24 md:h-24 shrink-0 ${shapeFill}`}>
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-sm"
            fill="currentColor"
          >
            <path d={getShapePath()} strokeLinejoin="round" />
          </svg>
        </div>

        {/* headings */}
        <div className="flex flex-col">
          <h3 className="font-black italic text-4xl md:text-5xl lowercase text-[#f0f0f0] tracking-tight">
            {title}
          </h3>
          <span className="text-[#f0f0f0]/80 text-sm md:text-base font-medium">
            {subtitle}
          </span>
        </div>
      </div>

      {/* right side (desc) */}
      <p className="w-full md:w-auto md:max-w-sm text-left md:text-right text-[#f0f0f0]/70 text-sm md:text-base font-medium leading-snug">
        {description}
      </p>
    </div>
  );
}
