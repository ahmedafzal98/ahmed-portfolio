"use client";

import { useEffect, useState, useRef } from "react";

interface FluidMeshProps {
  intensity?: "subtle" | "medium" | "strong";
  colors?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
  };
  className?: string;
  enableMouseTracking?: boolean;
}

export default function FluidMesh({
  intensity = "subtle",
  colors,
  className = "",
  enableMouseTracking = false,
}: FluidMeshProps) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 50, y: 50 });

  // Throttled mouse tracking using requestAnimationFrame
  useEffect(() => {
    if (!enableMouseTracking) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          setMousePosition(mouseRef.current);
          rafRef.current = null;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enableMouseTracking]);

  // Intensity-based opacity - Enhanced for better visibility
  const opacityMap = {
    subtle: "opacity-30",
    medium: "opacity-50",
    strong: "opacity-70",
  };

  // Default colors (teal, electric blue, purple) - Much more vibrant for visibility
  const defaultColors = {
    primary: colors?.primary || "rgba(20, 184, 166, 0.6)", // teal-500 - much more visible
    secondary: colors?.secondary || "rgba(37, 99, 235, 0.6)", // electric-500 - much more visible
    tertiary: colors?.tertiary || "rgba(147, 51, 234, 0.5)", // purple-500 - much more visible
  };

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
      style={{ transform: "translateZ(0)", willChange: "transform" }}
    >
      {/* Optimized: Single Fluid Mesh Layer with enhanced visibility */}
      <div
        className={`absolute inset-0 ${opacityMap[intensity]} fluid-mesh-1`}
        style={{
          background: `radial-gradient(circle at 20% 30%, ${defaultColors.primary} 0%, transparent 50%),
                       radial-gradient(circle at 80% 70%, ${defaultColors.secondary} 0%, transparent 50%)`,
          filter: "blur(80px)",
          transform: "translateZ(0)",
          willChange: "transform",
          mixBlendMode: "normal",
        }}
      />
      
      {/* Second layer - enhanced visibility */}
      <div
        className={`absolute inset-0 ${opacityMap[intensity]} fluid-mesh-2`}
        style={{
          background: `radial-gradient(circle at 60% 20%, ${defaultColors.secondary} 0%, transparent 50%),
                       radial-gradient(circle at 30% 80%, ${defaultColors.primary} 0%, transparent 50%)`,
          filter: "blur(60px)",
          transform: "translateZ(0)",
          willChange: "transform",
          mixBlendMode: "normal",
        }}
      />

      {/* Interactive Mouse-Following Gradient - Only if enabled */}
      {enableMouseTracking && (
        <div
          className={`absolute inset-0 ${opacityMap[intensity]}`}
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}% ${mousePosition.y}%, ${defaultColors.tertiary} 0%, transparent 60%)`,
            filter: "blur(60px)",
            transform: "translateZ(0)",
            willChange: "transform",
            mixBlendMode: "normal",
            transition: "background 0.3s ease-out",
          }}
        />
      )}
    </div>
  );
}

