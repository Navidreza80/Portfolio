import Image from "next/image";
import LinkedIn from "../svg/LinkedIn";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Daniel Carter",
    position: "Senior Developer, TechCorp",
    username: "@daniel.codes",
    comment: "A true problem solver! Made collaboration super smooth.",
    linkedin: "https://linkedin.com/in/danielcarter",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sofia Martinez",
    position: "Lead Designer, CreativeStudio",
    username: "@sofi.designs",
    comment: "Creative, fast, and always delivers beyond expectations.",
    linkedin: "https://linkedin.com/in/sofiamartinez",
  },
  {
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Liam Johnson",
    position: "Product Manager, StartupHub",
    username: "@liam_builds",
    comment: "Turned my idea into a polished product in no time!",
    linkedin: "https://linkedin.com/in/liamjohnson",
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-black px-4 py-16 sm:px-8 md:px-16 lg:px-24">
      {/* Subtle background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-rose-900/5 rounded-full blur-3xl"></div>

      {/* Section title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
        Testimonials
      </h2>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-500 group"
          >
            {/* Quote icon */}
            <div className="text-purple-400 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
            </div>

            {/* Testimonial text */}
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              &quot;{item.comment}&quot;
            </p>

            {/* User info */}
            <div className="flex items-center">
              <Image
                src={item.image}
                width={56}
                height={56}
                alt={item.name}
                className="rounded-full object-cover"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-white font-semibold">{item.name}</h3>
                <p className="text-white/70 text-sm">{item.position}</p>
                <div className="flex items-center mt-1">
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors flex items-center"
                    aria-label={`View ${item.name}'s LinkedIn profile`}
                  >
                    <LinkedIn className="w-4 h-4 mr-1" />
                    <span className="text-xs">Verify on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-rose-500/0 group-hover:from-purple-500/3 group-hover:to-rose-500/3 transition-all duration-500 rounded-xl -z-10"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
