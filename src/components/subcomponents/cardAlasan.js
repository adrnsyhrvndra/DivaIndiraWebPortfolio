import * as React from "react";
import iconAlasan01 from "../../img/icon-alasan.png";

export const CardAlasan = () => {
  return (
      <>
            <div
                aria-label="card-alasan-01"
                className="flex flex-col justify-center items-center p-6 md:flex-1 bg-[#F4ECEC] rounded-md xl:p-6"
              >
                <div className="flex flex-col text-center md:flex-row md:text-start xl:gap-8">
                  <div className="flex flex-col flex-1 items-center gap-2 md:gap-4 md:flex-row xl:gap-6">
                    <img className="w-24 md:w-20 lg:w-12 xl:w-36" src={iconAlasan01} alt="" />
                    <h3 className="break-words text-[#35352F] font-black text-[1.25rem] md:text-[2rem] md:leading-[2.2rem] lg:text-[1.2rem] lg:leading-[1.3rem] xl:text-3xl 2xl:text-4xl 2xl:leading-[2.3rem]">
                      Keterampilan Komunikasi
                    </h3>
                  </div>
                </div>
                <p className="text-[#8B887C] text-[0.81rem] leading-[1.72rem] text-center mt-2 md:text-start md:text-[0.9rem] lg:text-[0.7rem] lg:leading-[1.1rem] xl:mt-3 xl:text-sm xl:leading-relaxed 2xl:text-[1rem] min-[1650px]:text-[1.2rem] min-[1900px]:text-[1.35rem]">
                  Kemampuan untuk berkomunikasi secara efektif, baik lisan maupun tertulis, dengan berbagai pihak termasuk rekan kerja,klien/customer, dan atasan
                </p>
            </div>
      </>
    );
};