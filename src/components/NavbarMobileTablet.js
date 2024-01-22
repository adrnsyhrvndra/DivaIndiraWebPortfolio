import React from 'react';
import { Fade } from "@material-ui/core";

function NavbarMobileTablet(tangkapProps) {
      let imageLogoDivaMobile = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705918636/divaWebPortfolio/reduceResolution/Group_9268_pxffrj.png";

      console.log(tangkapProps.diklikkah);

      return (
            <Fade  in={tangkapProps.diklikkah} timeout={600} easing="ease-in-out">
                  <div 
                        aria-label="navbar-brown-mobile-tablet" 
                        className={ 
                              tangkapProps.diklikkah ? 'hiddenNavMobileTablet' :          
                              'hidden hiddenNavMobileTablet'
                        }
                  >
                        <div aria-label='navbar-logo' className='flex flex-row justify-between items-center'>
                              <img className='w-16' src={imageLogoDivaMobile} alt="" />
                              <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className='w-8 cursor-pointer hover:opacity-60' 
                                    viewBox="0 0 33 33" 
                                    fill="none"
                                    onClick={!tangkapProps.diklikkah}
                              >
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2498 0.5C28.6722 0.5 32.3154 4.3048 32.3154 9.9656V23.0344C32.3154 28.6952 28.6722 32.5 23.2482 32.5H9.37943C3.95703 32.5 0.31543 28.6952 0.31543 23.0344V9.9656C0.31543 4.3048 3.95703 0.5 9.37943 0.5H23.2498ZM23.2498 2.9H9.37943C5.33143 2.9 2.71543 5.6728 2.71543 9.9656V23.0344C2.71543 27.3272 5.33143 30.1 9.37943 30.1H23.2482C27.2978 30.1 29.9154 27.3272 29.9154 23.0344V9.9656C29.9154 5.6728 27.2978 2.9 23.2498 2.9ZM13.3242 11.8002L16.3122 14.788L19.2986 11.8035C19.7674 11.3347 20.5258 11.3347 20.9946 11.8035C21.4634 12.2723 21.4634 13.0307 20.9946 13.4995L18.0082 16.484L20.9978 19.4754C21.4666 19.9442 21.4666 20.7026 20.9978 21.1714C20.7642 21.4066 20.4554 21.5234 20.1498 21.5234C19.8426 21.5234 19.5354 21.4066 19.3018 21.1714L16.3122 18.18L13.3274 21.1667C13.0938 21.4019 12.7866 21.5187 12.4794 21.5187C12.1722 21.5187 11.865 21.4019 11.6314 21.1667C11.1626 20.6979 11.1626 19.9395 11.6314 19.4707L14.6162 16.484L11.6282 13.4962C11.1594 13.0274 11.1594 12.269 11.6282 11.8002C12.0986 11.3314 12.857 11.3314 13.3242 11.8002Z" fill="#F5ECCB"/>
                              </svg>
                        </div>
                        <div aria-label='nav-list' className='flex flex-col gap-6 mt-12 uppercase cursor-pointer'>
                              <div className='group border-b-[0.2px] border-opacity-50 border-[#F5ECCB] pb-4 hover:border-orange-100'>
                                    <p className='font-bold text-xs text-[#886B56] group-hover:text-[#F5ECCB]'>Home</p>
                              </div>
                              <div className='group border-b-[0.2px] border-opacity-50 border-[#F5ECCB] pb-4 hover:border-orange-100'>
                                    <p className='font-bold text-xs text-[#886B56] group-hover:text-[#F5ECCB]'>About</p>
                              </div>
                              <div className='group border-b-[0.2px] border-opacity-50 border-[#F5ECCB] pb-4 hover:border-orange-100'>
                                    <p className='font-bold text-xs text-[#886B56] group-hover:text-[#F5ECCB]'>Services</p>
                              </div>
                              <div className='group border-b-[0.2px] border-opacity-50 border-[#F5ECCB] pb-4 hover:border-orange-100'>
                                    <p className='font-bold text-xs text-[#886B56] group-hover:text-[#F5ECCB]'>Portfolio</p>
                              </div>
                              <div className='group border-b-[0.2px] border-opacity-50 border-[#F5ECCB] pb-4 hover:border-orange-100'>
                                    <p className='font-bold text-xs text-[#886B56] group-hover:text-[#F5ECCB]'>CV Download</p>
                              </div>
                        </div>
                        <button className='flex flex-row gap-4 mt-14 border-[1px] py-4 px-5 rounded-md items-center justify-center border-[#F5ECCB] hover:opacity-60'>
                              <p className='text-[#F5ECCB] font-medium'>Contact Me</p>
                              <svg xmlns="http://www.w3.org/2000/svg" className='w-4' viewBox="0 0 17 17" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1144 16.2179C10.9606 16.1754 7.69099 15.7235 4.2667 12.3001C0.843211 8.87577 0.392141 5.60691 0.348877 4.4524C0.284781 2.69298 1.63238 0.984044 3.1891 0.316652C3.37656 0.235706 3.58184 0.204887 3.78481 0.22722C3.98777 0.249553 4.18144 0.324271 4.34682 0.444042C5.62872 1.37823 6.51324 2.79153 7.27276 3.90278C7.43988 4.14693 7.51133 4.44402 7.47351 4.73746C7.43568 5.03089 7.29123 5.30016 7.06766 5.49395L5.50454 6.65487C5.42902 6.7094 5.37586 6.78949 5.35494 6.88026C5.33401 6.97103 5.34674 7.06631 5.39077 7.1484C5.74489 7.79176 6.37463 8.74998 7.0957 9.47105C7.81757 10.1921 8.82066 10.8635 9.50889 11.2577C9.59518 11.3061 9.69675 11.3197 9.79271 11.2955C9.88868 11.2714 9.97175 11.2114 10.0249 11.1279L11.0424 9.57922C11.2294 9.33072 11.5054 9.16425 11.8125 9.11467C12.1195 9.06509 12.4338 9.13624 12.6896 9.31322C13.8169 10.0936 15.1324 10.9629 16.0955 12.1959C16.225 12.3625 16.3073 12.5608 16.334 12.7701C16.3606 12.9794 16.3305 13.192 16.2469 13.3857C15.5763 14.9504 13.8794 16.2828 12.1144 16.2179Z" fill="#F5ECCB"/>
                              </svg>
                        </button>
                  </div>
            </Fade>
      )
}

export default NavbarMobileTablet;