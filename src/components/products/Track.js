import React, { useContext } from "react";
import { Link } from "react-router-dom";

// assets
import { FaChevronRight } from "react-icons/fa";
import playIcon from "../../assets/icons/play-icon-1.svg";
import logo1 from "../../assets/img/cubase_logo.png";
import logo2 from "../../assets/img/Fl-logo.png";

// Functions
import { isInCart, quantityCount } from "../../helper/functions";

// Context
import { CartContext } from "../../context/CartContextProvider";

const Track = ({ productData }) => {
   const { state, dispatch } = useContext(CartContext);

   const { thumbnail, tag, title, author, product_price, daw, id } = productData;

   return (
      <div className="col">
         <div className="beatItem">
            <div className="beatItem__top">
               <div className="cover">
                  <img src={thumbnail} alt="cover" />
                  <span>
                     <img src={playIcon} alt="play" className="cover__playIcon" />
                  </span>
               </div>
               <ul className="labels">
                  <div className={tag}>
                     <li className="Prem"> PREMIUM </li>
                  </div>
               </ul>
               <div className="soldLayer">
                  <span> SOLD </span>
               </div>
            </div>
            <div className="beatItem__bottomWrapper bottom-part">
               <div className="moreInfoIcon">
                  <Link to={`/tracks/${id}`} className="info"></Link>
                  <FaChevronRight className="rightIcon" />
               </div>
               <div>
                  <div className="beatItem__nameAndUsername">
                     <a href="#" className="name">
                        {title}
                     </a>
                     <br />
                     <a href="#" className="username">
                        {author}
                     </a>
                  </div>
                  <div className="beatItem__lineData">
                     <span className="price"> {product_price} T</span>
                     <div id="daw">
                        <div className={daw}>
                           <img src={logo2} alt="FL Studio" className="FL" />
                           <img src={logo1} alt="Cubase" className="CU" />
                        </div>
                     </div>
                  </div>
                  <div className="beatItem__buttons">
                     <Link to={`/tracks/${id}`} className="info">
                        {" "}
                        More Info{" "}
                     </Link>

                     {isInCart(state, id) < 1 && (
                        <button
                           className="set-bg"
                           onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
                        >
                           {" "}
                           Add to cart{" "}
                        </button>
                     )}
                     {quantityCount(state, id) === 1 && (
                        <button
                           className="set-bg"
                           onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}
                        >
                           {" "}
                           Remove Item{" "}
                        </button>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Track;
