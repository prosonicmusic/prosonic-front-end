import React, { useState } from "react";
import PhoneNav from "./PhoneNav";

const Burger = () => {
   const [status, setStatus] = useState(false);

   return (
      <>
         <nav>
            <div className="burger" role="button" onClick={() => setStatus(!status)}>
               <i className={`${status ? "open" : ""}`}></i>
               <i className={`${status ? "open" : ""}`}></i>
               <i className={`${status ? "open" : ""}`}></i>
            </div>

            <PhoneNav status={status} />
         </nav>
      </>
   );
};

export default Burger;
