import {
  Check,
  ArrowRight,
  Lightbulb,
  Box,
  Globe,
  Ticket,
  Video,
  ChevronRight
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import CustomButton from "@/components/ui/CustomButton";
import SEOHead from "@/components/ui/SEOHead";
import ScrollReveal from "@/components/ui/ScrollReveal";

const Services = () => {
  // Verbatim copy from "We handle everything" section
  const handleEverything = [
    {
      id: "01",
      title: "Strategy",
      icon: Lightbulb,
      items: ["Brand Narrative", "Image & Perception Map", "Documentation", "Signature Assets: Frameworks"]
    },
    {
      id: "02",
      title: "Execution",
      icon: Box,
      items: ["Production", "Scripting", "Design", "Editing"]
    },
    {
      id: "03",
      title: "Distribution",
      icon: Globe,
      items: ["Platform Hierarchy", "Content Output frequency", "Strategic Media Placement ", "Podcasts & PR"]
    },
    {
      id: "04",
      title: "Conversion",
      icon: Ticket,
      items: ["Lead Magnets", "Email List Integration", "Email Flow", "Additional Offer"]
    },
    {
      id: "05",
      title: "Management",
      icon: Video,
      items: ["Social Media Management", "Speech Writing ", "Community Creation", "Community Management"]
    }
  ];

  // Simple, elegant, white sharp rounded button style
  const pillButtonStyle = "bg-white text-black rounded-full px-10 py-6 font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/90 hover:scale-[1.02]";

  return (
    <Layout>
      <SEOHead
        title="FounderSignal - Become the Unfair Advantage | Victor Okafo"
        description="We turn founders into authority symbols. From Strategy to Execution, we handle everything."
      />

      {/* 1. Hero Section */}
      <Section variant="dark" spacing="large">
        <ScrollReveal variant="fade">
          <div className="text-center max-w-4xl mx-auto pt-12">
            <span className="text-white/40 font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              FounderSignal
            </span>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Become the unfair advantage <br />
              <span className="text-white/30 italic font-light">for your brand.</span>
            </h1>
          </div>
        </ScrollReveal>

        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <ScrollReveal variant="slideUp">
            <img
              src="src/components/images/guy2.JPEG"
              alt="Victor Okafo"
              className="relative rounded-[2rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </ScrollReveal>

          <ScrollReveal variant="slideUp" delay={0.2}>
            <div className="space-y-8">
              <p className="text-xl text-white/60 leading-relaxed italic">
                Africa’s most intriguing young personality in business... embodying it.
              </p>
              <ul className="space-y-4">
                {[
                  "70M views & 650K followers in 1 year",
                  "Sold Out Jali Events in Europe & Africa",
                  "1200% Increase in Client Acquisition for Jali",
                  "Consulted for Companies worth $20B",
                  "Nominated For Global Entrepreneurship Award in 2025"
                ].map((stat, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/80 font-medium text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    {stat}
                  </li>
                ))}
              </ul>
              <CustomButton href="/contact" className={pillButtonStyle}>
                Book Brand Relevance Strategy Call
              </CustomButton>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* 2. Positioning Section */}
      <Section variant="dark" spacing="large" className="bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center space-y-12 mb-20">
          <ScrollReveal variant="slideUp">
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">WHEN POWER LEAVES</h3>
            <div className="h-px w-24 bg-white/10 mx-auto mt-8" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <ScrollReveal variant="fade" delay={0.2} className="bg-white/[0.02] p-10 rounded-[2rem] border border-white/5 backdrop-blur-sm">
              <p className="text-lg text-white/60 leading-relaxed">
                People like you don’t lose in business. You lose relevance. Revenue stays fine, your team is busy, but when decisions are made in your industry, your name isn’t mentioned anymore.
              </p>
              <p className="mt-6 text-white font-bold italic">That’s how power quietly leaves.</p>
            </ScrollReveal>

            <ScrollReveal variant="fade" delay={0.3} className="bg-white/[0.02] p-10 rounded-[2rem] border border-white/5 backdrop-blur-sm">
              <p className="text-lg text-white/60 leading-relaxed">
                In 2026, the most dangerous place... is to be respected inside your company, but forgotten outside of it.
              </p>
              <div className="mt-8">
                <CustomButton href="/contact" className={pillButtonStyle}>
                  Apply To Work With Jali
                </CustomButton>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 3. FounderSignal Main Plan Card */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal variant="slideUp" className="bg-white text-black rounded-[3rem] p-12 md:p-16 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 block opacity-40">Elite Management</span>
              <h3 className="text-4xl font-bold mb-6">FounderSignal</h3>
              <p className="text-black/60 mb-10">Become THE authority symbol in your industry in 6-12 months. From Strategy to Execution, we handle everything.</p>
              <ul className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  "Personal Brand Narrative Mapping",
                  "Strategy & Digital Asset Building",
                  "Execution, Distribution & Placement",
                  "Conversion & Management",
                  "Speaking Engagement & Thought Leadership",
                  "Book Deals, Signature Frameworks"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-tight">
                    <Check size={16} className="shrink-0 text-black" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-[10px] font-black opacity-30 uppercase">Investment</p>
                <p className="text-2xl font-black">From $6,500/Mo</p>
              </div>
              <CustomButton href="/contact" className="bg-black text-white px-10 py-6 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-black/80">
                Apply To Work With Jali
              </CustomButton>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* 4. Fear Section */}
      <Section variant="dark" spacing="large">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <ScrollReveal variant="slideUp">
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-none uppercase">Being Left Behind</h3>
            <p className="text-white/40 text-xl italic mb-12">Remember BlackBerry. Remember Blockbuster.</p>
            <CustomButton href="/contact" className={pillButtonStyle}>
              Book a strategy call
            </CustomButton>
          </ScrollReveal>
          <ScrollReveal variant="fade" delay={0.2} className="space-y-6 text-white/60 text-lg leading-relaxed">
            <p>Once giants, now a memory... In 2026, customers no longer buy products, they buy stories. If yours hasn’t evolved, someone else is already telling a better one.</p>
            <p className="text-white font-medium">Secure your category dominance before it’s written without you.</p>
          </ScrollReveal>
        </div>
      </Section>

      {/* 5. Process Section - Glass Grids */}
      <Section variant="dark" spacing="large" className="bg-black">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">We handle everything!</h2>
          <p className="text-white/40 uppercase tracking-widest text-xs font-bold">So you can focus on being the face of your brand.</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6">
            {handleEverything.map((step, index) => (
              <ScrollReveal key={step.id} variant="slideUp" delay={index * 0.1}>
                <div className="relative">
                  <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <step.icon size={32} className="text-white/40" />
                    </div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-widest">{step.id}. {step.title}</h4>
                  </div>
                  {/* Glass feel sub-grids */}
                  <div className="space-y-3">
                    {step.items.map((item, i) => (
                      <div
                        key={i}
                        className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl p-4 transition-all hover:bg-white/[0.08]"
                      >
                        <div className="flex items-start gap-3">
                          <Check size={14} className="text-white/40 mt-0.5 shrink-0" />
                          <span className="text-[10px] text-white/70 font-black uppercase tracking-tight">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. Brand Relevance Stack */}
      <Section variant="dark" spacing="large">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal variant="slideUp" className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-16 flex flex-col justify-between text-white">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 block text-white/40">Brand Relevance Stack</span>
              <h3 className="text-4xl font-bold mb-6 tracking-tighter">What’s Included:</h3>
              <ul className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  "Narrative Definition & Brand Story Arc",
                  "Advisory & Strategy Development",
                  "Authority To Revenue Roadmap",
                  "Marketing & Sales Flow System Optimization",
                  "Digital transformation & Growth Hacking",
                  "Team Development & Coaching",
                  "Custom Materials delivered"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-tight text-white/60">
                    <Check size={16} className="text-white/40 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/30">Investment</p>
                <p className="text-2xl font-black">From $5,000</p>
              </div>
              <CustomButton href="/contact" className={pillButtonStyle}>
                Book Strategy Call
              </CustomButton>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </Layout>
  );
};

export default Services;