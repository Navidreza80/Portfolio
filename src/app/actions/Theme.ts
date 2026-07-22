"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export type Theme = "dark" | "light" | "purple" | "rose" | "ocean";

export async function setThemeAction(formData: FormData) {
  const theme = formData.get("theme") as Theme;
  const valid: Theme[] = ["dark", "light", "purple", "rose", "ocean"];
  if (!valid.includes(theme)) return;

  const cookieStore = await cookies();
  cookieStore.set("portfolio-theme", theme, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: false,
    sameSite: "lax",
  });

  revalidatePath("/");
}
