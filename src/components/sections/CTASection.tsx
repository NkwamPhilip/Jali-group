import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import CustomButton from "@/components/ui/CustomButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CTASection = () => {
  return (
    <Section spacing="normal" className="text-center">
      <ScrollReveal variant="scale">
        <div className="content-width">
          <h2 className="text-display mb-6">Ready to Work With Us?</h2>
          <p className="text-subhead text-muted-foreground mb-8">
            Let's discuss how we can help you unlock your potential and achieve transformational
            growth.
          </p>
          <CustomButton variant="primary" size="lg" href="/contact" icon={ArrowRight} iconPosition="right">
            Book a Discovery Call
          </CustomButton>
        </div>
      </ScrollReveal>
    </Section>
  );
};

export default CTASection;

