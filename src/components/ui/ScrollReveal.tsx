import { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "fade" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scale" | "blur";
  delay?: number;
  duration?: number;
  stagger?: number;
  staggerChildren?: boolean;
  useGSAP?: boolean;
}

const variants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  slideDown: {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
};

const ScrollReveal = ({
  children,
  className,
  variant = "fade",
  delay = 0,
  duration,
  stagger,
  staggerChildren = false,
  useGSAP = false,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!useGSAP || !ref.current) return;

    const element = ref.current;
    const fromVars: gsap.TweenVars = {
      opacity: 0,
      y: variant === "slideUp" ? 60 : variant === "slideDown" ? -60 : 0,
      x: variant === "slideLeft" ? 60 : variant === "slideRight" ? -60 : 0,
      scale: variant === "scale" ? 0.9 : 1,
    };

    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration: duration || 0.8,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    };

    const animation = gsap.fromTo(element, fromVars, toVars);

    return () => {
      animation.kill();
    };
  }, [useGSAP, variant, delay, duration]);

  if (useGSAP) {
    return (
      <div ref={ref} className={cn(className)}>
        {children}
      </div>
    );
  }

  const selectedVariant = variants[variant];
  const finalVariants = staggerChildren
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: stagger || 0.1,
            delayChildren: delay,
          },
        },
      }
    : {
        ...selectedVariant,
        visible: {
          ...selectedVariant.visible,
          transition: {
            ...selectedVariant.visible.transition,
            delay,
            duration: duration || selectedVariant.visible.transition.duration,
          },
        },
      };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={finalVariants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

