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
            <span>Kenali </span>
            <GradientText
              colors={["#4079ff", "#4079ff", "#ffffff", "#4079ff", "#4079ff"]}
              showBorder={false}
              className="custom-class mr-2 our-team-title"
            >
              Tim Kami
            </GradientText>
          </div>

          <div className="our-team-subtitle">
            Kami memiliki lebih dari 20 anggota yang berdedikasi dan
            berpengalaman di bidangnya, siap berkolaborasi untuk menciptakan
            inovasi terbaik.
          </div>

          <Link href={"/teams"} className="our-team-explore-btn">
            <span>Lihat Selengkapnya</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
