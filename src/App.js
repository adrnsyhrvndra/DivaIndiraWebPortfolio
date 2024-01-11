import * as React from "react";
import "./App.css";
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
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
      <div aria-label="navbar-and-herosection" className="bg-bg-web">
        <Navbar/>
        <HeroSection/>
      </div>
      <div className="container mx-auto px-14">
        <PendidikanTerakhkirkuCard/>
        <IntroductionDiva/>
        <AlasanBapakIbu/>
      </div>
      <PengalamanKerjaTimeline/>
      <SkillDanKemampuan/>
      <WorkTogetherAndCv/>
      <ContactMe/>
      <Footer/>
    </>
  );
}
