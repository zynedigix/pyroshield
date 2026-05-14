import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import StickyShowcase from "@/components/sections/StickyShowcase";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import Products3DSection from "@/components/sections/Products3DSection";
import CTASection from "@/components/sections/CTASection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/home/Footer";
import ScrollToTop from "@/components/home/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <StickyShowcase />
      <ServicesSection />
      <StatsSection />
      <IndustriesSection />
      <Products3DSection />
      <CTASection />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}