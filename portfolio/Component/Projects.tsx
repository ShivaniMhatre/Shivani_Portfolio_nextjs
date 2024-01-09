import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
            <h1 className='heading'>Pro<span className='text-yellow-400'>jects</span></h1>
            <div className='w-[80%] pt-[2rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] '>
                <div>
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] mg:h-[300px]'>
                        {/* <Image src="/images/pro1.jpg" alt='portfolio' layout='fill' className='object-contain' /> */}
                        <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
                            Learning Management System
                        </h1>
                        <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
                            Myntra Clone
                        </h1>
                        <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
                            Currency Converter
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects