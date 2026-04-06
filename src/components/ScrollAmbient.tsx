import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * Scroll-linked ambient background — soft gradients that breathe with the page.
 */
const ScrollAmbient = () => {
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();

  const y1 = reduced
    ? useTransform(scrollYProgress, [0, 1], ["0%", "0%"])
    : useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const y2 = reduced
    ? useTransform(scrollYProgress, [0, 1], ["0%", "0%"])
    : useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const y3 = reduced
    ? useTransform(scrollYProgress, [0, 1], ["5%", "5%"])
    : useTransform(scrollYProgress, [0, 1], ["5%", "-35%"]);
  const goldOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.06, 0.14, 0.08]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[0] overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[hsl(226,52%,11%)]" />

      <motion.div
        style={{ y: y1, opacity: goldOpacity }}
        className="absolute -left-[20%] top-[-10%] h-[min(90vh,820px)] w-[min(90vh,820px)] rounded-full bg-[radial-gradient(closest-side,hsl(226,55%,26%)/0.55,transparent_100%)] blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-[15%] top-[25%] h-[min(70vh,640px)] w-[min(70vh,640px)] rounded-full bg-[radial-gradient(closest-side,hsl(46,45%,48%)/0.09,transparent_100%)] blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[-20%] left-[30%] h-[min(60vh,520px)] w-[min(60vh,520px)] rounded-full bg-[radial-gradient(closest-side,hsl(226,60%,24%)/0.4,transparent_100%)] blur-3xl"
      />

      <div className="grain-overlay absolute inset-0 opacity-[0.22]" />
    </div>
  );
};

export default ScrollAmbient;
