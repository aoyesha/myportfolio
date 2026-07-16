"use client";

import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2500);
    const timer2 = setTimeout(() => onComplete(), 3200);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-neutral-black transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-pink/10 blur-[120px]" />
      </div>

      {/* Robot */}
      <div className="relative">
        <div className="text-[80px] animate-[robotWalk_0.6s_steps(2)_infinite]">
          🤖
        </div>
        {/* Pink glow under robot */}
        <div className="absolute -bottom-2 left-1/2 h-3 w-14 -translate-x-1/2 rounded-full bg-accent-pink/40 blur-md" />
      </div>
    </div>
  );
}
