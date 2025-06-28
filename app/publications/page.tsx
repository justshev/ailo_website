"use client";

import {
  Search,
  Filter,
  Calendar,
  Users,
  ExternalLink,
  Download,
  BookOpen,
  Award,
  Eye,
  Quote,
} from "lucide-react";
import Image from "next/image";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import { useState } from "react";

const categories = [
  "All Categories",
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

const years = ["All Years", "2024", "2023", "2022", "2021", "2020"];

const journalTypes = [
  "All Types",
  "International Journal",
  "National Journal",
  "Conference Proceedings",
  "Book Chapter",
];

const publications = [
  {
    id: 1,
    title:
      "Deep Learning Approaches for Smart Traffic Management in Urban Areas",
    authors: ["Prof. Dr. Ahmad Santoso", "Dr. Sari Wijaya", "Muhammad Rizki"],
    journal: "IEEE Transactions on Intelligent Transportation Systems",
    year: 2024,
    volume: "25",
    issue: "3",
    pages: "1245-1258",
    category: "Machine Learning",
    type: "International Journal",
    abstract:
      "This paper presents a comprehensive deep learning framework for smart traffic management in urban environments. We propose a novel CNN-LSTM hybrid model that can predict traffic flow patterns and optimize signal timing in real-time, resulting in 35% reduction in average waiting time.",
    keywords: [
      "Deep Learning",
      "Traffic Management",
      "Smart City",
      "CNN-LSTM",
      "Urban Planning",
    ],
    doi: "10.1109/TITS.2024.1234567",
    citations: 45,
    downloads: 1250,
    impact_factor: 6.319,
    quartile: "Q1",
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 2,
    title:
      "Medical Image Analysis using Convolutional Neural Networks for Early Disease Detection",
    authors: ["Dr. Sari Wijaya", "Prof. Dr. Maya Indrawati", "Andi Pratama"],
    journal: "Medical Image Analysis",
    year: 2024,
    volume: "89",
    issue: "2",
    pages: "102-118",
    category: "Computer Vision",
    type: "International Journal",
    abstract:
      "We develop an advanced CNN architecture specifically designed for medical image analysis, achieving 94.2% accuracy in early disease detection across multiple medical imaging modalities including X-ray, CT, and MRI scans.",
    keywords: [
      "Medical Imaging",
      "CNN",
      "Disease Detection",
      "Healthcare AI",
      "Computer Vision",
    ],
    doi: "10.1016/j.media.2024.102345",
    citations: 67,
    downloads: 2100,
    impact_factor: 8.545,
    quartile: "Q1",
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 3,
    title:
      "Blockchain Security Framework for IoT Networks in Industrial Applications",
    authors: ["Dr. Budi Rahardjo", "Dr. Andi Nugroho", "Siti Nurhaliza"],
    journal: "IEEE Internet of Things Journal",
    year: 2023,
    volume: "10",
    issue: "15",
    pages: "13456-13470",
    category: "Cybersecurity",
    type: "International Journal",
    abstract:
      "This research proposes a novel blockchain-based security framework for IoT networks in industrial settings. Our approach provides end-to-end encryption and decentralized authentication, reducing security vulnerabilities by 78%.",
    keywords: [
      "Blockchain",
      "IoT Security",
      "Industrial IoT",
      "Cybersecurity",
      "Decentralized Systems",
    ],
    doi: "10.1109/JIOT.2023.3287654",
    citations: 89,
    downloads: 1890,
    impact_factor: 10.238,
    quartile: "Q1",
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 4,
    title: "Indonesian Language Processing using Transformer-based Models",
    authors: ["Prof. Dr. Maya Indrawati", "Dr. Lisa Permata", "Bayu Setiawan"],
    journal: "Natural Language Engineering",
    year: 2023,
    volume: "29",
    issue: "4",
    pages: "567-589",
    category: "Natural Language Processing",
    type: "International Journal",
    abstract:
      "We present IndoBERT-Large, a transformer-based model specifically trained for Indonesian language processing tasks. Our model achieves state-of-the-art performance on multiple Indonesian NLP benchmarks with 92.3% accuracy.",
    keywords: [
      "Indonesian NLP",
      "Transformer",
      "BERT",
      "Language Model",
      "Southeast Asian Languages",
    ],
    doi: "10.1017/S1351324923000234",
    citations: 156,
    downloads: 3200,
    impact_factor: 2.875,
    quartile: "Q2",
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 5,
    title:
      "Autonomous Robot Navigation using Reinforcement Learning in Dynamic Environments",
    authors: ["Dr. Rizki Pratama", "Prof. Dr. Ahmad Santoso", "Dewi Anggraini"],
    journal: "Robotics and Autonomous Systems",
    year: 2023,
    volume: "168",
    issue: "1",
    pages: "104-120",
    category: "Robotics",
    type: "International Journal",
    abstract:
      "This paper introduces a novel reinforcement learning approach for autonomous robot navigation in dynamic environments. Our method enables robots to adapt to changing obstacles and achieve 96% success rate in complex navigation tasks.",
    keywords: [
      "Robotics",
      "Reinforcement Learning",
      "Autonomous Navigation",
      "Dynamic Environment",
      "Path Planning",
    ],
    doi: "10.1016/j.robot.2023.104567",
    citations: 73,
    downloads: 1650,
    impact_factor: 3.928,
    quartile: "Q1",
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 6,
    title:
      "User Experience Design Principles for AI-Powered Mobile Applications",
    authors: ["Dr. Lisa Permata", "Dr. Dewi Sartika", "Rini Kusuma"],
    journal: "International Journal of Human-Computer Studies",
    year: 2024,
    volume: "182",
    issue: "1",
    pages: "103-119",
    category: "Human-Computer Interaction",
    type: "International Journal",
    abstract:
      "We establish comprehensive UX design principles specifically for AI-powered mobile applications. Our framework improves user satisfaction by 68% and reduces cognitive load in AI-human interactions.",
    keywords: [
      "UX Design",
      "AI Applications",
      "Mobile Interface",
      "Human-AI Interaction",
      "User Experience",
    ],
    doi: "10.1016/j.ijhcs.2024.103234",
    citations: 34,
    downloads: 980,
    impact_factor: 4.866,
    quartile: "Q1",
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 7,
    title: "Big Data Analytics for Smart City Infrastructure Optimization",
    authors: ["Dr. Sari Wijaya", "Dr. Andi Nugroho", "Fajar Ramadhan"],
    journal: "Future Generation Computer Systems",
    year: 2022,
    volume: "135",
    issue: "1",
    pages: "245-261",
    category: "Data Science",
    type: "International Journal",
    abstract:
      "This research presents a comprehensive big data analytics framework for optimizing smart city infrastructure. Our approach processes real-time data from multiple sources to improve city services efficiency by 42%.",
    keywords: [
      "Big Data",
      "Smart City",
      "Infrastructure",
      "Data Analytics",
      "Urban Computing",
    ],
    doi: "10.1016/j.future.2022.105234",
    citations: 112,
    downloads: 2450,
    impact_factor: 7.307,
    quartile: "Q1",
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 8,
    title: "Federated Learning for Privacy-Preserving Healthcare Data Analysis",
    authors: ["Dr. Budi Rahardjo", "Prof. Dr. Ahmad Santoso", "Indira Sari"],
    journal: "IEEE Transactions on Biomedical Engineering",
    year: 2022,
    volume: "69",
    issue: "8",
    pages: "2456-2467",
    category: "Machine Learning",
    type: "International Journal",
    abstract:
      "We propose a federated learning framework that enables collaborative healthcare data analysis while preserving patient privacy. Our method maintains 95% accuracy while ensuring complete data privacy compliance.",
    keywords: [
      "Federated Learning",
      "Healthcare Privacy",
      "Medical Data",
      "Distributed Learning",
      "HIPAA Compliance",
    ],
    doi: "10.1109/TBME.2022.3187654",
    citations: 198,
    downloads: 3100,
    impact_factor: 4.756,
    quartile: "Q1",
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
];

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedType, setSelectedType] = useState("All Types");
  const [showFilters, setShowFilters] = useState(false);

  const filteredPublications = publications.filter((publication) => {
    const matchesSearch =
      publication.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      publication.authors.some((author) =>
        author.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      publication.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      publication.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All Categories" ||
      publication.category === selectedCategory;
    const matchesYear =
      selectedYear === "All Years" ||
      publication.year.toString() === selectedYear;
    const matchesType =
      selectedType === "All Types" || publication.type === selectedType;

    return matchesSearch && matchesCategory && matchesYear && matchesType;
  });

  const stats = [
    {
      number: publications.length.toString(),
      label: "Total Publications",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      number: publications.reduce((sum, p) => sum + p.citations, 0).toString(),
      label: "Total Citations",
      icon: <Quote className="w-6 h-6" />,
    },
    {
      number: publications.reduce((sum, p) => sum + p.downloads, 0).toString(),
      label: "Total Downloads",
      icon: <Download className="w-6 h-6" />,
    },
    {
      number: publications.filter((p) => p.quartile === "Q1").length.toString(),
      label: "Q1 Journals",
      icon: <Award className="w-6 h-6" />,
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
              Research Publications
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-8 tracking-tight">
              Publications
            </h1>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive collection of research publications,
              featuring cutting-edge studies in AI, machine learning, and
              technology innovation from Telkom University researchers.
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
                  placeholder="Search publications, authors, journals, or keywords..."
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
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                >
                  {journalTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mt-4 pt-4 border-t border-slate-700/50 space-y-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                  >
                    {journalTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </AnimatedOnScroll>

        {/* Results Count */}
        <AnimatedOnScroll>
          <div className="mb-8">
            <p className="text-slate-400">
              Showing {filteredPublications.length} of {publications.length}{" "}
              publications
            </p>
          </div>
        </AnimatedOnScroll>

        {/* Publications Grid */}
        <div className="space-y-8 mb-20">
          {filteredPublications.map((publication, index) => (
            <AnimatedOnScroll key={publication.id}>
              <div className="group bg-slate-900/80 border border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-80 h-48 md:h-auto relative overflow-hidden">
                    <Image
                      src={publication.image || "/placeholder.svg"}
                      alt={publication.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-900/60 text-purple-200 border border-purple-700/50 font-semibold shadow-lg backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {publication.category}
                      </span>
                    </div>

                    {/* Quartile Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`font-semibold shadow-lg backdrop-blur-sm px-3 py-1 rounded-full text-sm ${
                          publication.quartile === "Q1"
                            ? "bg-emerald-900/60 text-emerald-200 border border-emerald-700/50"
                            : "bg-amber-900/60 text-amber-200 border border-amber-700/50"
                        }`}
                      >
                        {publication.quartile}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-purple-200 transition-colors duration-200">
                        {publication.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{publication.authors.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{publication.year}</span>
                        </div>
                      </div>

                      <p className="text-purple-200 font-medium mb-2">
                        {publication.journal}
                      </p>
                      <p className="text-slate-400 text-sm">
                        Vol. {publication.volume}, Issue {publication.issue},
                        pp. {publication.pages}
                      </p>
                    </div>

                    {/* Abstract */}
                    <div className="mb-4">
                      <p className="text-slate-300 leading-relaxed text-sm line-clamp-3">
                        {publication.abstract}
                      </p>
                    </div>

                    {/* Keywords */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {publication.keywords
                          .slice(0, 4)
                          .map((keyword, keywordIndex) => (
                            <span
                              key={keywordIndex}
                              className="px-2 py-1 bg-slate-800/50 text-slate-300 border border-slate-600/50 rounded text-xs"
                            >
                              {keyword}
                            </span>
                          ))}
                        {publication.keywords.length > 4 && (
                          <span className="px-2 py-1 bg-slate-800/50 text-slate-300 border border-slate-600/50 rounded text-xs">
                            +{publication.keywords.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-800/30 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">
                          {publication.citations}
                        </div>
                        <div className="text-xs text-slate-400">Citations</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">
                          {publication.downloads}
                        </div>
                        <div className="text-xs text-slate-400">Downloads</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">
                          {publication.impact_factor}
                        </div>
                        <div className="text-xs text-slate-400">
                          Impact Factor
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={publication.pdf_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-purple-900/80 hover:bg-purple-800/80 text-white border border-purple-700/50 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </a>
                      <a
                        href={publication.journal_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-600/50 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Journal
                      </a>
                      <button className="px-4 py-2 bg-teal-900/80 hover:bg-teal-800/80 text-teal-200 border border-teal-700/50 rounded-lg text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2">
                        <Eye className="w-4 h-4" />
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>

        {/* No Results */}
        {filteredPublications.length === 0 && (
          <AnimatedOnScroll>
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                No publications found
              </h3>
              <p className="text-slate-400 mb-8">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Categories");
                  setSelectedYear("All Years");
                  setSelectedType("All Types");
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
