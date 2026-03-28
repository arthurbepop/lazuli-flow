export const DEBOUNCE_DELAY = 300;

export const STUDIO_INFO = {
  name: "Lazuli Estúdio de Pilates",
  city: "Santa Cruz do Sul",
  state: "RS",
  country: "Brasil",
  tagline: "Movimento que transforma. Equilíbrio que inspira.",
};

export const CONTACT_INFO = {
  email: "contato@lazulipilates.com.br",
  phone: "(51) 98127-5158",
  phoneTel: "+5551981275158",
  addressLines: [
    "R. Itália, 700 - Sala 08",
    "Jardim Europa, Santa Cruz do Sul - RS",
    "96820-350",
  ],
  cityLine: "Santa Cruz do Sul, RS",
};

export const WHATSAPP_URL = "https://wa.me/5551981275158";

export const SOCIAL_MEDIA = {
  instagram: "https://www.instagram.com/pilateslazuli/",
  facebook: "https://facebook.com",
  whatsapp: WHATSAPP_URL,
};

export const HEADER_NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Método", href: "#abordagem" },
  { label: "Luiza", href: "#sobre-luiza" },
  { label: "Planos", href: "#precos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Espaço", href: "#ambiente" },
  { label: "Contato", href: "#contato" },
] as const;

export const HEADER_NAV_LINKS_MINIMAL = HEADER_NAV_LINKS.slice(0, 4);
