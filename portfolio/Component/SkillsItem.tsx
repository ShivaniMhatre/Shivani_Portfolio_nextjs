import React from 'react'

interface Props{
    title:String
}
const SkillsItem = ({title}:Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
        <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
            {title}
        </h1>
        <p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolorum animi, delectus error optio fugit est, nisi architecto officia illum voluptates natus aut quae. Voluptate nobis eos quia saepe quos.</p>
    </div>
  )
}

export default SkillsItem