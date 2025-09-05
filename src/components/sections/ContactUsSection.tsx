/* eslint-disable */

"use client";

import { createMessage } from "@/app/actions/CreateMessage";
import ContactUsImage from "@/assets/images/ContactUs.png";
import Image from "next/image";
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
      // Reset form on success
      e.currentTarget.reset();
    } else {
      setStatus("error");
      setErrors(res?.errors);
    }
  }

  return (
    <section className="relative bg-black px-4 py-16 sm:px-8 md:px-16 lg:px-24">
      {/* Subtle background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-rose-900/5 rounded-full blur-3xl"></div>
      <h2 className="text-3xl w-full md:text-4xl font-bold text-white text-center mb-8">
        Get in Touch
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-white/30 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-white/30 focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-white/30 focus:outline-none transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-transparent border border-white/20 text-white py-3 px-6 rounded-lg hover:border-white/40 hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {status === "loading" ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </button>

            {status === "success" && (
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center">
                {errors?.message || "Failed to send message. Please try again."}
              </div>
            )}
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-full h-[400px] bg-black/30 border border-white/10 rounded-2xl overflow-hidden">
            <Image
              src={ContactUsImage}
              alt="Contact illustration"
              fill
              className="object-cover"
            />

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-rose-500/5"></div>
          </div>
        </div>
      </div>
      {/* Alternative contact methods */}
      <div className="mt-8 text-center w-full">
        <p className="text-white/60 mb-4">Or reach out directly</p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:your.email@example.com"
            className="text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            className="text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
