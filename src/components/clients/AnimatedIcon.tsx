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
  className,
}: AnimatedIconsInterface) => {
  const iconVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer">
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
    </div>
  );
};

export default AnimatedIcon;
