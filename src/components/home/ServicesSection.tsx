"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Flame,
  BellRing,
  Building2,
  Siren,
  ScanSearch,
} from "lucide-react";

const services = [
  {
    icon: BellRing,
    title: "Fire Alarm Systems",
    description:
      "Advanced intelligent alarm systems designed for rapid fire detection and emergency alerts.",
  },
  {
    icon: Flame,
    title: "Sprinkler Systems",
    description:
      "Automated suppression systems engineered for industrial and enterprise-level safety.",
  },
  {
    icon: ShieldCheck,
    title: "AMC Maintenance",
    description:
      "Comprehensive annual maintenance services ensuring continuous fire safety readiness.",
  },
  {
    icon: Building2,
    title: "Hydrant Systems",
    description:
      "Industrial-grade hydrant solutions for commercial buildings and factories.",
  },
  {
    icon: ScanSearch,
    title: "Smoke Detection",
    description:
      "Smart smoke monitoring systems powered for high-accuracy environmental safety.",
  },
  {
    icon: Siren,
    title: "Emergency Planning",
    description:
      "Evacuation systems and emergency preparedness planning for modern infrastructures.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-black py-32">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ff5a1f12,transparent_30%)]" />

      <div className="container-custom relative z-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-400">
            Enterprise Fire Solutions
          </p>

          <h2 className="font-heading text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
            Complete Safety
            <br />
            Infrastructure.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Premium fire protection systems engineered for modern businesses,
            industries and high-performance infrastructures across India.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-orange-500/20 hover:bg-white/[0.05]"
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
                </div>

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/10 bg-orange-500/10 text-orange-400">

                  <Icon size={30} />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">

                  <h3 className="font-heading text-3xl tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-zinc-400">
                    {service.description}
                  </p>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 rounded-[32px] border border-transparent transition-all duration-500 group-hover:border-orange-500/20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}