import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import {
  slideFromLeft,
  slideFromRight,
  staggerContainer,
  staggerItem,
  viewportReveal,
} from "@/lib/motion";
import { CONTACT_INFO, WHATSAPP_URL } from "@/lib/constants";

const inputClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground/70 backdrop-blur-sm transition-colors focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/30";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Nome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AMensagem: ${formData.message}`;
    const whatsappURL = `${WHATSAPP_URL}?text=${message}`;
    window.open(whatsappURL, "_blank");

    setFormData({ name: "", email: "", phone: "", message: "" });
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contato" className="relative z-10 pb-28 pt-12 md:pb-36">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideFromLeft}
            className="glass-zen rounded-[1.75rem] p-10 md:p-12"
          >
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
              Entre em contato
            </span>
            <h2 className="mt-5 font-display text-4xl text-foreground md:text-5xl">
              Vamos conversar sobre seus objetivos
            </h2>
            <p className="mt-8 font-sans text-lg leading-relaxed text-muted-foreground">
              Estamos aqui para ajudá-la a alcançar seus objetivos de saúde e
              bem-estar. Marque uma aula experimental gratuita ou tire suas
              dúvidas.
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportReveal}
              variants={staggerContainer}
              className="mt-12 space-y-8 border-t border-white/10 pt-10"
            >
              <motion.div variants={staggerItem} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                  <MapPin className="h-5 w-5 text-gold" strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground">
                    Localização
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                    {CONTACT_INFO.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                  <Phone className="h-5 w-5 text-gold" strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground">
                    Telefone
                  </h3>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-sans text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                  <Mail className="h-5 w-5 text-gold" strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground">
                    E-mail
                  </h3>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="mt-2 inline-block font-sans text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportReveal}
            variants={slideFromRight}
            className="glass-zen rounded-[1.75rem] p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  Telefone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(51) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Como podemos ajudá-la?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-gold/25 bg-gold/10 px-4 py-3 font-sans text-sm text-foreground"
                >
                  Mensagem enviada — abrimos o WhatsApp para você.
                </motion.div>
              )}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-gold-light"
              >
                <MessageCircle className="h-5 w-5" />
                Enviar mensagem
              </button>

              <p className="text-center font-sans text-xs text-muted-foreground">
                Respondemos em até 24 horas
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
