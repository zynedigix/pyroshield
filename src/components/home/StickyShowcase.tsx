"use client";

import { motion } from "framer-motion";

const showcaseItems = [
  {
    title: "Smart Fire Detection",
    description:
      "AI-powered fire detection systems designed for modern Indian commercial infrastructures.",
    number: "01",
  },
  {
    title: "Industrial Grade Protection",
    description:
      "Advanced suppression systems engineered for factories, warehouses and enterprise facilities.",
    number: "02",
  },
  {
    title: "24/7 Emergency Response",
    description:
      "Rapid emergency support and maintenance services ensuring continuous operational safety.",
    number: "03",
  },
];

export default function StickyShowcase() {
  return (
    <section className="relative bg-black">

      {/* SECTION HEADER */}
      <div className="container-custom py-32">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-400">
            Advanced Fire Engineering
          </p>

          <h2 className="font-heading text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
            Protection Built
            <br />
            For Modern India.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
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
              <div className="container-custom relative z-10 grid gap-16 lg:grid-cols-2">

                {/* LEFT SIDE */}
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, amount: 0.4 }}
                  className="flex flex-col justify-center"
                >

                  <span className="mb-6 text-sm uppercase tracking-[0.4em] text-orange-400">
                    {item.number}
                  </span>

                  <h3 className="font-heading text-5xl leading-[1] tracking-tight text-white md:text-7xl">
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
                  className="relative flex items-center justify-center"
                >

                  {/* Glow */}
                  <div className="absolute h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-[120px]" />

                  {/* Premium Card */}
                  <div className="glass-card orange-glow relative flex h-[500px] w-full max-w-[520px] items-center justify-center overflow-hidden rounded-[40px] border border-orange-500/10">

                    {/* Animated Gradient */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#ff5a1f10,transparent_40%,#ffffff05)]" />

                    {/* Number */}
                    <h1 className="font-heading text-[140px] font-semibold leading-none tracking-tight text-white/10">
                      {item.number}
                    </h1>

                    {/* Floating Orb */}
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute h-40 w-40 rounded-full bg-orange-500/30 blur-3xl"
                    />
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