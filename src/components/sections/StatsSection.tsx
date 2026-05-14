"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "500+",
    label: "Projects Delivered",
  },
  {
    number: "20+",
    label: "Years Experience",
  },
  {
    number: "1200+",
    label: "Clients Protected",
  },
  {
    number: "24/7",
    label: "Emergency Support",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-black !py-24 sm:!py-16 md:!py-18 lg:!py-24 2xl:!py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff5a1f10,transparent_40%)]" />

      <div className="container-custom relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-4xl text-left"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-400">
            Trusted Across India
          </p>

          <h2 className="font-heading text-5xl leading-[0.95] tracking-tight text-white md:text-7xl !py-2">
            Built On Trust.
            <br />
            Engineered For Safety.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400 !py-4">
            Delivering premium fire protection solutions with proven expertise,
            rapid emergency support and enterprise-grade engineering standards.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.03] !p-6 text-center backdrop-blur-xl transition-all duration-500 hover:border-orange-500/20 hover:bg-white/[0.05]"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />
              </div>

              {/* Number */}
              <h3 className="font-heading relative z-10 text-6xl font-semibold tracking-tight text-orange-400 md:text-7xl">
                {item.number}
              </h3>

              {/* Label */}
              <p className="relative z-10 mt-6 text-base tracking-wide text-zinc-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}