import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import DashboardPreviewSection from "@/components/sections/DashboardPreviewSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Dashboard Preview - HawkEye",
  description:
    "Explore the HawkEye surveillance dashboard with live camera feeds, alerts, and detected objects.",
};

export default function DashboardPreviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 pt-16">
        <DashboardPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
