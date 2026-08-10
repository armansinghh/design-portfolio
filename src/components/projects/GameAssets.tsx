import { SectionHeading } from "./SectionHeading";

export function GameAssets() {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeading
        id="category-games"
        title="game assets"
        subtitle="2D/3D props and environments"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        shapeFill="text-[#dfa127]"
        shapeType="dpad"
      />
      <div className="w-full h-96 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center font-bold text-white/20">
        [ assets will go here ]
      </div>
    </div>
  );
}
