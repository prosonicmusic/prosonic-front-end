import React, { useContext } from "react";

// Components
import Track from "../shared/Track";

// Context
import { ProductsContext } from "../../context/ProductContextProvider";

const Tracks = () => {
   const products = useContext(ProductsContext);
   const productsData = products.data.results;

   return (
      <div className="beats">
         {productsData.map((product) => {
            return (
               <div className="beatsGrid">{<Track key={product.id} productData={product} />}</div>
            );
         })}
      </div>
   );
};

export default Tracks;
