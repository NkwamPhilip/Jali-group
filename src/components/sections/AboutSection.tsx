import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import CustomButton from "@/components/ui/CustomButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

const AboutSection = () => {
  // Signature style for buttons
  const pillButtonStyle = "bg-white text-black rounded-full px-12 py-7 font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/90 hover:scale-[1.05]";

  return (
    <Section variant="dark" spacing="large" className="bg-[#020202]">

      {/* --- EXISTING HERO & STATS --- */}
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-40 max-w-7xl mx-auto px-6">
        <ScrollReveal variant="slideRight">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
            We Know Why <br /> <span className="italic font-light text-white/20">You're Here.</span>
          </h2>
          <p className="text-xl text-white/50 mb-10 leading-relaxed font-light">
            Reality has hit. Getting to the next level has nothing to do with emotions or effort.
            It’s about understanding the game of change.
          </p>
          <CustomButton href="/about" className={pillButtonStyle}>
            Rewrite Your Story
          </CustomButton>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Reach", val: "70M+" },
            { label: "Growth", val: "1200%" },
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

      {/* --- CLIENT LOGO SLIDER (Using standard paths) --- */}
      <div className="relative py-20 border-y border-white/5 overflow-hidden">
        <motion.div
          className="flex items-center gap-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        >
          {/* Mapping through your specific file names from the screenshot */}
          {["bmm.png", "bbu.png", "jpm.png", "mtn.jpeg", "nlng.png", "nnp.png", "techstars.jpeg"].map((imgName, i) => (
            <img
              key={i}
              src={`/${imgName}`}
              alt="Client Logo"
              className="h-20 w-auto object-contain hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            />
          ))}
          {/* Duplicate for seamless loop */}
          {["bmm.png", "bu.png", "jpm.png", "mtn.jpeg", "nlng.png", "nnp.png", "techstars.jpeg"].map((imgName, i) => (
            <img
              key={`dup-${i}`}
              src={`/${imgName}`}
              alt="Client Logo"
              className="h-20 w-auto object-contain hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            />
          ))}
        </motion.div>
      </div>

    </Section>
  );
};

export default AboutSection;