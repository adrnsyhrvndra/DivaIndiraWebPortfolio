import * as React from "react";
import divaAalasan from "../img/diva-alasanskills.png";
import arrowAlasan from "../img/arrow-icon.png";
import { CardAlasan } from "./subcomponents/cardAlasan";

export const AlasanBapakIbu = () => {
  return (
    <div aria-label="alasan-bapak-ibu-memilih-saya">
      <div className="grid grid-cols-12 md:mt-24 xl:gap-4 min-[1450px]:mt-10 2xl:mt-40">
        <div className="col-span-12 order-2 mt-8 md:mt-0 md:order-1">
          <div className="flex flex-col items-center justify-center gap-3 md:gap-4 xl:gap-6">
            <h4 className="text-center font-medium text-[#35352F] md:text-[1.9rem] xl:text-3xl 2xl:text-4xl min-[1700px]:text-5xl">
              Ini alasan Bapak/Ibu
            </h4>
            <div className="flex flex-row text-center justify-center items-center gap-6 xl:gap-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 md:w-11 xl:w-12"
                viewBox="0 0 48 49"
                fill="none"
              >
                <path
                  d="M30.2026 29.6262L47.0337 25.5816C48.3222 25.2726 48.3222 23.4401 47.0337 23.1295L30.2026 19.0848C29.7424 18.9747 29.3825 18.6148 29.2708 18.153L25.2261 1.32355C24.9171 0.0350521 23.0846 0.0350521 22.774 1.32355L18.7294 18.1546C18.6193 18.6148 18.2593 18.9747 17.7975 19.0865L0.968086 23.1311C-0.320417 23.4401 -0.320417 25.2726 0.968086 25.5832L17.7992 29.6279C18.2593 29.738 18.6193 30.0979 18.731 30.5597L22.7757 47.3908C23.0846 48.6793 24.9171 48.6793 25.2278 47.3908L29.2724 30.5597C29.3825 30.0963 29.7424 29.738 30.2026 29.6262Z"
                  fill="#EF713F"
                />
              </svg>
              <h2 className="font-black text-[#35352F] text-2xl md:text-[3.5rem] xl:text-6xl 2xl:text-7xl">
                Harus Memilih Saya
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 md:w-11 xl:w-12 "
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
        <div className="col-span-12 self-end order-1 mt-10 md:order-2 lg:col-span-6 lg:self-end min-[1150px]:mt-16 xl:col-span-5 xl:mt-24 xl:px-2">
          <img className="mx-auto md:w-[75%] xl:w-[95%] mr-auto" src={divaAalasan} alt="" />
        </div>
        <div className="col-span-12 mt-6 lg:col-span-6 lg:self-end xl:col-span-7 md:mt-16 xl:mt-24 xl:px-2 order-3 md:order-3">
          <div
            aria-label="pembungkus-alasan-utama"
            className="flex flex-col gap-2 xl:gap-4"
          >
            <div className="flex flex-col gap-2 md:flex-row xl:gap-4">
              <CardAlasan/>
              <CardAlasan/>
            </div>
            <div className="flex flex-col gap-2 md:flex-row xl:gap-4">
              <CardAlasan/>
              <CardAlasan/>
            </div>
            <div className="flex flex-col gap-2 md:flex-row xl:gap-4">
              <CardAlasan/>
              <CardAlasan/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
