import { workExperiences } from "@/constants";

const WorkExperience = async () => {
  return (
    <section className="relative bg-[var(--pf-bg-alt)] px-4 py-20 text-[var(--pf-text)] sm:px-8 md:px-16 lg:px-24">
      <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        Work Experience
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--pf-muted)]">
        Recent roles focused on scalable web products, real-time workflows,
        platform reliability, and practical team leadership.
      </p>

      <div id="experiences" className="mx-auto grid max-w-4xl grid-cols-1 gap-6">
        {workExperiences.map((item, index) => (
          <div
            key={index}
            className="group relative border border-[var(--pf-border)] bg-[var(--pf-card)] p-6 shadow-[0_18px_60px_rgba(72,83,62,0.08)] backdrop-blur-sm transition-all duration-500 hover:border-[var(--pf-accent)] md:p-8"
          >
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--pf-accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="mb-1 text-xl font-semibold text-[var(--pf-heading)] md:text-2xl">
                  {item.name}
                </h3>
                <p className="text-sm font-medium text-[var(--pf-accent)] md:text-base">
                  {item.role}
                </p>
              </div>
              <span className="self-start border border-[var(--pf-border)] bg-[var(--pf-bg-soft)] px-3 py-1 text-sm font-light text-[var(--pf-muted)]">
                {item.date}
              </span>
            </div>

            <div className="space-y-2 text-sm leading-relaxed text-[var(--pf-muted)]">
              {item.description.map((line, i) => (
                <p key={i} className="flex items-start">
                  <span className="mr-2 text-[var(--pf-accent)]">-</span>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
