import React from "react";

// components
import Footer from "./Footer";
import Navbar from "./shared/Navbar";

function Layout(props) {
   return (
      <div>
         <Navbar />

         <div className="content">{props.children}</div>

         <Footer />
      </div>
   );
}

export default Layout;
