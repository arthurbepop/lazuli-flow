import type { Transition, Variants } from "framer-motion";

/** Editorial-style ease — smooth deceleration */
export const smoothEase = [0.22, 1, 0.36, 1] as const;

export const softSpring: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 26,
  mass: 0.8,
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 22,
  mass: 0.9,
};

export const fadeTransition: Transition = {
  duration: 0.55,
  ease: smoothEase,
};

export const viewportReveal = {
  once: true as const,
  margin: "-12% 0px -12% 0px" as const,
  amount: 0.25 as const,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: fadeTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: fadeTransition,
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: fadeTransition,
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: fadeTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: fadeTransition,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...fadeTransition, duration: 0.5 },
  },
};
