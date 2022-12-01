import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// assets
import { FaChevronRight } from "react-icons/fa";
import { BsPlay, BsFillPauseFill } from "react-icons/bs";
import logo1 from "../../assets/img/cubase_logo.png";
import logo2 from "../../assets/img/Fl-logo.png";

// Functions
import { isInCart, quantityCount } from "../../helper/functions";

// Context
import { CartContext } from "../../context/CartContextProvider";
import { playerContext } from "../../context/player/PlayerContext";

const Track = ({ productData, index }) => {
   const BASE_URL = "http://localhost:8080";
   const { state, dispatch } = useContext(CartContext);

   const { playerDispatch, currentSong, playing, audioRef, close, openPlayer } =
      useContext(playerContext);

   const { thumbnail, tag, title, author, product_price, daw, id, sold } = productData;

   const getSpecificProduct = async () => {
      const response = await axios.get(`${BASE_URL}/product/specific?id=${currentSong}`);
      return response.data.data;
   };

   const playHandler = () => {
      playerDispatch({ type: "SET_CURRENT_SONG", payload: id });
      openPlayer();

      // check if the song is playing
      if (playing) {
         const PlayPromise = audioRef.current.play();
         if (PlayPromise !== undefined) {
            PlayPromise.then((audio) => {
               audioRef.current.play();
            });
         }
      }
   };

   return (
      <div className="col">
         <div className="beatItem">
            <div className="top">
               {sold && (
                  <div className="soldLayer">
                     <span> SOLD </span>
                  </div>
               )}

               <div className="cover">
                  <img src={thumbnail} alt="cover" />
                  <span onClick={playHandler}>
                     {/* {playing ? <BsFillPauseFill className="icon" /> : <BsPlay className="icon" />} */}
                     <BsPlay className="icon" />
                  </span>
               </div>

               <ul className="labels">
                  <div className={tag}>
                     <li className="Prem"> PREMIUM </li>
                  </div>
               </ul>

               {/* <div className="wave">
                  <div className="stroke"></div>
                  <div className="stroke"></div>
                  <div className="stroke"></div>
                  <div className="stroke"></div>
                  <div className="stroke"></div>
                  <div className="stroke"></div>
                  <div className="stroke"></div>
               </div> */}
            </div>

            <div className="beatItem__bottomWrapper bottom-part">
               {sold ? (
                  <div></div>
               ) : (
                  <div className="moreInfoIcon">
                     <Link to={`/tracks/${id}`} className="info"></Link>
                     <FaChevronRight className="rightIcon" />
                  </div>
               )}

               <div>
                  <div className="beatItem__nameAndUsername">
                     <span className="name">{title}</span>
                     <br />
                     <span className="username">{author}</span>
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

                  <div className={sold ? "beatItem__buttons hide" : "beatItem__buttons"}>
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
