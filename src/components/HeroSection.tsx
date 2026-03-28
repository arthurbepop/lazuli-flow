import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/pilates1.jpg";
import { STUDIO_INFO, WHATSAPP_URL } from "@/lib/constants";
import { fadeUp, smoothEase, softSpring } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const HeroSection = () => {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const { scrollY } = useScroll();

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduced ? "0%" : "18%"],
  );
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.04]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.42], [1, 0.25]);
  const hintOpacity = useTransform(scrollY, [0, 160], [1, 0]);

  const overlayOpacity = useTransform(scrollY, [0, 120, 320], [0.95, 0.85, 0.72]);
  const overlayBlur = useTransform(scrollY, [0, 120, 320], [20, 16, 10]);
  const overlayFilter = useTransform(overlayBlur, (value) => `blur(${value}px)`);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative z-20 flex min-h-screen items-center justify-center overflow-hidden pt-[5.5rem]"
    >
      <div className="absolute inset-0">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative h-[120%] w-full min-h-full will-change-transform"
        >
          <motion.img
            src={heroImage}
            alt="Estúdio de pilates moderno com equipamentos premium"
            className={`h-full w-full object-cover ${!reduced ? "hero-ken-burns" : ""}`}
            loading="eager"
            initial={reduced ? undefined : { filter: "blur(20px)", scale: 1.03 }}
            animate={reduced ? undefined : { filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.35, ease: smoothEase }}
          />
        </motion.div>
        <motion.div
          style={{ opacity: overlayOpacity, filter: overlayFilter }}
          className="absolute inset-0 bg-gradient-to-b from-cobalt-deep/70 via-cobalt-deep/50 to-[hsl(226,52%,11%)]/90"
        />
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-30" />
      </div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-4xl px-6"
      >
        <div className="glass-zen rounded-[2rem] px-8 py-12 text-center md:px-14 md:py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.14, delayChildren: 0.08 },
              },
            }}
          >
            <motion.h1
              variants={fadeUp}
              transition={softSpring}
              className="font-display mx-auto max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-primary-foreground md:text-6xl lg:text-7xl"
            >
              Movimento que transforma.{" "}
              <span className="text-gradient-gold">Equilíbrio que inspira.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={softSpring}
              className="mx-auto mt-8 max-w-xl font-sans text-lg font-light leading-relaxed text-primary-foreground/85 md:text-xl"
            >
              Descubra o poder do Pilates no ambiente mais acolhedor e premium de{" "}
              {STUDIO_INFO.city}.
            </motion.p>

            <motion.div variants={fadeUp} transition={softSpring} className="mt-12">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={softSpring}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-accent-foreground shadow-lg transition-shadow hover:bg-gold-light hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                Agende sua aula experimental
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: hintOpacity }}
        className="pointer-events-none absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        aria-hidden
      >
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.45em] text-primary-foreground/50">
          Scroll
        </span>
        <ChevronDown
          className={`h-5 w-5 text-gold/80 ${reduced ? "" : "motion-safe:animate-bounce"}`}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
