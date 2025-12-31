import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

const InsightsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax for the profile image
  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <Section variant="dark" spacing="large" className="bg-[#020202] relative overflow-hidden">

      {/* 1. BACKGROUND ACCENT (Monochrome Glow) */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full -translate-y-1/2 -z-10" />

      {/* 2. HEADLINE (The Bold Claim) */}
      <div className="max-w-7xl mx-auto px-6 mb-32 text-center lg:text-left">
        <ScrollReveal variant="fade">
          <span className="text-white/20 font-black tracking-[0.6em] uppercase text-[9px] mb-8 block">The Standard</span>
          <h2 className="text-5xl md:text-[6.5rem] font-bold text-white mb-10 tracking-tighter leading-[0.85] uppercase max-w-5xl">
            The Michael Jordan <br />
            <span className="italic font-light text-white/10 lowercase">Of Founder-Led</span> <br />
            <span className="text-white">Brand Growth.</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* 3. MAIN CONTENT (Editorial Grid) */}
      <div ref={containerRef} className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start px-6">

        {/* Left: The Visual (Glass Frame) */}
        <ScrollReveal variant="slideRight">
          <div className="relative group">
            <motion.div
              style={{ y: imgY }}
              className="aspect-[4/5] overflow-hidden rounded-[3.5rem] bg-white/[0.02] border border-white/5 relative"
            >
              <img
                src="src/components/images/omo.JPEG"
                alt="Victor Okafo"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              {/* Frosted Overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#020202] to-transparent" />
            </motion.div>

            {/* Float Tag - Glassmorphism */}
            <div className="absolute -bottom-8 -right-4 lg:-right-12 backdrop-blur-3xl bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] shadow-2xl max-w-[280px]">
              <h4 className="text-2xl font-bold text-white tracking-tighter uppercase mb-1">Victor Okafo</h4>
              <p className="text-[9px] text-white/40 font-black uppercase tracking-[0.3em]">Founder, Jali Group</p>
              <div className="mt-4 w-8 h-px bg-white/20" />
            </div>
          </div>
        </ScrollReveal>

        {/* Right: The Substance */}
        <div className="lg:pt-20 space-y-16">
          <ScrollReveal variant="slideUp" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase leading-none">
                The Embodiment of <br />
                <span className="text-white/20 italic font-light lowercase">Jali excellence.</span>
              </h3>
              <p className="text-xl text-white/40 font-light leading-relaxed max-w-lg">
                Why work with someone who hasn’t done for himself what he promises to do for you?
              </p>
            </div>
          </ScrollReveal>

          {/* Stats Grid - High Contrast */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { val: "70M+", label: "Views & 650K Subs", color: "text-white" },
              { val: "SOLD OUT", label: "Europe & Africa Events", color: "text-white" },
              { val: "1200%", label: "Client Revenue Spike", color: "text-white" }, // Removed the green to keep it Badass Monochrome
              { val: "$20B", label: "Global Corp Consulting", color: "text-white" }
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] hover:bg-white transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className={`text-4xl font-black ${stat.color} group-hover:text-black transition-colors tracking-tighter mb-2`}>
                    {stat.val}
                  </div>
                  <div className="text-[9px] font-black text-white/20 group-hover:text-black/40 uppercase tracking-[0.2em] leading-tight">
                    {stat.label}
                  </div>
                </div>
                {/* Subtle glass reflection on hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <ScrollReveal variant="fade" delay={0.4}>
            <div className="pt-8 flex flex-col items-start gap-6">
              <p className="text-lg text-white/60 italic font-light border-l border-white/20 pl-6 py-2">
                "We’ve done it for ourselves. <span className="text-white font-medium">You could be next.</span>"
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Side "Legacy" Text (Continuing the Theme) */}
      <div className="absolute left-10 bottom-20 opacity-[0.02] pointer-events-none hidden xl:block">
        <h2 className="text-[15rem] font-black uppercase tracking-tighter rotate-90 origin-left">
          Impact
        </h2>
      </div>
    </Section>
  );
};

export default InsightsSection;