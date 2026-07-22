import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/globals.css";
import { Toaster } from "sonner";
import ThemeToggle from "@/components/layouts/ThemeToggle";
import { cookies } from "next/headers";
import { type Theme } from "@/app/actions/Theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Navid Abbaszadeh - Full-stack Developer",
  description:
    "Full-stack developer specializing in NestJS, Node.js, Next.js, real-time systems, and modern web applications.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const theme = (cookieStore.get("portfolio-theme")?.value ?? "dark") as Theme;

  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body data-theme={theme} className="antialiased bg-background font-poppins">
        <Toaster />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
