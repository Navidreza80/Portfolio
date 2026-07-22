import { cookies } from "next/headers";
import ThemeToggleClient from "./ThemeToggleClient";
import { type Theme } from "@/app/actions/Theme";

export default async function ThemeToggle() {
  const cookieStore = await cookies();
  const current = (cookieStore.get("portfolio-theme")?.value ?? "dark") as Theme;

  return <ThemeToggleClient current={current} />;
}