import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Target,
  Eye,
  Lightbulb,
  Users,
  Award,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";

const visionMissionData = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Visi",
    description:
      "Menjadi pusat penelitian AI terdepan yang mengembangkan teknologi Secure Smart Society untuk transformasi digital yang aman dan berkelanjutan di Indonesia dan dunia.",
    color: "from-purple-900 to-blue-900",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Misi",
    description:
      "Mengembangkan solusi AI yang SAFE (Secure-Accuracy-Fairness-Explainability) melalui riset kolaboratif, inovasi berkelanjutan, dan komersialisasi teknologi untuk kesejahteraan masyarakat.",
    color: "from-blue-900 to-teal-900",
  },
];

const teamStats = [
  {
    number: "50+",
    label: "Peneliti Ahli",
    icon: <Users className="w-6 h-6" />,
  },
  {
    number: "100+",
    label: "Publikasi Ilmiah",
    icon: <Award className="w-6 h-6" />,
  },
  {
    number: "25+",
    label: "Proyek Riset",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    number: "10+",
    label: "Tahun Pengalaman",
    icon: <Calendar className="w-6 h-6" />,
  },
];

const roadmapPhases = [
  {
    year: "2022-2023",
    title: "Fundamental Research Level",
    phase: "Research Collection & Collaboration",
    description:
      "Pengumpulan dan pemetaan riset peneliti serta memperkuat kerjasama riset internal dan eksternal",
    color: "bg-green-900/60 border-green-700/50",
    textColor: "text-green-200",
  },
  {
    year: "2024",
    title: "Enhancement New Sophistication Method",
    phase: "Moving Towards Commercialization",
    description:
      "Pengembangan metode baru untuk meningkatkan dan memperkuat sistem AI dalam fokus riset Secure Smart Society",
    color: "bg-emerald-900/60 border-emerald-700/50",
    textColor: "text-emerald-200",
  },
  {
    year: "2025",
    title: "Research Adoption",
    phase: "Implementation Phase",
    description:
      "Penerapan hasil riset bidang AI dalam fokus riset bidang Secure Smart Society",
    color: "bg-blue-900/60 border-blue-700/50",
    textColor: "text-blue-200",
  },
  {
    year: "2026",
    title: "Research Recognition",
    phase: "Recognition Phase",
    description:
      "Pengakuan hasil riset bidang AI dalam fokus riset bidang Secure Smart Society",
    color: "bg-amber-900/60 border-amber-700/50",
    textColor: "text-amber-200",
  },
  {
    year: "2027",
    title: "Research Commercialization",
    phase: "Commercialization Phase",
    description:
      "Melakukan komersialisasi hasil penelitian bidang AI dalam fokus riset bidang Secure Smart Society",
    color: "bg-teal-900/60 border-teal-700/50",
    textColor: "text-teal-200",
  },
  {
    year: "2028",
    title: "National AI-Based Entrepreneurial Research Center",
    phase: "SAFE AI Implementation",
    description:
      "Menjadi National AI-Based Entrepreneurial Research Center yang SAFE-AI",
    color: "bg-green-900/60 border-green-700/50",
    textColor: "text-green-200",
  },
  {
    year: "2032",
    title: "Globalization & Industrial Transformation",
    phase: "Global Impact",
    description:
      "Teknologi yang dihasilkan tim riset CoE AILO mampu mentransformasikan secara global melalui Secure Smart Society",
    color: "bg-purple-900/60 border-purple-700/50",
    textColor: "text-purple-200",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 pt-40 pb-20">
        {/* Header Section */}
        <AnimatedOnScroll>
          <div className="text-center mb-20">
            <div className="bg-purple-900/30 border border-purple-700/50 rounded-full text-sm font-medium text-purple-200 inline-flex items-center gap-2 px-4 py-2 mb-6">
              <Users className="w-4 h-4" />
              Tentang Kami
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-8 tracking-tight">
              About Us
            </h1>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Pusat penelitian AI terdepan yang berfokus pada pengembangan
              teknologi Secure Smart Society untuk masa depan yang lebih aman
              dan cerdas.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* About Us Section */}
        <AnimatedOnScroll>
          <div className="mb-20">
            <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-8 md:p-12">
              <h2 className="text-4xl font-bold text-white mb-8">
                Tentang Kami
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    Kami adalah tim peneliti dan pengembang AI yang berdedikasi
                    untuk menciptakan solusi teknologi yang aman, akurat, adil,
                    dan dapat dijelaskan. Dengan fokus pada Secure Smart
                    Society, kami berkomitmen untuk mengembangkan AI yang tidak
                    hanya canggih, tetapi juga bertanggung jawab.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Sejak didirikan, kami telah menghasilkan berbagai inovasi
                    dalam bidang AI untuk pembelajaran dan optimisasi, dengan
                    penerapan di berbagai sektor mulai dari pendidikan,
                    kesehatan, hingga industri.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {teamStats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/50 border border-slate-600/50 rounded-xl p-6 text-center"
                    >
                      <div className="text-purple-400 mb-2 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedOnScroll>

        {/* Vision & Mission Section */}
        <AnimatedOnScroll>
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Visi & Misi
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {visionMissionData.map((item, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.color} p-8`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
                  <div className="relative z-10">
                    <div className="text-white mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedOnScroll>

        {/* Research Roadmap Section */}
        <AnimatedOnScroll>
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Research Roadmap
            </h2>

            {/* Roadmap Image */}
            <div className="mb-12 bg-slate-900/80 border border-slate-700/50 rounded-2xl p-8">
              <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/roadmap.jpeg"
                  alt="Research Roadmap - AI for Learning & Optimization"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Roadmap Timeline */}
            <div className="space-y-8">
              {roadmapPhases.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index !== roadmapPhases.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-16 bg-slate-600"></div>
                  )}

                  <div className="flex gap-6">
                    {/* Timeline Dot */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 ${phase.color} rounded-full flex items-center justify-center`}
                    >
                      <span className={`font-bold text-sm ${phase.textColor}`}>
                        {phase.year.split("-")[0]}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-slate-900/80 border border-slate-700/50 rounded-xl p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">
                          {phase.title}
                        </h3>
                        <span
                          className={`text-sm px-3 py-1 rounded-full ${phase.color} ${phase.textColor}`}
                        >
                          {phase.year}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-2 font-medium">
                        {phase.phase}
                      </p>
                      <p className="text-slate-300 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedOnScroll>

        {/* Location Section */}
        <AnimatedOnScroll>
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Lokasi Kami
            </h2>
            <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Alamat Kantor
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium">
                          Gedung Riset AI
                        </p>
                        <p className="text-slate-400">
                          Jl. Teknologi No. 123, Jakarta Selatan
                        </p>
                        <p className="text-slate-400">
                          DKI Jakarta 12345, Indonesia
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-purple-400" />
                      <span className="text-slate-300">+62 21 1234 5678</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-purple-400" />
                      <span className="text-slate-300">info@airesearch.id</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-purple-400" />
                      <span className="text-slate-300">www.airesearch.id</span>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="h-80 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1703123456789!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </AnimatedOnScroll>

        {/* Contact Us Section */}
        <AnimatedOnScroll>
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Hubungi Kami
            </h2>
            <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Mari Berkolaborasi
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    Tertarik untuk berkolaborasi dalam penelitian AI atau ingin
                    mengetahui lebih lanjut tentang solusi kami? Jangan ragu
                    untuk menghubungi tim kami.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-900/50 border border-purple-700/50 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-purple-300" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-slate-400">research@airesearch.id</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-900/50 border border-blue-700/50 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-300" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Telepon</p>
                        <p className="text-slate-400">+62 21 1234 5678</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-teal-900/50 border border-teal-700/50 rounded-lg flex items-center justify-center">
                        <Globe className="w-6 h-6 text-teal-300" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Website</p>
                        <p className="text-slate-400">www.airesearch.id</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                        placeholder="Masukkan nama lengkap Anda"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                        placeholder="nama@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        Subjek
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50"
                        placeholder="Topik yang ingin dibahas"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        Pesan
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 resize-none"
                        placeholder="Tuliskan pesan Anda di sini..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-purple-900/80 hover:bg-purple-800/80 text-white border border-purple-700/50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                    >
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </div>
  );
}
