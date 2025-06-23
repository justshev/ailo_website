import GradientText from "@/components/GradientText";
export default function MissionSection() {
  return (
    <div>
      <div className="mission-container ">
        <div className="left-side-mission">
          <div className="mission-title">
            OUR
            <GradientText
              colors={["#FFFFFf", "#4079ff", "#ffffff", "#4079ff", "#ffffff"]}
              showBorder={false}
              className="custom-class ml-1"
            >
              MISSION
            </GradientText>
          </div>
          <div className="mission-content">
            Bringing speed and transparency{" "}
            <span className="mission-content-span">
              {" "}
              to healthcare payments
            </span>
          </div>
        </div>
        <div className="right-side-mission">
          <div className="mission-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            eveniet illo debitis earum asperiores similique at, hic sunt quas
            provident deleniti veritatis incidunt iusto, placeat autem,
            recusandae ut animi rerum. Corrupti minus laborum maxime recusandae
            impedit? Repudiandae ipsa totam fugiat.
          </div>
        </div>
      </div>
    </div>
  );
}
