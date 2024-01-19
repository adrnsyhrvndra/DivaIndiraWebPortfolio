import * as React from "react";
import { ReactDOM } from "react";
import { CardSkills } from "../../cardSkills";

export const AllSkills = () => {
  return (
    <>
      <div aria-label="cards-skill-dan-kemampuan" className="mt-8 xl:mt-10">
            <div className="grid grid-cols-12 md:gap-4 xl:gap-11">
                  <CardSkills skillJudul="Capcut"/>
                  <CardSkills skillJudul="Canva"/>
                  <CardSkills skillJudul="Time"/>
            </div>
      </div>
    </>
  );
};
