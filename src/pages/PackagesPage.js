import React, { useContext } from "react";

// Components
import Layout from "../components/Layout";
import Packages from "../components/products/Packages.js";
import Loader from "../components/shared/Loader";
import Pagination from "../components/shared/Pagination";

// Context
import { PackagesContext } from "../context/PackageContextProvider";

function PackagesPage() {
   const packages = useContext(PackagesContext);
   return (
      <Layout>
         <div className="tracksHeader"></div>
         <section id="tracksPage">
            <header className="header-section">
               <div className="left">
                  <h1>Latest Packages</h1>
               </div>
               <div className="beatsMenu">
                  <div className="dropdown-select">
                     <select>
                        <option value="">Types</option>
                        <option value="Drum Kits">Drum Kits</option>
                        <option value="MIDI">MIDI</option>
                        <option value="Melodies">Melodies</option>
                        <option value="One-Shots">One-Shots</option>
                        <option value="Bundles">Bundles</option>
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
               </div>
            </header>
            {packages.length ? <Packages /> : <Loader />}

            <Pagination />
         </section>
      </Layout>
   );
}

export default PackagesPage;
