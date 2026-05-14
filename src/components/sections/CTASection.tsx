"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black !py-32 sm:!py-16 md:!py-18 lg:!py-24 2xl:!py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff5a1f15,transparent_35%)]" />

      {/* Animated Glow Orbs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-orange-500/10 blur-[140px]"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-orange-500/10 blur-[140px]"
      />

      <div className="container-custom relative z-10">

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[48px] border border-orange-500/10 bg-white/[0.03] !px-12 !py-12 text-center backdrop-blur-2xl md:px-16"
        >

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#ff5a1f12,transparent_40%,#ffffff05)]" />

          {/* Small Label */}
          <p className="relative z-10 mb-6 text-sm uppercase tracking-[0.4em] text-orange-400">
            Secure Your Infrastructure
          </p>

          {/* Main Heading */}
          <h2 className="font-heading relative z-10 mx-auto leading-[0.92] tracking-tight text-white md:text-7xl xl:text-[92px] !py-4">
            Protection That
            <br />
            Never Sleeps.
          </h2>

          {/* Description */}
          <p className="relative z-10 mx-auto mt-10 text-lg leading-8 text-zinc-400 !py-4">
            Partner with PyroShield to build enterprise-grade fire protection
            systems engineered for modern businesses, industrial facilities and
            mission-critical infrastructures across India.
          </p>

          {/* CTA Buttons */}
          <div className="relative z-10 mt-14 flex flex-wrap items-center justify-center gap-5 !py-4">

            {/* Primary Button */}
            <button className="!px-6 group inline-flex h-12 cursor-pointer items-center gap-2 rounded-full bg-orange-500 px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(255,90,31,0.35)]">

              Request Consultation

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* Secondary Button */}
            
            <a
              href="#about"
              className="!px-6 inline-flex h-12 cursor-pointer items-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/10"
              >
                Explore Solutions
              </a>
          </div>

          {/* Bottom Decorative Line */}
          <div className="relative z-10 mt-16 flex justify-center">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
        </div>
        </motion.div>
      </div>
    </section>
  );
}