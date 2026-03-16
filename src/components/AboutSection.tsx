import { motion } from "framer-motion";
import aboutImage from "@/assets/about-pilates.jpg";
import { Award, Users, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={aboutImage}
              alt="Praticante de pilates em reformer"
              className="w-full rounded-xl object-cover shadow-sm"
              loading="lazy"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              Quem Somos
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Um estúdio que você merece
            </h2>
            
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Lazuli é um estúdio boutique especializado em Pilates 1-a-1 em Santa Cruz do Sul. Fundado com uma missão clara: oferecer atendimento profissional e personalizado, sem filas, sem pressa.
            </p>

            {/* Credibility Points */}
            <div className="mt-8 space-y-4">
              <div className="flex gap-4">
                <Award className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Certificada e Especializada</h4>
                  <p className="text-sm text-muted-foreground">Instrutora certificada com formação em Pilates Clínico e técnicas de correção postural.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Users className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Centenas de Clientes Atendidas</h4>
                  <p className="text-sm text-muted-foreground">Mais de 200 clientes já passaram por nossas aulas com resultados duradouros.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Heart className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Foco Total em Você</h4>
                  <p className="text-sm text-muted-foreground">Atendimento exclusivo 1-a-1, sem grupos, para maior atenção e efetividade.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
