import React from 'react';
import { Link } from 'react-router-dom';
import { FaTelegram, FaEnvelope} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footerBody'>
      <footer>
        <section>
          <div className='footerSec aboutUs'>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus voluptate voluptas et modi? Et        consequatur iste corporis maiores, ea similique praesentium pariatur, optio eum soluta enim? Veritatis  quae  repellat nisi.</p>
          </div>

          <div className='footerSec quickLinks'>
            <h2>Quick Links</h2>
            <ul>
              <li><Link to='/about' id='footerLink'>About</Link></li>
              <li><Link to='/jobs' id='footerLink'>Jobs</Link></li>
              <li><Link to='/contact' id='footerLink'>Contact</Link></li>
              <li><Link to='/terms' id='footerLink'>Terms & Conditions</Link></li>
              <li><Link to='/privacy-policy' id='footerLink'>Privacy Policy</Link></li>
            </ul>
          </div>

          <div className='footerSec contact'>
            <h2>Contact Info</h2>
            <ul className="contactInfo">
              <li>
                <span><FaEnvelope/></span>
                <a href="mailto:prosonictunes@gmail.com">prosonictunes@gmail.com</a>
              </li>
              <li>
                <span><FaTelegram/></span>
                <a href="https://t.me/ProsonicSupport">@ProsonicSupport</a>
              </li>
            </ul>
          </div>
        </section>
      </footer>

      <div className="copyrightText">
        <p>Copyright © 2022 Prosonic. All Rights Reserved.</p>
      </div>
    </div> 
  )
}

export default Footer