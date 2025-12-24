import { useRef, useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface HorizontalCarouselProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
  fadeEdges?: boolean;
}

const HorizontalCarousel = ({
  children,
  className,
  speed = 1,
  pauseOnHover = true,
  fadeEdges = true,
}: HorizontalCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        delay: Math.max(1000 / speed, 500), // Convert speed to delay (faster speed = shorter delay)
        stopOnInteraction: pauseOnHover,
        stopOnMouseEnter: pauseOnHover,
      }),
    [speed, pauseOnHover]
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      duration: 20,
    },
    [autoplayPlugin]
  );

  const [isHovered, setIsHovered] = useState(false);

  // Convert children to array and duplicate for infinite scroll
  const childrenArray = Array.isArray(children) ? children : [children];
  const duplicatedChildren = [...childrenArray, ...childrenArray, ...childrenArray];

  useEffect(() => {
    if (!emblaApi || !isInView) return;

    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;

    if (isHovered && pauseOnHover) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
  }, [emblaApi, isHovered, pauseOnHover, isInView]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {fadeEdges && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </>
      )}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-8">
          {duplicatedChildren.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-w-0 flex-[0_0_auto]"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: (index % childrenArray.length) * 0.05 }}
              >
                {child}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCarousel;
