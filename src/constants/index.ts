import { Variants } from "framer-motion";

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: 5,
    scale: 0.96,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 15,
      stiffness: 120,
      delay: 0.1 * index,
    },
  }),
  hover: {
    y: -15,
    scale: 1.02,
    rotateX: -3,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 10,
      stiffness: 300,
    },
  },
};

export const imageVariants: Variants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: [0.2, 0.8, 0.4, 1],
    },
  },
};

export const textVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + 0.1 * index,
      duration: 0.6,
      ease: [0.2, 0.8, 0.2, 1],
    },
  }),
};
