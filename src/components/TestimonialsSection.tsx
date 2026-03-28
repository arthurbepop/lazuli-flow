import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion";

const testimonials = [
  {
    name: "Marina S.",
    role: "Executiva de TI",
    quote:
      "Sofria por anos com dores crônicas nas costas. Após 8 semanas de Pilates, não tenho mais dor. O atendimento 1-a-1 fez toda a diferença.",
    rating: 5,
  },
  {
    name: "João P.",
    role: "Empresário",
    quote:
      "Buscava força com segurança para meu ombro que tem lesão antiga. A intensidade é real, mas segura. Recomendo muito.",
    rating: 5,
  },
  {
    name: "Ana C.",
    role: "Professora",
    quote:
      "Não esperava sentir tanta calma depois de cada aula. É exercício físico + terapia. Encontrei meu refúgio.",
    rating: 5,
  },
  {
    name: "Felipe M.",
    role: "Fotógrafo",
    quote:
      "Melhorei minha postura profundamente. Meus colegas notaram a diferença nas minhas fotos de antes e depois!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="depoimentos" className="relative z-10 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="container relative mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeUp}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
            Confiança
          </span>
          <h2 className="mt-5 text-4xl font-medium text-foreground md:text-5xl">
            O que nossos clientes dizem
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-muted-foreground">
            Histórias reais de transformação com Pilates no Lazuli.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={staggerItem}
              whileHover={
                reduced
                  ? undefined
                  : { y: -3, transition: { type: "spring", stiffness: 380, damping: 26 } }
              }
              className="glass-zen group flex flex-col rounded-2xl p-8"
            >
              <div className="mb-5 flex gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="flex-grow font-sans text-sm font-light leading-relaxed text-foreground/90">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="font-display text-lg text-foreground">
                  {testimonial.name}
                </h3>
                <p className="mt-1 font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
