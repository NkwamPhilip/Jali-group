import { Play, Users, Download, Star, Clock, Check, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import CustomButton from "@/components/ui/CustomButton";
import SEOHead from "@/components/ui/SEOHead";
import ScrollReveal from "@/components/ui/ScrollReveal";

const Courses = () => {
  const plans = [
    {
      id: "foundation",
      title: "Story-Selling",
      subtitle: "Foundation Plan",
      price: "$55",
      description: "Learn the exact storytelling, personal branding and public speaking frameworks used to attract attention, build authority and monetize your brand consistently without chasing trends.",
      duration: "4hrs",
      students: "2000+",
      rating: "4.9/5",
      buttonText: "Get Started",
      features: [
        "Practical Sales & Marketing Exercises",
        "Pitching & Public Speaking full course",
        "Brand Storytelling Course",
        "Personal Branding Module",
        "Certification",
        "Pitching Template for your next speech",
        "Content Template for 1 month of posting"
      ]
    },
    {
      id: "pro",
      title: "Story-Training",
      subtitle: "Pro Level",
      price: "$375",
      highlight: true,
      description: "You can finally stop with the experiments and get 12 months of direction in 4 weeks. Work with Ivy-League certified frameworks that have delivered over $100k in closed deals.",
      duration: "4 weeks",
      students: "113 Clients",
      rating: "5 Star",
      buttonText: "Upgrade Your Brand",
      features: [
        "Personalized Public Speaking Coaching",
        "Personalized Brand Strategy & Content Plan",
        "Ready-To-Use Jali Content Templates",
        "Access to Jali Coaches for 1:1 guidance",
        "Lifetime access to Foundation Plan courses"
      ]
    },
    {
      id: "elite",
      title: "WAMC Exclusive",
      subtitle: "Varsity Elite",
      price: "$1150",
      description: "Go from invisible to inevitable by becoming an authority in your sector and 3x your revenue, reach and community goals in 60 days following our proven framework.",
      duration: "8 weeks",
      students: "412+ people",
      rating: "4.9 Rating",
      buttonText: "Apply For The Legacy Cohort 2026",
      secondaryButton: "Learn More",
      features: [
        "Exclusive Access to Victor Live",
        "Group Coaching with 30 vetted participants",
        "Brand Offer & Strategy Coaching from Jali",
        "Hyper-customized content plan & scripts DFY",
        "30 days of content posting guided by a strategist",
        "Lifetime access to Jali foundation courses",
        "2 weeks post-work support",
        "Free pass to The Jali Tribe (4 months)"
      ]
    }
  ];

  const pillars = [
    { icon: Play, title: "Self-paced Learning", desc: "Learn at your own pace with lifetime access to all course materials and updates." },
    { icon: Users, title: "Coaching & Community", desc: "Big enough to accommodate you but personalized to make you feel seen." },
    { icon: Download, title: "Practical Application", desc: "Get templates, worksheets, and tools you can immediately apply to your situation." },
  ];

  const testimonials = [
    { name: "Sarah J.", role: "Founder, Bloom Media", content: "The frameworks provided are world-class. I closed my biggest deal two weeks after the program." },
    { name: "David O.", role: "Tech Professional", content: "Jali Varsity isn't just a course; it's a complete shift in how you present yourself to the world." },
    { name: "Anita K.", role: "Content Creator", content: "I finally stopped guessing and started building a brand that actually commands attention." }
  ];

  return (
    <Layout>
      <SEOHead title="Jali Varsity - Turn Influence Into Profit" description="Elite tools to master influence and command capital." />

      {/* Hero Section */}
      <Section variant="dark" spacing="large">
        <ScrollReveal variant="fade">
          <div className="text-center max-w-4xl mx-auto py-12">
            <span className="text-white/40 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Jali Varsity</span>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight">
              The Pipeline That Turns <br />
              <span className="text-white/30 italic font-light">Influence Into Profit</span>
            </h1>
          </div>
        </ScrollReveal>
      </Section>

      {/* Pricing Grid with Staggered Scroll & Green Accents */}
      <Section variant="dark" spacing="normal">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.id} variant="slideUp" delay={index * 0.1}>
              <div className={`relative h-full flex flex-col p-10 rounded-[2rem] border transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${
                  plan.highlight ? 'bg-white text-black border-white ring-1 ring-white/20' : 'bg-white/[0.03] backdrop-blur-md text-white border-white/10'
                }`}>
                <div className="mb-10">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                      plan.highlight ? 'text-black border-black/20' : 'text-[#ADFF00] border-[#ADFF00]/20'
                    }`}>
                    {plan.subtitle}
                  </span>
                  <h3 className="text-3xl font-bold mt-6">{plan.title}</h3>
                  <div className="text-5xl font-bold mt-4 tracking-tighter">{plan.price}</div>
                </div>

                <p className={`text-sm leading-relaxed mb-8 flex-grow ${plan.highlight ? 'text-black/60' : 'text-white/40'}`}>
                  {plan.description}
                </p>

                <div className="space-y-4 mb-12">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Included:</p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={16} className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-black' : 'text-[#ADFF00]'}`} />
                      <span className="text-xs leading-tight font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <CustomButton
                  href="/contact"
                  variant={plan.highlight ? "primary" : "outline"}
                  className={`w-full py-7 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                    plan.highlight ? 'bg-black text-white' : 'border-white/20 hover:bg-white hover:text-black'
                  }`}
                >
                  {plan.buttonText}
                </CustomButton>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Pillars Section with Icon Glassmorphism */}
      <Section variant="dark" spacing="large">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Jali Varsity Pillars</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} variant="slideUp" delay={index * 0.15}>
                <div className="bg-white/[0.02] backdrop-blur-md p-12 rounded-[2.5rem] border border-white/5 text-center group hover:bg-white/[0.05] transition-all">
                  <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110">
                    <pillar.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                  <p className="text-white/40 text-sm">{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials with Floating Effect */}
      <Section variant="dark" spacing="normal">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">What Our Students Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} variant="fade" delay={i * 0.2}>
              <div className="bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] backdrop-blur-xl hover:border-white/30 transition-colors">
                <p className="text-white/70 italic mb-8 italic">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10" />
                  <div>
                    <p className="text-white font-bold text-xs uppercase tracking-widest">{t.name}</p>
                    <p className="text-white/30 text-[10px] uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Final CTA - "Be More, Reach More, Earn More" */}
      <Section variant="dark" spacing="large">
        <ScrollReveal variant="slideUp">
          <div className="max-w-5xl mx-auto bg-white text-black rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter">
                Be More, Reach More, <br /> Earn More
              </h2>
              <p className="text-black/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                Join thousands of creators, entrepreneurs and professionals rewriting the story of their finance and business through the Jali Varsity
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomButton 
                  href="/contact" 
                  className="bg-black text-white px-12 py-8 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  Browse All Courses
                </CustomButton>
                <CustomButton 
                  href="/contact" 
                  variant="outline" 
                  className="border-black/10 text-black px-12 py-8 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                >
                  How to make a choice
                </CustomButton>
              </div>
            </div>
            {/* Subtle design element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/[0.03] rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700" />
          </div>
        </ScrollReveal>
      </Section>
    </Layout>
  );
};

export default Courses;