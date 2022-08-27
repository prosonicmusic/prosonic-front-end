import React from "react";
import { Link } from 'react-router-dom'

// Components
import Header from "../components/Header";
import Layout from "../components/Layout";

const HomePage = () => {
   return (
      <div>
         <Header />
         <Layout>
            <div className="homePage colorPage">
               <section className="block">
                  <div className="blockContent1">
                     <div>
                        <h2 className="h2-1">For singers and creators</h2>
                        <ul>
                           <li>Exclusive Prosonic tracks and packages</li>
                           <li>Professional quality</li>
                           <li>Get project stems</li>
                        </ul>
                     </div>
                     <div className="blockContent2">
                        <h2 className="h2-2">Can’t find the perfect track?</h2>
                        <span><Link to='/services' id='customLink'> Order a custom track!</Link></span>
                     </div>
                     <div></div>
                  </div>
               </section>

               <section className="container">
                  <div className="container__header-section">
                     <h2>Latest Prosonic produced tracks</h2>
                     <div className="container__browse">
                        <Link to="/tracks" className="container__btn">
                           <span>
                              <span>Browse more tracks</span>
                           </span>
                        </Link>
                     </div>
                  </div>
               </section>

               <section className="container">
                  <div className="container__header-section">
                     <h2>Premium Prosonic produced tracks</h2>
                     <div className="container__browse">
                        <Link to="/tracks" className="container__btn">
                           <span>
                              <span>Browse more tracks</span>
                           </span>
                        </Link>
                     </div>
                  </div>
               </section>

               <section className="container">
                  <div className="container__header-section">
                     <h2>Latest Prosonic Packages</h2>
                     <div className="container__browse">
                        <Link to="/packages" className="container__btn">
                           <span>
                              <span>Browse more packages</span>
                           </span>
                        </Link>
                     </div>
                  </div>

               </section>
            </div>
         </Layout>
      </div>
   );
};

export default HomePage;
