"use client";

import ScrollReveal from "../animations/ScrollReveal";
import { Zap, Shield, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About HawkEye
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Pioneering AI-powered surveillance for a more secure tomorrow
            </p>
          </ScrollReveal>
        </div>

        {/* Mission Statement */}
        <ScrollReveal direction="up" delay={0.2} className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              At HawkEye, we believe that advanced AI and machine learning should be accessible to everyone who needs reliable surveillance solutions. Our mission is to empower security teams with intelligent systems that detect threats in real-time, allowing them to respond faster and protect what matters most.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We combine cutting-edge AI technology with practical edge computing solutions, enabling surveillance that is smarter, faster, and more intuitive than ever before.
            </p>
          </div>
        </ScrollReveal>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Innovation",
              description:
                "Constantly advancing our AI models and surveillance capabilities",
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Security First",
              description:
                "Privacy and data security are built into everything we do",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Customer Focus",
              description:
                "Your needs drive our product development and roadmap",
            },
          ].map((value, i) => (
            <ScrollReveal key={i} direction="up" delay={0.3 + i * 0.1}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
