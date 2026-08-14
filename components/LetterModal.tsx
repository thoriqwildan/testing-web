"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Letter {
  title: string;
  content: string;
}

interface LetterModalProps {
  isOpen: boolean;
  letter: Letter;
  onClose: () => void;
}

export default function LetterModal({ isOpen, letter, onClose }: LetterModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#27272A]/40 backdrop-blur-sm px-4 py-12"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="bg-[#FAFAFA] text-[#27272A] max-w-xl w-full p-8 md:p-12 rounded-t-3xl rounded-b-md shadow-2xl overflow-y-auto max-h-full border-[12px] border-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8 border-b pb-4">
              <h3 className="text-2xl font-serif font-semibold">{letter.title}</h3>
              <button onClick={onClose} className="text-[#71717A] hover:text-black">
                <X size={24} />
              </button>
            </div>
            <div className="prose prose-stone">
              <p className="whitespace-pre-wrap leading-relaxed text-lg font-serif">
                {letter.content}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
