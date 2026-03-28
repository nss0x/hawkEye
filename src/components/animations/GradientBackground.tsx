"use client";

import { motion } from "framer-motion";

interface GradientBackgroundProps {
  animate?: boolean;
  className?: string;
}

export default function GradientBackground({
  animate = true,
  className = "",
}: GradientBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        animate={
          animate
            ? {
                backgroundPosition: ["0% 0%", "100% 100%"],
              }
            : {}
        }
        transition={
          animate
            ? {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }
            : {}
        }
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          backgroundSize: "200% 200%",
        }}
      />
    </div>
  );
}
