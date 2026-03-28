"use client";

import { motion } from "framer-motion";
import Button from "../common/Button";
import ScrollReveal from "../animations/ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      </div>

      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-block mb-6"
        >
          <div className="px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm font-medium text-blue-600 dark:text-blue-400">
            🚀 Next-Generation Surveillance AI
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 text-balance leading-tight"
        >
          HawkEye – Intelligent Surveillance for a Safer World
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-balance"
        >
          AI-powered real-time monitoring and threat detection with advanced object recognition, license plate identification, and night vision optimization.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button variant="primary" size="lg">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg">
            Watch Demo
          </Button>
        </motion.div>

        {/* Floating stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4 max-w-md mx-auto"
        >
          {[
            { number: "99.7%", label: "Detection Accuracy" },
            { number: "<100ms", label: "Response Time" },
            { number: "24/7", label: "Monitoring" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-white/10"
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {stat.number}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
