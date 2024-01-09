import React from 'react'
import SkillsItem from './SkillsItem'
import SkillLanguage from './SkillLanguage'

const Skills = () => {
    return (
        <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
            <h1 className='heading'>
                Education & <span className='text-yellow-400'>Skills</span>
            </h1>
            <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
                <div>
                    <SkillsItem title="React Developer"/>
                    <SkillsItem title="MERN Stack Developer"/>
                    <SkillLanguage
                    skill1="html"
                    skill2="css"
                    skill3="javascript"
                    level1="w-[91%]"
                    level2="w-[88%]"
                    level3="w-[50%]"/>
                </div>
                <div>
                    <SkillsItem title="Next Js Developer"/>
                    <SkillsItem title="Node Js Developer"/>
                    <SkillLanguage
                    skill1="React Js"
                    skill2="Next Js"
                    skill3="Bootstrap"
                    level1="w-[60%]"
                    level2="w-[40%]"
                    level3="w-[50%]"/>
                </div>
            </div>
        </div>
    )
}

export default Skills