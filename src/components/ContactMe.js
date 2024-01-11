import * as React from "react";
import imageDivas from "../img/divacircle.png";

export const ContactMe = () => {
  return (
            <>
                  <div className="xl:mt-32 xl:px-10">
                        <div className="grid grid-cols-12 xl:gap-14">
                              <div className="col-span-6">
                                    <img src={imageDivas} alt="" />
                              </div>
                              <div className="col-span-6">
                                    <div className="flex flex-row items-center xl:gap-8">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                                <path d="M20.7269 19.917L31.9476 17.2206C32.8066 17.0146 32.8066 15.7929 31.9476 15.5858L20.7269 12.8894C20.4201 12.816 20.1802 12.576 20.1057 12.2682L17.4092 1.04855C17.2032 0.189546 15.9816 0.189546 15.7745 1.04855L13.0781 12.2693C13.0047 12.576 12.7647 12.816 12.4568 12.8905L1.23721 15.5869C0.378206 15.7929 0.378206 17.0146 1.23721 17.2217L12.4579 19.9181C12.7647 19.9915 13.0047 20.2315 13.0792 20.5393L15.7756 31.76C15.9816 32.619 17.2032 32.619 17.4103 31.76L20.1068 20.5393C20.1802 20.2304 20.4201 19.9915 20.7269 19.917Z" fill="#333232"/>
                                          </svg>
                                          <h3 className="text-[#35352F] font-black xl:text-[3.34163rem]">Kirim Pesan</h3>
                                    </div>
                                    <form action="" className="flex flex-col xl:gap-6 xl:mt-10">
                                          <div aria-label="group-input" className="flex flex-col xl:gap-4">
                                                <label htmlFor="" className="font-normal xl:text-[1.12rem]">Nama Bapak/Ibu*</label>
                                                <input type="text" placeholder="Silahkan Masukan Nama Bapak/Ibu" className="w-full bg-[#FAF1F1] xl:rounded-[0.16rem] xl:py-6 xl:pl-7 placeholder:text-[#A9A9AA99] placeholder:font-normal placeholder:tracking-tight focus:outline-none focus:border-orange-web focus:ring-2 focus:ring-orange-web"/>
                                          </div>
                                          <div aria-label="group-input" className="flex flex-col xl:gap-4">
                                                <label htmlFor="" className="font-normal xl:text-[1.12rem]">Alamat Email*</label>
                                                <input type="text" placeholder="Silahkan Masukan Nama Bapak/Ibu" className="w-full bg-[#FAF1F1] xl:rounded-[0.16rem] xl:py-6 xl:pl-7 placeholder:text-[#A9A9AA99] placeholder:font-normal placeholder:tracking-tight focus:outline-none focus:border-orange-web focus:ring-2 focus:ring-orange-web"/>
                                          </div>
                                          <div aria-label="group-input" className="flex flex-col xl:gap-4">
                                                <label htmlFor="" className="font-normal xl:text-[1.12rem]">Kirim Pesan</label>
                                                <input type="text" placeholder="Silahkan Masukan Nama Bapak/Ibu" className="w-full bg-[#FAF1F1] xl:rounded-[0.16rem] xl:py-6 xl:pl-7 placeholder:text-[#A9A9AA99] placeholder:font-normal placeholder:tracking-tight focus:outline-none focus:border-orange-web focus:ring-2 focus:ring-orange-web"/>
                                          </div>
                                          <button className="block uppercase font-bold text-white bg-cream-web text-center xl:rounded-[0.3rem] xl:text-[1.25rem] xl:py-5">KIRIM PESAN</button>
                                    </form>
                              </div>
                        </div>
                  </div>
            </>
      );
};