"use client";

import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState(0);
  // 0 = robot walking
  // 1 = warning sign
  // 2 = "Information being fetched"
  // 3 = "Aoyesha Ayen Found"
  // 4 = fade out

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1500),
      setTimeout(() => setPhase(2), 2800),
      setTimeout(() => setPhase(3), 4200),
      setTimeout(() => setPhase(4), 5500),
      setTimeout(() => onComplete(), 6200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-neutral-black transition-opacity duration-700 ${
        phase === 4 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-pink/10 blur-[120px]" />
      </div>

      {/* Robot */}
      <div className="relative mb-8">
        <div
          className={`text-[72px] transition-all duration-500 ${
            phase === 0 ? "animate-[robotWalk_0.6s_steps(2)_infinite]" : "animate-none"
          }`}
        >
          🤖
        </div>
        {/* Pink glow under robot */}
        <div className="absolute -bottom-2 left-1/2 h-3 w-12 -translate-x-1/2 rounded-full bg-accent-pink/40 blur-md" />
      </div>

      {/* Status messages */}
      <div className="flex flex-col items-center gap-4">
        {/* Phase 1: Warning */}
        {phase >= 1 && (
          <div className="flex items-center gap-2 animate-[fadeIn_0.4s_ease-out_both]">
            <span className="text-[28px]">⚠️</span>
            <span className="font-body text-[14px] font-medium uppercase tracking-wider text-yellow-400">
              System Alert
            </span>
          </div>
        )}

        {/* Phase 2: Fetching */}
        {phase >= 2 && (
          <div className="flex items-center gap-3 animate-[fadeIn_0.4s_ease-out_both]">
            <div className="flex gap-1">
              <span className="size-2 rounded-full bg-accent-cyan animate-[pulse-glow_0.8s_ease-in-out_infinite]" />
              <span className="size-2 rounded-full bg-accent-cyan animate-[pulse-glow_0.8s_ease-in-out_0.2s_infinite]" />
              <span className="size-2 rounded-full bg-accent-cyan animate-[pulse-glow_0.8s_ease-in-out_0.4s_infinite]" />
            </div>
            <span className="font-body text-[15px] font-medium text-accent-cyan">
              Information being fetched...
            </span>
          </div>
        )}

        {/* Phase 3: Found */}
        {phase >= 3 && (
          <div className="mt-2 flex items-center gap-2 animate-[fadeIn_0.4s_ease-out_both]">
            <span className="text-[20px]"></span>
            <span className="font-body text-[30px] font-bold text-accent-light">
              Aoyesha Ayen Found
            </span>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="mt-10 h-[3px] w-[200px] overflow-hidden rounded-full bg-neutral-dark-gray/30">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-pink via-accent to-accent-cyan transition-all duration-1000 ease-out"
          style={{ width: `${(phase / 4) * 100}%` }}
        />
      </div>
    </div>
  );
}
