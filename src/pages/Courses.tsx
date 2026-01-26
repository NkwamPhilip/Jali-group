import { Play, Users, Download, Check, Star, ArrowRight } from "lucide-react";
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
      link: "https://mainstack.com/varsity-foundation-plan",
      description: "Learn the exact storytelling, personal branding and public speaking frameworks used to attract attention, build authority and monetize your brand consistently without chasing trends.",
      result: "Usual Result: You get your first 1k - 5k loyal followers, $1K - $5k from online sales.",
      meta: { duration: "", students: "2000+ Students", rating: "4.9/5" },
      buttonText: "Get Full Details",
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
      price: "$275",
      link: "https://mainstack.com/varsity-pro",
      highlight: true,
      description: "Work with Ivy-League certified frameworks that have delivered over $100k in closed deals. Positioned as Top 10 voice in your niche in 12 months.",
      result: "Usual Result: Earn $5k - $15k directly and consistently from online leads within 6 months.",
      meta: { duration: "4 weeks", students: "113+ Clients", rating: "5.0" },
      buttonText: "Get Full Details",
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
      price: "$750",
      link: "https://tally.so/r/obeRRe",
      description: "Go from invisible to inevitable. 3x your revenue, reach and community goals in 60 days by following our proven framework.",
      result: "Usual Result: $25k - $50k in 10 months from online traction | Speaking Engagement offers.",
      meta: { duration: "8 weeks", students: "412+ Participants", rating: "4.9" },
      buttonText: "Get Full Details",
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

      {/* 1. Hero Section */}
      <Section variant="dark" spacing="large">
        <ScrollReveal variant="fade">
          <div className="text-center max-w-4xl mx-auto py-12 px-6">
            <span className="text-white/40 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Jali Varsity</span>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight uppercase">
              The Pipeline That Turns <br />
              <span className="text-white/30 italic font-light lowercase">Influence Into Profit</span>
            </h1>
          </div>
        </ScrollReveal>
      </Section>

      {/* 2. THE NARRATIVE (New Long Copy Section) */}
      <Section variant="dark" className="pt-0 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal variant="slideUp">
            <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl text-white font-light leading-relaxed tracking-tight">
                  You feel that deep inner heaviness; the not-so-quiet pressure pushing you to become more, earn more, and get to the next level? <span className="text-white/40 italic">You’re why we exist.</span>
                </p>
                <p className="text-lg text-white/60 font-light leading-relaxed">
                  If you’re tired of missing out on opportunities you deserve, then get ready to access elite tools to master influence, shape perception, and implement strategy to command capital and dominate your niche.
                </p>
              </div>

              <div className="border-l border-white/10 pl-8 py-4 space-y-6">
                <p className="text-xl text-white font-medium italic">
                  "Your story can serve as the leverage you need to change your life forever. It changed mine."
                </p>
                <p className="text-white/60 leading-relaxed">
                  I went from talented and unknown to being the name my industry can’t ignore in just a few years. Within a year, with the same frameworks you’re about to get access to, I got:
                </p>

                <ul className="grid md:grid-cols-2 gap-y-4 gap-x-12">
                  {[
                    "70 million views",
                    "3 Sold out events in Europe & Africa",
                    "7 figure Consulting gigs for global businesses",
                    "TEDX invitations",
                    "Funding from international organizations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-white/80">
                      <div className="w-1.5 h-1.5 bg-[#ADFF00] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8 pt-8">
                <p className="text-lg text-white/60 font-light leading-relaxed">
                  There’s a method to all of it. It’s about mastering the tools needed to make results as certain as possible. This is why we have created the Varsity.
                  Our courses combine data-backed frameworks with practical application to deliver real, measurable results.
                </p>
                <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">
                  <span className="text-[#ADFF00] animate-pulse"><ArrowRight size={20} /></span>
                  <p className="text-sm font-bold uppercase tracking-widest text-white">
                    This is where ambition meets unstoppable execution.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* 3. Pricing Grid */}
      <Section variant="dark" spacing="normal" className="bg-[#050505]">
        <div className="text-center mb-16 px-6">
          <h2 className="text-white/20 font-black tracking-[0.4em] uppercase text-[10px] mb-4">The Selection</h2>
          <p className="text-white text-2xl font-light">Choose a plan that aligns with where you are.</p>
          <h3 className="text-white/20 font-black tracking-[0.4em] uppercase text-[10px] mb-4">( These are waitlist prices and will change on the 31st of Jan, 2026) </h3>
        </div>
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