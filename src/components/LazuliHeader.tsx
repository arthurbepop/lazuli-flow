import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import lazuliLogo from "@/assets/lazulilogotransparente.png";
import {
  HEADER_NAV_LINKS,
  HEADER_NAV_LINKS_MINIMAL,
  WHATSAPP_URL,
} from "@/lib/constants";
import { smoothEase } from "@/lib/motion";

const LazuliHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 28);
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const closeMenuOnDesktop = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnDesktop);
    window.addEventListener("orientationchange", closeMenuOnDesktop);

    return () => {
      window.removeEventListener("resize", closeMenuOnDesktop);
      window.removeEventListener("orientationchange", closeMenuOnDesktop);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousTouchAction = body.style.touchAction;

    if (isOpen) {
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
    }

    return () => {
      body.style.overflow = previousOverflow;
      body.style.touchAction = previousTouchAction;
    };
  }, [isOpen]);

  return (
    <header
      className="fixed left-0 right-0 z-50 px-4 md:px-6"
      style={{ top: "max(0.75rem, env(safe-area-inset-top))" }}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-[background,border-color,box-shadow,backdrop-filter,transform] duration-500 ease-out md:px-6 ${
          scrolled
            ? "border-white/12 bg-[hsl(226_42%_14%_/_0.78)] shadow-[0_18px_48px_hsl(226_70%_5%_/_0.28)] backdrop-blur-2xl"
            : "border-white/8 bg-[hsl(226_44%_16%_/_0.42)] shadow-[0_10px_28px_hsl(226_70%_5%_/_0.12)] backdrop-blur-xl"
        }`}
      >
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <img
            src={lazuliLogo}
            alt="Lazuli estúdio de pilates"
            className="h-10 w-auto md:h-11"
          />
          <div className="hidden md:block">
            <p className="font-display text-lg leading-none text-primary-foreground">
              Lazuli
            </p>
            <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.28em] text-primary-foreground/46">
              Estúdio de Pilates
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {HEADER_NAV_LINKS_MINIMAL.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-3 whitespace-nowrap font-sans text-[13px] font-medium text-primary-foreground/76 transition-colors hover:text-gold"
            >
              <span className="text-[10px] uppercase tracking-[0.32em] text-primary-foreground/28 transition-colors group-hover:text-gold/50">
                0{index + 1}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-gold/25 bg-gold/90 px-4 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-all hover:bg-gold-light hover:shadow-[0_16px_36px_hsl(46_72%_48%_/_0.26)] md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary-foreground transition-colors hover:bg-white/10 lg:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: smoothEase }}
            className="mx-auto mt-3 max-h-[calc(100svh-6.75rem-env(safe-area-inset-top))] max-w-6xl overflow-y-auto overscroll-contain rounded-[1.9rem] border border-white/10 bg-cobalt-deep/92 shadow-[0_20px_48px_hsl(226_70%_5%_/_0.28)] backdrop-blur-2xl lg:hidden"
          >
            <div
              className="flex flex-col items-stretch px-5 py-5"
              style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
            >
              {HEADER_NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, ease: smoothEase }}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-white/6 py-4 text-base font-medium text-primary-foreground/88 transition-colors hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-all hover:bg-gold-light"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar aula
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default LazuliHeader;
