import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import gallery1 from "@/assets/pilates3.jpg";
import gallery2 from "@/assets/pilates4.jpg";
import gallery3 from "@/assets/pilates5.jpg";
import gallery4 from "@/assets/pilates6.jpg";

const images = [
  { src: gallery1, alt: "Equipamentos de pilates de ponta" },
  { src: gallery2, alt: "Reformer para aulas personalizadas" },
  { src: gallery3, alt: "Espaço acolhedor e tranquilo" },
  { src: gallery4, alt: "Aula privada em ação" },
];

const GallerySection = () => {
  return (
    <section id="ambiente" className="bg-muted py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Espaço
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Um lugar onde você se sente bem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Equipamentos premium, ambiente tranquilo, luz natural. Tudo pensado para você se sentir confortável e focado.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* More Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.instagram.com/pilateslazuli/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
          >
            Veja mais em @pilateslazuli
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
