import { ArrowRight, Trophy, GraduationCap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Jali Varsity",
      tagline: "UK ACCREDITED & IVY-LEAGUE EXPERTS",
      desc: "Join 2000+ creators, professionals and business owners from 40 countries using their story as leverage, and turning their ideas into income.",
      price: "From $75",
      buttonText: "Access Varsity",
      href: "/courses"
    },
    {
      icon: Target,
      title: "Industry Leader",
      tagline: "FOUNDER-LED BRAND GROWTH",
      desc: "Become the unfair advantage for your brand in 6 months by becoming the most recognizable and trusted voice your industry can’t ignore. Built on Victor's globally verified framework.",
      price: "From $5000",
      buttonText: "Become The Leader",
      href: "/services"
    },
    {
      icon: Trophy,
      title: "WAMC Legacy Cohort",
      tagline: "VICTOR'S INNER CIRCLE",
      desc: "Triple your revenue, reach and community in 8 weeks with our Clarity-Output-Influence-Income framework. Gain direct access to Victor and Tier 1 industry experts. 30 slots only.",
      price: "From $1150",
      buttonText: "Apply for WAMC",
      href: "/wamc"
    }
  ];

  return (
    <Section variant="dark" spacing="large" id="services" className="bg-[#050505]">
      {/* --- SECTION HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <ScrollReveal variant="fade">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <span className="text-white/20 font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">The Ecosystem</span>
              <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter uppercase leading-[0.85]">
                The Jali <br /> <span className="italic font-light text-white/20 titlecase">Solution.</span>
              </h2>
            </div>
            <div className="max-w-md pb-4">
              <p className="text-white/40 text-xl font-light leading-relaxed border-l border-white/10 pl-8">
                The most dangerous place to be in 2026 is competent without being visible. Money flows to those who command authority.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* --- SERVICES GRID --- */}
      <div className="grid md:grid-cols-6 gap-6 max-w-7xl mx-auto px-6">

        {/* Top Row: Jali Varsity & Industry Leader */}
        {services.slice(0, 2).map((service, i) => (
          <ScrollReveal key={i} delay={i * 0.1} variant="slideUp" className="md:col-span-3">
            <Link to={service.href} className="group bg-white/[0.02] border border-white/5 p-10 md:p-14 rounded-[3.5rem] hover:bg-white transition-all duration-700 h-full flex flex-col justify-between overflow-hidden relative">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-black/5 transition-colors">
                    <service.icon className="text-white group-hover:text-black" size={28} strokeWidth={1.5} />
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-black/30 block mb-1">{service.tagline}</span>
                    <span className="text-xs font-bold text-white group-hover:text-black transition-colors">{service.price}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-black mb-6 tracking-tighter uppercase">{service.title}</h3>
                <p className="text-white/40 group-hover:text-black/60 text-lg leading-relaxed font-light mb-10">
                  {service.desc}
                </p>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white group-hover:text-black">
                {service.buttonText} <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </ScrollReveal>
        ))}

        {/* Bottom Row: WAMC Legacy Cohort (Full Width) */}
        <ScrollReveal variant="slideUp" delay={0.3} className="md:col-span-6">
          <Link to="/wamc" className="group block bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-10 md:p-16 rounded-[4rem] hover:bg-white transition-all duration-1000">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="px-4 py-1.5 rounded-full border border-white/10 group-hover:border-black/10 text-[9px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-black/40">
                    30 Slots Only - Personalized Coaching
                  </div>
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                </div>
                <h3 className="text-4xl md:text-7xl font-bold text-white group-hover:text-black mb-6 tracking-tighter uppercase">WAMC Legacy Cohort</h3>
                <p className="text-white/40 group-hover:text-black/60 text-xl leading-relaxed font-light max-w-3xl mb-4">
                  {services[2].desc}
                </p>
                <span className="text-white/20 group-hover:text-black/40 font-black text-sm uppercase tracking-widest">{services[2].price}</span>
              </div>

              <div className="w-full md:w-auto">
                <div className="w-full md:w-auto text-center bg-white text-black group-hover:bg-black group-hover:text-white px-12 py-8 rounded-full font-black text-[11px] uppercase tracking-[0.3em] transition-all duration-500 hover:scale-105 whitespace-nowrap">
                  Apply for WAMC
                </div>
              </div>
            </div>
          </Link>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default ServicesSection;