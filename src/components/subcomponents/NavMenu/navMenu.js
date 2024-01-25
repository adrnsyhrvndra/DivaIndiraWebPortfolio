import * as React from "react";


export const NavMenuUl = () => {
  return (
      <div aria-label="nav-menu" className="hidden lg:block">
            <ul className="list-none flex flex-row text-slate-400 items-center lg:gap-0 min-[1110px]:gap-[1.6rem] xl:gap-7 min-[1400px]:gap-10 min-[1500px]:gap-14 min-[1600px]:gap-[4.6rem] min-[1700px]:gap-[5.3rem]">
                  <a href="#home">
                        <li id="liNavs" className="default-nav hover:active-nav">Home</li>
                  </a>
                  <a href="#about">
                        <li id="liNavs" className="default-nav hover:active-nav">About</li>
                  </a>
                  <a href="#experience">
                        <li id="liNavs" className="default-nav hover:active-nav">Experience</li>
                  </a>
                  <a href="#skill">
                        <li id="liNavs" className="default-nav hover:active-nav">Skills</li>
                  </a>
                  <a href="#cv">
                        <li id="liNavs" className="default-nav hover:active-nav">CV Download</li>
                  </a>
            </ul>
      </div>
  )

}