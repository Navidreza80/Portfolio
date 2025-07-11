import AboutMe from "@/components/sections/AboutMe";
import ContactSection from "@/components/sections/ContectMe";
import HeroSection from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/Projects";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
