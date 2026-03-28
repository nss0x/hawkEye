import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PricingSection from "@/components/sections/PricingSection";

export const metadata = {
  title: "Pricing - HawkEye",
  description:
    "Choose the perfect surveillance solution for your business. Simple, transparent pricing from Starter to Enterprise.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 pt-16">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
