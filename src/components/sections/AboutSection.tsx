import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import CustomButton from "@/components/ui/CustomButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

const AboutSection = () => {
  const pillButtonStyle = "bg-white text-black rounded-full px-12 py-7 font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/90 hover:scale-[1.05]";

  const logos = [
    "bmm.png",
    "bbu.png",
    "jpm.png",
    "mtn.jpeg",
    "nlng.png",
    "nnp.png",
    "techstars.jpeg"
  ];

  return (
    <Section variant="dark" spacing="large" className="bg-[#020202]">
      {/* --- HERO & STATS SECTION --- */}
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-40 max-w-7xl mx-auto px-6">
        <ScrollReveal variant="slideRight">
          {/* UPDATED HEADING STRUCTURE */}
          <h2 className="text-[8vw] md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.85]">
            {/* forces 'We Know Why' to stay on one line */}
            <span className="block whitespace-nowrap">We Know Why</span>

            {/* sits neatly right under */}
            <span className="block italic font-light text-white/20 lowercase">
              You're Here.
            </span>
          </h2>

          <p className="text-xl text-white/50 mb-10 leading-relaxed font-light">
            Reality has hit. Getting to the next level has nothing to do with emotions or effort.
            It’s about understanding the game of change.
          </p>
          <CustomButton href="/about" className={pillButtonStyle}>
            Rewrite Your Story
          </CustomButton>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Client Reach", val: "120M+" },
            { label: "Students", val: "2000+" },
            { label: "Community", val: "650K" },
            { label: "Joint Client Revenue", val: "$20.8B" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem]">
              <div className="text-xl font-black text-white mb-2 tracking-tighter">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-5xl text-center md:text-7xl font-bold text-white mb-12 tracking-tighter uppercase">Brand & Clients</h2>

      {/* --- RE-ENGINEERED MOBILE-FIRST SLIDER --- */}
      <div className="relative py-32 border-y border-white/5 overflow-hidden w-full flex">
        {/* Deep Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020202] via-[#020202]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020202] via-[#020202]/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex flex-nowrap min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {/* First Set */}
          <div className="flex items-center gap-20 md:gap-40 px-10 md:px-20">
            {logos.map((imgName, i) => (
              <div key={`orig-wrapper-${i}`} className="shrink-0">
                <img
                  src={`/${imgName}`}
                  alt="Client Logo"
                  className="h-20 md:h-32 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Second Set (Duplicate) */}
          <div className="flex items-center gap-20 md:gap-40 px-10 md:px-20">
            {logos.map((imgName, i) => (
              <div key={`dup-wrapper-${i}`} className="shrink-0">
                <img
                  src={`/${imgName}`}
                  alt="Client Logo"
                  className="h-20 md:h-32 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection;