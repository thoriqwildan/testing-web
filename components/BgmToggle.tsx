"use client";

import { Music, Pause } from "lucide-react";

interface BgmToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function BgmToggle({ isPlaying, onToggle }: BgmToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 bg-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center text-[#27272A]"
    >
      {isPlaying ? <Pause size={20} /> : <Music size={20} />}
    </button>
  );
}
