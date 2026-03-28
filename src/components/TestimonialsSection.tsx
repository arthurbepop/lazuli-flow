import { motion } from "framer-motion";
import { Star } from "lucide-react";
import LuxeCard from "@/components/LuxeCard";
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
      "Sofria há anos com dores crônicas nas costas. Depois de oito semanas, meu corpo ficou muito mais leve e o atendimento individual fez toda a diferença.",
    rating: 5,
  },
  {
    name: "João P.",
    role: "Empresário",
    quote:
      "Eu buscava força com segurança para um ombro lesionado. Encontrei intensidade na medida certa, com muita técnica e confiança.",
    rating: 5,
  },
  {
    name: "Ana C.",
    role: "Professora",
    quote:
      "Cada aula me devolve presença. Saio mais alinhada, mais calma e com a sensação de que meu corpo finalmente está sendo escutado.",
    rating: 5,
  },
  {
    name: "Felipe M.",
    role: "Fotógrafo",
    quote:
      "Minha postura mudou visivelmente. Além do físico, o estúdio tem uma atmosfera rara, que faz a experiência parecer muito especial.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="relative z-10 py-28 md:py-40">
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="section-kicker mb-10 justify-end">
          <span>06</span>
          <span>Vozes do estúdio</span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
            Confiança
          </span>
          <h2 className="mt-6 text-4xl font-medium text-foreground md:text-6xl md:leading-[0.98]">
            Histórias reais de transformação,
            <span className="block text-primary-foreground/78">calma e constância.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl font-sans text-lg leading-[1.9] text-muted-foreground">
            O que permanece depois das aulas não é apenas postura ou força. É uma
            mudança de percepção sobre o próprio corpo.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={staggerContainer}
          className="mt-18 grid gap-6 md:grid-cols-2"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={staggerItem}
              className={index % 2 === 1 ? "md:translate-y-12" : ""}
            >
              <LuxeCard className="glass-zen group flex min-h-[22rem] flex-col rounded-[2rem] p-8 md:p-9">
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-primary-foreground/34">
                    0{index + 1}
                  </span>
                </div>

                <p className="flex-grow font-display text-3xl leading-[1.14] text-foreground md:text-[2.15rem]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-10 border-t border-white/8 pt-6">
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground/74">
                    {testimonial.name}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </LuxeCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
