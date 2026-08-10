"use client";
import { useEffect, useRef, type RefObject } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  animate,
  type AnimationPlaybackControls,
} from "framer-motion";

type ScrollSnakeProps = {
  containerRef: RefObject<HTMLElement | null>;
};

const VIEWBOX_HEIGHT = 1500;
const PATH_D =
  "M 700 -5 C 930 709 261 205 117 737 C 38 1020 200 1313 369 1360 C 597 1380 642 933 428 913 C 160 908 4 1290 210 1950";

const SCROLL_HANDOFF = 0.55;
const PATH_AT_HANDOFF = 0.55;
const FORWARD_DURATION = 1.2;
const BACKWARD_DURATION = 0.8;
const BRIDGE_DURATION = 0.5;
const DEBOUNCE_MS = 80;

export function ScrollSnake({ containerRef }: ScrollSnakeProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    const container = containerRef?.current;
    if (!svgEl || !container) return;
    const syncHeight = () => {
      const h = container.getBoundingClientRect().height;
      if (h) svgEl.style.height = `${h}px`;
    };
    syncHeight();
    const ro = new ResizeObserver(syncHeight);
    ro.observe(container);
    return () => ro.disconnect();
  }, [containerRef]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const drawnAmount = useMotionValue(0);
  const handoffState = useRef<"scroll" | "forward" | "backward" | "bridging">(
    "scroll",
  );
  const autoplayControls = useRef<AnimationPlaybackControls | null>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollDrawn = useTransform(
    scrollYProgress,
    [0, SCROLL_HANDOFF],
    [0, PATH_AT_HANDOFF],
  );

  useMotionValueEvent(scrollDrawn, "change", (v) => {
    if (handoffState.current === "scroll") {
      drawnAmount.set(v);
    }
  });

  const clearDebounce = () => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = null;
    }
  };

  const playForward = () => {
    handoffState.current = "forward";
    autoplayControls.current?.stop();
    autoplayControls.current = animate(drawnAmount, 1, {
      duration: FORWARD_DURATION,
      ease: "easeInOut",
    });
  };

  const playBackward = () => {
    handoffState.current = "backward";
    autoplayControls.current?.stop();
    autoplayControls.current = animate(drawnAmount, PATH_AT_HANDOFF, {
      duration: BACKWARD_DURATION,
      ease: "easeInOut",
      onComplete: () => {
        if (handoffState.current !== "backward") return;
        const liveTarget = scrollDrawn.get();
        const current = drawnAmount.get();

        if (Math.abs(liveTarget - current) < 0.001) {
          handoffState.current = "scroll";
          return;
        }

        handoffState.current = "bridging";
        autoplayControls.current = animate(drawnAmount, liveTarget, {
          duration: BRIDGE_DURATION,
          ease: "easeInOut",
          onComplete: () => {
            if (handoffState.current === "bridging") {
              handoffState.current = "scroll";
            }
          },
        });
      },
    });
  };

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const pastHandoff = v >= SCROLL_HANDOFF;

    if (!pastHandoff && handoffState.current === "forward") {
      clearDebounce();
      debounceTimer.current = setTimeout(() => {
        if (scrollYProgress.get() < SCROLL_HANDOFF) playBackward();
      }, DEBOUNCE_MS);
      return;
    }

    if (pastHandoff && handoffState.current === "backward") {
      clearDebounce();
      debounceTimer.current = setTimeout(() => {
        if (scrollYProgress.get() >= SCROLL_HANDOFF) playForward();
      }, DEBOUNCE_MS);
      return;
    }

    if (pastHandoff && handoffState.current === "bridging") {
      clearDebounce();
      playForward();
      return;
    }

    if (pastHandoff && handoffState.current === "scroll") {
      clearDebounce();
      playForward();
      return;
    }

    if (!pastHandoff && handoffState.current === "scroll") {
      clearDebounce();
    }
  });

  useEffect(() => clearDebounce, []);

  const dashOffset = useTransform(drawnAmount, (v) => 1 - v);

  return (
    <svg
      ref={svgRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-0"
      fill="none"
      stroke="#facc15"
      strokeWidth="42"
      strokeLinecap="round"
      preserveAspectRatio="none"
      viewBox={`0 0 1000 ${VIEWBOX_HEIGHT}`}
    >
      <motion.path
        d={PATH_D}
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        strokeDasharray={1}
        style={{ strokeDashoffset: dashOffset }}
      />
    </svg>
  );
}
