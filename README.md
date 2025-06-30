# ✨ Ailo Website

[![TypeScript](https://img.shields.io/badge/language-TypeScript-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/framework-Next.js-orange.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/library-React-61DAFB.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/styling-Tailwind%20CSS-teal.svg)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/linting-ESLint-green.svg)](https://eslint.org/)


> Situs web untuk Ailo, menampilkan berbagai fitur interaktif dan konten dinamis.

## ✨ Fitur Utama

- **Antarmuka Pengguna yang Responsif:** Situs web dirancang agar responsif dan mudah digunakan di berbagai perangkat, dari desktop hingga perangkat seluler.
- **Galeri Multimedia yang Kaya:** Menampilkan gambar, video, dan animasi untuk meningkatkan daya tarik visual dan penyampaian informasi.  Terlihat dari banyaknya aset media di direktori `public`.
- **Animasi Halus:**  Penggunaan pustaka `framer-motion` dan `gsap`  menunjukkan adanya animasi halus pada elemen UI untuk meningkatkan pengalaman pengguna.
- **Komponen UI yang Dapat Digunakan Kembali:** Struktur direktori `components` menunjukkan penggunaan komponen React yang dirancang dengan baik dan terstruktur untuk memudahkan pemeliharaan dan skalabilitas.
- **Navigasi Intuitif:**  Struktur direktori `app` yang terorganisir dengan baik (misalnya, `about`, `projects`, `publications`, `researcher`, `teams`) menunjukkan navigasi yang intuitif dan terstruktur dengan baik.
- **Integrasi Media Sosial:**  Meskipun tidak secara eksplisit terlihat dalam kode, kemungkinan integrasi dengan platform media sosial ada untuk memperluas jangkauan dan interaksi.
- **Penggunaan Ikon Lucide-React:** Penggunaan `lucide-react` memastikan tampilan ikon yang konsisten dan modern di seluruh situs web.


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

Situs web ini dibangun menggunakan arsitektur berbasis komponen yang mengikuti prinsip-prinsip Next.js.  Komponen-komponen UI yang modular dan dapat digunakan kembali dikelompokkan di dalam direktori `components`.  Struktur berorientasi halaman dalam direktori `app` memungkinkan pengelolaan dan pemeliharaan kode yang efektif.  Aset statis seperti gambar dan video disimpan di dalam direktori `public`.

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
