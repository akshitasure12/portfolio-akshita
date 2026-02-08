"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let targetX = 0.5;
    let targetY = 0.5;
    let glowX = 0.5;
    let glowY = 0.5;

    const handleMouse = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth;
      targetY = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", handleMouse);

    // Touch support: follow first touch
    const handleTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) {
        targetX = t.clientX / window.innerWidth;
        targetY = t.clientY / window.innerHeight;
      }
    };
    window.addEventListener("touchmove", handleTouch, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains("dark");

      // Increase responsiveness for more "sticky" blob feel
      const smoothingFactor = 0.18; // Higher = follows faster

      glowX += (targetX - glowX) * smoothingFactor;
      glowY += (targetY - glowY) * smoothingFactor;

      const x = glowX * canvas.width;
      const y = glowY * canvas.height;

      // radius proportional to viewport for a wide spread
      const r = Math.max(canvas.width, canvas.height) * 0.32;

      if (isDark) {
        const glowColor = "#6366F1"; // indigo

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, `${glowColor}66`);
        gradient.addColorStop(0.35, `${glowColor}33`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        const glowColor = "#93C5FD"; // light blue

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        // softer center, more spread
        gradient.addColorStop(0, `${glowColor}55`);
        gradient.addColorStop(0.38, `${glowColor}22`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("touchmove", handleTouch as any);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </>
  );
}
