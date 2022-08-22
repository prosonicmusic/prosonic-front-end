import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

// Components
import Navbar from "../shared/Navbar";

// assets
import playIcon from "../../assets/icons/play-icon-1.svg";
import logo1 from "../../assets/img/cubase_logo.png";
import logo2 from "../../assets/img/Fl-logo.png";

// Functions
import { isInCart, quantityCount } from "../../helper/functions";

// Context
import { CartContext } from "../../context/CartContextProvider";

const ProductDetails = () => {
   const params = useParams();
   const paramsID = params.id;
   const BASE_URL = "http://localhost:8080";
   const { state, dispatch } = useContext(CartContext);

   const getSpecificProduct = async () => {
      const response = await axios.get(`${BASE_URL}/product/specific?id=${paramsID}`);
      return response.data.data;
   };

   const [product, setProduct] = useState([]);

   useEffect(() => {
      const fetchAPI = async () => {
         setProduct(await getSpecificProduct());
      };

      fetchAPI();
   }, []);

   const {
      id,
      title,
      author,
      daw,
      length,
      genre,
      bpm,
      project_description,
      file_description,
      project_image,
      thumbnail,
      tag,
      product_price,
      stem_price,
      cover_price,
      sold,
   } = product;

   return (
      <>
         <Navbar />
         <div id="details">
            <section className="details">
               <h3 id="title">Details</h3>
               <div className="cover-section">
                  <div>
                     <img src={thumbnail} alt="cover" className="product-image" />
                  </div>
                  <span className="playIcon">
                     <img src={playIcon} alt="play" className="play-image" />
                  </span>

                  <ul className="labels">
                     <div className={tag}>
                        <li className="Prem"> PREMIUM </li>
                     </div>
                  </ul>

                  <div className="soldLayer">
                     <span> SOLD </span>
                  </div>
               </div>
               <div className="product-title">
                  <h2>{title}</h2>
                  <h4>By {author}</h4>
               </div>

               <hr className="hr" />
               <div className="more-detail">
                  <div className="details-block-line">
                     <span className="title">ID</span>
                     <span className="data">{id}</span>
                  </div>
                  <div className="details-block-line">
                     <span className="title">Price</span>
                     <span className="data">{product_price} T</span>
                  </div>
                  <div className="details-block-line">
                     <span className="title">Genre</span>
                     <span className="data">{genre}</span>
                  </div>
                  <div className="details-block-line">
                     <span className="title">Length</span>
                     <span className="data">{length}</span>
                  </div>
                  <div className="details-block-line">
                     <span className="title">BPM</span>
                     <span className="data">{bpm}</span>
                  </div>
                  <div className="details-block-line-daw">
                     <span className="title">Daw</span>
                     <div id="daw">
                        <div className={daw}>
                           <img src={logo2} alt="FL Studio" className="FL" />
                           <img src={logo1} alt="Cubase" className="CU" />
                        </div>
                     </div>
                  </div>
               </div>
               <hr className="hr" />

               <div className="add-to-cart-button">
                  {isInCart(state, id) < 1 && (
                     <button
                        className="set-bg"
                        onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
                     >
                        {" "}
                        Add to cart{" "}
                     </button>
                  )}
                  {quantityCount(state, id) === 1 && (
                     <button
                        className="set-bg"
                        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: product })}
                     >
                        {" "}
                        Remove Item{" "}
                     </button>
                  )}
               </div>
            </section>

            <div className="description-files">
               <section className="description">
                  <h3 id="title">Project Description</h3>
                  <img src={project_image} alt="daw" className="daw-image" />
                  <p>{project_description}</p>
               </section>
               <section className="files">
                  <h3 id="title">Files</h3>
                  <div>{file_description}</div>
               </section>
            </div>
         </div>
      </>
   );
};

export default ProductDetails;
