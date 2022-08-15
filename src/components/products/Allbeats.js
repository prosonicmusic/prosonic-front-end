import React, { useContext, useState } from "react";

// Components
import Track from "../shared/Track";

// Context
import { ProductsContext } from "../../context/ProductContextProvider";

const Allbeats = () => {

   const products = useContext(ProductsContext)
   const tracks = products.data.results
   
   console.log(tracks);

   return (
      <div className="beats">
         {
            tracks.map(product => 
            {
               return (
                  <div className="beatsGrid">
                     {
                        <Track key={product.id} productData={product}/>
                     }
                  </div>
               );
            })
         }
      </div>
   );
};

export default Allbeats;
