import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marina S.",
    role: "Executiva de TI",
    quote:
      "Sofria por anos com dores crônicas nas costas. Após 8 semanas de Pilates, não tenho mais dor. O atendimento 1-a-1 fez toda a diferença.",
    rating: 5,
  },
  {
    name: "João P.",
    role: "Empresário",
    quote:
      "Buscava força com segurança para meu ombro que tem lesão antiga. A intensidade é real, mas segura. Recomendo muito.",
    rating: 5,
  },
  {
    name: "Ana C.",
    role: "Professora",
    quote:
      "Não esperava sentir tanta calma depois de cada aula. É exercício físico + terapia. Encontrei meu refúgio.",
    rating: 5,
  },
  {
    name: "Felipe M.",
    role: "Fotógrafo",
    quote:
      "Melhorei minha postura profundamente. Meus colegas notaram a diferença nas minhas fotos de antes e depois!",
    rating: 5,
  },
];

const StatsSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-cobalt to-cobalt-deep py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-primary-foreground mb-16"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Histórias reais de transformações de quem confia em nós.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-primary-foreground/90 font-light leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-semibold text-primary-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary-foreground/70">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            <span className="font-semibold text-gold">200+ clientes</span> já transformaram sua relação com o corpo. Qual será sua história?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
