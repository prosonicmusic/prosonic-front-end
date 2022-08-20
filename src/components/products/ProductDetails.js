import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";

const ProductDetails = () => {
   const params = useParams();
   const id = params.id;
   const BASE_URL = "http://localhost:8080";

   const getSpecificProduct = async () => {
      const response = await axios.get(`${BASE_URL}/product/specific?id=${id}`);
      return response.data;
   };

   const [product, setProduct] = useState([]);

   useEffect(() => {
      const fetchAPI = async () => {
         setProduct(await getSpecificProduct());
      };

      fetchAPI();
   }, []);

   const {
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
               <h3>Details</h3>
               <div>
                  <img src={thumbnail} alt="cover" className="product-image" />
               </div>
               <div className="product-title">
                  <h3>{title}</h3>
                  <h4>{author}</h4>
               </div>
               <div>
                  <span>ID</span>
                  <span>{id}</span>
               </div>
               <div>
                  <span>Price</span>
                  <span>{product_price} T</span>
               </div>
               <div>
                  <span>Genre</span>
                  <span>{genre}</span>
               </div>
               <div>
                  <span>Length</span>
                  <span>{length}</span>
               </div>
               <div>
                  <span>BPM</span>
                  <span>{bpm}</span>
               </div>
            </section>

            <div>
               <section className="description">
                  <h3>Project Description</h3>
                  <img src={project_image} alt="daw" className="daw-image" />
                  <p>{project_description}</p>
               </section>
               <section className="files">
                  <h3>Files</h3>
                  <div>{file_description}</div>
               </section>
            </div>
         </div>
      </>
   );
};

export default ProductDetails;
