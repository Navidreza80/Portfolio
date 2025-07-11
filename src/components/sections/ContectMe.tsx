"use client";

import { createMessage } from "@/app/actions/CreateMessage";
import { contactInfo, socialLinks } from "@/constants";
import { contactSchema } from "@/lib/validation/schema";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function ContactSection() {
  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
      email: "",
    },
    validationSchema: contactSchema,
    onSubmit: (value) => {
      toast.promise(createMessage(value), {
        loading: "loading...",
        success: "Message sent successfully!!",
        error: "Failed to sent message.",
      });
    },
  });

  const inputs = [
    { id: 1, name: "name", value: formik.values.name, text: "Name" },
    { id: 2, name: "email", value: formik.values.email, text: "Email" },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 text-foreground px-6 lg:px-24"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 mx-auto">
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
            {contactInfo.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-muted">
                <item.icon className="w-5 h-5 text-primary mt-1" />
                {item.links ? (
                  <div className="flex gap-3">
                    {item.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        className="hover:text-primary transition"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition"
                  >
                    {item.text}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-5 mt-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="hover:text-primary transition"
              >
                <Icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={formik.handleSubmit}
          className="space-y-6 bg-card p-8 rounded-2xl border border-border shadow-xl"
        >
          {inputs.map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.name}
                className="block text-sm font-semibold text-muted capitalize"
              >
                {field.text}
              </label>
              <input
                id={field.name}
                name={field.name}
                onChange={formik.handleChange}
                value={field.value}
                className="mt-1 w-full bg-background border border-border px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          ))}

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
              value={formik.values.message}
              onChange={formik.handleChange}
              required
              className="mt-1 w-full bg-background border border-border px-4 py-2 rounded-lg text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            className="w-full bg-primary cursor-pointer text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-hover transition"
          >
            Send Message <Send className="w-5 h-5" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
