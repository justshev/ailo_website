import GradientText from "@/components/GradientText";
import CountUp from "@/components/CountUp";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";

export default function ProjectsSection() {
  return (
    <div className="project-section">
      <div className="projects-section-container">
        <div className="left-side-project">
          <AnimatedOnScroll>
            <div className="project-video-container">
              <video src="/project.mp4" autoPlay muted loop></video>
            </div>
          </AnimatedOnScroll>
        </div>
        <div className="right-side-project">
          <AnimatedOnScroll>
            <div className="innovation-title mb-8">
              <GradientText
                colors={["#3c32a8", "#4079ff", "#b80d00", "#4079ff", "#3c32a8"]}
                showBorder={false}
                className="custom-class"
              >
                OUR PROJECTS
              </GradientText>
            </div>
          </AnimatedOnScroll>
          <div className="project-desc">
            <AnimatedOnScroll>
              <div>
                <div className="first-desc-project">We have more</div>
              </div>
            </AnimatedOnScroll>

            <div className="mt-2">
              <AnimatedOnScroll>
                <GradientText
                  colors={[
                    "#b80d00",
                    "#4079ff",
                    "#ffffff",
                    "#4079ff",
                    "#b80d00",
                  ]}
                  showBorder={false}
                  className="custom-class second-desc "
                >
                  <CountUp
                    from={0}
                    to={20}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text "
                  />
                </GradientText>
                <GradientText
                  colors={[
                    "#b80d00",
                    "#4079ff",
                    "#4079ff",
                    "#4079ff",
                    "#b80d00",
                  ]}
                  showBorder={false}
                  className="custom-class ml-2 second-desc-project"
                >
                  Projects
                </GradientText>
              </AnimatedOnScroll>
              <AnimatedOnScroll>
                <div className="project-sub-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  ipsa aliquam aut itaque, similique aliquid ad culpa
                  consequatur
                </div>
              </AnimatedOnScroll>
              <AnimatedOnScroll>
                <div className="button-explore-project">Explore more</div>
              </AnimatedOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
