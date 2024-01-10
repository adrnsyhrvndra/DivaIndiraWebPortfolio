import * as React from "react";
import divaAalasan from "../img/diva-alasanskills.png";
import iconAlasan01 from "../img/icon-alasan.png";
import arrowAlasan from "../img/arrow-icon.png";

export const AlasanBapakIbu = () => {
  return (
    <div aria-label="alasan-bapak-ibu-memilih-saya">
      <div className="grid grid-cols-12 xl:mt-24">
        <div className="col-span-12">
          <div className="flex flex-col items-center justify-center xl:gap-6">
            <h4 className="text-center text-[#35352F] xl:text-3xl">
              Ini alasan Bapak/Ibu
            </h4>
            <div className="flex flex-row text-center items-center xl:gap-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xl:w-12"
                viewBox="0 0 48 49"
                fill="none"
              >
                <path
                  d="M30.2026 29.6262L47.0337 25.5816C48.3222 25.2726 48.3222 23.4401 47.0337 23.1295L30.2026 19.0848C29.7424 18.9747 29.3825 18.6148 29.2708 18.153L25.2261 1.32355C24.9171 0.0350521 23.0846 0.0350521 22.774 1.32355L18.7294 18.1546C18.6193 18.6148 18.2593 18.9747 17.7975 19.0865L0.968086 23.1311C-0.320417 23.4401 -0.320417 25.2726 0.968086 25.5832L17.7992 29.6279C18.2593 29.738 18.6193 30.0979 18.731 30.5597L22.7757 47.3908C23.0846 48.6793 24.9171 48.6793 25.2278 47.3908L29.2724 30.5597C29.3825 30.0963 29.7424 29.738 30.2026 29.6262Z"
                  fill="#EF713F"
                />
              </svg>
              <h2 className="font-black text-[#35352F] xl:text-6xl">
                Harus Memilih Saya
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xl:w-12"
                viewBox="0 0 48 49"
                fill="none"
              >
                <path
                  d="M30.2026 29.6262L47.0337 25.5816C48.3222 25.2726 48.3222 23.4401 47.0337 23.1295L30.2026 19.0848C29.7424 18.9747 29.3825 18.6148 29.2708 18.153L25.2261 1.32355C24.9171 0.0350521 23.0846 0.0350521 22.774 1.32355L18.7294 18.1546C18.6193 18.6148 18.2593 18.9747 17.7975 19.0865L0.968086 23.1311C-0.320417 23.4401 -0.320417 25.2726 0.968086 25.5832L17.7992 29.6279C18.2593 29.738 18.6193 30.0979 18.731 30.5597L22.7757 47.3908C23.0846 48.6793 24.9171 48.6793 25.2278 47.3908L29.2724 30.5597C29.3825 30.0963 29.7424 29.738 30.2026 29.6262Z"
                  fill="#EF713F"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-span-5 self-end xl:mt-24 xl:px-2">
          <img className="xl:w-[95%] mr-auto" src={divaAalasan} alt="" />
        </div>
        <div className="col-span-7 xl:mt-24 xl:px-2">
          <div
            aria-label="pembungkus-alasan-utama"
            className="flex flex-col xl:gap-4"
          >
            <div className="flex flex-row xl:gap-4">
              <div
                aria-label="card-alasan-01"
                className="flex flex-col flex-1 bg-[#F4ECEC] rounded-md xl:p-6"
              >
                <div className="flex flex-row xl:gap-8">
                  <div className="flex flex-row flex-1 items-center xl:gap-4">
                    <img src={iconAlasan01} alt="" />
                    <h3 className="break-words font-black xl:text-3xl">
                      Keterampilan Komunikasi
                    </h3>
                  </div>
                </div>
                <p className="text-[#8B887C] xl:mt-3 xl:text-sm xl:leading-relaxed">
                  Kemampuan untuk berkomunikasi secara efektif, baik lisan
                  maupun tertulis, dengan berbagai pihak termasuk rekan kerja,
                  klien/customer, dan atasan
                </p>
              </div>
              <div
                aria-label="card-alasan-02"
                className="flex flex-col flex-1 bg-[#F4ECEC] rounded-md relative xl:p-6"
              >
                <img
                  className="absolute -z-30 xl:w-44 xl:-right-4 xl:-top-24"
                  src={arrowAlasan}
                  alt=""
                />
                <div className="flex flex-row xl:gap-8">
                  <div className="flex flex-row flex-1 items-center xl:gap-4">
                    <img src={iconAlasan01} alt="" />
                    <h3 className="break-words font-black xl:text-3xl">
                      Kemampuan Beradaptasi
                    </h3>
                  </div>
                </div>
                <p className="text-[#8B887C] xl:mt-3 xl:text-sm xl:leading-relaxed">
                  Mampu beradaptasi dengan cepat dalam situasi yang berubah dan
                  mampu menghadapi tantangan dengan fleksibilitas
                </p>
              </div>
            </div>
            <div className="flex flex-row xl:gap-4">
              <div
                aria-label="card-alasan-01"
                className="flex flex-col flex-1 bg-[#F4ECEC] rounded-md xl:p-6"
              >
                <div className="flex flex-row xl:gap-8">
                  <div className="flex flex-row flex- items-center xl:gap-4">
                    <img src={iconAlasan01} alt="" />
                    <h3 className="break-words font-black xl:text-3xl">
                      Keterampilan Manajemen
                    </h3>
                  </div>
                </div>
                <p className="text-[#8B887C] xl:mt-3 xl:text-sm xl:leading-relaxed">
                  Mampu mengatur waktu dengan efisien, mengelola deadline, dan
                  mengatur prioritas tugas dengan baik
                </p>
              </div>
              <div
                aria-label="card-alasan-02"
                className="flex flex-col flex-1 bg-[#F4ECEC] rounded-md xl:p-6"
              >
                <div className="flex flex-row xl:gap-8">
                  <div className="flex flex-row flex-1 items-center xl:gap-4">
                    <img src={iconAlasan01} alt="" />
                    <h3 className="break-words font-black xl:text-3xl">
                      Kerjasama Tim
                    </h3>
                  </div>
                </div>
                <p className="text-[#8B887C] xl:mt-3 xl:text-sm xl:leading-relaxed">
                  Mampu bekerja dalam tim dengan anggota tim yang beragam dan
                  berkontribusi secara aktif untuk mencapai tujuan bersama
                </p>
              </div>
            </div>
            <div className="flex flex-row xl:gap-4">
              <div
                aria-label="card-alasan-01"
                className="flex flex-col flex-1 bg-[#F4ECEC] rounded-md xl:p-6"
              >
                <div className="flex flex-row xl:gap-8">
                  <div className="flex flex-row flex-1 items-center xl:gap-4">
                    <img src={iconAlasan01} alt="" />
                    <h3 className="break-words font-black xl:text-3xl">
                      Kemampuan Analisis
                    </h3>
                  </div>
                </div>
                <p className="text-[#8B887C] xl:mt-3 xl:text-sm xl:leading-relaxed">
                  Mampu menganalisis data dan informasi untuk mengambil
                  keputusan yang tepat dan mendukung perencanaan strategis
                </p>
              </div>
              <div
                aria-label="card-alasan-02"
                className="flex flex-col flex-1 bg-[#F4ECEC] rounded-md xl:p-6"
              >
                <div className="flex flex-row xl:gap-8">
                  <div className="flex flex-row flex-1 items-center xl:gap-4">
                    <img src={iconAlasan01} alt="" />
                    <h3 className="text-3xl break-words font-black">
                      Resolusi Konflik
                    </h3>
                  </div>
                </div>
                <p className="text-[#8B887C] xl:mt-3 xl:text-sm xl:leading-relaxed">
                  Mampu menghadapi konflik dengan bijaksana, mencari solusi yang
                  saling menguntungkan, dan menciptakan lingkungan kerja yang
                  harmonis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
