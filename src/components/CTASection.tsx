import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cobalt to-cobalt-deep py-20">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Pronto para começar?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90">
            Agende uma avaliação gratuita e conheça nossa metodologia.
            Sem compromisso, sem surpresas.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex justify-center"
          >
            <a
              href="https://wa.me/5551981275158"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 font-semibold text-primary-foreground shadow-lg transition-all hover:bg-gold-light hover:shadow-xl hover:gap-3"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar Avaliação Gratuita
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
