import Image from "next/image";
import me from "@/assets/images/me.png";
import Header from "../layouts/Header";
import Github from "../svg/Github";
import X from "../svg/X";
import LinkedIn from "../svg/LinkedIn";
import Telegram from "../svg/Telegram";

const socialMediaLinks = [
  { icon: <Github />, href: "/linkedin" },
  { icon: <X />, href: "/linkedin" },
  { icon: <LinkedIn />, href: "/linkedin" },
  { icon: <Telegram />, href: "/linkedin" },
];

const HeroSection = () => {
  return (
    <div className="h-screen flex justify-center items-start bg-gradient-to-b from-[#000000] to-[#390615] relative flex-wrap">
      <Header />
      <span className="w-[165px] h-[149px] bg-white rounded-full top-0 left-0 absolute blur-[300px]" />
      <span className="w-[165px] h-[149px] bg-white rounded-full top-0 right-0 absolute blur-[300px]" />
      <span className="w-[165px] h-[149px] bg-white rounded-full bottom-0 left-1/2 transform -translate-x-1/2 absolute blur-[300px]" />
      <div className="flex flex-col items-center justify-center">
        <p className="font-extrabold text-[64px] text-white leading-20">
          NAVIDREZA ABBASZADEH
        </p>
        <div className="relative group">
          <Image
            src={me}
            alt="Your Name"
            width={298}
            height={298}
            className="rounded-full border-3 mt-2 border-primary transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/30"
          />
          {/* Animated border */}
          <div className="absolute inset-0 rounded-full border-3 border-transparent group-hover:border-primary/80 transition-all duration-700 ease-in-out group-hover:scale-110 -z-10"></div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md -z-20 group-hover:scale-110"></div>
        </div>
        <div className="flex justify-between my-3 relative z-10 gap-x-1">
          {socialMediaLinks.map((item, index) => (
            <a key={index} href={item.href}>
              {item.icon}
            </a>
          ))}
        </div>
        <button className="bg-primary relative z-10 cursor-pointer hover:bg-primary/90 transition-all duration-300 text-white rounded-2xl font-bold text-[20px] active:scale-95 active:shadow-lg px-14 py-3">
          View Public Projects
        </button>
      </div>
    </div>
  );
};
export default HeroSection;
