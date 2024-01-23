import * as React from "react";

export const CardAlasan = (tangkapProps) => {
  return (
      <>
          <div
              aria-label="card-alasan-01"
              className="bg-[#F4ECEC] cursor-pointer flex flex-col justify-center items-center p-6 transition-all scale-100 hover:shadow-lg hover:scale-105 md:flex-1 rounded-md xl:p-6"
            >
              <div className="flex flex-col text-center md:flex-row md:text-start xl:gap-8">
                <div className="flex flex-col items-center justify-center gap-2 md:gap-4 md:flex-row md:justify-start xl:gap-6">
                  <img className="w-16 flex-1 md:w-16 lg:w-12 xl:w-20 min-[1600px]:w-24" src={tangkapProps.icon} alt="iconAlasanDiva" />
                  <h3 id="hasil" className="text-wrap text-[#35352F] font-black text-[1.2rem] min-[410px]:text-[1.5rem] md:text-[2rem] md:leading-[2.2rem] lg:text-[1.2rem] lg:leading-[1.3rem] xl:text-2xl 2xl:text-3xl 2xl:leading-[2.1rem] min-[1600px]:text-[2.1rem]">
                      {tangkapProps.title}
                  </h3>
                </div>
              </div>
              <p className="text-[#8B887C] text-[0.9rem] leading-[1.72rem] text-center mt-2 md:text-start md:text-[0.9rem] lg:text-[0.7rem] lg:leading-[1.1rem] xl:mt-3 xl:text-sm xl:leading-relaxed 2xl:text-[1rem] min-[1650px]:text-[1.2rem] min-[1900px]:text-[1.35rem]">
                  {tangkapProps.deskripsi}
              </p>
          </div>
      </>
    );
};