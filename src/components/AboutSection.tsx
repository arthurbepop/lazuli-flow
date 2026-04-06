import { motion } from "framer-motion";
import { Award, Heart } from "lucide-react";
import aboutImage from "@/assets/pilates2.webp";
import RevealImage from "@/components/RevealImage";
import {
  slideFromLeft,
  slideFromRight,
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion";

const AboutSection = () => {
  return (
    <section id="sobre" className="relative z-10 py-28 md:py-40">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="section-kicker mb-10">
          <span>01</span>
          <span>Filosofia do estúdio</span>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-[0.92fr_1.08fr] md:gap-16 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideFromLeft}
            className="min-h-0 md:pt-12"
          >
            <RevealImage
              src={aboutImage}
              alt="Praticante de pilates em reformer"
              loading="lazy"
              className="aspect-[0.88/1] min-h-[360px] object-[center_38%] md:min-h-[500px]"
              wrapperClassName="shadow-[0_28px_90px_hsl(226_70%_5%_/_0.28)]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideFromRight}
            className="flex flex-col justify-center"
          >
            <div className="editorial-plate rounded-[2rem] px-8 py-9 md:px-10 md:py-12">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
                Quem somos
              </span>
              <h2 className="mt-6 max-w-xl text-4xl font-medium text-foreground md:text-6xl md:leading-[0.98]">
                Um estúdio desenhado para o seu ritmo.
              </h2>

              <p className="mt-8 max-w-2xl font-sans text-lg leading-[1.95] text-muted-foreground">
                Lazuli é um estúdio boutique especializado em Pilates em Santa Cruz
                do Sul. Cada detalhe foi pensado para criar uma atmosfera serena,
                técnica e intimista, onde o cuidado acontece com presença real.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportReveal}
              variants={staggerContainer}
              className="mt-8 grid gap-5 md:grid-cols-2"
            >
              <motion.div variants={staggerItem} className="editorial-plate rounded-[1.7rem] p-7">
                <Award className="h-6 w-6 text-gold" strokeWidth={1.25} />
                <h3 className="font-display mt-6 text-2xl text-foreground">
                  Técnica e sensibilidade
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  Formação em Pilates Clínico, correção postural e condução
                  cuidadosa em cada detalhe do movimento.
                </p>
              </motion.div>

              <motion.div variants={staggerItem} className="editorial-plate rounded-[1.7rem] p-7">
                <Heart className="h-6 w-6 text-gold" strokeWidth={1.25} />
                <h3 className="font-display mt-6 text-2xl text-foreground">
                  Ambiente com presença
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  Sem pressa, sem ruído e sem excessos. Um espaço para respirar,
                  alinhar o corpo e desacelerar por dentro.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
