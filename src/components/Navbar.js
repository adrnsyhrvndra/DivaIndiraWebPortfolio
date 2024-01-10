import * as React from "react";
import logoweb from "../img/diva-logoweb.png";


export const Navbar = () => {
  return (
    <div
      aria-label="navbar"
      className="bg-bg-web flex justify-between flex-row items-center xl:pt-6 xl:pb-8 border-b-[2px] xl:px-14"
    >
      <img src={logoweb} alt="logo-web-diva" />
      <div className="flex flex-row items-center xl:gap-[4.5rem]">
        <div aria-label="nav-menu">
          <ul className="list-none flex flex-row text-slate-400 items-center xl:gap-16">
            <li className="font-bold bg-cream-web text-coklat-home tracking-wider xl:px-4 xl:py-1 xl:text-base">
              Home
            </li>
            <li className="font-normal tracking-wider xl:text-base">About</li>
            <li className="font-normal tracking-wider xl:text-base">Services</li>
            <li className="font-normal tracking-wider xl:text-base">Portfolio</li>
            <li className="font-normal tracking-wider xl:text-base">
              CV Download
            </li>
          </ul>
        </div>
        <div
          aria-label="button-contact-me"
          className="flex flex-row items-center rounded-full bg-coklat-web xl:gap-2 xl:px-6 xl:py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
          <h6 className="text-white">Contact Me</h6>
        </div>
      </div>
    </div>
  )
}