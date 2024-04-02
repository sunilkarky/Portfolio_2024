import React from 'react'
import {FaGithubSquare,FaInstagram, FaLinkedin} from 'react-icons/fa'
import BuyMeACoffe from './BuyMeACoffe'
const Footer = () => {
  return (
    <div class='mt-12 w-max-[800px] border-t border-gray-500 text-center'>
        <p class='my-5 text-gray-500'><br />SunilKarki</p>
        <div class='inline-flex text-gray-500 gap-4 text-3xl'>
        <a
          href="https://github.com/sunilkarky"
          target="_blank"
          rel="noopener noreferrer"
        ><FaGithubSquare /></a>
           <a
          href="https://www.instagram.com/sunil.karki.96995/"
          target="_blank"
          rel="noopener noreferrer"
        > <FaInstagram /></a>
            <a
          href="https://www.linkedin.com/in/sunil-karki-4705a82ab/"
          target="_blank"
          rel="noopener noreferrer"
        ><FaLinkedin /></a>
            <BuyMeACoffe />
        </div>
        
    </div>
  )
}

export default Footer
