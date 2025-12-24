import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import FeatureCard from "@/components/ui/FeatureCard";
import CustomButton from "@/components/ui/CustomButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/constant/content";

const ServicesSection = () => {
  return (
    <Section id="services" spacing="normal">
      <ScrollReveal variant="fade" staggerChildren>
        <div className="text-center mb-16">
          <h2 className="text-display mb-6">Transform Your Potential</h2>
          <p className="text-subhead text-muted-foreground max-w-3xl mx-auto">
            From public speaking to business strategy, we provide comprehensive solutions for
            personal and professional growth.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <ScrollReveal key={service.title} variant="slideUp" delay={index * 0.1}>
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
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;

