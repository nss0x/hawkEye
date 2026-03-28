"use client";

import ScrollReveal from "../animations/ScrollReveal";
import Button from "../common/Button";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 400"
        >
          <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="250" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal direction="up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Upgrade Your Surveillance?
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-lg md:text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations using HawkEye for intelligent surveillance and threat detection.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            className="bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700"
          >
            Start Free Trial
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Schedule Demo
          </Button>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-sm text-blue-100 mt-8">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
