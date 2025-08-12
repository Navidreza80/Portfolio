import ContactUs from "@/components/sections/ContactUsSection";
import HeroSection from "@/components/sections/HeroSection";
import TopProjects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import WorkExperience from "@/components/sections/WorkExperience";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkExperience />
      <TopProjects />
      <Testimonials />
      <ContactUs />
    </>
  );
}
