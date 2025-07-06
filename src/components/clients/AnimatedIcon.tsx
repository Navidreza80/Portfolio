"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface AnimatedIconsInterface {
  width: number;
  height: number;
  src: string | StaticImageData;
  alt: string;
  name: string;
  className: string;
}

const AnimatedIcon = ({
  width,
  height,
  src,
  alt,
  name,
  className,
}: AnimatedIconsInterface) => {
  const containerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 5,
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-2 cursor-pointer"
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={containerVariants}
    >
      <motion.div
        className="relative"
        variants={iconVariants}
        whileHover="hover"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </motion.div>
      <motion.span
        className="text-sm font-medium text-foreground"
        variants={textVariants}
        initial="hidden"
        whileHover="hover"
      >
        {name}
      </motion.span>
    </motion.div>
  );
};

export default AnimatedIcon;