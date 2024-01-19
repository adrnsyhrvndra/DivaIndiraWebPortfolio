import * as React from "react";

export const ContactMe = () => {

      let imageDivaFomr = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705661243/divaWebPortfolio/reduceResolution/FomDiva_nnv4kf.png";

      return (
            <>
                  <div className="xl:mt-32 xl:px-10">
                        <div className="grid grid-cols-12 lg:gap-4 xl:gap-14">
                              <div className="col-span-12 mt-16 md:mt-24 lg:col-span-6 lg:self-center">
                                    <img className="w-[85%] mx-auto md:w-[70%] lg:w-[90%]" src={imageDivaFomr} alt="" />
                              </div>
                              <div className="col-span-12 mt-10 px-4 md:px-16 md:mt-20 lg:col-span-6 lg:px-0 lg:self-start">
                                    <div className="flex flex-row justify-center items-center gap-6 md:gap-10 lg:gap-6 lg:justify-start xl:gap-8">
                                          <svg aria-label="bintang-hitam" xmlns="http://www.w3.org/2000/svg" className="w-8 hidden lg:block lg:w-7" viewBox="0 0 33 33" fill="none">
                                                <path d="M20.7269 19.917L31.9476 17.2206C32.8066 17.0146 32.8066 15.7929 31.9476 15.5858L20.7269 12.8894C20.4201 12.816 20.1802 12.576 20.1057 12.2682L17.4092 1.04855C17.2032 0.189546 15.9816 0.189546 15.7745 1.04855L13.0781 12.2693C13.0047 12.576 12.7647 12.816 12.4568 12.8905L1.23721 15.5869C0.378206 15.7929 0.378206 17.0146 1.23721 17.2217L12.4579 19.9181C12.7647 19.9915 13.0047 20.2315 13.0792 20.5393L15.7756 31.76C15.9816 32.619 17.2032 32.619 17.4103 31.76L20.1068 20.5393C20.1802 20.2304 20.4201 19.9915 20.7269 19.917Z" fill="#333232"/>
                                          </svg>
                                          <svg aria-label="bintang-orange-01" xmlns="http://www.w3.org/2000/svg" className="w-5 md:w-10 lg:hidden" viewBox="0 0 19 19" fill="none">
                                                <path d="M11.4259 11.7757L17.7376 10.259C18.2208 10.1431 18.2208 9.4559 17.7376 9.33942L11.4259 7.82268C11.2534 7.78138 11.1184 7.64641 11.0765 7.47323L9.55974 1.1622C9.44387 0.679008 8.75668 0.679008 8.6402 1.1622L7.12346 7.47384C7.08217 7.64641 6.94719 7.78138 6.77401 7.82329L0.462977 9.34004C-0.0202112 9.4559 -0.0202112 10.1431 0.462977 10.2596L6.77463 11.7763C6.94719 11.8176 7.08217 11.9526 7.12407 12.1258L8.64082 18.4374C8.75669 18.9206 9.44387 18.9206 9.56036 18.4374L11.0771 12.1258C11.1184 11.952 11.2534 11.8176 11.4259 11.7757Z" fill="#EF713F"/>
                                          </svg>
                                          <h3 className="text-[#35352F] font-black text-[1.875rem] min-[600px]:text-[2.5rem] md:text-[3.3rem] lg:text-[2.5rem] xl:text-[3.3rem]">Kirim Pesan</h3>
                                          <svg aria-label="bintang-orange-02" xmlns="http://www.w3.org/2000/svg" className="w-5 md:w-10 lg:hidden" viewBox="0 0 19 19" fill="none">
                                                <path d="M11.4259 11.7757L17.7376 10.259C18.2208 10.1431 18.2208 9.4559 17.7376 9.33942L11.4259 7.82268C11.2534 7.78138 11.1184 7.64641 11.0765 7.47323L9.55974 1.1622C9.44387 0.679008 8.75668 0.679008 8.6402 1.1622L7.12346 7.47384C7.08217 7.64641 6.94719 7.78138 6.77401 7.82329L0.462977 9.34004C-0.0202112 9.4559 -0.0202112 10.1431 0.462977 10.2596L6.77463 11.7763C6.94719 11.8176 7.08217 11.9526 7.12407 12.1258L8.64082 18.4374C8.75669 18.9206 9.44387 18.9206 9.56036 18.4374L11.0771 12.1258C11.1184 11.952 11.2534 11.8176 11.4259 11.7757Z" fill="#EF713F"/>
                                          </svg>
                                    </div>
                                    <form action="" className="flex flex-col gap-3 mt-8 xl:gap-6 xl:mt-10">
                                          <div aria-label="group-input" className="flex flex-col gap-2 xl:gap-4">
                                                <label htmlFor="" className="font-normal text-[0.6rem] md:text-[1rem] xl:text-[1.12rem]">Nama Bapak/Ibu*</label>
                                                <input type="text" placeholder="Silahkan Masukan Nama Bapak/Ibu" className="w-full bg-[#FAF1F1] py-2 pl-3 placeholder:text-[0.6rem] md:py-4 md:pl-6 md:text-[1rem] md:placeholder:text-[1rem] placeholder:text-[#A9A9AA99] placeholder:font-normal focus:outline-none focus:border-orange-web focus:ring-2 focus:ring-orange-web xl:rounded-[0.16rem] xl:py-6 xl:pl-7 xl:placeholder:tracking-tight"/>
                                          </div>
                                          <div aria-label="group-input" className="flex flex-col gap-2 xl:gap-4">
                                                <label htmlFor="" className="font-normal text-[0.6rem] md:text-[1rem] xl:text-[1.12rem]">Alamat Email*</label>
                                                <input type="text" placeholder="Silahkan Masukan Email Bapak/Ibu" className="w-full bg-[#FAF1F1] py-2 pl-3 placeholder:text-[0.6rem] md:py-4 md:pl-6 md:text-[1rem] md:placeholder:text-[1rem] placeholder:text-[#A9A9AA99] placeholder:font-normal focus:outline-none focus:border-orange-web focus:ring-2 focus:ring-orange-web xl:rounded-[0.16rem] xl:py-6 xl:pl-7 xl:placeholder:tracking-tight"/>
                                          </div>
                                          <div aria-label="group-input" className="flex flex-col gap-2 xl:gap-4">
                                                <label htmlFor="" className="font-normal text-[0.6rem] md:text-[1rem] xl:text-[1.12rem]">Kirim Pesan</label>
                                                <input type="text" placeholder="Silahkan Masukan Nama Bapak/Ibu" className="w-full bg-[#FAF1F1] pt-1 pb-12 pl-3 placeholder:text-[0.6rem] md:pt-4 md:pl-6 md:pb-16 md:placeholder:text-[1rem] md:text-[1rem] lg:pt-3 placeholder:text-[#A9A9AA99] placeholder:font-normal focus:outline-none focus:border-orange-web focus:ring-2 focus:ring-orange-web xl:rounded-[0.16rem] xl:pt-6 xl:pb-14 xl:pl-7 xl:placeholder:tracking-tight"/>
                                          </div>
                                          <button className="block uppercase font-bold text-white bg-cream-web text-center text-[0.6rem] rounded-[0.1rem] mt-2 py-2 md:py-4 md:text-[1.1rem] lg:mt-1 lg:text-base xl:rounded-[0.3rem] xl:text-[1.25rem] xl:py-5">KIRIM PESAN</button>
                                    </form>
                              </div>
                        </div>
                  </div>
            </>
      );
};