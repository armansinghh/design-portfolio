"use client";

import { useEffect, useRef } from "react";

export function ScrollSnake() {
  const svgRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svgEl = svgRef.current;
    const container = svgEl?.parentElement;
    if (!svgEl || !container) return;

    const syncHeight = () => {
      const h = container.getBoundingClientRect().height;
      if (h) svgEl.style.height = `${h}px`;
    };

    syncHeight();
    const ro = new ResizeObserver(syncHeight);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-0"
      fill="none"
      stroke="#facc15"
      strokeWidth="42"
      strokeLinecap="round"
      preserveAspectRatio="none"
      viewBox="0 0 1000 1500"
    >
      <path
        d="M 700 -5 C 930 709 261 205 117 737 C 38 1020 200 1313 369 1360 C 597 1380 642 933 428 913 C 160 908 4 1290 200 1505"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
