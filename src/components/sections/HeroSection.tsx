import Link from "next/link";
import PhotoSwiper from "../clients/PhotoSwiper";
import { ArrowDown } from "lucide-react";

export default async function HeroSection() {
  return (
    <section
      className="relative bg-hero-gradient text-foreground min-h-screen flex items-center justify-center px-6 lg:px-24"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
        {/* Text Section */}
        <div>
          <p className="text-xl lg:text-lg text-primary font-light font-mono">
            {`Hello I'm`}
          </p>
          <h1 className="text-5xl mt-2 lg:text-6xl leading-14 font-black">
            Navidreza Abbaszadeh
          </h1>
          <p className="mt-2 text-xl lg:text-xl text-primary font-normal font-mono">
            a Web Developer
          </p>
          <p className="mt-2 text-muted text-base lg:text-lg max-w-md font-semibold">
            Specializing in modern web technologies like React.js, Next.js, and
            TypeScript. I create performant, scalable, and elegant web
            applications.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="#projects"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="border border-border text-foreground px-6 py-3 rounded-lg hover:bg-card transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="h-full flex flex-col items-center justify-end gap-6 relative">
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <PhotoSwiper />
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground animate-bounce">
          <ArrowDown />

          <span className="text-sm font-mono">Scroll</span>
        </div>
      </div>
    </section>
  );
}
