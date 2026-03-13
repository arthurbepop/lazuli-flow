import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Equipamentos de pilates" },
  { src: gallery2, alt: "Praticante em reformer" },
  { src: gallery3, alt: "Ambiente do estúdio" },
  { src: gallery4, alt: "Aula personalizada" },
];

const GallerySection = () => {
  return (
    <section id="ambiente" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Acompanhe nossa rotina
          </h2>
          <a
            href="https://www.instagram.com/pilateslazuli/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-lg font-medium text-gold transition-colors hover:text-gold-light"
          >
            @pilateslazuli
          </a>
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
      </div>
    </section>
  );
};

export default GallerySection;
