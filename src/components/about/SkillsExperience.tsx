import { Highlight } from "../shared/Highlight";

export function SkillsExperience() {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 text-[#161616] mt-20 md:mt-32">
      {/* left side */}
      <div className="flex flex-col gap-10">
        {/* softwares card placeholder */}
        <div className="relative w-full h-80 bg-red-300 rounded-md p-4 shadow-sm -rotate-1">
          <img
            src="/assets/about/sticker-3.webp"
            alt="Softwares Sticker"
            className="absolute -top-14 -left-12 w-40 h-40 z-10"
          />
        </div>

        {/* techniques card placeholder */}
        <div className="relative w-full h-64 bg-indigo-300 rounded-md p-4 shadow-sm rotate-1">
          <img
            src="/assets/about/sticker-4.webp"
            alt="Techniques Sticker"
            className="absolute -bottom-6 -right-16 w-40 h-40 z-10"
          />
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-col gap-12 pt-4">
        {/* experiences Section */}
        <div>
          <h3 className="font-black text-3xl italic mb-6">
            relevant experience
          </h3>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[#b72b2b] font-bold italic">2021 - present</p>
              <p className="font-medium leading-tight">
                <span className="font-bold">freelance illustrator.</span>{" "}
                commissions for commercial and personal use (portraits, environments, flat
                design, advertising art, among others).
              </p>
            </div>
            <div>
              <p className="text-[#b72b2b] font-bold italic">2022 - present</p>
              <p className="font-medium leading-tight">
                <span className="font-bold">freelance designer.</span> services
                related to editorial design, packaging, experimental,
                social media, branding, among others.
              </p>
            </div>
          </div>
        </div>

        {/* skills section */}
        <div>
          <h3 className="font-black text-3xl italic mb-6">
            interpersonal skills
          </h3>
          <div className="flex flex-wrap gap-x-2 gap-y-3 font-medium italic text-sm md:text-base">
            <Highlight color="green" tilt="-rotate-1">
              responsible
            </Highlight>
            <Highlight color="orange" tilt="rotate-1">
              communicative
            </Highlight>
            <Highlight color="yellow" tilt="-rotate-2">
              time management
            </Highlight>
            <Highlight color="orange" tilt="rotate-2">
              willing to learn
            </Highlight>
            <Highlight color="yellow" tilt="-rotate-1">
              proactive
            </Highlight>
            <Highlight color="green" tilt="rotate-1">
              detail-oriented
            </Highlight>
            <Highlight color="yellow" tilt="-rotate-2">
              critical thinking
            </Highlight>
            <Highlight color="green" tilt="rotate-2">
              open to feedback
            </Highlight>
            <Highlight color="orange" tilt="-rotate-1">
              dedicated
            </Highlight>
          </div>
        </div>
      </div>
    </div>
  );
}