"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";

interface MemoriesSectionProps {
  onPhotoClick: (photo: (typeof siteConfig.memories)[number]) => void;
}

export default function MemoriesSection({ onPhotoClick }: MemoriesSectionProps) {
  return (
    <section className="py-20 px-4 md:px-12 max-w-6xl mx-auto relative z-10">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-serif text-center mb-16"
      >
        Memories
      </motion.h2>

      {/* Grid: 2 cols on mobile, 3 on md, 4 on lg */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {siteConfig.memories.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            onClick={() => onPhotoClick(photo)}
            className="bg-white p-3 md:p-4 pb-10 md:pb-14 rounded-sm shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer transform"
            style={{ rotate: i % 2 === 0 ? "-2deg" : "2deg" }}
          >
            <div className="relative w-full aspect-square bg-gray-200 overflow-hidden mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.caption} className="object-cover w-full h-full" />
            </div>
            <p className="text-center font-medium text-sm md:text-base text-[#71717A] font-serif italic">
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
