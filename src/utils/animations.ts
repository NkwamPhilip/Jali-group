import { RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface AnimationOptions {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}


export const createScrollAnimation = (
  element: RefObject<HTMLElement> | HTMLElement | string,
  options: AnimationOptions & {
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    trigger?: string | RefObject<HTMLElement> | HTMLElement;
    start?: string;
    end?: string;
    scrub?: boolean | number;
  } = {}
) => {
  const {
    duration = 0.6,
    delay = 0,
    ease = "power2.out",
    stagger = 0,
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0 },
    trigger,
    start = "top 80%",
    end = "top 20%",
    scrub = false,
  } = options;

  const vars: gsap.TweenVars = {
    ...to,
    duration,
    delay,
    ease,
    stagger,
    scrollTrigger: {
      trigger: trigger || element,
      start,
      end,
      scrub,
      toggleActions: scrub ? "none" : "play none none reverse",
    },
  };

  return gsap.fromTo(element, from, vars);
};

/**
 * Creates a parallax effect on scroll
 */
export const createParallax = (
  element: RefObject<HTMLElement> | HTMLElement | string,
  intensity: number = 0.5,
  options: {
    trigger?: string | RefObject<HTMLElement> | HTMLElement;
    start?: string;
    end?: string;
  } = {}
) => {
  const { trigger, start = "top bottom", end = "bottom top" } = options;

  return gsap.to(element, {
    y: intensity * 100,
    ease: "none",
    scrollTrigger: {
      trigger: trigger || element,
      start,
      end,
      scrub: true,
    },
  });
};

/**
 * Creates a fade-in animation with scale
 */
export const fadeInScale = (
  element: RefObject<HTMLElement> | HTMLElement | string,
  options: AnimationOptions = {}
) => {
  return createScrollAnimation(element, {
    from: { opacity: 0, scale: 0.9, y: 30 },
    to: { opacity: 1, scale: 1, y: 0 },
    ...options,
  });
};

/**
 * Creates a slide-up animation
 */
export const slideUp = (
  element: RefObject<HTMLElement> | HTMLElement | string,
  options: AnimationOptions = {}
) => {
  return createScrollAnimation(element, {
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 },
    ...options,
  });
};

/**
 * Creates a stagger animation for multiple elements
 */
export const staggerAnimation = (
  elements: string | RefObject<HTMLElement>[] | HTMLElement[],
  options: AnimationOptions & {
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
  } = {}
) => {
  const {
    duration = 0.6,
    delay = 0,
    ease = "power2.out",
    stagger = 0.1,
    from = { opacity: 0, y: 30 },
    to = { opacity: 1, y: 0 },
  } = options;

  return gsap.fromTo(
    elements,
    from,
    {
      ...to,
      duration,
      delay,
      ease,
      stagger,
    }
  );
};

/**
 * Creates a timeline for complex sequential animations
 */
export const createTimeline = (options: { paused?: boolean } = {}) => {
  return gsap.timeline({ paused: options.paused });
};

/**
 * Smooth scroll to element
 */
export const scrollToElement = (
  elementId: string,
  options: { offset?: number; duration?: number } = {}
) => {
  const { offset = 0, duration = 1 } = options;
  const element = document.getElementById(elementId);
  
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
};

/**
 * Animate number counter
 */
export const animateCounter = (
  element: RefObject<HTMLElement> | HTMLElement | string,
  targetValue: number,
  options: { duration?: number; suffix?: string; prefix?: string } = {}
) => {
  const { duration = 2, suffix = "", prefix = "" } = options;
  
  return gsap.to(element, {
    duration,
    innerText: targetValue,
    snap: { innerText: 1 },
    onUpdate: function() {
      const value = Math.round(Number(this.targets()[0].innerText));
      if (this.targets()[0]) {
        (this.targets()[0] as HTMLElement).innerText = `${prefix}${value}${suffix}`;
      }
    },
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
    },
  });
};

