import React from "react";
import image1 from '../img/prosonic-icon-white.png'

const Navbar = () => {
  return (
    <nav className="header__navbar header__top" id="navbar">
      <img src={image1} alt="Prosonic" id="logo" className="header__logo" />
      <ul className="header__menu">
            <li><a href="#home" className="header__btn">Home</a></li>
            <li><a href="#tracks" className="header__btn">Tracks</a></li>
            <li><a href="#package" className="header__btn">Packages</a></li>
            <li><a href="#services" className="header__btn">Services</a></li>
            <li><a href="#contact" className="header__btn">Contact</a></li>
            <button className="header__login">Login</button>
      </ul>
    </nav>
  )
}

export default Navbar;