"use client";

import ScrollReveal from "../animations/ScrollReveal";
import { motion } from "framer-motion";
import {
  Camera,
  Cpu,
  AlertCircle,
  Bell,
} from "lucide-react";

const steps = [
  {
    icon: <Camera className="w-7 h-7" />,
    title: "Capture",
    description: "Video streams from cameras are captured in real-time",
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "Process",
    description: "AI models analyze frames and extract meaningful data",
  },
  {
    icon: <AlertCircle className="w-7 h-7" />,
    title: "Detect",
    description: "Threats and anomalies are identified with precision",
  },
  {
    icon: <Bell className="w-7 h-7" />,
    title: "Alert",
    description: "Instant notifications sent to security personnel",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A seamless workflow from capture to alert, powered by advanced AI
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent dark:via-blue-600" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <ScrollReveal
                key={step.title}
                direction="up"
                delay={index * 0.15}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  {/* Step number / circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg relative z-10"
                  >
                    <div className="text-2xl font-bold">{index + 1}</div>
                  </motion.div>

                  {/* Icon inside circle */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {step.description}
                  </p>

                  {/* Arrow for larger screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-8 text-2xl text-blue-400 dark:text-blue-600">
                      →
                    </div>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA at bottom */}
        <ScrollReveal direction="up" delay={0.6} className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Ready to experience intelligent surveillance?
          </p>
          <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
            Start Free Trial
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
