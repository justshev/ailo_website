import Aurora from "@/components/Aurora";
import GradientText from "@/components/GradientText";
import ChromaGrid from "@/components/ChromaGrid";
import Lectures from "@/components/Lectures";
import Students from "@/components/Students";

export default function HeroTeams() {
  return (
    <div>
      <Aurora />
      <div className="ourteam-pages-container">
        <div className="ourteam-pages-title">
          WHO
          <GradientText
            colors={["#FFFFFf", "#4079ff", "#ffffff", "#4079ff", "#ffffff"]}
            showBorder={false}
            className="custom-class ml-1"
          >
            ARE WE?
          </GradientText>
        </div>
        <div className="ourteam-pages-maintitle">
          Meet the
          <GradientText
            colors={["#FFFFFf", "#4079ff", "#ffffff", "#4079ff", "#ffffff"]}
            showBorder={false}
            className="custom-class ml-1"
          >
            AILO
          </GradientText>{" "}
          Team
        </div>
        <div className="ourteam-pages-content-container">
          <div
            style={{
              position: "relative",
              backgroundColor: "#0a0a0a",
              marginTop: "30px",
            }}
          >
            <ChromaGrid
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
              className="ourteam-pages-chromagrid"
            />
          </div>
        </div>
      </div>
      <div className="list-lectures-container">
        <Lectures />
      </div>
      <div className="list-students-container">
        <Students />
      </div>
    </div>
  );
}
