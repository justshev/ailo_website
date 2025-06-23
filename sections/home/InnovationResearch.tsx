import GradientText from "@/components/GradientText";

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
            <p className="first-desc">Claim Acceleration.</p>
            <p className="second-desc">Lightning fast payments</p>
          </div>
          <div className="innovation-badge-container"></div>
        </div>
        <div className="right-side-innovation">
          <div className="innovation-image"></div>
        </div>
      </div>
    </div>
  );
}
