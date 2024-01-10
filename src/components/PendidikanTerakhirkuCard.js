import * as React from "react";

export const PendidikanTerakhkirkuCard = () => {
  return (
    <div aria-label="pendidikan-terakhirku" className="xl:mt-[-6.5rem]">
      <div
        aria-label="kotak-cta-pendidikan-terakhir-orange"
        className="pt-12 pb-12 pr-8 pl-32 rounded-2xl bg-orange-web relative overflow-hidden"
      >
        <div className="flex items-center xl:gap-36">
          <div className="flex flex-col xl:ml-10">
            <h2 className="text-white text-[2.688rem] font-extrabold">
              Pendidikan Terakhirku
            </h2>
            <p className="text[1.063rem] text-white break-words">
              Fresh Graduate Bachelor of degree dari Sekolah Tinggi Ilmu <br />{" "}
              Ekonomi Pasundan.
            </p>
          </div>
          <button className="py-5 px-16 uppercase text-center text-sm bg-lebih-detail font-bold bgpink z-30">
            LIHAT LEBIH DETAIL
          </button>
        </div>
        <svg
          className="absolute bottom-0 left-0 w-28"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 112 232"
          fill="none"
        >
          <path
            d="M53.935 0C61.4376 7.50259 111.096 116.764 111.096 116.764L36.9411 232H0L45.1095 118.053L17.7877 0H51.639H53.935Z"
            fill="#F98355"
          />
        </svg>
        <svg
          className="absolute -bottom-56 right-12 w-96"
          viewBox="0 0 452 451"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-44"
            y="341.234"
            width="546.154"
            height="217"
            rx="108.5"
            transform="rotate(-44.8585 -44 341.234)"
            fill="#F98355"
          />
        </svg>
      </div>
    </div>
  );
};
