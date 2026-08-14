"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Photo {
  id: number;
  src: string;
  caption: string;
}

interface LightboxModalProps {
  photo: Photo | null;
  onClose: () => void;
}

export default function LightboxModal({ photo, onClose }: LightboxModalProps) {
  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4"
          onClick={onClose}
        >
          <button className="absolute top-6 right-6 text-white hover:text-gray-300">
            <X size={32} />
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white p-4 pb-16 md:pb-20 max-w-2xl w-full rounded-md shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-auto max-h-[70vh] object-contain bg-black"
            />
            <p className="absolute bottom-6 left-0 right-0 text-center text-xl font-serif italic text-[#71717A]">
              {photo.caption}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
