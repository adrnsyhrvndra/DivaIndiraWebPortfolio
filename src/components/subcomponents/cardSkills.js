import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ReactDOM } from "react";

export const CardSkills = (tangkapProps) => {
  const [trueIconHover,settrueIconHover] = useState(false);
  
  const changeImage = () => {
    settrueIconHover(true);
  };

  const changeImageDefault = () => {
    settrueIconHover(false);
  };

  return (
    <>
      <div className="col-span-12 gap-11 mb-11 md:gap-0 md:mb-0 md:col-span-6">
        <div
          aria-label="card-skill"
          onMouseOver={changeImage}
          onMouseLeave={changeImageDefault}
          className="bg-[#FDFDFD] h-full cursor-pointer flex flex-1 shadow-md rounded-2xl text-center text-[#35352F] hover:bg-cream-web md:shadow-lg py-12 px-6 md:py-10 md:px-9 xl:py-16 xl:px-14 xl:rounded-2xl"
        >
          <div className="mx-auto text-center">
            <img className="mx-auto w-36 md:w-24 xl:w-36 2xl:w-44" src={
              trueIconHover ?  tangkapProps.iconBrown : tangkapProps.icon
            } alt="" />
            <h2 className="text-wrap break-words font-black text-[2rem] mt-6 text-center  md:text-[1.8rem] lg:text-[2.3rem] xl:mt-6 2xl:text-[2.8rem]">
              {tangkapProps.skillJudul}
            </h2>
            <p className="font-normal mt-2 text-[0.9rem] leading-[1.6rem] md:text-[1rem] md:leading-[1.4rem]  lg:leading-[1.7rem] xl:leading[2.2rem] xl:text-[1.2rem] xl:mt-4 2xl:mt-5 2xl:text-[1.3rem] 2xl:leading-[2.6rem]">
              {tangkapProps.deskripsi}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
