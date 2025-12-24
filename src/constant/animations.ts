export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
  verySlow: 1.5,
} as const;

export const ANIMATION_EASING = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
} as const;

export const SCROLL_ANIMATION_CONFIG = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
  triggerOnce: false,
} as const;

export const STAGGER_DELAY = 0.1; // seconds between staggered items

export const PARALLAX_INTENSITY = {
  subtle: 0.3,
  normal: 0.5,
  strong: 0.7,
} as const;

