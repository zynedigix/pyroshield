"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden  !py-24 sm:!py-16 md:!py-18 lg:!py-24 2xl:!py-32"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#ff5a1f15,transparent_35%)]" />

      <div className="container-custom relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto text-center"
        >
          {/*  max-w-3xl  */}

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-orange-400">
            Contact Us
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Let’s Secure Your
            <span className="text-orange-500"> Business</span>
          </h2>

          <p className="mt-8 text-base leading-8 text-zinc-400 sm:text-lg !py-4">
            Speak with our fire safety experts to discuss consultation,
            inspections and enterprise-grade protection systems.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-20"
        >
          {/*  max-w-4xl */}

          <div className="glass-card rounded-[32px] border border-white/10 p-8 md:p-12 !py-12 !px-12">

            <form className="grid gap-6 md:grid-cols-2">

              {/* Name */}
              <div>
                <label className="!mb-3 block text-sm text-zinc-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 !px-5 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-orange-500/40 focus:bg-orange-500/5"
                />
              </div>

              {/* Email */}
              <div>
                <label className="!mb-3 block text-sm text-zinc-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 !px-5 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-orange-500/40 focus:bg-orange-500/5"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="!mb-3 block text-sm text-zinc-300">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 !px-5 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-orange-500/40 focus:bg-orange-500/5"
                />
              </div>

              {/* Company */}
              <div>
                <label className="!mb-3 block text-sm text-zinc-300">
                  Company Name
                </label>

                <input
                  type="text"
                  placeholder="Enter company name"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 !px-5 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-orange-500/40 focus:bg-orange-500/5"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="!mb-3 block text-sm text-zinc-300">
                  Project Requirement
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your fire safety requirement..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 !p-5 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-orange-500/40 focus:bg-orange-500/5"
                />
              </div>

              {/* Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex h-14 cursor-pointer items-center justify-center rounded-full bg-orange-500 !px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(255,90,31,0.35)]"
                >
                  Request Consultation
                </button>
              </div>

            </form>

          </div>

        </motion.div>
      </div>
    </section>
  );
}