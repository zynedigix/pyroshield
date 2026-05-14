"use client";

import { motion } from "framer-motion";

import {
  FaBroadcastTower,
  FaShieldAlt,
  FaBell,
} from "react-icons/fa";

const services = [
  {
    title: "Smart Fire Detection",
    description:
      "AI-powered fire and smoke monitoring systems engineered for intelligent early threat detection.",
    icon: FaBroadcastTower,
  },
  {
    title: "Industrial Grade Protection",
    description:
      "Enterprise fire suppression systems designed for mission-critical industrial infrastructures.",
    icon: FaShieldAlt,
  },
  {
    title: "24/7 Emergency Response",
    description:
      "Rapid-response emergency support teams delivering continuous protection and operational safety.",
    icon: FaBell,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-black !py-24 sm:!py-16 md:!py-18 lg:!py-24 2xl:!py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ff5a1f12,transparent_30%)]" />

      <div className="container-custom relative z-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-3xl text-left"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-400">
            Enterprise Fire Solutions
          </p>

          <h2 className="font-heading text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
            Complete Safety
            <br />
            Infrastructure.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400 !py-6">
            Premium fire protection systems engineered for modern businesses,
            industries and high-performance infrastructures across India.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.03] !p-8 backdrop-blur-xl transition-all duration-500 hover:border-orange-500/20 hover:bg-orange-500/[0.04]"
              >

                {/* Glow */}
                <div className="absolute right-0 top-0 h-40 w-40 bg-orange-500/10 blur-[100px] transition-all duration-500 group-hover:bg-orange-500/20" />

                {/* Floating Icon */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative mb-10 flex h-20 w-20 items-center justify-center rounded-3xl border border-orange-500/20 bg-orange-500/10 backdrop-blur-xl"
                >

                <div className="absolute inset-0 rounded-3xl bg-orange-500/20 blur-2xl" />

                <IconComponent className="relative z-20 text-[36px] text-white drop-shadow-[0_0_20px_rgba(255,90,31,0.8)]" />
                </motion.div>

                {/* Title */}
                <h3 className="relative z-10 text-3xl font-semibold tracking-tight text-white !py-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-6 text-base leading-8 text-zinc-400">
                  {service.description}
                </p>

                {/* Bottom Line */}
                <div className="relative z-10 mt-10 h-[1px] w-20 bg-gradient-to-r from-orange-500/60 to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}