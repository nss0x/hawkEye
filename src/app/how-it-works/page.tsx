import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "How It Works - HawkEye",
  description:
    "Learn how HawkEye's AI-powered surveillance system works: Capture, Process, Detect, Alert.",
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 pt-16">
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
