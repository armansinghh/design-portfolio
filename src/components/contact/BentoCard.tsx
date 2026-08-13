import type { ReactNode } from "react";

type Rotate = "left" | "right" | "none";

const rotateClass: Record<Rotate, string> = {
  left: "min-[660px]:-rotate-1",
  right: "min-[660px]:rotate-1",
  none: "",
};

interface BentoCardProps {
  span?: string;
  rotate?: Rotate;
  focusAccent?: boolean;
  tall?: boolean;
  className?: string;
  children: ReactNode;
}

export function BentoCard({
  span = "col-span-1",
  rotate = "none",
  focusAccent = false,
  tall = false,
  className = "",
  children,
}: BentoCardProps) {
  return (
    <div
      className={`${span} bg-white rounded-xl p-3.5 min-[660px]:p-5 md:p-8 border border-[#161616]/10 shadow-sm flex flex-col gap-1 min-[660px]:gap-2 transition-all duration-300 min-[660px]:rounded-3xl min-[660px]:border-2 min-[660px]:border-[#161616] min-[660px]:shadow-[6px_6px_0px_#161616] ${rotateClass[rotate]} min-[660px]:hover:-translate-y-1 min-[660px]:hover:shadow-[8px_8px_0px_#161616] ${
        focusAccent
          ? "group focus-within:border-[#b72b2b] min-[660px]:focus-within:shadow-[6px_6px_0px_#b72b2b]"
          : ""
      } ${tall ? "min-[660px]:min-h-40" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
