# Prisma Workflow Guide

Dokumen ini menjelaskan alur kerja (flow) penggunaan Prisma dalam proyek ini, mulai dari setup hingga manajemen data.

## 1. Setup & Konfigurasi

Prisma menggunakan dua file utama untuk konfigurasi:
- `prisma/schema.prisma`: Tempat mendefinisikan model database.
- `prisma.config.ts`: Konfigurasi runtime (URL database, lokasi output client, dll).
- `.env`: Menyimpan variabel lingkungan seperti `DATABASE_URL`.

### Instalasi Dependensi
Jika Anda memulai di environment baru, pastikan dependensi berikut terpasang:
```bash
npm install prisma @prisma/client dotenv
```

---

## 2. Mendefinisikan Model (Schema) - Step by Step

Membuat model adalah proses mendesain struktur tabel Anda. Berikut adalah langkah-langkahnya:

### Langkah 1: Buka file `prisma/schema.prisma`
Cari bagian paling bawah file setelah blok `datasource` dan `generator`.

### Langkah 2: Deklarasikan Model
Gunakan keyword `model` diikuti nama tabel Anda. Selalu gunakan **PascalCase** (Huruf besar di awal) dan bentuk tunggal (misal: `Project`, bukan `Projects`).
```prisma
model Blog { 
  // Field akan ditulis di sini
}
```

### Langkah 3: Tentukan Primary Key (ID)
Setiap model **wajib** memiliki satu field unik sebagai identitas. Standar modern menggunakan `String` dengan `cuid()`.
```prisma
model Blog {
  id String @id @default(cuid())
}
```

### Langkah 4: Tambahkan Field Data
Tentukan data apa saja yang ingin disimpan. Tulis: `namaField TipeData @Atribut`.
```prisma
model Blog {
  id        String   @id @default(cuid())
  title     String   // Judul blog
  content   String   // Isi blog
  published Boolean  @default(false) // Status publish
}
```

