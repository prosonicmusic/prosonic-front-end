import React from "react";

// assets
import cover2 from "../../assets/img/cover1.jpg";
import playIcon from "../../assets/icons/play-icon-1.svg";
import logo1 from "../../assets/img/cubase_logo.png";
import logo2 from "../../assets/img/Fl-logo.png";

import { FaChevronRight } from "react-icons/fa";

const Track = ({productData}) => {
   return (
      <div className="col">
         <div className="beatItem hoverOnBeatItem beatItem__MoreInfoForDevices">
            <div className="beatItem__top">
               <div className="cover">
                  <img src={productData.thumbnail} alt="cover" />
                  <span>
                     <img src={playIcon} alt="play" className="cover__playIcon" />
                  </span>
               </div>
               <ul className="labels">
                  <div className={productData.tag}>
                     <li className="Prem"> PREMIUM </li>
                  </div>
               </ul>
               <div className="soldLayer">
                  <span> SOLD </span>
               </div>
            </div>
            <div className="beatItem__bottomWrapper bottom-part">
               <div className="moreInfoIcon">
                  <a href="#"></a>
                  <FaChevronRight className="rightIcon" />
               </div>
               <div>
                  <div className="beatItem__nameAndUsername">
                     <a href="#" className="name">
                        {productData.title}
                     </a>
                     <br />
                     <a href="#" className="username">
                        {productData.author}
                     </a>
                  </div>
                  <div className="beatItem__lineData">
                     <span className="price"> {productData.product_price} T</span>
                     <div id="daw">
                        <div className={productData.daw}>
                           <img src={logo2} alt="FL Studio" className="FL" />
                           <img src={logo1} alt="Cubase" className="CU" />
                        </div>
                     </div>
                  </div>
                  <div className="beatItem__buttons">
                     <a href="#" className="info">
                        {" "}
                        More Info{" "}
                     </a>
                     <button className="set-bg"> Add to cart </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Track;
