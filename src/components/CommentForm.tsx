"use client";

import { loginUser, registerUser } from "@/app/actions/Auth";
import { submitComment } from "@/app/actions/Comments";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export function CommentForm({
  postId,
  isLoggedInInitial,
}: {
  postId: string;
  isLoggedInInitial: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInInitial);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    comment: "",
  });

  const handleLogin = () => {
    startTransition(async () => {
      try {
        await loginUser(form.email, form.password);
        toast.success("Logged in successfully");
        setIsLoggedIn(true);
      } catch {
        toast.error("Login failed");
      }
    });
  };

  const handleSignup = () => {
    startTransition(async () => {
      try {
        await registerUser(form.email, form.password, form.name);
        toast.success("Account created & logged in");
        setIsLoggedIn(true);
      } catch {
        toast.error("Signup failed");
      }
    });
  };

  const handleSubmitComment = () => {
    startTransition(async () => {
      try {
        await submitComment(postId, form.comment);
        router.refresh();
        toast.success("Comment added successfully");
        setForm((f) => ({ ...f, comment: "" }));
      } catch {
        toast.error("Error");
      }
    });
  };

  return (
    <div className="mt-6 pt-6">
      {!isLoggedIn ? (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            {mode === "login" ? "Login to Comment" : "Sign Up to Comment"}
          </h3>

          {mode === "signup" && (
            <input
              type="text"
              placeholder="Name"
              className="border rounded px-3 py-2 w-full"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2 w-full"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="border rounded px-3 py-2 w-full"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            onClick={mode === "login" ? handleLogin : handleSignup}
            disabled={isPending}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded w-full"
          >
            {isPending
              ? mode === "login"
                ? "Logging in..."
                : "Signing up..."
              : mode === "login"
              ? "Login"
              : "Sign Up"}
          </button>

          <p className="text-sm text-center text-purple-300/70">
            {mode === "login" ? (
              <>
                Don’t have an account?{" "}
                <button
                  type="button"
                  className="text-purple-400 hover:underline"
                  onClick={() => setMode("signup")}
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-purple-400 hover:underline"
                  onClick={() => setMode("login")}
                >
                  Login
                </button>
              </>
            )}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <textarea
            placeholder="Write your comment..."
            className="border rounded px-3 py-2 w-full"
            rows={3}
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
          />
          <button
            onClick={handleSubmitComment}
            disabled={isPending}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
          >
            {isPending ? "Submitting..." : "Submit Comment"}
          </button>
        </div>
      )}
    </div>
  );
}
