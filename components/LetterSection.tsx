"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface LetterSectionProps {
  onOpen: () => void;
}

export default function LetterSection({ onOpen }: LetterSectionProps) {
  return (
    <section className="py-32 px-6 flex flex-col items-center justify-center relative z-10">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-serif text-center mb-12"
      >
        Letter
      </motion.h2>

      {/* Envelope UI */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpen}
        className="relative w-64 h-48 bg-[#F5E6E8] rounded-xl shadow-xl cursor-pointer flex items-center justify-center overflow-hidden border-2 border-white"
      >
        {/* Flap amplop (visual dekoratif) */}
        <div
          className="absolute top-0 left-0 w-full h-1/2 bg-[#FAF0E6] z-10 origin-top border-b border-white"
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
        ></div>
        <div className="z-20 flex flex-col items-center text-[#27272A] mt-6">
          <Mail size={32} className="mb-2 text-rose-300" />
          <span className="font-serif font-medium">Buka Surat</span>
        </div>
      </motion.div>
    </section>
  );
}
