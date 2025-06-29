"use client";

"framer-motion/client";
import {  Users, Search,  } from "lucide-react";
import { useState } from "react";

export default function Students() {
  const students = [
    {
      name: "Muhammad Izzah Alfatih",
      nim: "201012310019",
      prodi: "S2 Teknik Elektro",
    },
    {
      name: "Wesli Yeremi Rambi",
      nim: "201012310009",
      prodi: "S2 Teknik Elektro",
    },
    {
      name: "Kanz Muhammad Hanif",
      nim: "201012310010",
      prodi: "S2 Teknik Elektro",
    },
    {
      name: "M. Azwar Zulmi",
      nim: "203022320009",
      prodi: "S2 Keamanan Siber & Forensik Digital",
    },
    {
      name: "Aprilianza Muhammad",
      nim: "103012300025",
      prodi: "S1 Informatika",
    },
    {
      name: "Yolanda Rahma Chrysti",
      nim: "103012300150",
      prodi: "S1 Informatika",
    },
    { name: "Arya Agung Andrian", nim: "1401213411", prodi: "S1 MBTI" },
    { name: "Aqilah Fedura Ilahi", nim: "1301213123", prodi: "S1 Informatika" },
    { name: "Yande Satwika Yasa", nim: "1301210145", prodi: "S1 Informatika" },
    {
      name: "Ida Bagus Indrabudhi K",
      nim: "1301213129",
      prodi: "S1 Informatika",
    },
    { name: "Ni Putu Adilla", nim: "1105213015", prodi: "S1 Teknik Biomedis" },
    { name: "Tanto Wijaya", nim: "201012310058", prodi: "S2 Teknik Elektro" },
    {
      name: "Syahreza Adnan Al Azhar",
      nim: "1302223041",
      prodi: "S1 Rekayasa Perangkat Lunak",
    },
    {
      name: "Faza Hanif Suwanda",
      nim: "1202210403",
      prodi: "S1 Sistem Informasi",
    },
    {
      name: "Ekmal Reyhan Tarihoran",
      nim: "1305223079",
      prodi: "S1 Sains Data",
    },
    {
      name: "Natalie Diva Krisantya",
      nim: "1301213308",
      prodi: "S1 Informatika",
    },
    { name: "Fawaz Al Rasyid", nim: "1301213016", prodi: "S1 Informatika" },
    {
      name: "Indriana Noviyanti",
      nim: "1304201002",
      prodi: "S1 Informatika PJJ",
    },
    {
      name: "Adhistianita Safira Husna",
      nim: "1301213039",
      prodi: "S1 Informatika",
    },
    { name: "Novia Natasya", nim: "1301213259", prodi: "S1 Informatika" },
    {
      name: "Gloria Natasya Irene S.",
      nim: "1301213445",
      prodi: "S1 Informatika",
    },
    {
      name: "Rafi Athallah Sjakha",
      nim: "103062330048",
      prodi: "S1 Teknologi Informasi Kampus Jakarta",
    },
    {
      name: "Agnes Gabriela Putri Winata",
      nim: "103062300117",
      prodi: "S1 Teknologi Informasi Kampus Jakarta",
    },
    {
      name: "David Chandra",
      nim: "103062330056",
      prodi: "S1 Teknologi Informasi Kampus Jakarta",
    },
    {
      name: "Muhammad Raia Pratama Putra Wibowo",
      nim: "103062300043",
      prodi: "S1 Teknologi Informasi Kampus Jakarta",
    },
    {
      name: "Audrey Kurvanka",
      nim: "103062330119",
      prodi: "S1 Teknologi Informasi Kampus Jakarta",
    },
    {
      name: "Kurnia Ramadani",
      nim: "103062330042",
      prodi: "S1 Teknologi Informasi Kampus Jakarta",
    },
    {
      name: "Satrio Aji Nugroho",
      nim: "103062430009",
      prodi: "S1 Teknologi Informasi Kampus Jakarta",
    },
    {
      name: "Aurellia Fira Artanti",
      nim: "103062430010",
      prodi: "S1 Teknologi Informasi Kampus Jakarta",
    },
    {
      name: "Muhammad Sheva Atallah Daffansyah",
      nim: "102042400069",
      prodi: "S1 Sistem Informasi Kampus Jakarta",
    },
    {
      name: "Muhammad Raihan Fadani",
      nim: "103062300110",
      prodi: "S1 Teknologi Informasi Kampus Jakarta",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJenjang, setSelectedJenjang] = useState("Semua");

  // Get unique jenjang for filter
  const jenjangList = [
    "Semua",
    ...new Set(
      students
        .map((s) => s.prodi.split(" ")[0])
        .filter((j) => j.startsWith("S") || j.startsWith("D"))
    ),
  ];

  // Filter students based on search term and jenjang
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.nim.includes(searchTerm) ||
      student.prodi.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesJenjang =
      selectedJenjang === "Semua" || student.prodi.startsWith(selectedJenjang);

    return matchesSearch && matchesJenjang;
  });

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
            <h2 className="text-3xl font-bold mb-4">Daftar Mahasiswa Aktif</h2>
            <p className="text-gray-600 mb-6">
              Mahasiswa yang terdaftar dalam berbagai program studi
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-6">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Cari berdasarkan nama, NIM, atau program studi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
              </div>

              {/* Filter Dropdown */}
              <select
                value={selectedJenjang}
                onChange={(e) => setSelectedJenjang(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white text-gray-700"
              >
                {jenjangList.map((jenjang) => (
                  <option key={jenjang} value={jenjang}>
                    {jenjang === "Semua" ? "Semua Jenjang" : jenjang}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Custom Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-green-600 via-indigo-500 to-purple-500 text-white p-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Mahasiswa Aktif</span>
                <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">
                  {filteredStudents.length} dari {students.length} mahasiswa
                </span>
              </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-4 bg-gray-100 border-b font-semibold text-sm text-gray-700">
              <div className="col-span-1">No.</div>
              <div className="col-span-5">Nama Mahasiswa</div>
              <div className="col-span-2">NIM</div>
              <div className="col-span-4">Program Studi</div>
            </div>

            {/* Table Body */}
            <div className="max-h-96 overflow-y-auto">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-4 p-4 border-b hover:bg-gray-50 transition-colors items-center"
                  >
                    <div className="col-span-1 text-sm text-gray-500 font-medium">
                      {students.findIndex((s) => s.nim === student.nim) + 1}.
                    </div>
                    <div className="col-span-5 flex items-center gap-3">
                      {/* Custom Avatar */}
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-green-600">
                          {getInitials(student.name)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {student.name}
                        </h4>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span className="text-sm font-mono text-gray-600">
                        {student.nim}
                      </span>
                    </div>
                    <div className="col-span-4">
                      {/* Custom Badge with different colors for different levels */}
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded border ${
                          student.prodi.startsWith("S2")
                            ? "bg-purple-100 text-purple-700 border-purple-200"
                            : student.prodi.includes("Jakarta")
                            ? "bg-blue-100 text-blue-700 border-blue-200"
                            : "bg-gray-100 text-gray-700 border-gray-200"
                        }`}
                      >
                        {student.prodi}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>
                    Tidak ada mahasiswa yang ditemukan dengan kata kunci
                    {searchTerm}
                  </p>
                  {selectedJenjang !== "Semua" && (
                    <p className="text-sm mt-2">Filter: {selectedJenjang}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
