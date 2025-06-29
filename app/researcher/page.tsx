"use client";

import {
  Search,
  Filter,
  MapPin,
  GraduationCap,
  BookOpen,
  ExternalLink,
  Mail,
  Users,
  Award,
} from "lucide-react";
import Image from "next/image";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import { useState } from "react";

const researchFields = [
  "Semua Bidang",
  "Machine Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Keamanan Siber",
  "Data Science",
  "Kecerdasan Buatan",
  "Deep Learning",
  "Robotika",
  "IoT",
  "Blockchain",
  "Rekayasa Perangkat Lunak",
  "Interaksi Manusia-Komputer",
];

const studyPrograms = [
  "Semua Program Studi",
  "Teknik Informatika",
  "Sistem Informasi",
  "Teknik Komputer",
  "Data Science",
  "Keamanan Siber",
  "Rekayasa Perangkat Lunak",
  "Teknik Telekomunikasi",
  "Teknik Elektro",
  "Desain Komunikasi Visual",
];

const researchers = [
  {
    id: 1,
    name: "Prof. Dr. Ahmad Santoso, M.Sc.",
    title: "Professor of Computer Science",
    institution: "Telkom University",
    department: "Faculty of Informatics",
    studyProgram: "Teknik Informatika",
    researchFields: [
      "Machine Learning",
      "Artificial Intelligence",
      "Data Science",
    ],
    email: "ahmad.santoso@telkomuniversity.ac.id",
    image: "/placeholder.svg?height=300&width=300",
    publications: 45,
    citations: 1250,
    hIndex: 18,
    experience: "15+ years",
    description:
      "Spesialisasi dalam pengembangan algoritma machine learning untuk aplikasi smart city dan sustainable technology. Aktif dalam penelitian kolaboratif internasional dan pembimbing mahasiswa S2/S3.",
    recentPapers: [
      "Deep Learning Approaches for Smart Traffic Management",
      "AI-Driven Sustainable Energy Systems",
      "Machine Learning in Urban Planning",
    ],
    achievements: [
      "Best Paper Award IEEE 2023",
      "Outstanding Researcher Telkom University 2022",
    ],
  },
  {
    id: 2,
    name: "Dr. Sari Wijaya, Ph.D.",
    title: "Associate Professor",
    institution: "Telkom University",
    department: "Faculty of Informatics",
    studyProgram: "Data Science",
    researchFields: ["Computer Vision", "Deep Learning", "Data Science"],
    email: "sari.wijaya@telkomuniversity.ac.id",
    image: "/placeholder.svg?height=300&width=300",
    publications: 32,
    citations: 890,
    hIndex: 15,
    experience: "12+ years",
    description:
      "Fokus pada computer vision untuk aplikasi medis dan data analytics. Pioneer dalam pengembangan AI untuk diagnosis medis dan analisis big data di Indonesia.",
    recentPapers: [
      "Medical Image Analysis using Deep CNN",
      "Big Data Analytics in Healthcare",
      "Real-time Object Detection in Medical Applications",
    ],
    achievements: [
      "Young Scientist Award 2021",
      "Telkom University Research Excellence 2023",
    ],
  },
  {
    id: 3,
    name: "Dr. Budi Rahardjo, M.Eng.",
    title: "Senior Lecturer",
    institution: "Telkom University",
    department: "Faculty of Informatics",
    studyProgram: "Keamanan Siber",
    researchFields: ["Keamanan Siber", "Blockchain", "IoT"],
    email: "budi.rahardjo@telkomuniversity.ac.id",
    image: "/placeholder.svg?height=300&width=300",
    publications: 38,
    citations: 1100,
    hIndex: 16,
    experience: "18+ years",
    description:
      "Expert dalam cybersecurity dan blockchain technology. Konsultan untuk berbagai perusahaan teknologi dan pemerintah dalam bidang keamanan siber dan cryptocurrency.",
    recentPapers: [
      "Blockchain Security in IoT Networks",
      "Advanced Cryptographic Protocols",
      "Secure Smart Contract Development",
    ],
    achievements: [
      "Cybersecurity Expert of the Year 2022",
      "National Innovation Award 2021",
    ],
  },
  // Add more researchers as needed...
];

