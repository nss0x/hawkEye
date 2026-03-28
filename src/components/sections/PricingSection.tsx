"use client";

import ScrollReveal from "../animations/ScrollReveal";
import Button from "../common/Button";
import Card from "../common/Card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$199",
    period: "/month",
    description: "Perfect for small businesses and single locations",
    features: [
      "Up to 4 camera feeds",
      "Real-time detection",
      "Basic object recognition",
      "Email alerts",
      "7-day retention",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$599",
    period: "/month",
    description: "For growing enterprises with multiple locations",
    features: [
      "Up to 20 camera feeds",
      "Real-time detection & ANPR",
      "Advanced object recognition",
      "SMS + Email alerts",
      "30-day retention",
      "Priority support",
      "Custom integrations",
      "Night vision optimization",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large-scale deployments with custom needs",
    features: [
      "Unlimited camera feeds",
      "All Professional features",
      "Dedicated account manager",
      "Custom retention",
      "24/7 priority support",
      "On-premise deployment",
      "Custom AI models",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="relative py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your surveillance needs
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <ScrollReveal
              key={tier.name}
              direction="up"
              delay={index * 0.15}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card
                  className={`p-8 flex flex-col h-full ${
                    tier.highlighted
                      ? "border-blue-500 bg-gradient-to-br from-blue-50 dark:from-blue-900/10 to-white dark:to-gray-900"
                      : ""
                  }`}
                  glass={tier.highlighted}
                  hover={true}
                >
                  {/* Popular Badge */}
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Tier Name */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      {tier.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">
                      {tier.period}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={tier.highlighted ? "primary" : "outline"}
                    size="lg"
                    className="w-full mb-8"
                  >
                    {tier.cta}
                  </Button>

                  {/* Features List */}
                  <div className="space-y-4 flex-1">
                    {tier.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start space-x-3"
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Comparison Table */}
        <ScrollReveal direction="up" delay={0.5} className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              What's Included
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">
                    Starter
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">
                    Professional
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "AI Object Detection",
                    starter: true,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "License Plate Recognition",
                    starter: false,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "Night Vision",
                    starter: false,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "API Access",
                    starter: false,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "Dedicated Support",
                    starter: false,
                    pro: false,
                    enterprise: true,
                  },
                ].map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-gray-200 dark:border-gray-800"
                  >
                    <td className="py-4 px-4 text-gray-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.starter ? (
                        <Check className="w-5 h-5 text-green-500 inline" />
                      ) : (
                        <span className="text-gray-400">−</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.pro ? (
                        <Check className="w-5 h-5 text-green-500 inline" />
                      ) : (
                        <span className="text-gray-400">−</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.enterprise ? (
                        <Check className="w-5 h-5 text-green-500 inline" />
                      ) : (
                        <span className="text-gray-400">−</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
