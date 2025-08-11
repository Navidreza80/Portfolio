import { Particles } from "../magicui/particles";
import { TypingAnimation } from "../magicui/typing-animation";

const workExperiences = [
  {
    name: "Sepehr Academy",
    role: "Frontend developer | React.js",
    date: "March 2024 - July 2025",
    description: (
      <div>
        • Developed a Single Page Application (SPA) using React.js.
        <br />
        • Customizable theme and support for three languages, leading to a 30%
        increase in user interest.
        <br />
        • Collaborated in a 5-person team and introduced time-saving tools and
        workflows, improving team efficiency by 25%.
        <br />
        • Implemented over 200 APIs and web methods.
        <br />• Ensured cross-browser/device compatibility with responsive
        design, increasing user engagement by 20%. Leveraged Vuexy Admin-Panel,
        reducing development time by 30%.
      </div>
    ),
  },
  {
    name: "Apanco",
    role: "Frontend developer | React.js",
    date: "May 2023 - February 2024",
    description: (
      <div>
        • Constructed a Single Page Application SPA web app using React.js.
        <br /> • Implemented TypeScript, enhancing debugging capabilities and
        increasing efficiency by 20%. <br /> • Built responsive layouts that
        improved usability and design consistency by 20%. <br /> • Associated
        with team members and participated in various meetings, suggesting
        innovative ideas and new features that led to a 15% improvement in
        efficiency. <br /> • Worked closely with the design team to enhance UI
        and UX by 20%. <br /> • Achieved productivity by identifying bottlenecks
        in the development process; introduced new protocols that enhanced
        cross-team communication and improved turnaround time for project tasks
        by approximately 25%
      </div>
    ),
  },
];

const WorkExperience = async () => {
  return (
    <div className="flex flex-wrap relative justify-center items-start min-h-screen bg-gradient-to-t from-[#000000] to-[#390615] px-4 py-10 sm:px-10 md:px-20 lg:px-20">
      <span className="w-[165px] h-[149px] bg-white rounded-full top-0 left-0 absolute blur-[300px]" />
      <span className="w-[165px] h-[149px] bg-white rounded-full top-0 right-0 absolute blur-[300px]" />
      <span className="w-[165px] h-[149px] bg-white rounded-full bottom-0 left-1/2 transform -translate-x-1/2 absolute blur-[300px]" />
      <TypingAnimation className="text-4xl md:text-6xl lg:text-[64px] font-extrabold mb-6 text-white w-full text-center">
        Work Experiences
      </TypingAnimation>
      <div className="grid grid-cols-1 w-full space-y-4 mt-6">
        {workExperiences.map((item, index) => (
          <div key={index} className="p-0 rounded-2xl">
            <div className="z-0 relative rounded-2xl">
              <div className="absolute inset-0 opacity-30 bg-black border border-primary rounded-2xl"></div>
              <div className="relative inset-0 z-10 py-4 px-4 sm:py-6 sm:px-6 md:py-[30px] md:px-[50px] justify-between flex items-start flex-wrap">
                <span className="text-white text-lg sm:text-xl md:text-2xl font-bold font-montserrat flex flex-wrap gap-x-2 sm:gap-x-4 items-center">
                  {item.name}
                  <p className="font-poppins font-light hidden sm:block">
                    |
                  </p>{" "}
                  <p className="text-sm sm:text-base font-medium font-montserrat opacity-80 text-white">
                    {item.role}
                  </p>
                </span>
                <span className="text-white text-xs sm:text-sm font-light font-poppins opacity-80 mt-1 sm:mt-0">
                  {item.date}
                </span>
                <div className="text-white w-full opacity-80 font-montserrat font-medium mt-4 text-[13px] leading-8 sm:text-base">
                  {item.description}
                </div>
              </div>
              <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                color={"#ffffff"}
                refresh
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WorkExperience;
