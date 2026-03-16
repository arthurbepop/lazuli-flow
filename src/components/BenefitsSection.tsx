import { motion } from "framer-motion";
import { Briefcase, User, RotateCw, Zap } from "lucide-react";

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
            Para Quem é Ideal
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Pilates é para todos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Não importa seu histórico. Se você quer sentir-se melhor, estamos aqui.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile, i) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-lg bg-card p-8 shadow-sm transition-shadow hover:shadow-md border border-border"
            >
              <profile.icon
                className="h-8 w-8 text-gold"
                strokeWidth={1.5}
              />
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {profile.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {profile.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
