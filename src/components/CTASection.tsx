import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { fadeUp, smoothEase, viewportReveal } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useRef } from "react";

const CTASection = () => {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const blobTop = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [28, -24]
  );
  const blobBottom = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [-24, 28]
  );

  return (
    <section
      ref={ref}
      id="cta"
      className="relative z-10 py-28 md:py-36"
    >
      <motion.div
        style={{ y: blobTop }}
        className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,hsl(46,50%,45%)/0.12,transparent_70%)] blur-3xl"
      />
      <motion.div
        style={{ y: blobBottom }}
        className="pointer-events-none absolute -left-36 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,hsl(226,55%,35%)/0.35,transparent_70%)] blur-3xl"
      />

      <div className="container relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.04 },
            },
          }}
          className="glass-zen rounded-[2rem] px-8 py-14 text-center md:px-16 md:py-16"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.65, ease: smoothEase }}
            className="font-display text-4xl font-medium text-foreground md:text-5xl lg:text-6xl"
          >
            Pronto para começar?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: smoothEase }}
            className="mx-auto mt-8 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground"
          >
            Agende uma avaliação gratuita e conheça nossa metodologia. Sem
            compromisso, sem surpresas.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: smoothEase }}
            className="mt-12 flex justify-center"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-10 py-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground shadow-lg transition-shadow hover:bg-gold-light hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar avaliação gratuita
              <ArrowRight className="h-5 w-5 opacity-80" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
