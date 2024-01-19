import * as React from "react";

export const JudulAlasan = (tangkapProps) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 md:gap-4 xl:gap-6">
        <h4 className="text-center text-base font-medium text-[#35352F] min-[500px]:text-lg md:text-[1.9rem] xl:text-3xl 2xl:text-4xl min-[1700px]:text-5xl">
          Ini alasan Bapak/Ibu
        </h4>
        <div className="flex flex-row text-center justify-center items-center gap-3 xl:gap-10">
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
          <h2 className="font-black text-[#35352F] text-2xl min-[500px]:text-3xl md:text-[3.5rem] xl:text-6xl 2xl:text-7xl">
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
    </>
  );
};
