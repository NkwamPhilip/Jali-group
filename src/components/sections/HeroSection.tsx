import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "@/components/ui/Section";
import CustomButton from "@/components/ui/CustomButton";
import TypewriterText from "@/components/ui/TypewriterText";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Parallax effect for the background text
  const { scrollY } = useScroll();
  const ghostY = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Initial reveal sequence
      tl.fromTo(".glass-shard",
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 2, stagger: 0.2 }
      )
        .fromTo(".reveal-text",
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.1 },
          "-=1.5"
        );

      // Mouse-move interaction for glass elements
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        const yPos = (clientY / window.innerHeight - 0.5) * 30;

        gsap.to(".glass-shard", {
          x: xPos,
          y: yPos,
          duration: 2.5,
          ease: "power3.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      variant="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#020202] py-0"
    >
      {/* 1. PARALLAX GHOST TEXT (Organized Background) */}
      <motion.div
        style={{ y: ghostY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <h1 className="text-[25vw] font-black text-white/[0.01] uppercase tracking-tighter leading-none">
          Legacy
        </h1>
      </motion.div>

      {/* 2. STRATEGIC GLASS SHARDS (Frosted Layers) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Top Left - Soft Glow Shard */}
        <div className="glass-shard absolute top-[10%] left-[5%] w-[30vw] h-[30vw] bg-white/[0.02] backdrop-blur-[100px] rounded-full border border-white/5 shadow-2xl" />

        {/* Bottom Right - Defined Edge Shard */}
        <div className="glass-shard absolute bottom-[10%] right-[8%] w-96 h-96 bg-white/[0.03] backdrop-blur-3xl rounded-[4rem] border border-white/10 rotate-12 shadow-2xl" />

        {/* Floating Detail */}
        <div className="glass-shard absolute top-[40%] right-[12%] w-24 h-24 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 -rotate-[15deg] hidden md:block" />
      </div>

      {/* 3. MAIN CONTENT (Structured Hierarchy) */}
      <div ref={containerRef} className="relative z-20 text-center px-6 max-w-6xl mx-auto">

        {/* Badge Indicator */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-2 rounded-full backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span className="text-[9px] uppercase font-black tracking-[0.4em] text-white/60">
              EST. MMXXIV — JALI GROUP
            </span>
          </motion.div>
        </div>

        {/* Hero Title with Typewriter Integration */}
        <div className="mb-12">
          <h1 ref={titleRef} className="text-[12vw] md:text-[8rem] font-bold text-white tracking-tighter leading-[0.85] uppercase">
            <span className="reveal-text block">Turn Story</span>
            <div className="flex flex-wrap justify-center items-baseline gap-x-4">
              <span className="reveal-text block text-white/20 italic font-light lowercase">Into</span>
              <span className="reveal-text block italic font-light text-white italic">
                <TypewriterText />
              </span>
            </div>
          </h1>
        </div>

        {/* Structured Subtext */}
        <div className="max-w-2xl mx-auto space-y-16">
          <p className="text-lg md:text-xl text-white/30 font-light leading-relaxed reveal-text tracking-wide px-4">
            We use influence, perception, and strategy to turn <br className="hidden md:block" />
            invisible potential into <span className="text-white/80">inevitable capital.</span>
          </p>

          {/* Action Hub */}
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            {/* The Ultra-Pill CTA */}
            <CustomButton
              className="hero-btn bg-white text-black px-16 py-8 rounded-full font-black text-[11px] uppercase tracking-[0.3em] hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              Become Inevitable
            </CustomButton>

            {/* Glass Video Button */}
            <button className="group flex items-center gap-5 text-[10px] font-black uppercase tracking-[0.4em] text-white transition-all">
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-xl group-hover:bg-white group-hover:text-black transition-all duration-700">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[9px] border-l-current border-b-[5px] border-b-transparent ml-1" />
              </div>
              <span className="group-hover:translate-x-1 transition-transform">Watch Film</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. VERTICAL MARQUEE (Side Detail - Very High End) */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-20 opacity-10 pointer-events-none hidden lg:flex">
        <span className="rotate-90 text-[10px] font-black uppercase tracking-[1em]">Strategic</span>
        <span className="rotate-90 text-[10px] font-black uppercase tracking-[1em]">Influence</span>
        <span className="rotate-90 text-[10px] font-black uppercase tracking-[1em]">Legacy</span>
      </div>

      {/* 5. MINIMAL SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </Section>
  );
};

export default HeroSection;