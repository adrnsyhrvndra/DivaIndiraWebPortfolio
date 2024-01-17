import * as React from "react";
import { ReactDOM } from "react";
import { CardSkills } from "../components/subcomponents/cardSkills";

export const SkillDanKemampuan = () => {
  return (
    <>
      <div className="mt-16 px-4 xl:mt-32 xl:px-28">
        <div>
          <h5 className="font-normal text-center text-[0.7rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-2xl 2xl:text-3xl">
            Faktor Pertimbangan Untuk Bapak/Ibu
          </h5>
        </div>
        <div className="flex flex-row mx-auto justify-center items-center gap-3 mt-1 min-[550px]:mt-2 min-[550px]:gap-4 lg:mt-3 lg:gap-5 xl:gap-6 xl:mt-6 xl:mx-auto w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 md:w-[2rem] lg:w-[2.2rem] xl:w-12"
            viewBox="0 0 49 49"
            fill="none"
          >
            <path
              d="M30.7026 30.208L47.5336 26.1634C48.8221 25.8544 48.8221 24.0219 47.5336 23.7113L30.7026 19.6666C30.2424 19.5565 29.8825 19.1966 29.7707 18.7348L25.7261 1.90534C25.4171 0.616839 23.5846 0.616839 23.274 1.90534L19.2293 18.7364C19.1192 19.1966 18.7593 19.5565 18.2974 19.6683L1.46802 23.7129C0.179522 24.0219 0.179522 25.8544 1.46802 26.165L18.2991 30.2097C18.7593 30.3198 19.1192 30.6797 19.231 31.1415L23.2756 47.9726C23.5846 49.2611 25.4171 49.2611 25.7277 47.9726L29.7724 31.1415C29.8825 30.6781 30.2424 30.3198 30.7026 30.208Z"
              fill="#EF713F"
            />
          </svg>
          <h2 className="font-black text-[#35352F] text-center text-[1.4rem] min-[550px]:text-3xl md:text-[2.4rem] lg:text-[2.7rem] xl:text-6xl 2xl:text-7xl">
            Skill dan Kemampuan
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 md:w-[2rem] lg:w-[2.2rem] xl:w-12"
            viewBox="0 0 49 49"
            fill="none"
          >
            <path
              d="M30.7026 30.208L47.5336 26.1634C48.8221 25.8544 48.8221 24.0219 47.5336 23.7113L30.7026 19.6666C30.2424 19.5565 29.8825 19.1966 29.7707 18.7348L25.7261 1.90534C25.4171 0.616839 23.5846 0.616839 23.274 1.90534L19.2293 18.7364C19.1192 19.1966 18.7593 19.5565 18.2974 19.6683L1.46802 23.7129C0.179522 24.0219 0.179522 25.8544 1.46802 26.165L18.2991 30.2097C18.7593 30.3198 19.1192 30.6797 19.231 31.1415L23.2756 47.9726C23.5846 49.2611 25.4171 49.2611 25.7277 47.9726L29.7724 31.1415C29.8825 30.6781 30.2424 30.3198 30.7026 30.208Z"
              fill="#EF713F"
            />
          </svg>
        </div>
        <div aria-label="tabs-skill-dan-kemampuan">
          <div aria-label="tabs-list" className="w-full bg-[#FAF1F1] rounded-[0.4rem] flex flex-row justify-center items-center gap-4 py-2 px-4 mt-8 min-[450px]:justify-evenly md:justify-center md:py-4 md:gap-12 md:px-0 lg:mt-10 lg:gap-1 lg:justify-evenly xl:py-6 xl:rounded-[1.1rem] xl:mt-[3rem] 2xl:mt-[3.5rem]">
              <div aria-label="tabs-all-skills active" className="cursor-pointer text-center bg-[#2F251D] font-semibold text-white px-2 py-2 text-[0.5rem] rounded-[0.4rem] min-[520px]:text-[0.7rem] md:px-4 md:py-3 md:text-[1.2rem] lg:text-[1.3rem] lg:px-7 xl:px-6 xl:py-6 xl:text-2xl xl:rounded-[1.1rem] min-[1440px]:text-3xl">All Skils</div>
              <div aria-label="tabs-all-skills" className="cursor-pointer text-center bg-[#F9F9F9] font-medium px-2 py-2 text-[0.5rem] rounded-[0.4rem] min-[520px]:text-[0.7rem] md:px-4 md:py-3 md:text-[1.2rem] lg:text-[1.3rem] lg:px-7 xl:px-6 xl:py-6 xl:text-2xl xl:rounded-[1.1rem] min-[1440px]:text-3xl">Hard Skils</div>
              <div aria-label="tabs-all-skills" className="cursor-pointer text-center bg-[#F9F9F9] font-medium px-2 py-2 text-[0.5rem] rounded-[0.4rem] min-[520px]:text-[0.7rem] md:px-4 md:py-3 md:text-[1.2rem] lg:text-[1.3rem] lg:px-7 xl:px-6 xl:py-6 xl:text-2xl xl:rounded-[1.1rem] min-[1440px]:text-3xl">Soft Skils</div>
              <div aria-label="tabs-all-skills" className="cursor-pointer text-center bg-[#F9F9F9] font-medium px-2 py-2 text-[0.5rem] rounded-[0.4rem] min-[520px]:text-[0.7rem] md:px-4 md:py-3 md:text-[1.2rem] lg:text-[1.3rem] lg:px-7 xl:px-6 xl:py-6 xl:text-2xl xl:rounded-[1.1rem] min-[1440px]:text-3xl">Linguistik Skils</div>
          </div>
        </div>
        <div aria-label="cards-skill-dan-kemampuan" className="mt-8 xl:mt-10">
          <div className="grid grid-cols-12 md:gap-4 xl:gap-11">
            <CardSkills/>
            <CardSkills/>
            <CardSkills/>
            <CardSkills/>
            <CardSkills/>
            <CardSkills/>
          </div>
        </div>
      </div>
    </>
  );
};
