import { Mic, TrendingUp, BookOpen, Users, Target, Lightbulb, ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import FeatureCard from "@/components/ui/FeatureCard";
import CustomButton from "@/components/ui/CustomButton";
import SEOHead from "@/components/ui/SEOHead";

const Services = () => {
  const services = [
    {
      id: "speaking",
      icon: Mic,
      title: "Public Speaking Engagements",
      description: "Transformational talks that inspire action and create lasting impact in your audience.",
      features: [
        "Keynote presentations for conferences and events",
        "Workshop facilitation and interactive sessions",
        "Corporate training and team development",
        "Motivational speaking for schools and universities",
        "Panel discussions and thought leadership forums"
      ],
      pricing: "Starting from $2,500 per engagement",
      cta: "Book a Speaking Engagement"
    },
    {
      id: "consulting",
      icon: TrendingUp,
      title: "Business Growth Consulting",
      description: "Strategic consulting to scale your business through proven systems and frameworks.",
      features: [
        "Business strategy development and execution",
        "Story-driven marketing and brand positioning",
        "Sales system optimization and scaling",
        "Team development and leadership coaching",
        "Digital transformation and growth hacking"
      ],
      pricing: "Custom packages from $5,000",
      cta: "Start Your Growth Journey"
    },
    {
      id: "courses",
      icon: BookOpen,
      title: "Transformational Online Courses",
      description: "Comprehensive learning experiences that build practical skills for sustained growth.",
      features: [
        "Self-paced online learning modules",
        "Live coaching sessions and Q&A",
        "Practical assignments and real-world projects",
        "Community access and peer networking",
        "Lifetime access to course materials"
      ],
      pricing: "From $497 to $2,997 per course",
      cta: "Explore Our Courses"
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: "Discovery Call",
      description: "We start with a deep-dive conversation to understand your needs, goals, and current challenges."
    },
    {
      icon: Target,
      title: "Strategy Development",
      description: "Based on our discovery, we create a customized strategy that aligns with your objectives."
    },
    {
      icon: Lightbulb,
      title: "Implementation",
      description: "We work together to execute the strategy, providing guidance and support every step of the way."
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Services - Public Speaking, Business Consulting & Online Courses | Jali Africa"
        description="Professional public speaking engagements, strategic business growth consulting, and transformational online courses. Unlock your potential with Jali Africa's proven systems."
        keywords="public speaking services, business consulting, online courses, keynote speaker, business growth strategy, corporate training"
      />

      <Section variant="hero" spacing="large">
        <div className="text-center animate-fadeIn">
          <span className="text-small uppercase tracking-widest text-muted-foreground mb-4 block">
            Our Services
          </span>
          <h1 className="text-hero mb-6 animate-slideUp">
            Transform Your
            <br />
            <span className="italic">Potential</span>
          </h1>
          <p className="text-subhead text-muted-foreground max-w-3xl mx-auto animate-slideUp">
            From public speaking to business strategy, we provide comprehensive solutions 
            for personal and professional growth.
          </p>
        </div>
      </Section>

      <Section variant="dark" spacing="normal">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <FeatureCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
              >
                <CustomButton 
                  variant="ghost" 
                  href={`#${service.id}`}
                  icon={ArrowRight}
                  iconPosition="right"
                  className="mt-4"
                >
                  Learn More
                </CustomButton>
              </FeatureCard>
            </div>
          ))}
        </div>
      </Section>

      {services.map((service, index) => (
        <Section 
          key={service.id}
          id={service.id}
          variant={index % 2 === 0 ? "light" : "dark"}
          spacing="normal"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`animate-slideUp ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center mr-4">
                  <service.icon size={24} />
                </div>
                <h2 className="text-display">{service.title}</h2>
              </div>
              
              <p className="text-body text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-8">
                <h3 className="text-headline mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={20} className="text-foreground mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-body text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Investment</h4>
                  <p className="text-muted-foreground">{service.pricing}</p>
                </div>
              </div>

              <CustomButton 
                variant="primary"
                href="/contact"
                icon={ArrowRight}
                iconPosition="right"
              >
                {service.cta}
              </CustomButton>
            </div>
            
            <div className={`relative animate-scaleIn ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="bg-card border border-border rounded-2xl p-8 shadow-large">
                <div className="aspect-square bg-surface rounded-lg flex items-center justify-center">
                  <service.icon size={64} className="text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Process Section */}
      <Section variant="dark" spacing="normal">
        <div className="text-center mb-16">
          <h2 className="text-display mb-6 animate-slideUp">
            Our Process
          </h2>
          <p className="text-subhead text-muted-foreground max-w-3xl mx-auto animate-slideUp">
            A proven three-step approach that ensures your success from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.title} className="text-center animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="card-feature">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon size={28} />
                </div>
                <h3 className="text-headline mb-4">{step.title}</h3>
                <p className="text-body text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="normal" className="text-center">
        <div className="content-width animate-scaleIn">
          <h2 className="text-display mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-subhead text-muted-foreground mb-8">
            Choose the service that best fits your needs, or let's discuss a custom solution during a discovery call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton 
              variant="primary" 
              size="lg"
              href="/contact"
            >
              Book Discovery Call
            </CustomButton>
            <CustomButton 
              variant="secondary" 
              size="lg"
              href="/courses"
            >
              Browse Courses
            </CustomButton>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Services;