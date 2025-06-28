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
  "All Fields",
  "Machine Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Cybersecurity",
  "Data Science",
  "Artificial Intelligence",
  "Deep Learning",
  "Robotics",
  "IoT",
  "Blockchain",
  "Software Engineering",
  "Human-Computer Interaction",
];

const studyPrograms = [
  "All Programs",
  "Teknik Informatika",
  "Sistem Informasi",
  "Teknik Komputer",
  "Data Science",
  "Cybersecurity",
  "Software Engineering",
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
    studyProgram: "Cybersecurity",
    researchFields: ["Cybersecurity", "Blockchain", "IoT"],
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
  {
    id: 4,
    name: "Prof. Dr. Maya Indrawati, Ph.D.",
    title: "Professor of Information Systems",
    institution: "Telkom University",
    department: "Faculty of Informatics",
    studyProgram: "Sistem Informasi",
    researchFields: [
      "Natural Language Processing",
      "Software Engineering",
      "Machine Learning",
    ],
    email: "maya.indrawati@telkomuniversity.ac.id",
    image: "/placeholder.svg?height=300&width=300",
    publications: 52,
    citations: 1450,
    hIndex: 21,
    experience: "20+ years",
    description:
      "Peneliti senior dalam NLP untuk bahasa Indonesia dan sistem informasi enterprise. Mengembangkan berbagai tools dan framework untuk pemrosesan bahasa alami dan software engineering.",
    recentPapers: [
      "Indonesian Language Models for NLP",
      "Enterprise Information Systems Architecture",
      "Cross-lingual Information Retrieval",
    ],
    achievements: [
      "ASEAN Outstanding Scientist 2023",
      "Google Research Award 2022",
    ],
  },
  {
    id: 5,
    name: "Dr. Rizki Pratama, M.Sc.",
    title: "Assistant Professor",
    institution: "Telkom University",
    department: "Faculty of Electrical Engineering",
    studyProgram: "Teknik Komputer",
    researchFields: ["Robotics", "IoT", "Machine Learning"],
    email: "rizki.pratama@telkomuniversity.ac.id",
    image: "/placeholder.svg?height=300&width=300",
    publications: 28,
    citations: 650,
    hIndex: 12,
    experience: "8+ years",
    description:
      "Spesialisasi dalam embedded systems, robotics dan IoT untuk aplikasi industri 4.0. Aktif dalam pengembangan smart manufacturing solutions dan autonomous systems.",
    recentPapers: [
      "Industrial IoT for Smart Manufacturing",
      "Embedded Systems in Robotics",
      "Edge Computing in Industrial Applications",
    ],
    achievements: [
      "Rising Star Researcher 2023",
      "Telkom University Innovation Award 2022",
    ],
  },
  {
    id: 6,
    name: "Dr. Dewi Sartika, Ph.D.",
    title: "Research Scientist",
    institution: "Telkom University",
    department: "Faculty of Informatics",
    studyProgram: "Software Engineering",
    researchFields: [
      "Software Engineering",
      "Human-Computer Interaction",
      "Artificial Intelligence",
    ],
    email: "dewi.sartika@telkomuniversity.ac.id",
    image: "/placeholder.svg?height=300&width=300",
    publications: 35,
    citations: 920,
    hIndex: 14,
    experience: "10+ years",
    description:
      "Expert dalam software engineering methodologies dan human-computer interaction. Mengembangkan framework dan tools untuk software development yang user-centered dan sustainable.",
    recentPapers: [
      "Agile Software Development in AI Projects",
      "User Experience in Mobile Applications",
      "Software Quality Assurance in Machine Learning",
    ],
    achievements: [
      "Software Engineering Excellence Award 2023",
      "UX Research Grant 2022",
    ],
  },
  {
    id: 7,
    name: "Dr. Andi Nugroho, M.T.",
    title: "Associate Professor",
    institution: "Telkom University",
    department: "Faculty of Electrical Engineering",
    studyProgram: "Teknik Telekomunikasi",
    researchFields: ["IoT", "Cybersecurity", "Machine Learning"],
    email: "andi.nugroho@telkomuniversity.ac.id",
    image: "/placeholder.svg?height=300&width=300",
    publications: 29,
    citations: 780,
    hIndex: 13,
    experience: "11+ years",
    description:
      "Fokus pada teknologi telekomunikasi modern, 5G networks, dan IoT security. Mengembangkan solusi komunikasi yang aman dan efisien untuk smart city applications.",
    recentPapers: [
      "5G Network Security Architecture",
      "IoT Communication Protocols",
      "Machine Learning in Network Optimization",
    ],
    achievements: [
      "Telecommunication Innovation Award 2023",
      "IEEE Outstanding Paper 2022",
    ],
  },
  {
    id: 8,
    name: "Dr. Lisa Permata, M.Des.",
    title: "Senior Lecturer",
    institution: "Telkom University",
    department: "Faculty of Creative Industries",
    studyProgram: "Desain Komunikasi Visual",
    researchFields: [
      "Human-Computer Interaction",
      "Computer Vision",
      "Artificial Intelligence",
    ],
    email: "lisa.permata@telkomuniversity.ac.id",
    image: "/placeholder.svg?height=300&width=300",
    publications: 24,
    citations: 560,
    hIndex: 11,
    experience: "9+ years",
    description:
      "Spesialisasi dalam intersection antara design dan technology. Mengembangkan AI-powered design tools dan research dalam user experience untuk aplikasi AI.",
    recentPapers: [
      "AI-Assisted Design Tools for Creative Industries",
      "User Experience in AI Applications",
      "Computer Vision for Design Analysis",
    ],
    achievements: [
      "Creative Technology Award 2023",
      "Design Innovation Grant 2022",
    ],
  },
];

