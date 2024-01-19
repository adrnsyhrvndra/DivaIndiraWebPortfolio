import * as React from "react";
import { ReactDOM } from "react";
import { CardSkills } from "../../cardSkills";

export const SoftSkills = () => {
  return (
    <>
      <div aria-label="cards-skill-dan-kemampuan" className="mt-8 xl:mt-10">
            <div className="grid grid-cols-12 md:gap-4 xl:gap-11">
                <CardSkills skillJudul="Skill Komunikasi"/>
                <CardSkills skillJudul="Skill Adaptasi"/>
                <CardSkills skillJudul="Time Management"/>
                <CardSkills skillJudul="Kerjasama Tim"/>
                <CardSkills skillJudul="Kemampuan Analisis"/>
                <CardSkills skillJudul="Penyelesaian Konflik"/>
            </div>
      </div>
    </>
  );
};
