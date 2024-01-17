import * as React from "react";
import logoweb from "../img/diva-logoweb.png";


export const Navbar = () => {
  return (
    <div
      aria-label="navbar"
      className="bg-bg-web flex justify-between flex-row items-center border-b-[2px] pt-6 pb-6 px-5 md:pt-4 md:pb-4 md:px-16 lg:pt-6 lg:pb-8 lg:px-14 xl:pt-6 xl:pb-8 xl:px-14"
    >
      <img className="order-1 md:order-2 md:w-24 lg:order-1 w-28 lg:w-36 xl:w-44 2xl:w-64" src={logoweb} alt="logo-web-diva" />
      <div className="hidden flex-row items-center md:order-3 md:flex lg:order-2 lg:gap-[2.2rem] xl:gap-[4.5rem] min-[1400px]:gap-[4.8rem]">
        <div aria-label="nav-menu" className="hidden lg:block">
          <ul className="list-none flex flex-row text-slate-400 items-center lg:gap-8 min-[1110px]:gap-12 xl:gap-16 min-[1400px]:gap-20 min-[1500px]:gap-24 2xl:gap-20 min-[1600px]:gap-[5.5rem] min-[1700px]:gap-[6.5rem] min-[1800px]:gap-[7.5rem]">
            <li className="font-bold bg-cream-web text-coklat-home tracking-wider lg:px-4 lg:py-1 lg:text-base xl:px-4 xl:py-1 xl:text-base 2xl:text-lg min-[1700px]:text-xl min-[1800px]:text-2xl">
              Home
            </li>
            <li className="font-normal tracking-wider lg:text-sm xl:text-base 2xl:text-lg min-[1700px]:text-xl min-[1800px]:text-2xl">About</li>
            <li className="font-normal tracking-wider lg:text-sm xl:text-base 2xl:text-lg min-[1700px]:text-xl min-[1800px]:text-2xl">Services</li>
            <li className="font-normal tracking-wider lg:text-sm xl:text-base 2xl:text-lg min-[1700px]:text-xl min-[1800px]:text-2xl">Portfolio</li>
            <li className="font-normal tracking-wider lg:text-sm xl:text-base 2xl:text-lg min-[1700px]:text-xl min-[1800px]:text-2xl">
              CV Download
            </li>
          </ul>
        </div>
        <div
          aria-label="button-contact-me"
          className="hidden md:flex flex-row items-center rounded-full bg-coklat-web md:gap-1 md:py-2 md:px-4 lg:gap-2 lg:px-6 lg:py-2 xl:gap-2 xl:px-6 xl:py-2"
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
      <svg xmlns="http://www.w3.org/2000/svg" className="order-2 w-10 md:order-1 lg:hidden" viewBox="0 0 40 41" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.928 37.1235C5.86 40.0515 10.572 40.0515 20 40.0515C29.428 40.0515 34.142 40.0515 37.07 37.1215C40 34.1955 40 29.4795 40 20.0515C40 10.6235 40 5.90951 37.07 2.97951C34.144 0.0515137 29.428 0.0515137 20 0.0515137C10.572 0.0515137 5.858 0.0515137 2.928 2.97951C0 5.91151 0 10.6235 0 20.0515C0 29.4795 0 34.1955 2.928 37.1235ZM33.5 28.0515C33.5 28.4493 33.342 28.8309 33.0607 29.1122C32.7794 29.3935 32.3978 29.5515 32 29.5515H8C7.60218 29.5515 7.22064 29.3935 6.93934 29.1122C6.65804 28.8309 6.5 28.4493 6.5 28.0515C6.5 27.6537 6.65804 27.2722 6.93934 26.9909C7.22064 26.7095 7.60218 26.5515 8 26.5515H32C32.3978 26.5515 32.7794 26.7095 33.0607 26.9909C33.342 27.2722 33.5 27.6537 33.5 28.0515ZM32 21.5515C32.3978 21.5515 32.7794 21.3935 33.0607 21.1122C33.342 20.8309 33.5 20.4493 33.5 20.0515C33.5 19.6537 33.342 19.2722 33.0607 18.9909C32.7794 18.7095 32.3978 18.5515 32 18.5515H8C7.60218 18.5515 7.22064 18.7095 6.93934 18.9909C6.65804 19.2722 6.5 19.6537 6.5 20.0515C6.5 20.4493 6.65804 20.8309 6.93934 21.1122C7.22064 21.3935 7.60218 21.5515 8 21.5515H32ZM33.5 12.0515C33.5 12.4493 33.342 12.8309 33.0607 13.1122C32.7794 13.3935 32.3978 13.5515 32 13.5515H8C7.60218 13.5515 7.22064 13.3935 6.93934 13.1122C6.65804 12.8309 6.5 12.4493 6.5 12.0515C6.5 11.6537 6.65804 11.2722 6.93934 10.9909C7.22064 10.7095 7.60218 10.5515 8 10.5515H32C32.3978 10.5515 32.7794 10.7095 33.0607 10.9909C33.342 11.2722 33.5 11.6537 33.5 12.0515Z" fill="#5C4534"/>
      </svg>
    </div>
  )
}