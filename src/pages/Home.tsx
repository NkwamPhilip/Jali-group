import { ArrowDown, Mic, TrendingUp, BookOpen, ArrowRight, Play } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import FeatureCard from "@/components/ui/FeatureCard";
import CustomButton from "@/components/ui/CustomButton";
import SEOHead from "@/components/ui/SEOHead";

const Home = () => {
  const services = [
    {
      icon: Mic,
      title: "Public Speaking",
      description: "Transformational talks that inspire action and create lasting impact. From keynotes to workshops, we deliver messages that resonate.",
      href: "/services#speaking"
    },
    {
      icon: TrendingUp,
      title: "Business Growth Consulting",
      description: "Strategic consulting to scale your business through proven systems, story-driven marketing, and sustainable growth frameworks.",
      href: "/services#consulting"
    },
    {
      icon: BookOpen,
      title: "Online Courses",
      description: "Comprehensive learning experiences that transform mindsets and build practical skills for personal and professional growth.",
      href: "/courses"
    }
  ];

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <SEOHead />
      
      {/* Hero Section */}
      <Section variant="hero" spacing="large" className="min-h-screen flex items-center">
        <div className="text-center animate-fadeIn">
          <div className="mb-6">
            <span className="text-small uppercase tracking-widest text-muted-foreground mb-4 block">
              Jali Africa
            </span>
          </div>
          
          <h1 className="text-hero mb-6 animate-slideUp">
            Ideas Find Their
            <br />
            <span className="italic">Voice</span>
          </h1>
          
          <p className="text-subhead text-muted-foreground mb-12 max-w-2xl mx-auto animate-slideUp">
            Inspiring growth through ideas, talks, and transformation. 
            We help individuals and businesses unlock their potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scaleIn">
            <CustomButton 
              variant="primary" 
              size="lg"
              onClick={scrollToServices}
              icon={ArrowDown}
              iconPosition="right"
            >
              Explore Our Work
            </CustomButton>
            
            <CustomButton 
              variant="secondary" 
              size="lg"
              href="/contact"
            >
              Book Discovery Call
            </CustomButton>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-float">
            <button 
              onClick={scrollToServices}
              className="p-3 rounded-full border border-border hover:bg-accent transition-all duration-300"
              aria-label="Scroll to services"
            >
              <ArrowDown size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section variant="dark" spacing="normal">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slideUp">
            <h2 className="text-display mb-6">
              We Help Ideas Find Their Voice
            </h2>
            <p className="text-body text-muted-foreground mb-8 leading-relaxed">
              At Jali Africa, we specialize in delivering powerful talks, building business strategy, 
              and curating transformative learning experiences. Our story-centric approach to growth 
              has helped countless individuals and organizations unlock their potential.
            </p>
            <p className="text-body text-muted-foreground mb-8 leading-relaxed">
              Founded on the belief that the growth you seek can be found in the connections you often overlook, 
              we are committed to showing you exactly how to attract and retain the right people you need to grow.
            </p>
            <CustomButton 
              variant="primary"
              href="/about"
              icon={ArrowRight}
              iconPosition="right"
            >
              Learn Our Story
            </CustomButton>
          </div>
          
          <div className="relative animate-scaleIn">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-large">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="border-r border-border pr-6">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Speaking Engagements</div>
                </div>
                <div className="pl-6">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Companies Served</div>
                </div>
                <div className="border-r border-border pr-6 pt-6 border-t border-border">
                  <div className="text-3xl font-bold mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Students Trained</div>
                </div>
                <div className="pl-6 pt-6 border-t border-border">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" spacing="normal">
        <div className="text-center mb-16">
          <h2 className="text-display mb-6 animate-slideUp">
            Transform Your Potential
          </h2>
          <p className="text-subhead text-muted-foreground max-w-3xl mx-auto animate-slideUp">
            From public speaking to business strategy, we provide comprehensive solutions 
            for personal and professional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <FeatureCard {...service}>
                <CustomButton 
                  variant="ghost" 
                  href={service.href}
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

      {/* Featured Content Section */}
      <Section variant="dark" spacing="normal">
        <div className="text-center mb-16">
          <h2 className="text-display mb-6 animate-slideUp">
            Recent Insights
          </h2>
          <p className="text-subhead text-muted-foreground max-w-2xl mx-auto animate-slideUp">
            Discover our latest thoughts on growth, storytelling, and transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for featured content */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="card-feature group animate-fadeIn">
              <div className="aspect-video bg-surface rounded-lg mb-4 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                <Play size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Featured Content {item}</h3>
              <p className="text-body text-muted-foreground mb-4">
                Insights on business growth, storytelling, and transformation strategies.
              </p>
              <CustomButton variant="ghost" size="sm">
                Watch Now
              </CustomButton>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="normal" className="text-center">
        <div className="content-width animate-scaleIn">
          <h2 className="text-display mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-subhead text-muted-foreground mb-8">
            Let's discuss how we can help you unlock your potential and achieve transformational growth.
          </p>
          <CustomButton 
            variant="primary" 
            size="lg"
            href="/contact"
            icon={ArrowRight}
            iconPosition="right"
          >
            Book a Discovery Call
          </CustomButton>
        </div>
      </Section>
    </Layout>
  );
};

export default Home;