"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    title: "Fire Extinguishers",
    description:
      "Premium suppression equipment engineered for rapid emergency response and industrial-grade reliability.",
    image: "/images/products/extinguisher-v2.webp",
  },
  {
    title: "Hydrant Systems",
    description:
      "Advanced hydrant infrastructure designed for enterprise facilities and high-capacity environments.",
    image: "/images/products/hydrant-v2.webp",
  },
  {
    title: "Smoke Detection",
    description:
      "AI-powered smoke monitoring systems with intelligent real-time environmental analysis.",
    image: "/images/products/smoke-detector-v2.webp",
  },
  {
    title: "Sprinkler Systems",
    description:
      "Automated fire suppression technology optimized for modern commercial infrastructures.",
    image: "/images/products/sprinkler-v2.webp",
  },
];

export default function Products3DSection() {
  return (
    <section className="relative overflow-hidden bg-black py-32">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff5a1f10,transparent_35%)]" />

      <div className="container-custom relative z-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-28 max-w-4xl text-center"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-400">
            Advanced Protection Products
          </p>

          <h2 className="font-heading text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
            Built For Critical
            <br />
            Fire Protection.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Enterprise-grade fire safety products engineered with intelligent
            technology, industrial durability and premium performance standards.
          </p>
        </motion.div>

        {/* PRODUCTS GRID */}
        <div className="grid gap-10 lg:grid-cols-2">

          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#ff5a1f10,transparent_40%,#ffffff05)]" />

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 blur-3xl" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col lg:flex-row">

                {/* LEFT CONTENT */}
                <div className="flex flex-1 flex-col justify-center p-10">

                  <p className="mb-5 text-sm uppercase tracking-[0.35em] text-orange-400">
                    Premium Equipment
                  </p>

                  <h3 className="font-heading text-4xl leading-tight tracking-tight text-white md:text-5xl">
                    {product.title}
                  </h3>

                  <p className="mt-6 max-w-md text-base leading-8 text-zinc-400">
                    {product.description}
                  </p>

                  {/* Small Line */}
                  <div className="mt-10 h-[1px] w-20 bg-orange-500/40" />
                </div>

                {/* RIGHT PRODUCT IMAGE */}
                <div className="relative flex min-h-[420px] flex-1 items-center justify-center overflow-hidden">

                  {/* Floating Glow */}
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute h-56 w-56 rounded-full bg-orange-500/20 blur-3xl"
                  />

                  {/* Product Image */}
                  <motion.div
                    whileHover={{
                      rotate: 4,
                      scale: 1.05,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                    }}
                    className="relative z-10"
                  >

                    <Image
                      src={product.image}
                      alt={product.title}
                      width={420}
                      height={420}
                      className="object-contain drop-shadow-[0_0_40px_rgba(255,90,31,0.25)]"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-[40px] border border-transparent transition-all duration-500 group-hover:border-orange-500/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}