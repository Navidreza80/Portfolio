"use client";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PizaAppDark from "../../../public/images/pizzaAppDark.png";
import TradingAIAppDark from "../../../public/images/tradingAIAppDark.png";
import ThreeJsAppDark from "../../../public/images/threeJsAppDark.png";
import { AnimatedIcon } from "./AnimatedIcon";
import React from "../../../public/images/react.png";
import TailwindCss from "../../../public/images/tailwindcss.png";
import ThreeJs from "../../../public/images/ThreeJs.png";
import Vite from "../../../public/images/Vite.png";
import NextJs from "../../../public/images/NextJs.png";
import TypeScript from "../../../public/images/typescript.png";
import ReactQuery from "../../../public/images/ReactQuery.png";
import Js from "../../../public/images/js.png";
import Leaflet from "../../../public/images/leaflet.png";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import Prisma from "../../../public/images/prisma.png";

const PhotoSwiper = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const projects = [
    {
      image: PizaAppDark,
      techStack: [
        { image: NextJs, className: "bg-white rounded-full object-cover" },
        { image: TypeScript },
        { image: TailwindCss },
        { image: ReactQuery },
        { image: Leaflet },
      ],
    },
    {
      image: TradingAIAppDark,
      techStack: [
        { image: NextJs, className: "bg-white rounded-full object-cover" },
        { image: TypeScript },
        { image: TailwindCss },
        { image: ThreeJs },
        { image: Leaflet },
        { image: Prisma, className: "bg-white rounded-full object-cover" },
      ],
    },
    {
      image: ThreeJsAppDark,
      techStack: [
        { image: Vite },
        { image: TailwindCss },
        { image: ThreeJs },
        { image: React },
        { image: Js },
      ],
    },
  ];
  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl group"
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={false}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={`Project ${i + 1}`}
                fill
                className="w-full h-full rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/70 dark:bg-black/30 backdrop-blur-md h-16 px-6 flex justify-center items-center gap-6 rounded-b-2xl border-t border-border">
                {project.techStack?.map((item, index) => (
                  <AnimatedIcon
                    key={index}
                    src={item.image}
                    className={item.className || ""}
                    width={36}
                    height={36}
                    alt="Tech Icon"
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default PhotoSwiper;
