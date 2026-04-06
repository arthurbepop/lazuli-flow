import { type HTMLAttributes, type PropsWithChildren, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type LuxeCardProps = PropsWithChildren<{
  className?: string;
  contentClassName?: string;
}> &
  Omit<
    HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
  >;

const LuxeCard = ({
  children,
  className,
  contentClassName,
  ...props
}: LuxeCardProps) => {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });

  const glowOpacity = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.3, 0.5, 0.75, 1],
      reduced ? [0.08, 0.1, 0.12, 0.09, 0.06] : [0.04, 0.16, 0.3, 0.14, 0.05],
    ),
    { stiffness: 120, damping: 24, mass: 0.7 },
  );
  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.45, 1], reduced ? [0, 0, 0] : [12, 0, -8]),
    { stiffness: 110, damping: 22, mass: 0.75 },
  );
  const borderOpacity = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.45, 1],
      reduced ? [0.08, 0.1, 0.08] : [0.08, 0.18, 0.08],
    ),
    { stiffness: 140, damping: 26, mass: 0.7 },
  );
  const borderColor = useTransform(
    borderOpacity,
    (value) => `hsl(46 72% 58% / ${value})`,
  );

  return (
    <motion.div
      ref={ref}
      style={{ y, borderColor }}
      className={cn("auric-card", className)}
      {...props}
    >
      <motion.div
        aria-hidden
        style={{ opacity: glowOpacity }}
        className="auric-card-glow"
      />
      <div className={cn("relative z-10 h-full", contentClassName)}>{children}</div>
    </motion.div>
  );
};

export default LuxeCard;
