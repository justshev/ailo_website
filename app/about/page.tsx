import GradientText from "@/components/GradientText";
import Footer from "@/sections/home/Footer";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Target,
  Rocket,
  Award,
  Brain,
  Shield,
  Zap,
} from "lucide-react";

export default function AboutDarkPage() {
  return (
    <div className="">
      <div className="min-h-screen bg-black text-white ">
        {/* Hero Section */}
        <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-purple-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-purple-400 border border-purple-400/30 bg-purple-900/20 backdrop-blur-sm rounded-full">
              <Brain className="w-4 h-4 mr-2" />
              Tentang Kami
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Membangun Masa Depan
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent block">
                Bersama AI Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Kami adalah perusahaan riset AI terdepan yang berkomitmen
              menciptakan teknologi
              <span className="text-purple-400 font-medium">
                {" "}
                Secure Smart Society{" "}
              </span>
              melalui inovasi berkelanjutan dan penelitian mendalam.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-400" />
                  Secure
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-blue-400" />
                  Accurate
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-purple-400" />
                  Fair
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                  Explainable
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
                  Tentang <span className="text-purple-400">Kami</span>
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg font-light">
                    Didirikan dengan visi revolusioner untuk mengembangkan AI
                    yang aman dan dapat dipercaya, kami telah menjadi pionir
                    dalam penelitian{" "}
                    <span className="text-purple-400 font-medium">
                      Artificial Intelligence
                    </span>
                    di Indonesia dengan fokus pada Secure Smart Society.
                  </p>
                  <p className="font-light">
                    Perjalanan kami dimulai dari komitmen sederhana namun
                    mendalam: menciptakan teknologi AI yang tidak hanya canggih,
                    tetapi juga aman, adil, dan dapat dijelaskan. Hari ini, kami
                    telah berkembang menjadi pusat penelitian AI terdepan dengan
                    kolaborasi internasional.
                  </p>
                  <p className="font-light">
                    Tim multidisipliner kami terdiri dari para peneliti, data
                    scientist, dan engineer berpengalaman yang berdedikasi
                    mengembangkan solusi AI yang memberikan dampak positif bagi
                    masyarakat global.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-black via-gray-900 to-purple-900 rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 mx-auto backdrop-blur-sm">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-black text-white">10K+</div>
                      <div className="text-sm text-white/80 font-medium">
                        Research Citations
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 mx-auto backdrop-blur-sm">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-black text-white">50+</div>
                      <div className="text-sm text-white/80 font-medium">
                        AI Publications
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 mx-auto backdrop-blur-sm">
                        <Rocket className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-black text-white">100+</div>
                      <div className="text-sm text-white/80 font-medium">
                        AI Models Deployed
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 mx-auto backdrop-blur-sm">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-black text-white">4+</div>
                      <div className="text-sm text-white/80 font-medium">
                        Years Innovation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Visi & <span className="text-purple-400">Misi</span> Kami
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg font-light">
                Komitmen kami untuk menciptakan revolusi AI yang aman dan
                berdampak positif
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group rounded-2xl p-8">
                <div className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl text-blue-400 font-bold">Visi</h3>
                </div>
                <div className="text-center">
                  <p className="text-gray-300 leading-relaxed text-lg font-light">
                    Menjadi pusat penelitian AI terdepan di Asia Tenggara yang
                    menghadirkan teknologi
                    <span className="text-blue-400 font-medium"> SAFE AI </span>
                    untuk menciptakan Secure Smart Society dan mendorong
                    transformasi digital berkelanjutan.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group rounded-2xl p-8">
                <div className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl text-purple-400 font-bold">Misi</h3>
                </div>
                <div>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="font-light">
                        Mengembangkan teknologi AI yang secure, accurate, fair,
                        dan explainable
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="font-light">
                        Membangun kolaborasi penelitian global untuk kemajuan AI
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="font-light">
                        Mendorong inovasi berkelanjutan dalam ekosistem AI
                        Indonesia
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="font-light">
                        Menciptakan dampak positif melalui implementasi AI yang
                        bertanggung jawab
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-purple-400 text-xl font-bold mb-4">
                Research Focus: Secure Smart Society
              </p>
              <p className="text-gray-300 max-w-4xl mx-auto text-lg font-light">
                Roadmap pengembangan penelitian AI kami dengan fokus pada
                keamanan, akurasi, keadilan, dan transparansi
              </p>
            </div>

            {/* Fundamental Research Level Phase */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-block border-2 border-gray-600 rounded-2xl px-8 py-4 bg-gray-800/50 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white">
                    Fundamental Research Level
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {/* 2022 */}
                <div className="shadow-2xl hover:shadow-green-500/20 transition-all duration-500 bg-gradient-to-br from-green-900/30 to-green-800/20 backdrop-blur-sm group rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-black group-hover:scale-110 transition-transform duration-300">
                      2022
                    </div>
                    <h3 className="text-green-400 text-xl font-bold mb-4">
                      Research Collection
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-300 text-center leading-relaxed font-light">
                      Pengumpulan dan Pemetaan Riset Peneliti Telkom University
                      bidang AI dalam fokus riset bidang Secure Smart Society
                    </p>
                  </div>
                </div>

                {/* 2023 */}
                <div className="shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 bg-gradient-to-br from-pink-900/30 to-pink-800/20 backdrop-blur-sm group rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-black group-hover:scale-110 transition-transform duration-300">
                      2023
                    </div>
                    <h3 className="text-pink-400 text-xl font-bold mb-4">
                      Research Collaboration & Consolidation
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-300 text-center leading-relaxed font-light">
                      Memperkuat kerjasama riset melalui kolaborasi penelitian
                      internal dan eksternal bidang AI dalam fokus riset bidang
                      Secure Smart Society
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Moving Towards Commercialization Phase */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-block border-2 border-gray-600 rounded-2xl px-8 py-4 bg-gray-800/50 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white">
                    Moving Towards Commercialization
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* 2024 */}
                <div className="shadow-2xl hover:shadow-green-500/30 transition-all duration-500 bg-gradient-to-br from-green-600 to-green-700 text-white group rounded-2xl p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-black backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      2024
                    </div>
                    <h3 className="text-white text-sm font-bold mb-4">
                      Enhancement New Sophistication Method
                    </h3>
                  </div>
                  <div>
                    <p className="text-white/90 text-xs text-center leading-relaxed font-light">
                      Pengembangan metode baru untuk meningkatkan kemampuan
                      sistem bidang AI dalam fokus riset bidang Secure Smart
                      Society
                    </p>
                  </div>
                </div>

                {/* 2025 */}
                <div className="shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 bg-gradient-to-br from-blue-600 to-blue-700 text-white group rounded-2xl p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-black backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      2025
                    </div>
                    <h3 className="text-white text-sm font-bold mb-4">
                      Research Adoption
                    </h3>
                  </div>
                  <div>
                    <p className="text-white/90 text-xs text-center leading-relaxed font-light">
                      Penerapan hasil riset bidang AI dalam fokus riset bidang
                      Secure Smart Society
                    </p>
                  </div>
                </div>

                {/* 2026 */}
                <div className="shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 bg-gradient-to-br from-orange-600 to-orange-700 text-white group rounded-2xl p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-black backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      2026
                    </div>
                    <h3 className="text-white text-sm font-bold mb-4">
                      Research Recognition
                    </h3>
                  </div>
                  <div>
                    <p className="text-white/90 text-xs text-center leading-relaxed font-light">
                      Pengakuan hasil riset bidang AI dalam fokus riset bidang
                      Secure Smart Society
                    </p>
                  </div>
                </div>

                {/* 2027 */}
                <div className="shadow-2xl hover:shadow-teal-500/30 transition-all duration-500 bg-gradient-to-br from-teal-600 to-teal-700 text-white group rounded-2xl p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-black backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      2027
                    </div>
                    <h3 className="text-white text-sm font-bold mb-4">
                      Research Commercialization
                    </h3>
                  </div>
                  <div>
                    <p className="text-white/90 text-xs text-center leading-relaxed font-light">
                      Melakukan komersialisasi hasil penelitian bidang AI dalam
                      fokus riset bidang Secure Smart Society
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SAFE AI Phase */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-block border-2 border-purple-500 rounded-2xl px-10 py-6 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm">
                  <h3 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    SAFE (Secure-Accuracy-Fairness-Explainability) AI
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {/* 2028 */}
                <div className="shadow-2xl hover:shadow-green-500/20 transition-all duration-500 bg-gradient-to-br from-green-900/40 to-green-800/30 backdrop-blur-sm group rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-black group-hover:scale-110 transition-transform duration-300">
                      2028
                    </div>
                    <h3 className="text-green-400 text-lg font-bold mb-4">
                      National AI-Based Entrepreneurial Research Center
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-300 text-center leading-relaxed font-light">
                      Menjadi National AI-Based Entrepreneurial Research Center
                      yang SAFE-AI
                    </p>
                  </div>
                </div>

                {/* 2032 */}
                <div className="shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 bg-gradient-to-br from-blue-900/40 to-blue-800/30 backdrop-blur-sm group rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-black group-hover:scale-110 transition-transform duration-300">
                      2032
                    </div>
                    <h3 className="text-blue-400 text-lg font-bold mb-4">
                      Globalization & Industrial Transformation
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-300 text-center leading-relaxed font-light">
                      Teknologi yang dihasilkan tim riset CoE AILO mampu
                      mentransformasikan secara global melalui Secure Smart
                      Society
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Lokasi <span className="text-purple-400">Kami</span>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg font-light">
                Kunjungi pusat penelitian AI kami atau hubungi untuk kolaborasi
                riset
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="shadow-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8">
                  <div className="mb-6">
                    <h3 className="flex items-center text-2xl text-white font-bold">
                      <MapPin className="w-6 h-6 text-purple-400 mr-3" />
                      Research Center
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-white text-lg">Alamat</p>
                        <p className="text-gray-300 font-light">
                          Jl. Sudirman No. 123, Blok A Lt. 15
                          <br />
                          Jakarta Pusat, DKI Jakarta 10220
                          <br />
                          Indonesia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-white text-lg">
                          Jam Operasional
                        </p>
                        <p className="text-gray-300 font-light">
                          Senin - Jumat: 09:00 - 18:00
                          <br />
                          Sabtu: 09:00 - 15:00
                          <br />
                          Minggu: Tutup
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-700">
                      <h4 className="font-bold text-white text-lg mb-4">
                        Research Labs
                      </h4>
                      <div className="space-y-3 text-gray-300 font-light">
                        <p>• AI Security Lab - Surabaya</p>
                        <p>• Machine Learning Center - Bandung</p>
                        <p>• Data Science Hub - Medan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194637395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sSudirman%20Central%20Business%20District%20(SCBD)!5e0!3m2!1sen!2sid!4v1635724073795!5m2!1sen!2sid"
                    width="100%"
                    height="400"
                    style={{
                      border: 0,
                      filter: "invert(90%) hue-rotate(180deg)",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-96"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Hubungi <span className="text-purple-400">Kami</span>
              </h2>
              <p className="text-purple-100 max-w-3xl mx-auto text-lg font-light">
                Siap berkolaborasi dalam penelitian AI dan mengembangkan
                teknologi masa depan bersama
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="shadow-2xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 group rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Telepon</h3>
                </div>
                <div className="text-center">
                  <p className="text-purple-100 mb-6 font-light">
                    Hubungi research team kami
                  </p>
                  <div className="space-y-3">
                    <p className="font-bold text-lg">+62 21 1234 5678</p>
                    <p className="font-bold text-lg">+62 812 3456 7890</p>
                  </div>
                </div>
              </div>

              <div className="shadow-2xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 group rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Email</h3>
                </div>
                <div className="text-center">
                  <p className="text-purple-100 mb-6 font-light">
                    Kirim proposal penelitian
                  </p>
                  <div className="space-y-3">
                    <p className="font-bold text-lg">research@ailab.com</p>
                    <p className="font-bold text-lg">collaboration@ailab.com</p>
                  </div>
                </div>
              </div>

              <div className="shadow-2xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 group rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Research Hours</h3>
                </div>
                <div className="text-center">
                  <p className="text-purple-100 mb-6 font-light">
                    Lab & consultation time
                  </p>
                  <div className="space-y-2 font-light">
                    <p className="text-white">Senin - Jumat</p>
                    <p className="font-bold text-lg">09:00 - 18:00 WIB</p>
                    <p>Sabtu: 09:00 - 15:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer mt-10">
            <Footer />
          </div>
        </section>
      </div>
    </div>
  );
}
