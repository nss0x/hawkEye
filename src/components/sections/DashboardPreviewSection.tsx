"use client";

import ScrollReveal from "../animations/ScrollReveal";
import DashboardMock from "../demo/DashboardMock";

export default function DashboardPreviewSection() {
  return (
    <section className="relative py-20 md:py-32 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-50 dark:opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-gray-800 dark:via-transparent dark:to-gray-800" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Dashboard Preview
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Intuitive interface for monitoring surveillance across your entire network
            </p>
          </ScrollReveal>
        </div>

        {/* Dashboard Mock */}
        <ScrollReveal direction="up" delay={0.2} className="mb-12">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl opacity-25 blur-xl dark:opacity-10" />

            {/* Dashboard content */}
            <div className="relative bg-gradient-to-b from-gray-950 to-gray-900 rounded-2xl p-6 md:p-8 border border-white/10">
              <DashboardMock />
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Active Cameras", value: "24" },
            { label: "Total Detections", value: "15,243" },
            { label: "Avg Response Time", value: "85ms" },
            { label: "Uptime", value: "99.9%" },
          ].map((stat, i) => (
            <ScrollReveal key={i} direction="up" delay={0.3 + i * 0.1}>
              <div className="bg-white/5 dark:bg-white/5 rounded-lg p-6 border border-white/10 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
