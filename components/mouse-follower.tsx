"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function MouseFollower() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smoothly animate the display position
  useEffect(() => {
    let animationFrameId: number;
    
    const animate = () => {
      setDisplayPos((prevPos) => ({
        x: prevPos.x + (mousePos.x - prevPos.x) * 0.08,
        y: prevPos.y + (mousePos.y - prevPos.y) * 0.08,
      }));
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  if (!mounted) return null;

  // Color scheme based on theme
  const isDark = theme === "dark";
  const primaryColor = isDark
    ? "rgba(59, 130, 246, 0.4)"
    : "rgba(147, 197, 253, 0.35)";
  const primaryColorFaded = isDark
    ? "rgba(59, 130, 246, 0.2)"
    : "rgba(147, 197, 253, 0.2)";
  const secondaryColor = isDark
    ? "rgba(147, 51, 234, 0.1)"
    : "rgba(191, 219, 254, 0.15)";
  const accentColor = isDark
    ? "rgba(99, 102, 241, 0.3)"
    : "rgba(147, 197, 253, 0.25)";
  const coreColor = isDark
    ? "rgba(139, 92, 246, 0.4)"
    : "rgba(191, 219, 254, 0.35)";
  const shadowColor = isDark
    ? "rgba(59, 130, 246, 0.3)"
    : "rgba(147, 197, 253, 0.2)";
  const innerShadowColor = isDark
    ? "rgba(139, 92, 246, 0.2)"
    : "rgba(191, 219, 254, 0.15)";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    >
      {/* Primary large glow - blue/purple gradient */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          left: `${displayPos.x}px`,
          top: `${displayPos.y}px`,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${primaryColor} 0%, ${primaryColorFaded} 25%, ${secondaryColor} 50%, transparent 70%)`,
          filter: "blur(40px)",
          boxShadow: `0 0 80px ${shadowColor}, inset 0 0 60px ${innerShadowColor}`,
        }}
      />

      {/* Secondary medium glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "480px",
          height: "480px",
          left: `${displayPos.x}px`,
          top: `${displayPos.y}px`,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          filter: "blur(30px)",
        }}
      />

      {/* Tertiary accent glow - more purple */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "360px",
          height: "360px",
          left: `${displayPos.x}px`,
          top: `${displayPos.y}px`,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${coreColor} 0%, transparent 60%)`,
          filter: "blur(25px)",
        }}
      />

      {/* Brightest core */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "280px",
          height: "280px",
          left: `${displayPos.x}px`,
          top: `${displayPos.y}px`,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${coreColor} 0%, transparent 70%)`,
          filter: "blur(15px)",
        }}
      />
    </div>
  );
}
