import * as React from "react";
import { ReactDOM } from "react";
import { CardSkills } from "../components/subcomponents/cardSkills";
import { SubJudulSkill } from "./subcomponents/SkillKemampuan/subJudulSkill";
import { JudulSkill } from "./subcomponents/SkillKemampuan/judulSkill";
import { TabsSkill } from "./subcomponents/SkillKemampuan/tabsSkill";

export const SkillDanKemampuan = () => {
  return (
    <>
      <div className="mt-16 px-4 xl:mt-32 xl:px-28">
        <SubJudulSkill/>
        <JudulSkill/>
        <TabsSkill/>
      </div>
    </>
  );
};
