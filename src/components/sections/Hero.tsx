"use client";

import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import Button from "@/components/ui/Button";
import SocialIcon from "@/components/ui/SocialIcon";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";

interface HeroProps {
  className?: string;
}

export default function Hero({ className = "" }: HeroProps) {
  return (
    <section
      id="home"
      className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32 ${className}`}
      aria-label="Hero"
    >
      {/* Decorative particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="animate-particle absolute size-2 rounded-full bg-accent/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Orbit rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-orbit absolute inset-0 size-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10 md:size-[500px]" />
        <div className="animate-orbit-reverse absolute inset-0 size-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-cyan/10 md:size-[700px]" />
      </div>

      {/* Text content — centered */}
      <div className="animate-fade-in-up relative z-10 flex max-w-[850px] flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-3">
          {/* Hi, I am AYEN — single line */}
          <h1 className="glow-text font-display text-[40px] leading-none text-neutral-white whitespace-nowrap md:text-[58px] lg:text-[80px]">
            {PERSONAL_INFO.heroHeading}{" "}
            <span className="bg-gradient-to-r from-accent-pink via-accent to-accent-cyan bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          {/* Rolling subtitle — 2 items, sized to fit the longest */}
          <div className="relative overflow-hidden" style={{ height: "1.2em", fontSize: "clamp(28px, 4vw, 52px)" }}>
            <div
              className="flex flex-col font-display leading-[1.2] text-neutral-offwhite whitespace-nowrap"
              style={{ animation: "textRollTwo 6s cubic-bezier(0.65,0,0.35,1) infinite" }}
            >
              <span>An Aspiring Developer</span>
              <span>A Computer Science Student</span>
            </div>
          </div>

          <p className="mx-auto max-w-[620px] font-body text-[14px] font-normal leading-[1.7] text-neutral-offwhite md:text-[16px]">
            I&apos;m a fourth-year Computer Science student at the University of Santo Tomas with an interest in full-stack development, databases, and software engineering. I enjoy building practical applications that solve real-world problems while continuously learning new technologies.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 animate-[fadeIn_0.8s_ease-out_1.5s_both]">
          <a href="#contact">
            <Button withArrow>Contact Me</Button>
          </a>
          <SocialIcon
            icon={BiLogoLinkedin}
            href={SOCIAL_LINKS.linkedin}
            label="LinkedIn profile"
          />
          <SocialIcon
            icon={BiLogoGithub}
            href={SOCIAL_LINKS.github}
            label="GitHub profile"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeIn_1s_ease_2.5s_both]">
        <span className="font-body text-[11px] uppercase tracking-[3px] text-neutral-offwhite/40">Scroll</span>
        <div className="relative h-10 w-[1px]">
          <div className="absolute inset-0 bg-gradient-to-b from-accent to-transparent animate-[pulse-glow_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
