import GradientText from "@/components/GradientText";
import CountUp from "@/components/CountUp";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-25 items-center">
          {/* Video Section */}
          <AnimatedOnScroll>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                <div className="relative overflow-hidden rounded-xl aspect-video">
                  <video
                    src="/project.mp4"
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                    <Play className="w-4 h-4" />
                    <span className="text-sm font-medium">Tampilkan</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedOnScroll>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <AnimatedOnScroll>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Portofolio Projects
              </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll>
              <div className="space-y-4">
                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl lg:text-4xl font-semibold text-gray-900">
                    Kami telah menyelesaikan
                  </span>
                </div>

                <div className="flex items-baseline space-x-3">
                  <GradientText
                    colors={[
                      "#dc2626",
                      "#3b82f6",
                      "#ffffff",
                      "#3b82f6",
                      "#dc2626",
                    ]}
                    showBorder={false}
                    className="text-5xl lg:text-6xl font-bold"
                  >
                    <CountUp
                      from={0}
                      to={20}
                      separator=","
                      direction="up"
                      duration={2}
                    />
                    +
                  </GradientText>
                  <GradientText
                    colors={[
                      "#1e40af",
                      "#3b82f6",
                      "#60a5fa",
                      "#3b82f6",
                      "#1e40af",
                    ]}
                    showBorder={false}
                    className="text-3xl lg:text-4xl font-semibold"
                  >
                    Proyek
                  </GradientText>
                </div>
              </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Dari aplikasi web inovatif hingga solusi mobile terkini, kami
                mewujudkan ide menjadi pengalaman digital yang berdampak dan
                melampaui ekspektasi.
              </p>
            </AnimatedOnScroll>

            <AnimatedOnScroll>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={"/projects"}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span>Jelajahi Proyek</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <Link
                  href={"/publications"}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold rounded-xl transition-all duration-300 hover:bg-blue-50"
                >
                  <span>Lihat Publikasi</span>
                </Link>
              </div>
            </AnimatedOnScroll>

            {/* Stats Section */}
            <AnimatedOnScroll>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Kepuasan Klien</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Dukungan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5★</div>
                  <div className="text-sm text-gray-600">Rating Rata-rata</div>
                </div>
              </div>
            </AnimatedOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