### Langkah 5: Tambahkan Metadata (Opsional tapi Disarankan)
Tambahkan field untuk melacak kapan data dibuat atau diubah.
```prisma
model Blog {
  // ... field sebelumnya
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## 2.1. Membuat Relasi Antar Tabel (Step by Step)

Relasi digunakan agar data di satu tabel terhubung dengan tabel lain (misal: Satu **Kategori** memiliki banyak **Project**). Relasi yang paling umum adalah **One-to-Many (1:N)**.

### Langkah 1: Siapkan Kedua Model
Bayangkan kita ingin setiap `Project` punya satu `Category`. Kita buat dulu model `Category`-nya.

```prisma
model Category {
  id    String @id @default(cuid())
  name  String @unique
}
```

### Langkah 2: Tambahkan "Foreign Key" di Tabel Anak (Project)
Di model `Project`, kita harus menambahkan satu field untuk menyimpan ID kategori tersebut.
```prisma
model Project {
  id         String   @id @default(cuid())
  title      String
  categoryId String   // <--- Ini adalah kolom ID yang akan disimpan di DB
}
```

### Langkah 3: Definisikan Hubungan dengan `@relation`
Sekarang, kita buat field "virtual" (tidak ada di DB, hanya ada di Prisma) untuk menghubungkan keduanya.
```prisma
model Project {
  id         String   @id @default(cuid())
  title      String
  categoryId String
  
  // Field Virtual:
  category   Category @relation(fields: [categoryId], references: [id])
}
```
**Penjelasan:**
- `fields: [categoryId]`: Mengambil data dari kolom di tabel ini sendiri.
- `references: [id]`: Menghubungkan ke kolom `id` di tabel `Category`.

### Langkah 4: Tambahkan List di Tabel Induk (Category)
Terakhir, agar kita bisa melihat daftar project dari kategori tersebut, tambahkan array di model `Category`.
```prisma
model Category {
  id       String    @id @default(cuid())
  name     String    @unique
  
  // Daftar project yang masuk kategori ini
  projects Project[] 
}
```

### Kesimpulan Visual
- **Induk (1)**: Punya field `TabelAnak[]` (Array).
- **Anak (N)**: Punya field `indukId` (ID) DAN field `induk Induk @relation(...)` (Object).

---

## 3. Setelah Bikin Model: Proses Migrasi (Mendetail)

Setelah Anda selesai menulis model di file `.prisma`, database Anda **belum berubah**. Anda perlu menjalankan "Migrasi" untuk menerapkan perubahan tersebut.

### Opsi A: Menggunakan `db push` (Ideal untuk Pemula/Dev Cepat)
Ini adalah cara tercepat untuk membuat tabel tanpa ribet.

**Step by step:**
1.  Simpan file `schema.prisma`.
2.  Jalankan perintah di terminal:
    ```bash
    npx prisma db push
    ```
3.  **Apa yang terjadi?** Prisma akan membaca skema Anda, lalu membandingkannya dengan database. Jika ada perbedaan (misal: ada model baru), Prisma langsung membuat tabelnya di database.
4.  **Kapan pakai ini?** Saat masih tahap coba-coba atau development lokal.

### Opsi B: Menggunakan `migrate dev` (Standard Profesional)
Cara ini membuat "catatan sejarah" (file `.sql`) tentang setiap perubahan database Anda.

**Step by step:**
1.  Simpan file `schema.prisma`.
2.  Jalankan perintah:
    ```bash
    npx prisma migrate dev --name tambah_model_blog
    ```
3.  **Apa yang terjadi?** 
    - Prisma membuat folder baru di `prisma/migrations/xxxx_tambah_model_blog/`.
    - Di dalamnya ada file `migration.sql` yang berisi perintah SQL murni (seperti `CREATE TABLE ...`).
    - Prisma menjalankan SQL tersebut ke database.
4.  **Kapan pakai ini?** Saat proyek sudah mulai serius atau bekerja dalam tim, agar teman Anda bisa mendapatkan struktur database yang sama dengan menjalankan `npx prisma migrate dev`.

### Langkah Terakhir: Generate Client (Wajib!)
Setelah database sinkron (lewat cara A atau B), Anda **HARUS** menjalankan ini agar kode JavaScript/TypeScript Anda mengenali tabel baru tersebut:
```bash
npx prisma generate
```
Sekarang, Anda bisa memanggil `prisma.blog.create(...)` di dalam kode aplikasi Anda dengan dukungan auto-complete yang lengkap.

---

## 4. Generate Prisma Client

Agar TypeScript mengenali model Anda dan memberikan fitur auto-complete (IntelliSense), Anda perlu men-generate client:
```bash
npx prisma generate
```
*Catatan: Secara default, client di proyek ini di-generate ke folder `./prisma_app/generated/prisma`.*

---

## 5. Manajemen Data (GUI)

Anda tidak perlu query manual untuk melihat isi database. Gunakan **Prisma Studio** untuk tampilan visual seperti Excel.
```bash
npx prisma studio
```
Akses di browser melalui: `http://localhost:5555`

---

## 6. Ringkasan Perintah Penting

| Perintah | Deskripsi |
| --- | --- |
| `npx prisma db push` | Sinkronisasi skema langsung ke DB (tanpa history). |
| `npx prisma migrate dev` | Buat migrasi SQL dan terapkan ke DB. |
| `npx prisma generate` | Update Prisma Client (wajib setelah ubah schema). |
| `npx prisma studio` | Buka Dashboard GUI untuk kelola data. |
| `npx prisma db seed` | Menjalankan script seed untuk isi data awal. |

---

## Alur Kerja Umum (Best Practice)
1. Ubah/tambah model di `prisma/schema.prisma`.
2. Jalankan `npx prisma db push` (atau `migrate dev`).
3. Jalankan `npx prisma generate`.
4. Buka `npx prisma studio` untuk mengisi data test.
5. Gunakan `prisma` client di dalam kode Next.js Anda.
