import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/pilates1.jpg";

const WHATSAPP_URL = "https://wa.me/5551981275158";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Estúdio de pilates moderno com equipamentos premium"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-cobalt-deep/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl"
        >
          Movimento que transforma.{" "}
          <span className="text-gradient-gold">Equilíbrio que inspira.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-6 max-w-xl text-lg font-light text-primary-foreground/85"
        >
          Descubra o poder do Pilates no ambiente mais acolhedor e premium de
          Santa Cruz do Sul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-gold-light hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" />
            Agende sua Aula Experimental
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
