"use client";
import FireExtinguisherScene from "@/components/three/FireExtinguisherScene";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ff5a1f22,transparent_30%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#ff3b0020,transparent_35%)]" />

            {/* Main Container */}
            <div className="container-custom relative z-10 flex min-h-screen flex-col justify-center gap-16 pt-28 pb-16 md:pt-32 lg:flex-row lg:items-center lg:gap-10 lg:pt-20">           

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-2xl"
                >

                    {/* Eyebrow */}
                    <div className="mb-6 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2">
                        <span className="text-xs font-medium uppercase tracking-[0.3em] text-orange-400">
                            India’s Next-Gen Fire Protection
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-[48px] font-semibold leading-[0.92] tracking-tight sm:text-[64px] md:text-[80px] lg:text-[96px]  pt-8 pb-8">
                        Protect <br />
                        Before <span className="text-orange-500">Fire</span> Wins.
                    </h1>

                    {/* Description */}
                    <p className="!mt-4 !mb-4 pt-8 pb-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                        Advanced fire safety systems engineered for industrial,
                        commercial and enterprise environments across India.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">

                        {/* Primary */}
                        <button className="group flex items-center gap-2 rounded-full bg-orange-500 !px-6 !py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-orange-400">
                            Request Inspection

                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>

                        {/* Secondary */}
                        <button className="rounded-full border border-white/10 bg-white/5 !px-6 !py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/10">
                            Explore Systems
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="!mt-6 flex flex-wrap gap-10">

                        <div>
                            <h3 className="text-3xl font-semibold text-orange-500">
                                500+
                            </h3>
                            <p className="mt-1 text-sm text-zinc-500">
                                Projects Delivered
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-semibold text-orange-500">
                                20+
                            </h3>
                            <p className="mt-1 text-sm text-zinc-500">
                                Years Experience
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-semibold text-orange-500">
                                24/7
                            </h3>
                            <p className="mt-1 text-sm text-zinc-500">
                                Emergency Support
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="relative flex h-[420px] w-full items-center justify-center sm:h-[520px] md:h-[620px] lg:h-[700px] lg:w-[60%]"
                >

                    {/* Glow */}
                    <div className="absolute h-full w-full rounded-full bg-orange-500/20 blur-[120px]" />

                    {/* 3D Placeholder */}
                    <div className="glass-card orange-glow relative h-full w-full overflow-hidden rounded-[32px] border border-orange-500/10 p-0 leading-none">

                        {/* Top Label */}
                        <div className="absolute left-6 top-6 z-20">
                            <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
                                Interactive 3D
                            </p>
                        </div>

                        {/* 3D Scene */}
                        <FireExtinguisherScene />

                    </div>


                </motion.div>
            </div>
        </section>
    );
}