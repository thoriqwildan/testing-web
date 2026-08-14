"use client";

import { motion } from "framer-motion";

const petals = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  left: `${(i * 7) % 100}%`,
  animationDuration: `${10 + (i % 10)}s`,
  animationDelay: `${i % 5}s`,
}));

export default function PetalsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-[-5%]"
          style={{ left: petal.left }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: [0, 180, 360],
            x: [0, 30, -30, 0],
          }}
          transition={{
            duration: parseInt(petal.animationDuration),
            delay: parseInt(petal.animationDelay),
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Simple CSS shape for a petal */}
          <div
            className="w-4 h-6 bg-white opacity-60 rounded-full shadow-sm"
            style={{ borderRadius: "50% 0 50% 0" }}
          />
        </motion.div>
      ))}
    </div>
  );
}
