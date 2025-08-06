import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  children?: ReactNode;
}

const FeatureCard = ({ icon: Icon, title, description, href, children }: FeatureCardProps) => {
  const CardContent = () => (
    <div className="card-feature group cursor-pointer">
      <div className="mb-6">
        <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} />
        </div>
        <h3 className="text-headline mb-3">{title}</h3>
        <p className="text-body text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default FeatureCard;