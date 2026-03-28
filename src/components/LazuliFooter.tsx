import { Instagram, MapPin, Phone } from "lucide-react";
import { CONTACT_INFO, SOCIAL_MEDIA } from "@/lib/constants";

const LazuliFooter = () => {
  return (
    <footer
      id="rodape"
      className="relative z-10 border-t border-white/10 bg-cobalt/90 pb-[calc(5rem+env(safe-area-inset-bottom))] pt-16 backdrop-blur-sm md:py-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid gap-10 text-center sm:grid-cols-3">
          <div>
            <MapPin className="mx-auto h-6 w-6 text-gold" strokeWidth={1.5} />
            <h2 className="mt-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Localização
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
              {CONTACT_INFO.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
          <div>
            <Phone className="mx-auto h-6 w-6 text-gold" strokeWidth={1.5} />
            <h2 className="mt-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Contato
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/70">
              <a
                href={`tel:${CONTACT_INFO.phoneTel}`}
                className="transition-colors hover:text-gold"
              >
                {CONTACT_INFO.phone}
              </a>
            </p>
          </div>
          <div>
            <Instagram className="mx-auto h-6 w-6 text-gold" strokeWidth={1.5} />
            <h2 className="mt-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Instagram
            </h2>
            <a
              href={SOCIAL_MEDIA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-primary-foreground/70 transition-colors hover:text-gold"
            >
              @pilateslazuli
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Lazuli Estúdio de Pilates. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LazuliFooter;
