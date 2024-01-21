import * as React from "react";
import { CardSkills } from "../../cardSkills";

export const LingustikSkills = () => {
  // Kalimat Deskripsi
  let deskripsiIndonesia = "Sebagai bahasa resmi negara Indonesia, menjadi alat komunikasi utama untuk lebih dari 270 juta penduduk, dengan keberagaman dan kekayaan kultural.";
  let deskripsiInggris = "Sebagai bahasa global, berfungsi sebagai jembatan yang menghubungkan orang di seluruh dunia.bahasa ini memfasilitasi komunikasi internasional.";
  let deskripsiSunda = "Bahasa Sunda, bahasa daerah di Indonesia, mengandung keindahan dan kekayaan budaya Jawa Barat. Digunakan oleh jutaan orang, memperkaya identitas lokal.";
  let deskripsiLiveJualan = "Live jualan memberikan pengalaman interaktif, memungkinkan saya untuk berkomunikasi langsung, menjelaskan produk, & merespons pertanyaan secara real-time.";
  let deskripsiThrift = "Supply thrift menyediakan opsi berkelanjutan dengan menyuplai barang-barang bekas berkualitas, mendukung gaya hidup ramah lingkungan dan berprinsip second-hand.";

  // Icon Gambar Skills
  let iconIndonesia = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705844550/divaWebPortfolio/iconSkills/Group_9300_z1wg7b.png";
  let iconInggris = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705844550/divaWebPortfolio/iconSkills/Group_9301_kt2g8s.png";
  let iconSunda = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705844550/divaWebPortfolio/iconSkills/Group_9302_tafhn1.png";
  let iconLivejualan = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705844581/divaWebPortfolio/iconSkills/Group_9325_waos0h.png";
  let iconThrift = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705844582/divaWebPortfolio/iconSkills/Group_9327_p3sofe.png";

  return (
    <>
      <div aria-label="cards-skill-dan-kemampuan" className="mt-8 xl:mt-10">
            <div className="grid grid-cols-12 md:gap-4 xl:gap-11">
                <CardSkills icon={iconIndonesia} skillJudul="Bahasa Indonesia" deskripsi={deskripsiIndonesia}/>
                <CardSkills icon={iconInggris} skillJudul="Bahasa Inggris" deskripsi={deskripsiInggris}/>
                <CardSkills icon={iconSunda} skillJudul="Bahasa Sunda" deskripsi={deskripsiSunda}/>
                <CardSkills icon={iconLivejualan} skillJudul="Live Jualan" deskripsi={deskripsiLiveJualan}/>
                <CardSkills icon={iconThrift} skillJudul="Supply Thrifting" deskripsi={deskripsiThrift}/>
            </div>
      </div>
    </>
  );
};
