import React, { useContext } from "react";

// Components
import Track from "../products/Track";

// Context
import { TracksContext } from "../../context/TrackContextProvider";
import playerContext from "../../context/player/PlayerContext";

const Tracks = () => {
   // const tracks = useContext(TracksContext);
   const { tracks } = useContext(playerContext);
   return (
      <div className="beats">
         {tracks.map((product, i) => {
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

export default Tracks;
