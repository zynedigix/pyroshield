import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import StickyShowcase from "@/components/home/StickyShowcase";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import IndustriesSection from "@/components/home/IndustriesSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StickyShowcase />
      <ServicesSection />
      <StatsSection />
      <IndustriesSection />
    </main>
  );
}