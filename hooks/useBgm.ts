import { useState, useEffect, useRef, useCallback } from "react";

export function useBgm(url: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(url);
    audioRef.current.loop = true;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [url]);

  const toggle = useCallback(() => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch((e) => console.log("Audio play failed:", e));
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  const play = useCallback(() => {
    audioRef.current?.play().catch((e) => console.log("Audio play failed:", e));
    setIsPlaying(true);
  }, []);

  return { isPlaying, toggle, play };
}
