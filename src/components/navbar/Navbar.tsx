"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Industries", href: "#industries" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom flex h-20 items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(255,90,31,0.8)]" />

            <h2 className="text-lg font-semibold tracking-tight text-white">
              PyroShield
            </h2>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-zinc-300 transition-all duration-300 hover:text-orange-400"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <a
              href="#contact"
              className="!px-6 group inline-flex h-12 cursor-pointer items-center gap-2 rounded-full bg-orange-500 px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(255,90,31,0.35)]"
              >
                Get Quote
              </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md"
          >
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/90 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-center gap-8">

              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="text-2xl font-medium text-white hover:text-orange-400 transition"
                >
                  {item.name}
                </a>
              ))}

              <a
              href="#contact"
              className="!px-6 group inline-flex h-12 cursor-pointer items-center gap-2 rounded-full bg-orange-500 px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(255,90,31,0.35)]"
              >
                Get Quote
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}