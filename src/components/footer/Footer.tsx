export function Footer() {
  const socials = [
    {
      name: "Behance",
      href: "#",
      hoverClass:
        "hover:bg-[#e2c140] hover:border-[#e2c140] hover:text-[#161616] hover:shadow-[4px_4px_0_#a68c27]",
      tilt: "-rotate-1",
    },
    {
      name: "LinkedIn",
      href: "#",
      hoverClass:
        "hover:bg-[#c4f022] hover:border-[#c4f022] hover:text-[#161616] hover:shadow-[4px_4px_0_#8cae14]",
      tilt: "rotate-1",
    },
    {
      name: "Instagram",
      href: "#",
      hoverClass:
        "hover:bg-[#b72b2b] hover:border-[#b72b2b] hover:text-[#f0f0f0] hover:shadow-[4px_4px_0_#751919]",
      tilt: "-rotate-1",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full overflow-x-hidden text-[#f0f0f0] border-t-2 border-[#333] mx-auto px-6 md:px-16">
      <div className="max-w-7xl mx-auto pt-16 md:pt-24 pb-16">
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-6">
          <div className="flex flex-col gap-6">
            <span className="font-bytesized text-xs uppercase tracking-[0.3em] text-[#f0f0f0]/40">
              [ Navigate ]
            </span>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-black text-2xl md:text-3xl uppercase tracking-tighter text-[#f0f0f0]/70 hover:text-[#e2c140] transition-all w-fit hover:-translate-x-2 duration-150 ease-out flex items-center gap-3 group"
                >
                  {link.name}
                  <span className="opacity-0 group-hover:opacity-100 text-[#e2c140] transition-opacity duration-150">
                    {"<<<"}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="font-bytesized text-xs uppercase tracking-[0.3em] text-[#f0f0f0]/40 md:text-right">
              [ Find Me ]
            </span>
            <div className="flex flex-wrap md:justify-end gap-3 md:gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`font-bytesized font-bold text-xs uppercase tracking-widest px-5 py-3
                              bg-[#161616] text-[#f0f0f0]/70 
                              border-2 border-[#333] shadow-[3px_3px_0_#333]
                              transition-all duration-150 ease-out
                              active:scale-95 active:translate-y-1 active:translate-x-1 active:shadow-none
                              ${social.tilt} ${social.hoverClass}`}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto border-t-2 border-[#333]">
        <div className="absolute top-0 left-0 w-full flex items-center justify-between text-[#f0f0f0]/20 pointer-events-none select-none -translate-y-4">
          <span className="text-2xl font-light bg-[#161616] pr-3 leading-none">
            +
          </span>
          <span className="text-2xl font-light bg-[#161616] px-3 leading-none hidden sm:block">
            +
          </span>
          <span className="text-2xl font-light bg-[#161616] px-3 leading-none">
            +
          </span>
          <span className="text-2xl font-light bg-[#161616] px-3 leading-none hidden sm:block">
            +
          </span>
          <span className="text-2xl font-light bg-[#161616] pl-3 leading-none">
            +
          </span>
        </div>

        <div className="max-w-full py-8 md:py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-6 relative z-10">
          <p className="font-bytesized font-medium text-[10px] md:text-xs text-[#f0f0f0]/40 tracking-widest uppercase text-center md:text-left">
            © {new Date().getFullYear()} Arman Singh. All rights reserved.
          </p>

          <a
            href="#"
            className="font-bytesized text-[10px] md:text-xs uppercase tracking-widest text-[#161616] bg-[#f0f0f0] px-5 py-3 border-2 border-[#161616] shadow-[4px_4px_0_#333] flex items-center gap-2 hover:bg-[#e2c140] hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[5px_5px_0_#e2c140] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all group"
          >
            Back to top
            <span className="group-hover:-translate-y-1 transition-transform duration-150">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
