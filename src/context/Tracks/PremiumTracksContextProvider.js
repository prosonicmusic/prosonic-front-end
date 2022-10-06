import React, { useState, useEffect, createContext } from "react";

// API
import { getPremiumTracks } from "../../services/api";

export const PremiumTracksContext = createContext();

const PremiumTracksContextProvider = ({ children }) => {
   const [premiumTracks, setPremiumTracks] = useState([]);

   useEffect(() => {
      const fetchAPI = async () => {
         setPremiumTracks(await getPremiumTracks());
      };

      fetchAPI();
   }, []);

   return (
      <PremiumTracksContext.Provider value={premiumTracks}>
         {children}
      </PremiumTracksContext.Provider>
   );
};

export default PremiumTracksContextProvider;
