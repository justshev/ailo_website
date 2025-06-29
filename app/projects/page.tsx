"use client";

import { ArrowUpRight, ExternalLink, Github, Sparkles } from "lucide-react";
import Image from "next/image";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";

const projects = [
  {
    id: 1,
    title: "Curhat.in",
    category: "Mental Health",
    categoryColor: "bg-blue-900/60 text-blue-200 border border-blue-700/50",
    description:
      "Platform konseling online yang menyediakan layanan kesehatan mental dengan AI-powered chatbot dan sistem matching dengan konselor profesional untuk mendukung kesejahteraan mental masyarakat Indonesia.",
    image: "/projects/Curhat.in.png",
    gradient: "from-slate-800 to-blue-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "10,000+ pengguna aktif",
    technologies: ["React", "Node.js", "AI/ML", "PostgreSQL"],
    links: { live: "#", github: "#" },
  },
  {
    id: 2,
    title: "Dashboard Prediksi Harga Beras Nasional",
    category: "Agriculture",
    categoryColor: "bg-green-900/60 text-green-200 border border-green-700/50",
    description:
      "Sistem prediksi harga beras nasional menggunakan machine learning untuk membantu Bapanas dalam pengambilan keputusan strategis terkait stabilitas harga pangan dan ketahanan pangan nasional.",
    image: "/projects/Dashboard Prediksi Harga Beras Nasional (Bapanas).png",
    gradient: "from-slate-800 to-green-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "95% akurasi prediksi",
    technologies: ["Python", "TensorFlow", "Django", "PostgreSQL"],
    links: { live: "#", github: "#" },
  },
  {
    id: 3,
    title: "SDGs Mapping Dashboard",
    category: "Education",
    categoryColor:
      "bg-purple-900/60 text-purple-200 border border-purple-700/50",
    description:
      "Dashboard pemetaan kontribusi dosen Telkom University terhadap Sustainable Development Goals (SDGs) berbasis Artificial Intelligence untuk mengukur dampak penelitian terhadap tujuan pembangunan berkelanjutan.",
    image:
      "/projects/Dashboard SDGs Mapping Dosen Telkom University berbasis Artificial Intelligence.png",
    gradient: "from-slate-800 to-purple-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "17 SDGs goals mapped",
    technologies: ["React", "Python", "D3.js", "MongoDB"],
    links: { live: "#", github: "#" },
  },
  {
    id: 4,
    title: "BTS Antenna Monitoring System",
    category: "Telecommunications",
    categoryColor:
      "bg-orange-900/60 text-orange-200 border border-orange-700/50",
    description:
      "Sistem monitoring real-time untuk antena BTS (Base Transceiver Station) yang menggunakan IoT sensors dan AI analytics untuk memantau performa jaringan dan prediksi maintenance.",
    image: "/projects/Dashboard sistem monitoring antenna BTS.png",
    gradient: "from-slate-800 to-orange-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "99.9% uptime monitoring",
    technologies: ["Vue.js", "IoT", "InfluxDB", "MQTT"],
    links: { live: "#", github: "#" },
  },
  {
    id: 5,
    title: "Smart Incubator Dashboard",
    category: "Healthcare",
    categoryColor:
      "bg-emerald-900/60 text-emerald-200 border border-emerald-700/50",
    description:
      "Dashboard standarisasi incubator bayi dengan teknologi AIoT (Artificial Intelligence of Things) untuk monitoring kondisi bayi prematur dan optimalisasi lingkungan inkubator secara otomatis.",
    image: "/projects/inkubator.png",
    gradient: "from-slate-800 to-emerald-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "24/7 patient monitoring",
    technologies: ["React", "Python", "IoT", "TensorFlow"],
    links: { live: "#", github: "#" },
  },
  {
    id: 6,
    title: "Smart City Tower Zone Dashboard",
    category: "Smart City",
    categoryColor: "bg-cyan-900/60 text-cyan-200 border border-cyan-700/50",
    description:
      "Dashboard zona menara Kota Bandung berbasis Artificial Intelligence untuk optimalisasi penempatan menara telekomunikasi dan analisis coverage area untuk smart city development.",
    image:
      "/projects/Dashboard Zona Menara Kota Bandung berbasis Artificial Intelligence.png",
    gradient: "from-slate-800 to-cyan-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "100+ tower zones mapped",
    technologies: ["Angular", "Python", "GIS", "PostgreSQL"],
    links: { live: "#", github: "#" },
  },
  {
    id: 7,
    title: "XL Axiata Data Fabric",
    category: "Telecommunications",
    categoryColor: "bg-red-900/60 text-red-200 border border-red-700/50",
    description:
      "Platform Data Fabric untuk PT XL Axiata yang mengintegrasikan berbagai sumber data telekomunikasi untuk analytics, reporting, dan business intelligence dalam satu dashboard terpusat.",
    image: "/projects/xl.png",
    gradient: "from-slate-800 to-red-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "Petabyte-scale data processing",
    technologies: ["Kafka", "Spark", "Elasticsearch", "Kibana"],
    links: { live: "#", github: "#" },
  },
  {
    id: 8,
    title: "Fraction Cognitive Tutor",
    category: "Education",
    categoryColor:
      "bg-indigo-900/60 text-indigo-200 border border-indigo-700/50",
    description:
      "Sistem tutor kognitif berbasis AI untuk pembelajaran matematika pecahan yang mengadaptasi metode pengajaran sesuai dengan kemampuan dan gaya belajar individual siswa.",
    image: "/projects/Fraction Cognitive Tutor.png",
    gradient: "from-slate-800 to-indigo-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "85% learning improvement",
    technologies: ["React", "Python", "ML", "Firebase"],
    links: { live: "#", github: "#" },
  },
  {
    id: 9,
    title: "M.A.T.C.H Platform",
    category: "Matching System",
    categoryColor: "bg-pink-900/60 text-pink-200 border border-pink-700/50",
    description:
      "Platform M.A.T.C.H (Mutual Adaptive Technology for Collaborative Harmony) yang menggunakan algoritma machine learning untuk mencocokkan preferensi dan kompatibilitas dalam berbagai konteks aplikasi.",
    image: "/projects/M.A.T.C.H.png",
    gradient: "from-slate-800 to-pink-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "92% matching accuracy",
    technologies: ["React Native", "Python", "ML", "Redis"],
    links: { live: "#", github: "#" },
  },
  {
    id: 10,
    title: "Muslim.In",
    category: "Religious Tech",
    categoryColor: "bg-teal-900/60 text-teal-200 border border-teal-700/50",
    description:
      "Platform digital komprehensif untuk komunitas Muslim Indonesia yang menyediakan fitur ibadah, kajian, komunitas, dan layanan keagamaan berbasis teknologi modern.",
    image: "/projects/Muslim.In.png",
    gradient: "from-slate-800 to-teal-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "50,000+ active users",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    links: { live: "#", github: "#" },
  },
  {
    id: 11,
    title: "NOTAM AI Generator",
    category: "Aviation",
    categoryColor: "bg-sky-900/60 text-sky-200 border border-sky-700/50",
    description:
      "Generator NOTAM (Notice to Airmen) berbasis Artificial Intelligence yang otomatis menghasilkan pemberitahuan penerbangan berdasarkan data kondisi bandara dan cuaca real-time.",
    image: "/projects/NOTAM Artificial Intelligence Generator.png",
    gradient: "from-slate-800 to-sky-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "100% aviation safety compliance",
    technologies: ["Python", "NLP", "FastAPI", "PostgreSQL"],
    links: { live: "#", github: "#" },
  },
  {
    id: 12,
    title: "Remote Sensing Surveillance",
    category: "Security",
    categoryColor: "bg-slate-900/60 text-slate-200 border border-slate-700/50",
    description:
      "Sistem surveillance berbasis data remote sensing yang menggunakan satelit dan drone untuk monitoring keamanan area luas dengan teknologi computer vision dan AI analytics.",
    image: "/projects/remote.png",
    gradient: "from-slate-800 to-slate-900",
    cardBg: "bg-slate-900/80 border-slate-700/50",
    metrics: "1000+ km² coverage area",
    technologies: ["Python", "OpenCV", "GIS", "TensorFlow"],
    links: { live: "#", github: "#" },
  },
];

