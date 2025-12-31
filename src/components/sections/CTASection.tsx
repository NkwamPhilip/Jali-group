import { Globe, ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import CustomButton from "@/components/ui/CustomButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CTASection = () => {
  // Signature style for buttons
  const pillButtonStyle = "bg-white text-black rounded-full px-12 py-8 font-black text-[11px] uppercase tracking-[0.3em] transition-all duration-500 hover:bg-white/90 hover:scale-[1.05] shadow-[0_0_50px_rgba(255,255,255,0.15)]";

  return (
    <Section variant="dark" spacing="large" className="text-center bg-[#020202] relative overflow-hidden py-40">

      {/* 1. CINEMATIC BACKGROUND (The Portal Effect) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

      {/* 2. FROSTED GLASS ACCENTS (Floating Layers) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[15%] w-32 h-32 bg-white/[0.03] backdrop-blur-2xl rounded-2xl border border-white/10 rotate-12 hidden lg:block" />
        <div className="absolute bottom-1/4 right-[15%] w-48 h-48 bg-white/[0.02] backdrop-blur-3xl rounded-full border border-white/5 -rotate-12 hidden lg:block" />
      </div>

      <ScrollReveal variant="scale">
        <div className="max-w-5xl mx-auto relative z-10 px-6">

          {/* Top Label */}
          <div className="inline-flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-2 rounded-full mb-12">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-white/40 font-black tracking-[0.4em] uppercase text-[9px]">
              Ready for the Next Level?
            </span>
          </div>

          <h2 className="text-6xl md:text-[8rem] font-bold text-white mb-10 tracking-[ -0.05em] uppercase leading-[0.85]">
            Secure Your <br />
            <span className="italic font-light text-white/10 lowercase">category</span> <br />
            <span className="text-white">Dominance.</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/40 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            In 2026, the most dangerous place to be is <span className="text-white/80">respected inside your company</span>, but <span className="italic">forgotten outside of it.</span>
          </p>

          <div className="flex flex-col items-center gap-10">
            {/* The Ultimate CTA Button */}
            <div className="group relative">
              <CustomButton href="/contact" className={pillButtonStyle}>
                <span className="flex items-center gap-3">
                  Book A Strategy Call <ArrowRight size={16} />
                </span>
              </CustomButton>
              {/* Outer Glow Ring */}
              <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Global Indicator */}
            <div className="flex items-center gap-3 text-white/20 text-[10px] uppercase font-black tracking-[0.5em] mt-8 opacity-50 hover:opacity-100 transition-opacity cursor-default">
              <Globe size={14} className="animate-spin-slow" />
              <span>Lagos // London // New York // Global</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 3. FINAL FOOTER OVERLAY (Ghost Text) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[20vw] font-black uppercase tracking-tighter">Inevitable</h2>
      </div>
    </Section>
  );
};

export default CTASection;