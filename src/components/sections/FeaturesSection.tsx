"use client";

import ScrollReveal from "../animations/ScrollReveal";
import FeatureCard from "../features/FeatureCard";
import {
  Camera,
  Zap,
  Eye,
  Cpu,
  AlertCircle,
  Radio,
} from "lucide-react";

const features = [
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "AI Object Detection",
    description:
      "Advanced machine learning models detect people, vehicles, weapons, and anomalies in real-time with industry-leading accuracy.",
  },
  {
    icon: <Radio className="w-7 h-7" />,
    title: "Real-time Monitoring",
    description:
      "Stream live surveillance feeds with ultra-low latency. Monitor multiple locations simultaneously from a single dashboard.",
  },
  {
    icon: <AlertCircle className="w-7 h-7" />,
    title: "License Plate Recognition",
    description:
      "Automatic ANPR (Automatic Number Plate Recognition) for vehicle identification, tracking, and security compliance.",
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "Night Vision Optimization",
    description:
      "Enhanced infrared and thermal imaging with AI-powered enhancement for 24/7 surveillance capability.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Edge Device Integration",
    description:
      "Deploy directly on Raspberry Pi and edge devices. Process data locally without cloud dependency for reduced latency.",
  },
  {
    icon: <Camera className="w-7 h-7" />,
    title: "Multi-Camera Management",
    description:
      "Manage unlimited camera feeds, automatic failover, and distributed processing across your surveillance network.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-20 md:py-32 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade surveillance capabilities with cutting-edge AI technology
            </p>
          </ScrollReveal>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              direction="up"
              delay={index * 0.1}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 50}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
