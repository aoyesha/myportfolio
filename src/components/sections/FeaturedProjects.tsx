"use client";

import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";

interface FeaturedProjectsProps {
  className?: string;
}

export default function FeaturedProjects({
  className = "",
}: FeaturedProjectsProps) {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((c) => (c === 0 ? PROJECTS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === PROJECTS.length - 1 ? 0 : c + 1));

  const project = PROJECTS[current];

  return (
    <section
      id="projects"
      className={`relative overflow-hidden px-6 py-32 lg:px-12 ${className}`}
      aria-label="Featured Projects"
    >
      {/* Section background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[10%] size-[350px] rounded-full bg-accent/6 blur-[100px] animate-pulse-glow" />
        <div className="absolute right-[5%] bottom-[10%] size-[300px] rounded-full bg-accent-cyan/6 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="animate-particle absolute rounded-full bg-accent/40"
            style={{
              width: `${3 + (i % 3)}px`,
              height: `${3 + (i % 3)}px`,
              left: `${10 + i * 11}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-[--radius-pill] border border-accent/30 bg-accent/5 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-[3px] text-accent backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-accent animate-[pulse-glow_1.5s_ease-in-out_infinite]" />
            Portfolio
          </span>
          <h2 className="glow-text font-display text-[52px] leading-none text-neutral-white md:text-[68px] lg:text-[92px]">
            Featured Projects
          </h2>
          <p className="max-w-[520px] font-body text-[15px] font-normal leading-[1.7] text-neutral-offwhite md:text-[17px]">
            Explore the projects I&apos;ve built — from full-stack apps to AI research.
          </p>
        </div>

        {/* Project slide */}
        <div className="slide-enter w-full" key={current}>
          <div className="gradient-border overflow-hidden rounded-[24px] p-[2px]">
            <div className="holographic relative flex flex-col items-stretch overflow-hidden rounded-[22px] bg-neutral-card lg:flex-row lg:min-h-[520px]">
              {/* Image side */}
              <div className="relative w-full overflow-hidden lg:w-[55%]">
                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-cyan/5 z-10" />
                <div className="absolute inset-0 z-10 opacity-30 shimmer-overlay" />
                <div className="relative aspect-[16/10] w-full lg:absolute lg:inset-0 lg:aspect-auto">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    className="project-image-hover object-contain p-8"
                  />
                </div>
                {/* Scanline */}
                <div className="absolute left-0 z-20 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-[scanline_5s_linear_infinite]" />
                {project.tag && (
                  <span className="absolute left-5 top-5 z-20 inline-flex items-center gap-1.5 rounded-[--radius-pill] border border-accent/40 bg-accent/10 px-4 py-2 font-body text-[11px] font-bold uppercase tracking-[2px] text-accent backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-accent-light" />
                    {project.tag}
                  </span>
                )}
              </div>

              {/* Content side */}
              <div className="flex flex-1 flex-col items-center justify-center gap-7 p-8 text-center lg:items-start lg:p-14 lg:text-left">
                {/* Project number */}
                <span className="font-display text-[60px] leading-none text-accent/30 lg:text-[80px]">
                  0{current + 1}
                </span>

                <h3 className="font-body text-[22px] font-bold leading-[1.2] text-neutral-white md:text-[26px] lg:text-[30px]">
                  {project.title}
                </h3>

                <p className="font-body text-[14px] font-normal leading-[1.8] text-neutral-offwhite md:text-[15px]">
                  {project.description}
                </p>

                {/* Info pills */}
                <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                  {project.info.map((item) => (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-1.5 rounded-[--radius-pill] border border-accent/20 bg-accent/5 px-4 py-2 font-body text-[12px] text-neutral-offwhite backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-accent/10"
                    >
                      <span className="size-1 rounded-full bg-accent" />
                      <span className="font-bold text-accent-light">{item.label}</span>
                      <span>{item.value}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-6">
          {/* Circle indicators with connecting line */}
          <div className="relative flex items-center gap-4">
            {/* Connecting line behind dots */}
            <div className="absolute inset-x-0 top-1/2 h-[1px] -translate-y-1/2 bg-neutral-dark-gray/30" />
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`relative z-10 rounded-full transition-all duration-400 ${
                  i === current
                    ? "size-4 bg-accent shadow-lg shadow-accent/60 ring-4 ring-accent/20"
                    : "size-3 bg-neutral-dark-gray/50 hover:bg-accent/50 hover:scale-125"
                }`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={prev}
              className="group flex size-14 items-center justify-center rounded-full border border-neutral-dark-gray/30 bg-neutral-card/80 text-neutral-offwhite backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 hover:text-accent-light hover:shadow-xl hover:shadow-accent/15 hover:scale-105"
              aria-label="Previous project"
            >
              <BiChevronLeft size={26} className="transition-transform group-hover:-translate-x-1" />
            </button>
            <span className="min-w-[60px] text-center font-display text-[22px] text-neutral-offwhite/50">
              {current + 1} / {PROJECTS.length}
            </span>
            <button
              type="button"
              onClick={next}
              className="group flex size-14 items-center justify-center rounded-full border border-neutral-dark-gray/30 bg-neutral-card/80 text-neutral-offwhite backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 hover:text-accent-light hover:shadow-xl hover:shadow-accent/15 hover:scale-105"
              aria-label="Next project"
            >
              <BiChevronRight size={26} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
