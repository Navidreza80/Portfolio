/* eslint-disable */

"use client";

import React, { useState } from "react";
import { createMessage } from "@/app/actions/CreateMessage";

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
    <div className="bg-gradient-to-b from-[#000000] to-[#390615] w-full">
      <section className="max-w-lg mx-auto p-6  rounded-xl text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="flex flex-col">
            <span className="mb-1 font-semibold">Name</span>
            <input
              type="text"
              name="name"
              required
              className="p-3 rounded bg-black text-white border border-gray-700 focus:border-primary focus:outline-none transition"
              placeholder="Your name"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 font-semibold">Email</span>
            <input
              type="email"
              name="email"
              required
              className="p-3 rounded bg-black text-white border border-gray-700 focus:border-primary focus:outline-none transition"
              placeholder="you@example.com"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 font-semibold">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="p-3 rounded bg-black text-white border border-gray-700 focus:border-primary focus:outline-none transition"
              placeholder="Write your message..."
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-primary hover:bg-primary/90 transition-colors font-semibold py-3 rounded-md disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center mt-2">
              Message sent successfully! 🎉
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-center mt-2">
              Failed to send message. Try again.
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
