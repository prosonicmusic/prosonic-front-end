import React, { useContext } from "react";

// Components
import Track from "../../components/products/Track";

// Context
import playerContext from "../../context/player/PlayerContext";

const HomePremiumTracks = () => {
   const { premiumTracks } = useContext(playerContext);
   
   return (
      <div className="beats">
         {premiumTracks.map((product, i) => {
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

export default HomePremiumTracks;
