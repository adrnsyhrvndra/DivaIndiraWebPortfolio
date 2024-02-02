import * as React from "react";

export const PendidikanTerakhkirkuCard = () => {
  return (
    <div 
      aria-label="pendidikan-terakhirku" 
      className="mt-[-6.5rem] mx-auto md:mt-[-4rem] xl:mt-[-6.5rem]"
    >
      <div
        aria-label="kotak-cta-pendidikan-terakhir-orange"
        className="bg-orange-web relative overflow-hidden py-10 px-6 md:pl-20 md:pr-14 md:py-10 min-[820px]:pl-[19%] min-[900px]:pl-[20%] xl:pl-[15%] min-[1400px]:pl-[17%] min-[1500px]:pl-[18%] 2xl:pl-[19%]"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 z-10 md:gap-14 xl:gap-36 2xl:gap-44">
          <div className="flex flex-col xl:ml-10 z-10 gap-2">
            <h2 className="text-white text-[1.5rem] text-center font-extrabold md:text-start lg:text-[2rem] xl:text-[2.1rem] min-[1400px]:text-[2.3rem] 2xl:text-[3rem]">
                Pendidikan Terakhirku
            </h2>
            <p className="font-normal text-[0.7rem] text-white break-words text-center md:text-start lg:text-[0.9rem] xl:text[1.063rem] 2xl:text-[1.2rem]">
              Fresh Graduate Bachelor of degree dari Sekolah Tinggi Ilmu <br className="hidden md:block" />{" "}
              Ekonomi Pasundan.
            </p>
          </div>
          <a href="#experience" className="z-10">
            <button className="text-[0.8rem] py-4 px-6 uppercase text-center bg-lebih-detail font-bold break-words md:text-[0.8rem] md:px-8 md:py-2 lg:mt-0 xl:py-5 xl:px-16 xl:text-sm 2xl:text-base">
              LIHAT LEBIH DETAIL
            </button>
          </a>
        </div>
        <svg
          className="absolute bottom-0 left-0 hidden md:block md:w-20 md:-left-2 lg:w-28 lg:left-5"
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
          className="absolute -bottom-20 -right-2 xl:-bottom-56 xl:right-12 z-0 w-48 xl:w-96"
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
