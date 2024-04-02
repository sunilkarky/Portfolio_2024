import React from 'react'
import 'react-multi-carousel/lib/styles.css';


const Skills = () => {
  return (
    <div className='py-10 text-white bg-[#232325] h-auto' id='skills'>
        < div className='flex sm:flex-row flex-col-reverse items-center md:gap-6
         gap-12 px-10 max-w-6xl mx-auto'>
            <div>
                <div className='=p-2'>
                    <div className='text-gray-300 my-3'>
                        <h3 className='text-4xl font-semibold mb-5 align-middle'> <span className='primary-text'>Skills</span></h3>
                        <p className='text-justify leading-7 w-11/12 mx-auto'>

                        </p>
                    </div>
                </div>
                <div className='flex mt-10 mr-5 items-center gap-7 '>
                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                      
                        <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                        <span> Node js</span>
                        </h3>
                        <p className='md:text-base text-xs'>Working for 2 years.</p><p className='md:text-base text-xs'>Working for 2 years.</p>
                    </div>

                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                        <span>React js</span>
                        </h3>
                        <p className='md:text-base text-xs'> Working for 1+ years</p>
                    </div>

                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                        <span>Python</span>
                        </h3>
                        <p className='md:text-base text-xs'>Working for 1+ years</p>
                    </div>

                    
                </div>
            </div>
      
    </div>
  </div>

  )
}
export default Skills
