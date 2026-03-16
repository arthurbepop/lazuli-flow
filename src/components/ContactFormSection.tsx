import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

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

    // Enviar para WhatsApp
    const message = `Nome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AMensagem: ${formData.message}`;
    const whatsappURL = `https://wa.me/5551981275158?text=${message}`;
    window.open(whatsappURL, "_blank");

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-gold">
                Entre em Contato
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Vamos conversar sobre seus objetivos
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Estamos aqui para ajudá-lo a alcançar seus objetivos de saúde
                e bem-estar. Entre em contato conosco para marcar uma aula
                experimental gratuita ou tirar suas dúvidas.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-12 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Localização</h3>
                  <p className="mt-1 text-muted-foreground">
                    Santa Cruz do Sul, RS
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Telefone</h3>
                  <a
                    href="https://wa.me/5551981275158"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-muted-foreground hover:text-gold transition-colors"
                  >
                    (51) 98127-5158
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href="mailto:contato@lazulipilates.com.br"
                    className="mt-1 text-muted-foreground hover:text-gold transition-colors"
                  >
                    contato@lazulipilates.com.br
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-xl border border-border bg-card p-8 shadow-sm"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
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
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Telefone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(51) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Como podemos ajudá-lo?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-green-50 border border-green-200 p-4 text-green-800"
                >
                  ✓ Mensagem enviada! Falaremos em breve.
                </motion.div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Enviar Mensagem
              </button>

              <p className="text-center text-sm text-muted-foreground">
                Responderemos em até 24 horas
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
