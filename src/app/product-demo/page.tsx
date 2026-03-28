import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ProductDemoSection from "@/components/sections/ProductDemoSection";
import DashboardPreviewSection from "@/components/sections/DashboardPreviewSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Product Demo - HawkEye",
  description:
    "See HawkEye surveillance technology in action with our interactive product demo.",
};

export default function ProductDemoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 pt-16">
        <ProductDemoSection />
        <DashboardPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
