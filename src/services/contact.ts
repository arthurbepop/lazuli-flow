/**
 * Contact Service
 * Handles contact form submissions and inquiries
 */

import { api } from "./api";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
}

class ContactService {
  /**
   * Submit a contact form
   */
  async submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    return api.post("/contact", data);
  }

  /**
   * Subscribe to newsletter
   */
  async subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    return api.post("/newsletter/subscribe", { email });
  }
}

export const contactService = new ContactService();
