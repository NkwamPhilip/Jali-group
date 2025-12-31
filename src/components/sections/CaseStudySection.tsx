import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CustomButton from "@/components/ui/CustomButton";

const CaseStudySection = () => {
    return (
        <Section variant="dark" spacing="large" className="bg-[#020202] relative overflow-hidden border-t border-white/5">

            {/* 1. SECTION LABEL (The Dossier Style) */}
            <div className="absolute left-10 top-20 hidden lg:block">
                <span className="text-white/10 font-black tracking-[1em] uppercase text-[10px] [writing-mode:vertical-lr] rotate-180">
                    Case Study 001 // Repositioning
                </span>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center px-6">

                {/* LEFT COLUMN: THE INTEL */}
                <ScrollReveal variant="slideRight">
                    <div className="space-y-12">
                        <div>
                            <span className="text-white/20 font-black tracking-[0.5em] uppercase text-[9px] mb-4 block">The Client</span>
                            <h3 className="text-6xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-none">
                                Dr. E <br />
                                <span className="italic font-light text-white/10 lowercase">(Mazi)</span>
                            </h3>
                            <p className="text-white/40 text-lg uppercase tracking-[0.2em] font-bold mt-4">Expert Repositioning</p>
                        </div>

                        {/* DATA CARDS - Frosted Glass Style */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { val: "10K", sub: "From 88 to 10K \n in 14 days", highlight: true },
                                { val: "5M+", sub: "Organic \n Aggregated Views", highlight: false },
                                { val: "ELITE", sub: "Positioned for \n Global Stages", highlight: false }
                            ].map((stat, i) => (
                                <div key={i} className="group relative bg-white/[0.02] border border-white/5 backdrop-blur-md p-8 rounded-[2.5rem] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
                                    <div className="relative z-10">
                                        <div className={`text-4xl font-black tracking-tighter mb-2 ${stat.highlight ? 'text-white' : 'text-white'}`}>
                                            {stat.val}
                                        </div>
                                        <div className="text-[9px] text-white uppercase font-black tracking-widest leading-relaxed whitespace-pre-line">
                                            {stat.sub}
                                        </div>
                                    </div>
                                    {/* Glass reflection glare */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>

                        {/* DESCRIPTION & CTA */}
                        <div className="space-y-10">
                            <p className="text-xl text-white/50 leading-relaxed max-w-xl font-light border-l border-white/10 pl-8">
                                Using the <span className="text-white">Jali Framework</span>, Dr. E completely restructured his digital persona, pivoting from a standard practitioner to a <span className="italic">sought-after industry authority.</span>
                            </p>

                            <CustomButton
                                className="bg-white text-black px-12 py-7 rounded-full font-black text-[11px] uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                            >
                                See All Case Studies
                            </CustomButton>
                        </div>
                    </div>
                </ScrollReveal>

                {/* RIGHT COLUMN: THE VISUAL (Target Profile) */}
                <ScrollReveal variant="slideLeft" delay={0.2}>
                    <div className="relative group">
                        {/* Image Frame with Scanning Effect */}
                        <div className="aspect-[4/5] overflow-hidden rounded-[3.5rem] border border-white/5 bg-neutral-950 relative">
                            <img
                                src="/dre.jpg"
                                alt="Dr. E Mazi"
                                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                            />

                            {/* Scanning Line Animation */}
                            <motion.div
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 w-full h-[2px] bg-white/20 blur-sm z-10 pointer-events-none"
                            />
                        </div>

                        {/* PROFILE TAG - Deep Glassmorphism */}
                        <div className="absolute -bottom-6 left-6 right-6 lg:-left-10 lg:right-auto backdrop-blur-3xl bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] shadow-2xl max-w-sm">
                            <h4 className="text-2xl font-black text-white tracking-tighter uppercase">Dr. E (Mazi)</h4>
                            <div className="flex items-center gap-3 mt-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">Medical Doctor : Influencer</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </Section>
    );
};

export default CaseStudySection;