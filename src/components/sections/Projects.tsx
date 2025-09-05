import Image from "next/image";
import Link from "next/link";

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
];

const TopProjects = () => {
  return (
    <section className="relative min-h-screen bg-black px-4 py-16 sm:px-8 md:px-16 lg:px-24">
      {/* Subtle background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-rose-900/5 rounded-full blur-3xl"></div>

      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
        Top Projects
      </h2>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((item, index) => (
          <div
            key={index}
            className="group bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col"
          >
            {/* Project image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                {item.tag}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {item.name}
                </h3>
                <div className="flex gap-2">
                  <Link
                    href={item.github}
                    className="p-2 rounded-lg bg-white hover:bg-white/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                  >
                    <Image
                      src="/github.png"
                      alt="GitHub"
                      width={16}
                      height={16}
                    />
                  </Link>
                  <Link
                    href={item.live}
                    className="p-2 rounded-lg bg-white hover:bg-white/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                  >
                    <Image
                      src="/link.png"
                      alt="Live demo"
                      width={16}
                      height={16}
                    />
                  </Link>
                </div>
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-6 flex-1">
                {item.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {item.techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Image
                      src={tech}
                      alt="Technology"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-rose-500/0 group-hover:from-purple-500/5 group-hover:to-rose-500/5 transition-all duration-500 -z-10"></div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <button className="bg-transparent border border-white/20 text-white rounded-lg px-8 py-3 hover:border-white/40 hover:bg-white/5 transition-all duration-300">
          View More Projects
        </button>
      </div>
    </section>
  );
};

export default TopProjects;
