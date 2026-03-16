import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";

const InstagramSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-6 w-6 text-gold" />
            <h3 className="text-xl font-semibold text-foreground">
              Acompanhe-nos no Instagram
            </h3>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Veja transformações, dicas e novidades sobre nossas aulas e serviços.
          </p>

          <a
            href="https://www.instagram.com/pilateslazuli/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
          >
            @pilateslazuli
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
