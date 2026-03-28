import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion";

const steps = [
  {
    number: "1",
    title: "Avaliação Gratuita",
    description:
      "Conversamos sobre seus objetivos, histórico e limitações. Zero compromisso.",
    highlight: "Free",
  },
  {
    number: "2",
    title: "Plano Customizado",
    description:
      "Criamos um programa exclusivo baseado em suas necessidades e metas específicas.",
    highlight: "Personalizado",
  },
  {
    number: "3",
    title: "Sessões 1-a-1",
    description:
      "Aulas privadas com correção em tempo real e ajustes a cada movimento.",
    highlight: "Focado",
  },
  {
    number: "4",
    title: "Evolução Contínua",
    description:
      "Progressão constante com novos desafios, sempre respeitando seu ritmo.",
    highlight: "Adaptável",
  },
];

const ClassesSection = () => {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="abordagem" className="relative z-10 py-28 md:py-36">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeUp}
          className="mb-20 text-center"
        >
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
            Como funciona
          </span>
          <h2 className="mt-5 text-4xl font-medium text-foreground md:text-5xl">
            Seu caminho é claro e simples
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
            Quatro passos para transformar sua relação com o corpo. Começar é
            fácil.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="glass-zen group relative overflow-hidden rounded-2xl p-8 transition-colors hover:border-gold/30"
            >
              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between">
                  <span className="font-display text-5xl font-medium text-gold/35 transition-colors group-hover:text-gold/60">
                    {step.number}
                  </span>
                  <span className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-gold">
                    {step.highlight}
                  </span>
                </div>

                <h3 className="font-display text-xl text-foreground">
                  {step.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden text-gold/30 lg:block">
                    <motion.span
                      animate={reduced ? undefined : { x: [0, 4, 0] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="h-5 w-5" strokeWidth={1.25} />
                    </motion.span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClassesSection;
