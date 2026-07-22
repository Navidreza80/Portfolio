"use client";

import { useState, useEffect, useRef } from "react";
import { setThemeAction, type Theme } from "@/app/actions/Theme";

const themes: { id: Theme; label: string; bg: string; accent: string; dot: string }[] = [
  { id: "dark", label: "Mist", bg: "#e7e8df", accent: "#596d4a", dot: "linear-gradient(135deg, #eef0e7, #9aa48a)" },
  { id: "light", label: "Lake", bg: "#eef0e7", accent: "#6b7b62", dot: "linear-gradient(135deg, #dfe6db, #789084)" },
  { id: "purple", label: "Moss", bg: "#dfe4d7", accent: "#526b3f", dot: "linear-gradient(135deg, #cbd6bf, #526b3f)" },
  { id: "rose", label: "Bark", bg: "#e5e0d5", accent: "#786f5f", dot: "linear-gradient(135deg, #d7d1c3, #6f6b5f)" },
  { id: "ocean", label: "Rain", bg: "#d9e0d8", accent: "#5a756d", dot: "linear-gradient(135deg, #d9e0d8, #5a756d)" },
];

export default function ThemeToggleClient({ current }: { current: Theme }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = themes.find((t) => t.id === current) ?? themes[0];
  const others = themes.filter((t) => t.id !== current);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* ── Expanded panel ── */}
      <div
        style={{
          maxHeight: open ? `${others.length * 56 + 80}px` : "0px",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
          pointerEvents: open ? "auto" : "none",
          transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "rgba(10,10,12,0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            boxShadow: "0 24px 48px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.04) inset",
          }}
        >
          {others.map((t, i) => (
            <form key={t.id} action={setThemeAction}>
              <input type="hidden" name="theme" value={t.id} />
              <button
                type="submit"
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  padding: "8px 12px 8px 8px",
                  borderRadius: "10px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  transition: "background 0.15s ease",
                  animationDelay: `${i * 40}ms`,
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                {/* Color swatch */}
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "8px",
                    background: t.dot,
                    flexShrink: 0,
                    boxShadow: `0 0 0 1px rgba(255,255,255,0.12), 0 4px 8px rgba(0,0,0,0.4)`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* shimmer strip */}
                  <span style={{
                    position: "absolute", top: 0, left: 0, right: 0,
                    height: "40%", background: "rgba(255,255,255,0.12)",
                    borderRadius: "8px 8px 0 0",
                  }} />
                </span>

                {/* Label + subtitle */}
                <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.9)", lineHeight: 1.2, letterSpacing: "0.01em" }}>
                    {t.label}
                  </span>
                  <span style={{ fontSize: "11px", color: t.accent, lineHeight: 1.3, marginTop: "1px", opacity: 0.85 }}>
                    {t.id}
                  </span>
                </span>

                {/* Check placeholder — keeps alignment */}
                <span style={{ marginLeft: "auto", width: "14px" }} />
              </button>
            </form>
          ))}

          {/* Divider + current theme row */}
          <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "4px 0" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "6px 12px 4px 8px" }}>
            <span
              style={{
                width: "28px", height: "28px", borderRadius: "8px",
                background: active.dot, flexShrink: 0, position: "relative", overflow: "hidden",
                boxShadow: `0 0 0 2px ${active.accent}55, 0 4px 8px rgba(0,0,0,0.4)`,
              }}
            >
              <span style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: "40%", background: "rgba(255,255,255,0.12)", borderRadius: "8px 8px 0 0",
              }} />
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.45)", lineHeight: 1.2 }}>
                {active.label}
              </span>
              <span style={{ fontSize: "11px", color: active.accent, opacity: 0.6, lineHeight: 1.3, marginTop: "1px" }}>
                active
              </span>
            </span>
            {/* Active checkmark */}
            <span style={{ marginLeft: "auto" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7L5.5 10L11.5 4" stroke={active.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* ── Trigger button ── */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle theme switcher"
        aria-expanded={open}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "0 16px 0 6px",
          height: "44px",
          borderRadius: "100px",
          border: `1px solid ${open ? active.accent + "55" : "rgba(255,255,255,0.10)"}`,
          background: open
            ? `rgba(10,10,12,0.92)`
            : "rgba(10,10,12,0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          cursor: "pointer",
          boxShadow: open
            ? `0 0 0 3px ${active.accent}22, 0 16px 32px rgba(0,0,0,0.4)`
            : "0 8px 24px rgba(0,0,0,0.35)",
          transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Active swatch dot */}
        <span
          style={{
            width: "32px", height: "32px", borderRadius: "50%",
            background: active.dot, flexShrink: 0,
            boxShadow: `0 0 0 1px rgba(255,255,255,0.15)`,
            position: "relative", overflow: "hidden",
            transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
            transform: open ? "scale(1.08)" : "scale(1)",
          }}
        >
          <span style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: "45%", background: "rgba(255,255,255,0.15)", borderRadius: "50% 50% 0 0",
          }} />
        </span>

        {/* Label */}
        <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.75)", letterSpacing: "0.01em", whiteSpace: "nowrap" }}>
          {active.label}
        </span>

        {/* Chevron */}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          style={{
            color: "rgba(255,255,255,0.35)",
            transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            marginLeft: "2px",
          }}
        >
          <path d="M2 4.5L6 8L10 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

    </div>
  );
}
