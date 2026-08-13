import { BentoCard } from "./BentoCard";

interface BentoFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email";
  textarea?: boolean;
  span?: string;
  rotate?: "left" | "right" | "none";
}

export function BentoField({
  id,
  label,
  placeholder,
  type = "text",
  textarea = false,
  span,
  rotate,
}: BentoFieldProps) {
  return (
    <BentoCard span={span} rotate={rotate} focusAccent tall={textarea}>
      <label
        htmlFor={id}
        className="font-bytesized text-sm uppercase tracking-widest text-[#161616]/40 group-focus-within:text-[#b72b2b] transition-colors cursor-pointer"
      >
        {label}
      </label>

      {textarea ? (
        <textarea
          id={id}
          required
          rows={3}
          placeholder={placeholder}
          className="w-full min-[660px]:h-full bg-transparent font-bytesized font-medium text-base min-[660px]:text-lg md:text-xl placeholder-[#161616]/20 outline-none resize-none pt-1"
        />
      ) : (
        <input
          id={id}
          type={type}
          required
          placeholder={placeholder}
          className="w-full bg-transparent font-bytesized font-semibold text-base min-[660px]:text-xl md:text-2xl placeholder-[#161616]/20 outline-none"
        />
      )}
    </BentoCard>
  );
}
