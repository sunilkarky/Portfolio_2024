import React from 'react'
import profilepp from '../assets/profilepp.jpg'
import {AiFillLinkedin,AiFillGithub,AiFillInstagram} from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'



const Home = () => {
  return (
    
    <div>
      <div className=' max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center ' id='home'>
        <div className=' flex-col my-auto mx-auto'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200' >Hi, I&apos;m Sunil Karki.</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            
            <TypeAnimation
              sequence={[
                "React",1000,
                "Node js",1000,
                "Python",1000
              ]} 
              wrapper="span"
              speed={50}
              repeat={Infinity}
              />
            </h1>
            <div className='flex justify-center items-center'>
              <p className='md:text-5xl sm:text-4xl text-xl font-bold  text-gray-500'>with 2 years Experience</p>
            </div>
            <div className='text-5xl flex justify-start gap-6 my-7 text-purple-600'>
            <a
          href="https://www.linkedin.com/in/sunil-karki-4705a82ab/"
          target="_blank"
          rel="noopener noreferrer"
        ><AiFillLinkedin /></a>
        <a
          href="https://github.com/sunilkarky"
          target="_blank"
          rel="noopener noreferrer"
        ><AiFillGithub />
        </a>
        
        <a
          href="https://www.instagram.com/sunil.karki.96995/"
          target="_blank"
          rel="noopener noreferrer"
        >
              <AiFillInstagram /></a>
            </div>

            <div className="relative inline-flex group my-3">
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px
               bg-gradient-to-r from-[#44BCFF] vua-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 
               group-hover:-inset-1 group-hover:duration-200 animate-tilt">

              </div>
            <a href="/Sunil_Karki_CV.pdf" title="Download CV"role="button" download
            className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg
            font-bold text-white transition-all duration bg-primary-color font-pj rounded-xl
            focus:outline-none focus:ring-offset-2 focus:ring-gray-900"
            >Download CV</a>
            </div>

        </div>

        {/* <div>
            <img className='bg-center bg-cover animate-pulse  m-5 shadow-md  ease-in-out rounded-full bg-no-repeat w-[250px] sm:w-[300px] mx-auto h-auto rounded-fill' src={profile} alt="profile pic" />
        </div> */}
        <div className="bg-cover bg-top-center m-5  shadow-custom animate-blob transition-all duration-1000 ease-in-out w-200 h-200 md:w-340 md:h-340 mx-auto"
     style={{backgroundImage: `url(${profilepp})`}}>
</div>

        </div>
    </div>
  )
}

export default Home