// Placeholder Background Component for projects without images
const ProjectPlaceholder = ({
  category,
}: {
  title: string;
  category: string;
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Mental Health":
        return "🧠";
      case "Agriculture":
        return "🌾";
      case "Education":
        return "📚";
      case "Telecommunications":
        return "📡";
      case "Healthcare":
        return "🏥";
      case "Smart City":
        return "🏙️";
      case "Matching System":
        return "🔗";
      case "Religious Tech":
        return "🕌";
      case "Aviation":
        return "✈️";
      case "Security":
        return "🛡️";
      default:
        return "💻";
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "Mental Health":
        return "from-blue-600 via-indigo-600 to-purple-700";
      case "Agriculture":
        return "from-green-600 via-emerald-600 to-teal-700";
      case "Education":
        return "from-purple-600 via-violet-600 to-indigo-700";
      case "Telecommunications":
        return "from-orange-600 via-red-600 to-pink-700";
      case "Healthcare":
        return "from-emerald-600 via-teal-600 to-cyan-700";
      case "Smart City":
        return "from-cyan-600 via-blue-600 to-indigo-700";
      case "Matching System":
        return "from-pink-600 via-rose-600 to-red-700";
      case "Religious Tech":
        return "from-teal-600 via-green-600 to-emerald-700";
      case "Aviation":
        return "from-sky-600 via-blue-600 to-indigo-700";
      case "Security":
        return "from-slate-600 via-gray-600 to-zinc-700";
      default:
        return "from-purple-600 via-violet-600 to-indigo-700";
    }
  };

  return (
    <div
      className={`relative w-full h-full bg-gradient-to-br ${getCategoryGradient(
        category
      )} overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute top-1/4 right-0 w-24 h-24 bg-white rounded-full translate-x-12"></div>
        <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-white rounded-full translate-y-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Central Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="text-4xl sm:text-6xl mb-4 opacity-80">
          {getCategoryIcon(category)}
        </div>
        <div className="text-white/90 font-bold text-lg sm:text-xl mb-2 line-clamp-2">
          {category}
        </div>
        <div className="text-white/60 text-xs sm:text-sm font-medium px-4">
          Project Portfolio
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-tr-full"></div>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-20">
        {/* Enhanced Header Section */}
        <AnimatedOnScroll>
          <div className="text-center mb-12 sm:mb-20">
            <div className="bg-purple-900/30 border border-purple-700/50 rounded-full text-xs sm:text-sm font-medium text-purple-200 inline-flex items-center gap-2 px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Portofolio Proyek
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-6 sm:mb-8 tracking-tight">
              Proyek Kami
            </h1>
            <p className="text-base sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
              Mengubah berbagai industri melalui solusi teknologi inovatif.
              Setiap proyek mencerminkan komitmen kami terhadap keunggulan,
              skalabilitas, dan dampak nyata di berbagai sektor.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-20">
          {projects.map((project) => (
            <AnimatedOnScroll key={project.id}>
              <div
                className={`group relative overflow-hidden border rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${project.cardBg} hover:shadow-purple-500/10`}
              >
                {/* Header Section with Gradient */}
                <div
                  className={`relative p-6 sm:p-8 text-white bg-gradient-to-br ${project.gradient} overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold line-clamp-2 pr-4">
                        {project.title}
                      </h3>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:bg-white/20 p-2 rounded-full transition-colors duration-200 inline-flex items-center justify-center flex-shrink-0"
                      >
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    </div>
                    <p className="text-white/90 leading-relaxed mb-4 text-sm sm:text-base line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="bg-white/20 text-white hover:bg-white/30 border border-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {project.metrics}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  {project.image && !project.image.includes("placeholder") ? (
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <ProjectPlaceholder
                      title={project.title}
                      category={project.category}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span
                      className={`${project.categoryColor} font-semibold shadow-lg backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="p-4 sm:p-6 bg-slate-900/50">
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
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-900/80 hover:bg-purple-800/80 text-white border border-purple-700/50 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center flex-1"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Lihat Proyek
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-600/50 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center flex-1"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Kode
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <AnimatedOnScroll>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/50 via-slate-900/80 to-blue-900/50 border border-purple-700/30 p-8 sm:p-12 text-center text-white backdrop-blur-sm">
            {/* Background Elements */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />
            <div className="relative z-10">
              <div className="bg-purple-900/40 border border-purple-700/50 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                Siap Bangun Sesuatu yang Hebat?
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Mari Ciptakan
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                  Kisah Sukses Anda Berikutnya
                </span>
              </h2>
              <p className="text-base sm:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Bergabunglah bersama perusahaan-perusahaan inovatif yang telah
                bertransformasi dengan solusi teknologi kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-900/80 text-white hover:bg-purple-800/80 border border-purple-700/50 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg backdrop-blur-sm rounded-lg transition-colors duration-200">
                  Mulai Proyek Anda
                </button>
                <button className="border border-slate-600/50 text-slate-200 hover:bg-slate-800/50 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-slate-900/30 backdrop-blur-sm rounded-lg transition-colors duration-200">
                  Lihat Studi Kasus
                </button>
              </div>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </div>
  );
}
