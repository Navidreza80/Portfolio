import { cookies } from "next/headers";
import { type Theme } from "@/app/actions/Theme";
import Header from "./Header";

export default async function HeaderWrapper() {
  const cookieStore = await cookies();
  const theme = (cookieStore.get("portfolio-theme")?.value ?? "dark") as Theme;

  return <Header theme={theme} />;
}