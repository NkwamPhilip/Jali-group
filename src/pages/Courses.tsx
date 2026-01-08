import { Play, Users, Download, Check, Star } from "lucide-react";
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
      price: "$67",
      link: "https://mainstack.com/varsity-foundation",
      description: "Learn the exact storytelling, personal branding and public speaking frameworks used to attract attention, build authority and monetize your brand consistently without chasing trends.",
      result: "Usual Result: You get your first 1k - 5k loyal followers, $1K - $5k from online sales.",
      meta: { duration: "4hrs", students: "2000+ have taken the course", rating: "4.9/5" },
      buttonText: "Join Waitlist",
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
      price: "$350",
      link: "https://mainstack.com/varsity-pro",
      highlight: true,
      description: "Work with Ivy-League certified frameworks that have delivered over $100k in closed deals. Positioned as Top 10 voice in your niche in 12 months.",
      result: "Usual Result: Earn $5k - $15k directly and consistently from online leads within 6 months.",
      meta: { duration: "4 weeks", students: "113 Clients have taken the course", rating: "5.0" },
      buttonText: "Join Waitlist",
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
      link: "https://mainstack.com/strategy-call",
      description: "Go from invisible to inevitable. 3x your revenue, reach and community goals in 60 days by following our proven framework.",
      result: "Usual Result: $25k - $50k in 10 months from online traction | Speaking Engagement offers.",
      meta: { duration: "8 weeks", students: "412+ People have taken the course", rating: "4.9" },
      buttonText: "Apply For The Legacy Cohort 2026",
      features: [
        "Exclusive Access to Victor Live",
        "Group Coaching (30 vetted participants)",
        "Brand Offer & Strategy Coaching from Jali",
        "DFY customized content plan, scripts & calendar",
        "30 days guided content posting",
        "Lifetime access to Jali foundation courses",
        "Free pass to The Jali Tribe (4 months)"
      ]
    }
  ];

  const demographics = [
    { label: "Entrepreneurs", value: "34%" },
    { label: "Creators", value: "29%" },
    { label: "Professionals", value: "27%" },
    { label: "High Achievers", value: "100%" },
  ];

  return (
    <Layout>
      <SEOHead title="Jali Varsity - Turn Influence Into Profit" description="Elite tools to master influence and command capital." />

      {/* Hero Section */}
      <Section variant="dark" spacing="large">
        <ScrollReveal variant="fade">
          <div className="text-center max-w-4xl mx-auto py-12 px-6">
            <span className="text-white/40 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Jali Varsity</span>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight ">
              The Pipeline That Turns <br />
              <span className="text-white/30 italic font-light lowercase">Influence Into Profit</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8">
              You feel that deep inner heaviness; the pressure to become more and earn more?
              Ambition meets unstoppable execution here. Master the tools needed to make results certain.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Stats/Proof Section */}
      <Section variant="dark" className="bg-white/5 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-center">
          {[
            { label: "Views generated", val: "70M" },
            { label: "Sold Out Events", val: "3" },
            { label: "Consulting Value", val: "7-Fig" },
            { label: "Student Rating", val: "4.9/5" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-5xl font-black text-white mb-2">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing Grid */}
      <Section variant="dark" spacing="normal">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch px-6">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.id} variant="slideUp" delay={index * 0.1}>
              <div className={`relative h-full flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-4 ${plan.highlight ? 'bg-white text-black border-white shadow-[0_0_50px_rgba(255,255,255,0.1)]' : 'bg-white/[0.03] backdrop-blur-md text-white border-white/10'}`}>
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-6">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${plan.highlight ? 'text-black border-black/20' : 'text-[#ADFF00] border-[#ADFF00]/20'}`}>
                      {plan.subtitle}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] font-bold opacity-60">
                      <Star size={10} className="fill-current" /> {plan.meta.rating}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold">{plan.title}</h3>
                  <div className="text-5xl font-bold mt-4 tracking-tighter">{plan.price}</div>
                  <div className="text-[10px] uppercase font-bold mt-2 opacity-40">{plan.meta.duration} • {plan.meta.students}</div>
                </div>

                <div className="space-y-6 flex-grow">
                  <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-black/80' : 'text-white/60'}`}>
                    {plan.description}
                  </p>
                  <p className={`text-[11px] italic font-medium p-4 rounded-2xl ${plan.highlight ? 'bg-black/5 text-black' : 'bg-white/5 text-[#ADFF00]'}`}>
                    {plan.result}
                  </p>
                </div>

                <div className="space-y-4 my-10">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-50">What's included:</p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={14} className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-black' : 'text-[#ADFF00]'}`} />
                      <span className="text-[11px] leading-tight font-medium uppercase tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <CustomButton
                  href={plan.link}
                  className={`w-full py-7 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${plan.highlight ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  {plan.buttonText}
                </CustomButton>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Demographics Section */}
      <Section variant="dark" className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white font-bold tracking-[0.3em] uppercase text-xs mb-12">Who Enrolls For Our Programs?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {demographics.map((item, i) => (
              <div key={i} className="group">
                <div className="text-4xl font-black text-white group-hover:text-[#ADFF00] transition-colors">{item.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mt-2">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pillars Section */}
      <Section variant="dark" spacing="large">
        <div className="text-center mb-20 px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter uppercase">Jali Varsity Pillars</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            {[
              { icon: Play, title: "Self-paced Learning", desc: "Learn at your own pace with lifetime access to all course materials and updates." },
              { icon: Users, title: "Coaching & Community", desc: "Big enough to accommodate you but personalized to make you feel seen." },
              { icon: Download, title: "Practical Application", desc: "Get templates, worksheets, and tools you can immediately apply to your situation." },
            ].map((pillar, index) => (
              <ScrollReveal key={pillar.title} variant="slideUp" delay={index * 0.15}>
                <div className="bg-white/[0.02] backdrop-blur-md p-12 rounded-[2.5rem] border border-white/5 text-center transition-all hover:bg-white/[0.05]">
                  <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <pillar.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">{pillar.title}</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="dark" spacing="large">
        <ScrollReveal variant="slideUp">
          <div className="max-w-5xl mx-auto bg-white text-black rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight uppercase">
                Be More. Reach More. <br /> Earn More.
              </h2>
              <p className="text-black/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
                Master the methods that turn talented and unknown individuals into industry authorities. Your story is the leverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomButton
                  href="https://mainstack.com/strategy-call"
                  className="bg-black text-white px-12 py-8 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  Book A Strategy Call
                </CustomButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </Layout>
  );
};

export default Courses;