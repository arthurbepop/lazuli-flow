import { motion } from "framer-motion";
import { Award, Heart } from "lucide-react";
import aboutImage from "@/assets/pilates2.jpg";
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
        <div className="grid items-stretch gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideFromLeft}
            className="min-h-0"
          >
            <RevealImage
              src={aboutImage}
              alt="Praticante de pilates em reformer"
              loading="lazy"
              className="aspect-[4/5] md:min-h-[420px]"
              wrapperClassName="ring-1 ring-white/10 shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideFromRight}
            className="flex flex-col justify-center"
          >
            <div className="glass-zen rounded-[1.75rem] p-10 md:p-12">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
                Quem somos
              </span>
              <h2 className="mt-5 text-4xl font-medium text-foreground md:text-5xl">
                Um estúdio que você merece
              </h2>

              <p className="mt-8 font-sans text-lg leading-relaxed text-muted-foreground">
                Lazuli é um estúdio boutique especializado em Pilates em Santa Cruz
                do Sul. Fundado com uma missão clara: oferecer atendimento
                profissional e personalizado, presença atenta em cada movimento e um
                espaço calmo, acolhedor e humano.
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportReveal}
                variants={staggerContainer}
                className="mt-10 space-y-6 border-t border-white/10 pt-10"
              >
                <motion.div variants={staggerItem} className="flex gap-5">
                  <Award className="mt-0.5 h-6 w-6 shrink-0 text-gold" strokeWidth={1.25} />
                  <div>
                    <h3 className="font-display text-xl text-foreground">
                      Certificada e especializada
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                      Formação em Pilates Clínico e técnicas de correção postural,
                      com abordagem segura e consciente.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={staggerItem} className="flex gap-5">
                  <Heart className="mt-0.5 h-6 w-6 shrink-0 text-gold" strokeWidth={1.25} />
                  <div>
                    <h3 className="font-display text-xl text-foreground">
                      Foco total em você
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                      Atendimento exclusivo, sem grupos, com atenção integral ao seu
                      corpo, necessidades e ritmo.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
