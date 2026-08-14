"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/config";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
      <motion.div
        initial={{ opacity: 1, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-serif text-[#27272A] mb-6 leading-tight">
          {siteConfig.heroTitle}
        </h1>
        <p className="text-[#71717A] text-lg max-w-xl mx-auto mb-12">
          {siteConfig.heroSubtitle}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-[#71717A]"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
