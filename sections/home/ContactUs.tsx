export default function ContactUs() {
  return (
    <div className="relative contact-us-container text-white overflow-hidden">
      {/* Konten */}
      <div className="contact-us-content relative z-10">
        <div className="left-side-contact">
          <div className="first-title-contact text-4xl font-bold">
            Ready to Collaborate
          </div>
          <div className="second-title-contact text-gray-400 text-3xl mt-2">
            and more with <span className="text-gray-300">AILO ?</span>
          </div>
          <div className="button-container-contact mt-8 flex gap-4">
            <div className="button-contact-us bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer transition">
              Contact Us
            </div>
            <div className="button-explore-contact border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg cursor-pointer transition">
              Our Projects
            </div>
          </div>
        </div>
        <div className="right-side-contact">
          {/* optional image or illustration */}
        </div>
      </div>

      {/* Ambient Light Glow */}
      <div
        className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[200px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(198,255,0,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
