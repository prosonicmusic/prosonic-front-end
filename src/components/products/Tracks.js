import React, { useContext, useEffect, useState } from "react";

// API
import { getProducts } from "../../services/api";

// Components
import Track from "../shared/Track";

// Context
import { ProductsContext } from "../../context/ProductContextProvider";

const Tracks = () => {
   const products = useContext(ProductsContext);

   return (
      <div className="beats">
         {products.map((product) => {
            return (
               <div className="beatsGrid">{<Track key={product.id} productData={product} />}</div>
            );
         })}
      </div>
   );
};

export default Tracks;
