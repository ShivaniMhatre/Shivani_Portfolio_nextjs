import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props{
    openNav:()=>void
}

const Navbar = ({openNav}:Props) => {

    return (
        <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
            <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
                <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
                    Web
                    <span className='text-yellow-300'>Dev</span>
                </h1>
                {/* <div className='nav-link'>HOME</div> */}
                <a href='#home' className='nav-link'>HOME</a>
                <a href='#service' className='nav-link'>SERVICES</a>
                <a href='#skill' className='nav-link'>SKILL</a>
                <a href='#project' className='nav-link'>PROJECT</a>
                <a href='#about' className='nav-link'>ABOUT</a>
                <div onClick={openNav}>
                    <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-200 '/> 
                </div>
            </div>
        </div>
    )
}

export default Navbar