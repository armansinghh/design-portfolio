import React from "react";

interface HighlightProps {
  children: React.ReactNode;
  color?: "orange" | "yellow" | "green";
  tilt?: string;
}

export function Highlight({ 
  children, 
  color = "orange",
  tilt = "-rotate-1"
}: HighlightProps) {
  
  const colorMap = {
    orange: "bg-[#d97736]",
    yellow: "bg-[#e2c140]",
    green: "bg-[#7ba05b]"
  };

  return (
    <span className="relative inline-block whitespace-nowrap mx-0.5 px-0.5">
      <span className={`absolute inset-0 ${colorMap[color]} ${tilt}`}></span>
      <span className="relative text-[#161616]">{children}</span>
    </span>
  );
}