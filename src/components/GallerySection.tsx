import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import gallery1 from "@/assets/pilates3.webp";
import gallery2 from "@/assets/pilates4.webp";
import gallery3 from "@/assets/pilates5.webp";
import gallery4 from "@/assets/pilates6.webp";
import RevealImage from "@/components/RevealImage";
import { SOCIAL_MEDIA } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion";

const images = [
  {
    src: gallery1,
    alt: "Equipamentos de pilates de ponta",
    className: "aspect-[1/1.12] object-[center_44%]",
  },
  {
    src: gallery2,
    alt: "Reformer para aulas personalizadas",
    className: "aspect-[1/1.12] object-[center_42%]",
  },
  {
    src: gallery3,
    alt: "Espaço acolhedor e tranquilo",
    className: "aspect-[1/1.12] object-[center_48%]",
  },
  {
    src: gallery4,
    alt: "Aula privada em ação",
    className: "aspect-[1/1.12] object-[center_34%]",
  },
];

const GallerySection = () => {
  return (
    <section id="ambiente" className="relative z-10 py-28 md:py-40">
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="section-kicker mb-10 justify-end">
          <span>07</span>
          <span>Atmosfera do espaço</span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
            Espaço
          </span>
          <h2 className="mt-6 text-4xl font-medium text-foreground md:text-6xl md:leading-[0.98]">
            Luz, silêncio
            <span className="block text-primary-foreground/78">e presença material.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl font-sans text-lg leading-[1.9] text-muted-foreground">
            Uma atmosfera que se sente antes mesmo da primeira aula: superfícies
            limpas, luz natural e equipamentos que ajudam o corpo a encontrar foco.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={staggerContainer}
          className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {images.map((img) => (
            <motion.div
              key={img.alt}
              variants={staggerItem}
              className="group relative"
            >
              <RevealImage
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={img.className}
                wrapperClassName="shadow-[0_24px_80px_hsl(226_70%_5%_/_0.24)] transition-all duration-700 motion-safe:group-hover:-translate-y-1"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeUp}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href={SOCIAL_MEDIA.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 font-sans text-sm font-medium tracking-[0.18em] text-gold transition-colors hover:border-gold/30 hover:text-gold-light"
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
