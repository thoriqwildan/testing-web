"use client";

import { motion } from "framer-motion";
import PetalsBackground from "./PetalsBackground";

const KEYPAD = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "ENTER"];

interface PinScreenProps {
  pinInput: string;
  isError: boolean;
  onPinPress: (val: string) => void;
}

export default function PinScreen({ pinInput, isError, onPinPress }: PinScreenProps) {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center px-4 relative z-10">
      <PetalsBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-[2rem] shadow-2xl max-w-sm w-full relative z-10 border border-gray-100"
      >
        <div className="text-center mb-8">
          <h2 className="text-[#27272A] text-xl font-medium mb-2">Masukkan PIN</h2>
          <p className="text-[#71717A] text-sm">Untuk membuka kunci kenangan ini.</p>
        </div>

        {/* Display Indicator */}
        <motion.div
          animate={isError ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className={`flex justify-center gap-3 mb-8 ${isError ? "text-red-400" : "text-[#27272A]"}`}
        >
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                i < pinInput.length
                  ? isError
                    ? "bg-red-400"
                    : "bg-[#27272A]"
                  : "bg-gray-200"
              }`}
            />
          ))}
        </motion.div>

        {/* Numpad */}
        <div className="grid grid-cols-3 gap-4">
          {KEYPAD.map((key) => (
            <button
              key={key}
              onClick={() => onPinPress(key)}
              className={`h-14 rounded-2xl flex items-center justify-center text-lg font-medium transition-all
                ${
                  key === "ENTER"
                    ? "bg-[#27272A] text-white shadow-md hover:bg-black"
                    : key === "C"
                      ? "text-red-400 hover:bg-red-50"
                      : "text-[#27272A] bg-gray-50 hover:bg-gray-100"
                }`}
            >
              {key === "ENTER" ? <span className="text-sm">ENTER</span> : key}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
