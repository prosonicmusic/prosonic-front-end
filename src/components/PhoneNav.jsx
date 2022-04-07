import React, { useState } from "react";
import { Link } from "react-router-dom";

function PhoneNav({ status }) {
  // const [showNav, setShowNav] = useState(false);

  // window.addEventListener('click', setShowNav);

  return (
    <div className={`lockWrapper ${status ? "active" : ""}`} id="navbarMenu">
      <div className="wrapper">
        <ul className="menuLink">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tracks">Tracks</Link>
          </li>
          <li>
            <Link to="/packages">Packages</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="#">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PhoneNav;
