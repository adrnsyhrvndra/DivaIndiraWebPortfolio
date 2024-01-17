import * as React from "react";
import "./App.css";
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
  return (
    <>
      <div aria-label="navbar-and-herosection" className="bg-bg-web pb-36 lg:pb-0">
        <Navbar/>
        <HeroSection/>
      </div>
      <div className="mx-auto px-4 md:px-6 lg:px-10 xl:px-12 2xl:px-14">
        <PendidikanTerakhkirkuCard/>
        <IntroductionDiva/>
        <AlasanBapakIbu/>
      </div>
      <PengalamanKerjaTimeline/>
      <div className="mx-auto px-4 md:px-6 lg:px-10 xl:px-12 2xl:px-14">
        <SkillDanKemampuan/>
        <WorkTogetherAndCv/>
        <ContactMe/>
      </div>
      <Footer/>
    </>
  );
}
