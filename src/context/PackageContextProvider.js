import React, { useState, useEffect, createContext } from "react";

// API
import { getPackages } from "../services/api";

export const PackagesContext = createContext();

const PackageContextProvider = ({ children }) => {
   const [packages, setPackages] = useState([]);

   useEffect(() => {
      const fetchAPI = async () => {
         setPackages(await getPackages());
      };

      fetchAPI();
   }, []);

   return <PackagesContext.Provider value={packages}>{children}</PackagesContext.Provider>;
};

export default PackageContextProvider;
