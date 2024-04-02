import React from 'react'
import project from '../assets/project_1copy.jpg'
const Works = () => {
  return (
    <div className='py-6 max-w-[1200px] mx auto'id='work'>
        <div className='mx-auto px-4 md:px-8'>
            <div className='mb-4 flex items-center justify-between'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl lg:text-3xl text-white'>
                        My <span>Projects</span>
                    </h2>
                    <p  className='text-gray-500'>
                        These are my projects
                    </p>
                </div>
            </div>
            <div className='grid gap-4 grid-cols-2  sm:grid-cols-3 md:gap-6 xl:gap-8 mx-auto'>
                <a href="https://github.com/sunilkarky/nodeProject" class="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80" >
                    <img src={project} alt="" class="h-full w-full object-cover object-center transition duration-200
                     group-hover:scale-110"/>
                </a>


                <a href="/" class="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80" >
                    <img src={project} alt="" class="h-full w-full object-cover object-center transition duration-200
                     group-hover:scale-110"/>
                </a>


               
                
            </div>
        </div>
      
    </div>
  )
}

export default Works