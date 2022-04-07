import React, {useState} from 'react';

function PhoneNav() {
  const [showNav, setShowNav] = useState(false)

  
  // window.addEventListener('click', setShowNav);

  return (
    <div className='lockWrapper ' id='navbarMenu'>
      <div className='wrapper'>
        <ul className={`menuLink ${showNav ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/tracks">Tracks</a></li>
          <li><a href="/packages">Packages</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
       
      </div>
    </div>

  )
}

export default PhoneNav;