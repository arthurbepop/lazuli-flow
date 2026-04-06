import { motion } from "framer-motion";
import { Brain, Heart, Users } from "lucide-react";
import luizaImage from "@/assets/luiza.webp";
import RevealImage from "@/components/RevealImage";
import {
  slideFromLeft,
  slideFromRight,
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion";

const InstructorSection = () => {
  return (
    <section id="sobre-luiza" className="relative z-10 py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="section-kicker mb-8 md:mb-10">
          <span>04</span>
          <span>Quem conduz</span>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-[1.06fr_0.94fr] md:items-stretch md:gap-10 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideFromRight}
            className="order-2 md:order-1 md:h-full"
          >
            <div className="editorial-plate rounded-[2rem] px-6 py-7 md:flex md:h-full md:flex-col md:px-8 md:py-9">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
                Quem te atende
              </span>
              <div className="mt-6 grid gap-7 md:flex-1 xl:grid-cols-[1.08fr_0.92fr] xl:gap-6">
                <div>
                  <h2 className="max-w-xl text-4xl font-medium text-foreground md:text-5xl md:leading-[0.98]">
                    Luiza, condução com técnica e escuta.
                  </h2>

                  <blockquote className="mt-7 max-w-2xl border-l border-gold/40 pl-6 font-display text-[1.65rem] italic leading-[1.16] text-primary-foreground/82 md:text-[1.9rem]">
                    &ldquo;Acredito em um Pilates feito com presença, atenção e leitura
                    sensível de cada corpo.&rdquo;
                  </blockquote>

                  <p className="mt-7 max-w-2xl font-sans text-base leading-[1.8] text-muted-foreground md:text-[1.04rem]">
                    O Lazuli nasce do desejo de criar uma experiência de cuidado mais
                    íntima, calma e precisa. Cada aula é conduzida com presença real,
                    repertório técnico e respeito pelo tempo do seu corpo.
                  </p>
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportReveal}
                  variants={staggerContainer}
                  className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1 xl:gap-3"
                >
                  <motion.div variants={staggerItem} className="editorial-plate rounded-[1.35rem] p-5">
                    <Heart className="h-6 w-6 text-gold" strokeWidth={1.25} />
                    <h3 className="font-display mt-4 text-xl text-foreground">
                      Presença
                    </h3>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-muted-foreground md:text-sm">
                      Atenção real ao seu corpo, à sua respiração e ao ritmo de cada
                      encontro.
                    </p>
                  </motion.div>

                  <motion.div variants={staggerItem} className="editorial-plate rounded-[1.35rem] p-5">
                    <Brain className="h-6 w-6 text-gold" strokeWidth={1.25} />
                    <h3 className="font-display mt-4 text-xl text-foreground">
                      Técnica
                    </h3>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-muted-foreground md:text-sm">
                      Formação sólida e leitura corporal refinada para conduzir com
                      segurança e clareza.
                    </p>
                  </motion.div>

                  <motion.div variants={staggerItem} className="editorial-plate rounded-[1.35rem] p-5">
                    <Users className="h-6 w-6 text-gold" strokeWidth={1.25} />
                    <h3 className="font-display mt-4 text-xl text-foreground">
                      Vínculo
                    </h3>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-muted-foreground md:text-sm">
                      Um atendimento humano, contínuo e próximo, sem automatismos e
                      sem pressa.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideFromLeft}
            className="order-1 md:order-2 md:h-full"
          >
            <RevealImage
              src={luizaImage}
              alt="Luiza, instrutora de Pilates Lazuli"
              loading="lazy"
              className="aspect-[0.84/1.02] h-full min-h-[380px] object-[center_22%] md:min-h-[620px]"
              wrapperClassName="h-full shadow-[0_30px_95px_hsl(226_70%_5%_/_0.3)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
