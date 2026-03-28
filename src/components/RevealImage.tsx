import { type ImgHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { smoothEase } from "@/lib/motion";

type RevealImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
};

/**
 * Blur → sharp on scroll (Zen reveal). Respects reduced motion.
 */
const RevealImage = ({
  className,
  wrapperClassName,
  alt,
  ...imgProps
}: RevealImageProps) => {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return (
      <div className={cn("overflow-hidden rounded-2xl", wrapperClassName)}>
        <img
          alt={alt ?? ""}
          className={cn("h-full w-full object-cover", className)}
          {...imgProps}
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ filter: "blur(18px)", opacity: 0.9 }}
      whileInView={{ filter: "blur(0px)", opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px -8% 0px", amount: 0.2 }}
      transition={{ duration: 1.05, ease: smoothEase }}
      className={cn("overflow-hidden rounded-2xl", wrapperClassName)}
    >
      <img
        alt={alt ?? ""}
        className={cn("h-full w-full object-cover", className)}
        {...imgProps}
      />
    </motion.div>
  );
};

export default RevealImage;
