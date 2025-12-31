import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COMMUNITY_MEMBERS } from "@/constant/content";
import { cn } from "@/lib/utils";

const CommunitySection = () => {
  // Triple the array to ensure no gaps on extra-wide screens
  const duplicatedMembers = [...COMMUNITY_MEMBERS, ...COMMUNITY_MEMBERS, ...COMMUNITY_MEMBERS];

  return (
    <Section variant="dark" spacing="large" className="overflow-hidden bg-[#020202] relative">

      {/* 1. SECTION BACKGROUND GHOST TEXT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.01] select-none">
        <h2 className="text-[30vw] font-black uppercase tracking-tighter">Global</h2>
      </div>

      <ScrollReveal variant="fade">
        <div className="text-center mb-24 relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span className="text-white/40 font-black tracking-[0.4em] uppercase text-[9px]">
              The Inner Circle
            </span>
          </div>

          <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter uppercase leading-[0.85]">
            A Network of <br />
            <span className="italic font-light text-white/10 lowercase">unrivaled</span> dominance.
          </h2>

          <p className="text-white/40 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Join 2,000+ founders who have transcended the noise. <br className="hidden md:block" />
            This isn't a community. <span className="text-white/80">It's an ecosystem of power.</span>
          </p>
        </div>
      </ScrollReveal>

      {/* 2. INFINITE SCROLL (The Member Tape) */}
      <div className="relative flex overflow-hidden py-10 z-10">
        <motion.div
          className="flex gap-6"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedMembers.map((member, index) => (
            <CommunityMemberCard key={`${member.id}-${index}`} member={member} />
          ))}
        </motion.div>

        {/* Cinematic Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#020202] via-[#020202]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#020202] via-[#020202]/80 to-transparent z-20" />
      </div>

      {/* 3. BOTTOM STATS (Data Readout Style) */}
      <div className="mt-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
          {[
            { label: "Active Members", val: "2,000+" },
            { label: "Global Industries", val: "15+" },
            { label: "Nations Represented", val: "40+" }
          ].map((stat) => (
            <div key={stat.label} className="group text-center">
              <p className="text-4xl font-black text-white group-hover:scale-110 transition-transform duration-500 tracking-tighter">
                {stat.val}
              </p>
              <div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:w-16 transition-all" />
              <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-black">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const CommunityMemberCard = ({ member }: { member: any }) => {
  return (
    <div
      className={cn(
        "flex-shrink-0 w-64 p-10 group transition-all duration-700",
        "bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[3rem] hover:bg-white hover:text-black shadow-2xl"
      )}
    >
      <div className="flex flex-col items-center text-center">
        {/* Profile Frame - Biometric Look */}
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-2xl border border-white/10 p-1 group-hover:border-black/10 transition-colors rotate-3 group-hover:rotate-0 duration-500">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full rounded-[1.2rem] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            />
          </div>
          {/* Target Corner Accents (Decorative) */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-white/20 group-hover:border-black/40" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-white/20 group-hover:border-black/40" />
        </div>

        <h3 className="font-black text-[11px] uppercase tracking-[0.2em] mb-2">{member.name}</h3>
        <p className="opacity-40 text-[9px] font-bold uppercase tracking-widest mb-6 leading-tight">
          {member.role}
        </p>

        {member.company && (
          <span className="text-[8px] bg-current/5 px-4 py-1.5 rounded-full uppercase font-black tracking-widest border border-current/10">
            {member.company}
          </span>
        )}
      </div>
    </div>
  );
};

export default CommunitySection;