"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/config";
import { useBgm } from "@/hooks/useBgm";

import LoadingScreen from "@/components/LoadingScreen";
import PinScreen from "@/components/PinScreen";
import PetalsBackground from "@/components/PetalsBackground";
import BgmToggle from "@/components/BgmToggle";
import HeroSection from "@/components/HeroSection";
import MemoriesSection from "@/components/MemoriesSection";
import VideoSection from "@/components/VideoSection";
import LetterSection from "@/components/LetterSection";
import LightboxModal from "@/components/LightboxModal";
import LetterModal from "@/components/LetterModal";

type AuthStatus = "unauthorized" | "pin1" | "pin2" | "pin3";

interface Photo {
  id: number;
  src: string;
  caption: string;
}

export default function FarewellPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState<AuthStatus>("unauthorized");
  const [pinInput, setPinInput] = useState("");
  const [isError, setIsError] = useState(false);

  const { isPlaying, toggle: toggleBGM, play: playBGM } = useBgm(siteConfig.bgmUrl);

  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  // Loading Screen Timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  // PIN Logic
  const handlePinPress = (val: string) => {
    if (isError) setIsError(false);
    if (val === "C") {
      setPinInput("");
    } else if (val === "ENTER") {
      if (pinInput === siteConfig.pin1) {
        setAuthStatus("pin1");
        playBGM();
      } else if (pinInput === siteConfig.pin2) {
        setAuthStatus("pin2");
        playBGM();
      } else if (pinInput === siteConfig.pin3) {
        setAuthStatus("pin3");
        playBGM();
      } else {
        setIsError(true);
        setPinInput("");
      }
    } else {
      if (pinInput.length < 4) setPinInput((prev) => prev + val);
    }
  };

  // --- VIEW: LOADING ---
  if (isLoading) {
    return <LoadingScreen />;
  }

  // --- VIEW: PIN ---
  if (authStatus === "unauthorized") {
    return <PinScreen pinInput={pinInput} isError={isError} onPinPress={handlePinPress} />;
  }

  // --- VIEW: MAIN CONTENT ---
  let activeLetter: any;
  if (authStatus === "pin1") {
    activeLetter = siteConfig.letters.pin1;
  } else if (authStatus === "pin2") {
    activeLetter = siteConfig.letters.pin2;
  } else if (authStatus === "pin3") {
    activeLetter = siteConfig.letters.pin3;
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#27272A] selection:bg-[#F5E6E8] relative">
      <PetalsBackground />
      <BgmToggle isPlaying={isPlaying} onToggle={toggleBGM} />

      <HeroSection />
      <MemoriesSection onPhotoClick={setActivePhoto} />
      <VideoSection />
      <LetterSection onOpen={() => setIsLetterOpen(true)} />

      {/* Modals */}
      <LightboxModal photo={activePhoto} onClose={() => setActivePhoto(null)} />
      <LetterModal isOpen={isLetterOpen} letter={activeLetter} onClose={() => setIsLetterOpen(false)} />
    </div>
  );
}