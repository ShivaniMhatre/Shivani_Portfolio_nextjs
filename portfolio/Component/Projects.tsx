import Image from 'next/image'
import React, { useState } from 'react'

const Projects = () => {
    const [lms, setlms] = useState(false)
    const [myntra, setMyntra] = useState(false)

    const handleVisibleLms = () => {
        setlms(true)
    }
    const handleInvisibleLms = () => {
        setlms(false)
    }
    const handleVisiblemyntra = () => {
        setMyntra(true)
    }
    const handleInvisiblemyntra = () => {
        setMyntra(false)
    }
    return (
        <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[20rem]' id='project'>
            <h1 className='heading'>Pro<span className='text-yellow-400'>jects</span></h1>
            <div className='w-[80%] pt-[2rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] '>
                <div>
                    <div className='cursor-pointer relative w-[100%] h-[200px] mb:h-[300px]'>
                        {/* <Image src="/images/pro1.jpg" alt='portfolio' layout='fill' className='object-contain' /> */}
                        <h1 onMouseEnter={handleVisibleLms} onMouseLeave={handleInvisibleLms} className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
                            Learning Management System
                        </h1>
                        {lms &&
                            <ul className='text-[15px] text-[#d3fae8] list-disc'>
                                <li>Developed a website that would be used to track student data in accordance with the needs of the client.</li>
                                <li>Made student section to navigate through various educational courses, including the topics to be covered, the
                                    course format, and the teachers assigned to that particular course.</li>
                                <li>Designed teacher's website to update course information, including student enrollment, attendance, details.</li>
                                <li>Gave full access control to the admin for future updation of code.</li>
                                <li>Used Languages and database - HTML, CSS, Bootstrap, JavaScript, CodeIgniter framework with MySQL database.</li>
                            </ul>
                        }
                        <h1 onMouseEnter={handleVisiblemyntra} onMouseLeave={handleInvisiblemyntra} className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
                            Myntra Clone
                        </h1>
                        {myntra &&
                            <ul className='text-[15px] text-[#d3fae8] list-disc'>
                                <li>Constructed e-commerce platform clone with React.js and MongoDB.</li>
                                <li>Designed user interface using react.js, to ensuring a smooth and responsive user experience.</li>
                                <li>Set up and configured the MongoDB database. Designed and implemented the database schema to store user
                                    accounts and task-related information.</li>
                                <li>Developed REST API endpoints to ensure seamless communications for product and user management including
                                    creation, updating, deletion of products.</li>
                                <li>TECHNOLOGY USED : </li>
                                <ul className='text-[15px] text-[#d3fae8]'>
                                    <li>Database : MongoDB</li>
                                    <li>languages : React.js, CSS, Node.js.</li>
                                    <li>Code Editor : VS Code</li>
                                </ul>
                            </ul>
                        }
                        {/* <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
                            Currency Converter
                        </h1> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects