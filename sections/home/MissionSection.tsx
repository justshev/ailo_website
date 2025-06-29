import GradientText from "@/components/GradientText";
import AnimationOnScroll from "@/components/AnimatedOnScroll";
export default function MissionSection() {
  return (
    <div className="misson-section" id="main">
      <div className="mission-container ">
        <div className="left-side-mission">
          <AnimationOnScroll>
            <div className="mission-title">
              TUJUAN
              <GradientText
                colors={["#FFFFFf", "#4079ff", "#ffffff", "#4079ff", "#ffffff"]}
                showBorder={false}
                className="custom-class ml-1"
              >
                AILO
              </GradientText>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll>
            <div className="mission-content">
              Menjadikan pusat Riset{" "}
              <span className="mission-content-span"> AI yang Inovatif</span>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="right-side-mission">
          <AnimationOnScroll>
            <div className="mission-desc">
              AILO (Artificial Intelligence Learning and Optimization) adalah
              pusat penelitian yang berfokus pada riset, pengembangan, dan
              penerapan teknologi Kecerdasan Buatan untuk memecahkan masalah di
              berbagai bidang, seperti bisnis, teknologi, kesehatan, dan
              lainnya.
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}
