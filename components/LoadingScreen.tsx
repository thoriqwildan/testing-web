"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        {/* Ikon Mawar Minimalis */}
        <Heart className="w-16 h-16 text-[#F5E6E8] fill-[#F5E6E8] animate-pulse mb-6" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-[#71717A] tracking-widest text-sm font-light uppercase"
        >
          Memuat Kenangan...
        </motion.p>
      </motion.div>
    </div>
  );
}
