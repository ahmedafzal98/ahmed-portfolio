"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, memo } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  className?: string;
}

const Reveal = memo(function Reveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className = "",
}: RevealProps) {
  const ref = useRef(null);
  // Optimized: Reduced margin for faster trigger, use once to prevent re-animations
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
  };

  const directionValue = directions[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionValue }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionValue }}
      transition={{
        duration,
        delay,
        ease: [0.21, 1.11, 0.81, 0.99], // Custom easing for smooth feel
      }}
      style={{ 
        willChange: isInView ? 'transform, opacity' : 'auto',
        contentVisibility: 'auto', // CSS optimization for off-screen content
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

export default Reveal;

