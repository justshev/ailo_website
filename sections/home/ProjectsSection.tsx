import GradientText from "@/components/GradientText";
import CountUp from "@/components/CountUp";

import Image from "next/image";

export default function ProjectsSection() {
  return (
    <div className="project-section">
      <div className="projects-section-container">
        <div className="left-side-project">
          <div className="innovation-image-container">
            <Image
              src={"/test.jpg"}
              alt="Innovation Research"
              className="project-image"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
        <div className="right-side-project">
          <div className="innovation-title mb-8">
            <GradientText
              colors={["#ffffff", "#4079ff", "#3c32a8", "#4079ff", "#ffffff"]}
              showBorder={false}
              className="custom-class"
            >
              OUR PROJECTS
            </GradientText>
          </div>
          <div className="project-desc">
            <div>
              <div className="first-desc-project">We have more</div>
            </div>
            <div className="mt-2">
              <GradientText
                colors={["#b80d00", "#4079ff", "#ffffff", "#4079ff", "#b80d00"]}
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
                colors={["#b80d00", "#4079ff", "#4079ff", "#4079ff", "#b80d00"]}
                showBorder={false}
                className="custom-class ml-2 second-desc-project"
              >
                Projects
              </GradientText>
              <div className="project-sub-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                ipsa aliquam aut itaque, similique aliquid ad culpa consequatur
              </div>
              <div className="button-explore-project">Explore more</div>
            </div>
          </div>
          <div className="innovation-badge-container gap-30"></div>
        </div>
      </div>
    </div>
  );
}
