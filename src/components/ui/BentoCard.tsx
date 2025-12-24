import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import CustomButton from "./CustomButton";

interface BentoCardProps {
  title: string;
  description: string;
  image?: string;
  aspectRatio?: "landscape" | "portrait";
  category?: string;
  index?: number;
  className?: string;
  children?: ReactNode;
}

const BentoCard = ({
  title,
  description,
  image,
  aspectRatio = "landscape",
  category,
  index = 0,
  className,
  children,
}: BentoCardProps) => {
  const aspectClass = aspectRatio === "portrait" ? "aspect-[9/16]" : "aspect-video";

  return (
    <motion.div
      className={cn("card-feature group cursor-pointer overflow-hidden", className)}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
        rotateY: 2,
        transition: {
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }}
    >
      <div className={cn("relative overflow-hidden rounded-lg mb-4", aspectClass)}>
        {image ? (
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15, filter: "brightness(1.1)" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        ) : (
          <div className="w-full h-full bg-surface flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
            <Play size={32} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        )}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full text-foreground">
              {category}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h3 className="text-headline mb-2 group-hover:text-foreground transition-colors">{title}</h3>
      <p className="text-body text-muted-foreground mb-4 line-clamp-2">{description}</p>

      {children || (
        <CustomButton variant="ghost" size="sm" className="mt-auto">
          Watch Now
        </CustomButton>
      )}
    </motion.div>
  );
};

export default BentoCard;

