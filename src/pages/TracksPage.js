import React, { useContext } from "react";

// Components
import Layout from "../components/Layout";
import Tracks from "../components/products/Tracks";
import Loader from "../components/shared/Loader";

// Context
import { TracksContext } from "../context/TrackContextProvider";

const Trackspage = () => {
   const tracks = useContext(TracksContext);
   return (
      <Layout>
         <div className="tracksHeader"></div>
         <section id="tracksPage">
            <header className="header-section">
               <div className="left">
                  <h1>Latest tracks</h1>
               </div>
               <div className="beatsMenu">
                  <div className="dropdown-select">
                     <select>
                        <option value="">Genres</option>
                        <option value="Ambient & Chill">Ambient & Chill</option>
                        <option value="Cinematic">Cinematic</option>
                        <option value="Disco">Disco</option>
                        <option value="Dubstep">Dubstep</option>
                        <option value="EDM">EDM</option>
                        <option value="Electro House">Electro House</option>
                        <option value="Folk">Folk</option>
                        <option value="Hause">Hause</option>
                        <option value="Hip hop">Hip hop</option>
                        <option value="Pop">Pop</option>
                        <option value="Rock">Rock</option>
                        <option value="Rnb">Rnb</option>
                        <option value="Trap">Trap</option>
                     </select>
                     <span className="caret"></span>
                  </div>
                  <div className="dropdown-select">
                     <select>
                        <option value="">Prices</option>
                        <option value="0,99">Up to 99€</option>
                        <option value="100,199">100€ to 199€</option>
                        <option value="200,299">200€ to 299€</option>
                        <option value="300,499">300€ to 399€</option>
                        <option value="500,99999">More than 500€</option>
                     </select>
                     <span className="caret"></span>
                  </div>
                  <div className="dropdown-select">
                     <select>
                        <option value="">Daws</option>
                        <option value="cubase">Cubase</option>
                        <option value="flStudio">FL Studio</option>
                     </select>
                     <span className="caret"></span>
                  </div>
               </div>
            </header>
            {tracks.length ? <Tracks /> : <Loader />}
         </section>
      </Layout>
   );
};

export default Trackspage;
