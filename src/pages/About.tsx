import { Award, Users, Target, Heart, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import FeatureCard from "@/components/ui/FeatureCard";
import CustomButton from "@/components/ui/CustomButton";
import SEOHead from "@/components/ui/SEOHead";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Connection",
      description: "We believe in the power of genuine relationships and authentic storytelling to create lasting impact."
    },
    {
      icon: Target,
      title: "Purpose-Driven Growth",
      description: "Every strategy we develop is rooted in your unique purpose and designed for sustainable transformation."
    },
    {
      icon: Users,
      title: "Collaborative Excellence",
      description: "We work alongside you as partners in your journey, combining our expertise with your vision."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Our track record speaks for itself - we deliver measurable outcomes that matter to your success."
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="About Jali Africa - Our Story and Mission"
        description="Learn about Jali Africa's mission to inspire growth through ideas, talks, and transformation. Meet Victor Okafor and discover our approach to business growth and storytelling."
        keywords="about jali africa, victor okafor, storytelling expert, business growth consultant, public speaker"
      />

      <Section variant="hero" spacing="large">
        <div className="text-center animate-fadeIn">
          <span className="text-small uppercase tracking-widest text-muted-foreground mb-4 block">
            About Us
          </span>
          <h1 className="text-hero mb-6 animate-slideUp">
            Our Story
          </h1>
          <p className="text-subhead text-muted-foreground max-w-3xl mx-auto animate-slideUp">
            Founded on the belief that the growth you seek can be found in the connections you often overlook.
          </p>
        </div>
      </Section>

      <Section variant="dark" spacing="normal">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slideUp">
            <h2 className="text-display mb-6">
              Transforming Lives Through Story
            </h2>
            <p className="text-body text-muted-foreground mb-6 leading-relaxed">
              At Jali Africa, we understand that every individual and organization has a unique story waiting to be told. 
              Our mission is to help you discover that story and use it as a catalyst for extraordinary growth.
            </p>
            <p className="text-body text-muted-foreground mb-6 leading-relaxed">
              We specialize in three core areas: delivering transformational public speaking experiences, 
              providing strategic business growth consulting, and creating comprehensive online learning platforms 
              that drive real results.
            </p>
            <p className="text-body text-muted-foreground mb-8 leading-relaxed">
              Through our story-centric approach, we've helped hundreds of individuals and dozens of organizations 
              unlock their potential and achieve sustainable transformation.
            </p>
          </div>
          
          <div className="relative animate-scaleIn">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-large">
              <h3 className="text-headline mb-6">Our Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Speaking Engagements</span>
                  <span className="font-bold">500+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Companies Served</span>
                  <span className="font-bold">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Students Trained</span>
                  <span className="font-bold">10,000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Industries Covered</span>
                  <span className="font-bold">15+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section spacing="normal">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-scaleIn">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-large">
              <div className="w-32 h-32 bg-surface rounded-full mx-auto mb-6"></div>
              <div className="text-center">
                <h3 className="text-headline mb-2">Victor Okafor</h3>
                <p className="text-muted-foreground mb-4">Founder & Lead Strategist</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Law Graduate | Strategy Expert</p>
                  <p>Public Speaking Specialist</p>
                  <p>Brand Communication Consultant</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slideUp">
            <h2 className="text-display mb-6">
              Meet Victor Okafor
            </h2>
            <p className="text-body text-muted-foreground mb-6 leading-relaxed">
              Victor is one of the top-rated professionals in the brand and marketing communication space. 
              While his academic background is in Law, his core expertise lies in strategy, public speaking, 
              content marketing, and brand communication.
            </p>
            <p className="text-body text-muted-foreground mb-6 leading-relaxed">
              Having worked with several international companies, startups, and brands across multiple industries, 
              Victor is highly sought after for his unique story-centric approach to business growth and marketing.
            </p>
            <p className="text-body text-muted-foreground mb-8 leading-relaxed">
              His expertise spans across Telecoms, Tech, Law, Aviation, FMCG, Academia, and Management Consulting, 
              bringing a wealth of cross-industry insights to every engagement.
            </p>
            <CustomButton 
              variant="primary"
              href="/contact"
              icon={ArrowRight}
              iconPosition="right"
            >
              Work With Victor
            </CustomButton>
          </div>
        </div>
      </Section>

      <Section variant="dark" spacing="normal">
        <div className="text-center mb-16">
          <h2 className="text-display mb-6 animate-slideUp">
            Our Core Values
          </h2>
          <p className="text-subhead text-muted-foreground max-w-3xl mx-auto animate-slideUp">
            These principles guide everything we do and every relationship we build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={value.title} className="animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <FeatureCard {...value} />
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="normal" className="text-center">
        <div className="content-width animate-scaleIn">
          <h2 className="text-display mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-subhead text-muted-foreground mb-8">
            Let's discuss how our story-centric approach can transform your personal or business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton 
              variant="primary" 
              size="lg"
              href="/contact"
            >
              Book a Discovery Call
            </CustomButton>
            <CustomButton 
              variant="secondary" 
              size="lg"
              href="/services"
            >
              Explore Our Services
            </CustomButton>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;