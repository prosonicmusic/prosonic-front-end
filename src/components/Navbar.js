import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// Components
import Burger from "./Burger";
import PhoneNav from "./PhoneNav";

// assets
import prosonicImg from "../assets/img/prosonic-icon-white.png";

// icons
import { FaShoppingCart } from "react-icons/fa";

// Context
import { CartContext } from "../context/CartContextProvider";

const Navbar = () => {
   const [color, setColor] = useState(false);
   const changeColor = () => {
      if (window.scrollY >= 80) {
         setColor(true);
      } else {
         setColor(false);
      }
   };

   const { state } = useContext(CartContext);

   return (
      <>
         <nav className={color ? "header__navbar bg-nav" : "header__navbar"}>
            <div className="header__navbar header__top">
               <img src={prosonicImg} alt="Prosonic" id="logo" className="header__logo" />
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
                     <FaShoppingCart className="shopIcon" />
                     <span> {state.itemsCounter} </span>
                  </Link>

                  <button className="header__login">
                     <Link to="/login" className="loginT">
                        Login
                     </Link>
                  </button>

                  <Burger />
               </ul>
            </div>

            <PhoneNav />
         </nav>
      </>
   );
};

export default Navbar;
