import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Gauge, User } from "lucide-react";

export default function AboutMe() {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="relative py-24 px-6 lg:px-24 border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sticky Image Column */}
          <div className="md:w-1/2">
            <div className="sticky top-24 h-[calc(100vh-200px)] flex items-center">
              <div className="relative w-full h-full max-h-[500px] rounded-xl overflow-hidden shadow-2xl border border-border/50">
                <Image
                  src="/me.png"
                  alt="Navidreza Abbaszadeh at work"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Scrollable Content Column */}
          <div className="md:w-1/2 space-y-24">
            {/* About Content */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Crafting <span className="text-primary">Digital</span>{" "}
                  Excellence
                </h2>
              </div>

              <div className="space-y-6 text-muted">
                <p className="text-lg leading-relaxed">
                  As a{" "}
                  <span className="font-semibold text-primary">
                    full-stack engineer
                  </span>{" "}
                  with {new Date().getFullYear() - 2020}+ years in the field, I
                  specialize in building performant, accessible web applications
                  that deliver exceptional user experiences.
                </p>

                <p className="text-lg leading-relaxed">
                  My philosophy blends{" "}
                  <span className="font-mono text-sm bg-secondary/20 px-2 py-1 rounded text-primary">
                    {"<cleanCode/>"}
                  </span>{" "}
                  with{" "}
                  <span className="font-mono text-sm bg-secondary/20 px-2 py-1 rounded text-primary">
                    {"userCentricDesign"}
                  </span>
                  , ensuring solutions that are both technically robust and
                  intuitively designed.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <Code
                    className="w-7 h-7 text-foreground transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <span className="text-foreground font-bold">
                    Technical Skills
                  </span>
                </h3>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Server Side",
                    "Tailwind CSS",
                    "Node.js",
                    "GraphQL / Apollo",
                    "PostgreSQL",
                    "WebAssembly",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="group cursor-pointer flex items-center gap-3 px-4 py-3 bg-muted/20 dark:bg-muted/10 rounded-xl border border-border hover:border-primary/70 focus-within:border-primary/70 shadow-sm hover:shadow-md dark:hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      tabIndex={0}
                      role="listitem"
                      aria-label={`Skill: ${skill}`}
                    >
                      <span className="w-3 h-3 mt-0.5 rounded-full bg-gradient-to-r from-primary to-accent opacity-90 group-hover:opacity-100 group-focus:opacity-100 group-hover:scale-125 group-focus:scale-125 transition-all duration-300" />
                      <span className="text-foreground font-medium group-hover:text-primary group-focus:text-primary transition-colors duration-300 text-sm sm:text-base">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Link
                  href="/resume.pdf"
                  download="Navidreza-Abbaszadeh-Resume.pdf"
                  className="inline-flex items-center group font-medium"
                  aria-label="Download resume"
                >
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Explore My Résumé
                  </span>
                  <ArrowRight
                    className="ml-2 w-4 h-4 text-primary group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            {/* Values Section */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <User className="w-5 h-5 text-primary" />,
                  title: "User-Centric",
                  description:
                    "I design with the end-user as the priority, crafting interfaces that are intuitive and accessible to all.",
                  borderColor: "from-primary/40 to-primary/10",
                },
                {
                  icon: <Gauge className="w-5 h-5 text-primary" />,
                  title: "Performance",
                  description:
                    "Every millisecond counts. I optimize for speed without compromising functionality.",
                  borderColor: "from-accent/40 to-accent/10",
                },
                {
                  icon: <Code className="w-5 h-5 text-primary" />,
                  title: "Clean Code",
                  description:
                    "Maintainable, well-documented solutions that stand the test of time and scale.",
                  borderColor: "from-secondary/40 to-secondary/10",
                },
                {
                  icon: <Code className="w-5 h-5 text-primary" />,
                  title: "Innovation",
                  description:
                    "Constantly exploring new technologies to deliver cutting-edge solutions.",
                  borderColor: "from-accent/40 to-secondary/10",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className={`bg-surface cursor-pointer p-8 rounded-xl border border-border/50 hover:border-transparent group transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="mb-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.borderColor} flex items-center justify-center transition-all duration-300 group-hover:shadow-md`}
                    >
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
