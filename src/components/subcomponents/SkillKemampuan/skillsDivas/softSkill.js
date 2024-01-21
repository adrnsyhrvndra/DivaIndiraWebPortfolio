import * as React from "react";
import { CardSkills } from "../../cardSkills";

export const SoftSkills = () => {

  // Kalimat Deskripsi
  let deskripsiKomunikasi = "Kemampuan untuk berkomunikasi secara efektif, baik lisan maupun tertulis, dengan berbagai pihak termasuk rekan kerja, klien/customer, dan atasan.";
  let deskripsiAdaptasi = "Mampu beradaptasi dengan cepat dalam situasi yang berubah dan mampu menghadapi tantangan dengan fleksibilitas.";
  let deskripsiTimeManajemen = "Mampu mengatur waktu dengan efisien, mengelola deadline, dan mengatur prioritas tugas dengan baik.";
  let deskripsiKolaborasi = "Mampu bekerja dalam tim dengan anggota tim yang beragam dan berkontribusi secara aktif untuk mencapai tujuan bersama.";
  let deskripsiAnalisis = "Mampu menganalisis data dan informasi untuk mengambil keputusan yang tepat dan mendukung perencanaan strategis.";
  let deskripsiKonflik = "Mampu menghadapi konflik dengan bijaksana, mencari solusi yang saling menguntungkan, dan menciptakan lingkungan kerja yang harmonis.";

  // Icon Gambar Skills
  let iconKomunikasi = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705844548/divaWebPortfolio/iconSkills/Group_9299_f4fxjl.png";
  let iconAdaptasi = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705844539/divaWebPortfolio/iconSkills/Group_9287_fcodae.png";
  let iconWaktu = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705844545/divaWebPortfolio/iconSkills/Group_9297_xrpcme.png";
  let iconKolaborasi = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705844541/divaWebPortfolio/iconSkills/Group_9289_fbeqy7.png";
  let iconAnalisis = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705844541/divaWebPortfolio/iconSkills/Group_9290_y4kcf0.png";
  let iconKonflik = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705844543/divaWebPortfolio/iconSkills/Group_9294_pd0egv.png";

  return (
    <>
      <div aria-label="cards-skill-dan-kemampuan" className="mt-8 xl:mt-10">
            <div className="grid grid-cols-12 md:gap-4 xl:gap-11">
                <CardSkills icon={iconKomunikasi} skillJudul="Skill Komunikasi" deskripsi={deskripsiKomunikasi}/>
                <CardSkills icon={iconAdaptasi} skillJudul="Penyelesaian Konflik" deskripsi={deskripsiKonflik}/>
                <CardSkills icon={iconWaktu} skillJudul="Skill Adaptasi" deskripsi={deskripsiAdaptasi}/>
                <CardSkills icon={iconKolaborasi} skillJudul="Time Management" deskripsi={deskripsiTimeManajemen}/>
                <CardSkills icon={iconAnalisis} skillJudul="Kerjasama Tim" deskripsi={deskripsiKolaborasi}/>
                <CardSkills icon={iconKonflik} skillJudul="Kemampuan Analisis" deskripsi={deskripsiAnalisis}/>
            </div>
      </div>
    </>
  );
};
