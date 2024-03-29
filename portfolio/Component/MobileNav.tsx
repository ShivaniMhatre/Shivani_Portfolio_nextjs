import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props {
    nav: boolean;
    closeNav: () => void
}
const MobileNav = ({ nav, closeNav }: Props) => {
    const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]"
    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 bottom-0 right-0 left-0 z-[10000000] bg-[#09101a]`}>
            <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
                <a href='#home' className='nav-link-mobile'>HOME</a>
                <a href='#service' className='nav-link-mobile'>SERVICES</a>
                <a href='#skill' className='nav-link-mobile'>SKILL</a>
                <a href='#project' className='nav-link-mobile'>PROJECT</a>
                <a href='#about' className='nav-link-mobile'>ABOUT</a>
                <div onClick={closeNav} className='absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] l-[2rem] text-yellow-400'>
                    <XMarkIcon />
                </div>
            </div>
        </div>
    )
}

export default MobileNav