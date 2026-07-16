"use client";

import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import { CERTIFICATIONS } from "@/lib/constants";

interface CertificationsProps {
  className?: string;
}

export default function Certifications({ className = "" }: CertificationsProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? CERTIFICATIONS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === CERTIFICATIONS.length - 1 ? 0 : c + 1));

  const cert = CERTIFICATIONS[current];

  return (
    <section
      id="certifications"
      className={`relative overflow-hidden px-6 py-28 lg:px-12 ${className}`}
      aria-label="Certifications"
    >
      {/* Section background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[15%] size-[300px] rounded-full bg-accent-cyan/5 blur-[100px] animate-pulse-glow" />
        <div className="absolute right-[10%] bottom-[15%] size-[250px] rounded-full bg-accent-pink/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-[--radius-pill] border border-accent/30 bg-accent/5 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-[3px] text-accent backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-accent animate-[pulse-glow_1.5s_ease-in-out_infinite]" />
            Achievements
          </span>
          <h2 className="glow-text font-display text-[52px] leading-none text-neutral-white md:text-[68px] lg:text-[92px]">
            Certifications
          </h2>
          <p className="max-w-[520px] font-body text-[15px] font-normal leading-[1.7] text-neutral-offwhite md:text-[17px]">
            Credentials and certifications that validate my skills.
          </p>
        </div>

        {/* Certification slide */}
        <div className="slide-enter w-full" key={current}>
          <div className="gradient-border overflow-hidden rounded-[24px] p-[2px]">
            <div className="holographic relative flex flex-col items-stretch overflow-hidden rounded-[22px] bg-neutral-card lg:flex-row lg:min-h-[420px]">
              {/* Image side */}
              <div className="relative w-full overflow-hidden lg:w-[55%]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-cyan/5 z-10" />
                <div className="shimmer-overlay absolute inset-0 z-10 opacity-30" />
                <div className="relative aspect-[16/10] w-full lg:absolute lg:inset-0 lg:aspect-auto">
                  <Image
                    src={cert.image}
                    alt={`Certificate: ${cert.title}`}
                    fill
                    className="project-image-hover object-contain p-6"
                  />
                </div>
                <div className="absolute left-0 z-20 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-[scanline_5s_linear_infinite]" />
              </div>

              {/* Content side */}
              <div className="flex flex-1 flex-col items-center justify-center gap-6 p-8 text-center lg:items-start lg:p-14 lg:text-left">
                <span className="font-display text-[60px] leading-none text-accent/30 lg:text-[80px]">
                  0{current + 1}
                </span>

                <h3 className="font-body text-[22px] font-bold leading-[1.2] text-neutral-white md:text-[26px] lg:text-[30px]">
                  {cert.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                  <span className="inline-flex items-center gap-1.5 rounded-[--radius-pill] border border-accent/20 bg-accent/5 px-4 py-2 font-body text-[12px] text-neutral-offwhite backdrop-blur-sm">
                    <span className="size-1 rounded-full bg-accent" />
                    <span className="font-bold text-accent-light">Issued by</span>
                    <span>{cert.issuer}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-[--radius-pill] border border-accent/20 bg-accent/5 px-4 py-2 font-body text-[12px] text-neutral-offwhite backdrop-blur-sm">
                    <span className="size-1 rounded-full bg-accent" />
                    <span className="font-bold text-accent-light">Year</span>
                    <span>{cert.date}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls (shown when multiple certifications) */}
        {CERTIFICATIONS.length > 1 && (
          <div className="flex flex-col items-center gap-6">
            <div className="relative flex items-center gap-4">
              <div className="absolute inset-x-0 top-1/2 h-[1px] -translate-y-1/2 bg-neutral-dark-gray/30" />
              {CERTIFICATIONS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to certification ${i + 1}`}
                  className={`relative z-10 rounded-full transition-all duration-400 ${
                    i === current
                      ? "size-4 bg-accent shadow-lg shadow-accent/60 ring-4 ring-accent/20"
                      : "size-3 bg-neutral-dark-gray/50 hover:bg-accent/50 hover:scale-125"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={prev}
                className="group flex size-14 items-center justify-center rounded-full border border-neutral-dark-gray/30 bg-neutral-card/80 text-neutral-offwhite backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 hover:text-accent-light hover:shadow-xl hover:shadow-accent/15 hover:scale-105"
                aria-label="Previous certification"
              >
                <BiChevronLeft size={26} className="transition-transform group-hover:-translate-x-1" />
              </button>
              <span className="min-w-[60px] text-center font-display text-[22px] text-neutral-offwhite/50">
                {current + 1} / {CERTIFICATIONS.length}
              </span>
              <button
                type="button"
                onClick={next}
                className="group flex size-14 items-center justify-center rounded-full border border-neutral-dark-gray/30 bg-neutral-card/80 text-neutral-offwhite backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 hover:text-accent-light hover:shadow-xl hover:shadow-accent/15 hover:scale-105"
                aria-label="Next certification"
              >
                <BiChevronRight size={26} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
