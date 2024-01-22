import * as React from "react";
import { ReactDOM } from "react";
import { CardSkills } from "../../cardSkills";

export const HardSkills = () => {

    // Kalimat Deskripsi
    let deskripsiCapcut = "CapCut adalah aplikasi pengeditan video yang intuitif dan kreatif. Dengan fitur-fitur uniknya, CapCut memungkinkan pengguna untuk membuat konten visual yang menarik dengan mudah.";
    let deskripsiCanva = "Canva adalah aplikasi desain grafis yang digunakan untuk membuat grafis media sosial, presentasi, poster, dokumen dan konten visual lainnya. Aplikasi ini juga menyediakan beragam contoh desain untuk digunakan.";
    let deskripsiWord = "Microsoft Word adalah aplikasi pengolah kata yang populer, memudahkan pengguna dalam membuat dan mengedit dokumen dengan beragam fitur fungsional dan user-friendly.";
    let deskripsiExcel = "Microsoft Excel adalah aplikasi spreadsheet yang efisien, membantu pengguna mengorganisir data, membuat rumus, & menganalisis informasi secara praktis.";
    let deskripsiPowerPoint = "PowerPoint, aplikasi presentasi memungkinkan pengguna untuk membuat tampilan profesional dengan grafis menarik, meningkatkan daya tarik presentasi secara signifikan.";
    let deskripsiTiktok = "TikTok, aplikasi media sosial berbasis video, memungkinkan pengguna untuk berbagi kreativitas dengan pendekatan konten singkat, menginspirasi dan menghibur jutaan pengguna global.";
    let deskripsiShopee = "Shopee, aplikasi belanja online terkemuka, menyediakan pengalaman berbelanja yang mudah dan aman dengan beragam produk serta penawaran menarik untuk konsumen.";
    let deskripsiTiktokshop = "Aplikasi yang membedakan diri dengan pendekatan live untuk berjualan. Fitur live-nya menyertakan keranjang, memudahkan memasukkan produk ke dalam keranjang belanja.";
  
  
    // Icon Gambar Skills
    let iconCapcut = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883807/divaWebPortfolio/iconSkills/Group_9319_istdxc.png";
    let iconCanva = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883810/divaWebPortfolio/iconSkills/Group_9246_oeczx2.png";
    let iconWord = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883810/divaWebPortfolio/iconSkills/Group_9283_x121rt.png";
    let iconExcel = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883810/divaWebPortfolio/iconSkills/Group_9282_tiox0f.png";
    let iconPowerPoint = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883811/divaWebPortfolio/iconSkills/Group_9284_iohgdj.png";
    let iconTiktok = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883808/divaWebPortfolio/iconSkills/Group_9323_mk20oa.png";
    let iconShopee = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883808/divaWebPortfolio/iconSkills/Group_9321_unhfxc.png";
    let iconTiktokShop = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883809/divaWebPortfolio/iconSkills/Group_9330_hnh14b.png";

  return (
    <>
      <div aria-label="cards-skill-dan-kemampuan" className="mt-8 xl:mt-10">
            <div className="grid grid-cols-12 md:gap-4 xl:gap-11">
                <CardSkills icon={iconCanva} skillJudul="Canva Apps" deskripsi={deskripsiCanva}/>
                <CardSkills icon={iconCapcut} skillJudul="Capcut Apps" deskripsi={deskripsiCapcut}/>
                <CardSkills icon={iconWord} skillJudul="Microsoft Word" deskripsi={deskripsiWord}/>
                <CardSkills icon={iconExcel} skillJudul="Microsoft Excel" deskripsi={deskripsiExcel}/>
                <CardSkills icon={iconPowerPoint} skillJudul="Power Point" deskripsi={deskripsiPowerPoint}/>
                <CardSkills icon={iconTiktok} skillJudul="Tiktok" deskripsi={deskripsiTiktok}/>
                <CardSkills icon={iconShopee} skillJudul="Shopee" deskripsi={deskripsiShopee}/>
                <CardSkills icon={iconTiktokShop} skillJudul="Tiktok Shop" deskripsi={deskripsiTiktokshop}/>
            </div>
      </div>
    </>
  );
};
