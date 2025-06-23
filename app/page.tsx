import Hero from "@/sections/home/Hero";
import MissionSection from "@/sections/home/MissionSection";
import RunningImage from "@/sections/home/RunningImage";
import InnovationResearch from "@/sections/home/InnovationResearch";

export default function Home() {
  return (
    <div>
      <Hero />
      <RunningImage />
      <MissionSection />
      <InnovationResearch />
    </div>
  );
}
