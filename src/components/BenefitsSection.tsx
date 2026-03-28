import { motion } from "framer-motion";
import { Briefcase, User, RotateCw, Zap } from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const profiles = [
  {
    icon: Briefcase,
    title: "Quem trabalha muito",
    description:
      "Se você passa horas no computador e sente dores nas costas e pescoço, o Pilates ajuda a realinhar e liberar tensão.",
  },
  {
    icon: User,
    title: "Quem busca força",
    description:
      "Quer um corpo mais forte e definido? Pilates constrói músculos de forma inteligente, sem impacto.",
  },
  {
    icon: RotateCw,
    title: "Quem se recupera",
    description:
      "Em recuperação ou com lesão? Pilates é terapêutico e restaura mobilidade com segurança.",
  },
  {
    icon: Zap,
    title: "Quem quer energia",
    description:
      "Cansado? Pilates melhora circulação, respiração e energia. Você sai mais leve e calmo.",
  },
];

const BenefitsSection = () => {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="beneficios" className="relative z-10 py-28 md:py-36">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
            Para quem é ideal
          </span>
          <h2 className="mt-5 text-4xl font-medium text-foreground md:text-5xl">
            Pilates é para todos
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-muted-foreground">
            Não importa seu histórico. Se você quer sentir-se melhor, estamos
            aqui.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={staggerContainer}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {profiles.map((profile) => (
            <motion.div
              key={profile.title}
              variants={staggerItem}
              whileHover={
                reduced
                  ? undefined
                  : {
                      y: -4,
                      transition: { type: "spring", stiffness: 280, damping: 24 },
                    }
              }
              className="glass-zen group rounded-2xl p-8 transition-colors hover:border-gold/25"
            >
              <profile.icon
                className="h-7 w-7 text-gold"
                strokeWidth={1.15}
              />
              <h3 className="font-display mt-6 text-xl text-foreground">
                {profile.title}
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                {profile.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
