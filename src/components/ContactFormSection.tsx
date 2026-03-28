import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT_INFO, WHATSAPP_URL } from "@/lib/constants";
import {
  slideFromLeft,
  slideFromRight,
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion";

const inputClass =
  "mt-3 w-full rounded-[1.2rem] border border-white/8 bg-white/[0.035] px-4 py-4 font-sans text-base text-foreground placeholder:text-muted-foreground/55 backdrop-blur-sm transition-colors focus:border-gold/35 focus:outline-none focus:ring-1 focus:ring-gold/20 md:text-[15px]";

const ContactFormSection = () => {
  const resetFeedbackTimeoutRef = useRef<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    return () => {
      if (resetFeedbackTimeoutRef.current) {
        window.clearTimeout(resetFeedbackTimeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Nome: ${formData.name.trim()}`,
      formData.phone.trim() ? `Telefone: ${formData.phone.trim()}` : "",
      `Mensagem: ${formData.message.trim()}`,
    ].filter(Boolean);

    const whatsappURL = `${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setFormData({ name: "", phone: "", message: "" });
    setSubmitted(true);

    if (resetFeedbackTimeoutRef.current) {
      window.clearTimeout(resetFeedbackTimeoutRef.current);
    }

    resetFeedbackTimeoutRef.current = window.setTimeout(() => {
      setSubmitted(false);
      resetFeedbackTimeoutRef.current = null;
    }, 3000);
  };

  return (
    <section
      id="contato"
      className="relative z-10 pb-[calc(8rem+env(safe-area-inset-bottom))] pt-14 md:pb-40"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="section-kicker mb-10">
          <span>08</span>
          <span>Agende sua aula</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideFromLeft}
            className="editorial-plate rounded-[1.8rem] px-6 py-8 sm:px-8 sm:py-9 md:rounded-[2rem] md:px-10 md:py-12"
          >
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
              Entre em contato
            </span>
            <h2 className="mt-6 max-w-md text-4xl font-medium text-foreground md:text-6xl md:leading-[0.98]">
              O próximo movimento começa aqui.
            </h2>
            <p className="mt-8 max-w-xl font-sans text-lg leading-[1.95] text-muted-foreground">
              Se você quer entender qual formato faz mais sentido para o seu corpo,
              nos escreva. A conversa continua no WhatsApp de forma simples, direta
              e pessoal.
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportReveal}
              variants={staggerContainer}
              className="mt-12 space-y-6"
            >
              <motion.div variants={staggerItem} className="editorial-plate rounded-[1.55rem] p-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <Phone className="h-5 w-5 text-gold" strokeWidth={1.25} />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/72">
                      WhatsApp
                    </h3>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block font-display text-3xl leading-none text-foreground transition-colors hover:text-gold"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                    <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-muted-foreground">
                      Nosso canal mais rápido para orientar, tirar dúvidas e agendar
                      sua primeira experiência.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="editorial-plate rounded-[1.55rem] p-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <MapPin className="h-5 w-5 text-gold" strokeWidth={1.25} />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/72">
                      Localização
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                      {CONTACT_INFO.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideFromRight}
            className="editorial-frame rounded-[1.95rem] px-6 py-8 sm:px-8 sm:py-9 md:rounded-[2.25rem] md:px-10 md:py-12"
          >
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary-foreground/46"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary-foreground/46"
                  >
                    Telefone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(51) 99999-9999"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary-foreground/46"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Conte um pouco sobre o que você busca sentir, melhorar ou transformar."
                  value={formData.message}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  rows={7}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[1.15rem] border border-gold/18 bg-gold/10 px-4 py-4 font-sans text-sm text-foreground"
                >
                  Mensagem enviada. Abrimos o WhatsApp para você.
                </motion.div>
              )}

              <div className="flex flex-col gap-5 border-t border-white/8 pt-7 md:flex-row md:items-center md:justify-between">
                <div className="text-center font-sans text-[11px] uppercase tracking-[0.24em] text-primary-foreground/38 md:text-left md:text-xs md:tracking-[0.28em]">
                  Resposta em até 24 horas
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-center font-sans text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground transition-all hover:bg-gold-light hover:shadow-[0_18px_42px_hsl(46_72%_48%_/_0.28)] md:w-auto md:tracking-[0.22em]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Continuar no WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
