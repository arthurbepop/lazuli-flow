import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import heroImage from "@/assets/pilates1.webp";
import { STUDIO_INFO, WHATSAPP_URL } from "@/lib/constants";
import { fadeUp, smoothEase, softSpring } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const HeroSection = () => {
  const reduced = usePrefersReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const { scrollY } = useScroll();
  const shouldReduceMotion = reduced || isTouchDevice;

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const updateTouchState = () =>
      setIsTouchDevice(coarsePointerQuery.matches || navigator.maxTouchPoints > 0);

    updateTouchState();
    coarsePointerQuery.addEventListener?.("change", updateTouchState);
    window.addEventListener("resize", updateTouchState);
    window.addEventListener("orientationchange", updateTouchState);

    return () => {
      coarsePointerQuery.removeEventListener?.("change", updateTouchState);
      window.removeEventListener("resize", updateTouchState);
      window.removeEventListener("orientationchange", updateTouchState);
    };
  }, []);

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", shouldReduceMotion ? "0%" : "16%"],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, shouldReduceMotion ? 1 : 1.06],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.55, 1],
    [1, 1, 0.94, 0.62],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", shouldReduceMotion ? "0%" : "11%"],
  );
  const frameOpacity = useTransform(scrollYProgress, [0, 0.26, 0.72, 1], [1, 0.96, 0.82, 0.64]);
  const frameBorderOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.14, 0.09, 0.05]);
  const frameBorderColor = useTransform(
    frameBorderOpacity,
    (value) => `hsl(0 0% 100% / ${value})`,
  );
  const hintOpacity = useTransform(scrollY, [0, 160], [1, 0]);

  const overlayOpacity = useTransform(
    scrollY,
    [0, 120, 320, 640],
    [0.92, 0.84, 0.78, 0.7],
  );
  const overlayBlur = useTransform(
    scrollY,
    [0, 120, 320, 640],
    shouldReduceMotion ? [0, 0, 0, 0] : [18, 16, 13, 9],
  );
  const overlayFilter = useTransform(overlayBlur, (value) =>
    value <= 0 ? "none" : `blur(${value}px)`,
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative z-20 flex min-h-[100svh] items-end overflow-hidden pt-[calc(6.5rem+env(safe-area-inset-top))] md:min-h-screen md:pt-32"
    >
      <div className="absolute inset-0">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative h-[118%] w-full min-h-full will-change-transform"
        >
          <motion.img
            src={heroImage}
            alt="Estúdio de pilates moderno com equipamentos premium"
            className={`h-full w-full object-cover object-center ${!shouldReduceMotion ? "hero-ken-burns" : ""}`}
            loading="eager"
            initial={shouldReduceMotion ? undefined : { filter: "blur(20px)", scale: 1.03 }}
            animate={shouldReduceMotion ? undefined : { filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.35, ease: smoothEase }}
          />
        </motion.div>

        <motion.div
          style={{ opacity: overlayOpacity, filter: overlayFilter }}
          className="absolute inset-0 bg-[linear-gradient(180deg,hsl(226_58%_14%_/_0.32)_0%,hsl(226_58%_12%_/_0.62)_32%,hsl(226_58%_9%_/_0.88)_100%)]"
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,hsl(46_68%_62%_/_0.1),transparent_30%),radial-gradient(circle_at_78%_68%,hsl(226_78%_58%_/_0.18),transparent_34%)]" />
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-30" />
      </div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:px-6 sm:pb-20 md:pb-24"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.38fr)] lg:items-end">
          <motion.div
            style={{ opacity: frameOpacity, borderColor: frameBorderColor }}
            className="editorial-frame overflow-hidden rounded-[2rem] px-5 py-6 sm:px-7 sm:py-8 md:rounded-[2.4rem] md:px-12 md:py-12 lg:px-14 lg:py-14"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.08 },
                },
              }}
            >
              <motion.div
                variants={fadeUp}
                transition={softSpring}
                className="flex flex-wrap items-center gap-4 text-primary-foreground/62"
              >
                <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold/80">
                  Pilates Contemporâneo
                </span>
                <span className="hidden h-px w-16 bg-white/12 md:block" />
                <span className="font-sans text-[10px] uppercase tracking-[0.32em]">
                  Santa Cruz do Sul
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={softSpring}
                className="font-display mt-7 max-w-4xl text-[clamp(2.95rem,14vw,7.6rem)] leading-[0.92] tracking-[-0.05em] text-primary-foreground sm:mt-8 sm:text-[clamp(3.35rem,10vw,7.6rem)]"
              >
                Movimento que
                <br />
                transforma.
                <span className="mt-3 block text-gradient-gold">Equilíbrio que inspira.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={softSpring}
                className="mt-6 max-w-xl font-sans text-[15px] font-light leading-[1.82] text-primary-foreground/76 sm:mt-8 md:text-lg"
              >
                Um estúdio boutique onde técnica, presença e atmosfera se unem para
                criar uma experiência de Pilates mais sensível, sofisticada e humana em{" "}
                {STUDIO_INFO.city}.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={softSpring}
                className="mt-8 flex flex-col gap-4 sm:mt-10 sm:gap-5 md:flex-row md:items-center"
              >
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.985 }}
                  transition={softSpring}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-center font-sans text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground shadow-[0_18px_45px_hsl(46_72%_46%_/_0.28)] transition-all hover:bg-gold-light hover:shadow-[0_22px_55px_hsl(46_72%_48%_/_0.34)] sm:w-auto sm:px-8 sm:tracking-[0.24em]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Agende sua aula experimental
                </motion.a>

                <div className="text-center font-sans text-[11px] uppercase tracking-[0.24em] text-primary-foreground/48 sm:text-left sm:text-xs sm:tracking-[0.28em]">
                  Avaliação inicial gratuita
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.aside
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: smoothEase, delay: 0.38 }}
            className="hidden lg:flex lg:flex-col lg:items-end"
          >
            <div className="editorial-plate max-w-[18rem] rounded-[2rem] px-7 py-8">
              <p className="font-sans text-[10px] uppercase tracking-[0.34em] text-gold/80">
                Essência do estúdio
              </p>
              <p className="mt-4 font-display text-3xl leading-[1.02] text-primary-foreground">
                Calma visual.
                <span className="mt-2 block text-gold">Precisão corporal.</span>
              </p>
              <p className="mt-5 font-sans text-sm leading-relaxed text-primary-foreground/62">
                Arquitetura de luz, equipamentos premium e condução individual em
                cada sessão.
              </p>
            </div>
          </motion.aside>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: hintOpacity }}
        className="pointer-events-none absolute bottom-[calc(1.25rem+env(safe-area-inset-bottom))] left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
        aria-hidden
      >
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.48em] text-primary-foreground/42">
          Desça
        </span>
        <ChevronDown
          className={`h-5 w-5 text-gold/70 ${shouldReduceMotion ? "" : "motion-safe:animate-bounce"}`}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
