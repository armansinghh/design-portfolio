import { FiMail, FiInstagram, FiGlobe } from "react-icons/fi";

export function ProfileCardTwo() {
  const contacts = [
    {
      label: "email",
      text: "armansingh6692@gmail.com",
      href: "mailto:armansingh6692@gmail.com",
    },
    {
      label: "website",
      text: "armansingh.me",
      href: "https://armansingh.me",
    },
    {
      label: "instagram",
      isDouble: true,
      href1: "https://instagram.com/hefy.ae",
      text1: "@hefy.ae",
      href2: "https://instagram.com/hefy.ps",
      text2: "@hefy.ps",
    },
  ];

  const icons: Record<string, React.ReactNode> = {
    email: <FiMail className="w-4 h-4" />,
    website: <FiGlobe className="w-4 h-4" />,
    instagram: <FiInstagram className="w-4 h-4" />,
  };

  return (
    <div className="relative w-full bg-[#fdfaf0] rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#161616]/5 rotate-1 flex flex-col gap-2 justify-center h-full">
      {contacts.map((c) => (
        <div key={c.label} className="flex items-center gap-4 p-2 -mx-2">
          <div className="w-10 h-10 shrink-0 rounded-full bg-white border border-[#161616]/10 shadow-sm flex items-center justify-center text-[#161616]/70">
            {icons[c.label]}
          </div>

          <div className="flex-1 min-w-0 flex items-center">
            {c.isDouble ? (
              <span className="font-bold text-sm text-[#161616]/80 truncate">
                <a
                  href={c.href1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b72b2b] transition-colors"
                >
                  {c.text1}
                </a>
                <span className="text-[#161616]/40 mx-1.5">&</span>
                <a
                  href={c.href2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b72b2b] transition-colors"
                >
                  {c.text2}
                </a>
              </span>
            ) : (
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm text-[#161616]/80 truncate hover:text-[#b72b2b] transition-colors w-full"
              >
                {c.text}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProfileCardThree() {
  const SOFTWARES = [
    { abbr: "Pr", name: "Premiere Pro" },
    { abbr: "Ae", name: "After Effects" },
    { abbr: "Ps", name: "Photoshop" },
    { abbr: "Pk", name: "Piskel" },
  ];

  const COLORS = ["bg-[#d97736]", "bg-[#e2c140]", "bg-[#7ba05b]"];

  return (
    <div className="relative w-full bg-[#fdfaf0] rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#161616]/5 -rotate-1 flex flex-col min-h-70">
      <img
        src="/assets/about/sticker-3.webp"
        alt="Softwares Sticker"
        className="absolute -top-8 -left-6 w-24 h-24 z-10 drop-shadow-md pointer-events-none"
      />

      <div className="pl-14 md:pl-20">
        <h4 className="font-erica text-3xl md:text-4xl leading-none text-[#161616]">
          softwares.
        </h4>
        <span className="font-bytesized text-[10px] uppercase tracking-widest text-[#161616]/40 mt-2 block">
          what I work in
        </span>
      </div>

      <div className="w-full border-t border-dashed border-[#161616]/20 my-6" />

      <div className="flex flex-wrap gap-2.5 md:gap-3">
        {SOFTWARES.map((sw, i) => (
          <div
            key={sw.abbr}
            className={`${COLORS[i % COLORS.length]} flex items-center gap-2 px-3.5 py-1.5 rounded-lg shadow-sm`}
          >
            <span className="font-black text-sm text-[#161616]">{sw.abbr}</span>
            <span className="font-bold text-[#161616]/80 text-xs md:text-sm">
              {sw.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProfileCardFour() {
  const TECHNIQUES = [
    "video editing",
    "motion graphics",
    "poster design",
    "typeface design",
    "pixel art",
    "editorial design",
    "frontend design",
    "branding",
  ];

  const COLORS = ["bg-[#d97736]", "bg-[#e2c140]", "bg-[#7ba05b]"];

  return (
    <div className="relative w-full bg-[#fdfaf0] rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#161616]/5 rotate-1 flex flex-col min-h-70">
      <div>
        <h4 className="font-erica text-3xl md:text-4xl leading-none text-[#161616]">
          techniques.
        </h4>
        <span className="font-bytesized text-[10px] uppercase tracking-widest text-[#161616]/40 mt-2 block">
          what I make
        </span>
      </div>

      <div className="w-full border-t border-dashed border-[#161616]/20 my-6" />

      <div className="flex flex-wrap gap-2.5 md:gap-3">
        {TECHNIQUES.map((tech, i) => (
          <div
            key={tech}
            className={`${COLORS[i % COLORS.length]} px-3.5 py-1.5 rounded-lg text-[#161616] font-bold text-xs md:text-sm shadow-sm cursor-default lowercase`}
          >
            {tech}
          </div>
        ))}
      </div>

      <img
        src="/assets/about/sticker-4.webp"
        alt="Techniques Sticker"
        className="absolute -bottom-6 -right-6 w-24 h-24 z-10 drop-shadow-md pointer-events-none"
      />
    </div>
  );
}
