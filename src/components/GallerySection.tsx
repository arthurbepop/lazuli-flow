import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import gallery1 from "@/assets/pilates3.jpg";
import gallery2 from "@/assets/pilates4.jpg";
import gallery3 from "@/assets/pilates5.jpg";
import gallery4 from "@/assets/pilates6.jpg";
import RevealImage from "@/components/RevealImage";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion";
import { SOCIAL_MEDIA } from "@/lib/constants";

const images = [
  { src: gallery1, alt: "Equipamentos de pilates de ponta" },
  { src: gallery2, alt: "Reformer para aulas personalizadas" },
  { src: gallery3, alt: "Espaço acolhedor e tranquilo" },
  { src: gallery4, alt: "Aula privada em ação" },
];

const GallerySection = () => {
  return (
    <section id="ambiente" className="relative z-10 py-28 md:py-36">
      <div className="container relative mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
            Espaço
          </span>
          <h2 className="mt-5 text-4xl font-medium text-foreground md:text-5xl">
            Um lugar onde você se sente bem
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-muted-foreground">
            Equipamentos premium, ambiente tranquilo, luz natural. Tudo pensado
            para você se sentir confortável e focado.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={staggerContainer}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {images.map((img) => (
            <motion.div key={img.alt} variants={staggerItem} className="group relative">
              <RevealImage
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-square"
                wrapperClassName="ring-1 ring-white/10 transition-shadow duration-500 group-hover:ring-gold/25"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeUp}
          className="mt-16 text-center"
        >
          <motion.a
            href={SOCIAL_MEDIA.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-gold transition-colors hover:text-gold-light"
          >
            Veja mais em @pilateslazuli
            <ExternalLink className="h-4 w-4 opacity-70" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
