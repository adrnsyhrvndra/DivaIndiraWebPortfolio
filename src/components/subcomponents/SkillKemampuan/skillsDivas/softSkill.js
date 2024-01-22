import * as React from "react";
import { ReactDOM } from "react";
import { CardSkills } from "../../cardSkills";

export const SoftSkills = () => {
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

  return (
    <>
      <div aria-label="cards-skill-dan-kemampuan" className="mt-8 xl:mt-10">
            <div className="grid grid-cols-12 md:gap-4 xl:gap-11">
                <CardSkills icon={iconKomunikasi} deskripsi={deskripsiKomunikasi} skillJudul="Skill Komunikasi"/>
                <CardSkills icon={iconAdaptasi} deskripsi={deskripsiAdaptasi} skillJudul="Skill Adaptasi"/>
                <CardSkills icon={iconTime} deskripsi={deskripsiTime} skillJudul="Time Management"/>
                <CardSkills icon={iconTim} deskripsi={deskripsiKolaborasi} skillJudul="Kerjasama Tim"/>
                <CardSkills icon={iconAnalisis} deskripsi={deskripsiAnalisis} skillJudul="Kemampuan Analisis"/>
                <CardSkills icon={iconKnoflik} deskripsi={deskripsiKonflik} skillJudul="Penyelesaian Konflik"/>
            </div>
      </div>
    </>
  );
};
