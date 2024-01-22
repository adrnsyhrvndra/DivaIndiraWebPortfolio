import * as React from "react";
import { ReactDOM } from "react";
import { CardSkills } from "../../cardSkills";

export const LingustikSkills = () => {
  let deskripsiIndonesia = "Sebagai bahasa resmi dan nasional Indonesia, menjadi alat komunikasi utama untuk lebih dari 270 juta penduduk, dengan keberagaman dan kekayaan kultural.";
  let deskripsiInggris = "Bahasa Inggris sebagai jembatan yang menghubungkan orang di seluruh dunia. Dengan banyaknya penutur, bahasa ini memfasilitasi komunikasi internasional";
  let deskripsiSunda = "Bahasa Sunda, bahasa daerah di Indonesia, mengandung keindahan dan kekayaan budaya Jawa Barat. Digunakan oleh jutaan orang, memperkaya identitas lokal.";
  let deskripsiLiveJualan = "Live jualan memberikan pengalaman interaktif, memungkinkan penjual berkomunikasi langsung, menjelaskan produk, dan merespons pertanyaan secara real-time.";
  let deskripsiSupplyThrift = "Supply thrift menyediakan opsi berkelanjutan dengan menyuplai barang-barang bekas berkualitas, mendukung gaya hidup ramah lingkungan dan berprinsip second-hand.";

  let iconBahasaIndonesia = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883799/divaWebPortfolio/iconSkills/Group_9300_lyjbfw.png";
  let iconBahasaInggris = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883806/divaWebPortfolio/iconSkills/Group_9301_fkddqa.png";
  let iconBahasaSunda = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883807/divaWebPortfolio/iconSkills/Group_9302_jhsmta.png";
  let iconLiveJualan = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883808/divaWebPortfolio/iconSkills/Group_9325_sfd19u.png";
  let iconSupplyThrift = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883809/divaWebPortfolio/iconSkills/Group_9327_zloyne.png";

  return (
    <>
      <div aria-label="cards-skill-dan-kemampuan" className="mt-8 xl:mt-10">
            <div className="grid grid-cols-12 md:gap-4 xl:gap-11">
                <CardSkills icon={iconBahasaIndonesia} skillJudul="Bahasa Indonesia" deskripsi={deskripsiIndonesia}/>
                <CardSkills icon={iconBahasaInggris} skillJudul="Bahasa Inggris" deskripsi={deskripsiInggris}/>
                <CardSkills icon={iconBahasaSunda} skillJudul="Bahasa Sunda" deskripsi={deskripsiSunda}/>
                <CardSkills icon={iconLiveJualan} skillJudul="Live Jualan" deskripsi={deskripsiLiveJualan}/>
                <CardSkills icon={iconSupplyThrift} skillJudul="Supply Thrift" deskripsi={deskripsiSupplyThrift}/>
            </div>
      </div>
    </>
  );
};
