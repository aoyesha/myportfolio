"use client";

import Image from "next/image";
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

      {/* Orbit rings — decorative */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-orbit absolute inset-0 size-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10 md:size-[450px]" />
        <div className="animate-orbit-reverse absolute inset-0 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-cyan/10 md:size-[600px]" />
      </div>

      {/* Portrait with morphing border */}
      <div className="relative mb-12">
        {/* Pulsing rings */}
        <div className="animate-pulse-ring absolute inset-[-15px] rounded-full border-2 border-accent/30" />
        <div className="animate-pulse-ring absolute inset-[-30px] rounded-full border border-accent-cyan/20" style={{ animationDelay: "1s" }} />
        <div className="animate-pulse-ring absolute inset-[-45px] rounded-full border border-accent-pink/10" style={{ animationDelay: "2s" }} />

        {/* Morphing portrait container */}
        <div className="animate-morph glow-purple relative size-[180px] overflow-hidden md:size-[250px] lg:size-[280px]">
          <Image
            src="/images/portrait.png"
            alt="Portrait of Aoyesha Ayen"
            fill
            className="object-cover"
            priority
          />
          {/* Scanline effect */}
          <div className="pointer-events-none absolute left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-[scanline_4s_linear_infinite]" />
        </div>

        {/* Orbiting dots */}
        <div className="animate-orbit absolute inset-0 size-full">
          <div className="absolute -top-2 left-1/2 size-3 rounded-full bg-accent shadow-lg shadow-accent/50" />
        </div>
        <div className="animate-orbit-reverse absolute inset-0 size-full">
          <div className="absolute -bottom-2 left-1/2 size-2 rounded-full bg-accent-cyan shadow-lg shadow-accent-cyan/50" />
        </div>
      </div>

      {/* Text content — centered */}
      <div className="animate-fade-in-up flex max-w-[750px] flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="glow-text font-display text-[44px] leading-none text-neutral-white md:text-[64px] lg:text-[90px]">
            <span className="block text-center">{PERSONAL_INFO.heroHeading}</span>
            <span className="block h-[44px] overflow-hidden text-center md:h-[64px] lg:h-[90px]">
              <span className="animate-[textRoll_6s_cubic-bezier(0.65,0,0.35,1)_infinite] flex flex-col">
                <span className="h-[44px] whitespace-nowrap bg-gradient-to-r from-accent-pink via-accent to-accent-cyan bg-clip-text text-transparent md:h-[64px] lg:h-[90px]">{PERSONAL_INFO.name}</span>
                <span className="h-[44px] whitespace-nowrap bg-gradient-to-r from-accent-pink via-accent to-accent-cyan bg-clip-text text-transparent md:h-[64px] lg:h-[90px]">A Computer Science Student</span>
                <span className="h-[44px] whitespace-nowrap bg-gradient-to-r from-accent-pink via-accent to-accent-cyan bg-clip-text text-transparent md:h-[64px] lg:h-[90px]">An Aspiring Developer</span>
              </span>
            </span>
          </h1>
          <p className="mx-auto max-w-[620px] font-body text-[14px] font-normal leading-[1.7] text-neutral-offwhite md:text-[16px]">
            I&apos;m a third-year Computer Science student at the University of Santo Tomas with an interest in full-stack development, databases, and software engineering. I enjoy building practical applications that solve real-world problems while continuously learning new technologies.
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
