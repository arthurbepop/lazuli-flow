import { motion } from "framer-motion";
import { MessageCircle, Instagram, MapPin, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5551981275158";

const LazuliFooter = () => {
  return (
    <footer id="contato" className="bg-cobalt py-24">
      <div className="container mx-auto px-6">
        {/* Info Columns */}
        <div className="mt-20 grid gap-10 text-center sm:grid-cols-3">
          <div>
            <MapPin className="mx-auto h-6 w-6 text-gold" strokeWidth={1.5} />
            <h4 className="mt-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Localização
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
              R. Itália, 700 - Sala 08
              <br />
              Jardim Europa, Santa Cruz do Sul - RS
              <br />
              96820-350
            </p>
          </div>
          <div>
            <Phone className="mx-auto h-6 w-6 text-gold" strokeWidth={1.5} />
            <h4 className="mt-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Contato
            </h4>
            <p className="mt-2 text-sm text-primary-foreground/70">
              (51) 98127-5158
            </p>
          </div>
          <div>
            <Instagram className="mx-auto h-6 w-6 text-gold" strokeWidth={1.5} />
            <h4 className="mt-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Social
            </h4>
            <a
              href="https://www.instagram.com/pilateslazuli/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-primary-foreground/70 transition-colors hover:text-gold"
            >
              @pilateslazuli
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/50">
            © 2026 Lazuli Estúdio de Pilates. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LazuliFooter;
