import { ProjectCardProps } from "@/types";
import { ProjectCard } from "../clients/ProjectCard";

const projects: ProjectCardProps["project"][] = [
  {
    slug: "ecommerce-platform",
    title: "Premium E-Commerce Solution",
    description:
      "High-performance online store with 99.9% uptime and 300ms page loads. Increased conversions by 40%.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    image: "/projects/ecommerce.jpg",
    blurDataURL: "data:image/jpeg;base64,...",
    link: "/projects/ecommerce-platform",
    publishedDate: "2023-06-15",
    isFeatured: true,
    client: "Luxury Brands Inc.",
    category: "E-Commerce",
    duration: "3 months",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
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
