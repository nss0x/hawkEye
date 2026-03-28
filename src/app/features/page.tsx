import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Features - HawkEye",
  description:
    "Discover HawkEye's powerful surveillance features including AI object detection, ANPR, and night vision.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 pt-16">
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
