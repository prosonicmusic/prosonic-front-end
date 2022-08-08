import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from '@fortawesome/free-solid-svg-icons'
// import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
// import { faBox } from '@fortawesome/free-solid-svg-icons'
// import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
// import { faUser } from '@fortawesome/free-solid-svg-icons'
// import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import { FaHome, FaBox, FaUser, FaScrewdriver, FaArrowRight, FaMusic } from "react-icons/fa";

function PhoneNav({ status }) {
  return (
    <div className={`lockWrapper ${status ? "active" : ""}`} id="navbarMenu">
      <div className="wrapper">
        <ul className="menuLink">
          <li className="menuFlex">
          <FaHome className="homeIcon" />
            <Link to="/">Home</Link>
          </li>

          <li className="menuFlex">
          <FaMusic className="homeIcon" />
            <Link to="/tracks">Tracks</Link>
          </li>

          <li className="menuFlex">
          <FaBox className="homeIcon" />
            <Link to="/packages">Packages</Link>
          </li>

          <li className="menuFlex">
          <FaScrewdriver className="homeIcon" />
            <Link to="/services">Services</Link>
          </li>

          <li className="menuFlex">
          <FaUser className="homeIcon" />
            <Link to="/contact">Contact</Link>
          </li>

          <li className="menuFlex">
          <FaArrowRight className="homeIcon" />
            <Link to="/login">Login</Link>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default PhoneNav;
