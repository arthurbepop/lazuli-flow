import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import sunSymbol from "@/assets/lazuli-sun-symbol.png";

const WHATSAPP_URL = "https://wa.me/5551981275158";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Ambiente", href: "#ambiente" },
  { label: "Contato", href: "#contato" },
];

const LazuliHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cobalt">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={sunSymbol}
            alt=""
            className="h-10 w-10"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-tight tracking-wide text-primary-foreground">
              Lazuli
            </span>
            <span className="text-[10px] font-light tracking-[0.15em] text-primary-foreground/80">
              estúdio de pilates
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/90 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-gold-light"
          >
            Agendar Aula
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-cobalt-deep md:hidden"
          >
            <div className="flex flex-col items-center gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-primary-foreground/90 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-gold-light"
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
