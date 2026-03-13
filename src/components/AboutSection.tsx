import { motion } from "framer-motion";
import aboutImage from "@/assets/about-pilates.jpg";

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
              Nossa Filosofia
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Seu corpo, sua história.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              No Lazuli, acreditamos que cada corpo conta uma história. Nosso
              espaço foi projetado para oferecer um refúgio da rotina, com
              equipamentos de ponta e atendimento personalizado. Venha encontrar
              a sua melhor versão.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
