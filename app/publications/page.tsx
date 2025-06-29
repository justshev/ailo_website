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
  "Semua Kategori",
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

const years = ["Semua Tahun", "2024", "2023", "2022", "2021", "2020"];

const journalTypes = [
  "Semua Tipe",
  "Jurnal Internasional",
  "Jurnal Nasional",
  "Prosiding Konferensi",
  "Bab Buku",
];

// Data publikasi dari PDF yang diberikan
const publications = [
  {
    id: 1,
    title:
      "Classification Badminton Pose Class Intra-Variation Using MoveNet and ConvLSTM with Improve SE Block for Player Action Analysis",
    authors: ["Bedy Purnama", "Bayu Erfianto"],
    students: ["Bintang Vieshe Mone (NIM: 2301222036)"],
    journal: "International Journal of Intelligent Engineering and Systems",
    year: 2025,
    volume: "18",
    issue: "4",
    pages: "190-201",
    category: "Computer Vision",
    type: "Jurnal Internasional Terindeks",
    quartile: "Q3",
    abstract:
      "This research presents a novel approach for badminton pose classification using MoveNet and ConvLSTM with improved SE Block. The method analyzes player actions with high accuracy for sports performance evaluation and training optimization.",
    keywords: [
      "Computer Vision",
      "Pose Classification",
      "MoveNet",
      "ConvLSTM",
      "Sports Analysis",
      "Badminton",
    ],
    doi: "10.22266/ijies2025.0430.19",
    citations: 5,
    downloads: 120,
    impact_factor: 2.1,
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "https://doi.org/10.22266/ijies2025.0430.19",
    journal_link:
      "https://www.scopus.com/record/display.uri?eid=2-s2.0-105000876830&origin=resultslist",
    status: "Published",
  },
  {
    id: 2,
    title:
      "Optimal Lot-Sizing Decisions Using Wagner-Within Algorithm Application with Google Spreadsheet Platform",
    authors: ["Bela Pitria Hakim", "Muhammad Nashir Ardiansyah"],
    students: [],
    journal:
      "International Journal on Advanced Science, Engineering and Information Technology",
    year: 2025,
    volume: "15",
    issue: "1",
    pages: "45-58",
    category: "Data Science",
    type: "Jurnal Internasional Terindeks",
    quartile: "Q4",
    abstract:
      "This study implements the Wagner-Within algorithm for optimal lot-sizing decisions using Google Spreadsheet platform, providing an accessible solution for inventory management optimization in small to medium enterprises.",
    keywords: [
      "Operations Research",
      "Lot-Sizing",
      "Wagner-Within Algorithm",
      "Google Spreadsheet",
      "Inventory Management",
    ],
    doi: "",
    citations: 2,
    downloads: 85,
    impact_factor: 1.2,
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 3,
    title:
      "Parkinson's Disease Screening Using a Fusion of Gait Point Cloud and Silhouette Features",
    authors: ["Bedy Purnama", "Bayu Erfianto"],
    students: [],
    journal: "PLOS ONE",
    year: 2025,
    volume: "20",
    issue: "1",
    pages: "e0315453",
    category: "Machine Learning",
    type: "Jurnal Internasional Terindeks",
    quartile: "Q1",
    abstract:
      "We propose a novel approach for Parkinson's disease screening by fusing gait point cloud and silhouette features. Our method achieves high accuracy in early detection, potentially improving patient outcomes through timely intervention.",
    keywords: [
      "Parkinson's Disease",
      "Gait Analysis",
      "Point Cloud",
      "Medical Diagnosis",
      "Machine Learning",
      "Healthcare",
    ],
    doi: "10.1371/journal.pone.0315453",
    citations: 12,
    downloads: 340,
    impact_factor: 3.752,
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "https://doi.org/10.1371/journal.pone.0315453",
    journal_link:
      "https://www.scopus.com/record/display.uri?eid=2-s2.0-85214131104&origin=resultslist",
    status: "Published",
  },
  {
    id: 4,
    title:
      "ResNet-50 in a Mobile Application with Facial Expression Recognition for Teacher Assessment",
    authors: [
      "Mahmud Dwi Sulistiyo",
      "Aji Gautama Putrada",
      "Donni Richasdy",
      "Aditya Firman Ihsan",
    ],
    students: [],
    journal: "International Journal of Computing and Digital Systems",
    year: 2025,
    volume: "16",
    issue: "1",
    pages: "1-12",
    category: "Computer Vision",
    type: "Jurnal Internasional Terindeks",
    quartile: "Q3",
    abstract:
      "This research develops a mobile application using ResNet-50 for facial expression recognition to assess teacher performance in educational settings. The system provides real-time feedback for improving teaching effectiveness.",
    keywords: [
      "Facial Expression Recognition",
      "ResNet-50",
      "Mobile Application",
      "Teacher Assessment",
      "Education Technology",
    ],
    doi: "",
    citations: 3,
    downloads: 95,
    impact_factor: 1.8,
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 5,
    title:
      "The Influence of Service Quality, Network Enom 2.0, and Customer Satisfaction on Telkomsel Customer Loyalty: A Study in the Papua - Maluku Area",
    authors: ["Maria Apsari Sugiat", "Anton Mulyono Azis"],
    students: ["Heri Aji Setiawan (NIM: 204032310050)"],
    journal:
      "International Journal of Innovative Research and Scientific Studies",
    year: 2025,
    volume: "8",
    issue: "1",
    pages: "25-38",
    category: "Data Science",
    type: "Jurnal Internasional Terindeks",
    quartile: "Q3",
    abstract:
      "This study analyzes the relationship between service quality, Network Enom 2.0, and customer satisfaction on Telkomsel customer loyalty in Papua-Maluku area, providing insights for telecommunications service improvement.",
    keywords: [
      "Customer Loyalty",
      "Service Quality",
      "Telecommunications",
      "Customer Satisfaction",
      "Network Quality",
    ],
    doi: "",
    citations: 1,
    downloads: 67,
    impact_factor: 1.5,
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 6,
    title: "Cocoa Ripeness Classification Using Vision Transformer",
    authors: [
      "Febryanti Sthevanie",
      "Untari Novia Wisesty",
      "Gia Septiana Wulandari",
      "Kurniawan Nur Ramadhani",
    ],
    students: [],
    journal: "Journal of Applied Engineering and Technological Science",
    year: 2025,
    volume: "6",
    issue: "2",
    pages: "663-675",
    category: "Computer Vision",
    type: "Jurnal Internasional Terindeks",
    quartile: "Q4",
    abstract:
      "We implement Vision Transformer for cocoa ripeness classification, enabling automated quality assessment in agricultural applications. The method shows promising results for precision agriculture and crop management.",
    keywords: [
      "Vision Transformer",
      "Agriculture",
      "Cocoa Classification",
      "Computer Vision",
      "Precision Agriculture",
    ],
    doi: "10.37385/jaets.v6i2.6663",
    citations: 4,
    downloads: 110,
    impact_factor: 1.1,
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "https://doi.org/10.37385/jaets.v6i2.6663",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 7,
    title:
      "Sample Denoising and Optimization Technique Based on Noise Filtering and Evolutionary Algorithms for Imbalanced Data Classification",
    authors: ["Fhira Nhita", "Asniar", "Isman Kurniawan", "Adiwijaya"],
    students: [],
    journal: "IEEE Access",
    year: 2025,
    volume: "13",
    issue: "1",
    pages: "1234-1248",
    category: "Machine Learning",
    type: "Jurnal Internasional Terindeks",
    quartile: "Q1",
    abstract:
      "This paper proposes a novel sample denoising and optimization technique combining noise filtering with evolutionary algorithms for improved imbalanced data classification performance.",
    keywords: [
      "Data Preprocessing",
      "Imbalanced Data",
      "Evolutionary Algorithms",
      "Noise Filtering",
      "Classification",
    ],
    doi: "",
    citations: 8,
    downloads: 280,
    impact_factor: 3.476,
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 8,
    title:
      "Enhancing Drug-Target Affinity Prediction Through Pre-trained Language Model and Gated Multi-Head Attention",
    authors: ["Isman Kurniawan"],
    students: ["Ghina Khoerunnisa (NIM: 2301222033)"],
    journal: "International Journal of Advances in Intelligent Informatics",
    year: 2025,
    volume: "11",
    issue: "2",
    pages: "191-205",
    category: "Kecerdasan Buatan",
    type: "Jurnal Internasional Terindeks",
    quartile: "Q3",
    abstract:
      "We present an enhanced approach for drug-target affinity prediction using pre-trained language models and gated multi-head attention mechanisms, achieving improved accuracy in pharmaceutical research applications.",
    keywords: [
      "Drug Discovery",
      "Language Models",
      "Attention Mechanism",
      "Bioinformatics",
      "Pharmaceutical Research",
    ],
    doi: "10.26555/ijain.v11i2.1910",
    citations: 6,
    downloads: 150,
    impact_factor: 2.3,
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "https://doi.org/10.26555/ijain.v11i2.1910",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 9,
    title:
      "Improving Drug-Target Affinity Prediction Using Dynamic Graph Attention Network with Multi-Scales Features and Attention Mechanism",
    authors: ["Isman Kurniawan"],
    students: ["Muhammad Rizky Yusfian Yusuf (NIM: 2301222042)"],
    journal: "International Journal of Intelligent Engineering and Systems",
    year: 2025,
    volume: "18",
    issue: "3",
    pages: "234-248",
    category: "Kecerdasan Buatan",
    type: "Jurnal Internasional Terindeks",
    quartile: "Q3",
    abstract:
      "This research introduces a dynamic graph attention network with multi-scale features for drug-target affinity prediction, providing enhanced accuracy for drug discovery and development processes.",
    keywords: [
      "Graph Neural Networks",
      "Drug Discovery",
      "Attention Networks",
      "Multi-scale Features",
      "Bioinformatics",
    ],
    doi: "",
    citations: 7,
    downloads: 165,
    impact_factor: 2.1,
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "https://oaji.net/articles/2023/3603-1742095334.pdf",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 10,
    title:
      "A Portable Real-Time Electronic Nose for Evaluating Seafood Freshness Using Machine Learning",
    authors: ["Ledya Novamizanti", "Dedy Rahman Wijaya"],
    students: [
      "Muhammad Rafi Mahfuz Setyagraha (NIM: 1101213355)",
      "Hurul Aini Nurqamaradillah (NIM: 1101213218)",
      "Laksamana Mikhail Hermawan (NIM: 1101213228)",
      "Nyoman Raflly Pratama (NIM: 1101213277)",
    ],
    journal: "IEEE Access",
    year: 2025,
    volume: "13",
    issue: "1",
    pages: "5678-5692",
    category: "IoT",
    type: "Jurnal Internasional Terindeks",
    quartile: "Q1",
    abstract:
      "We develop a portable real-time electronic nose system for seafood freshness evaluation using machine learning algorithms, providing an innovative solution for food quality assessment in the seafood industry.",
    keywords: [
      "Electronic Nose",
      "Food Quality",
      "Machine Learning",
      "IoT",
      "Seafood",
      "Real-time Systems",
    ],
    doi: "",
    citations: 9,
    downloads: 220,
    impact_factor: 3.476,
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 11,
    title:
      "Large-Scale Cross-Cultural Tourism Analytics: Integrating Transformer-Based Text Mining and Network Analysis",
    authors: [
      "Dian Puteri Ramadhani",
      "Andry Alamsyah",
      "Mochamad Yudha Febrianta",
    ],
    students: [
      "Muhammad Nadhif Fajriananda (NIM: 1401204386)",
      "Mahira Shafiya Nada (NIM: 1401204195)",
      "Fathiyyah Hasanah (NIM: 1401204478)",
    ],
    journal: "Computers",
    year: 2025,
    volume: "14",
    issue: "1",
    pages: "27-45",
    category: "Natural Language Processing",
    type: "Jurnal Internasional Terindeks",
    quartile: "Q2",
    abstract:
      "This study presents a comprehensive framework for large-scale cross-cultural tourism analytics by integrating transformer-based text mining with network analysis, providing insights for tourism industry development.",
    keywords: [
      "Tourism Analytics",
      "Text Mining",
      "Transformer Models",
      "Network Analysis",
      "Cross-cultural Studies",
    ],
    doi: "",
    citations: 11,
    downloads: 310,
    impact_factor: 2.9,
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "https://www.mdpi.com/2073-431X/14/1/27",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 12,
    title:
      "Comprehensive Analysis of Consumer Sentiments and Topic Modeling on Samsung Z Fold Reviews Using NLP Techniques",
    authors: ["Mochamad Yudha Febrianta"],
    students: ["Zidane Zulfikar Supratman (NIM: 1401204461)"],
    journal: "Journal of Information Systems Engineering and Management",
    year: 2025,
    volume: "10",
    issue: "29s",
    pages: "4460-4475",
    category: "Natural Language Processing",
    type: "Jurnal Internasional Terindeks",
    quartile: "Q3",
    abstract:
      "We conduct comprehensive sentiment analysis and topic modeling on Samsung Z Fold reviews using advanced NLP techniques, providing valuable insights for product development and marketing strategies.",
    keywords: [
      "Sentiment Analysis",
      "Topic Modeling",
      "NLP",
      "Consumer Reviews",
      "Product Analysis",
    ],
    doi: "10.52783/jisem.v10i29s.4460",
    citations: 3,
    downloads: 125,
    impact_factor: 1.7,
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "https://doi.org/10.52783/jisem.v10i29s.4460",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 13,
    title:
      "From Broadcasters to Herbal Sellers: The Commercial-Ethical Shift in Indonesian Local Radio",
    authors: ["Muhammad Sufyan Abdurrahman", "Slamet Parsono"],
    students: [],
    journal: "Journal of Radio and Audio Media",
    year: 2025,
    volume: "32",
    issue: "1",
    pages: "78-95",
    category: "Interaksi Manusia-Komputer",
    type: "Jurnal Internasional Terindeks",
    quartile: "Q2",
    abstract:
      "This research examines the commercial-ethical transformation in Indonesian local radio broadcasting, analyzing the shift from traditional broadcasting to commercial herbal product sales and its implications.",
    keywords: [
      "Radio Broadcasting",
      "Media Ethics",
      "Commercial Broadcasting",
      "Indonesian Media",
      "Communication Studies",
    ],
    doi: "",
    citations: 2,
    downloads: 89,
    impact_factor: 2.1,
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 14,
    title:
      "The Development of Contextual Chat Interactions with Retrieval-Augmented Generation (RAG) System for Facilitating Learning Hadith",
    authors: ["Rio Nurtantyana", "Yudi Priyadi", "Eko Darwiyanto"],
    students: [],
    journal:
      "Indonesian Journal of Electrical Engineering and Computer Science",
    year: 2025,
    volume: "33",
    issue: "1",
    pages: "156-168",
    category: "Natural Language Processing",
    type: "Jurnal Internasional Terindeks",
    quartile: "Q3",
    abstract:
      "We develop a contextual chat interaction system using Retrieval-Augmented Generation (RAG) for facilitating Hadith learning, combining modern AI techniques with Islamic educational content.",
    keywords: [
      "RAG",
      "Chatbot",
      "Islamic Education",
      "Natural Language Processing",
      "Educational Technology",
    ],
    doi: "",
    citations: 4,
    downloads: 140,
    impact_factor: 1.9,
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
  {
    id: 15,
    title:
      "Software Requirement Specification Compatibility Design Method Through Use Case Diagram Artifacts Using Text Mining on AkuOnline Learning Application",
    authors: ["Yudi Priyadi"],
    students: [],
    journal: "Ingenierie des Systemes d'Information",
    year: 2025,
    volume: "30",
    issue: "1",
    pages: "89-102",
    category: "Rekayasa Perangkat Lunak",
    type: "Jurnal Internasional Terindeks",
    quartile: "Q3",
    abstract:
      "This research proposes a software requirement specification compatibility design method using use case diagram artifacts and text mining techniques for the AkuOnline learning application development.",
    keywords: [
      "Software Engineering",
      "Requirements Engineering",
      "Use Case Diagrams",
      "Text Mining",
      "E-learning",
    ],
    doi: "",
    citations: 1,
    downloads: 75,
    impact_factor: 1.6,
    image: "/placeholder.svg?height=200&width=300",
    pdf_link: "#",
    journal_link: "#",
    status: "Published",
  },
];

// Placeholder Background Component
const PlaceholderBackground = ({
  category,
}: {
  category: string;
  title: string;
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Machine Learning":
      case "Kecerdasan Buatan":
        return "🤖";
      case "Computer Vision":
        return "👁️";
      case "Natural Language Processing":
        return "💬";
      case "Data Science":
        return "📊";
      case "Keamanan Siber":
        return "🔒";
      case "Deep Learning":
        return "🧠";
      case "Robotika":
        return "🦾";
      case "IoT":
        return "📡";
      case "Blockchain":
        return "⛓️";
      case "Rekayasa Perangkat Lunak":
        return "⚙️";
      case "Interaksi Manusia-Komputer":
        return "👤";
      default:
        return "📚";
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "Machine Learning":
      case "Kecerdasan Buatan":
        return "from-blue-600 via-purple-600 to-indigo-700";
      case "Computer Vision":
        return "from-emerald-600 via-teal-600 to-cyan-700";
      case "Natural Language Processing":
        return "from-orange-600 via-red-600 to-pink-700";
      case "Data Science":
        return "from-violet-600 via-purple-600 to-fuchsia-700";
      case "Keamanan Siber":
        return "from-red-600 via-rose-600 to-pink-700";
      case "Deep Learning":
        return "from-indigo-600 via-blue-600 to-cyan-700";
      case "Robotika":
        return "from-slate-600 via-gray-600 to-zinc-700";
      case "IoT":
        return "from-green-600 via-emerald-600 to-teal-700";
      case "Blockchain":
        return "from-amber-600 via-yellow-600 to-orange-700";
      case "Rekayasa Perangkat Lunak":
        return "from-sky-600 via-blue-600 to-indigo-700";
      case "Interaksi Manusia-Komputer":
        return "from-rose-600 via-pink-600 to-fuchsia-700";
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
      {/* Geometric Pattern Background */}
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
          Research Publication
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-tr-full"></div>
    </div>
  );
};

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [selectedYear, setSelectedYear] = useState("Semua Tahun");
  const [selectedType, setSelectedType] = useState("Semua Tipe");
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
      selectedCategory === "Semua Kategori" ||
      publication.category === selectedCategory;

    const matchesYear =
      selectedYear === "Semua Tahun" ||
      publication.year.toString() === selectedYear;

    const matchesType =
      selectedType === "Semua Tipe" ||
      publication.type.includes(selectedType.replace("Jurnal ", ""));

    return matchesSearch && matchesCategory && matchesYear && matchesType;
  });

  const stats = [
    {
      number: publications.length.toString(),
      label: "Total Publikasi",
      icon: <BookOpen className="w-4 h-4 sm:w-6 sm:h-6" />,
    },
    {
      number: publications.reduce((sum, p) => sum + p.citations, 0).toString(),
      label: "Total Sitasi",
      icon: <Quote className="w-4 h-4 sm:w-6 sm:h-6" />,
    },
    {
      number: publications.reduce((sum, p) => sum + p.downloads, 0).toString(),
      label: "Total Unduhan",
      icon: <Download className="w-4 h-4 sm:w-6 sm:h-6" />,
    },
    {
      number: publications.filter((p) => p.quartile === "Q1").length.toString(),
      label: "Jurnal Q1",
      icon: <Award className="w-4 h-4 sm:w-6 sm:h-6" />,
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
              Publikasi Riset
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-6 sm:mb-8 tracking-tight">
              Publikasi
            </h1>
            <p className="text-base sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
              Jelajahi publikasi riset terbaru kami tahun 2025, menampilkan
              studi mutakhir di bidang AI, machine learning, dan inovasi
              teknologi dari dosen dan mahasiswa Telkom University.
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
                  placeholder="Cari publikasi, penulis, jurnal..."
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
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-sm"
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
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-sm"
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
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-sm"
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
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-sm"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-sm"
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
                    className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-sm"
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
          <div className="mb-6 sm:mb-8">
            <p className="text-slate-400 text-sm sm:text-base px-2">
              Menampilkan {filteredPublications.length} dari{" "}
              {publications.length} publikasi
            </p>
          </div>
        </AnimatedOnScroll>

        {/* Publications Grid */}
        <div className="space-y-6 sm:space-y-8 mb-20">
          {filteredPublications.map((publication) => (
            <AnimatedOnScroll key={publication.id}>
              <div className="group bg-slate-900/80 border border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-80 h-48 sm:h-56 lg:h-auto relative overflow-hidden">
                    {publication.image &&
                    publication.image !==
                      "/placeholder.svg?height=200&width=300" ? (
                      <Image
                        src={publication.image || "/placeholder.svg"}
                        alt={publication.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <PlaceholderBackground
                        category={publication.category}
                        title={publication.title}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-purple-900/60 text-purple-200 border border-purple-700/50 font-semibold shadow-lg backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                        {publication.category}
                      </span>
                    </div>

                    {/* Quartile Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span
                        className={`font-semibold shadow-lg backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                          publication.quartile === "Q1"
                            ? "bg-emerald-900/60 text-emerald-200 border border-emerald-700/50"
                            : publication.quartile === "Q2"
                            ? "bg-blue-900/60 text-blue-200 border border-blue-700/50"
                            : publication.quartile === "Q3"
                            ? "bg-amber-900/60 text-amber-200 border border-amber-700/50"
                            : "bg-red-900/60 text-red-200 border border-red-700/50"
                        }`}
                      >
                        {publication.quartile}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-4 sm:p-6 lg:p-8">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight group-hover:text-purple-200 transition-colors duration-200">
                        {publication.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate">
                            {publication.authors.join(", ")}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{publication.year}</span>
                        </div>
                      </div>
                      <p className="text-purple-200 font-medium mb-2 text-sm sm:text-base">
                        {publication.journal}
                      </p>
                      <p className="text-slate-400 text-xs sm:text-sm">
                        Vol. {publication.volume}, Issue {publication.issue},
                        pp. {publication.pages}
                      </p>
                      {publication.students.length > 0 && (
                        <div className="mt-2">
                          <p className="text-teal-200 text-xs sm:text-sm">
                            <span className="font-medium">Mahasiswa: </span>
                            {publication.students.join(", ")}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Abstract */}
                    <div className="mb-4">
                      <p className="text-slate-300 leading-relaxed text-xs sm:text-sm line-clamp-3">
                        {publication.abstract}
                      </p>
                    </div>

                    {/* Keywords */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 sm:gap-2">
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
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 bg-slate-800/30 rounded-lg">
                      <div className="text-center">
                        <div className="text-sm sm:text-lg font-bold text-white">
                          {publication.citations}
                        </div>
                        <div className="text-xs text-slate-400">Sitasi</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm sm:text-lg font-bold text-white">
                          {publication.downloads}
                        </div>
                        <div className="text-xs text-slate-400">Unduhan</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm sm:text-lg font-bold text-white">
                          {publication.impact_factor}
                        </div>
                        <div className="text-xs text-slate-400">
                          Faktor Dampak
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons - Responsive Layout */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <a
                        href={publication.pdf_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-900/80 hover:bg-purple-800/80 text-white border border-purple-700/50 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2 flex-1"
                      >
                        <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Unduh PDF</span>
                        <span className="sm:hidden">PDF</span>
                      </a>
                      <a
                        href={publication.journal_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-600/50 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2 flex-1"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Lihat Jurnal</span>
                        <span className="sm:hidden">Jurnal</span>
                      </a>
                      <button className="bg-teal-900/80 hover:bg-teal-800/80 text-teal-200 border border-teal-700/50 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2 flex-1 sm:flex-initial">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                        Detail
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
            <div className="text-center py-12 sm:py-20">
              <div className="text-4xl sm:text-6xl mb-4">📚</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Tidak ada publikasi ditemukan
              </h3>
              <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base">
                Coba ubah kata kunci pencarian atau filter Anda
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Semua Kategori");
                  setSelectedYear("Semua Tahun");
                  setSelectedType("Semua Tipe");
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
