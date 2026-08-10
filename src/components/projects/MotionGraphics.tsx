import { SectionHeading } from "./SectionHeading";

export function MotionGraphics() {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeading 
        id="category-motion"
        title="motion graphics"
        subtitle="bringing designs to life"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        shapeFill="text-[#4b68ff]" 
        shapeType="blob"
      />
      <div className="w-full h-96 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center font-bold text-white/20">
        [ reels will go here ]
      </div>
    </div>
  );
}