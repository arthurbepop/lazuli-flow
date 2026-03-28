import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LuxeCard from "@/components/LuxeCard";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion";

const pricingPlans = [
  {
    title: "Pilates Contemporâneo - Aula em Dupla",
    tagline: "Cuidado compartilhado, sem perder a individualidade.",
    price: "260",
    highlight: "Dupla",
  },
  {
    title: "Pilates Contemporâneo - Aula Individual",
    tagline: "Atenção total ao seu ritmo, estúdio reservado com exclusividade.",
    price: "360",
    highlight: "Individual",
  },
  {
    title: "MAT Pilates | Presencial ou Online",
    tagline: "Consciência corporal e leveza, com acompanhamento próximo.",
    price: "120",
    highlight: "Flexível",
  },
  {
    title: "MAT Pilates - Aula à Domicílio",
    tagline: "O Pilates vai até você: sem trânsito, sem pressa e com o mesmo cuidado.",
    price: "400",
    highlight: "Premium",
  },
];

const PricingSection = () => {
  return (
    <section id="precos" className="relative z-10 py-28 md:py-36">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeUp}
          className="mb-20 text-center"
        >
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
            Planos
          </span>
          <h2 className="mt-5 text-4xl font-medium text-foreground md:text-5xl">
            Pilates para seu estilo de vida
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
            Escolha a modalidade que melhor se encaixa na sua rotina. Cada plano
            inclui avaliação personalizada.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {pricingPlans.map((plan) => (
            <motion.div key={plan.title} variants={staggerItem}>
              <LuxeCard className="glass-zen group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-8">
                <span className="mb-5 w-fit rounded-full border border-gold/20 bg-gold/5 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-gold">
                  {plan.highlight}
                </span>

                <h3 className="font-display text-xl leading-snug text-foreground">
                  {plan.title}
                </h3>

                <p className="mb-8 mt-4 flex-grow font-sans text-sm leading-relaxed text-muted-foreground">
                  {plan.tagline}
                </p>

                <div className="border-t border-white/10 pt-6">
                  <p className="mb-1 font-sans text-xs uppercase tracking-wider text-muted-foreground">
                    A partir de
                  </p>
                  <p className="font-display text-4xl text-gold">
                    R$ {plan.price}
                    <span className="ml-1 font-sans text-sm font-normal text-muted-foreground">
                      /mês
                    </span>
                  </p>
                </div>
              </LuxeCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeUp}
          className="mx-auto mt-12 max-w-2xl text-center font-sans text-sm leading-relaxed text-muted-foreground"
        >
          Não sabe qual plano faz mais sentido para você?{" "}
          <a
            href="#contato"
            className="inline-flex items-center gap-1 font-semibold text-gold transition-colors hover:text-gold-light"
          >
            Fale com a gente
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
