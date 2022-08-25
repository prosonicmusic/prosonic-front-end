import React from "react";

// components
import Footer from "./Footer";
import Player from "./Player";
import Navbar from "./shared/Navbar";

function Layout(props) {
   return (
      <div>
         <Navbar />

         <div className="content">{props.children}</div>

         <Footer />
         <Player />
      </div>
   );
}

export default Layout;
