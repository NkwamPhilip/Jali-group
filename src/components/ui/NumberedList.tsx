import { ReactNode, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface NumberedListItem {
  number: number;
  title: string;
  description?: string;
}

interface NumberedListProps {
  items: NumberedListItem[];
  className?: string;
  onItemHover?: (index: number) => void;
}

const NumberedList = ({ items, className, onItemHover }: NumberedListProps) => {
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <motion.ul
      ref={listRef}
      className={cn("space-y-8", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {items.map((item, index) => (
        <NumberedListItem
          key={index}
          item={item}
          index={index}
          onHover={() => onItemHover?.(index)}
        />
      ))}
    </motion.ul>
  );
};

interface NumberedListItemProps {
  item: NumberedListItem;
  index: number;
  onHover: () => void;
}

const NumberedListItem = ({ item, index, onHover }: NumberedListItemProps) => {
  const itemRef = useRef<HTMLLIElement>(null);
  const underlineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!underlineRef.current) return;

    const path = underlineRef.current;
    const pathLength = path.getTotalLength();

    // Set initial state
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;
  }, []);

  const handleMouseEnter = () => {
    if (!underlineRef.current) return;

    const path = underlineRef.current;
    const pathLength = path.getTotalLength();

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(itemRef.current, {
      scale: 1.02,
      x: 10,
      duration: 0.3,
      ease: "power2.out",
    });

    onHover();
  };

  const handleMouseLeave = () => {
    if (!underlineRef.current) return;

    const path = underlineRef.current;
    const pathLength = path.getTotalLength();

    gsap.to(path, {
      strokeDashoffset: pathLength,
      duration: 0.4,
      ease: "power2.in",
    });

    gsap.to(itemRef.current, {
      scale: 1,
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <motion.li
      ref={itemRef}
      className="group cursor-pointer"
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-start gap-6">
        <motion.div
          className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {item.number}
        </motion.div>
        <div className="flex-1 pt-2">
          <h3 className="text-headline mb-2 group-hover:text-foreground transition-colors relative inline-block">
            {item.title}
            <svg
              className="absolute bottom-0 left-0 w-full h-1 overflow-hidden"
              viewBox="0 0 200 4"
              preserveAspectRatio="none"
            >
              <motion.path
                ref={underlineRef}
                d="M 0,2 Q 50,0 100,2 T 200,2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-foreground"
              />
            </svg>
          </h3>
          {item.description && (
            <p className="text-body text-muted-foreground mt-2">{item.description}</p>
          )}
        </div>
      </div>
    </motion.li>
  );
};

export default NumberedList;

