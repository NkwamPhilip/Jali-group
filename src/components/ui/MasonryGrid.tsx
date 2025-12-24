import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MasonryGridProps {
  children: ReactNode;
  className?: string;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
}

const MasonryGrid = ({
  children,
  className,
  columns = { sm: 1, md: 2, lg: 3 },
}: MasonryGridProps) => {
  const gridCols = {
    sm: `grid-cols-${columns.sm || 1}`,
    md: `md:grid-cols-${columns.md || 2}`,
    lg: `lg:grid-cols-${columns.lg || 3}`,
  };

  // Convert children to array for mapping
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      className={cn(
        "grid gap-8",
        gridCols.sm,
        gridCols.md,
        gridCols.lg,
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MasonryGrid;

