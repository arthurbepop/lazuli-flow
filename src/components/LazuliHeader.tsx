import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import lazuliLogo from "@/assets/lazulilogotransparente.png";
import { HEADER_NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import { smoothEase } from "@/lib/motion";

const LazuliHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 36);
  });

  return (
    <header
      className={`fixed left-0 right-0 top-[2px] z-50 border-b transition-[background,box-shadow,backdrop-filter] duration-500 ease-out ${
        scrolled
          ? "border-white/10 bg-cobalt/75 shadow-lg shadow-black/10 backdrop-blur-2xl"
          : "border-transparent bg-cobalt/80 backdrop-blur-xl"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-1">
        <a href="#top" className="flex-shrink-0">
          <img
            src={lazuliLogo}
            alt="Lazuli estúdio de pilates"
            className="h-16 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-1.5 md:gap-2 lg:flex lg:gap-3">
          {HEADER_NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[11px] font-medium text-primary-foreground/88 transition-colors hover:text-gold lg:text-xs xl:text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0.5 shrink-0 rounded-full bg-gold px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground shadow-sm transition-all hover:bg-gold-light lg:text-xs"
          >
            Agendar Aula
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary-foreground lg:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: smoothEase }}
            className="overflow-hidden border-t border-white/10 bg-cobalt-deep/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-stretch gap-0 px-6 py-5">
              {HEADER_NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, ease: smoothEase }}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-white/5 py-3 text-sm font-medium text-primary-foreground/90 transition-colors hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 rounded-full bg-gold py-3 text-center text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-all hover:bg-gold-light"
              >
                Agendar Aula
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default LazuliHeader;
