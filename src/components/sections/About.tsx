"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden !py-24 sm:!py-16 md:!py-18 lg:!py-24 2xl:!py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ff5a1f12,transparent_30%)]" />

      <div className="container-custom relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-left"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-orange-400">
            About PyroShield
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Engineering Safer
            <span className="text-orange-500"> Industrial Environments</span>
          </h2>

          <p className="mt-8 text-base leading-8 text-zinc-400 sm:text-lg !py-4">
            PyroShield delivers next-generation fire protection systems for
            commercial, industrial and enterprise environments across India.
            Combining intelligent monitoring, advanced suppression systems and
            rapid emergency readiness, we help businesses protect lives,
            infrastructure and operations with confidence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div className="glass-card rounded-[28px] border border-white/10 !p-6">
            <h3 className="text-3xl font-semibold text-orange-500">
              20+
            </h3>

            <p className="mt-3 text-lg font-medium text-white">
              Years Experience
            </p>

            <p className="mt-4 leading-7 text-zinc-400">
              Trusted expertise in fire engineering, industrial safety and
              enterprise-grade protection systems.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card rounded-[28px] border border-white/10 !p-6">
            <h3 className="text-3xl font-semibold text-orange-500">
              500+
            </h3>

            <p className="mt-3 text-lg font-medium text-white">
              Projects Delivered
            </p>

            <p className="mt-4 leading-7 text-zinc-400">
              Successfully securing factories, warehouses, offices and
              commercial infrastructure nationwide.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card rounded-[28px] border border-white/10 !p-6">
            <h3 className="text-3xl font-semibold text-orange-500">
              24/7
            </h3>

            <p className="mt-3 text-lg font-medium text-white">
              Emergency Support
            </p>

            <p className="mt-4 leading-7 text-zinc-400">
              Continuous monitoring, maintenance and rapid response support for
              critical business environments.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}