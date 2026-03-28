import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

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
  const reduced = usePrefersReducedMotion();

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
          className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.title}
              variants={staggerItem}
              whileHover={
                reduced
                  ? undefined
                  : {
                      y: -3,
                      transition: { type: "spring", stiffness: 300, damping: 24 },
                    }
              }
              className="glass-zen group relative flex flex-col overflow-hidden rounded-2xl p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.07] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col">
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
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeUp}
          className="glass-zen mx-auto max-w-3xl rounded-[1.5rem] px-8 py-12 text-center md:px-12"
        >
          <h3 className="font-display text-3xl text-foreground md:text-4xl">
            Vamos conversar?
          </h3>
          <p className="mx-auto mt-6 max-w-xl font-sans leading-relaxed text-muted-foreground">
            Descreva seu objetivo e criaremos um plano personalizado para você.
            <span className="mt-3 block font-medium text-gold">
              A avaliação é gratuita.
            </span>
          </p>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-shadow hover:bg-gold-light hover:shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            Iniciar conversa no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
