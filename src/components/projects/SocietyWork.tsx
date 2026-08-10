import { SectionHeading } from "./SectionHeading";

export function SocietyWork() {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeading 
        id="category-society"
        title="society work"
        subtitle="college community designs"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        shapeFill="text-[#f97316]" 
        shapeType="burst"
      />
      <div className="w-full h-96 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center font-bold text-white/20">
        [ work goes here ]
      </div>
    </div>
  );
}