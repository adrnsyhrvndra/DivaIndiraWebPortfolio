import * as React from "react";
import { SubJudulSkill } from "./subcomponents/SkillKemampuan/subJudulSkill";
import { JudulSkill } from "./subcomponents/SkillKemampuan/judulSkill";
import { TabsSkill } from "./subcomponents/SkillKemampuan/tabsSkill";
import { motion } from "framer-motion";

export const SkillDanKemampuan = () => {
  return (
    <>
      <div
        id="skill" 
        className="mt-16 px-4 xl:mt-32 xl:px-28"
      >
        <motion.div
          initial={{opacity:0, y: -80}}
          whileInView={{opacity:1, y: 0}}
          transition={{delay:0.5}}
          viewport={{once:true}}
        >
          <SubJudulSkill/>
          <JudulSkill/>
        </motion.div>
        <motion.div
          initial={{opacity:0, x: -100}}
          whileInView={{opacity:1, x: 0}}
          transition={{delay:0.5}}
          viewport={{once:true}}
        >
          <TabsSkill/>
        </motion.div>
      </div>
    </>
  );
};
