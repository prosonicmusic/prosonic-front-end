import React, { useContext } from "react";

// Components
import Track from "../products/Track";

// Context
import { TracksContext } from "../../context/TrackContextProvider";

const Tracks = () => {
   const products = useContext(TracksContext);
   return (
      <div className="beats">
         {products.map((product) => {
            const productType = product.product_type;
            return (
               productType === "Track" && (
                  <div className="beatsGrid" key={product.id}>
                     {<Track productData={product} />}
                  </div>
               )
            );
         })}
      </div>
   );
};

export default Tracks;
