"use client";

import { motion } from "framer-motion";
import {
    Mail,
    MapPin,
    Phone,
  } from "lucide-react";
  
  import {
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa"; 

const footerLinks = [
  "Services",
  "Products",
  "Industries",
  "About",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black !pt-24 sm:!pt-16 md:!pt-18 lg:!pt-24 2xl:!pt-24">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#ff5a1f10,transparent_30%)]" />

      <div className="container-custom relative z-10">

        {/* TOP AREA */}
        <div className="grid gap-16 border-b border-white/5 pb-16 lg:grid-cols-3 !pb-8">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-orange-500" />

              <h2 className="font-heading text-3xl tracking-tight text-white !py-4">
                PyroShield
              </h2>
            </div>

            {/* Description */}
            <p className="mt-8 max-w-md text-base leading-8 text-zinc-400">
              Premium fire protection systems engineered for modern industrial,
              enterprise and commercial infrastructures across India.
            </p>
          </motion.div>

          {/* CENTER */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >

            <p className="mb-8 text-sm uppercase tracking-[0.35em] text-orange-400 !py-4">
              Navigation
            </p>

            <div className="flex flex-col gap-5">

              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-lg text-zinc-300 transition-all duration-300 hover:text-orange-400"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >

            <p className="mb-8 text-sm uppercase tracking-[0.35em] text-orange-400 !py-4">
              Contact
            </p>

            <div className="flex flex-col gap-6">

              {/* Phone */}
              <div className="flex items-start gap-4">

                <Phone
                  size={20}
                  className="!mt-4 text-orange-400"
                />

                <div>
                  <p className="text-zinc-300">
                    +91 98765 43210
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    Emergency Support
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">

                <Mail
                  size={20}
                  className="!mt-4 text-orange-400"
                />

                <div>
                  <p className="text-zinc-300">
                    hello@pyroshield.in
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    Business Enquiries
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">

                <MapPin
                  size={20}
                  className="!mt-4 text-orange-400"
                />

                <div>
                  <p className="text-zinc-300">
                    Bengaluru, India
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    PAN India Operations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM AREA */}
        <div className="flex flex-col items-center justify-between gap-8 !py-6 md:flex-row">

          {/* Copyright */}
          <p className="text-sm text-zinc-500">
            © 2026 PyroShield. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">

            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-400"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-400"
            >
             <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}