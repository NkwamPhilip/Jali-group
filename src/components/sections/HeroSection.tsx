import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import Section from "@/components/ui/Section";
import CustomButton from "@/components/ui/CustomButton";
import TypewriterText from "@/components/ui/TypewriterText";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollY } = useScroll();
  const ghostY = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(".glass-shard", { opacity: 0, scale: 0.9, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 2, stagger: 0.2 })
        .fromTo(".reveal-text", { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.1 }, "-=1.5");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Sync state with video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <Section variant="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black py-0">

      {/* 1. LOCAL VIDEO LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Visual Overlays for Readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-105"
        >
          {/* Prioritizing MP4 for faster web streaming */}
          <source src="/vic.mp4" type="video/mp4" />
          <source src="/vic.MOV" type="video/quicktime" />
        </video>
      </div>

      {/* 2. GLASS SHARDS */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="glass-shard absolute top-[10%] left-[5%] w-[30vw] h-[30vw] bg-white/[0.02] backdrop-blur-[100px] rounded-full border border-white/5" />

        <div className="glass-shard absolute 
            bottom-[5%] right-[5%] 
            md:bottom-[10%] md:right-[8%] 
            w-8 h-8                   
            md:w-96 md:h-96             
            bg-white/[0.03] backdrop-blur-3xl 
            rounded-[2rem] md:rounded-[4rem] 
            border border-white/10 
            rotate-0 md:rotate-12       
            transition-all duration-700"
        />
      </div>

      {/* 3. MAIN CONTENT */}
      <div ref={containerRef} className="relative z-30 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-4 bg-white/[0.05] border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span className="text-[9px] uppercase font-black tracking-[0.4em] text-white/60">EST. MMXXIV — JALI GROUP</span>
          </div>
        </div>

        <div className="mb-12">
          <h1 className="text-[12vw] md:text-[8rem] font-bold text-white tracking-tighter leading-[0.85] uppercase">
            <span className="reveal-text block">Your Story</span>
            <div className="flex flex-nowrap justify-center items-baseline gap-x-2 md:gap-x-4 whitespace-nowrap">
              <span className="reveal-text block text-white/20 italic font-light lowercase">into</span>
              <span className="reveal-text block italic font-light text-white">
                <TypewriterText />
              </span>
            </div>
          </h1>
        </div>

        <div className="max-w-2xl mx-auto space-y-16">
          <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed reveal-text tracking-wide px-4">
            We use influence, perception, and strategy to turn <br className="hidden md:block" />
            invisible potential into <span className="text-white/80 font-normal">inevitable capital.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <CustomButton
              href="/services"
              className="bg-white text-black px-16 py-8 rounded-full font-black text-[11px] uppercase tracking-[0.3em] hover:scale-105 transition-all duration-500"
            >
              Become Inevitable
            </CustomButton>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;