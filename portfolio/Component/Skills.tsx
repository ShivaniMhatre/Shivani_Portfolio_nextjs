import React from 'react'
import SkillsItem from './SkillsItem'
import SkillLanguage from './SkillLanguage'
import { GrReactjs } from "react-icons/gr";
import { SiNginx } from "react-icons/si";
import { CodeBracketSquareIcon } from '@heroicons/react/20/solid';
import { RiDatabase2Fill } from "react-icons/ri";

const Skills = () => {
    return (
        <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]' id='skill'>
            <h1 className='heading'>
                Education & <span className='text-yellow-400'>Skills</span>
            </h1>
            <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
                <div>
                    <div className='bg-blue-700   uppercase font-semibold text-center p-[2rem] mb-[3rem] '>
                        <GrReactjs className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>React Js</h1>
                        {/* <p className='text-[15px] text-[#d3fae8]'></p> */}
                    </div>
                    <div className='bg-green-700   uppercase font-semibold text-center p-[2rem] mb-[3rem] '>
                        <SiNginx  className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Node Js</h1>
                        {/* <p className='text-[15px] text-[#d3fae8]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, dolore.</p> */}
                    </div>
                    <SkillLanguage
                    skill1="html"
                    skill2="css"
                    skill3="javascript"
                    level1="w-[91%]"
                    level2="w-[88%]"
                    level3="w-[50%]"/>
                </div>
                <div>
                <div className='bg-red-700   uppercase font-semibold text-center p-[2rem] mb-[3rem] '>
                        <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>MERN STACK</h1>
                        {/* <p className='text-[15px] text-[#d3fae8]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, dolore.</p> */}
                    </div>
                    <div className='bg-yellow-700   uppercase font-semibold text-center p-[2rem] mb-[3rem]'>
                        <RiDatabase2Fill className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>DATABASE</h1>
                        {/* <p className='text-[15px] text-[#d3fae8]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, dolore.</p> */}
                    </div>
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