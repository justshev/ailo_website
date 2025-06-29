import Aurora from "@/components/Aurora";
import GradientText from "@/components/GradientText";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import Link from "next/link";
export default function Hero() {
  return (
    <div>
      <Aurora colorStops={["#643d8e", "#000000", "#4079ff"]} />
      <div className="hero-text-content mt-10 flex justify-center items-center flex-col text-center">
        <p className="first-readmore">
          Total Research dan Publikasi lebih 20+{" "}
          <Link href={"/researcher"} className="ml-2 mr-1">
            Lihat selengkapnya{" "}
          </Link>{" "}
          <span> &#8594; </span>
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
          AILO adalah Center of Excellence dari Telkom University dalam bidang
          Artificial Intelligence (AI) dan Cyber Security (CS) dengan Prinsip
          SAFE (Secure, Accurate, Fair and Explainable) AI yang berfokus pada
          Secure Smart Society
        </p>

        <AnimatedOnScroll>
          <a href="#main" className="btn-started">
            Mulai Sekarang
          </a>
        </AnimatedOnScroll>
      </div>
    </div>
  );
}
