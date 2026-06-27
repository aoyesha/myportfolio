"use client";

import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoTwitter,
  BiSend,
} from "react-icons/bi";
import Button from "@/components/ui/Button";
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
        {/* Corner decoration */}
        <div className="absolute right-0 top-0 h-[200px] w-[200px] rounded-bl-full border-b border-l border-accent/10" />
        <div className="absolute bottom-0 left-0 h-[200px] w-[200px] rounded-tr-full border-t border-r border-accent-cyan/10" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Header — centered */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center animate-fade-in-up">
          <span className="font-body text-[13px] font-semibold uppercase tracking-[4px] text-accent">
            Contact
          </span>
          <h2 className="glow-text font-display text-[48px] leading-none text-neutral-white md:text-[64px] lg:text-[84px]">
            Let&apos;s Connect
          </h2>
          <p className="max-w-[480px] font-body text-[15px] font-normal leading-[1.7] text-neutral-offwhite md:text-[17px]">
            Have a project in mind? Let&apos;s make something amazing together.
          </p>
        </div>

        <div className="flex flex-col items-center gap-14">
          {/* Form — centered above */}
          <div className="gradient-border w-full max-w-[600px] rounded-[--radius-card] p-7 md:p-9">
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Contact form"
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="font-body text-[12px] font-semibold uppercase tracking-[2px] text-neutral-offwhite/70"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="rounded-[--radius-input] border border-neutral-dark-gray/30 bg-neutral-black/60 px-4 py-3.5 font-body text-[15px] font-normal text-neutral-white placeholder:text-neutral-dark-gray/70 backdrop-blur-sm transition-all duration-300 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:shadow-lg focus:shadow-accent/5"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="font-body text-[12px] font-semibold uppercase tracking-[2px] text-neutral-offwhite/70"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="rounded-[--radius-input] border border-neutral-dark-gray/30 bg-neutral-black/60 px-4 py-3.5 font-body text-[15px] font-normal text-neutral-white placeholder:text-neutral-dark-gray/70 backdrop-blur-sm transition-all duration-300 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:shadow-lg focus:shadow-accent/5"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="font-body text-[12px] font-semibold uppercase tracking-[2px] text-neutral-offwhite/70"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry"
                  className="rounded-[--radius-input] border border-neutral-dark-gray/30 bg-neutral-black/60 px-4 py-3.5 font-body text-[15px] font-normal text-neutral-white placeholder:text-neutral-dark-gray/70 backdrop-blur-sm transition-all duration-300 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:shadow-lg focus:shadow-accent/5"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-body text-[12px] font-semibold uppercase tracking-[2px] text-neutral-offwhite/70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="resize-none rounded-[--radius-input] border border-neutral-dark-gray/30 bg-neutral-black/60 px-4 py-3.5 font-body text-[15px] font-normal text-neutral-white placeholder:text-neutral-dark-gray/70 backdrop-blur-sm transition-all duration-300 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:shadow-lg focus:shadow-accent/5"
                />
              </div>

              <Button type="submit" className="mt-3 w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Info below — centered */}
          <div className="flex flex-col items-center gap-5 text-center">
            <p className="font-body text-[16px] font-normal leading-[1.7] text-neutral-offwhite">
              Say hello at{" "}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-semibold text-accent transition-all hover:text-accent-light hover:underline"
              >
                {PERSONAL_INFO.email}
              </a>
            </p>

            {/* Social icons */}
            <div className="flex gap-4">
              {[
                { icon: BiLogoLinkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
                { icon: BiLogoGithub, href: SOCIAL_LINKS.github, label: "GitHub" },
                { icon: BiLogoTwitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
                { icon: BiLogoInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
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
            <p className="mt-4 font-body text-[13px] font-medium text-neutral-offwhite/40">
              © 2026 {PERSONAL_INFO.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
