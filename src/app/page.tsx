import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import StickyShowcase from "@/components/home/StickyShowcase";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import Products3DSection from "@/components/home/Products3DSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StickyShowcase />
      <ServicesSection />
      <StatsSection />
      <IndustriesSection />
      <Products3DSection />
      <CTASection />
      <Footer />
    </main>
  );
}