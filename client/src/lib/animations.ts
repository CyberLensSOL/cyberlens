import type { Variants } from "framer-motion";

// Glow effect animation for text and borders
export const glowPulse: Variants = {
  initial: {
    filter: "drop-shadow(0 0 0px rgba(147, 51, 234, 0))",
  },
  animate: {
    filter: [
      "drop-shadow(0 0 2px rgba(147, 51, 234, 0.5))",
      "drop-shadow(0 0 8px rgba(147, 51, 234, 0.3))",
      "drop-shadow(0 0 2px rgba(147, 51, 234, 0.5))",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Cyberpunk-style text glitch effect
export const textGlitch: Variants = {
  initial: {
    textShadow: "0 0 0 transparent",
  },
  animate: {
    textShadow: [
      "2px 0 1px rgba(255,0,255,0.5), -2px 0 1px rgba(0,255,255,0.5), 0 0 3px rgba(255,255,255,0.5)",
      "-2px 0 1px rgba(255,0,255,0.5), 2px 0 1px rgba(0,255,255,0.5), 0 0 3px rgba(255,255,255,0.5)",
      "2px 0 1px rgba(255,0,255,0.5), -2px 0 1px rgba(0,255,255,0.5), 0 0 3px rgba(255,255,255,0.5)",
    ],
    x: ["0px", "2px", "-2px", "0px"],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

// Scanning line animation
export const scanLine: Variants = {
  initial: {
    scaleX: 0,
    opacity: 0,
  },
  animate: {
    scaleX: 1,
    opacity: [0, 1, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Data stream effect
export const dataStream: Variants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 100,
    opacity: [0, 1, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Circuit pattern animation
export const circuitPattern: Variants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

// Loading spinner with cyberpunk style
export const loadingSpinner: Variants = {
  initial: {
    rotate: 0,
    scale: 0.8,
  },
  animate: {
    rotate: 360,
    scale: [0.8, 1, 0.8],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Result card reveal animation
export const resultReveal: Variants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Button hover effect
export const buttonHover: Variants = {
  initial: {
    boxShadow: "0 0 0 rgba(147, 51, 234, 0)",
  },
  hover: {
    boxShadow: [
      "0 0 10px rgba(147, 51, 234, 0.5)",
      "0 0 20px rgba(147, 51, 234, 0.3)",
      "0 0 10px rgba(147, 51, 234, 0.5)",
    ],
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

// Error shake animation
export const errorShake: Variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: [-10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};

// Progress bar fill animation
export const progressFill: Variants = {
  initial: {
    width: "0%",
  },
  animate: (value: number) => ({
    width: `${value}%`,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};
