"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const industries = [
  {
    title: "Hospitals",
    image: "/images/industries/hospital.webp",
  },
  {
    title: "IT Parks",
    image: "/images/industries/it-park.webp",
  },
  {
    title: "Warehouses",
    image: "/images/industries/warehouse.webp",
  },
  {
    title: "Factories",
    image: "/images/industries/factory.webp",
  },
  {
    title: "Shopping Malls",
    image: "/images/industries/mall.webp",
  },
  {
    title: "Residential Towers",
    image: "/images/industries/apartment.webp",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="relative overflow-hidden bg-black !py-24 sm:!py-16 md:!py-18 lg:!py-24 2xl:!py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ff5a1f12,transparent_30%)]" />

      <div className="container-custom relative z-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-4xl text-left"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-400">
            Industries We Protect
          </p>

          <h2 className="font-heading text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
            Engineered For
            <br />
            Critical Infrastructure.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400 !py-4">
            Delivering enterprise-grade fire protection systems across modern
            commercial, industrial and high-risk environments throughout India.
          </p>
        </motion.div>

        {/* INDUSTRIES GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px]"
            >

              {/* Image Wrapper */}
              <div className="relative h-[500px] overflow-hidden">

                {/* Image */}
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 z-10 !p-8">

                  <p className="mb-3 text-sm uppercase tracking-[0.35em] text-orange-400">
                    Protected Sector
                  </p>

                  <h3 className="font-heading text-4xl tracking-tight text-white">
                    {industry.title}
                  </h3>
                </div>

                {/* Border */}
                <div className="absolute inset-0 rounded-[32px] border border-white/10 transition-all duration-500 group-hover:border-orange-500/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}