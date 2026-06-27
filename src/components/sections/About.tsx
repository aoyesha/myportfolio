import { BiCheckCircle } from "react-icons/bi";
import LinkWithArrow from "@/components/ui/LinkWithArrow";
import { PERSONAL_INFO, SKILLS } from "@/lib/constants";

interface AboutProps {
  className?: string;
}

export default function About({ className = "" }: AboutProps) {
  return (
    <section
      id="about"
      className={`relative overflow-hidden px-6 py-28 lg:px-[108px] ${className}`}
      aria-label="About me"
    >
      {/* Section decorative */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[50%] top-[10%] size-[400px] rounded-full bg-accent/4 blur-[120px] animate-pulse-glow" />
        <div className="absolute right-[20%] bottom-[20%] size-[300px] rounded-full bg-accent-blue/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        {/* Grid lines */}
        <div className="absolute left-[20%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
        <div className="absolute right-[20%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-accent-cyan/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Centered header */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center animate-fade-in-up">
          <span className="font-body text-[13px] font-semibold uppercase tracking-[4px] text-accent">
            About Me
          </span>
          <h2 className="glow-text font-display text-[48px] leading-[0.9] text-neutral-white md:text-[64px] lg:text-[84px]">
            About Me
          </h2>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left — description */}
          <div className="flex flex-1 flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <p className="font-body text-[20px] font-medium leading-[1.4] text-neutral-white md:text-[24px]">
              {PERSONAL_INFO.aboutHeading}
            </p>
            <p className="font-body text-[15px] font-normal leading-[1.7] text-neutral-offwhite md:text-[17px]">
              {PERSONAL_INFO.aboutDescription}
            </p>
            <LinkWithArrow label="More about me" href="/about" type="demo" />
          </div>

          {/* Right — Skills */}
          <div className="flex flex-1 flex-col items-center gap-6 lg:items-start">
            <h3 className="font-body text-[16px] font-bold uppercase tracking-[2px] text-accent-light">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              {SKILLS.map((skill, i) => (
                <span
                  key={skill}
                  className="group inline-flex items-center gap-2 rounded-[--radius-pill] border border-neutral-dark-gray/40 bg-neutral-card/80 px-5 py-2.5 font-body text-[13px] font-medium text-neutral-offwhite backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent-light hover:shadow-lg hover:shadow-accent/10 hover:scale-105"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <BiCheckCircle size={15} className="text-accent transition-transform group-hover:scale-110" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
