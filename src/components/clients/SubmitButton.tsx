"use client";
import { Send } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full bg-primary cursor-pointer text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-hover transition"
    >
      {pending ? "Sending..." : "Send Message"} <Send className="w-5 h-5" />
    </button>
  );
}
