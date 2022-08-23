import React, { useContext } from "react";

// Components
import Package from "./Package";

// Context
import { PackagesContext } from "../../context/PackageContextProvider";

const Packages = () => {
   const packages = useContext(PackagesContext);
   return (
      <div className="beats">
         {packages.map((product) => {
            const productType = product.product_type;
            return (
               productType === "Package" && (
                  <div className="beatsGrid" key={product.id}>
                     {<Package productData={product} />}
                  </div>
               )
            );
         })}
      </div>
   );
};

export default Packages;
