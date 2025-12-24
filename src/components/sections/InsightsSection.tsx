import Section from "@/components/ui/Section";
import MasonryGrid from "@/components/ui/MasonryGrid";
import BentoCard from "@/components/ui/BentoCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { INSIGHTS } from "@/constant/content";

const InsightsSection = () => {
  return (
    <Section variant="dark" spacing="normal">
      <ScrollReveal variant="fade" staggerChildren>
        <div className="text-center mb-16">
          <h2 className="text-display mb-6">Recent Insights</h2>
          <p className="text-subhead text-muted-foreground max-w-2xl mx-auto">
            Discover our latest thoughts on growth, storytelling, and transformation.
          </p>
        </div>
      </ScrollReveal>

      <MasonryGrid columns={{ sm: 1, md: 2, lg: 3 }}>
        {INSIGHTS.map((insight, index) => (
          <BentoCard
            key={insight.id}
            title={insight.title}
            description={insight.description}
            image={insight.image}
            aspectRatio={insight.aspectRatio}
            category={insight.category}
            index={index}
          />
        ))}
      </MasonryGrid>
    </Section>
  );
};

export default InsightsSection;

