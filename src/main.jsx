import React from 'react';
import {createRoot} from 'react-dom/client';
import {CalendarDays, ClipboardList, WalletCards, BarChart3, PackageCheck, Download, Smartphone, CheckCircle2, ChevronDown, ArrowRight} from 'lucide-react';
import './styles.css';

const apk='/download/BukuCatering-v1.0.0.apk';
const features=[
  [ClipboardList,'Pesanan lebih rapi','Catat dan pantau pesanan pelanggan tanpa tercecer di chat atau buku catatan.'],
  [CalendarDays,'Jadwal terkontrol','Lihat pesanan berdasarkan tanggal agar persiapan produksi lebih mudah direncanakan.'],
  [PackageCheck,'Kelola produk','Simpan produk yang kamu jual agar pencatatan pesanan berikutnya lebih cepat.'],
  [WalletCards,'Pantau pembayaran','Catat pembayaran pesanan dan cek informasi transaksi dalam satu alur.'],
  [BarChart3,'Ringkasan usaha','Lihat informasi penting dari aktivitas usaha melalui tampilan ringkasan yang praktis.']
];
const faqs=[
 ['Apakah BukuCatering tersedia di Play Store?','Saat ini BukuCatering didistribusikan langsung melalui website resmi ini. Versi Play Store dapat ditambahkan kemudian.'],
 ['Bagaimana cara memasang APK?','Tekan tombol Download untuk Android, buka file APK yang selesai diunduh, lalu izinkan instalasi dari sumber tersebut jika Android memintanya.'],
 ['Apakah saya perlu mengunduh ulang saat ada versi baru?','Untuk distribusi APK langsung, versi baru perlu diunduh dan dipasang kembali. Data akun tetap mengikuti sistem aplikasi selama menggunakan akun yang sama.'],
 ['Untuk siapa BukuCatering dibuat?','BukuCatering ditujukan untuk pemilik usaha katering dan usaha makanan berbasis pesanan yang ingin mengelola operasional dengan lebih rapi.']
];
function App(){return <>
<header className="nav"><a className="brand" href="#top"><img src="/bukucatering-icon.svg"/><b>BukuCatering</b></a><nav><a href="#fitur">Fitur</a><a href="#cara">Cara Mulai</a><a href="#faq">FAQ</a></nav><a className="btn small" href={apk} download>Download</a></header>
<main id="top">
<section className="hero"><div className="heroCopy"><div className="eyebrow"><Smartphone size={16}/> Aplikasi Android untuk usaha catering</div><h1>Kelola pesanan catering <em>lebih mudah.</em></h1><p>Pesanan, jadwal, produk, dan pembayaran dalam satu aplikasi. Biar kamu bisa fokus menyiapkan pesanan pelanggan, bukan merapikan catatan.</p><div className="actions"><a className="btn" href={apk} download><Download size={20}/> Download untuk Android</a><a className="ghost" href="#fitur">Lihat fitur <ArrowRight size={18}/></a></div><div className="meta"><CheckCircle2 size={17}/> Versi 1.0.0 <span>•</span> Android <span>•</span> ±26 MB</div></div>
<div className="phoneWrap"><div className="blob"></div><div className="phone"><div className="speaker"></div><div className="screen"><div className="appTop"><img src="/bukucatering-icon.svg"/><div><small>Selamat datang</small><strong>BukuCatering</strong></div></div><div className="summary"><small>Pesanan hari ini</small><b>8 Pesanan</b><span>3 perlu dikonfirmasi</span></div><div className="miniTitle">Jadwal terdekat</div>{[['09:00','Snack Box • 25 pax'],['11:30','Nasi Box • 40 pax'],['16:00','Catering Acara • 80 pax']].map((x,i)=><div className="order" key={i}><time>{x[0]}</time><div><b>{x[1]}</b><small>{i===0?'Menunggu konfirmasi':'Dikonfirmasi'}</small></div></div>)}</div></div></div></section>
<section className="trust"><span>Dirancang untuk membantu operasional usaha catering sehari-hari.</span></section>
<section className="section" id="fitur"><div className="sectionHead"><span>FITUR UTAMA</span><h2>Satu tempat untuk mengelola pesananmu</h2><p>Lebih sedikit catatan yang tercecer, lebih banyak waktu untuk menjalankan usaha.</p></div><div className="grid">{features.map(([I,t,d])=><article><div className="icon"><I/></div><h3>{t}</h3><p>{d}</p></article>)}</div></section>
<section className="steps" id="cara"><div><span className="label">MULAI SEKARANG</span><h2>Dari download sampai siap dipakai, sederhana.</h2><p>Belum tersedia di Play Store? Tidak masalah. Kamu tetap bisa memasang BukuCatering langsung di perangkat Android.</p></div><div className="stepList">{[['01','Download APK','Unduh BukuCatering v1.0.0 dari website ini.'],['02','Install di Android','Buka APK dan izinkan instalasi dari browser bila diminta.'],['03','Buat akun & mulai','Daftar, lengkapi profil usaha, lalu mulai mencatat pesanan.']].map(x=><div className="step"><b>{x[0]}</b><div><h3>{x[1]}</h3><p>{x[2]}</p></div></div>)}</div></section>
<section className="download"><img src="/bukucatering-icon.svg"/><div><span>BUKUCATERING v1.0.0</span><h2>Siap bikin pengelolaan pesanan lebih rapi?</h2><p>Download BukuCatering untuk perangkat Android kamu.</p></div><a className="btn light" href={apk} download><Download size={20}/> Download APK</a></section>
<section className="section faq" id="faq"><div className="sectionHead"><span>FAQ</span><h2>Pertanyaan yang sering ditanyakan</h2></div><div className="faqList">{faqs.map(([q,a])=><details><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</div></section>
</main><footer><div className="brand"><img src="/bukucatering-icon.svg"/><b>BukuCatering</b></div><p>Kelola pesanan catering lebih mudah.</p><small>© 2026 BukuCatering. Versi awal Android.</small></footer>
</>}
createRoot(document.getElementById('root')).render(<App/>);
