"use client";

import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiEnvelope,
} from "react-icons/bi";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";

interface ContactProps {
  className?: string;
}

export default function Contact({ className = "" }: ContactProps) {
  return (
    <section
      id="contact"
      className={`relative overflow-hidden px-6 py-28 lg:px-[108px] ${className}`}
      aria-label="Contact"
    >
      {/* Section decorative */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[30%] top-[20%] size-[400px] rounded-full bg-accent/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute right-[10%] bottom-[10%] size-[350px] rounded-full bg-accent-pink/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute right-0 top-0 h-[200px] w-[200px] rounded-bl-full border-b border-l border-accent/10" />
        <div className="absolute bottom-0 left-0 h-[200px] w-[200px] rounded-tr-full border-t border-r border-accent-cyan/10" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center animate-fade-in-up">
          <span className="font-body text-[13px] font-semibold uppercase tracking-[4px] text-accent">
            Contact
          </span>
          <h2 className="glow-text font-display text-[48px] leading-none text-neutral-white md:text-[64px] lg:text-[84px]">
            Let&apos;s Connect
          </h2>
          <p className="max-w-[480px] font-body text-[15px] font-normal leading-[1.7] text-neutral-offwhite md:text-[17px]">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Email display */}
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="group gradient-border relative z-10 flex items-center gap-4 rounded-[--radius-card] px-10 py-7 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/15"
        >
          <BiEnvelope size={32} className="text-accent transition-colors group-hover:text-accent-light" />
          <span className="font-body text-[20px] font-semibold text-neutral-white transition-colors group-hover:text-accent-light md:text-[24px]">
            {PERSONAL_INFO.email}
          </span>
        </a>

        {/* Social icons */}
        <div className="flex gap-4">
          {[
            { icon: BiLogoLinkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
            { icon: BiLogoGithub, href: SOCIAL_LINKS.github, label: "GitHub" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} profile`}
              className="group flex size-12 items-center justify-center rounded-full border border-neutral-dark-gray/40 bg-neutral-card/80 text-neutral-offwhite backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent-light hover:shadow-lg hover:shadow-accent/10 hover:scale-110"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-body text-[13px] font-medium text-neutral-offwhite/40">
          © 2026 {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
}
