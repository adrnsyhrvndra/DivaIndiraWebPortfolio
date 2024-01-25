import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import { HeroSection } from './components/HeroSection';
import {Navbar} from './components/Navbar';
import {PendidikanTerakhkirkuCard} from './components/PendidikanTerakhirkuCard';
import {IntroductionDiva} from './components/IntroductionDiva';
import {AlasanBapakIbu} from './components/AlasanBapakIbu';
import {PengalamanKerjaTimeline} from './components/PengalamanKerjaTimeline';
import {SkillDanKemampuan} from './components/SkillDanKemampuan';
import {WorkTogetherAndCv} from './components/WorkTogetherAndCv';
import {ContactMe} from './components/ContactMe';
import {Footer} from './components/Footer';

export default function App() {

  const [loading,setLoading] = useState(false);
  let logoWebs = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705578132/divaWebPortfolio/logoWebs/logoDivaWebs_hbzvel.png";
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {
        loading ?  
        <div className="h-screen bg-[#2F251D] flex justify-center flex-col items-center gap-10">
          <img className="w-24 md:w-28 xl:w-36 2xl:w-44" src={logoWebs} alt="logo-web-diva" />
          <ScaleLoader
            aria-label="Loading Spinner"
            className="mx-auto"
            color={"#DCAC68"}
            loading={loading}
            height={110}
            width={30}
            radius={2}
            margin={3}
            data-testid="loader"
          />
          <h3 className="font-semibold text-base w-[80%] text-center text-[#FFF4E3] mx-auto md:text-2xl xl:text-3xl">Tunggu sebentar ya..</h3>
        </div>
      :
        <div className="overflow-x-hidden scroll-smooth">
          <div aria-label="navbar-and-herosection" className="bg-bg-web pb-36 mx-auto px-4 md:px-6 lg:pb-0 lg:px-6 xl:px-8 2xl:px-16">
            <Navbar/>
            <HeroSection />
          </div>
          <div className="mx-auto px-4 md:px-6 lg:px-10 xl:px-12 2xl:px-20">
            <PendidikanTerakhkirkuCard/>
            <IntroductionDiva/>
            <AlasanBapakIbu/>
          </div>
          <PengalamanKerjaTimeline/>
          <div className="mx-auto px-4 md:px-6 lg:px-10 xl:px-12 2xl:px-20">
            <SkillDanKemampuan/>
            <WorkTogetherAndCv/>
            <ContactMe/>
          </div>
          <Footer/>
        </div>
      }
    </>
  );
}
