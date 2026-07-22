import Github from "@/components/svg/Github";
import Telegram from "@/components/svg/Telegram";
import X from "@/components/svg/X";
import Image from "next/image";
import Link from "next/link";

const socialMediaLinks = [
  { icon: <Github />, href: "https://github.com/Navidreza80?tab=repositories" },
  { icon: <X />, href: "https://x.com/Navidreza008" },
  { icon: <Telegram />, href: "https://t.me/Navidreze880" },
];

export default async function HeroSection() {
  return (
    <div className="hero-section relative min-h-[calc(100vh-60px)] overflow-hidden bg-[var(--pf-bg)] text-[var(--pf-text)]">
      <Image
        src="/me.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[var(--pf-photo-opacity)] blur-[2px] saturate-75"
      />
      <div className="pf-hero-bg absolute inset-0" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-60px)] w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1fr_0.82fr] lg:px-12">
        <div className="max-w-3xl animate-blur-in delay-100">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--pf-accent)]">
            Full-stack developer - 4+ years
          </p>
          <h1 className="font-bold text-5xl leading-[0.98] tracking-tight text-[var(--pf-heading)] sm:text-6xl lg:text-7xl">
            Navid Abbaszadeh
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--pf-muted)] sm:text-xl">
            I build modern web applications with NestJS, Node.js, and Next.js,
            taking products from architecture and real-time systems to clean
            deployment pipelines.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm text-[var(--pf-muted)]">
            {["Next.js", "NestJS", "WebSockets"].map((item) => (
              <span
                key={item}
                className="border border-[var(--pf-border)] bg-white/30 px-3 py-2 text-center backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="border border-[var(--pf-button)] bg-[var(--pf-button)] px-7 py-3 text-sm font-semibold text-[var(--pf-button-text)] transition-all duration-300 hover:opacity-90"
            >
              View Resume
            </Link>
            <Link
              href="#contact"
              className="border border-[var(--pf-border)] bg-white/20 px-7 py-3 text-sm font-semibold text-[var(--pf-heading)] backdrop-blur-md transition-all duration-300 hover:bg-white/40"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-8 flex gap-4">
            {socialMediaLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--pf-accent)] transition-colors duration-200 hover:text-[var(--pf-heading)]"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] animate-scale-in delay-300 md:justify-self-end">
          <div className="relative aspect-[4/5] overflow-hidden border border-white/50 bg-[var(--pf-card)] shadow-[0_28px_90px_rgba(39,49,34,0.22)]">
            <Image
              src="/me.jpg"
              alt="Navid Abbaszadeh standing by a calm lake and misty forest"
              fill
              priority
              sizes="(min-width: 768px) 420px, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(32,39,28,0.22)_100%)]" />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 border border-white/45 bg-[var(--pf-card-strong)] p-4 backdrop-blur-xl">
            <p className="text-sm font-semibold text-[var(--pf-heading)]">
              Remote full-stack engineer
            </p>
            <p className="mt-1 text-xs leading-5 text-[var(--pf-muted)]">
              Italy, Estonia, and Iran experience across product, platform, and
              education teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
