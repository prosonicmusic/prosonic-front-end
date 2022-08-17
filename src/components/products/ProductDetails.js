import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

// Context
import { ProductsContext } from "../../context/ProductContextProvider";

const ProductDetails = () => {
   const params = useParams();
   const id = params.id;

   const products = useContext(ProductsContext);
   const data = products.data.results;
   const product = data[id];
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

   console.log(product);

   return (
      <div className="detail">
         <section className="main-info">
            <div>
               <img src={thumbnail} alt="cover" className="product-image"/>
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
            <div>
               <span>Daw</span>
               <span>{daw}</span>
            </div>
         </section>
      </div>
   );
};

export default ProductDetails;
