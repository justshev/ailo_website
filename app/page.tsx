import Hero from "@/sections/home/Hero";
import MissionSection from "@/sections/home/MissionSection";
import RunningImage from "@/sections/home/RunningImage";
import InnovationResearch from "@/sections/home/InnovationResearch";
import ProjectsSection from "@/sections/home/ProjectsSection";
import OurTeam from "@/sections/home/OurTeam";
import ContactUs from "@/sections/home/ContactUs";
import Footer from "@/sections/home/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <RunningImage />
      <MissionSection />
      <InnovationResearch />
      <ProjectsSection />
      <OurTeam />
      <ContactUs />
      <Footer />
    </div>
  );
}
