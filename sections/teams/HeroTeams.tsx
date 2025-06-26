import Aurora from "@/components/Aurora";
import GradientText from "@/components/GradientText";
import ChromaGrid from "@/components/ChromaGrid";
const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
];
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
    </div>
  );
}
