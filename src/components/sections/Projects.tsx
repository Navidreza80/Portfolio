import Github from "@/assets/images/github.png";
import Leaflet from "@/assets/images/leaflet.png";
import LinkIcon from "@/assets/images/link.png";
import NextJS from "@/assets/images/nextLight.png";
import Pizza from "@/assets/images/pizzaAppDark.png";
import TradingAI from "@/assets/images/tradingAIAppDark.png";
import React from "@/assets/images/react.png";
import ReactQuery from "@/assets/images/ReactQuery.png";
import Tailwind from "@/assets/images/tailwindcss.png";
import TS from "@/assets/images/typescript.png";
import Image from "next/image";
import Link from "next/link";
import { Lens } from "../magicui/lens";
import { Marquee } from "../magicui/marquee";
import { TypingAnimation } from "../magicui/typing-animation";
import Prisma from "@/assets/images/prisma.png";
import Three from "@/assets/images/ThreeJs.png";
import IdeaVault from "@/assets/images/ideavault.png";

const projects = [
  {
    image: Pizza,
    name: "Pizza App",
    tag: "Web Application",
    description:
      "A real-time pizza ordering application built with Next.js and React 19 featuring live order tracking, menu customization, and payment integration.",
    github: "https://github.com/Navidreza80/PizzaApp",
    live: "https://pizarealestateapp.netlify.app/",
    techStack: [NextJS, ReactQuery, TS, React, Tailwind, Leaflet],
  },
  {
    image: TradingAI,
    name: "TradingAI",
    tag: "Fullstack app",
    description:
      "A full-stack powerhouse for tracking prices, generating trade signals, and aggregating breaking crypto news—all in one application.",
    github: "https://github.com/Navidreza80/TradingAI",
    live: "https://tradingaiapp.netlify.app/",
    techStack: [NextJS, TS, React, Tailwind, Prisma, Three],
  },
  {
    image: IdeaVault,
    name: "IdeaVault",
    tag: "AI Driven",
    description:
      "Full stack aplication built with Next.js for validating your startup ideas with AI. ",
    github: "https://github.com/Navidreza80/IdeaVault",
    live: "https://valai.netlify.app/",
    techStack: [NextJS, TS, React, Tailwind],
  },
];

const TopProjects = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-[#000000] to-[#390615] px-4 py-10 sm:px-10 md:px-16">
      {/* Glowing background spots */}
      <span className="w-[165px] h-[149px] bg-white rounded-full top-0 left-0 absolute blur-[300px]" />
      <span className="w-[165px] h-[149px] bg-white rounded-full top-0 right-0 absolute blur-[300px]" />
      <span className="w-[165px] h-[149px] bg-white rounded-full bottom-0 left-1/2 transform -translate-x-1/2 absolute blur-[300px]" />

      {/* Section Title */}
      <TypingAnimation className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold mb-8 text-white w-full text-center">
        Top Projects
      </TypingAnimation>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1280px]">
        {projects.map((item, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl h-[480px] flex flex-col items-center relative overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 md:w-full w-full mx-auto sm:mx-0"
          >
            {/* Image Container */}
            <div className="border-2 border-primary/30 w-[95%] absolute left-1/2 top-4 transform -translate-x-1/2 h-[220px] rounded-2xl flex items-center bg-black/90 overflow-hidden group-hover:border-primary/80 transition-all duration-300">
              {/* Rainbow animated gradient */}
              <div className="absolute left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md bg-[conic-gradient(from_var(--angle),red_0%,yellow_15%,lime_30%,cyan_45%,blue_60%,magenta_75%,red_100%)] animate-[spin_4s_linear_infinite]" />

              {/* Lens zoom effect */}
              <Lens
                zoomFactor={2.5}
                lensSize={180}
                isStatic={false}
                ariaLabel="Zoom Area"
              >
                <Image
                  src={item.image}
                  width={500}
                  height={600}
                  alt={item.name}
                  className="flex-1 w-full h-full object-cover relative z-10"
                  priority
                />
              </Lens>

              {/* Tag badge */}
              <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs px-2 py-1 rounded-full z-20 backdrop-blur-sm flex items-center justify-center font-semibold">
                {item.tag}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col w-[95%] mt-[250px] z-10">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  {item.name}
                </h3>

                <div className="flex gap-3">
                  <Link
                    href={item.github}
                    className="p-1.5 rounded-full bg-white hover:bg-white/90 transition-colors duration-200 hover:scale-110"
                    aria-label="View on GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={Github} alt="github" width={20} height={20} />
                  </Link>
                  <Link
                    href={item.live}
                    className="p-1.5 rounded-full bg-white hover:bg-white/90 transition-colors duration-200 hover:scale-110"
                    aria-label="Live Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={LinkIcon} alt="link" width={20} height={20} />
                  </Link>
                </div>
              </div>

              <p className="font-medium text-sm text-gray-300 mt-3 leading-relaxed min-h-[80px]">
                {item.description}
              </p>

              {/* Tech stack marquee */}
              <div className="mt-4 relative">
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-card to-transparent z-20" />
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-card to-transparent z-20" />

                <Marquee pauseOnHover className="[--duration:20s] py-2">
                  {item.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="mx-2 flex items-center justify-center w-8 h-8 hover:scale-125 transition-transform duration-200"
                      data-tooltip={tech}
                    >
                      <Image
                        alt={"Tech Icon"}
                        width={32}
                        height={32}
                        src={tech}
                        className="hover:drop-shadow-[0_0_8px_rgba(100,255,255,0.6)] transition-all"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>

            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZmZmZiIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+')]" />
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="bg-primary mt-10 cursor-pointer hover:bg-primary/90 transition-all duration-300 text-white rounded-2xl font-bold text-[18px] md:text-[20px] px-10 md:px-14 py-3 active:scale-95">
        View More Projects
      </button>
    </div>
  );
};

export default TopProjects;
