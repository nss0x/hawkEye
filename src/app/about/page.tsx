import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "About Us - HawkEye",
  description:
    "Learn about HawkEye's mission to revolutionize surveillance with AI-powered technology.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 pt-16">
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
