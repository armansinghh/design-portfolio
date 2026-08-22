import { Highlight } from "../shared/Highlight";
import { ProfileCardThree, ProfileCardFour } from "./ProfileCards";

const EXPERIENCE = [
  {
    date: "2021 – present",
    title: "video editor",
    desc: "fandom edits, motion graphics, and promo content.",
    tilt: "-rotate-1",
  },
  {
    date: "2023 – present",
    title: "poster & graphic design",
    desc: "celeb and media posters, designed just because.",
    tilt: "rotate-1",
  },
  {
    date: "college",
    title: "@gfg.mits - media team",
    desc: "edited the promotional videos for the GeeksforGeeks MITS chapter.",
    tilt: "-rotate-2",
  },
  {
    date: "recent",
    title: "typeface design",
    desc: "designed a custom display font from scratch.",
    tilt: "rotate-2",
  },
  {
    date: "recent",
    title: "2D game assets",
    desc: "hand drawn pixel props and environments for indie projects.",
    tilt: "-rotate-1",
  },
  {
    date: "ongoing",
    title: "freelance (offline)",
    desc: "a few clients picked up outside the usual online gigs.",
    tilt: "rotate-1",
  },
];

export function SkillsExperience() {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 text-[#161616] mt-20 md:mt-32">
      <div className="flex flex-col gap-10">
        <ProfileCardThree />
        <ProfileCardFour />
      </div>

      <div className="flex flex-col gap-12 pt-4">
        {/* experiences Section */}
        <div>
          <h3 className="font-black text-3xl italic mb-6 tracking-tight text-[#161616]">
            relevant experience
          </h3>
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-4">
            {EXPERIENCE.map((entry) => (
              <div
                key={entry.title}
                className={`relative bg-[#f7f7f7] rounded-xl p-4 border-2 border-[#161616]
                            shadow-[3px_3px_0_#161616] transition-all duration-200 ease-out
                            hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[5px_5px_0_#161616]
                            ${entry.tilt}`}
              >
                <p className="text-[#b72b2b] font-bold italic text-[11px] uppercase tracking-widest mb-1">
                  {entry.date}
                </p>
                <p className="font-black text-base leading-none mb-1.5 text-[#161616]">
                  {entry.title}
                </p>
                <p className="font-medium text-[13px] leading-snug text-[#3a3a3a]">
                  {entry.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* skills section */}
        <div>
          <h3 className="font-black text-3xl italic mb-5 tracking-tight text-[#161616]">
            interpersonal skills
          </h3>
          <div className="flex flex-wrap gap-x-2 gap-y-3 font-medium italic text-sm md:text-base">
            <Highlight color="green" tilt="-rotate-1">
              self-reliant
            </Highlight>
            <Highlight color="orange" tilt="rotate-1">
              intuitive
            </Highlight>
            <Highlight color="yellow" tilt="-rotate-2">
              reliable
            </Highlight>
            <Highlight color="orange" tilt="rotate-2">
              punctual
            </Highlight>
            <Highlight color="yellow" tilt="-rotate-1">
              receptive to feedback
            </Highlight>
            <Highlight color="green" tilt="rotate-1">
              hands-on
            </Highlight>
            <Highlight color="orange" tilt="-rotate-2">
              adaptable
            </Highlight>
            <Highlight color="green" tilt="rotate-2">
              communicative
            </Highlight>
            <Highlight color="yellow" tilt="-rotate-1">
              detail oriented
            </Highlight>
            <Highlight color="green" tilt="-rotate-1">
              time management
            </Highlight>
          </div>
        </div>
      </div>
    </div>
  );
}
