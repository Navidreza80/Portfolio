/* eslint-disable */

"use client";

import { createMessage } from "@/app/actions/CreateMessage";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<any>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors(null);

    const formData = new FormData(e.currentTarget);
    const res = await createMessage(formData);

    if (res?.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrors(res?.errors);
    }
  }

  return (
    <section id="contact" className="relative bg-[var(--pf-bg-alt)] px-4 py-20 text-[var(--pf-text)] sm:px-8 md:px-16 lg:px-24">
      <h2 className="mb-4 w-full text-center text-3xl font-bold md:text-4xl">
        Get in Touch
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-[var(--pf-muted)]">
        Have a product, platform, or team that needs a steady full-stack hand?
        Send a note and I will get back to you.
      </p>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--pf-muted)]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-[var(--pf-border)] bg-white/45 p-3 text-[var(--pf-text)] placeholder-[var(--pf-muted)] outline-none transition-colors focus:border-[var(--pf-accent)]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--pf-muted)]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-[var(--pf-border)] bg-white/45 p-3 text-[var(--pf-text)] placeholder-[var(--pf-muted)] outline-none transition-colors focus:border-[var(--pf-accent)]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--pf-muted)]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-none border border-[var(--pf-border)] bg-white/45 p-3 text-[var(--pf-text)] placeholder-[var(--pf-muted)] outline-none transition-colors focus:border-[var(--pf-accent)]"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full border border-[var(--pf-button)] bg-[var(--pf-button)] px-6 py-3 text-[var(--pf-button-text)] transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="border border-[#6f8a60]/30 bg-[#dbe8d2] p-3 text-center text-[#36542d]">
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="border border-red-500/20 bg-red-500/10 p-3 text-center text-red-700">
                {errors?.message || "Failed to send message. Please try again."}
              </div>
            )}
          </form>
        </div>

        <div className="hidden justify-center lg:flex">
          <div className="relative h-[460px] w-full overflow-hidden border border-white/55 bg-[var(--pf-card)] shadow-[0_28px_90px_rgba(39,49,34,0.18)]">
            <Image
              src="/me.jpg"
              alt="Navid Abbaszadeh"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(32,39,28,0.28)_100%)]" />
          </div>
        </div>
      </div>

      <div className="mt-8 w-full text-center">
        <p className="mb-4 text-[var(--pf-muted)]">Or reach out directly</p>
        <div className="flex justify-center space-x-6">
          <Link
            href="mailto:navidrezaabbaszadeh89@gmail.com"
            target="_blank"
            className="text-[var(--pf-accent)] transition-colors hover:text-[var(--pf-heading)]"
            aria-label="Email Navid"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
