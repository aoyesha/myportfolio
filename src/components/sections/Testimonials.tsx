import { TESTIMONIALS } from "@/lib/constants";
import { BiSolidStar } from "react-icons/bi";

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
      </div>

      <div className="relative mx-auto max-w-4xl flex flex-col items-center gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center animate-fade-in-up">
          <span className="font-body text-[13px] font-semibold uppercase tracking-[4px] text-accent">
            Testimonials
          </span>
          <h2 className="glow-text font-display text-[48px] leading-none text-neutral-white md:text-[64px] lg:text-[84px]">
            What Clients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8 w-full">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="gradient-border flex flex-col gap-6 rounded-[--radius-card] p-8 md:p-10"
            >
              {/* Ratings grid */}
              {t.ratings && (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {t.ratings.map((r) => (
                    <div key={r.label} className="flex flex-col gap-1">
                      <span className="font-body text-[12px] font-medium text-neutral-offwhite/60 uppercase tracking-wide">
                        {r.label}
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <BiSolidStar
                            key={i}
                            size={16}
                            className={i < r.score ? "text-accent-light" : "text-neutral-dark-gray/40"}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Divider */}
              <div className="h-[1px] w-full bg-neutral-dark-gray/20" />

              {/* Quote */}
              <p className="font-body text-[15px] font-normal italic leading-[1.8] text-neutral-offwhite md:text-[17px]">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-cyan font-body text-[14px] font-bold text-white shadow-lg shadow-accent/20">
                  {t.name.charAt(0)}
                </div>
                <span className="font-body text-[14px] font-semibold text-neutral-white">
                  {t.name}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
