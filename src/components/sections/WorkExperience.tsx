const workExperiences = [
  {
    name: "Sepehr Academy",
    role: "Frontend developer | React.js",
    date: "March 2024 - July 2025",
    description: [
      "Developed a Single Page Application (SPA) using React.js.",
      "Customizable theme and support for three languages, leading to a 30% increase in user interest.",
      "Collaborated in a 5-person team and introduced time-saving tools and workflows, improving team efficiency by 25%.",
      "Implemented over 200 APIs and web methods.",
      "Ensured cross-browser/device compatibility with responsive design, increasing user engagement by 20%. Leveraged Vuexy Admin-Panel, reducing development time by 30%.",
    ],
  },
  {
    name: "Apanco",
    role: "Frontend developer | React.js",
    date: "May 2023 - February 2024",
    description: [
      "Constructed a Single Page Application SPA web app using React.js.",
      "Implemented TypeScript, enhancing debugging capabilities and increasing efficiency by 20%.",
      "Built responsive layouts that improved usability and design consistency by 20%.",
      "Associated with team members and participated in various meetings, suggesting innovative ideas and new features that led to a 15% improvement in efficiency.",
      "Worked closely with the design team to enhance UI and UX by 20%.",
      "Achieved productivity by identifying bottlenecks in the development process; introduced new protocols that enhanced cross-team communication and improved turnaround time for project tasks by approximately 25%",
    ],
  },
];

const WorkExperience = async () => {
  return (
    <section className="relative min-h-screen bg-black px-4 py-16 sm:px-8 md:px-16 lg:px-24">
      {/* Subtle background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-rose-900/5 rounded-full blur-3xl"></div>

      {/* Section title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
        Work Experiences
      </h2>

      {/* Experience cards */}
      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {workExperiences.map((item, index) => (
          <div
            key={index}
            className="group relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all duration-500"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-purple-300 text-sm md:text-base font-medium">
                  {item.role}
                </p>
              </div>
              <span className="text-white/60 text-sm font-light bg-white/5 rounded-full px-3 py-1 self-start">
                {item.date}
              </span>
            </div>

            <div className="text-white/80 text-sm leading-relaxed space-y-2">
              {item.description.map((line, i) => (
                <p key={i} className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  {line}
                </p>
              ))}
            </div>

            {/* Subtle hover effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-rose-500/0 group-hover:from-purple-500/5 group-hover:to-rose-500/5 transition-all duration-500 -z-10"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
