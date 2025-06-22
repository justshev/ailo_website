"use client";
import Aurora from "@/components/Aurora";
import GradientText from "@/components/GradientText";
export default function Hero() {
  return (
    <div>
      <Aurora colorStops={["#643d8e", "#000000", "#b80d00"]} />
      <div className="hero-text-content mt-10 flex justify-center items-center flex-col text-center">
        <p>
          Our work and stuff up to 100+ projects.{" "}
          <span className="ml-2 mr-1">Read more </span> <span> &#8594; </span>
        </p>
        <div className="main-title-hero ">
          <span>Best AI</span>
          <GradientText
            colors={["#b80d00", "#4079ff", "#ffffff", "#4079ff", "#b80d00"]}
            showBorder={false}
            className="custom-class ml-2 mr-2"
          >
            Learning
          </GradientText>
          <span>&</span>
          <GradientText
            colors={["#b80d00", "#4079ff", "#ffffff", "#4079ff", "#b80d00"]}
            showBorder={false}
            className="custom-class ml-2 mr-2"
          >
            Optimization
          </GradientText>

          <span>Center</span>
        </div>
        <p className="text-lg text-gray-400 mt-4 sec-title-hero">
          AILO is Center of Excellence from Telkom University that focused on AI
          Research and Development
        </p>
        <div className="btn-started">Get Started</div>
      </div>
    </div>
  );
}
