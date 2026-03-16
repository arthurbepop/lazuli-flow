import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Avaliação Gratuita",
    description:
      "Conversamos sobre seus objetivos, histórico e limitações. Zero compromisso.",
    highlight: "Free",
  },
  {
    number: "2",
    title: "Plano Customizado",
    description:
      "Criamos um programa exclusivo baseado em suas necessidades e metas específicas.",
    highlight: "Personalizado",
  },
  {
    number: "3",
    title: "Sessões 1-a-1",
    description:
      "Aulas privadas com correção em tempo real e ajustes a cada movimento.",
    highlight: "Focado",
  },
  {
    number: "4",
    title: "Evolução Contínua",
    description:
      "Progressão constante com novos desafios, sempre respeitando seu ritmo.",
    highlight: "Adaptável",
  },
];

const ClassesSection = () => {
  return (
    <section id="abordagem" className="relative bg-background py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Como Funciona
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Seu caminho é claro e simples
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            4 passos para transformar sua relação com o corpo. Começar é fácil.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 shadow-sm hover:shadow-lg hover:border-gold/50 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl font-bold text-gold/30 group-hover:text-gold/60 transition-colors">
                    {step.number}
                  </div>
                  <span className="text-xs font-semibold text-gold uppercase bg-gold/10 px-3 py-1 rounded-full">
                    {step.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 text-gold/30">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing/Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-gold/5 to-gold/0 border border-gold/20 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Pronto para Começar?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            A avaliação é <span className="font-semibold text-gold">GRATUITA</span> e sem compromisso.
            Conhecendo você, criamos a proposta perfeita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Pacotes a partir de:</p>
              <p className="text-2xl font-bold text-foreground">R$ 120/mês*</p>
              <p className="text-xs text-muted-foreground mt-1">*Modalidade MAT pilates</p>
            </div>
            
            <a
              href="https://wa.me/5551981275158"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all hover:shadow-lg"
            >
              <CheckCircle2 className="h-5 w-5" />
              Agendar Avaliação Gratuita
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClassesSection;