// Researcher Avatar Placeholder Component
const ResearcherAvatar = ({
  name,
  researchFields,
  title,
}: {
  name: string;
  researchFields: string[];
  title: string;
}) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .filter((word) => word.length > 0)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const getFieldGradient = (fields: string[]) => {
    const primaryField = fields[0] || "default";
    switch (primaryField) {
      case "Machine Learning":
      case "Artificial Intelligence":
        return "from-blue-500 via-purple-500 to-indigo-600";
      case "Computer Vision":
        return "from-emerald-500 via-teal-500 to-cyan-600";
      case "Natural Language Processing":
        return "from-orange-500 via-red-500 to-pink-600";
      case "Data Science":
        return "from-violet-500 via-purple-500 to-fuchsia-600";
      case "Keamanan Siber":
        return "from-red-500 via-rose-500 to-pink-600";
      case "Deep Learning":
        return "from-indigo-500 via-blue-500 to-cyan-600";
      case "Robotika":
        return "from-slate-500 via-gray-500 to-zinc-600";
      case "IoT":
        return "from-green-500 via-emerald-500 to-teal-600";
      case "Blockchain":
        return "from-amber-500 via-yellow-500 to-orange-600";
      case "Rekayasa Perangkat Lunak":
        return "from-sky-500 via-blue-500 to-indigo-600";
      case "Interaksi Manusia-Komputer":
        return "from-rose-500 via-pink-500 to-fuchsia-600";
      default:
        return "from-purple-500 via-violet-500 to-indigo-600";
    }
  };

  const getAcademicLevel = (title: string) => {
    if (title.includes("Professor")) return "👨‍🏫";
    if (title.includes("Associate")) return "🎓";
    if (title.includes("Assistant")) return "📚";
    if (title.includes("Senior")) return "🔬";
    if (title.includes("Research")) return "🧪";
    return "👨‍💼";
  };

  return (
    <div
      className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${getFieldGradient(
        researchFields
      )} overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-8 h-8 bg-white rounded-full -translate-y-2 translate-x-2"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 bg-white rounded-full translate-y-1 -translate-x-1"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-2 -translate-y-2"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
            backgroundSize: "8px 8px",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Academic Icon */}
        <div className="text-lg mb-1 opacity-80">{getAcademicLevel(title)}</div>

        {/* Initials */}
        <div className="text-white font-bold text-lg leading-none">
          {getInitials(name)}
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-6 h-6 bg-white/20 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 bg-white/20 rounded-tr-full"></div>

      {/* Subtle Border */}
      <div className="absolute inset-0 rounded-full border-2 border-white/30"></div>
    </div>
  );
};

