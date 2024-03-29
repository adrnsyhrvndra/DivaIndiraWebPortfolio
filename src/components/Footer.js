import * as React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export const Footer = () => {
      let logoWebs = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705578132/divaWebPortfolio/logoWebs/logoDivaWebs_hbzvel.png";
      let arrowIcon = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1706165819/divaWebPortfolio/arrow-circle-down.9_1_nic3in.png";
      let date = new Date().getFullYear();

      return (
                  <>
                        <div aria-label="top-footer-logo" className="bg-coklat-footer1-web mt-16 py-11 md:py-16 xl:mt-44 xl:py-32">
                              <div className="flex flex-col justify-center items-center gap-8 md:flex-row md:gap-16 xl:gap-36">
                                    <div className="flex flex-row order-2 gap-2 justify-center items-center md:order-1 lg:gap-3">
                                          <a href="https://www.linkedin.com/in/diva-indira-asauri-a0b4482a5/" target="_blank" rel="noreferrer">
                                                <div aria-label="linkedin" className="rounded-full p-3 bg-cream-web transition-all scale-100 hover:scale-110 cursor-pointer xl:p-4">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 lg:w-5 xl:w-7" viewBox="0 0 28 28" fill="none">
                                                            <path d="M22.127 3.51465C22.7374 3.51465 23.3228 3.75714 23.7545 4.18877C24.1861 4.6204 24.4286 5.20582 24.4286 5.81624V21.9273C24.4286 22.5378 24.1861 23.1232 23.7545 23.5548C23.3228 23.9864 22.7374 24.2289 22.127 24.2289H6.01588C5.40546 24.2289 4.82004 23.9864 4.38841 23.5548C3.95678 23.1232 3.71429 22.5378 3.71429 21.9273V5.81624C3.71429 5.20582 3.95678 4.6204 4.38841 4.18877C4.82004 3.75714 5.40546 3.51465 6.01588 3.51465H22.127ZM21.5516 21.3519V15.2527C21.5516 14.2578 21.1563 13.3035 20.4528 12.6C19.7492 11.8964 18.795 11.5012 17.8 11.5012C16.8218 11.5012 15.6825 12.0996 15.1302 12.9972V11.7198H11.9195V21.3519H15.1302V15.6785C15.1302 14.7924 15.8437 14.0674 16.7298 14.0674C17.1571 14.0674 17.5669 14.2372 17.869 14.5393C18.1711 14.8415 18.3409 15.2512 18.3409 15.6785V21.3519H21.5516ZM8.17937 9.91306C8.69213 9.91306 9.18388 9.70937 9.54645 9.3468C9.90902 8.98423 10.1127 8.49248 10.1127 7.97973C10.1127 6.90949 9.24961 6.03489 8.17937 6.03489C7.66357 6.03489 7.16889 6.23979 6.80416 6.60452C6.43943 6.96925 6.23453 7.46392 6.23453 7.97973C6.23453 9.04997 7.10914 9.91306 8.17937 9.91306ZM9.77898 21.3519V11.7198H6.59128V21.3519H9.77898Z" fill="#17120E"/>
                                                      </svg>
                                                </div>
                                          </a>
                                          <a href="https://www.instagram.com/divaindiraas/" target="_blank" rel="noreferrer">
                                                <div aria-label="instagram" className="rounded-full p-3 bg-cream-web transition-all scale-100 hover:scale-110 cursor-pointer xl:p-4">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 lg:w-5 xl:w-7" viewBox="0 0 28 28" fill="none">
                                                            <path d="M23.6905 1.44336H4.35718C2.83813 1.44336 1.59528 2.68622 1.59528 4.20526V23.5386C1.59528 25.059 2.83813 26.3005 4.35718 26.3005H23.6905C25.2096 26.3005 26.4524 25.059 26.4524 23.5386V4.20526C26.4524 2.68622 25.2096 1.44336 23.6905 1.44336ZM14.0018 21.4989C16.0302 21.4986 17.9754 20.6925 19.4096 19.2581C20.8438 17.8236 21.6495 15.8783 21.6495 13.8498C21.6495 13.3831 21.5901 12.9329 21.5072 12.491H23.6905V22.4559C23.6905 22.5814 23.6657 22.7057 23.6176 22.8215C23.5694 22.9374 23.4989 23.0426 23.41 23.1312C23.321 23.2197 23.2155 23.2898 23.0994 23.3374C22.9833 23.3851 22.859 23.4093 22.7335 23.4088H5.31418C5.1887 23.4093 5.06435 23.3851 4.94827 23.3374C4.83218 23.2898 4.72665 23.2197 4.63773 23.1312C4.54881 23.0426 4.47825 22.9374 4.43011 22.8215C4.38196 22.7057 4.35718 22.5814 4.35718 22.4559V12.491H6.49628C6.41204 12.9329 6.35266 13.3831 6.35266 13.8498C6.35302 15.8784 7.15903 17.8238 8.59343 19.2582C10.0278 20.6926 11.9732 21.4986 14.0018 21.4989ZM9.22228 13.8498C9.22228 13.2222 9.3459 12.6007 9.58609 12.0208C9.82628 11.4409 10.1783 10.9141 10.6222 10.4702C11.066 10.0264 11.5929 9.67437 12.1727 9.43418C12.7526 9.19398 13.3741 9.07036 14.0018 9.07036C14.6294 9.07036 15.2509 9.19398 15.8308 9.43418C16.4107 9.67437 16.9375 10.0264 17.3814 10.4702C17.8252 10.9141 18.1772 11.4409 18.4174 12.0208C18.6576 12.6007 18.7812 13.2222 18.7812 13.8498C18.7812 15.1174 18.2777 16.3331 17.3814 17.2294C16.485 18.1258 15.2693 18.6293 14.0018 18.6293C12.7342 18.6293 11.5185 18.1258 10.6222 17.2294C9.72583 16.3331 9.22228 15.1174 9.22228 13.8498ZM22.7335 8.34812H20.5033C20.2501 8.34739 20.0074 8.24648 19.8284 8.06742C19.6493 7.88837 19.5484 7.64572 19.5477 7.3925V5.1595C19.5477 4.63198 19.9758 4.20526 20.5019 4.20526H22.7321C23.2624 4.20526 23.6905 4.63198 23.6905 5.1595V7.39112C23.6905 7.91726 23.2624 8.34812 22.7335 8.34812Z" fill="#17120E"/>
                                                      </svg>
                                                </div>
                                          </a>
                                          <a href="mailto:divaindira66@gmail.com" target="_blank" rel="noreferrer">
                                                <div aria-label="gmail" className="rounded-full p-3 bg-cream-web transition-all scale-100 hover:scale-110 cursor-pointer xl:p-4">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 lg:w-5 xl:w-7" viewBox="0 0 32 32" fill="none">
                                                            <path d="M26.3334 23.6401H23.7441V12.312L15.9762 17.1669L8.20836 12.312V23.6401H5.61907V8.10442H7.17264L15.9762 13.6067L24.7798 8.10442H26.3334M26.3334 5.51514H5.61907C4.18202 5.51514 3.02979 6.66737 3.02979 8.10442V23.6401C3.02979 24.3269 3.30258 24.9855 3.78817 25.471C4.27375 25.9566 4.93235 26.2294 5.61907 26.2294H26.3334C27.0201 26.2294 27.6787 25.9566 28.1643 25.471C28.6498 24.9855 28.9226 24.3269 28.9226 23.6401V8.10442C28.9226 7.4177 28.6498 6.75911 28.1643 6.27352C27.6787 5.78794 27.0201 5.51514 26.3334 5.51514Z" fill="#17120E"/>
                                                      </svg>
                                                </div>
                                          </a>
                                          <a href="https://wa.link/82x108" target="_blank" rel="noreferrer">
                                                <div aria-label="whatsapp" className="rounded-full p-3 bg-cream-web transition-all scale-100 hover:scale-110 cursor-pointer xl:p-4">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 lg:w-5 xl:w-7" viewBox="0 0 32 32" fill="none">
                                                            <path d="M28.875 8.81641C28.8605 8.25786 28.8172 7.70043 28.7455 7.14632C28.6489 6.66099 28.4878 6.19075 28.2665 5.7481C28.0351 5.26793 27.7244 4.83024 27.3473 4.45346C26.9668 4.08087 26.5299 3.77065 26.0527 3.53426C25.6094 3.31734 25.1392 3.1606 24.6545 3.06819C24.1056 2.98598 23.5521 2.93842 22.9973 2.92578H8.87277C8.31423 2.94033 7.7568 2.98354 7.20268 3.05525C6.71735 3.15191 6.24712 3.31301 5.80447 3.53426C5.32429 3.76566 4.8866 4.07642 4.50983 4.45346C4.13723 4.83397 3.82702 5.27089 3.59063 5.7481C3.3737 6.19134 3.21696 6.66157 3.12456 7.14632C3.04235 7.69516 2.99478 8.24864 2.98215 8.80346V22.928C2.99669 23.4866 3.03991 24.044 3.11161 24.5981C3.20828 25.0834 3.36938 25.5537 3.59063 25.9963C3.82203 26.4765 4.13279 26.9142 4.50983 27.291C4.89033 27.6636 5.32726 27.9738 5.80447 28.2102C6.24771 28.4271 6.71794 28.5838 7.20268 28.6762C7.75153 28.7584 8.305 28.806 8.85983 28.8186H22.9844C23.5429 28.8041 24.1004 28.7609 24.6545 28.6892C25.1398 28.5925 25.61 28.4314 26.0527 28.2102C26.5329 27.9788 26.9705 27.668 27.3473 27.291C27.7199 26.9104 28.0301 26.4735 28.2665 25.9963C28.4834 25.5531 28.6402 25.0828 28.7326 24.5981C28.8148 24.0493 28.8624 23.4958 28.875 22.941V9.50257V8.81641ZM16.2263 24.9347C14.6716 24.927 13.144 24.5262 11.7857 23.7695L6.86608 25.0642L8.16072 20.2481C7.32582 18.8453 6.879 17.2457 6.86608 15.6133C6.87123 13.7787 7.41915 11.9866 8.44083 10.4628C9.4625 8.93901 10.9122 7.7516 12.6075 7.05015C14.3027 6.34869 16.1676 6.16455 17.9672 6.52092C19.7669 6.8773 21.4209 7.75824 22.7208 9.05281C24.0208 10.3474 24.9086 11.9977 25.2725 13.7958C25.6363 15.594 25.4599 17.4596 24.7655 19.1578C24.0711 20.8559 22.8898 22.3106 21.3702 23.3386C19.8507 24.3666 18.0609 24.9219 16.2263 24.9347ZM16.2263 7.93605C14.8538 7.95176 13.5099 8.33089 12.3315 9.03486C11.1531 9.73883 10.1823 10.7425 9.51789 11.9436C8.8535 13.1448 8.51927 14.5006 8.54922 15.8729C8.57917 17.2452 8.97224 18.5851 9.6884 19.7561L9.86965 20.0539L9.09286 22.8892L12.0446 22.0865L12.3295 22.2548C13.507 22.9484 14.8468 23.3191 16.2134 23.3294C18.2736 23.3294 20.2493 22.511 21.7061 21.0542C23.1629 19.5974 23.9813 17.6217 23.9813 15.5615C23.9813 13.5013 23.1629 11.5255 21.7061 10.0688C20.2493 8.61203 18.2736 7.79364 16.2134 7.79364L16.2263 7.93605ZM20.7576 18.9664C20.588 19.2492 20.361 19.4933 20.0911 19.6829C19.8213 19.8725 19.5147 20.0033 19.1911 20.0669C18.7076 20.1552 18.2098 20.1241 17.7411 19.9762C17.3001 19.8383 16.8677 19.6741 16.4464 19.4843C14.8459 18.6811 13.481 17.4768 12.4848 15.9887C11.9435 15.2993 11.6151 14.4669 11.5397 13.5936C11.532 13.2309 11.6007 12.8705 11.7412 12.536C11.8817 12.2014 12.0909 11.9001 12.3554 11.6517C12.4333 11.5634 12.5288 11.4924 12.6359 11.4433C12.7429 11.3943 12.859 11.3682 12.9768 11.3669H13.3393C13.4817 11.3669 13.6759 11.3669 13.8571 11.7682C14.0384 12.1695 14.5174 13.3735 14.5821 13.4901C14.614 13.5522 14.6305 13.621 14.6305 13.6907C14.6305 13.7605 14.614 13.8293 14.5821 13.8914C14.5249 14.0321 14.4463 14.1631 14.3491 14.2798C14.2326 14.4222 14.1031 14.5905 13.9996 14.6941C13.896 14.7977 13.7665 14.9271 13.896 15.1602C14.2482 15.7546 14.6843 16.2953 15.1906 16.7655C15.7421 17.2528 16.3725 17.6424 17.0549 17.9177C17.288 18.0343 17.4304 18.0213 17.5598 17.9177C17.6893 17.8142 18.1424 17.2445 18.2978 17.0115C18.4531 16.7785 18.6085 16.8173 18.8156 16.895C19.0228 16.9727 20.175 17.5294 20.408 17.6459C20.6411 17.7624 20.7835 17.8142 20.8482 17.9177C20.9044 18.2566 20.8732 18.6041 20.7576 18.9276V18.9664Z" fill="#17120E"/>
                                                      </svg>
                                                </div>
                                          </a>
                                    </div>
                                    <img className="w-[10rem] order-1 md:order-2 md:w-[12rem] xl:w-[20rem]" src={logoWebs} alt="" />
                                    <a className="md:order-3" href="https://www.linkedin.com/in/diva-indira-asauri-a0b4482a5/" target="_blank" rel="noreferrer">
                                          <button className="flex-row items-center gap-3 border-2 border-[#5C4534] hidden hover:bg-coklat-home md:flex md:p-6 md:rounded-[0.4rem] xl:rounded-[0.6rem] xl:p-6">
                                                <span className="text-white">View’s Linkedin</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                                      <path d="M20.4211 0.921955H2.38278C1.97351 0.91779 1.57929 1.07616 1.28664 1.3623C0.993992 1.64845 0.826809 2.039 0.821777 2.44827V20.5594C0.827719 20.9681 0.995302 21.3577 1.28785 21.6431C1.5804 21.9285 1.9741 22.0864 2.38278 22.0822H20.4211C20.8304 22.0855 21.2243 21.9266 21.5168 21.6403C21.8093 21.3539 21.9766 20.9635 21.9821 20.5542V2.44307C21.9748 2.035 21.8067 1.64631 21.5144 1.36147C21.2221 1.07664 20.8292 0.918691 20.4211 0.921955ZM7.09528 18.9602H3.95419V8.85359H7.09528V18.9602ZM5.53428 7.47644C5.17401 7.47678 4.82173 7.37027 4.52202 7.17036C4.2223 6.97046 3.9886 6.68615 3.8505 6.3534C3.71239 6.02066 3.67608 5.65443 3.74615 5.30104C3.81623 4.94765 3.98954 4.62299 4.24417 4.36812C4.49879 4.11325 4.82329 3.93963 5.17661 3.86922C5.52993 3.79881 5.8962 3.83477 6.22907 3.97256C6.56195 4.11035 6.84648 4.34377 7.04667 4.6433C7.24686 4.94283 7.35372 5.295 7.35372 5.65527C7.35326 5.89472 7.30559 6.13173 7.21343 6.35274C7.12127 6.57375 6.98643 6.77441 6.81663 6.94325C6.64683 7.11208 6.4454 7.24577 6.22387 7.33667C6.00234 7.42757 5.76506 7.47389 5.52561 7.47297L5.53428 7.47644ZM18.8601 18.9602H15.719V14.0431C15.719 12.8723 15.6982 11.3651 14.0869 11.3651C12.4755 11.3651 12.2015 12.6416 12.2015 13.9668V18.9602H9.06562V8.85359H12.0766V10.2412H12.1182C12.538 9.44678 13.5613 8.60904 15.0894 8.60904C18.2703 8.6021 18.8601 10.6956 18.8601 13.41V18.9602Z" fill="white"/>
                                                </svg>
                                          </button>
                                    </a>
                              </div>
                        </div>
                        <div aria-label="mid-footer" className="bg-coklat-skill-web py-10 xl:-mt-1 xl:py-16">
                              <div aria-label="tablet-desktop" className="flex-col justify-start px-4 gap-12 hidden md:flex md:px-0 md:justify-center md:flex-row xl:gap-[5.5rem] 2xl:gap-[7rem]">
                                    <div className="flex flex-row justify-between text-start text-white md:items-center md:flex-col md:justify-center xl:gap-[0.4rem]">
                                          <h2 className="font-bold min-[600px]:text-[1.2rem] xl:text-[2.1rem] 2xl:text-[2.3rem]">Contact Number.</h2>
                                          <h6 className="font-normal hidden md:block xl:text-[1.3rem] 2xl:text-[1.5rem]">+62 882-2453-8786</h6>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:hidden" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#E1B171"/>
                                                <path d="M12.0002 15.0099C11.8102 15.0099 11.6202 14.9399 11.4702 14.7899L7.94016 11.2599C7.65016 10.9699 7.65016 10.4899 7.94016 10.1999C8.23016 9.90993 8.71016 9.90993 9.00016 10.1999L12.0002 13.1999L15.0002 10.1999C15.2902 9.90993 15.7702 9.90993 16.0602 10.1999C16.3502 10.4899 16.3502 10.9699 16.0602 11.2599L12.5302 14.7899C12.3802 14.9399 12.1902 15.0099 12.0002 15.0099Z" fill="#E1B171"/>
                                          </svg>
                                    </div>
                                    <div className="flex flex-row justify-between text-start text-white md:items-center md:flex-col md:justify-center xl:gap-[0.4rem]">
                                          <h2 className="font-bold min-[600px]:text-[1.2rem] xl:text-[2.1rem] 2xl:text-[2.3rem]">Linkedin.</h2>
                                          <h6 className="font-normal hidden md:block xl:text-[1.3rem] 2xl:text-[1.5rem]">Diva Indira Asauri</h6>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:hidden" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#E1B171"/>
                                                <path d="M12.0002 15.0099C11.8102 15.0099 11.6202 14.9399 11.4702 14.7899L7.94016 11.2599C7.65016 10.9699 7.65016 10.4899 7.94016 10.1999C8.23016 9.90993 8.71016 9.90993 9.00016 10.1999L12.0002 13.1999L15.0002 10.1999C15.2902 9.90993 15.7702 9.90993 16.0602 10.1999C16.3502 10.4899 16.3502 10.9699 16.0602 11.2599L12.5302 14.7899C12.3802 14.9399 12.1902 15.0099 12.0002 15.0099Z" fill="#E1B171"/>
                                          </svg>
                                    </div>
                                    <div className="flex flex-row justify-between text-start text-white md:items-center md:flex-col md:justify-center xl:gap-[0.4rem]">
                                          <h2 className="font-bold min-[600px]:text-[1.2rem] xl:text-[2.1rem] 2xl:text-[2.3rem]">Gmail.</h2>
                                          <h6 className="font-normal hidden md:block xl:text-[1.3rem] 2xl:text-[1.5rem]">divaindira@gmail.com</h6>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:hidden" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#E1B171"/>
                                                <path d="M12.0002 15.0099C11.8102 15.0099 11.6202 14.9399 11.4702 14.7899L7.94016 11.2599C7.65016 10.9699 7.65016 10.4899 7.94016 10.1999C8.23016 9.90993 8.71016 9.90993 9.00016 10.1999L12.0002 13.1999L15.0002 10.1999C15.2902 9.90993 15.7702 9.90993 16.0602 10.1999C16.3502 10.4899 16.3502 10.9699 16.0602 11.2599L12.5302 14.7899C12.3802 14.9399 12.1902 15.0099 12.0002 15.0099Z" fill="#E1B171"/>
                                          </svg>
                                    </div>
                              </div>
                              <div aria-label="mobile" className="flex flex-col justify-start px-4 gap-4 shadow-transparent md:hidden">
                                    <Accordion className="bg-transparent shadow-none static shadow-transparent">
                                          <AccordionSummary
                                                expandIcon={
                                                      <img alt="" className="w-6 md:hidden" src={arrowIcon}/>
                                                }
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                                className="px-0 shadow-transparent"
                                          >
                                                <Typography className="text-start text-white font-bold min-[600px]:text-[1.2rem] xl:text-[2.1rem] 2xl:text-[2.3rem]">Contact Number.</Typography>
                                          </AccordionSummary>
                                          <AccordionDetails className="bg-[#443529] text-white text-start p-6 rounded-md">
                                                <Typography>
                                                      Silahkan Mengunjungi No WA saya di : +62 882-2453-8786
                                                </Typography>
                                          </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="bg-transparent shadow-none static shadow-transparent">
                                          <AccordionSummary
                                                expandIcon={
                                                      <img alt="" className="w-6 md:hidden" src={arrowIcon}/>
                                                }
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                                className="px-0 shadow-transparent"
                                          >
                                                <Typography className="text-start text-white font-bold min-[600px]:text-[1.2rem] xl:text-[2.1rem] 2xl:text-[2.3rem]">Linkedin.</Typography>
                                          </AccordionSummary>
                                          <AccordionDetails className="bg-[#443529] text-white text-start p-6 rounded-md">
                                                <Typography>
                                                      Silahkan Mengunjungi Linkedin saya di : <a className="underline text-cream-web" href="https://www.linkedin.com/in/diva-indira-asauri-a0b4482a5/">sini</a>
                                                </Typography>
                                          </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="bg-transparent shadow-none static shadow-transparent">
                                          <AccordionSummary
                                                expandIcon={
                                                      <img alt="" className="w-6 md:hidden" src={arrowIcon}/>
                                                }
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                                className="px-0 shadow-transparent"
                                          >
                                                <Typography className="text-start text-white font-bold min-[600px]:text-[1.2rem] xl:text-[2.1rem] 2xl:text-[2.3rem]">Gmail.</Typography>
                                          </AccordionSummary>
                                          <AccordionDetails className="bg-[#443529] text-white text-start p-6 rounded-md">
                                                <Typography>
                                                      Email saya adalah : divaindira66@gmail.com
                                                </Typography>
                                          </AccordionDetails>
                                    </Accordion>
                              </div>
                        </div>
                        <div className="bg-coklat-footer2-web py-9 xl:py-9">
                              <h3 className="text-center font-medium text-[0.9rem] md:text-[1.1rem] xl:text-lg 2xl:text-2xl">Copyright All rights reserved | {date} ©</h3>
                        </div>
                  </>
            );
      };