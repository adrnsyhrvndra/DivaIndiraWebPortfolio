import * as React from "react";
import divaSection from "../img/divahero-section.png";

export const HeroSection = () => {
  return (
    <div
      aria-label="hero-section"
      className="grid grid-cols-12 relative xl:px-14 xl:pb-44 xl:mt-[5.5rem]"
    >
      <div
        aria-label="col-pertama-hero-section"
        className="col-span-5 z-40 relative"
      >
        <div className="flex flex-row items-center justify-start xl:gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10.0673 9.75644L15.6779 8.40818C16.1074 8.30518 16.1074 7.69433 15.6779 7.59078L10.0673 6.24252C9.91392 6.20582 9.79394 6.08584 9.75669 5.93189L8.40842 0.321892C8.30543 -0.107623 7.69457 -0.107623 7.59103 0.321892L6.24277 5.93244C6.20606 6.08584 6.08608 6.20582 5.93214 6.24307L0.322137 7.59133C-0.107379 7.69433 -0.107379 8.30518 0.322137 8.40873L5.93268 9.75699C6.08608 9.7937 6.20606 9.91368 6.24331 10.0676L7.59158 15.6782C7.69457 16.1077 8.30543 16.1077 8.40897 15.6782L9.75723 10.0676C9.79394 9.91313 9.91392 9.7937 10.0673 9.75644Z"
              fill="#333232"
            />
          </svg>
          <h5 className="uppercase text-slate-500 font-bold xl:tracking-[0.219rem] xl:text-sm">
            Customer Service & Marketing
          </h5>
        </div>
        <h1 className="font-black text-[#333232] xl:text-[3.3rem] xl:leading-[3.938rem] xl:mt-4 min-[1440px]:text-[3.8rem]">
          Hello I’m <br />
          <span className="break-words text-coklat-home">
            Diva Indira Asauri
          </span>
        </h1>
        <div
          aria-label="experience-and-company"
          className="bg-black text-white rounded-2xl flex flex-row justify-center z-50 xl:gap-8 xl:w-[110%] xl:mt-8 xl:py-10 min-[1440px]:gap-12"
        >
          <div className="flex flex-row items-center xl:gap-4">
            <h2 className="font-extrabold xl:text-7xl">5</h2>
            <h4 className="xl:text-2xl min-[1440px]:text-[1.9rem]">
              Tahun <br />
              Pengalaman
            </h4>
          </div>
          <div className="flex flex-row items-center xl:gap-4">
            <h2 className="font-extrabold xl:text-7xl">2</h2>
            <h4 className="xl:text-2xl min-[1440px]:text-[1.9rem]">
              Perusahaan <br />
              Ditempati
            </h4>
          </div>
        </div>
        <div aria-label="paragraf-hero-section" className="relative">
          <p className="text-[#706D61] xl:mt-8 xl:leading-[3rem] xl:text-base min-[1440px]:text-[1.35rem] min-[1440px]:leading-loose">
            Seorang pribadi yang efisien dan detail terhadap sesuatu dengan
            pengalaman yang saya miliki membuat saya mampu bekerja baik secara
            tim ataupun individu.
          </p>
        </div>
        <div className="flex flex-row xl:gap-8 xl:mt-6">
          <div
            aria-label="lets-talk"
            className="bg-[#17120E] text-white flex flex-row items-center rounded-lg xl:px-4 xl:py-4 xl:gap-2"
          >
            <p className="min-[1440px]:text-[1.4rem]">Let's talk</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 min-[1440px]:w-8"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            aria-label="view-linkedin"
            className="flex flex-row items-center rounded-lg border-[2px] border-coklat-web xl:gap-2 xl:px-4 xl:py-4"
          >
            <a
              href="https://www.linkedin.com/in/diva-indira-asauri-a0b4482a5/"
              target="_blank"
              rel="noreferrer"
              className="min-[1440px]:text-[1.4rem]"
            >
              view linkedin
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 min-[1440px]:w-6"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.5 0.374997H1.5C1.20504 0.371995 0.920934 0.486127 0.710024 0.69235C0.499114 0.898574 0.378626 1.18004 0.375 1.475V14.5275C0.379282 14.822 0.500058 15.1028 0.710896 15.3085C0.921735 15.5142 1.20547 15.628 1.5 15.625H14.5C14.795 15.6273 15.0789 15.5128 15.2897 15.3065C15.5005 15.1001 15.621 14.8187 15.625 14.5237V1.47125C15.6197 1.17716 15.4986 0.89703 15.288 0.691754C15.0773 0.486477 14.7941 0.372644 14.5 0.374997ZM4.89625 13.375H2.6325V6.09125H4.89625V13.375ZM3.77125 5.09875C3.51161 5.09899 3.25773 5.02223 3.04172 4.87816C2.82572 4.73409 2.6573 4.52919 2.55777 4.28939C2.45824 4.04958 2.43207 3.78564 2.48257 3.53096C2.53307 3.27628 2.65797 3.04229 2.84148 2.85861C3.02499 2.67493 3.25885 2.5498 3.51348 2.49906C3.76812 2.44831 4.03208 2.47423 4.27198 2.57354C4.51188 2.67284 4.71694 2.84106 4.86122 3.05693C5.00549 3.2728 5.0825 3.52661 5.0825 3.78625C5.08217 3.95882 5.04782 4.12963 4.9814 4.28891C4.91498 4.44819 4.8178 4.5928 4.69543 4.71448C4.57305 4.83616 4.42788 4.93251 4.26823 4.99802C4.10858 5.06352 3.93757 5.09691 3.765 5.09625L3.77125 5.09875ZM13.375 13.375H11.1113V9.83125C11.1113 8.9875 11.0963 7.90125 9.935 7.90125C8.77375 7.90125 8.57625 8.82125 8.57625 9.77625V13.375H6.31625V6.09125H8.48625V7.09125H8.51625C8.81875 6.51875 9.55625 5.915 10.6575 5.915C12.95 5.91 13.375 7.41875 13.375 9.375V13.375Z"
                fill="#5C4534"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-span-7">
        <img className="w-full" src={divaSection} alt="" />
      </div>
    </div>
  );
};
