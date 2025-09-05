import me from "@/assets/images/me.png";
import Image from "next/image";
import Header from "../layouts/Header";
import { BorderBeam } from "../magicui/border-beam";
import Github from "../svg/Github";
import LinkedIn from "../svg/LinkedIn";
import Telegram from "../svg/Telegram";
import X from "../svg/X";

const socialMediaLinks = [
  { icon: <Github />, href: "/github" },
  { icon: <X />, href: "/twitter" },
  { icon: <LinkedIn />, href: "/linkedin" },
  { icon: <Telegram />, href: "/telegram" },
];

const HeroSection = async () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0D0D0D] to-[#1A0011] opacity-90"></div>

      {/* Minimal background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rose-900/10 rounded-full blur-3xl"></div>

      <Header />

      <div className="flex-1 flex flex-col items-center justify-center w-full px-4 z-10">
        {/* Name with subtle animation */}
        <h1 className="font-bold text-3xl md:text-5xl text-white text-center mb-6 tracking-tight">
          NAVIDREZA
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">
            ABBASZADEH
          </span>
        </h1>

        {/* Profile image with simplified effects */}
        <div className="relative mb-8">
          <div className="rounded-full p-1 bg-gradient-to-r from-purple-500 to-rose-500">
            <Image
              src={me.src}
              alt="Navidreza Abbaszadeh"
              width={220}
              height={220}
              className="rounded-full border-2 border-black"
            />
            <BorderBeam
              duration={10}
              size={180}
              colorFrom="#A78BFA"
              colorTo="#F472B6"
            />
          </div>
        </div>

        {/* Social links - minimal style */}
        <div className="flex justify-center mb-8 gap-5">
          {socialMediaLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Minimal button */}
        <button className="bg-transparent border border-white/20 hover:border-white/40 transition-all duration-300 text-white rounded-lg font-medium text-base px-8 py-3 hover:bg-white/5">
          View Public Projects
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
