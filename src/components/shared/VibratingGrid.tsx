"use client";

import { useEffect, useRef } from "react";

export function VibratingGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // grid settings
    const spacing = 20; // distance bw grid lines
    const tension = 0.05; // how tight the string is
    const friction = 0.65; // how long it vibrates before stopping
    const interactionRadius = 30; // how close the mouse needs to be (shorter so it only plucks less lines)
    const velocityThreshold = 20; // minimum mouse speed to trigger a pluck

    let mouse = { x: -1000, y: -1000, vx: 0, vy: 0 };
    let lastMouse = { x: -1000, y: -1000 };

    const hLines: { y: number; cpY: number; vy: number }[] = [];
    const vLines: { x: number; cpX: number; vx: number }[] = [];

    for (let y = spacing; y < height; y += spacing) {
      hLines.push({ y, cpY: y, vy: 0 });
    }
    for (let x = spacing; x < width; x += spacing) {
      vLines.push({ x, cpX: x, vx: 0 });
    }

    const handleMouseMove = (e: MouseEvent) => {
      lastMouse = { x: mouse.x, y: mouse.y };
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      mouse.vx = mouse.x - lastMouse.x;
      mouse.vy = mouse.y - lastMouse.y;
      const speed = Math.sqrt(mouse.vx ** 2 + mouse.vy ** 2);

      if (speed > velocityThreshold) {
        hLines.forEach((line) => {
          if (Math.abs(mouse.y - line.y) < interactionRadius) {
            line.vy += mouse.vy * 0.5;
          }
        });
        vLines.forEach((line) => {
          if (Math.abs(mouse.x - line.x) < interactionRadius) {
            line.vx += mouse.vx * 0.5;
          }
        });
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // line style
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 2;

      hLines.forEach((line) => {
        line.vy += (line.y - line.cpY) * tension;
        line.vy *= friction;
        line.cpY += line.vy;

        ctx.beginPath();
        ctx.moveTo(0, line.y);
        if (Math.abs(mouse.y - line.y) < interactionRadius * 2) {
          ctx.quadraticCurveTo(mouse.x, line.cpY, width, line.y);
        } else {
          ctx.lineTo(width, line.y);
        }
        ctx.stroke();
      });

      vLines.forEach((line) => {
        line.vx += (line.x - line.cpX) * tension;
        line.vx *= friction;
        line.cpX += line.vx;

        ctx.beginPath();
        ctx.moveTo(line.x, 0);
        if (Math.abs(mouse.x - line.x) < interactionRadius * 2) {
          ctx.quadraticCurveTo(line.cpX, mouse.y, line.x, height);
        } else {
          ctx.lineTo(line.x, height);
        }
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundSize: "200px 200px",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`,
      }}
    />
  );
}
