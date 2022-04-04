import React, {useState} from "react";
import image1 from '../img/prosonic-icon-white.png'

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
    <>
    <nav className={color ? 'header__navbar bg-nav' : 'header__navbar'}>
          <div className="header__navbar header__top">
            <img src={image1} alt="Prosonic" id="logo" className="header__logo" />
            <ul className="header__menu">
                  <li><a href="#" className="header__btn">Home</a></li>
                  <li><a href="#" className="header__btn">Tracks</a></li>
                  <li><a href="#" className="header__btn">Packages</a></li>
                  <li><a href="#" className="header__btn">Services</a></li>
                  <li><a href="#" className="header__btn">Contact</a></li>
                  <button className="header__login">Login</button>
            </ul>
          </div>  
    </nav>
    </>
  )
}

export default Navbar;