import { motion, useScroll, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const ScrollProgress = () => {
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, {
    stiffness: reduced ? 400 : 95,
    damping: reduced ? 60 : 30,
    restDelta: 0.001,
  });
  const scaleX = reduced ? scrollYProgress : spring;

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[2px] overflow-hidden bg-black/25"
      aria-hidden
    >
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-[hsl(46,55%,42%)] via-gold to-[hsl(46,60%,58%)]"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgress;
