// import React from 'react'

// const Home = () => {
//   return (
//     <div className='bg-[#141c27]'>
//       <h1 className='text-3xl font-bold'>Home</h1></div>
//   )
// }

// export default Home

import About from '@/Component/About';
import Footer from '@/Component/Footer';
import MobileNav from '@/Component/MobileNav';
import Navbar from '@/Component/Navbar'
import Projects from '@/Component/Projects';
import Services from '@/Component/Services';
import Shivani from '@/Component/Shivani';
import Skills from '@/Component/Skills';
import React, { useState } from 'react'

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className="overflow-x-hidden" id='home'>
      <div>
        {/* Navbar Section */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
        {/* Shivani Section */}
        <Shivani />
        <div className='relative z-[30]'>
          <About/>
          <Services/>
          <Skills/>
          <Projects/>
          <Footer/>
        </div>

      </div>
    </div>
  )
}

export default HomePage