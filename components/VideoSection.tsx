"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";

export default function VideoSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto relative z-10">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-serif text-center mb-16"
      >
        Random Video
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white p-4 rounded-[2rem] shadow-2xl"
      >
        <div className="aspect-video w-full overflow-hidden rounded-3xl bg-black">
          <video width="100%" height="100%" preload="metadata" controls>
            <source src={siteConfig.videoEmbedUrl} type="video/mp4" />
            Browser anda tidak mendukung tag video.
          </video>
        </div>
      </motion.div>
    </section>
  );
}
