# BukuCatering Landing Page

Landing page siap deploy ke Vercel.

## Jalankan lokal
```bash
npm install
npm run dev
```

## Deploy ke Vercel
1. Upload seluruh isi folder ini ke repository GitHub baru.
2. Import repository tersebut di Vercel.
3. Framework preset: Vite (biasanya terdeteksi otomatis).
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

APK berada di `public/download/BukuCatering-v1.0.0.apk` dan tombol download sudah mengarah ke file tersebut.

Saat ada versi baru, masukkan APK baru ke `public/download/` lalu ubah konstanta `apk` dan informasi versi di `src/main.jsx`.
