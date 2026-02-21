"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Custom arrow icons
const ArrowLeft = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const projects = [
  {
    image: "/pisa.png",
    name: "Pizza App",
    tag: "Web Application",
    description:
      "A real-time pizza ordering application built with Next.js and React 19 featuring live order tracking, menu customization, and payment integration.",
    github: "https://github.com/Navidreza80/PizzaApp",
    live: "https://pizarealestateapp.netlify.app/",
    techStack: [
      "/nextjs.png",
      "/reactquery.png",
      "/typescript.png",
      "/react.png",
      "/tailwindcss.png",
    ],
  },
  {
    image: "/tradingai.png",
    name: "TradingAI",
    tag: "Fullstack app",
    description:
      "A full-stack powerhouse for tracking prices, generating trade signals, and aggregating breaking crypto news—all in one application.",
    github: "https://github.com/Navidreza80/TradingAI",
    live: "https://tradingaiapp.netlify.app/",
    techStack: [
      "/nextjs.png",
      "/typescript.png",
      "/react.png",
      "/tailwindcss.png",
      "/prisma.png",
      "/threejs.png",
    ],
  },
  {
    image: "/ideavault.png",
    name: "IdeaVault",
    tag: "AI Driven",
    description:
      "Full stack application built with Next.js for validating your startup ideas with AI.",
    github: "https://github.com/Navidreza80/IdeaVault",
    live: "https://valai.netlify.app/",
    techStack: [
      "/nextjs.png",
      "/typescript.png",
      "/react.png",
      "/tailwindcss.png",
    ],
  },
  {
    image: "/notion.png",
    name: "Notion",
    tag: "Real-time",
    description: "Real-time team workspace with boards and live text-editor.",
    github: "https://github.com/Navidreza80/NotionFrontend",
    techStack: [
      "/nextjs.png",
      "/typescript.png",
      "/prisma.png",
      "/socket_io.png",
    ],
  },
  {
    image: "/subsify.png",
    name: "Subsify",
    tag: "UX/UI Design",
    description:
      "I designed this app entirely from scratch to demonstrate my UX/UI design expertise.",
    github: "https://github.com/Navidreza80/Subsify",
    live: "https://subsify-app.netlify.app/",
    techStack: [
      "/nextjs.png",
      "/typescript.png",
      "/figma.png",
      "/tailwindcss.png",
    ],
  },
  {
    image: "/mojito.png",
    name: "Mojito",
    tag: "Motion & Animation",
    description:
      "Mojito is a visually rich, animation-focused web app where motion meets design. It serves as a playground for expressive UI transitions, smooth interactions, and dynamic storytelling through code..",
    github: "https://github.com/Navidreza80/mojito",
    live: "https://mojitogsapapp.netlify.app/",
    techStack: [
      "/vite.png",
      "/react.png",
      "/gsap.png",
      "/tailwindcss.png",
    ],
  },
];

const TopProjects = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black px-4 py-16 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/5 to-rose-600/5 rounded-full blur-3xl"></div>

      {/* Section Title with animation */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
        Top Projects
      </h2>

      {/* Custom Navigation Buttons */}
      <div className="relative max-w-7xl mx-auto">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hidden lg:flex items-center justify-center -ml-6 group"
          aria-label="Previous slide"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hidden lg:flex items-center justify-center -mr-6 group"
          aria-label="Next slide"
        >
          <ArrowRight />
        </button>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
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
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="!pb-14 !pt-8"
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col h-full hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Project image with overlay gradient */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Project tag with glass effect */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black/60 backdrop-blur-md text-white/90 text-xs px-4 py-2 rounded-full border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  {/* Animated border gradient on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-all duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col relative">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-rose-500/0 group-hover:from-purple-500/5 group-hover:to-rose-500/5 transition-all duration-500 rounded-2xl"></div>

                  <div className="relative">
                    {/* Title and links */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-rose-400 group-hover:bg-clip-text transition-all duration-300">
                        {item.name}
                      </h3>
                      <div className="flex gap-2">
                        <Link
                          href={item.github}
                          className="p-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white hover:border-white transition-all duration-300 group/link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub repository"
                        >
                          <Image
                            src="/github.png"
                            alt="GitHub"
                            width={18}
                            height={18}
                            className="opacity-80 group-hover/link:opacity-100 transition-opacity"
                          />
                        </Link>
                        {item.live && (
                          <Link
                            href={item.live}
                            className="p-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white hover:border-white transition-all duration-300 group/link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live demo"
                          >
                            <Image
                              src="/link.png"
                              alt="Live demo"
                              width={18}
                              height={18}
                              className="opacity-80 group-hover/link:opacity-100 transition-opacity"
                            />
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Description with animated gradient text on hover */}
                    <p className="text-white/60 text-sm leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Tech stack with tooltip effect */}
                    <div className="flex flex-wrap gap-3">
                      {item.techStack.map((tech, i) => (
                        <div key={i} className="relative group/tech">
                          <div className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-white/5 hover:border-white/20">
                            <Image
                              src={tech}
                              alt="Technology"
                              width={18}
                              height={18}
                              className="object-contain"
                            />
                          </div>
                          {/* Tooltip */}
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-white/10">
                            {tech.split("/").pop()?.split(".")[0]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* View More Button with enhanced styling */}
      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="bg-transparent border border-white/20 text-white rounded-lg px-8 py-3 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
        >
          View More Projects
        </Link>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TopProjects;
