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
        <div className="grid items-stretch gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideFromLeft}
            className="order-2 md:order-1"
          >
            <RevealImage
              src={luizaImage}
              alt="Luiza, instrutora de Pilates Lazuli"
              loading="lazy"
              className="aspect-[4/5] min-h-[380px] md:min-h-[460px]"
              wrapperClassName="ring-1 ring-white/10 shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideFromRight}
            className="order-1 flex flex-col justify-center md:order-2"
          >
            <div className="glass-zen rounded-[1.75rem] p-10 md:p-12">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
                Quem te atende
              </span>
              <h2 className="mt-5 text-4xl font-medium text-foreground md:text-5xl">
                Luiza, sua professora
              </h2>

              <blockquote className="mt-10 border-l border-gold/50 pl-8 font-display text-xl italic leading-relaxed text-muted-foreground md:text-2xl">
                &ldquo;Acredito em um Pilates feito com presença, escuta e atenção a
                cada corpo.&rdquo;
              </blockquote>

              <p className="mt-10 font-sans text-lg leading-relaxed text-muted-foreground">
                O amor pela profissão, conhecimento técnico e horas de prática guiam
                os nossos atendimentos de forma segura e consciente, sempre
                respeitando o seu ritmo e suas necessidades.
              </p>

              <p className="mt-6 font-sans text-lg leading-relaxed text-muted-foreground">
                O Lazuli nasceu do desejo de criar um espaço calmo, acolhedor e
                humano. Fico muito feliz por você estar aqui e fazer parte dessa
                história.
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportReveal}
                variants={staggerContainer}
                className="mt-10 space-y-6 border-t border-white/10 pt-10"
              >
                <motion.div variants={staggerItem} className="flex gap-5">
                  <Heart className="mt-0.5 h-6 w-6 shrink-0 text-gold" strokeWidth={1.25} />
                  <div>
                    <h3 className="font-display text-xl text-foreground">
                      Presença e escuta
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                      Atenção total ao seu corpo, necessidades e ritmo em cada
                      movimento.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={staggerItem} className="flex gap-5">
                  <Brain className="mt-0.5 h-6 w-6 shrink-0 text-gold" strokeWidth={1.25} />
                  <div>
                    <h3 className="font-display text-xl text-foreground">
                      Conhecimento técnico
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                      Formação certificada em Pilates com especialização em técnicas
                      seguras e eficazes.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={staggerItem} className="flex gap-5">
                  <Users className="mt-0.5 h-6 w-6 shrink-0 text-gold" strokeWidth={1.25} />
                  <div>
                    <h3 className="font-display text-xl text-foreground">
                      Espaço acolhedor
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                      Um ambiente calmo e humano, onde você é prioridade e não
                      apenas mais um número.
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

export default InstructorSection;
