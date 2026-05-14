"use client";

import { motion } from "framer-motion";
import { FaFireExtinguisher, FaShieldAlt, FaBell } from "react-icons/fa";

const showcaseItems = [
  {
    number: "01",
    title: "Smart Fire Detection",
    description:
      "AI-powered fire detection systems designed for modern commercial infrastructure.",
    image: "/images/fire/fire-01-smart-detection.webp",
  },
  {
    number: "02",
    title: "Industrial Grade Protection",
    description:
      "Enterprise-grade suppression systems engineered for factories and warehouses.",
    image: "/images/fire/fire-02-industrial-protection.webp",
  },
  {
    number: "03",
    title: "24/7 Emergency Response",
    description:
      "Rapid emergency support and continuous monitoring for mission-critical facilities.",
    image: "/images/fire/fire-03-emergency-response.webp",
  },
];

export default function StickyShowcase() {
  return (
    <section className="relative bg-black !py-24 sm:!py-16 md:!py-18 lg:!py-24 2xl:!py-24">

      {/* SECTION HEADER */}
      <div className="container-custom py-32">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl text-left"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-400">
            Advanced Fire Engineering
          </p>

          <h2 className="font-heading text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
            Protection Built
            <br />
            For Modern India.
          </h2>

          <p className="!pt-4 max-w-2xl text-lg leading-8 text-zinc-400 md:!pb-6">
            Premium fire and safety systems combining intelligent monitoring,
            industrial-grade engineering and rapid emergency readiness.
          </p>
        </motion.div>
      </div>

      {/* STICKY SCROLL AREA */}
      <div className="relative">

        {showcaseItems.map((item, index) => (
          <section
            key={index}
            className="relative h-[120vh]"
          >

            {/* Sticky Content */}
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

              {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ff5a1f15,transparent_35%)]" />

              {/* Content */}
              <div className="container-custom relative z-10 grid gap-16 lg:grid-cols-2 md:!pt-32">

                {/* LEFT SIDE */}
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.4 }}
                  className="flex flex-col justify-center md:!pt-24"
                >

                  {/* <span className="mb-6 text-sm uppercase tracking-[0.4em] text-orange-400">
                    {item.number}
                  </span> */}

                  <h3 className="font-heading text-5xl leading-[1] tracking-tight text-white md:text-7xl sm:!pt-6px">
                    {item.title}
                  </h3>

                  <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                    {item.description}
                  </p>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative flex items-center justify-center md:!pb-32"
                >

                  {/* Glow */}
                  <div className="absolute h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-[120px]" />

                  {/* CARD */}
                  <div className="glass-card orange-glow relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[500px] 2xl:h-[560px] w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[520px] overflow-hidden rounded-[40px] border border-orange-500/10">

                    {/* IMAGE GOES HERE 👇 */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover scale-105 transition-transform duration-700 hover:scale-110 !pb-6"
                    />

                    {/* Gradient overlay (keeps text readable) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Bottom text */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      {/* <p className="text-orange-400 text-sm tracking-widest">
                        {item.number}
                      </p> */}
                      <h3 className="text-white text-xl font-semibold !pl-6 !pb-6">
                        {item.title}
                      </h3>
                    </div>

                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}