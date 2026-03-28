"use client";

import ScrollReveal from "../animations/ScrollReveal";
import Button from "../common/Button";
import { Play } from "lucide-react";

export default function ProductDemoSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              See It in Action
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Watch HawkEye detect threats in real-time with advanced AI capabilities
            </p>
          </ScrollReveal>
        </div>

        {/* Video Placeholder */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 group cursor-pointer">
              {/* Video thumbnail placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                {/* Grid pattern */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  viewBox="0 0 800 600"
                >
                  <defs>
                    <linearGradient
                      id="demo-grid"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                      <stop offset="100%" stopColor="rgba(37, 99, 235, 0.1)" />
                    </linearGradient>
                  </defs>
                  <g stroke="url(#demo-grid)" strokeWidth="0.5">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <line
                        key={`h-${i}`}
                        x1="0"
                        y1={i * 15}
                        x2="800"
                        y2={i * 15}
                      />
                    ))}
                    {Array.from({ length: 54 }).map((_, i) => (
                      <line
                        key={`v-${i}`}
                        x1={i * 15}
                        y1="0"
                        x2={i * 15}
                        y2="600"
                      />
                    ))}
                  </g>
                </svg>

                {/* Play button */}
                <button className="relative z-10 w-20 h-20 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 shadow-2xl">
                  <Play className="w-8 h-8 ml-1" />
                </button>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>

            {/* Shadow/glow under video */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-blue-500 blur-2xl opacity-20" />
          </div>
        </ScrollReveal>

        {/* Features highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Real-time Detection",
              description: "See threats detected instantly",
            },
            {
              title: "Multiple Angles",
              description: "View from different camera feeds",
            },
            {
              title: "Alert Notifications",
              description: "Instant alerts to your team",
            },
          ].map((feature, i) => (
            <ScrollReveal key={i} direction="up" delay={0.3 + i * 0.1}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 rounded-full border-2 border-blue-500" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
