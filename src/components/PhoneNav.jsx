import React from 'react';

function PhoneNav() {
  return (
    <div className='lockWrapper lockActive' id='navbarMenu'>
      <div className='wrapper'>
        <ul>
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