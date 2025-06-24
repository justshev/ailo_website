import GradientText from "@/components/GradientText";
import DecryptedText from "@/components/DecryptedText";
import WorkList from "@/components/WorkList";

export default function InnovationResearch() {
  return (
    <div className="innovation-research-section">
      <div className="innovation-research-container">
        <div className="left-side-innovation">
          <div className="innovation-title mb-8">
            <GradientText
              colors={["#ffffff", "#b6252a", "#ed1e28", "#b6252a", "#ffffff"]}
              showBorder={false}
              className="custom-class"
            >
              RESEARCH & PUBLICATIONS
            </GradientText>
          </div>
          <div className="innovation-desc">
            <div>
              <DecryptedText
                text="Customize me."
                speed={100}
                maxIterations={20}
                characters="ABCD1234!?"
                className="revealed first-desc"
                parentClassName="all-letters first-desc"
                encryptedClassName="encrypted"
                animateOn="view"
              />
            </div>
            <div>
              <DecryptedText
                text="Bring the future."
                speed={100}
                maxIterations={20}
                characters="ABCD1234!?"
                className="revealed second-desc"
                parentClassName="all-letters second-desc"
                encryptedClassName="encrypted"
                animateOn="view"
              />
            </div>
          </div>
          <div className="innovation-badge-container gap-30">
            <WorkList
              badge_title="Error Detection"
              badge_description="hai saya addalah bla bajadjawdawdadaw  dawddawddawdawdawdawdawdaawdawdawdawd awd"
            />
            <WorkList
              badge_title="Error Detection"
              badge_description="hai saya addalah bla bajadjawdawdadaw  dawddawddawdawdawdawdawdaawdawdawdawd awd"
            />
            <WorkList
              badge_title="Error Detection"
              badge_description="hai saya addalah bla bajadjawdawdadaw  dawddawddawdawdawdawdawdaawdawdawdawd awd"
            />
            <WorkList
              badge_title="Error Detection"
              badge_description="hai saya addalah bla bajadjawdawdadaw  dawddawddawdawdawdawdawdaawdawdawdawd awd"
            />
          </div>
        </div>
        <div className="right-side-innovation">
          <div className="innovation-image-container"></div>
        </div>
      </div>
    </div>
  );
}
