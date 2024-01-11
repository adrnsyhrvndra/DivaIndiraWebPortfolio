import * as React from "react";
import { CardSkills } from "../components/subcomponents/cardSkills";
import graphic1 from "../img/cv (1).png";
import graphic2 from "../img/cv (2).png";

export const WorkTogetherAndCv = () => {
  return (
      <>
            <div className="xl:mt-40 xl:px-28">
                  <div className="bg-coklat-skill-web overflow-hidden relative xl:rounded-[1rem] xl:py-[5rem]">
                        <div className="mr-auto xl:w-[25rem] xl:ml-[12rem] min-[1440px]:w-[32rem] min-[1440px]:ml-[13rem]">
                              <h1 className="font-extrabold text-white xl:text-[3rem] xl:leading-[3.4rem] min-[1340px]:text-[3.1rem] min-[1440px]:text-[4rem] min-[1440px]:leading-[4.5rem]">Ayo bekerja sama sekarang!</h1>
                              <div className="flex flex-row items-center xl:mt-6 xl:gap-[2rem]">
                                    <button className="bg-orange-web uppercase text-white font-semibold xl:text-[0.8rem] xl:py-4 xl:px-6 xl:rounded-[0.28rem]">Kontak Saya Sekarang</button>
                                    <a href="../img/cv/Diva Indira Asauri-resume.pdf" className="flex flex-row items-center gap-3" download>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                <g clip-path="url(#clip0_34_1448)">
                                                <path d="M21.1053 16.9295V20.2979H7.6316V16.9295H5.38599V20.2979C5.38599 21.533 6.39651 22.5435 7.6316 22.5435H21.1053C22.3404 22.5435 23.3509 21.533 23.3509 20.2979V16.9295H21.1053ZM19.9825 12.4383L18.3993 10.8551L15.4912 13.7519V4.57861H13.2456V13.7519L10.3376 10.8551L8.75441 12.4383L14.3684 18.0523L19.9825 12.4383Z" fill="#EF713F"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_34_1448">
                                                      <rect width="26.9474" height="26.9474" fill="white" transform="translate(0.89476 0.0874023)"/>
                                                </clipPath>
                                                </defs>
                                          </svg>
                                          <span className="text-white font-extrabold xl:text-[0.9rem]">Download CV</span>
                                    </a>
                              </div>
                        </div>
                        <img className="absolute xl:right-0 xl:-top-10 xl:w-[27rem]" src={graphic1} alt="" />
                        <img className="absolute xl:-bottom-24 xl:-left-36 xl:w-[20rem]" src={graphic2} alt="" />
                  </div>
            </div>
      </>
  );
};
