import * as React from "react";
import graphic1 from "../img/cv (1).png";
import graphic2 from "../img/cv (2).png";
import cvmobile01 from "../img/cvmobile01.png";
import cvmobile02 from "../img/cvmobile02.png";
import { motion } from "framer-motion";

export const WorkTogetherAndCv = () => {

      return (
            <div id="cv">
                  <motion.div
                        initial={{opacity:0, x:-100}}
                        whileInView={{opacity:1, x:0}}
                        viewport={{once:true}}
                        transition={{delay:0.8}}
                  >
                        <div className="px-4 md:mt-24 xl:mt-40 xl:px-28">
                              <div className="bg-coklat-skill-web overflow-hidden relative pt-28 pb-72 px-6 rounded-[0.5rem] md:pt-14 md:pb-16 md:px-0 xl:rounded-[1rem] xl:pt-[5rem] xl:pb-[5rem]">
                                    <div className="md:ml-[5rem] md:w-[23rem] lg:w-[50%] xl:w-[25rem] xl:ml-[12rem] min-[1440px]:w-[32rem] min-[1440px]:ml-[13rem] 2xl:w-[33rem] min-[1600px]:w-[36rem] min-[1720px]:w-[43rem]">
                                          <h1 className="font-extrabold text-white text-[2.8rem] text-center leading-[3rem] min-[600px]:text-[3rem] min-[600px]:leading-[3.5rem] md:text-start md:text-[2.7rem] md:leading-[3rem] min-[950px]:text-[2.9rem] lg:text-[2.9rem] lg:leading-[3.7rem] min-[1150px]:text-[3.6rem] min-[1150px]:leading-[4.2rem] xl:text-[3rem] xl:leading-[3.4rem] min-[1340px]:text-[3.1rem] min-[1440px]:text-[4rem] min-[1440px]:leading-[4.5rem] 2xl:leading-[4.8rem] min-[1600px]:text-[4.5rem] min-[1720px]:leading-[5.rem] min-[1890px]:text-[5rem]">Ayo bekerja sama sekarang!</h1>
                                          <div className="flex flex-col items-center justify-center mt-6 gap-8 md:flex-row md:justify-start lg:mt-8 xl:mt-6 xl:gap-[2rem] 2xl:mt-9">
                                                <a href="https://wa.link/82x108" target="_blank" rel="noreferrer">
                                                      <button className="bg-orange-web uppercase text-white font-semibold text-[0.7rem] py-4 px-6 rounded-[0.2rem] hover:opacity-60 lg:text-base xl:text-[0.8rem] xl:py-4 xl:px-6 xl:rounded-[0.28rem] 2xl:text-[1rem]">Kontak Saya Sekarang</button>
                                                </a>
                                                <a href="https://pdfhost.io/v/Yy4FvE4HJ_Resume" target="_blank" rel="noreferrer" className="flex flex-row items-center gap-3">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 xl:w-7" viewBox="0 0 28 28" fill="none">
                                                            <g clip-path="url(#clip0_34_1448)">
                                                            <path d="M21.1053 16.9295V20.2979H7.6316V16.9295H5.38599V20.2979C5.38599 21.533 6.39651 22.5435 7.6316 22.5435H21.1053C22.3404 22.5435 23.3509 21.533 23.3509 20.2979V16.9295H21.1053ZM19.9825 12.4383L18.3993 10.8551L15.4912 13.7519V4.57861H13.2456V13.7519L10.3376 10.8551L8.75441 12.4383L14.3684 18.0523L19.9825 12.4383Z" fill="#EF713F"/>
                                                            </g>
                                                            <defs>
                                                            <clipPath id="clip0_34_1448">
                                                                  <rect width="26.9474" height="26.9474" fill="white" transform="translate(0.89476 0.0874023)"/>
                                                            </clipPath>
                                                            </defs>
                                                      </svg>
                                                      <span className="text-white font-extrabold text-[0.9rem] lg:text-base xl:text-[0.9rem] 2xl:text-[1rem]">Download CV</span>
                                                </a>
                                          </div>
                                    </div>
                                    <img className="absolute hidden md:block md:w-[19rem] md:right-[-5%] md:top-0 min-[800px]:right-[0%] min-[900px]:right-[7%] lg:w-[21rem] xl:right-0 xl:-top-10 xl:w-[25.5rem] 2xl:w-[27rem] min-[1700px]:right-[7%]" src={graphic1} alt="" />
                                    <img className="absolute hidden md:block md:w-[17rem] md:left-0 lg:hidden xl:block xl:-bottom-24 xl:-left-36 xl:w-[20rem]" src={graphic2} alt="" />
                                    <img className="absolute w-80 block -bottom-20 left-1/2 -translate-x-1/2 md:hidden" src={cvmobile01} alt="" />
                                    <img className="absolute w-20 block top-0 left-1/2 -translate-x-1/2 md:hidden" src={cvmobile02} alt="" />
                              </div>
                        </div>
                  </motion.div>
            </div>
      );
};
