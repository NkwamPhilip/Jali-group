import { Mic, TrendingUp, BookOpen, ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ServicesSection = () => {
  const services = [
    {
      icon: Mic,
      title: "Public Speaking",
      desc: "Transformational talks that establish authority and inspire global action.",
      price: "From $2,500"
    },
    {
      icon: TrendingUp,
      title: "Growth Consulting",
      desc: "Scaling your brand through data-backed frameworks and positioning.",
      price: "From $5,000"
    },
    {
      icon: BookOpen,
      title: "Online Courses",
      desc: "Elite education at Jali Varsity. Turning your influence into profit.",
      price: "From $55"
    }
  ];

  return (
    <Section variant="dark" spacing="large" id="services" className="bg-[#050505]">
      <div className="text-center mb-24">
        <ScrollReveal variant="fade">
          <span className="text-white/20 font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Our Ecosystem</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">THE SOLUTIONS</h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto font-light leading-relaxed">Proven systems for those who refuse to stay invisible.</p>
        </ScrollReveal>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {services.map((service, i) => (
          <ScrollReveal key={i} delay={i * 0.1} variant="slideUp">
            <div className="group bg-white/[0.02] border border-white/5 p-12 rounded-[3rem] hover:bg-white hover:text-black transition-all duration-700 cursor-pointer h-full flex flex-col relative overflow-hidden">

              {/* --- GLASS ICON CONTAINER --- */}
              <div className="relative z-10 w-20 h-20 mb-10">
                {/* Frosted Layer */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 group-hover:border-black/10 group-hover:bg-black/5 transition-all duration-500" />

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center text-white group-hover:text-black transition-colors duration-500">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-3xl font-bold mb-4 tracking-tighter uppercase">{service.title}</h3>
                <p className="text-white/40 group-hover:text-black/60 text-lg mb-12 flex-grow leading-relaxed font-light">
                  {service.desc}
                </p>

                <div className="pt-8 border-t border-white/10 group-hover:border-black/10 flex items-center justify-between">
                  <span className="font-black text-[10px] uppercase tracking-[0.3em]">{service.price}</span>
                  <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;