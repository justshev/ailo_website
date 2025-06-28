import { ArrowUpRight, ExternalLink, Github, Sparkles } from "lucide-react";
import Image from "next/image";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";

const projects = [
  {
    id: 1,
    title: "EcoLogistics",
    category: "Logistics",
    categoryColor: "bg-blue-900/60 text-blue-200 border border-blue-700/50",
    description:
      "EcoLogistics used our platform to optimize shipping routes—reducing carbon footprint by 35% and cutting operational costs across global supply chains.",
    image: "/placeholder.svg?height=300&width=500",
    gradient: "from-slate-800 to-blue-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "35% reduction in carbon footprint",
    technologies: ["React", "Node.js", "AWS", "MongoDB"],
    links: { live: "#", github: "#" },
  },
  {
    id: 2,
    title: "CreditFlow",
    category: "Finance",
    categoryColor:
      "bg-purple-900/60 text-purple-200 border border-purple-700/50",
    description:
      "CreditFlow used our AI solution to predict loan defaults—eliminating 80% of high-risk applications and accelerating approval processes at scale.",
    image: "/placeholder.svg?height=300&width=500",
    gradient: "from-slate-800 to-purple-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "80% reduction in high-risk loans",
    technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    links: { live: "#", github: "#" },
  },
  {
    id: 3,
    title: "MediCore Vision",
    category: "Healthcare",
    categoryColor:
      "bg-emerald-900/60 text-emerald-200 border border-emerald-700/50",
    description:
      "MediCore Vision used our platform to power accurate medical diagnostics—enhancing precision by 92% and accelerating treatment workflows nationwide.",
    image: "/placeholder.svg?height=300&width=500",
    gradient: "from-slate-800 to-emerald-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "92% improvement in diagnostic accuracy",
    technologies: ["React", "Python", "OpenCV", "Redis"],
    links: { live: "#", github: "#" },
  },
  {
    id: 4,
    title: "SmartRetail Pro",
    category: "Retail",
    categoryColor: "bg-amber-900/60 text-amber-200 border border-amber-700/50",
    description:
      "SmartRetail Pro used our system to optimize inventory management—reducing waste by 45% and improving customer satisfaction across 200+ stores.",
    image: "/placeholder.svg?height=300&width=500",
    gradient: "from-slate-800 to-amber-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "45% reduction in inventory waste",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Docker"],
    links: { live: "#", github: "#" },
  },
  {
    id: 5,
    title: "IndustrialFlow",
    category: "Manufacturing",
    categoryColor:
      "bg-orange-900/60 text-orange-200 border border-orange-700/50",
    description:
      "IndustrialFlow used our IoT platform to automate production monitoring—saving 4,200 hours of manual inspection and streamlining quality control processes.",
    image: "/placeholder.svg?height=300&width=500",
    gradient: "from-slate-800 to-orange-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "4,200 hours saved monthly",
    technologies: ["Angular", "Go", "InfluxDB", "MQTT"],
    links: { live: "#", github: "#" },
  },
  {
    id: 6,
    title: "GreenEnergy Hub",
    category: "Energy",
    categoryColor: "bg-teal-900/60 text-teal-200 border border-teal-700/50",
    description:
      "GreenEnergy Hub used our platform to forecast energy demand and optimize grid pricing—unlocking $2.8M in revenue through smart automation systems.",
    image: "/placeholder.svg?height=300&width=500",
    gradient: "from-slate-800 to-teal-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "$2.8M revenue increase",
    technologies: ["Svelte", "FastAPI", "TimescaleDB", "Kubernetes"],
    links: { live: "#", github: "#" },
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 pt-40 pb-20">
        {/* Enhanced Header Section */}
        <AnimatedOnScroll>
          <div className="text-center mb-20">
            <div className="bg-purple-900/30 border border-purple-700/50 rounded-full text-sm font-medium text-purple-200 inline-flex items-center gap-2 px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4" />
              Portfolio Showcase
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-8 tracking-tight">
              Our Projects
            </h1>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Transforming industries through innovative technology solutions.
              Each project represents our commitment to excellence, scalability,
              and measurable impact.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <AnimatedOnScroll key={project.id}>
              <div
                className={`group relative overflow-hidden border rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${project.cardBg} hover:shadow-purple-500/10`}
              >
                {/* Header Section with Gradient */}
                <div
                  className={`relative p-8 text-white bg-gradient-to-br ${project.gradient} overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:bg-white/20 p-2 rounded-full transition-colors duration-200 inline-flex items-center justify-center"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>

                    <p className="text-white/90 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="bg-white/20 text-white hover:bg-white/30 border border-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        {project.metrics}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`${project.categoryColor} font-semibold shadow-lg backdrop-blur-sm px-3 py-1 rounded-full text-sm`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="p-6 bg-slate-900/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-600/50 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-600/50 px-2 py-1 rounded text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-purple-900/80 hover:bg-purple-800/80 text-white border border-purple-700/50 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-600/50 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <AnimatedOnScroll>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/50 via-slate-900/80 to-blue-900/50 border border-purple-700/30 p-12 text-center text-white backdrop-blur-sm">
            {/* Background Elements */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />

            <div className="relative z-10">
              <div className="bg-purple-900/40 border border-purple-700/50 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Ready to Build Something Amazing?
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Let's Create Your Next
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                  Success Story
                </span>
              </h2>

              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join the ranks of innovative companies who've transformed their
                businesses with our cutting-edge solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-900/80 text-white hover:bg-purple-800/80 border border-purple-700/50 font-semibold px-8 py-4 text-lg backdrop-blur-sm rounded-lg transition-colors duration-200">
                  Start Your Project
                </button>
                <button className="border border-slate-600/50 text-slate-200 hover:bg-slate-800/50 font-semibold px-8 py-4 text-lg bg-slate-900/30 backdrop-blur-sm rounded-lg transition-colors duration-200">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </div>
  );
}
