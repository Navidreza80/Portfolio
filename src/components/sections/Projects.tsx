import { ProjectCardProps } from "@/types";
import { ProjectCard } from "../clients/ProjectCard";

const projects: ProjectCardProps["project"][] = [
  {
    slug: "ecommerce-platform",
    title: "Piza: Smart Property Booking & Rentals",
    description:
      "Piza is a fast, modern real estate and booking platform built with Next.js, TypeScript, and Tailwind CSS. It combines property listings and hotel reservations into one seamless experience — optimized for performance, SEO, and responsive design.",
    tags: ["Next.js", "TypeScript", "Leaflet", "Tailwind"],
    link: "https://pizarealestateapp.netlify.app/en",
    image: "/images/pizzaAppDark.png",
    blurDataURL: "data:image/jpeg;base64,...",
    publishedDate: "2023-06-15",
    isFeatured: true,
    client: "Luxury Brands Inc.",
    category: "E-Commerce",
    duration: "3 months",
  },
];

export const ProjectsSection = async () => {
  return (
    <section
      id="projects"
      className="px-4 sm:px-6 lg:px-8 bg-background-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto text-muted">
            Here are some of my featured works. Each project represents unique
            challenges and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
