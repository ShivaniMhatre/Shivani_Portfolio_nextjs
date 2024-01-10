import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'




const Shivani = () => {
    return (
        <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
            <Particle />
            <div className="w-[80%] grid-cols-1  mx-auto  grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                        HI, I'M <span className='text-yellow-400 '>SHIVANI!</span>
                    </h1>
                    <TextEffect />
                    <p className='mt-[1.5rem] text-[42px] font-bold text-[#fff]'>    Your Vision ,<span className='text-yellow-400'> Our Creation      </span>          </p>
                    <div className='mt-[2rem] flex-col space-y-6  sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        {/* <a href='/ShivaniMhatre.pdf' download="Shivani Mhatre Resume"><button className='px-[2rem]
                         hover:bg-yellow-400 
                         transition-all duration-200 
                         py-[1rem] 
                         text-[18px] font-bold uppercase bg-[#55e6a5]
                          text-black flex items-center space-x-2'>
                            <p>Download Cv</p>

                            <ArrowDownTrayIcon className='w-[4rem] h-[1.7rem] text-black' />

                        </button>
                        </a> */}
                    </div>
                </div>
                <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px] mt-[5rem]'>
                    <Image src='/images/user.jpg' alt='user' layout='fill' className="object-cover rounded-full" />
                </div>
            </div>
        </div >
    )
}

export default Shivani