# Emmanuel-Dito.dev - Personal Portfolio

Website portofolio profesional milik **Emmanuel Krishnandito Laksana**, seorang Mobile Developer & Informatics Student. Website ini dibangun dengan fokus pada performa, desain modern (Neo-brutalism), dan kemudahan pengelolaan konten melalui database.

## 🚀 Overview
Website ini berfungsi sebagai kartu nama digital yang menampilkan proyek-proyek terbaru, keahlian teknis, dan riwayat profesional saya. Saat ini menggunakan arsitektur **Next.js App Router** dengan integrasi database **Prisma**.

## 🛠 Tech Stack
- **Frontend**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL
- **Design Style**: Neo-brutalism UI

## ✨ Key Features
- **Dynamic Content**: Data Project, Skill, dan Resume diambil langsung dari database.
- **Project Detail**: Halaman detail dinamis untuk setiap proyek menggunakan slug.
- **Neo-brutalism UI**: Desain yang berani dengan kontras tinggi dan garis tegas.
- **Fully Responsive**: Dioptimalkan untuk perangkat mobile, tablet, dan desktop.
- **Prisma Studio Integrated**: Panel admin GUI bawaan untuk mengelola data konten.

## 📦 Prerequisites
Sebelum memulai, pastikan Anda telah menginstal:
- **Node.js** (versi 18.x atau terbaru)
- **NPM** atau **Yarn**
- **PostgreSQL Database** (Lokal atau Cloud seperti Supabase/Neon)

## 🛠 Installation

1. **Clone Repository**
   ```bash
   git clone https://github.com/KrishnanditoLksn/emmanuel-dito.dev.git
   cd emmanuel-dito.dev
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Buat file `.env` di root direktori dan tambahkan URL database Anda:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require"
   ```

## ⚙️ Setup & Database

Proyek ini menggunakan Prisma sebagai penghubung ke database. Ikuti langkah ini untuk sinkronisasi:

1. **Generate Prisma Client**
   ```bash
   npx prisma generate
   ```

2. **Sync Database Schema**
   Terapkan skema tabel ke database Anda:
   ```bash
   npx prisma db push
   ```

3. **Kelola Data (Admin)**
   Gunakan Prisma Studio untuk menambah atau mengedit konten website melalui browser:
   ```bash
   npx prisma studio
   ```
   Akses di: `http://localhost:5555`

## 📁 Project Structure

- `prisma/`: Berisi skema database (`schema.prisma`) dan file migrasi.
- `public/`: Asset statis seperti gambar, logo, dan file PDF resume.
- `src/app/`: Folder utama Next.js (App Router) yang berisi halaman-halaman website.
- `src/components/`: Komponen UI yang reusable (Navbar, Footer, Section, dll).
- `src/helper/`: Fungsi utilitas tambahan seperti downloader atau scroll logic.
- `PRISMA_GUIDE.md`: Panduan teknis mendalam khusus untuk pengelolaan Prisma.

## 🏃 Running the Project

- **Development Mode**
  ```bash
  npm run dev
  ```
  Akses di: `http://localhost:3000`

- **Production Build**
  ```bash
  npm run build
  npm run start
  ```

---
Dibuat dengan ❤️ oleh [Emmanuel Krishnandito Laksana](https://github.com/KrishnanditoLksn)
