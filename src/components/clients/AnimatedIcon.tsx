import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

const iconVariants = {
  hover: {
    scale: 1.15,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

interface AnimatedIconProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  name?: string;
  className?: string;
}

export const AnimatedIcon = ({
  src,
  alt,
  width = 36,
  height = 36,
  name,
  className,
}: AnimatedIconProps) => {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer group">
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
          className={`transition-transform duration-300 rounded-md group-hover:shadow-lg group-hover:shadow-primary/30 ${className}`}
        />
      </motion.div>
      {name && (
        <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
      )}
    </div>
  );
};
