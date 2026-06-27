import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="bg-gradient-main grid-pattern relative min-h-screen">
        {/* === BACKGROUND EFFECTS === */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          {/* Large ambient orbs */}
          <div className="animate-pulse-glow absolute -left-[200px] top-[15%] size-[600px] rounded-full bg-accent/10 blur-[150px]" />
          <div className="animate-pulse-glow absolute -right-[200px] top-[50%] size-[500px] rounded-full bg-accent-cyan/8 blur-[140px]" style={{ animationDelay: "2s" }} />
          <div className="animate-pulse-glow absolute bottom-[5%] left-[30%] size-[550px] rounded-full bg-accent-pink/8 blur-[140px]" style={{ animationDelay: "4s" }} />
          <div className="animate-pulse-glow absolute left-[60%] top-[25%] size-[400px] rounded-full bg-accent-blue/8 blur-[120px]" style={{ animationDelay: "3s" }} />

          {/* Stars / twinkle dots */}
          {[
            { left: "8%", top: "12%" },
            { left: "92%", top: "8%" },
            { left: "15%", top: "45%" },
            { left: "85%", top: "35%" },
            { left: "50%", top: "70%" },
            { left: "25%", top: "80%" },
            { left: "70%", top: "90%" },
            { left: "40%", top: "20%" },
            { left: "60%", top: "55%" },
            { left: "5%", top: "65%" },
            { left: "95%", top: "75%" },
            { left: "35%", top: "95%" },
          ].map((pos, i) => (
            <div
              key={i}
              className="animate-star absolute size-1 rounded-full bg-neutral-white"
              style={{
                left: pos.left,
                top: pos.top,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            />
          ))}

          {/* Neon horizontal lines */}
          <div className="neon-line absolute left-0 top-[30%] h-[1px] w-full opacity-40" />
          <div className="neon-line absolute left-0 top-[60%] h-[1px] w-full opacity-30" style={{ animationDelay: "2s" }} />
          <div className="neon-line absolute left-0 top-[85%] h-[1px] w-full opacity-20" style={{ animationDelay: "4s" }} />

          {/* Meteor streaks */}
          <div className="absolute right-[10%] top-[5%] h-[1px] w-[100px] bg-gradient-to-l from-accent-light to-transparent opacity-40 animate-[meteor_4s_linear_1s_infinite]" />
          <div className="absolute right-[30%] top-[15%] h-[1px] w-[80px] bg-gradient-to-l from-accent-cyan to-transparent opacity-30 animate-[meteor_5s_linear_3s_infinite]" />
          <div className="absolute right-[50%] top-[40%] h-[1px] w-[60px] bg-gradient-to-l from-accent-pink to-transparent opacity-20 animate-[meteor_6s_linear_5s_infinite]" />

          {/* Vertical accent lines */}
          <div className="absolute left-[15%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
          <div className="absolute left-[85%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-accent-cyan/10 to-transparent" />
          <div className="absolute left-[50%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-accent-pink/8 to-transparent" />
        </div>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[--radius-pill] focus:bg-accent focus:px-4 focus:py-2 focus:text-neutral-black"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="relative z-10">
          <Hero />
          <FeaturedProjects />
          <Testimonials />
          <About />
          <Contact />
        </main>
      </div>
    </PageWrapper>
  );
}
