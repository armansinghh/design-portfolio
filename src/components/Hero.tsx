import { Leaves } from "./Leaves";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <Leaves />

      <div className="relative flex flex-col items-center select-none z-10">
        {/* horizontal lines */}
        <div className="absolute top-8 -left-12 -right-12 border-t border-dashed border-white/20"></div>
        <div className="absolute bottom-4 -left-12 -right-20 border-t border-dashed border-white/20"></div>
        <div className="absolute -bottom-3 -left-12 -right-20 border-t border-dashed border-white/20"></div>
        <div className="absolute -bottom-12 left-34 right-34 border-t border-dashed border-white/20"></div>

        {/* vertical lines */}
        <div className="absolute left-1 -top-8 -bottom-16 border-l border-dashed border-white/20"></div>
        <div className="absolute -left-10 -top-8 -bottom-16 border-l border-dashed border-white/20"></div>
        <div className="absolute right-0 -top-8 -bottom-16 border-l border-dashed border-white/20"></div>
        <div className="absolute -right-12 -top-8 -bottom-16 border-l border-dashed border-white/20"></div>
        <div className="absolute left-38 top-36 -bottom-16 border-l border-dashed border-white/20"></div>
        <div className="absolute right-38 top-36 -bottom-16 border-l border-dashed border-white/20"></div>

        <span className="absolute top-3 -right-4 text-white/30 text-xs font-sans">
          ©
        </span>

        <h1 className="font-erica relative z-10 text-8xl md:text-[10rem] text-(--color-primary) uppercase leading-none tracking-tight text-shadow-">
          hefy
        </h1>

        <div className="absolute -top-8 -left-8 md:-top-16 md:-left-26 z-20 flex items-center justify-center -rotate-6 hover-effect">
          <svg
            viewBox="0 0 100 100"
            className="w-32 md:w-48 text-yellow-400"
            fill="currentColor"
          >
            <path d="M50 5 L58 35 L85 15 L70 45 L95 50 L70 55 L85 85 L58 65 L50 95 L42 65 L15 85 L30 55 L5 50 L30 45 L15 15 L42 35 Z" />
          </svg>
        </div>

        <div className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 z-20">
          <span className="font-sans text-(--color-primary) text-lg md:text-sm tracking-widest whitespace-nowrap opacity-55">
            .ae & .ps
          </span>
        </div>

        <div className="  absolute -bottom-2 -right-4 md:-right-12 bg-red-600 text-(--color-primary) px-3 py-1 font-bytesized text-xs md:text-sm uppercase tracking-widest rotate-3 shadow-lg z-20 hover-effect">
          created by arman
        </div>
        
      </div>
    </section>
  );
}
