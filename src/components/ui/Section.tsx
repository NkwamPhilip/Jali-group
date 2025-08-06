import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark" | "hero";
  spacing?: "normal" | "large" | "small";
  containerWidth?: "normal" | "content" | "full";
  id?: string;
}

const Section = ({ 
  children, 
  className,
  variant = "light",
  spacing = "normal",
  containerWidth = "normal",
  id
}: SectionProps) => {
  const sectionClasses = cn(
    "section-padding",
    {
      "section-spacing": spacing === "normal",
      "py-24 md:py-32 lg:py-40": spacing === "large",
      "py-8 md:py-12 lg:py-16": spacing === "small",
      "section-light": variant === "light",
      "section-dark": variant === "dark",
      "section-hero": variant === "hero",
    },
    className
  );

  const containerClasses = cn({
    "container-width": containerWidth === "normal",
    "content-width": containerWidth === "content",
    "w-full": containerWidth === "full",
  });

  return (
    <section id={id} className={sectionClasses}>
      <div className={containerClasses}>
        {children}
      </div>
    </section>
  );
};

export default Section;