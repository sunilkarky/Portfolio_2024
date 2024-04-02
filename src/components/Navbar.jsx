import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {

const [nav,setNav]=useState(false)

const handleNav=()=>{
    setNav(!nav)
}

  return (
    <div className='z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx auto h-24 px-4 text-1'>
        <h1 className='w-full text-3xl font-bold primary-color ml-4'>Sunil karki</h1>
        <ul className='hidden md:flex'>
            <li className='p-5'><Link to="home" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">Home</Link></li>
            <li className='p-5'><Link to="about" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">About</Link></li>
            <li className='p-5'><Link to="work" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">Project</Link></li>
            <li className='p-5'><Link to="contact" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">Contact</Link></li>
 
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r-gray-900 bg-[#202121] ease-in-out duration-500' :'fixed left-[-100%]'}>
            <div className='text-3xl primary-color m-4'>Sunil Karki</div>
        <ul className='p-8 text-2xl'>
            <li className='p-2'><Link to="home" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">Home</Link></li>
            <li className='p-2'><Link to="about" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">About</Link></li>
            <li className='p-2'><Link to="contact" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">Contact</Link></li>
            <li className='p-2'><Link to="work" spy={true} smooth={true} offset={50} duration={500} activeClassName="selected">Project</Link></li>
        </ul>      
        </div>
    </div>
  )
}

export default Navbar
