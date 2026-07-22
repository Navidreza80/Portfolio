const skillGroups = [
  {
    title: "Backend",
    items: ["NestJS", "Node.js", "Express", "Fastify", "FastAPI", "Django", "Laravel"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "Angular", "Vue", "React Native", "TypeScript"],
  },
  {
    title: "Product Systems",
    items: ["WebSockets", "Socket.IO", "REST APIs", "Prisma", "Mongoose", "Redis"],
  },
  {
    title: "Delivery",
    items: ["CI/CD", "Docker", "GitHub Actions", "Supabase", "Leaflet", "i18n"],
  },
];

const Testimonials = () => {
  return (
    <section id="skills" className="relative bg-[var(--pf-bg-soft)] px-4 py-20 text-[var(--pf-text)] sm:px-8 md:px-16 lg:px-24">
      <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        Technical Stack
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--pf-muted)]">
        A practical toolkit for shipping full-stack applications with strong
        real-time behavior, clean interfaces, and reliable deployment.
      </p>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="border border-[var(--pf-border)] bg-[var(--pf-card)] p-6 shadow-[0_18px_60px_rgba(72,83,62,0.08)] backdrop-blur-sm"
          >
            <h3 className="mb-5 text-xl font-semibold text-[var(--pf-heading)]">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border border-[var(--pf-border)] bg-white/35 px-3 py-2 text-sm text-[var(--pf-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
