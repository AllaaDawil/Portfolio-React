import React from 'react'
import SkillsItem from './SkillsItem';
import SkillsLanguage from './SkillsLanguage';

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="text-center text-white text-[26px] sm:text-[32px] md:text[44px] font-bold uppercase">
        Education & <span className="text-yellow-400">Skills</span>
      </h1>
      <div
        className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]
        items-center"
      >
        <div>
            <SkillsItem title= "Backend Developer" year="2023-2024"/>
            <SkillsItem title= "Frontend Developer" year="2023-2024"/>
            <SkillsLanguage skill1="Html" skill2="Css" skill3="JavaScript" level1="w-[85%]" level2="w-[75%]" level3="w-[70%]"/>
        </div>
        <div>
            <SkillsItem title= "Fullstack Developer" year="2023-2024"/>
            <SkillsItem title= "System Developer" year="2023-2024"/>
            <SkillsLanguage skill1="C#" skill2="TypeScript" skill3='React' level1="w-[85%]" level2="w-[65%]" level3='w-[60%]' />
        </div>
      </div>
    </div>
  );
}

export default Skills