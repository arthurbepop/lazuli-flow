import { motion } from "framer-motion";
import { Brain, Heart, Users } from "lucide-react";
import luizaImage from "@/assets/luiza.jpg";
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
    <section id="sobre-luiza" className="relative z-10 py-28 md:py-40">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="section-kicker mb-10">
          <span>04</span>
          <span>Quem conduz</span>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-[1.06fr_0.94fr] md:gap-16 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideFromRight}
            className="order-2 md:order-1"
          >
            <div className="editorial-plate rounded-[2rem] px-8 py-9 md:px-10 md:py-12">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
                Quem te atende
              </span>
              <h2 className="mt-6 max-w-xl text-4xl font-medium text-foreground md:text-6xl md:leading-[0.98]">
                Luiza, condução com técnica e escuta.
              </h2>

              <blockquote className="mt-9 max-w-2xl border-l border-gold/40 pl-7 font-display text-2xl italic leading-[1.18] text-primary-foreground/82 md:text-[2.15rem]">
                &ldquo;Acredito em um Pilates feito com presença, atenção e leitura
                sensível de cada corpo.&rdquo;
              </blockquote>

              <p className="mt-9 max-w-2xl font-sans text-lg leading-[1.95] text-muted-foreground">
                O Lazuli nasce do desejo de criar uma experiência de cuidado mais
                íntima, calma e precisa. Cada aula é conduzida com presença real,
                repertório técnico e respeito pelo tempo do seu corpo.
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportReveal}
                variants={staggerContainer}
                className="mt-10 grid gap-5 md:grid-cols-3"
              >
                <motion.div variants={staggerItem} className="editorial-plate rounded-[1.55rem] p-6">
                  <Heart className="h-6 w-6 text-gold" strokeWidth={1.25} />
                  <h3 className="font-display mt-5 text-2xl text-foreground">
                    Presença
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                    Atenção real ao seu corpo, à sua respiração e ao ritmo de cada
                    encontro.
                  </p>
                </motion.div>

                <motion.div variants={staggerItem} className="editorial-plate rounded-[1.55rem] p-6">
                  <Brain className="h-6 w-6 text-gold" strokeWidth={1.25} />
                  <h3 className="font-display mt-5 text-2xl text-foreground">
                    Técnica
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                    Formação sólida e leitura corporal refinada para conduzir com
                    segurança e clareza.
                  </p>
                </motion.div>

                <motion.div variants={staggerItem} className="editorial-plate rounded-[1.55rem] p-6">
                  <Users className="h-6 w-6 text-gold" strokeWidth={1.25} />
                  <h3 className="font-display mt-5 text-2xl text-foreground">
                    Vínculo
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                    Um atendimento humano, contínuo e próximo, sem automatismos e
                    sem pressa.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideFromLeft}
            className="order-1 md:order-2 md:pt-10"
          >
            <RevealImage
              src={luizaImage}
              alt="Luiza, instrutora de Pilates Lazuli"
              loading="lazy"
              className="aspect-[0.84/1.02] min-h-[380px] object-[center_22%] md:min-h-[620px]"
              wrapperClassName="shadow-[0_30px_95px_hsl(226_70%_5%_/_0.3)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
