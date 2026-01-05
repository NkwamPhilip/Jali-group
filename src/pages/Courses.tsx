import { Play, Users, Download, Check } from "lucide-react";
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
      link: "https://mainstack.com/varsity-foundation",
      description: "Learn the exact storytelling, personal branding and public speaking frameworks used to attract attention, build authority and monetize your brand consistently without chasing trends.",
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
      link: "https://mainstack.com/varsity-pro",
      highlight: true,
      description: "You can finally stop with the experiments and get 12 months of direction in 4 weeks. Work with Ivy-League certified frameworks that have delivered over $100k in closed deals.",
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
      link: "https://mainstack.com/strategy-call",
      description: "Go from invisible to inevitable by becoming an authority in your sector and 3x your revenue, reach and community goals in 60 days following our proven framework.",
      buttonText: "Apply For The Legacy Cohort 2026",
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

  return (
    <Layout>
      <SEOHead title="Jali Varsity - Turn Influence Into Profit" description="Elite tools to master influence and command capital." />

      {/* Hero Section */}
      <Section variant="dark" spacing="large">
        <ScrollReveal variant="fade">
          <div className="text-center max-w-4xl mx-auto py-12 px-6">
            <span className="text-white/40 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Jali Varsity</span>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight">
              The Pipeline That Turns <br />
              <span className="text-white/30 italic font-light">Influence Into Profit</span>
            </h1>
          </div>
        </ScrollReveal>
      </Section>

      {/* Pricing Grid */}
      <Section variant="dark" spacing="normal">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch px-6">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.id} variant="slideUp" delay={index * 0.1}>
              <div className={`relative h-full flex flex-col p-10 rounded-[2rem] border transition-all duration-500 hover:-translate-y-4 ${plan.highlight ? 'bg-white text-black border-white' : 'bg-white/[0.03] backdrop-blur-md text-white border-white/10'}`}>
                <div className="mb-10">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${plan.highlight ? 'text-black border-black/20' : 'text-[#ADFF00] border-[#ADFF00]/20'}`}>
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

      {/* Pillars Section */}
      <Section variant="dark" spacing="large">
        <div className="text-center mb-20 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">Jali Varsity Pillars</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} variant="slideUp" delay={index * 0.15}>
                <div className="bg-white/[0.02] backdrop-blur-md p-12 rounded-[2.5rem] border border-white/5 text-center group transition-all">
                  <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <pillar.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
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
          <div className="max-w-5xl mx-auto bg-white text-black rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight">
                Be More. Reach More. <br /> Earn More.
              </h2>
              <p className="text-black/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
                Join thousands of creators, entrepreneurs and professionals rewriting the story of their finance and business through the Jali Varsity.
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