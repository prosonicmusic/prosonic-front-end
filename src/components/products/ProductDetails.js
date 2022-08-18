import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

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
      <div className="detail">
         <section className="main-info">
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
      </div>
   );
};

export default ProductDetails;
