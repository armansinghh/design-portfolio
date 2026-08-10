"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export function CustomScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleScroll = useCallback(() => {
    if (isDragging) return;

    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;

    const progress = window.scrollY / totalHeight;
    setScrollProgress(progress);
    setIsVisible(true);

    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  }, [isDragging]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      setScrollProgress(window.scrollY / totalHeight);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [handleScroll]);

  const handleThumbDrag = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !trackRef.current) return;

      const trackRect = trackRef.current.getBoundingClientRect();
      let newY = e.clientY - trackRect.top;

      if (newY < 0) newY = 0;
      if (newY > trackRect.height) newY = trackRect.height;

      const progress = newY / trackRect.height;
      setScrollProgress(progress);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({
        top: progress * totalHeight,
        behavior: "auto",
      });
    },
    [isDragging],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    document.body.style.userSelect = "auto";
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleThumbDrag);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleThumbDrag);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleThumbDrag, handleMouseUp]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    document.body.style.userSelect = "none";
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    if (e.target !== trackRef.current || !trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();
    const progress = (e.clientY - rect.top) / rect.height;
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({ top: progress * totalHeight, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed top-0 right-4 h-full z-50 flex items-center justify-center pointer-events-none transition-opacity duration-500 ease-in-out ${
        isVisible || isDragging || isHovering ? "opacity-100" : "opacity-0"
      }`}
      style={{ mixBlendMode: "difference" }}
    >
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative w-1 h-[calc(100vh-600px)] bg-white/20 pointer-events-auto cursor-pointer"
      >
        <div
          className="absolute left-0 w-full h-6 bg-white cursor-grab active:cursor-grabbing"
          style={{
            top: `${scrollProgress * 100}%`,
            transform: `translateY(-${scrollProgress * 100}%)`,
          }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  );
}
