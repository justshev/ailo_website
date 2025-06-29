"use client";
import Link from "next/link";
import GradientText from "@/components/GradientText";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import { ExternalLink, BookOpen, Calendar, Users } from "lucide-react";

export default function ContactUs() {
  const journalLinks = [
    {
      name: "IJAIT",
      fullName:
        "International Journal of Artificial Intelligence and Technology",
      description:
        "Jurnal internasional yang fokus pada penelitian AI dan teknologi terdepan",
      url: "https://journals.telkomuniversity.ac.id/index.php/ijait/about/contact",
      color: "bg-blue-600 hover:bg-blue-700",
      borderColor: "border-blue-500/50",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      name: "IJOICT",
      fullName: "International Journal of ICT",
      description:
        "Platform publikasi untuk riset Information and Communication Technology",
      url: "https://journals.telkomuniversity.ac.id/ijoict",
      color: "bg-purple-600 hover:bg-purple-700",
      borderColor: "border-purple-500/50",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      name: "ICOAILO",
      fullName: "International Conference on AI and Learning Optimization",
      description:
        "Konferensi internasional tentang AI dan optimisasi pembelajaran",
      url: "https://icoailo.org/",
      color: "bg-emerald-600 hover:bg-emerald-700",
      borderColor: "border-emerald-500/50",
      icon: <Calendar className="w-5 h-5" />,
    },
  ];

  return (
    <div className="relative contact-us-container text-white overflow-hidden min-h-screen bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Konten */}
      <div className="contact-us-content relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-32 sm:pt-40 pb-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">
          <div className="left-side-contact">
            <AnimatedOnScroll>
              <div className="first-title-contact text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Siap untuk{" "}
                <GradientText
                  colors={[
                    "#4079ff",
                    "#4079ff",
                    "#ffffff",
                    "#4079ff",
                    "#4079ff",
                  ]}
                  showBorder={false}
                  className="custom-class mr-2"
                >
                  Kolaborasi
                </GradientText>
              </div>
              <div className="second-title-contact text-gray-400 text-xl sm:text-2xl lg:text-3xl ">
                dengan <span className="text-gray-300">AILO ?</span>
              </div>
            </AnimatedOnScroll>

            <div className="button-container-contact mt-10 sm:mt-12 flex flex-col sm:flex-row gap-5 sm:gap-4">
              <AnimatedOnScroll>
                <Link
                  href={"/about"}
                  className="button-contact-us bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors duration-200 font-medium"
                >
                  Tentang kami
                </Link>
              </AnimatedOnScroll>

              <AnimatedOnScroll>
                <Link
                  href={"/projects"}
                  className="button-explore-contact border border-white text-white px-6 py-3 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-white/10 font-medium"
                >
                  Portofolio kami
                </Link>
              </AnimatedOnScroll>
            </div>
          </div>

          <div className="right-side-contact">
            {/* Journal Links Section */}
            <AnimatedOnScroll>
              <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 sm:p-10 lg:p-12 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    AILO Journals & Conference
                  </h3>
                </div>
                <p className="text-slate-400 mb-6 text-sm sm:text-base">
                  Akses publikasi dan konferensi resmi dari AILO untuk mengikuti
                  perkembangan terbaru dalam bidang AI dan teknologi.
                </p>

                <div className="space-y-4">
                  {journalLinks.map((journal) => (
                    <AnimatedOnScroll key={journal.name}>
                      <a
                        href={journal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group block p-4 rounded-xl border ${journal.borderColor} bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`${journal.color} p-2 rounded-lg transition-colors duration-200`}
                          >
                            {journal.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-white text-sm sm:text-base">
                                {journal.name}
                              </h4>
                              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-200" />
                            </div>
                            <p className="text-slate-300 text-xs sm:text-sm font-medium mb-2">
                              {journal.fullName}
                            </p>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                              {journal.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    </AnimatedOnScroll>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <p className="text-slate-400 text-xs sm:text-sm text-center">
                    Klik pada salah satu journal atau konferensi di atas untuk
                    mengakses website resmi
                  </p>
                </div>
              </div>
            </AnimatedOnScroll>
          </div>
        </div>

        {/* Stats Section */}
        <AnimatedOnScroll>
          <div className="mt-16 sm:mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-slate-900/30 border border-slate-700/50 rounded-xl backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
                  3
                </div>
                <div className="text-slate-400 text-sm sm:text-base">
                  Active Publications
                </div>
              </div>
              <div className="text-center p-6 bg-slate-900/30 border border-slate-700/50 rounded-xl backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
                  100+
                </div>
                <div className="text-slate-400 text-sm sm:text-base">
                  Research Papers
                </div>
              </div>
              <div className="text-center p-6 bg-slate-900/30 border border-slate-700/50 rounded-xl backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">
                  50+
                </div>
                <div className="text-slate-400 text-sm sm:text-base">
                  International Collaborations
                </div>
              </div>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>

      {/* Ambient Light Glow */}
      <div
        className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[150px] sm:h-[200px] rounded-full pointer-events-none z-0 glowing"
        style={{
          background:
            "radial-gradient(circle, rgba(3,60,202,0.8) 0%, transparent 50%)",
          filter: "blur(90px)",
        }}
      />

      {/* Additional Glow Effects */}
      <div
        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(147,51,234,0.3) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
