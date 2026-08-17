"use client";

import { useEffect, useRef, useState } from "react";
import { Footer } from "./Footer";

export function RevealFooter() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setFooterHeight(entry.contentRect.height);
      }
    });
    
    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }
    
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div 
      className="relative w-full z-0" 
      style={{ height: footerHeight }}
    >
      <div 
        ref={footerRef} 
        className="fixed bottom-0 left-0 w-full bg-[#161616]"
      >
        <Footer />
      </div>
    </div>
  );
}