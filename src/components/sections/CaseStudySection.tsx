import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CustomButton from "@/components/ui/CustomButton";

const caseStudies = [
    {
        id: "001",
        label: "Repositioning",
        name: "Dr. E",
        surname: "Mazi",
        title: "Expert Repositioning",
        fullName: "Dr. Emmanuel Okafor",
        role: "Medical Doctor : Influencer",
        image: "/dre.jpg",
        description: "Using the Jali Framework, Dr. E completely restructured his digital persona, pivoting from a standard practitioner to a sought-after industry authority.",
        stats: [
            { val: "10K", sub: "From 88 Followers to 10K \n in 14 days" },
            { val: "5M+", sub: "Organic \n Aggregated Views" },
            { val: "ELITE", sub: "Positioned for \n Global Stages" }
        ]
    },
    {
        id: "002",
        label: "Iconography",
        name: "Stephanie",
        surname: "Obiano",
        title: "From Invisible To Industry Leader",
        fullName: "Stephanie Obiano",
        role: "Travel Icon : Industry Leader",
        image: "/steph.jpeg",
        description: "From being overlooked, Stephanie was repositioned as a female icon in the travel management industry using the Signature Belief & Framework by Jali.",
        stats: [
            { val: "2024", sub: "Silverbird Entrepreneur \n of the Year" },
            { val: "TOP", sub: "Secured Global \n Speaking Engagements" },
            { val: "INTL", sub: "International \n Collaborations" }
        ]
    },
    {
        id: "003",
        label: "Authority",
        name: "Iyobosa",
        surname: "Sorae",
        title: "The Head Start Program",
        fullName: "Iyobosa Sorae",
        role: "Ex-Global Head of Treasury : Coronation",
        image: "/iya.jpeg",
        description: "Launched a signature book & community with captains of industry in attendance. In her words: 'This program gave me a head start. It was worth it 1000%.'",
        stats: [
            { val: "CEO", sub: "Engaged with \n Captains of Industry" },
            { val: "BOOK", sub: "Launched \n Signature Work" },
            { val: "1000%", sub: "Program Value \n Delivered" }
        ]
    }
];

const CaseStudySection = () => {
    return (
        <div className="bg-[#020202]">
            {caseStudies.map((study, index) => (
                <Section
                    key={study.id}
                    variant="dark"
                    spacing="large"
                    className={`relative overflow-hidden border-t border-white/5 ${index !== 0 ? 'pt-40' : ''}`}
                >
                    {/* SECTION LABEL (Vertical) */}
                    <div className="absolute left-10 top-20 hidden lg:block">
                        <span className="text-white/10 font-black tracking-[1em] uppercase text-[10px] [writing-mode:vertical-lr] rotate-180">
                            Case Study {study.id} // {study.label}
                        </span>
                    </div>

                    <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center px-6">

                        {/* LEFT COLUMN: THE INTEL */}
                        <ScrollReveal variant="slideRight">
                            <div className="space-y-12">
                                <div>
                                    <span className="text-white/20 font-black tracking-[0.5em] uppercase text-[9px] mb-4 block">Results Only</span>
                                    <h3 className="text-6xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-none">
                                        {study.name} <br />
                                        <span className="italic font-light text-white/10 lowercase">{study.surname}</span>
                                    </h3>
                                    <p className="text-white/40 text-[11px] md:text-sm uppercase tracking-[0.3em] font-black mt-6">{study.title}</p>
                                </div>

                                {/* DATA CARDS */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {study.stats.map((stat, i) => (
                                        <div key={i} className="group relative bg-white/[0.02] border border-white/5 backdrop-blur-md p-8 rounded-[2.5rem] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
                                            <div className="relative z-10">
                                                <div className="text-3xl md:text-4xl font-black tracking-tighter mb-2 text-white">
                                                    {stat.val}
                                                </div>
                                                <div className="text-[9px] text-white/60 uppercase font-black tracking-widest leading-relaxed whitespace-pre-line">
                                                    {stat.sub}
                                                </div>
                                            </div>
                                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    ))}
                                </div>

                                {/* DESCRIPTION & CTA */}
                                <div className="space-y-10">
                                    <p className="text-xl text-white/50 leading-relaxed max-w-xl font-light border-l border-white/10 pl-8">
                                        {study.description}
                                    </p>

                                    {index === caseStudies.length - 1 && (
                                        <CustomButton
                                            className="bg-white text-black px-12 py-7 rounded-full font-black text-[11px] uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                                        >
                                            See All Case Studies
                                        </CustomButton>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* RIGHT COLUMN: THE VISUAL */}
                        <ScrollReveal variant="slideLeft" delay={0.2}>
                            <div className="relative group">
                                <div className="aspect-[4/5] overflow-hidden rounded-[3.5rem] border border-white/5 bg-neutral-950 relative">
                                    <img
                                        src={study.image}
                                        alt={study.fullName}
                                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                                    />
                                    <motion.div
                                        animate={{ top: ["0%", "100%", "0%"] }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-0 w-full h-[1px] bg-white/20 blur-sm z-10 pointer-events-none"
                                    />
                                </div>

                                {/* PROFILE TAG */}
                                <div className="absolute -bottom-6 left-6 right-6 lg:-left-10 lg:right-auto backdrop-blur-3xl bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] shadow-2xl max-w-sm">
                                    <h4 className="text-2xl font-black text-white tracking-tighter uppercase">{study.fullName}</h4>
                                    <div className="flex items-center gap-3 mt-2">
                                        <span className="w-2 h-2 rounded-full bg-white/20 animate-pulse" />
                                        <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">{study.role}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </Section>
            ))}
        </div>
    );
};

export default CaseStudySection;