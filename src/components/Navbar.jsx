import React, { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../img/prosonic-icon-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Burger from "./Burger";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <nav className={color ? "header__navbar bg-nav" : "header__navbar"}>
        <div className="header__navbar header__top">
          <img src={image1} alt="Prosonic" id="logo" className="header__logo" />
          <ul className="header__menu">
            <li>
              <Link to="/" className="header__btn">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tracks" className="header__btn">
                Tracks
              </Link>
            </li>
            <li>
              <Link to="/packages" className="header__btn">
                Packages
              </Link>
            </li>
            <li>
              <Link to="/services" className="header__btn">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="header__btn">
                Contact
              </Link>
            </li>
            <Link to="/cart" className="navbarCartIcon">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="shopIcon"
              ></FontAwesomeIcon>
              <span className=""> 0 </span>
            </Link>

            <button className="header__login">
              <Link to="/login" className="loginT">
              Login
              </Link>
            </button>

            <Burger />
          </ul>
        </div>

        {/* <PhoneNav/> */}
      </nav>
    </>
  );
};

export default Navbar;
