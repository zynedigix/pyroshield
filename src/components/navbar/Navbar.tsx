"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  "Services",
  "Products",
  "Industries",
  "About",
  "Contact",
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "border-b border-white/10 bg-black/40 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom flex h-20 items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="orange-glow h-3 w-3 rounded-full bg-orange-500" />

            <h2 className="font-heading text-xl font-semibold tracking-tight text-white">
              PyroShield
            </h2>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-zinc-300 transition-all duration-300 hover:text-orange-400"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA BUTTON */}
          <div className="hidden lg:flex">
            <button className="inline-flex h-14 items-center justify-center rounded-full bg-orange-500 px-8 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(255,90,31,0.4)]">
              Get Quote
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/10 lg:hidden"
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-red-500 backdrop-blur-2xl lg:hidden"
          >

            {/* MOBILE MENU CONTENT */}
            <div className="flex flex-col items-center gap-10">

              {/* MOBILE NAV LINKS */}
              {navLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setMobileMenu(false)}
                  className="text-3xl font-medium tracking-tight text-white transition-all duration-300 hover:text-orange-400"
                >
                  {item}
                </a>
              ))}

              {/* MOBILE CTA BUTTON */}
              <button className="inline-flex h-16 items-center justify-center rounded-full bg-red-500 px-12 text-2xl font-bold text-white">
                Get Quote
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}