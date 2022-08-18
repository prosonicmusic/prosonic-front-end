import React, { useContext } from "react";

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
               <div className="beatsGrid" key={product.id}>
                  {<Track productData={product} />}
               </div>
            );
         })}
      </div>
   );
};

export default Tracks;
