"use client";
import { div } from "framer-motion/client";
import { Mail, GraduationCap, Users, Search } from "lucide-react";
import { useState } from "react";
export default function Lectures() {
  // Data dosen peneliti
  const lecturers = [
    {
      name: "Agus Pratondo",
      nip: "09770043",
      prodi: "D4 Teknologi Rekayasa Multimedia",
    },
    { name: "Anditya Arifianto", nip: "14890028", prodi: "S1 Informatika" },
    {
      name: "Anggunmeka Luhur Prasasti",
      nip: "15900014",
      prodi: "S1 Teknik Komputer",
    },
    { name: "Anisa Herdiani", nip: "15850002", prodi: "S1 Pjj Informatika" },
    {
      name: "Ari Moesriami Barmawi",
      nip: "08600006",
      prodi: "S2 Ilmu Forensik",
    },
    { name: "Astri Novianty", nip: "10800053", prodi: "S1 Teknik Komputer" },
    { name: "Ayudita Oktafiani", nip: "18900127", prodi: "S1 Teknik Industri" },
    { name: "Bedy Purnama", nip: "10790050", prodi: "S1 Informatika" },
    { name: "Bela Pitria Hakim", nip: "23980051", prodi: "S1 Teknik Industri" },
    {
      name: "Choiria Anggraini",
      nip: "22930019",
      prodi: "S1 Digital Public Relations",
    },
    { name: "Casi Setianingsih", nip: "19890019", prodi: "S1 Teknik Komputer" },
    { name: "Dadang Setiawan", nip: "16730068", prodi: "S1 Informatika" },
    { name: "Dade Nurjanah", nip: "97730005", prodi: "S2 Informatika" },
    {
      name: "Danang Junaedi",
      nip: "14780062",
      prodi: "S1 Teknologi Informasi",
    },
    {
      name: "Dawam Dwi Jatmiko Suwawi",
      nip: "14890033",
      prodi: "S1 Informatika",
    },
    { name: "Dede Rohidin", nip: "91670044", prodi: "S1 Informatika" },
    {
      name: "Dicky Hidayat",
      nip: "12690031",
      prodi: "S1 Desain Komunikasi Visual",
    },
    {
      name: "Dodi Wisaksono Sudiharto",
      nip: "06760030",
      prodi: "S1 Informatika",
    },
    {
      name: "Dwina Satrinia",
      nip: "20890029",
      prodi: "S1 Informatika Kampus Jakarta",
    },
    { name: "Edi Sutoyo", nip: "19890015", prodi: "S1 Sistem Informasi" },
    {
      name: "Fadhil Rozi Hendrawan",
      nip: "25000006",
      prodi: "S1 Sistem Informasi Kampus Jakarta",
    },
    { name: "Febryanti Sthevanie", nip: "14880014", prodi: "S1 Informatika" },
    { name: "Girindra Wardhana", nip: "20920011", prodi: "S1 Teknik Fisika" },
    {
      name: "Hetti Hidayati",
      nip: "06750056",
      prodi: "D3 Rekayasa Perangkat Lunak Aplikasi",
    },
    {
      name: "Haddad Alwi Yafie",
      nip: "25980007",
      prodi: "S1 Teknologi Informasi Kampus Jakarta",
    },
    {
      name: "Indra Aulia",
      nip: "23900008",
      prodi: "S1 Teknologi Informasi Kampus Jakarta",
    },
    { name: "Isman Kurniawan", nip: "15870066", prodi: "S1 Informatika" },
    {
      name: "Kris Sujatmoko",
      nip: "99770025",
      prodi: "S1 Teknik Telekomunikasi",
    },
    {
      name: "Kurniawan Nur Ramadhani",
      nip: "14880009",
      prodi: "S1 Informatika",
    },
    {
      name: "Ledya Novamizanti",
      nip: "10830054",
      prodi: "S1 Teknik Telekomunikasi",
    },
    { name: "Mahmud Dwi Sulistiyo", nip: "13880017", prodi: "S1 Informatika" },
    { name: "Maria Apsari Sugiat", nip: "15780021", prodi: "S2 Manajemen Pjj" },
    {
      name: "Mochamad Yudha Febrianta",
      nip: "15830007",
      prodi: "S1 Manajemen",
    },
    { name: "Muhammad Arzaki", nip: "15870058", prodi: "S1 Pjj Informatika" },
    { name: "Muhammad Nasrun", nip: "10750046", prodi: "S1 Teknik Komputer" },
    {
      name: "Muhammad Sufyan A.",
      nip: "14800014",
      prodi: "S1 Hubungan Masyarakat",
    },
    { name: "Prasti Eko Yunanto", nip: "19890017", prodi: "S1 Informatika" },
    { name: "Rifki Wijaya", nip: "21840004", prodi: "S1 Informatika" },
    {
      name: "Rimba Whidiana Ciptasari",
      nip: "04740062",
      prodi: "S2 Ilmu Forensik",
    },
    { name: "Rio Nurtantyana", nip: "23930002", prodi: "S1 Informatika" },
    { name: "Saparudin", nip: "20690005", prodi: "S1 Informatika" },
    { name: "Shaufiah", nip: "06820004", prodi: "S1 Informatika" },
    { name: "Siti Sa'adah", nip: "13860014", prodi: "S1 Informatika" },
    { name: "Suprayogi", nip: "93640025", prodi: "S1 Teknik Fisika" },
    {
      name: "Suryo Adhi Wibowo",
      nip: "10870003",
      prodi: "S1 Teknik Telekomunikasi",
    },
    { name: "Suyanto", nip: "99740057", prodi: "S3 Informatika" },
    {
      name: "Thomhert Suprapto Siadari",
      nip: "23880005",
      prodi: "S1 Teknik Biomedik",
    },
    {
      name: "Tora Fahrudin",
      nip: "11850076",
      prodi: "D3 Sistem Informasi Akuntansi",
    },
    { name: "Untari Novia Wisesty", nip: "13870083", prodi: "S1 Informatika" },
    {
      name: "Veronikha Effendy",
      nip: "14790043",
      prodi: "S1 Rekayasa Perangkat Lunak",
    },
    {
      name: "Yudi Priyadi",
      nip: "20710004",
      prodi: "S1 Rekayasa Perangkat Lunak",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Filter lecturers based on search term
  const filteredLecturers = lecturers.filter(
    (lecturer) =>
      lecturer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lecturer.nip.includes(searchTerm) ||
      lecturer.prodi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper function to get initials
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Daftar Dosen Peneliti</h2>
            <p className="text-gray-600 mb-6">
              Tim dosen yang aktif dalam penelitian dan pengembangan ilmu
            </p>

            {/* Custom Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Cari berdasarkan nama, NIP, atau program studi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Custom Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-500 text-white p-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5" />
                <span className="font-semibold">Dosen Peneliti</span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                  {filteredLecturers.length} dari {lecturers.length} dosen
                </span>
              </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-4 bg-gray-100 border-b font-semibold text-sm text-gray-700">
              <div className="col-span-1">No.</div>
              <div className="col-span-5">Nama Dosen</div>
              <div className="col-span-2">NIP</div>
              <div className="col-span-4">Program Studi</div>
            </div>

            {/* Table Body */}
            <div className="max-h-96 overflow-y-auto">
              {filteredLecturers.length > 0 ? (
                filteredLecturers.map((lecturer, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-4 p-4 border-b hover:bg-gray-50 transition-colors items-center"
                  >
                    <div className="col-span-1 text-sm text-gray-500 font-medium">
                      {lecturers.findIndex((l) => l.nip === lecturer.nip) + 1}.
                    </div>
                    <div className="col-span-5 flex items-center gap-3">
                      {/* Custom Avatar */}
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-600">
                          {getInitials(lecturer.name)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {lecturer.name}
                        </h4>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span className="text-sm font-mono text-gray-600">
                        {lecturer.nip}
                      </span>
                    </div>
                    <div className="col-span-4">
                      {/* Custom Badge */}
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded border">
                        {lecturer.prodi}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>
                    Tidak ada dosen yang ditemukan dengan kata kunci "
                    {searchTerm}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
