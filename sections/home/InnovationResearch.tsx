import GradientText from "@/components/GradientText";
import DecryptedText from "@/components/DecryptedText";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import {
  Brain,
  Eye,
  BarChart3,
  FileText,
  Cpu,
  Zap,
  ArrowRight,
  Play,
} from "lucide-react";

const researchAreas = [
  {
    icon: Brain,
    title: "Natural Language Processing",
    description:
      "Advanced AI models for understanding and generating human language with state-of-the-art accuracy.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Cutting-edge visual recognition systems that interpret and analyze digital images and videos.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Sophisticated algorithms for extracting meaningful insights from complex datasets and patterns.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: FileText,
    title: "Research Publications",
    description:
      "Peer-reviewed research contributing to the advancement of AI and machine learning technologies.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Cpu,
    title: "Edge AI Computing",
    description:
      "Optimized AI models designed for deployment on edge devices and real-time applications.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Zap,
    title: "Neural Networks",
    description:
      "Deep learning architectures that mimic human brain functionality for complex problem solving.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
  },
];

export default function InnovationResearch() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content Section */}
          <div className="space-y-8">
            <AnimatedOnScroll>
              <div className="inline-flex items-center px-4 py-2 bg-purple-900/50 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                Innovation Lab
              </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <GradientText
                  colors={[
                    "#ffffff",
                    "#BAA5FF",
                    "#BAA5FF",
                    "#8865FC",
                    "#ffffff",
                  ]}
                  showBorder={false}
                  className="block "
                >
                  RESEARCH & PUBLICATIONS
                </GradientText>
              </h2>
            </AnimatedOnScroll>

            <AnimatedOnScroll>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-semibold text-white">
                  <DecryptedText
                    text="Pioneering Tomorrow's Technology."
                    speed={50}
                    maxIterations={15}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
                    className="text-white"
                    parentClassName=""
                    encryptedClassName="text-gray-400"
                    animateOn="view"
                  />
                </div>
                <div className="text-3xl lg:text-4xl font-semibold text-gray-400">
                  <DecryptedText
                    text="Shaping the Future of AI."
                    speed={50}
                    maxIterations={15}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
                    className="text-gray-400"
                    parentClassName=""
                    encryptedClassName="text-gray-600"
                    animateOn="view"
                  />
                </div>
              </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Our research division pushes the boundaries of artificial
                intelligence, developing breakthrough technologies that
                transform industries and create new possibilities for human-AI
                collaboration.
              </p>
            </AnimatedOnScroll>

            {/* Research Areas Grid */}
            <AnimatedOnScroll>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {researchAreas.map((area, index) => (
                  <AnimatedOnScroll key={area.title}>
                    <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-r ${area.color} shadow-lg`}
                        >
                          <area.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                            {area.title}
                          </h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {area.description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-300"></div>
                    </div>
                  </AnimatedOnScroll>
                ))}
              </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll>
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span>View Publications</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-purple-200 font-semibold rounded-xl transition-all duration-300 hover:bg-purple-500/10">
                  Research Papers
                </button>
              </div>
            </AnimatedOnScroll>
          </div>

          {/* Video Section */}
          <AnimatedOnScroll>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/20 shadow-2xl">
                <div className="relative overflow-hidden rounded-xl aspect-video">
                  <video
                    src="/rnd.mp4"
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                    <Play className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Research in Action
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      Live Demo
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-xs text-gray-400">Research Papers</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-xs text-gray-400">AI Models</div>
                </div>
              </div>
            </div>
          </AnimatedOnScroll>
        </div>

        {/* Bottom Stats Section */}
        <AnimatedOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-sm text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-gray-400">Research Lab</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-sm text-gray-400">Experiments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5★</div>
              <div className="text-sm text-gray-400">Innovation Score</div>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}
