import * as React from "react";
import { NavMenuUl } from "./subcomponents/NavMenu/navMenu";
import { useState } from "react";
import { Fade } from "@material-ui/core";

export const Navbar = () => {
  
  let imageLogoDivaMobile = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705918636/divaWebPortfolio/reduceResolution/Group_9268_pxffrj.png";

  let logoWebs = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705578132/divaWebPortfolio/logoWebs/logoDivaWebs_hbzvel.png";
  let prevScrollY = 0; // Menyimpan posisi scroll sebelumnya

  const [fixedNav,setFixedNav] = useState(false);
  const [mobiletabletNav,setMobiletabletNav] = useState(false);

  const munculBarMenuMobileTablet = () => {
    setMobiletabletNav(true);
  }
  
  const removeBarMenuMobileTablet = () => {
    setMobiletabletNav(false);
  }

  const cekApakahakungescrollkebawahNav = () =>{
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > prevScrollY) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  }
  window.addEventListener('scroll', cekApakahakungescrollkebawahNav);

  return (
    <>
      <div
        aria-label="navbar"
        className="defaultnav"
      >
        <img className="order-1 w-24 md:order-2 md:w-28 lg:order-1 xl:w-36 2xl:w-44" src={logoWebs} alt="logo-web-diva" />
        <div className="hidden flex-row items-center md:order-3 md:flex lg:order-2 lg:gap-[2rem] xl:gap-[4.3rem] min-[1400px]:gap-[4.6rem]">
          <NavMenuUl/>
          <div
            aria-label="button-contact-me"
            className="hidden md:flex flex-row items-center rounded-full bg-coklat-web cursor-pointer hover:opacity-60 md:gap-1 md:py-2 md:px-4 lg:gap-2 lg:px-6 lg:py-2 xl:gap-2 xl:px-6 xl:py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-[0.9rem] lg:w-6 xl:w-6"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.8899 21.7276C14.5075 21.6767 10.5898 21.1353 6.48674 17.0332C2.38466 12.9301 1.84418 9.01334 1.79234 7.62998C1.71554 5.52182 3.33026 3.47414 5.19554 2.67446C5.42015 2.57747 5.66613 2.54054 5.90933 2.5673C6.15252 2.59406 6.38458 2.68359 6.58274 2.8271C8.11874 3.94646 9.17858 5.6399 10.0887 6.97142C10.2889 7.26397 10.3745 7.61995 10.3292 7.97155C10.2839 8.32315 10.1108 8.64579 9.8429 8.87798L7.96994 10.269C7.87945 10.3344 7.81575 10.4303 7.79068 10.5391C7.76561 10.6479 7.78087 10.762 7.83362 10.8604C8.25794 11.6313 9.0125 12.7794 9.8765 13.6434C10.7415 14.5074 11.9434 15.3119 12.768 15.7842C12.8714 15.8423 12.9931 15.8585 13.1081 15.8296C13.2231 15.8006 13.3226 15.7288 13.3863 15.6287L14.6055 13.773C14.8296 13.4753 15.1603 13.2758 15.5282 13.2164C15.8961 13.157 16.2727 13.2422 16.5792 13.4543C17.9299 14.3893 19.5063 15.4309 20.6602 16.9084C20.8153 17.108 20.914 17.3456 20.946 17.5964C20.9779 17.8471 20.9418 18.1019 20.8416 18.334C20.0381 20.2089 18.0048 21.8053 15.8899 21.7276Z"
                fill="#C8945B"
              />
            </svg>
            <h6 className="text-white md:text-[0.6rem] lg:text-base 2xl:text-lg min-[1700px]:text-xl min-[1800px]:text-2xl">Contact Me</h6>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={munculBarMenuMobileTablet} className="order-2 w-10 md:order-1 cursor-pointer hover:opacity-60 lg:hidden" viewBox="0 0 40 41" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.928 37.1235C5.86 40.0515 10.572 40.0515 20 40.0515C29.428 40.0515 34.142 40.0515 37.07 37.1215C40 34.1955 40 29.4795 40 20.0515C40 10.6235 40 5.90951 37.07 2.97951C34.144 0.0515137 29.428 0.0515137 20 0.0515137C10.572 0.0515137 5.858 0.0515137 2.928 2.97951C0 5.91151 0 10.6235 0 20.0515C0 29.4795 0 34.1955 2.928 37.1235ZM33.5 28.0515C33.5 28.4493 33.342 28.8309 33.0607 29.1122C32.7794 29.3935 32.3978 29.5515 32 29.5515H8C7.60218 29.5515 7.22064 29.3935 6.93934 29.1122C6.65804 28.8309 6.5 28.4493 6.5 28.0515C6.5 27.6537 6.65804 27.2722 6.93934 26.9909C7.22064 26.7095 7.60218 26.5515 8 26.5515H32C32.3978 26.5515 32.7794 26.7095 33.0607 26.9909C33.342 27.2722 33.5 27.6537 33.5 28.0515ZM32 21.5515C32.3978 21.5515 32.7794 21.3935 33.0607 21.1122C33.342 20.8309 33.5 20.4493 33.5 20.0515C33.5 19.6537 33.342 19.2722 33.0607 18.9909C32.7794 18.7095 32.3978 18.5515 32 18.5515H8C7.60218 18.5515 7.22064 18.7095 6.93934 18.9909C6.65804 19.2722 6.5 19.6537 6.5 20.0515C6.5 20.4493 6.65804 20.8309 6.93934 21.1122C7.22064 21.3935 7.60218 21.5515 8 21.5515H32ZM33.5 12.0515C33.5 12.4493 33.342 12.8309 33.0607 13.1122C32.7794 13.3935 32.3978 13.5515 32 13.5515H8C7.60218 13.5515 7.22064 13.3935 6.93934 13.1122C6.65804 12.8309 6.5 12.4493 6.5 12.0515C6.5 11.6537 6.65804 11.2722 6.93934 10.9909C7.22064 10.7095 7.60218 10.5515 8 10.5515H32C32.3978 10.5515 32.7794 10.7095 33.0607 10.9909C33.342 11.2722 33.5 11.6537 33.5 12.0515Z" fill="#5C4534"/>
        </svg>
      </div>
      <Fade in={fixedNav} timeout={600} easing="ease-in-out">
        <div
          aria-label="navbar"
          className="fixednav"
        >
          <img className="order-1 w-24 md:order-2 md:w-28 lg:order-1 xl:w-36 2xl:w-44" src={logoWebs} alt="logo-web-diva" />
          <div className="hidden flex-row items-center md:order-3 md:flex lg:order-2 lg:gap-[2rem] xl:gap-[4.3rem] min-[1400px]:gap-[4.6rem]">
            <NavMenuUl/>
            <div
              aria-label="button-contact-me"
              className="hidden md:flex flex-row items-center rounded-full bg-coklat-web cursor-pointer hover:opacity-60 md:gap-1 md:py-2 md:px-4 lg:gap-2 lg:px-6 lg:py-2 xl:gap-2 xl:px-6 xl:py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[0.9rem] lg:w-6 xl:w-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.8899 21.7276C14.5075 21.6767 10.5898 21.1353 6.48674 17.0332C2.38466 12.9301 1.84418 9.01334 1.79234 7.62998C1.71554 5.52182 3.33026 3.47414 5.19554 2.67446C5.42015 2.57747 5.66613 2.54054 5.90933 2.5673C6.15252 2.59406 6.38458 2.68359 6.58274 2.8271C8.11874 3.94646 9.17858 5.6399 10.0887 6.97142C10.2889 7.26397 10.3745 7.61995 10.3292 7.97155C10.2839 8.32315 10.1108 8.64579 9.8429 8.87798L7.96994 10.269C7.87945 10.3344 7.81575 10.4303 7.79068 10.5391C7.76561 10.6479 7.78087 10.762 7.83362 10.8604C8.25794 11.6313 9.0125 12.7794 9.8765 13.6434C10.7415 14.5074 11.9434 15.3119 12.768 15.7842C12.8714 15.8423 12.9931 15.8585 13.1081 15.8296C13.2231 15.8006 13.3226 15.7288 13.3863 15.6287L14.6055 13.773C14.8296 13.4753 15.1603 13.2758 15.5282 13.2164C15.8961 13.157 16.2727 13.2422 16.5792 13.4543C17.9299 14.3893 19.5063 15.4309 20.6602 16.9084C20.8153 17.108 20.914 17.3456 20.946 17.5964C20.9779 17.8471 20.9418 18.1019 20.8416 18.334C20.0381 20.2089 18.0048 21.8053 15.8899 21.7276Z"
                  fill="#C8945B"
                />
              </svg>
              <h6 className="text-white md:text-[0.6rem] lg:text-base 2xl:text-lg min-[1700px]:text-xl min-[1800px]:text-2xl">Contact Me</h6>
            </div>
          </div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            onClick={munculBarMenuMobileTablet}
            className="order-2 w-10 cursor-pointer hover:opacity-60 md:order-1 lg:hidden" 
            viewBox="0 0 40 41" 
            fill="none"
          >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.928 37.1235C5.86 40.0515 10.572 40.0515 20 40.0515C29.428 40.0515 34.142 40.0515 37.07 37.1215C40 34.1955 40 29.4795 40 20.0515C40 10.6235 40 5.90951 37.07 2.97951C34.144 0.0515137 29.428 0.0515137 20 0.0515137C10.572 0.0515137 5.858 0.0515137 2.928 2.97951C0 5.91151 0 10.6235 0 20.0515C0 29.4795 0 34.1955 2.928 37.1235ZM33.5 28.0515C33.5 28.4493 33.342 28.8309 33.0607 29.1122C32.7794 29.3935 32.3978 29.5515 32 29.5515H8C7.60218 29.5515 7.22064 29.3935 6.93934 29.1122C6.65804 28.8309 6.5 28.4493 6.5 28.0515C6.5 27.6537 6.65804 27.2722 6.93934 26.9909C7.22064 26.7095 7.60218 26.5515 8 26.5515H32C32.3978 26.5515 32.7794 26.7095 33.0607 26.9909C33.342 27.2722 33.5 27.6537 33.5 28.0515ZM32 21.5515C32.3978 21.5515 32.7794 21.3935 33.0607 21.1122C33.342 20.8309 33.5 20.4493 33.5 20.0515C33.5 19.6537 33.342 19.2722 33.0607 18.9909C32.7794 18.7095 32.3978 18.5515 32 18.5515H8C7.60218 18.5515 7.22064 18.7095 6.93934 18.9909C6.65804 19.2722 6.5 19.6537 6.5 20.0515C6.5 20.4493 6.65804 20.8309 6.93934 21.1122C7.22064 21.3935 7.60218 21.5515 8 21.5515H32ZM33.5 12.0515C33.5 12.4493 33.342 12.8309 33.0607 13.1122C32.7794 13.3935 32.3978 13.5515 32 13.5515H8C7.60218 13.5515 7.22064 13.3935 6.93934 13.1122C6.65804 12.8309 6.5 12.4493 6.5 12.0515C6.5 11.6537 6.65804 11.2722 6.93934 10.9909C7.22064 10.7095 7.60218 10.5515 8 10.5515H32C32.3978 10.5515 32.7794 10.7095 33.0607 10.9909C33.342 11.2722 33.5 11.6537 33.5 12.0515Z" fill="#5C4534"/>
          </svg>
        </div>
      </Fade>
      <Fade 
        in={mobiletabletNav}
        timeout={600}
        easing="ease-in-out">
          <div 
                aria-label="navbar-brown-mobile-tablet" 
                className="NavMobileTablet md:px-16 md:pt-10 md:pb-28"
          >
              <div aria-label='navbar-logo' className='flex flex-row justify-between items-center'>
                    <img className='w-16 md:w-24' src={imageLogoDivaMobile} alt="" />
                    <svg 
                          xmlns="http://www.w3.org/2000/svg"
                          className='w-8 cursor-pointer hover:opacity-60 md:w-11' 
                          viewBox="0 0 33 33" 
                          fill="none"
                          onClick={removeBarMenuMobileTablet}
                    >
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2498 0.5C28.6722 0.5 32.3154 4.3048 32.3154 9.9656V23.0344C32.3154 28.6952 28.6722 32.5 23.2482 32.5H9.37943C3.95703 32.5 0.31543 28.6952 0.31543 23.0344V9.9656C0.31543 4.3048 3.95703 0.5 9.37943 0.5H23.2498ZM23.2498 2.9H9.37943C5.33143 2.9 2.71543 5.6728 2.71543 9.9656V23.0344C2.71543 27.3272 5.33143 30.1 9.37943 30.1H23.2482C27.2978 30.1 29.9154 27.3272 29.9154 23.0344V9.9656C29.9154 5.6728 27.2978 2.9 23.2498 2.9ZM13.3242 11.8002L16.3122 14.788L19.2986 11.8035C19.7674 11.3347 20.5258 11.3347 20.9946 11.8035C21.4634 12.2723 21.4634 13.0307 20.9946 13.4995L18.0082 16.484L20.9978 19.4754C21.4666 19.9442 21.4666 20.7026 20.9978 21.1714C20.7642 21.4066 20.4554 21.5234 20.1498 21.5234C19.8426 21.5234 19.5354 21.4066 19.3018 21.1714L16.3122 18.18L13.3274 21.1667C13.0938 21.4019 12.7866 21.5187 12.4794 21.5187C12.1722 21.5187 11.865 21.4019 11.6314 21.1667C11.1626 20.6979 11.1626 19.9395 11.6314 19.4707L14.6162 16.484L11.6282 13.4962C11.1594 13.0274 11.1594 12.269 11.6282 11.8002C12.0986 11.3314 12.857 11.3314 13.3242 11.8002Z" fill="#F5ECCB"/>
                    </svg>
              </div>
              <div aria-label='nav-list' className='flex flex-col gap-6 mt-12 uppercase cursor-pointer'>
                    <div className='group border-b-[0.2px] border-opacity-50 border-[#F5ECCB] pb-4 hover:border-orange-100'>
                          <p className='font-bold text-xs text-[#886B56] group-hover:text-[#F5ECCB] md:text-base'>Home</p>
                    </div>
                    <div className='group border-b-[0.2px] border-opacity-50 border-[#F5ECCB] pb-4 hover:border-orange-100'>
                          <p className='font-bold text-xs text-[#886B56] group-hover:text-[#F5ECCB] md:text-base'>About</p>
                    </div>
                    <div className='group border-b-[0.2px] border-opacity-50 border-[#F5ECCB] pb-4 hover:border-orange-100'>
                          <p className='font-bold text-xs text-[#886B56] group-hover:text-[#F5ECCB] md:text-base'>Services</p>
                    </div>
                    <div className='group border-b-[0.2px] border-opacity-50 border-[#F5ECCB] pb-4 hover:border-orange-100'>
                          <p className='font-bold text-xs text-[#886B56] group-hover:text-[#F5ECCB] md:text-base'>Portfolio</p>
                    </div>
                    <div className='group border-b-[0.2px] border-opacity-50 border-[#F5ECCB] pb-4 hover:border-orange-100'>
                          <p className='font-bold text-xs text-[#886B56] group-hover:text-[#F5ECCB] md:text-base'>CV Download</p>
                    </div>
              </div>
              <button className='flex flex-row gap-4 mt-14 border-[1px] py-4 px-5 rounded-md items-center justify-center border-[#F5ECCB] hover:opacity-60 md:w-full'>
                    <p className='text-[#F5ECCB] font-medium md:text-base'>Contact Me</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-4' viewBox="0 0 17 17" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1144 16.2179C10.9606 16.1754 7.69099 15.7235 4.2667 12.3001C0.843211 8.87577 0.392141 5.60691 0.348877 4.4524C0.284781 2.69298 1.63238 0.984044 3.1891 0.316652C3.37656 0.235706 3.58184 0.204887 3.78481 0.22722C3.98777 0.249553 4.18144 0.324271 4.34682 0.444042C5.62872 1.37823 6.51324 2.79153 7.27276 3.90278C7.43988 4.14693 7.51133 4.44402 7.47351 4.73746C7.43568 5.03089 7.29123 5.30016 7.06766 5.49395L5.50454 6.65487C5.42902 6.7094 5.37586 6.78949 5.35494 6.88026C5.33401 6.97103 5.34674 7.06631 5.39077 7.1484C5.74489 7.79176 6.37463 8.74998 7.0957 9.47105C7.81757 10.1921 8.82066 10.8635 9.50889 11.2577C9.59518 11.3061 9.69675 11.3197 9.79271 11.2955C9.88868 11.2714 9.97175 11.2114 10.0249 11.1279L11.0424 9.57922C11.2294 9.33072 11.5054 9.16425 11.8125 9.11467C12.1195 9.06509 12.4338 9.13624 12.6896 9.31322C13.8169 10.0936 15.1324 10.9629 16.0955 12.1959C16.225 12.3625 16.3073 12.5608 16.334 12.7701C16.3606 12.9794 16.3305 13.192 16.2469 13.3857C15.5763 14.9504 13.8794 16.2828 12.1144 16.2179Z" fill="#F5ECCB"/>
                    </svg>
              </button>
          </div>
      </Fade>
    </>
  )
}