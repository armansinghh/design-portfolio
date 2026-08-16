"use client";

import { useState } from "react";
import { BentoCard } from "./BentoCard";

interface BentoFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email";
  textarea?: boolean;
  span?: string;
  rotate?: "left" | "right" | "none";
  required?: boolean;
  hasError?: boolean;
}

export function BentoField({
  id,
  name,
  label,
  placeholder,
  type = "text",
  textarea = false,
  span,
  rotate,
  required = false,
  hasError = false,
}: BentoFieldProps) {
  const [value, setValue] = useState("");
  const isCurrentlyInvalid = hasError && required && value.trim() === "";

  return (
    <BentoCard span={span} rotate={rotate} focusAccent tall={textarea}>
      <label
        htmlFor={id}
        className={`font-bytesized text-sm uppercase tracking-widest transition-colors cursor-pointer flex justify-between ${
          isCurrentlyInvalid
            ? "text-[#b72b2b]"
            : "text-[#161616]/40 group-focus-within:text-[#b72b2b]"
        }`}
      >
        {label}
        {isCurrentlyInvalid && (
          <span className="animate-pulse"> [REQUIRED]</span>
        )}
      </label>

      {textarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={3}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full min-[660px]:h-full bg-transparent font-bytesized font-medium text-base min-[660px]:text-lg md:text-xl outline-none resize-none pt-1 text-[#161616] placeholder-[#161616]/20"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-transparent font-bytesized font-semibold text-base min-[660px]:text-xl md:text-2xl outline-none text-[#161616] placeholder-[#161616]/20"
        />
      )}
    </BentoCard>
  );
}
