import { MagicCard } from "../magicui/magic-card";
import { Particles } from "../magicui/particles";
import { TypingAnimation } from "../magicui/typing-animation";

const WorkExperience = async () => {
  return (
    <div className="flex flex-wrap justify-center items-start min-h-screen bg-gradient-to-t from-[#000000] to-[#390615] px-4 py-10 sm:px-10 md:px-20 lg:px-20">
      <TypingAnimation className="text-4xl md:text-6xl lg:text-[64px] font-extrabold mb-6 text-white w-full text-center">
        Work Experiences
      </TypingAnimation>
      <div className="grid grid-cols-1 w-full space-y-4 mt-6">
        <MagicCard gradientColor={"#262626"} className="p-0 rounded-2xl">
          <div className="z-0 relative rounded-2xl">
            <div className="absolute inset-0 opacity-30 bg-black border border-primary rounded-2xl"></div>
            <div className="relative inset-0 z-10 py-4 px-4 sm:py-6 sm:px-6 md:py-[30px] md:px-[50px] justify-between flex items-start flex-wrap">
              <span className="text-white text-lg sm:text-xl md:text-2xl font-bold font-montserrat flex flex-wrap gap-x-2 sm:gap-x-4 items-center">
                Sepehr Academy{" "}
                <p className="font-poppins font-light hidden sm:block">|</p>{" "}
                <p className="text-sm sm:text-base font-medium font-montserrat opacity-80 text-white">
                  Frontend developer | React.js
                </p>
              </span>
              <span className="text-white text-xs sm:text-sm font-light font-poppins opacity-80 mt-1 sm:mt-0">
                March 2024 - July 2025
              </span>
              <p className="text-white w-full opacity-80 font-montserrat font-medium mt-4 text-[13px] leading-8 sm:text-base">
                • Developed a Single Page Application (SPA) using React.js.{" "}
                <br /> • Customizable theme and support for three languages,
                leading to a 30% increase in user interest. <br /> •
                Collaborated in a 5-person team and introduced time-saving tools
                and workflows, improving team efficiency by 25%. <br /> •
                Implemented over 200 APIs and web methods. <br /> • Ensured
                cross-browser/device compatibility with responsive design,
                increasing user engagement by 20%. Leveraged Vuexy Admin-Panel,
                reducing development time by 30%
              </p>
            </div>
            <Particles
              className="absolute inset-0 z-0"
              quantity={100}
              ease={80}
              color={"#ffffff"}
              refresh
            />
          </div>
        </MagicCard>

        <div className="z-0 relative">
          <div className="absolute inset-0 opacity-30 bg-black border border-primary rounded-2xl"></div>
          <div className="relative z-10 py-4 px-4 sm:py-6 sm:px-6 md:py-[30px] md:px-[50px] justify-between flex items-start flex-wrap">
            <span className="text-white text-lg sm:text-xl md:text-2xl font-bold font-montserrat flex flex-wrap gap-x-2 sm:gap-x-4 items-center">
              Sepehr Academy{" "}
              <p className="font-poppins font-light hidden sm:block">|</p>{" "}
              <p className="text-sm sm:text-base font-medium font-montserrat opacity-80 text-white">
                Frontend developer | React.js
              </p>
            </span>
            <span className="text-white text-xs sm:text-sm font-light font-poppins opacity-80 mt-1 sm:mt-0">
              March 2024 - July 2025
            </span>
            <p className="text-white w-full opacity-80 font-montserrat font-medium mt-2 text-sm sm:text-base">
              • Developed a Single Page Application (SPA) using React.js. <br />{" "}
              • Customizable theme and support for three languages, leading to a
              30% increase in user interest. <br /> • Collaborated in a 5-person
              team and introduced time-saving tools and workflows, improving
              team efficiency by 25%. <br /> • Implemented over 200 APIs and web
              methods. <br /> • Ensured cross-browser/device compatibility with
              responsive design, increasing user engagement by 20%. Leveraged
              Vuexy Admin-Panel, reducing development time by 30%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
