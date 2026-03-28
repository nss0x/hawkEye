"use client";

import { motion } from "framer-motion";

interface AnimatedGridProps {
  className?: string;
}

export default function AnimatedGrid({ className = "" }: AnimatedGridProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="grid-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(37, 99, 235, 0.1)" />
            <stop offset="100%" stopColor="rgba(37, 99, 235, 0.05)" />
          </linearGradient>
          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="url(#grid-gradient)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </motion.svg>

      {/* Animated dots */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(37, 99, 235, 0.2) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "100px 100px"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
