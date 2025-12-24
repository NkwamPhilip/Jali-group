import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import CustomButton from "@/components/ui/CustomButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { STATS } from "@/constant/content";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <Section variant="dark" spacing="normal">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal variant="slideRight">
          <h2 className="text-display mb-6">We Help Ideas Find Their Voice</h2>
          <p className="text-body text-muted-foreground mb-8 leading-relaxed">
            At Jali Africa, we specialize in delivering powerful talks, building business strategy,
            and curating transformative learning experiences. Our story-centric approach to growth
            has helped countless individuals and organizations unlock their potential.
          </p>
          <p className="text-body text-muted-foreground mb-8 leading-relaxed">
            Founded on the belief that the growth you seek can be found in the connections you often
            overlook, we are committed to showing you exactly how to attract and retain the right
            people you need to grow.
          </p>
          <CustomButton variant="primary" href="/about" icon={ArrowRight} iconPosition="right">
            Learn Our Story
          </CustomButton>
        </ScrollReveal>

        <ScrollReveal variant="scale" delay={0.2}>
          <motion.div
            className="bg-card border border-border rounded-2xl p-8 shadow-large"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-6 text-center">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    index % 2 === 0 ? "border-r border-border pr-6" : "pl-6",
                    index >= 2 && "border-t border-border pt-6"
                  )}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="text-3xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
      </motion.div>
    </ScrollReveal>
  </div>
</Section>
  );
};

export default AboutSection;

