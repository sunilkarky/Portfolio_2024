import React from 'react'
import aboutImage from '../assets/download.png'
const AboutUs = () => {
  return (
    <div className='py-10 text-white bg-[#232325] h-auto' id='about'>
        < div className='flex sm:flex-row flex-col-reverse items-center md:gap-6
         gap-12 px-10 max-w-6xl mx-auto'>
            <div>
                <div className='w-[400px] h-full'>
                    <img src={aboutImage} alt="aboutImage" className='=object-cover rounded-xl h-[300px] filter grayscale  brightness-50 mx-auto' />

                </div>
            </div>
            <div>
                <div className='=p-2'>
                    <div className='text-gray-300 my-3'>
                        <h3 className='text-4xl font-semibold mb-5'>About <span className='primary-text'>Me</span></h3>
                        <p className='text-justify leading-7 w-11/12 mx-auto'>
                            2+ years of experience designing, building, and maintaining the core systems that power applications. I thrive on crafting clean, efficient APIs, architecting robust databases, and ensuring our services are scalable, secure, and performant under pressure. I'm constantly exploring new technologies and best practices to build better foundations, aiming to deliver exceptional value by solving complex problems efficiently and exceeding technical objectives.
                        </p>
                    </div>
                </div>
                <div className='flex mt-10 items-center gap-7 '>
                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-white'>3
                        <span>+</span>
                        </h3>
                        <p><span className='md:text-base text-xs'>Projects</span></p>
                    </div>

                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-white'>2
                        <span>+</span>
                        </h3>
                        <p><span className='md:text-base text-xs'>years Experience</span></p>
                    </div>

                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-white'>1
                        <span>+</span>
                        </h3>
                        <p><span className='md:text-base text-xs'>years Internship</span></p>
                    </div>

                    
                </div>
            </div>
      
    </div>
  </div>
  )
}

export default AboutUs
