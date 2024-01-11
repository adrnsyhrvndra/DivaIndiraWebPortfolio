import * as React from "react";
import { ReactDOM } from "react";
import { CardSkills } from "../components/subcomponents/cardSkills";

export const SkillDanKemampuan = () => {
  return (
    <>
      <div className="xl:mt-40 xl:px-28">
        <div>
          <h5 className="text-2xl font-normal text-center">
            Faktor Pertimbangan Untuk Bapak/Ibu
          </h5>
        </div>
        <div className="flex flex-row xl:gap-6 xl:mt-6 xl:mx-auto w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="xl:w-12"
            viewBox="0 0 49 49"
            fill="none"
          >
            <path
              d="M30.7026 30.208L47.5336 26.1634C48.8221 25.8544 48.8221 24.0219 47.5336 23.7113L30.7026 19.6666C30.2424 19.5565 29.8825 19.1966 29.7707 18.7348L25.7261 1.90534C25.4171 0.616839 23.5846 0.616839 23.274 1.90534L19.2293 18.7364C19.1192 19.1966 18.7593 19.5565 18.2974 19.6683L1.46802 23.7129C0.179522 24.0219 0.179522 25.8544 1.46802 26.165L18.2991 30.2097C18.7593 30.3198 19.1192 30.6797 19.231 31.1415L23.2756 47.9726C23.5846 49.2611 25.4171 49.2611 25.7277 47.9726L29.7724 31.1415C29.8825 30.6781 30.2424 30.3198 30.7026 30.208Z"
              fill="#EF713F"
            />
          </svg>
          <h2 className="font-black text-[#35352F] xl:text-6xl">
            Skill dan Kemampuan
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="xl:w-12"
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
          <div aria-label="tabs-list" className="w-full rounded-[1.1rem] bg-[#FAF1F1] flex flex-row justify-center items-center xl:gap-[5.5rem] xl:py-6 xl:mt-[5.5rem]">
              <div aria-label="tabs-all-skills active" className="cursor-pointer bg-[#2F251D] rounded-[1.1rem] font-semibold text-white xl:px-6 xl:py-6 xl:text-2xl min-[1440px]:text-3xl">All Skils</div>
              <div aria-label="tabs-all-skills" className="cursor-pointer bg-[#F9F9F9] rounded-[1.1rem] font-medium xl:px-6 xl:py-6 xl:text-2xl min-[1440px]:text-3xl">Hard Skils</div>
              <div aria-label="tabs-all-skills" className="cursor-pointer bg-[#F9F9F9] rounded-[1.1rem] font-medium xl:px-6 xl:py-6 xl:text-2xl min-[1440px]:text-3xl">Soft Skils</div>
              <div aria-label="tabs-all-skills" className="cursor-pointer bg-[#F9F9F9] rounded-[1.1rem] font-medium xl:px-6 xl:py-6 xl:text-2xl min-[1440px]:text-3xl">Linguistik Skils</div>
          </div>
        </div>
        <div aria-label="cards-skill-dan-kemampuan" className="xl:mt-20">
          <div className="grid grid-cols-12 xl:gap-11">
            <CardSkills/>
          </div>
        </div>
      </div>
    </>
  );
};
