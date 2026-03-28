import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact Us - HawkEye",
  description:
    "Get in touch with the HawkEye team. We're here to help with your surveillance needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 pt-16">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
