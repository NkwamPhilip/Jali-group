import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import CustomButton from "@/components/ui/CustomButton";
import VideoBackground from "@/components/ui/VideoBackground";
import TypewriterText from "@/components/ui/TypewriterText";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 80, scale: 0.9, rotationX: -15 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 1.4,
        ease: "power4.out",
      }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.0,
          ease: "power2.out",
        },
        "-=0.8"
      )
      .fromTo(
        buttonsRef.current?.children,
        {
          opacity: 0,
          y: 30,
          scale: 0.8,
          rotationY: -20,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
        },
        "-=0.6"
      )
      .fromTo(
        scrollButtonRef.current,
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.4"
      );

    // const parallax = gsap.to(heroRef.current, {
    //   y: 30,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: heroRef.current,
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: true,
    //   },
    // });

    return () => {
      tl.kill();
      // parallax.kill();
    };
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Section variant="hero" spacing="large" className="min-h-screen flex items-center relative overflow-hidden">

      <motion.div
        ref={heroRef}
        className="text-center relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-small uppercase tracking-widest text-muted-foreground mb-4 block">
            Jali Group
          </span>
        </motion.div>

        <h1 ref={titleRef} className="text-hero mb-6">
          Ideas Find Their
          <br />
          <span className="italic">
            <TypewriterText />
          </span>
        </h1>

        <p ref={subtitleRef} className="text-subhead text-muted-foreground mb-12 max-w-2xl mx-auto">
          Inspiring growth through ideas, talks, and transformation. We help individuals and
          businesses unlock their potential.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <CustomButton variant="primary" size="lg" onClick={scrollToServices} icon={ArrowDown} iconPosition="right">
            Explore Our Work
          </CustomButton>

          <CustomButton variant="secondary" size="lg" href="/contact">
            Book Discovery Call
          </CustomButton>
        </div>

        <motion.div
          ref={scrollButtonRef}
          className="flex justify-center"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <button
            onClick={scrollToServices}
            className="p-3 rounded-full border border-border hover:bg-accent transition-all duration-300"
            aria-label="Scroll to services"
          >
            <ArrowDown size={20} className="text-muted-foreground" />
          </button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default HeroSection;

