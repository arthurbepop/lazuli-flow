/**
 * Application Constants
 * Centralized configuration values
 */

export const APP_NAME = import.meta.env.VITE_APP_NAME || "Lazuli Pilates";
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || "1.0.0";

// API Configuration
export const API_URL = import.meta.env.VITE_API_URL || "";
export const API_TIMEOUT = 30000; // 30 seconds

// Feature Flags
export const FEATURES = {
  CONTACT_FORM: import.meta.env.VITE_ENABLE_CONTACT_FORM !== "false",
  ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === "true",
};

// Routes
export const ROUTES = {
  HOME: "/",
  NOT_FOUND: "*",
};

// UI Constants
export const ANIMATION_DURATION = 300; // ms
export const DEBOUNCE_DELAY = 300; // ms

// Pilates Studio Info
export const STUDIO_INFO = {
  name: "Lazuli Estúdio de Pilates",
  city: "Santa Cruz do Sul",
  state: "RS",
  country: "Brasil",
  tagline: "Movimento que transforma. Equilíbrio que inspira.",
};

// Contact Info — keep in sync with LazuliFooter
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

// Social Media Links
export const SOCIAL_MEDIA = {
  instagram: "https://www.instagram.com/pilateslazuli/",
  facebook: "https://facebook.com",
  whatsapp: WHATSAPP_URL,
};

/** Header anchors — full story without duplicating CTA block (users scroll or use rail) */
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
