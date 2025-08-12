import me from "@/assets/images/me.png";
import Image from "next/image";
import Header from "../layouts/Header";
import { BorderBeam } from "../magicui/border-beam";
import { Meteors } from "../magicui/meteors";
import { TypingAnimation } from "../magicui/typing-animation";
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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#000000] to-[#390615] relative overflow-hidden">
      <Meteors number={30} />
      {/* Background blobs - unchanged */}
      <span className="w-[165px] h-[149px] bg-white rounded-full top-0 left-0 absolute blur-[300px]" />
      <span className="w-[165px] h-[149px] bg-white rounded-full top-0 right-0 absolute blur-[300px]" />
      <span className="w-[165px] h-[149px] bg-white rounded-full bottom-0 left-1/2 transform -translate-x-1/2 absolute blur-[300px]" />

      <Header />

      <div className="flex-1 flex flex-col items-center justify-center w-full px-4">
        {/* Name text - made responsive */}
        <TypingAnimation className="font-extrabold text-[40px] md:text-[64px] text-white text-center leading-tight">
          NAVIDREZA ABBASZADEH
        </TypingAnimation>

        {/* Profile image - unchanged */}
        <div className="relative group rounded-full">
          <BorderBeam duration={8} size={200} />
          <Image
            unoptimized
            src={me}
            alt="Navidreza Abbaszadeh"
            width={298}
            height={298}
            className="rounded-full border-3 mt-2 border-primary transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/30"
            priority
          />
          <div className="absolute inset-0 rounded-full border-3 border-transparent group-hover:border-primary/80 transition-all duration-700 ease-in-out group-hover:scale-110 -z-10"></div>
          <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md -z-20 group-hover:scale-110"></div>
        </div>

        {/* Social links - unchanged */}
        <div className="flex justify-between my-6 relative z-10 gap-x-4">
          {socialMediaLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Button */}
        <button className="bg-primary cursor-pointer hover:bg-primary/90 transition-all duration-300 text-white rounded-2xl font-bold text-[18px] md:text-[20px] px-10 md:px-14 py-3 active:scale-95">
          View Public Projects
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
