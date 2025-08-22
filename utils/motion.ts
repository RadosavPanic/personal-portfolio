import { motion as motionReact } from "motion/react";

export const motion = motionReact;

export const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.7,
    },
  },
};

export const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.7,
    },
  },
};

export const slideInFromTop = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.7,
    },
  },
};

export const slideInFromBottom = (delay: number) => {
  return {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.7,
      },
    },
  };
};

export function fadeIn(delay: number) {
  return {
    hidden: { opacity: 0, filter: "blur(2px)" },

    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        function: "ease-in",
        delay: delay,
        duration: 0.5,
      },
    },
  };
}
