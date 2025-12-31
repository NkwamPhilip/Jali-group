import { useState, useEffect } from "react";
import {
    Users,
    TrendingUp,
    Target,
    CheckCircle2,
    Flame,
    Timer,
    Zap,
    Award
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import CustomButton from "@/components/ui/CustomButton";
import SEOHead from "@/components/ui/SEOHead";
import ScrollReveal from "@/components/ui/ScrollReveal";

const WAMC = () => {
    const pillButtonStyle = "bg-white text-black rounded-full px-12 py-7 font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/90 hover:scale-[1.05]";
    const glassGrid = "bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all hover:bg-white/[0.06] hover:border-white/20";

    return (
        <Layout>
            <SEOHead
                title="WAMC - Watching A Man Change | The Legacy Cohort"
                description="30 Slots. 60 Days. Trackable Results. Turn your potential into the life you're supposed to live."
            />

            {/* --- HERO --- */}
            <Section variant="dark" spacing="large" className="relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0,transparent_70%)]" />

                <ScrollReveal variant="fade" className="relative z-10 text-center max-w-4xl mx-auto pt-20">
                    <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
                        <Timer size={14} className="text-white/40" />
                        <span className="text-white/60 font-bold tracking-[0.2em] uppercase text-[9px]">
                            30 Slots. 60 Days. Trackable Results
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-[0.9]">
                        Break the weight of <br />
                        <span className="italic font-light text-white/20">“what if.”</span>
                    </h1>

                    <div className="space-y-8 text-xl text-white/50 font-light leading-relaxed max-w-3xl mx-auto mb-16">
                        <p>
                            When the lights are off, and it’s just you in your closest, you know you’re meant for more, yet every year ends with the same quiet regret: <span className="text-white/90 font-medium">“I could have done bigger things.”</span>
                        </p>
                    </div>

                    <CustomButton href="/apply" className={pillButtonStyle}>
                        Apply Now For The Legacy Cohort ( March 2026 )
                    </CustomButton>
                </ScrollReveal>
            </Section>

            {/* --- THE COST OF INACTION --- */}
            <Section variant="dark" spacing="large" className="border-y border-white/5 bg-[#030303]">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <ScrollReveal variant="slideRight">
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-tight">
                                That untapped potential <br />
                                <span className="text-white/30 italic font-light text-3xl md:text-4xl">isn’t just a feeling.</span>
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal variant="slideUp" delay={0.2}>
                            <div className="space-y-6 text-white/40 text-lg">
                                <p>It’s years of higher income never earned. Deeper impact never made. The freedom, confidence, and fulfillment that keep slipping away.</p>
                                <p className="text-white/80 font-medium">Most people carry that regret to the end. Wondering what their life could have looked like if they’d finally broken through.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </Section>

            {/* --- THE TRANSFORMATION STORY --- */}
            <Section variant="dark" spacing="large">
                <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
                    <ScrollReveal variant="slideUp">
                        <div className="relative">
                            <img
                                src="/guy.JPEG"
                                alt="Victor Okafor"
                                className="rounded-[3rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white text-black p-8 rounded-3xl shadow-2xl hidden md:block text-center">
                                <p className="text-4xl font-black tracking-tighter italic">WAMC</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Watching A Man Change</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="slideUp" delay={0.2}>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-8 leading-[0.9]">The Man The World <br /> Watched Change</h2>
                        <div className="space-y-6 text-white/50 text-lg leading-relaxed mb-10 font-light">
                            <p>In 2024, I had less than a thousand followers on TikTok and on IG? A few thousands. August 29 that year, I'd had enough. I wanted to see who I'd become if I gave life my best shot.</p>
                            <p className="text-white/80 italic font-medium">"What could I have been if I actually tried?"</p>
                            <p>This was the start of the project called "Watching A Man Change." For 90 days, I uploaded a piece of video content sharing my story and expertise.</p>
                            <p>The result? 11M views, a Fully Funded Scholarship Abroad, 140k+ followers, 3 sold-out events, and 500+ new customers for my company.</p>
                            <p className="text-white font-bold">Today? 700k followers and 20× previous revenue. It changed my entire life.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[{ label: "Followers", val: "700K+" }, { label: "Revenue", val: "20X" }, { label: "Views", val: "11M+" }, { label: "Customers", val: "500+" }].map((s, i) => (
                                <div key={i} className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl">
                                    <p className="text-2xl font-black text-white">{s.val}</p>
                                    <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </Section>

            {/* --- THE PROGRAM DETAILS --- */}
            <Section variant="dark" spacing="large" className="bg-[#020202]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">The Solution</h2>
                        <p className="text-white/20 uppercase tracking-[0.3em] text-[10px] font-bold max-w-2xl mx-auto">
                            You're sick and tired of winging it. You want to finally see who you would become at your full potential.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <ScrollReveal variant="slideUp" className="lg:col-span-2">
                            <div className="bg-white text-black rounded-[3rem] p-10 md:p-16 h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-8">
                                        <h3 className="text-4xl font-bold tracking-tighter">8-Week Group Coaching</h3>
                                        <div className="bg-black text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">March 2026</div>
                                    </div>
                                    <p className="mb-10 text-black/60 font-medium">For 60 days, you'd have clarity, direction, and precise execution while being guided by world-class experts.</p>

                                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <CheckCircle2 className="shrink-0 text-black" size={20} />
                                                <p className="text-[13px] font-bold uppercase tracking-tight">Crystal-clear brand offer & strategy</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <CheckCircle2 className="shrink-0 text-black" size={20} />
                                                <p className="text-[13px] font-bold uppercase tracking-tight">Unlock predictable financial growth</p>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <CheckCircle2 className="shrink-0 text-black" size={20} />
                                                <p className="text-[13px] font-bold uppercase tracking-tight">High-intensity 30-day challenge</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <CheckCircle2 className="shrink-0 text-black" size={20} />
                                                <p className="text-[13px] font-bold uppercase tracking-tight">Weekly accountability & peer group</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Business Owners • Creators • Professionals</p>
                                    <CustomButton href="/apply" className="bg-black text-white px-10 py-5 rounded-full font-bold uppercase text-[10px] tracking-widest">
                                        Apply Now
                                    </CustomButton>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal variant="slideUp" delay={0.2}>
                            <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[3rem] p-10 h-full flex flex-col justify-center text-center">
                                <Zap className="mx-auto mb-6 text-white/40" size={48} />
                                <h4 className="text-white font-bold text-4xl tracking-tighter mb-4">3X Results</h4>
                                <p className="text-white/40 text-sm leading-relaxed mb-8 uppercase font-bold tracking-widest">
                                    Usual Growth in Reach, Community, and Revenue after 3 months.
                                </p>
                                <div className="h-px w-12 bg-white/10 mx-auto mb-8" />
                                <p className="text-[9px] text-white font-black tracking-[0.3em] uppercase">60 Days of Direction</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </Section>

            {/* --- THE PILLARS --- */}
            <Section variant="dark" spacing="large">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold text-white tracking-tighter uppercase mb-4">The Guiding Light.</h2>
                        <p className="text-white/40 text-sm leading-relaxed">We've walked the path and can be your guiding light as you tell your stories and monetize.</p>
                    </div>

                    {[
                        { title: "Custom Made", desc: "A plan that is CUSTOM MADE for you, no matter your niche.", icon: Target },
                        { title: "Personal Growth", desc: "This coaching isn’t about content. It’s Your Personal & Financial growth.", icon: Flame },
                        { title: "The Key", desc: "Your story holds the key to your becoming. Let's give you a headstart.", icon: Award }
                    ].map((item, i) => (
                        <div key={i} className={glassGrid}>
                            <item.icon size={20} className="text-white/20 mb-6" />
                            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4 border-b border-white/10 pb-4">{item.title}</h4>
                            <p className="text-[11px] text-white/50 leading-relaxed font-bold uppercase tracking-tight">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* --- FINAL CALL --- */}
            <Section variant="dark" spacing="large" className="text-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0,transparent_60%)] pointer-events-none" />

                <ScrollReveal variant="slideUp" className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-8 uppercase">
                        Keep carrying the weight of <span className="text-white/20 italic font-light lowercase">“what if”</span>...
                    </h2>
                    <p className="text-xl text-white/40 font-light mb-12 max-w-2xl mx-auto">
                        Or step in now and turn your potential into the life you’re supposed to live.
                    </p>
                    <CustomButton href="/apply" className={pillButtonStyle}>
                        Apply Now For The Legacy Cohort ( March 2026 )
                    </CustomButton>
                    <div className="mt-12 space-y-2">
                        <p className="text-white text-[10px] font-black uppercase tracking-[0.4em]">
                            Slots are taken in days.
                        </p>
                        <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.2em]">
                            Next cohort in 3 months.
                        </p>
                    </div>
                </ScrollReveal>
            </Section>
        </Layout>
    );
};

export default WAMC;