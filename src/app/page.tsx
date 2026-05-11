import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import StickyShowcase from "@/components/home/StickyShowcase";
import ServicesSection from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StickyShowcase />
      <ServicesSection />
    </main>
  );
}