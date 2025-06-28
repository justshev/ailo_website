import GradientText from "@/components/GradientText";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
export default function ContactUs() {
  return (
    <div className="relative contact-us-container text-white overflow-hidden">
      {/* Konten */}
      <div className="contact-us-content relative z-10">
        <div className="left-side-contact">
          <AnimatedOnScroll>
            <div className="first-title-contact ">
              Ready to{" "}
              <GradientText
                colors={["#4079ff", "#4079ff", "#ffffff", "#4079ff", "#4079ff"]}
                showBorder={false}
                className="custom-class mr-2 "
              >
                Collaborate
              </GradientText>
            </div>
            <div className="second-title-contact text-gray-400 text-3xl mt-2">
              and more with <span className="text-gray-300">AILO ?</span>
            </div>
          </AnimatedOnScroll>

          <div className="button-container-contact mt-8 flex gap-4">
            <AnimatedOnScroll>
              <div className="button-contact-us bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer transition">
                Contact Us
              </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll>
              <div className="button-explore-contact border border-white  text-white px-6 py-3 rounded-lg cursor-pointer transition">
                Our Projects
              </div>
            </AnimatedOnScroll>
          </div>
        </div>
        <div className="right-side-contact">
          {/* optional image or illustration */}
        </div>
      </div>

      {/* Ambient Light Glow */}
      <div
        className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[200px] rounded-full pointer-events-none z-0 glowing"
        style={{
          background:
            "radial-gradient(circle, rgba(3,60,202,0.8) 0%, transparent 50%)",
          filter: "blur(90px)",
        }}
      />
    </div>
  );
}
