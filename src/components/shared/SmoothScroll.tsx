"use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.07, // tightness of the scroll (lower = smoother/heavier)
        duration: 1, // how long the inertia lasts
        smoothWheel: true, 
      }}
    >
      {children}
    </ReactLenis>
  );
}