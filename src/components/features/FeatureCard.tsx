import React, { ReactNode } from "react";
import Card from "../common/Card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <Card
      glass
      className="p-8 group h-full animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {description}
      </p>

      {/* Accent line on hover */}
      <div className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-16 transition-all duration-500" />
    </Card>
  );
}
