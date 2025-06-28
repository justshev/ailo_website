# ✨ Ailo Website

[![TypeScript](https://img.shields.io/badge/language-TypeScript-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/framework-Next.js-orange.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/library-React-61DAFB.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/styling-Tailwind%20CSS-teal.svg)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/linting-ESLint-green.svg)](https://eslint.org/)


> Situs web untuk Ailo, menampilkan berbagai fitur interaktif dan konten dinamis.

## ✨ Fitur Utama

- **Antarmuka Pengguna yang Responsif:** Situs web dirancang agar responsif dan mudah digunakan di berbagai perangkat, dari desktop hingga perangkat seluler.
- **Galeri Multimedia yang Kaya:**  Menampilkan gambar, video, dan animasi untuk meningkatkan daya tarik visual dan penyampaian informasi.
- **Animasi Halus:** Menggunakan perpustakaan animasi seperti Framer Motion dan GSAP untuk memberikan pengalaman pengguna yang lebih dinamis dan menarik.
- **Komponen UI yang Dapat Digunakan Kembali:**  Menggunakan komponen React yang dirancang dengan baik dan terstruktur untuk memudahkan pemeliharaan dan skalabilitas.
- **Navigasi Intuitif:**  Pengguna dapat dengan mudah menavigasi melalui berbagai bagian situs web berkat struktur navigasi yang jelas dan terorganisir.
- **Integrasi Media Sosial:**  Kemungkinan integrasi dengan platform media sosial untuk memperluas jangkauan dan interaksi.
- **Penggunaan Pustaka Lucide-React:** Penggunaan ikon dari pustaka Lucide-React untuk tampilan yang konsisten dan modern.


## 🛠️ Tumpukan Teknologi

| Kategori       | Teknologi         | Catatan                                      |
|-----------------|--------------------|-----------------------------------------------|
| Bahasa          | TypeScript         | Bahasa pemrograman utama                     |
| Framework       | Next.js            | Framework React untuk membangun situs web       |
| Library         | React              | Library JavaScript untuk antarmuka pengguna    |
| Styling         | Tailwind CSS       | Framework CSS utilitas                         |
| Linting         | ESLint             | Alat untuk memeriksa kualitas kode              |
| Animasi         | Framer Motion, GSAP | Pustaka untuk menambahkan animasi pada elemen UI |
| Ikon            | Lucide-React       | Pustaka ikon                                  |


## 🏛️ Tinjauan Arsitektur

Situs web ini dibangun menggunakan arsitektur berbasis komponen yang mengikuti prinsip-prinsip Next.js.  Komponen-komponen UI yang modular dan dapat digunakan kembali dikelompokkan di dalam direktori `components`.  Struktur berorientasi halaman memungkinkan pengelolaan dan pemeliharaan kode yang efektif.  Aset statis seperti gambar dan video disimpan di dalam direktori `public`.

## 🚀 Memulai

1. Kloning repositori:
   ```bash
   git clone https://github.com/justshev/ailo_website.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd ailo_website
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```
4. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```


## 📂 Struktur File

```
/
├── .gitignore
├── README.md
├── app
│   ├── ChromaGrid.css
│   ├── about
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── teams
│       └── page.tsx
├── components
│   ├── AnimatedOnScroll.tsx
│   ├── Aurora.tsx
│   ├── ChromaGrid.tsx
│   ├── CircularGallery.tsx
│   ├── CountUp.tsx
│   ├── DecryptedText.tsx
│   ├── GradientText.tsx
│   ├── Lectures.tsx
│   ├── Navbar.tsx
│   ├── PartnerSlider.tsx
│   ├── Squares.tsx
│   ├── Students.tsx
│   └── WorkList.tsx
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── logos
│   │   ├── github.png
│   │   ├── google.png
│   │   ├── python.png
│   │   └── telu.png
│   ├── members_lecturer
│   │   ├── dederohidin.jpeg
│   │   ├── dickyhidayat.jpeg
│   │   ├── fadhilrozi.jpeg
│   │   ├── haddadalwie.jpeg
│   │   └── indraaulia.png
│   ├── members_students
│   │   ├── adilla.png
│   │   ├── agnesgabriella.png
│   │   ├── aurelliafira.png
│   │   ├── davidchandra.png
│   │   ├── natalie.jpeg
│   │   ├── novie.png
│   │   ├── rafi.png
│   │   ├── satrioaji.png
│   │   └── sheva.png
│   ├── next.svg
│   ├── project.mp4
│   ├── rnd.mp4
│   ├── test.jpg
│   ├── vercel.svg
│   └── window.svg
├── sections
│   ├── home
│   │   ├── ContactUs.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── InnovationResearch.tsx
│   │   ├── MissionSection.tsx
│   │   ├── OurTeam.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── RunningImage.tsx
│   └── teams
│       └── HeroTeams.tsx
├── tailwind.config.js
└── tsconfig.json
```

- **`app`:** Direktori ini berisi komponen halaman dan layout aplikasi Next.js.
- **`components`:** Direktori ini berisi komponen UI yang dapat digunakan kembali di seluruh aplikasi.
- **`public`:** Direktori ini berisi aset statis seperti gambar, video, dan ikon yang digunakan dalam aplikasi.
- **`sections`:** Direktori ini tampaknya digunakan untuk mengorganisir komponen-komponen berdasarkan bagian situs web.


