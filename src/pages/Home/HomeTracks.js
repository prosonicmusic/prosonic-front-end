import React, { useContext } from "react";

// Components
import Track from "../../components/products/Track";

// Context
import playerContext from "../../context/player/PlayerContext";

const HomeTracks = () => {
   const { fiveTracks } = useContext(playerContext);
   return (
      <div className="beats">
         {fiveTracks.map((product, i) => {
            const index = i + 1;
            return (
               <div className="beatsGrid" key={product.id}>
                  {<Track productData={product} index={index} />}
               </div>
            );
         })}
      </div>
   );
};

export default HomeTracks;
