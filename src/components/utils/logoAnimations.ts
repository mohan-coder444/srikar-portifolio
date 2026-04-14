import { Variants } from "framer-motion";

export const outerRingVariants: Variants = {
  animate: {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 10,
    },
  },
};

export const glowPulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.7, 0.3],
    transition: {
      repeat: Infinity,
      ease: "easeInOut",
      duration: 3,
    },
  },
};

export const hoverVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.05,
    y: -3,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};
