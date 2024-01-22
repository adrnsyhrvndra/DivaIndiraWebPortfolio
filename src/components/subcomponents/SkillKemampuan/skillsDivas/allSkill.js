import * as React from "react";
import { ReactDOM } from "react";
import { CardSkills } from "../../cardSkills";

export const AllSkills = () => {

  // ===================
  // Hardskill
  // ===================
  let deskripsiCapcut = "CapCut adalah aplikasi pengeditan video yang intuitif dan kreatif. Dengan fitur-fitur uniknya, CapCut memungkinkan pengguna untuk membuat konten visual yang menarik dengan mudah.";
  let deskripsiCanva = "Canva adalah aplikasi desain grafis yang digunakan untuk membuat grafis media sosial, presentasi, poster, dokumen dan konten visual lainnya. Aplikasi ini juga menyediakan beragam contoh desain untuk digunakan.";
  let deskripsiWord = "Microsoft Word adalah aplikasi pengolah kata yang populer, memudahkan pengguna dalam membuat dan mengedit dokumen dengan beragam fitur fungsional dan user-friendly.";
  let deskripsiExcel = "Microsoft Excel adalah aplikasi spreadsheet yang efisien, membantu pengguna mengorganisir data, membuat rumus, & menganalisis informasi secara praktis.";
  let deskripsiPowerPoint = "PowerPoint, aplikasi presentasi memungkinkan pengguna untuk membuat tampilan profesional dengan grafis menarik, meningkatkan daya tarik presentasi secara signifikan.";
  let deskripsiTiktok = "TikTok, aplikasi media sosial berbasis video, memungkinkan pengguna untuk berbagi kreativitas dengan pendekatan konten singkat, menginspirasi dan menghibur jutaan pengguna global.";
  let deskripsiShopee = "Shopee, aplikasi belanja online terkemuka, menyediakan pengalaman berbelanja yang mudah dan aman dengan beragam produk serta penawaran menarik untuk konsumen.";
  let deskripsiTiktokshop = "Aplikasi yang membedakan diri dengan pendekatan live untuk berjualan. Fitur live-nya menyertakan keranjang, memudahkan memasukkan produk ke dalam keranjang belanja.";
  let iconCapcut = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883807/divaWebPortfolio/iconSkills/Group_9319_istdxc.png";
  let iconCanva = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883810/divaWebPortfolio/iconSkills/Group_9246_oeczx2.png";
  let iconWord = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883810/divaWebPortfolio/iconSkills/Group_9283_x121rt.png";
  let iconExcel = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883810/divaWebPortfolio/iconSkills/Group_9282_tiox0f.png";
  let iconPowerPoint = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883811/divaWebPortfolio/iconSkills/Group_9284_iohgdj.png";
  let iconTiktok = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883808/divaWebPortfolio/iconSkills/Group_9323_mk20oa.png";
  let iconShopee = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883808/divaWebPortfolio/iconSkills/Group_9321_unhfxc.png";
  let iconTiktokShop = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883809/divaWebPortfolio/iconSkills/Group_9330_hnh14b.png";

  // ===================
  // Softskill
  // ===================
  let deskripsiKomunikasi = "Kemampuan berkomunikasi, baik lisan & tertulis, dengan berbagai pihak termasuk rekan kerja, klien/customer, dll.";
  let deskripsiAdaptasi = "Mampu beradaptasi dengan cepat dalam situasi yang berubah dan mampu menghadapi tantangan dengan fleksibilitas.";
  let deskripsiTime = "Mampu mengatur waktu dengan efisien, mengelola deadline, dan mengatur prioritas tugas dengan baik.";
  let deskripsiKolaborasi = "Mampu bekerja dalam tim dengan anggota tim yang beragam dan berkontribusi secara aktif untuk mencapai tujuan bersama.";
  let deskripsiAnalisis = "Mampu menganalisis data dan informasi untuk mengambil keputusan yang tepat dan mendukung perencanaan strategis.";
  let deskripsiKonflik = "Mampu menghadapi konflik dengan bijaksana & dapat mencari solusi yang saling menguntungkan.";
  let iconKomunikasi = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883814/divaWebPortfolio/iconSkills/Group_9299_pbd8e6.png";
  let iconAdaptasi = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883811/divaWebPortfolio/iconSkills/Group_9287_ilr2mv.png";
  let iconTime = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883813/divaWebPortfolio/iconSkills/Group_9297_gurki8.png";
  let iconTim = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883812/divaWebPortfolio/iconSkills/Group_9289_pdjede.png";
  let iconAnalisis = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883813/divaWebPortfolio/iconSkills/Group_9290_wxbqkt.png";
  let iconKnoflik = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705883813/divaWebPortfolio/iconSkills/Group_9294_uxlhpc.png";


  // ===================
  // Lingustikskill
  // ===================
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
                <CardSkills icon={iconCanva} skillJudul="Canva Apps" deskripsi={deskripsiCanva}/>
                <CardSkills icon={iconCapcut} skillJudul="Capcut Apps" deskripsi={deskripsiCapcut}/>
                <CardSkills icon={iconWord} skillJudul="Microsoft Word" deskripsi={deskripsiWord}/>
                <CardSkills icon={iconExcel} skillJudul="Microsoft Excel" deskripsi={deskripsiExcel}/>
                <CardSkills icon={iconPowerPoint} skillJudul="Power Point" deskripsi={deskripsiPowerPoint}/>
                <CardSkills icon={iconTiktok} skillJudul="Tiktok" deskripsi={deskripsiTiktok}/>
                <CardSkills icon={iconShopee} skillJudul="Shopee" deskripsi={deskripsiShopee}/>
                <CardSkills icon={iconTiktokShop} skillJudul="Tiktok Shop" deskripsi={deskripsiTiktokshop}/>
                <CardSkills icon={iconKomunikasi} deskripsi={deskripsiKomunikasi} skillJudul="Skill Komunikasi"/>
                <CardSkills icon={iconAdaptasi} deskripsi={deskripsiAdaptasi} skillJudul="Skill Adaptasi"/>
                <CardSkills icon={iconTime} deskripsi={deskripsiTime} skillJudul="Time Management"/>
                <CardSkills icon={iconTim} deskripsi={deskripsiKolaborasi} skillJudul="Kerjasama Tim"/>
                <CardSkills icon={iconAnalisis} deskripsi={deskripsiAnalisis} skillJudul="Kemampuan Analisis"/>
                <CardSkills icon={iconKnoflik} deskripsi={deskripsiKonflik} skillJudul="Penyelesaian Konflik"/>
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
