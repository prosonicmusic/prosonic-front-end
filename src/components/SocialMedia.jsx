import React from 'react';

// icons
import { FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";


function SocialMedia() {
  return (
    <div id='socialMedia'>
      <div className='links'>
        <a href="https://www.instagram.com/prosonictunes/" target="_blank"> 
        <span><FaInstagram /> </span>
        </a>
        <a href="https://t.me/ProsonicSupport" target="_blank"> 
        <span><FaTelegram  className='telegramIcon'/> </span>
        </a>
        <a href="https://www.linkedin.com/company/prosonicstudio" target="_blank"> 
        <span><FaLinkedin className='linkedinIcon'/> </span>
        </a>

      </div>
    </div>
  )
}
export default SocialMedia;