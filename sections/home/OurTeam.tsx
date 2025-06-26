import CircularGallery from "@/components/CircularGallery";
import GradientText from "@/components/GradientText";
import Aurora from "@/components/Aurora";
import Link from "next/link";
export default function OurTeam() {
  return (
    <div className="our-team-container">
      <Aurora colorStops={["#4079ff", "#ffffff", "#4079ff"]} />
      <div className="our-team-content-container">
        <div style={{ height: "500px", position: "relative" }}>
          <CircularGallery bend={-1} textColor="#ffffff" borderRadius={0.05} />
        </div>
        <div className="our-team-content-text">
          <div className="our-team-title">
            <span>Meet our </span>
            <GradientText
              colors={["#4079ff", "#4079ff", "#ffffff", "#4079ff", "#4079ff"]}
              showBorder={false}
              className="custom-class mr-2 our-team-title"
            >
              Team
            </GradientText>
          </div>

          <div className="our-team-subtitle">
            We have more 20+ members Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sed, laboriosam!
          </div>

          <div className="our-team-explore-btn">
            <Link href={"/teams"}>See more</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
