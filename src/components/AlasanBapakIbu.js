import * as React from "react";
import divaAalasan from "../img/diva-alasanskills.png";
import arrowAlasan from "../img/arrow-icon.png";
import { CardAlasan } from "./subcomponents/Alasan/cardAlasan";
import { JudulAlasan } from "./subcomponents/Alasan/judulAlasan";
import { Tilt } from 'react-tilt';

export const AlasanBapakIbu = () => {

  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
    speed:          2000,   // Speed of the enter/exit transition
    scale:          0.9,    // 2 = 200%, 1.5 = 150%, etc..
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  };

  // Judul Card
  let titleCardAlasan01 = "Keterampilan Komunikasi";
  let titleCardAlasan02 = "Kemampuan Beradaptasi";
  let titleCardAlasan03 = "Pengelolaan Waktu";
  let titleCardAlasan04 = "Kemampuan Kolaborasi";
  let titleCardAlasan05 = "Kemampuan Analisis";
  let titleCardAlasan06 = "Penyelesaian Konflik";

  // Deskripsi Card
  let deskripsiCardAlasan01 = "Kemampuan untuk berkomunikasi secara efektif, baik lisan maupun tertulis, dengan berbagai pihak termasuk rekan kerja, klien/customer, dan atasan";
  let deskripsiCardAlasan02 = "Mampu beradaptasi dengan cepat dalam situasi yang berubah dan mampu menghadapi tantangan dengan fleksibilitas";
  let deskripsiCardAlasan03 = "Mampu mengatur waktu dengan efisien, mengelola deadline, dan mengatur prioritas tugas dengan baik";
  let deskripsiCardAlasan04 = "Mampu bekerja dalam tim dengan anggota tim yang beragam dan berkontribusi secara aktif untuk mencapai tujuan bersama";
  let deskripsiCardAlasan05 = "Mampu menganalisis data dan informasi untuk mengambil keputusan yang tepat dan mendukung perencanaan strategis";
  let deskripsiCardAlasan06 = "Mampu menghadapi konflik dengan bijaksana, mencari solusi yang saling menguntungkan, dan menciptakan lingkungan kerja yang harmonis";

  // Icon Image
  let iconCardAlasan01 = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705569895/divaWebPortfolio/iconAlasan/m309otxgwjradq7stdyj.png";
  let iconCardAlasan02 = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705569894/divaWebPortfolio/iconAlasan/bdrjl01yqf3sxmylizfo.png";
  let iconCardAlasan03 = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705838862/divaWebPortfolio/iconAlasan/CLOCK_vic4qn.png";
  let iconCardAlasan04 = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705569893/divaWebPortfolio/iconAlasan/dxevizx2shiocszxckee.png";
  let iconCardAlasan05 = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705569897/divaWebPortfolio/iconAlasan/l9d9utortigjbmysxzme.png";
  let iconCardAlasan06 = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705569893/divaWebPortfolio/iconAlasan/nlvg1li5kt5v6dkmosoh.png";

  // Image Diva
  let imageDivase = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705661263/divaWebPortfolio/reduceResolution/AlasanDiva_dmnayn.png";

  return (
    <div aria-label="alasan-bapak-ibu-memilih-saya">
      <div className="grid grid-cols-12 md:mt-24 xl:gap-4 min-[1450px]:mt-10 2xl:mt-40">
        <div className="col-span-12 order-2 mt-8 md:mt-0 md:order-1">
          <JudulAlasan/>
        </div>
        <div className="col-span-12 self-end order-1 mt-10 md:order-2 lg:col-span-6 lg:self-end min-[1150px]:mt-16 xl:col-span-5 xl:mt-24 xl:px-2">
          <Tilt options={defaultOptions}>
            <img className="cursor-pointer mx-auto md:w-[75%] xl:w-[95%] mr-auto" src={imageDivase} alt="" />
          </Tilt>
        </div>
        <div className="col-span-12 mt-6 lg:col-span-6 lg:self-end xl:col-span-7 md:mt-16 xl:mt-24 xl:px-2 order-3 md:order-3">
          <div
            aria-label="pembungkus-alasan-utama"
            className="flex flex-col gap-2 xl:gap-4"
          >
            <div className="flex flex-col gap-2 md:flex-row xl:gap-4">
              <CardAlasan title={titleCardAlasan01} deskripsi={deskripsiCardAlasan01} icon={iconCardAlasan01} />
              <CardAlasan title={titleCardAlasan02} deskripsi={deskripsiCardAlasan02} icon={iconCardAlasan02} />
            </div>
            <div className="flex flex-col gap-2 md:flex-row xl:gap-4">
              <CardAlasan title={titleCardAlasan03} deskripsi={deskripsiCardAlasan03} icon={iconCardAlasan03} />
              <CardAlasan title={titleCardAlasan04} deskripsi={deskripsiCardAlasan04} icon={iconCardAlasan04} />
            </div>
            <div className="flex flex-col gap-2 md:flex-row xl:gap-4">
              <CardAlasan title={titleCardAlasan05} deskripsi={deskripsiCardAlasan05} icon={iconCardAlasan05} />
              <CardAlasan title={titleCardAlasan06} deskripsi={deskripsiCardAlasan06} icon={iconCardAlasan06} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
