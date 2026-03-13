import { motion } from "framer-motion";
import { Activity, AlignVerticalSpaceAround, HeartPulse, Flower2 } from "lucide-react";

const benefits = [
  {
    icon: Activity,
    title: "Flexibilidade e Força",
    description:
      "Desenvolva um corpo mais flexível e forte com exercícios que respeitam seus limites.",
  },
  {
    icon: AlignVerticalSpaceAround,
    title: "Correção Postural",
    description:
      "Alinhe sua coluna e melhore a postura com técnicas precisas e individualizadas.",
  },
  {
    icon: HeartPulse,
    title: "Alívio de Dores",
    description:
      "Reduza dores crônicas e tensões musculares através de movimentos terapêuticos.",
  },
  {
    icon: Flower2,
    title: "Conexão Mente-Corpo",
    description:
      "Encontre equilíbrio interior e concentração em cada sessão de pilates.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="bg-muted py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Benefícios
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Por que escolher o Lazuli?
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-lg bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <benefit.icon
                className="h-8 w-8 text-gold"
                strokeWidth={1.5}
              />
              <h3 className="mt-5 text-lg font-semibold text-primary">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
