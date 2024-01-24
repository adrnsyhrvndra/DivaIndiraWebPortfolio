import * as React from "react";
import { ReactDOM } from "react";
import { CardSkills } from "../../cardSkills";

export const SoftSkills = (props) => {
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

  // Icon Gambar Skills Brown
  let iconKomunikasiBrown = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705890767/Group_9315_s67m0v.png";
  let iconAdaptasiBrown = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705890747/Group_9309_jchoc2.png";
  let iconTimeBrown = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705890765/Group_9311_vgfygv.png";
  let iconKolaborasiBrown = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705890766/Group_9313_c3vchy.png";
  let iconAnalisisBrown = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705890766/Group_9314_ckgbfg.png";
  let iconResolusiBrown = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705890763/Group_9310_xxt9uw.png";

  return (
    <>
      <div aria-label="cards-skill-dan-kemampuan" className="mt-8 xl:mt-10">
            <div className="grid grid-cols-12 md:gap-4 xl:gap-11">
              <CardSkills pilihfade={props.pilih} icon={iconKomunikasi} deskripsi={deskripsiKomunikasi} iconBrown={iconKomunikasiBrown} skillJudul="Skill Komunikasi"/>
              <CardSkills pilihfade={props.pilih} icon={iconAdaptasi} deskripsi={deskripsiAdaptasi} iconBrown={iconAdaptasiBrown} skillJudul="Skill Adaptasi"/>
              <CardSkills pilihfade={props.pilih} icon={iconTime} deskripsi={deskripsiTime} iconBrown={iconTimeBrown} skillJudul="Time Management"/>
              <CardSkills pilihfade={props.pilih} icon={iconTim} deskripsi={deskripsiKolaborasi} iconBrown={iconKolaborasiBrown} skillJudul="Kerjasama Tim"/>
              <CardSkills pilihfade={props.pilih} icon={iconAnalisis} deskripsi={deskripsiAnalisis} iconBrown={iconAnalisisBrown} skillJudul="Kemampuan Analisis"/>
              <CardSkills pilihfade={props.pilih} icon={iconKnoflik} deskripsi={deskripsiKonflik} iconBrown={iconResolusiBrown} skillJudul="Penyelesaian Konflik"/>
            </div>
      </div>
    </>
  );
};
