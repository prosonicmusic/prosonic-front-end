import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { faBox } from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'


function PhoneNav({ status }) {
  return (
    <div className={`lockWrapper ${status ? "active" : ""}`} id="navbarMenu">
      <div className="wrapper">
        <ul className="menuLink">
          <li className="menuFlex">
          <FontAwesomeIcon icon={faHome} className="homeIcon"></FontAwesomeIcon>
            <Link to="/">Home</Link>
          </li>

          <li className="menuFlex">
          <FontAwesomeIcon icon={faFloppyDisk} className="homeIcon"></FontAwesomeIcon>
            <Link to="/tracks">Tracks</Link>
          </li>

          <li className="menuFlex">
          <FontAwesomeIcon icon={faBox} className="homeIcon"></FontAwesomeIcon>
            <Link to="/packages">Packages</Link>
          </li>

          <li className="menuFlex">
          <FontAwesomeIcon icon={faScrewdriverWrench} className="homeIcon"></FontAwesomeIcon>
            <Link to="/services">Services</Link>
          </li>

          <li className="menuFlex">
          <FontAwesomeIcon icon={faUser} className="homeIcon"></FontAwesomeIcon>
            <Link to="/contact">Contact</Link>
          </li>

          <li className="menuFlex">
          <FontAwesomeIcon icon={faRightToBracket} className="homeIcon"></FontAwesomeIcon>
            <Link to="/login">Login</Link>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default PhoneNav;
