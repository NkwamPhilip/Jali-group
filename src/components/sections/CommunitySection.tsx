import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import HorizontalCarousel from "@/components/ui/HorizontalCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COMMUNITY_MEMBERS } from "@/constant/content";
import { cn } from "@/lib/utils";

const CommunitySection = () => {
  return (
    <Section spacing="normal">
      <ScrollReveal variant="fade" staggerChildren>
        <div className="text-center mb-16">
          <h2 className="text-display mb-6">Our Community</h2>
          <p className="text-subhead text-muted-foreground max-w-2xl mx-auto">
            Join a network of leaders, innovators, and changemakers transforming their industries.
          </p>
        </div>
      </ScrollReveal>

      <HorizontalCarousel speed={0.5} pauseOnHover={true} fadeEdges={true}>
        {COMMUNITY_MEMBERS.map((member) => (
          <CommunityMemberCard key={member.id} member={member} />
        ))}
      </HorizontalCarousel>
    </Section>
  );
};

interface CommunityMemberCardProps {
  member: {
    id: string;
    name: string;
    role: string;
    avatar: string;
    company?: string;
  };
}

const CommunityMemberCard = ({ member }: CommunityMemberCardProps) => {
  return (
    <motion.div
      className={cn(
        "flex-shrink-0 w-64 p-6 bg-card border border-border rounded-xl",
        "hover:border-foreground/20 transition-all duration-300"
      )}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          className="w-20 h-20 rounded-full bg-surface mb-4 overflow-hidden"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
        {member.company && (
          <p className="text-xs text-muted-foreground">{member.company}</p>
        )}
      </div>
    </motion.div>
  );
};

export default CommunitySection;

