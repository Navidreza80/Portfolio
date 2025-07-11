"use client";

import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with your email service or backend
    alert("Message sent!");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 text-foreground  px-6 lg:px-24"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16  mx-auto">
        {/* Info + Socials */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold mb-4">
            Let’s Build Something <span className="text-primary">Awesome</span>
          </h2>
          <p className="text-muted text-lg">
            Reach out via email, phone, or social — I’d love to connect.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-muted">
              <Mail className="w-5 h-5 text-primary" />
              <Link
                href="mailto:navid@example.com"
                className="hover:text-primary transition"
              >
                navid@example.com
              </Link>
            </div>

            <div className="flex items-center gap-3 text-muted">
              <Phone className="w-5 h-5 text-primary" />
              <Link
                href="tel:+989123456789"
                className="hover:text-primary transition"
              >
                +98 912 345 6789
              </Link>
            </div>

            <div className="flex items-center gap-3 text-muted">
              <MessageCircle className="w-5 h-5 text-primary" />
              <div className="flex gap-3">
                <Link
                  href="https://t.me/naviduser"
                  target="_blank"
                  aria-label="Telegram"
                  className="hover:text-primary transition"
                >
                  Telegram
                </Link>
                <Link
                  href="https://wa.me/989123456789"
                  target="_blank"
                  aria-label="WhatsApp"
                  className="hover:text-primary transition"
                >
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-6">
            <Link
              href="https://github.com/navid"
              aria-label="GitHub"
              className="hover:text-primary transition"
              target="_blank"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/navid"
              aria-label="LinkedIn"
              className="hover:text-primary transition"
              target="_blank"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://instagram.com/navid"
              aria-label="Instagram"
              className="hover:text-primary transition"
              target="_blank"
            >
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-card p-8 rounded-2xl border border-border shadow-xl"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-muted"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="mt-1 w-full bg-background border border-border px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-muted"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="mt-1 w-full bg-background border border-border px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formState.message}
              onChange={handleChange}
              required
              className="mt-1 w-full bg-background border border-border px-4 py-2 rounded-lg text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-hover transition"
          >
            Send Message <Send className="w-5 h-5" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