export default function ResearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedField, setSelectedField] = useState("Semua Bidang");
  const [selectedProgram, setSelectedProgram] = useState("Semua Program Studi");
  const [showFilters, setShowFilters] = useState(false);

  const filteredResearchers = researchers.filter((researcher) => {
    const matchesSearch =
      researcher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      researcher.researchFields.some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      researcher.studyProgram.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesField =
      selectedField === "Semua Bidang" ||
      researcher.researchFields.includes(selectedField);

    const matchesProgram =
      selectedProgram === "Semua Program Studi" ||
      researcher.studyProgram === selectedProgram;

    return matchesSearch && matchesField && matchesProgram;
  });

  const stats = [
    {
      number: researchers.length.toString(),
      label: "Total Peneliti",
      icon: <Users className="w-4 h-4 sm:w-6 sm:h-6" />,
    },
    {
      number: researchers
        .reduce((sum, r) => sum + r.publications, 0)
        .toString(),
      label: "Total Publikasi",
      icon: <BookOpen className="w-4 h-4 sm:w-6 sm:h-6" />,
    },
    {
      number: researchers.reduce((sum, r) => sum + r.citations, 0).toString(),
      label: "Total Sitasi",
      icon: <Award className="w-4 h-4 sm:w-6 sm:h-6" />,
    },
    {
      number: new Set(researchers.map((r) => r.studyProgram)).size.toString(),
      label: "Program Studi",
      icon: <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-20">
        {/* Header Section */}
        <AnimatedOnScroll>
          <div className="text-center mb-12 sm:mb-20">
            <div className="bg-purple-900/30 border border-purple-700/50 rounded-full text-xs sm:text-sm font-medium text-purple-200 inline-flex items-center gap-2 px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
              Keunggulan Riset Telkom University
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-6 sm:mb-8 tracking-tight">
              Peneliti Kami
            </h1>
            <p className="text-base sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
              Kenali para dosen unggulan dari Telkom University yang terus
              mendorong batas AI dan teknologi melalui riset inovatif dan
              kolaborasi.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* Stats Section */}
        <AnimatedOnScroll>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-4 sm:p-6 text-center"
              >
                <div className="text-purple-400 mb-2 sm:mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedOnScroll>

        {/* Search and Filter Section */}
        <AnimatedOnScroll>
          <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Cari peneliti, bidang, atau program studi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-sm sm:text-base"
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden bg-purple-900/80 hover:bg-purple-800/80 text-white border border-purple-700/50 px-4 py-2.5 sm:py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
                Filter
              </button>

              {/* Desktop Filters */}
              <div className="hidden lg:flex gap-4">
                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-sm"
                >
                  {researchFields.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-sm"
                >
                  {studyPrograms.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mt-4 pt-4 border-t border-slate-700/50 space-y-4">
                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-sm"
                >
                  {researchFields.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-sm"
                >
                  {studyPrograms.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </AnimatedOnScroll>

        {/* Results Count */}
        <AnimatedOnScroll>
          <div className="mb-6 sm:mb-8">
            <p className="text-slate-400 text-sm sm:text-base px-2">
              Menampilkan {filteredResearchers.length} dari {researchers.length}{" "}
              peneliti
            </p>
          </div>
        </AnimatedOnScroll>

        {/* Researchers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-20">
          {filteredResearchers.map((researcher, index) => (
            <AnimatedOnScroll key={researcher.id}>
              <div className="group bg-slate-900/80 border border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
                {/* Header with Photo and Basic Info */}
                <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-800 to-purple-900/50">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="flex-shrink-0 self-center sm:self-start">
                      {researcher.image &&
                      researcher.image !==
                        "/placeholder.svg?height=300&width=300" ? (
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-purple-400/50">
                          <Image
                            src={researcher.image || "/placeholder.svg"}
                            alt={researcher.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <ResearcherAvatar
                          name={researcher.name}
                          researchFields={researcher.researchFields}
                          title={researcher.title}
                        />
                      )}
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        {researcher.name}
                      </h3>
                      <p className="text-purple-200 font-medium mb-2 text-sm sm:text-base">
                        {researcher.title}
                      </p>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-300 mb-2">
                        <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">
                          {researcher.studyProgram}
                        </span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-300">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">
                          {researcher.department}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Research Fields */}
                <div className="px-6 sm:px-8 py-4 border-b border-slate-700/50">
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {researcher.researchFields.map((field, fieldIndex) => (
                      <span
                        key={fieldIndex}
                        className="px-2 sm:px-3 py-1 bg-purple-900/50 text-purple-200 border border-purple-700/50 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="px-6 sm:px-8 py-4 border-b border-slate-700/50">
                  <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                    <div>
                      <div className="text-sm sm:text-lg font-bold text-white">
                        {researcher.publications}
                      </div>
                      <div className="text-xs text-slate-400">Publikasi</div>
                    </div>
                    <div>
                      <div className="text-sm sm:text-lg font-bold text-white">
                        {researcher.citations}
                      </div>
                      <div className="text-xs text-slate-400">Sitasi</div>
                    </div>
                    <div>
                      <div className="text-sm sm:text-lg font-bold text-white">
                        {researcher.hIndex}
                      </div>
                      <div className="text-xs text-slate-400">H-Index</div>
                    </div>
                    <div>
                      <div className="text-sm sm:text-lg font-bold text-white">
                        {researcher.experience}
                      </div>
                      <div className="text-xs text-slate-400">Pengalaman</div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="px-6 sm:px-8 py-4 sm:py-6">
                  <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                    {researcher.description}
                  </p>

                  {/* Recent Papers */}
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2 text-sm sm:text-base">
                      Publikasi Terbaru:
                    </h4>
                    <ul className="space-y-1">
                      {researcher.recentPapers
                        .slice(0, 2)
                        .map((paper, paperIndex) => (
                          <li
                            key={paperIndex}
                            className="text-slate-400 text-xs sm:text-sm flex items-start gap-2"
                          >
                            <span className="text-purple-400 mt-1 flex-shrink-0">
                              •
                            </span>
                            <span className="line-clamp-2">{paper}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-white font-medium mb-2 text-sm sm:text-base">
                      Prestasi Terkini:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {researcher.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="px-2 py-1 bg-amber-900/50 text-amber-200 border border-amber-700/50 rounded text-xs"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a
                      href={`mailto:${researcher.email}`}
                      className="bg-purple-900/80 hover:bg-purple-800/80 text-white border border-purple-700/50 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2 flex-1"
                    >
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                      Kontak
                    </a>
                    <button className="bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-600/50 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2 flex-1">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      Profil
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>

        {/* No Results */}
        {filteredResearchers.length === 0 && (
          <AnimatedOnScroll>
            <div className="text-center py-12 sm:py-20">
              <div className="text-4xl sm:text-6xl mb-4">🔍</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Tidak ada peneliti ditemukan
              </h3>
              <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base">
                Coba ubah kata kunci pencarian atau filter Anda
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedField("Semua Bidang");
                  setSelectedProgram("Semua Program Studi");
                }}
                className="bg-purple-900/80 hover:bg-purple-800/80 text-white border border-purple-700/50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                Hapus Semua Filter
              </button>
            </div>
          </AnimatedOnScroll>
        )}
      </div>
    </div>
  );
}