export default function ResearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedField, setSelectedField] = useState("All Fields");
  const [selectedProgram, setSelectedProgram] = useState("All Programs");
  const [showFilters, setShowFilters] = useState(false);

  const filteredResearchers = researchers.filter((researcher) => {
    const matchesSearch =
      researcher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      researcher.researchFields.some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      researcher.studyProgram.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesField =
      selectedField === "All Fields" ||
      researcher.researchFields.includes(selectedField);
    const matchesProgram =
      selectedProgram === "All Programs" ||
      researcher.studyProgram === selectedProgram;

    return matchesSearch && matchesField && matchesProgram;
  });

  const stats = [
    {
      number: researchers.length.toString(),
      label: "Total Researchers",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: researchers
        .reduce((sum, r) => sum + r.publications, 0)
        .toString(),
      label: "Total Publications",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      number: researchers.reduce((sum, r) => sum + r.citations, 0).toString(),
      label: "Total Citations",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: new Set(researchers.map((r) => r.studyProgram)).size.toString(),
      label: "Study Programs",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 pt-40 pb-20">
        {/* Header Section */}
        <AnimatedOnScroll>
          <div className="text-center mb-20">
            <div className="bg-purple-900/30 border border-purple-700/50 rounded-full text-sm font-medium text-purple-200 inline-flex items-center gap-2 px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4" />
              Telkom University Research Excellence
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-8 tracking-tight">
              Our Researchers
            </h1>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Meet our distinguished faculty members from Telkom University who
              are advancing the frontiers of AI and technology through
              innovative research and collaboration.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* Stats Section */}
        <AnimatedOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-6 text-center"
              >
                <div className="text-purple-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedOnScroll>

        {/* Search and Filter Section */}
        <AnimatedOnScroll>
          <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search researchers, fields, or study programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden bg-purple-900/80 hover:bg-purple-800/80 text-white border border-purple-700/50 px-4 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>

              {/* Desktop Filters */}
              <div className="hidden lg:flex gap-4">
                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
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
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
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
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
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
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
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
          <div className="mb-8">
            <p className="text-slate-400">
              Showing {filteredResearchers.length} of {researchers.length}{" "}
              researchers
            </p>
          </div>
        </AnimatedOnScroll>

        {/* Researchers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filteredResearchers.map((researcher, index) => (
            <AnimatedOnScroll key={researcher.id}>
              <div className="group bg-slate-900/80 border border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
                {/* Header with Photo and Basic Info */}
                <div className="p-8 bg-gradient-to-br from-slate-800 to-purple-900/50">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-purple-400/50">
                        <Image
                          src={researcher.image || "/placeholder.svg"}
                          alt={researcher.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {researcher.name}
                      </h3>
                      <p className="text-purple-200 font-medium mb-2">
                        {researcher.title}
                      </p>
                      <div className="flex items-center gap-2 text-slate-300 mb-2">
                        <GraduationCap className="w-4 h-4" />
                        <span className="text-sm">
                          {researcher.studyProgram}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{researcher.department}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Research Fields */}
                <div className="px-8 py-4 border-b border-slate-700/50">
                  <div className="flex flex-wrap gap-2">
                    {researcher.researchFields.map((field, fieldIndex) => (
                      <span
                        key={fieldIndex}
                        className="px-3 py-1 bg-purple-900/50 text-purple-200 border border-purple-700/50 rounded-full text-sm font-medium"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="px-8 py-4 border-b border-slate-700/50">
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-white">
                        {researcher.publications}
                      </div>
                      <div className="text-xs text-slate-400">Publications</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">
                        {researcher.citations}
                      </div>
                      <div className="text-xs text-slate-400">Citations</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">
                        {researcher.hIndex}
                      </div>
                      <div className="text-xs text-slate-400">H-Index</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">
                        {researcher.experience}
                      </div>
                      <div className="text-xs text-slate-400">Experience</div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="px-8 py-6">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {researcher.description}
                  </p>

                  {/* Recent Papers */}
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">
                      Recent Publications:
                    </h4>
                    <ul className="space-y-1">
                      {researcher.recentPapers
                        .slice(0, 2)
                        .map((paper, paperIndex) => (
                          <li
                            key={paperIndex}
                            className="text-slate-400 text-sm flex items-start gap-2"
                          >
                            <span className="text-purple-400 mt-1">•</span>
                            {paper}
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-2">
                      Recent Achievements:
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
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${researcher.email}`}
                      className="flex-1 bg-purple-900/80 hover:bg-purple-800/80 text-white border border-purple-700/50 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                    <button className="flex-1 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-600/50 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Profile
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
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                No researchers found
              </h3>
              <p className="text-slate-400 mb-8">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedField("All Fields");
                  setSelectedProgram("All Programs");
                }}
                className="bg-purple-900/80 hover:bg-purple-800/80 text-white border border-purple-700/50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </div>
          </AnimatedOnScroll>
        )}
      </div>
    </div>
  );
}
