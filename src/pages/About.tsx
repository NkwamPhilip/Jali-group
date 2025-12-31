import { Award, Users, Target, Heart, ArrowRight, ShieldCheck, Globe, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import CustomButton from "@/components/ui/CustomButton";
import SEOHead from "@/components/ui/SEOHead";
import ScrollReveal from "@/components/ui/ScrollReveal";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Connection",
      description: "Genuine relationships and authentic storytelling as the only path to lasting market impact."
    },
    {
      icon: Target,
      title: "Purpose-Driven Growth",
      description: "Every strategy is rooted in a unique purpose designed for sustainable, long-term transformation."
    },
    {
      icon: Users,
      title: "Collaborative Excellence",
      description: "We work as elite partners in your journey, merging our expertise with your specific vision."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "A track record of measurable outcomes for companies worth a combined $20.8B."
    }
  ];

  const pillButtonStyle = "bg-white text-black rounded-full px-10 py-6 font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/90 hover:scale-[1.02]";
  const glassCard = "bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 transition-all hover:border-white/20";

  return (
    <Layout>
      <SEOHead title="About - Victor Okafor | Jali Group" />

      {/* --- HERO: OUR STORY --- */}
      <Section variant="dark" spacing="large">
        <ScrollReveal variant="fade">
          <div className="text-center max-w-4xl mx-auto pt-12">
            <span className="text-white/40 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">The Origin</span>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Growth is found in <br />
              <span className="text-white/20 italic font-light text-4xl md:text-7xl">forgotten connections.</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
              Founded on the belief that the leverage you seek is often hidden in the stories you have yet to tell.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* --- IMPACT STATS --- */}
      <Section variant="dark" spacing="normal">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          <ScrollReveal variant="slideUp" className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">Transforming Lives Through Story</h2>
            <p className="text-lg text-white/50 leading-relaxed font-light">
              At Jali Group, we don't just "market"—we discover the unique narrative waiting to be told and use it as a catalyst for extraordinary growth.
            </p>
            <p className="text-lg text-white/50 leading-relaxed font-light">
              Through a story-centric approach, we’ve unlocked sustainable transformation for hundreds of high-net-worth individuals and global organizations.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="slideUp" delay={0.2}>
            <div className={glassCard}>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-10">Global Impact Audit</h3>
              <div className="space-y-8">
                {[
                  { label: "Impressions generated for Clients", val: "120M+" },
                  { label: "Countries with Active Clients", val: "40+" },
                  { label: "Students Across 6 Continents", val: "2,000+" },
                  { label: "Joint Revenue of Managed Clients", val: "$20.8B" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <span className="text-white/40 group-hover:text-white/60 transition-colors text-sm uppercase tracking-tight">{stat.label}</span>
                    <span className="text-2xl font-black text-white tracking-tighter">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* --- THE FOUNDER --- */}
      <Section variant="dark" spacing="large" className="bg-[#050505]">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          <ScrollReveal variant="slideUp" className="order-2 lg:order-1">
            <div className="relative group">
              <img
                src="/omo.JPEG"
                alt="Victor Okafor"
                className="rounded-[3rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-black p-8 rounded-3xl hidden md:block">
                <p className="text-xs font-black uppercase tracking-widest opacity-30">Strategist</p>
                <p className="text-2xl font-black tracking-tighter">Victor Okafor</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideUp" delay={0.2} className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">Meet the Architect</h2>
            <div className="space-y-6 text-white/50 text-lg leading-relaxed font-light">
              <p>
                Victor is a top-tier strategist in the brand and marketing communication space. While his academic foundation is in <span className="text-white font-medium">Law</span>, his core mastery lies in public speaking and brand communication.
              </p>
              <p>
                Having worked across <span className="text-white">Telecoms, Tech, Aviation, and FMCG</span>, Victor is sought after for his story-centric approach to business growth that transcends traditional marketing.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              {["Telecoms", "Tech", "Aviation", "Law", "Management Consulting"].map((tag, i) => (
                <span key={i} className="text-[10px] font-black uppercase tracking-widest text-white/20 border border-white/5 px-4 py-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-8">
              <CustomButton href="/contact" className={pillButtonStyle}>
                Work With Victor
              </CustomButton>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* --- CORE VALUES (Glass Grids) --- */}
      <Section variant="dark" spacing="large">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter uppercase">The Standard</h2>
          <p className="text-white/20 uppercase tracking-[0.3em] text-[10px] font-bold">Principles guiding every relationship</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} variant="slideUp" delay={index * 0.1}>
              <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-3xl p-8 h-full transition-all hover:bg-white/[0.06]">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8">
                  <value.icon size={20} className="text-white/40" />
                </div>
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">{value.title}</h4>
                <p className="text-white/40 text-[11px] leading-relaxed font-bold uppercase tracking-tight">{value.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* --- FINAL CTA --- */}
      <Section variant="dark" spacing="large" className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_70%)]" />
        <ScrollReveal variant="fade" className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 uppercase">Ready to Start Your Journey?</h2>
          <p className="text-white/40 text-xl mb-12 font-light">
            Let's discuss how our story-centric approach can transform your personal or business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CustomButton href="/contact" className={pillButtonStyle}>
              Book Discovery Call
            </CustomButton>
            <CustomButton href="/services" className="bg-transparent border border-white/10 text-white rounded-full px-10 py-6 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
              Explore Our Services
            </CustomButton>
          </div>
        </ScrollReveal>
      </Section>
    </Layout>
  );
};

export default About;