import { type ImgHTMLAttributes, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type RevealImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
> & {
  wrapperClassName?: string;
};

const RevealImage = ({
  className,
  wrapperClassName,
  alt,
  ...imgProps
}: RevealImageProps) => {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "center 62%", "end 20%"],
  });

  const wrapperClasses = cn("image-shell overflow-hidden", wrapperClassName);
  const imageClasses = cn("h-full w-full object-cover image-shell-media", className);

  const imageBlur = useTransform(scrollYProgress, [0, 0.45, 1], [22, 6, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.72, 0.94, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.025, 1]);
  const tintOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.52, 0.34, 0.16]);

  if (reduced) {
    return (
      <div className={wrapperClasses}>
        <div className="image-shell-tint" aria-hidden />
        <img alt={alt ?? ""} className={imageClasses} {...imgProps} />
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.82 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px -8% 0px", amount: 0.2 }}
      transition={{ duration: 1.05 }}
      className={wrapperClasses}
    >
      <motion.div
        aria-hidden
        style={{ opacity: tintOpacity }}
        className="image-shell-tint"
      />
      <motion.img
        alt={alt ?? ""}
        style={{ filter: imageBlur, opacity: imageOpacity, scale: imageScale }}
        className={imageClasses}
        {...imgProps}
      />
    </motion.div>
  );
};

export default RevealImage;
