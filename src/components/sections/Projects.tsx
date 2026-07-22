"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const projects = [
  {
    image: "/pisa.png",
    name: "Pizza App",
    tag: "Real-time Ordering",
    description:
      "A real-time pizza ordering application with live order tracking, menu customization, and a polished Next.js customer flow.",
    github: "https://github.com/Navidreza80/PizzaApp",
    live: "https://pizarealestateapp.netlify.app/",
    techStack: ["/nextjs.png", "/reactquery.png", "/typescript.png", "/react.png", "/tailwindcss.png"],
  },
  {
    image: "/tradingai.png",
    name: "TradingAI",
    tag: "Full-stack App",
    description:
      "A market dashboard for tracking prices, generating trade signals, and aggregating breaking crypto news in one interface.",
    github: "https://github.com/Navidreza80/TradingAI",
    live: "https://tradingaiapp.netlify.app/",
    techStack: ["/nextjs.png", "/typescript.png", "/react.png", "/tailwindcss.png", "/prisma.png", "/threejs.png"],
  },
  {
    image: "/ideavault.png",
    name: "IdeaVault",
    tag: "AI Product",
    description:
      "A full-stack Next.js application for validating startup ideas with AI-assisted feedback and structured product insight.",
    github: "https://github.com/Navidreza80/IdeaVault",
    live: "https://valai.netlify.app/",
    techStack: ["/nextjs.png", "/typescript.png", "/react.png", "/tailwindcss.png"],
  },
  {
    image: "/notion.png",
    name: "Notion",
    tag: "Real-time Workspace",
    description:
      "A collaborative team workspace with boards, live editing, and Socket.IO-powered real-time interactions.",
    github: "https://github.com/Navidreza80/NotionFrontend",
    techStack: ["/nextjs.png", "/typescript.png", "/prisma.png", "/socket_io.png"],
  },
  {
    image: "/subsify.png",
    name: "Subsify",
    tag: "UX/UI Design",
    description:
      "A subscription management concept designed from scratch to demonstrate product thinking and interface craft.",
    github: "https://github.com/Navidreza80/Subsify",
    live: "https://subsify-app.netlify.app/",
    techStack: ["/nextjs.png", "/typescript.png", "/figma.png", "/tailwindcss.png"],
  },
  {
    image: "/mojito.png",
    name: "Mojito",
    tag: "Motion UI",
    description:
      "A visually rich animation playground where GSAP-driven motion, transitions, and storytelling meet front-end polish.",
    github: "https://github.com/Navidreza80/mojito",
    live: "https://mojitogsapapp.netlify.app/",
    techStack: ["/vite.png", "/react.png", "/gsap.png", "/tailwindcss.png"],
  },
];

const TopProjects = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[var(--pf-bg-soft)] px-4 py-20 text-[var(--pf-text)] sm:px-8 md:px-16 lg:px-24"
    >
      <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        Top Projects
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-[var(--pf-muted)]">
        Selected products where full-stack engineering, real-time data, and
        focused UI work come together.
      </p>

      <div className="relative mx-auto max-w-7xl">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 z-20 -ml-6 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-[var(--pf-border)] bg-[var(--pf-card-strong)] text-[var(--pf-heading)] backdrop-blur-sm transition-all duration-300 hover:bg-white lg:flex"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 z-20 -mr-6 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-[var(--pf-border)] bg-[var(--pf-card-strong)] text-[var(--pf-heading)] backdrop-blur-sm transition-all duration-300 hover:bg-white lg:flex"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 2.2,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={false}
          modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 36 },
          }}
          className="!pb-14 !pt-8"
        >
          {projects.map((item) => (
            <SwiperSlide key={item.name} className="!h-auto">
              <div className="group flex h-full flex-col overflow-hidden border border-[var(--pf-border)] bg-[var(--pf-card)] shadow-[0_20px_70px_rgba(63,77,54,0.12)] backdrop-blur-md transition-all duration-500 hover:border-[var(--pf-accent)]">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--pf-accent-strong)]/70 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 z-10">
                    <span className="border border-white/30 bg-[var(--pf-accent-strong)]/70 px-4 py-2 text-xs text-[var(--pf-button-text)] backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-[var(--pf-heading)]">
                      {item.name}
                    </h3>
                    <div className="flex gap-2">
                      <Link
                        href={item.github}
                        className="border border-[var(--pf-border)] bg-white/35 p-2.5 transition-all duration-300 hover:bg-white"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.name} GitHub repository`}
                      >
                        <Image src="/github.png" alt="" width={18} height={18} />
                      </Link>
                      {item.live && (
                        <Link
                          href={item.live}
                          className="border border-[var(--pf-border)] bg-white/35 p-2.5 transition-all duration-300 hover:bg-white"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${item.name} live demo`}
                        >
                          <Image src="/link.png" alt="" width={18} height={18} />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-[var(--pf-muted)]">
                    {item.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-3">
                    {item.techStack.map((tech) => (
                      <div key={tech} className="relative group/tech">
                        <div className="flex h-9 w-9 items-center justify-center border border-[var(--pf-border)] bg-white/40 transition-all duration-300 hover:bg-white">
                          <Image
                            src={tech}
                            alt=""
                            width={18}
                            height={18}
                            className="object-contain"
                          />
                        </div>
                        <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap border border-[var(--pf-border)] bg-[var(--pf-accent-strong)] px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover/tech:opacity-100">
                          {tech.split("/").pop()?.split(".")[0]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="border border-[var(--pf-border)] bg-transparent px-8 py-3 text-[var(--pf-heading)] transition-all duration-300 hover:bg-[var(--pf-bg-alt)]"
        >
          View More Projects
        </Link>
      </div>
    </section>
  );
};

export default TopProjects;
