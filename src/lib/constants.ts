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

// Contact Info (update with real data)
export const CONTACT_INFO = {
  email: "contato@lazulipilates.com.br",
  phone: "(51) XXXX-XXXX", // Update with real phone
  address: "Santa Cruz do Sul, RS",
};

// Social Media Links (update with real URLs)
export const SOCIAL_MEDIA = {
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  whatsapp: "https://wa.me/",
};
