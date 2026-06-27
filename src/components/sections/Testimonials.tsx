import { TESTIMONIALS } from "@/lib/constants";
import { BiSolidQuoteLeft } from "react-icons/bi";

interface TestimonialsProps {
  className?: string;
}

export default function Testimonials({ className = "" }: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className={`relative overflow-hidden px-6 py-28 lg:px-[108px] ${className}`}
      aria-label="Testimonials"
    >
      {/* Section decorative */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[10%] top-[10%] size-[350px] rounded-full bg-accent-pink/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute left-[5%] bottom-[20%] size-[300px] rounded-full bg-accent/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2.5s" }} />
        {/* Floating particles */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="animate-particle absolute size-1.5 rounded-full bg-accent-cyan/30"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl flex flex-col items-center gap-14">
        {/* Header — centered */}
        <div className="flex flex-col items-center gap-4 text-center animate-fade-in-up">
          <span className="font-body text-[13px] font-semibold uppercase tracking-[4px] text-accent">
            Testimonials
          </span>
          <h2 className="glow-text font-display text-[48px] leading-none text-neutral-white md:text-[64px] lg:text-[84px]">
            What People Say
          </h2>
          <p className="max-w-[480px] font-body text-[15px] font-normal leading-[1.7] text-neutral-offwhite md:text-[17px]">
            Feedback from colleagues and collaborators I&apos;ve had the pleasure of working with.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <article
              key={testimonial.name}
              className="gradient-border group flex flex-col gap-5 rounded-[--radius-card] p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/10"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex items-center justify-between">
                <BiSolidQuoteLeft size={30} className="text-accent/30 transition-colors duration-300 group-hover:text-accent/70" />
                {/* Star rating visual */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <div key={s} className="size-1.5 rounded-full bg-accent-light/60" />
                  ))}
                </div>
              </div>
              <p className="flex-1 font-body text-[14px] font-normal italic leading-[1.7] text-neutral-offwhite">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-neutral-dark-gray/20 pt-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-cyan font-body text-[14px] font-bold text-neutral-white shadow-lg shadow-accent/20">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="font-body text-[14px] font-semibold text-neutral-white">
                  {testimonial.name}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
