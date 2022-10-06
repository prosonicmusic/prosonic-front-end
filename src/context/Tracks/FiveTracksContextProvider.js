import React, { useState, useEffect, createContext } from "react";

// API
import { getFiveTracks } from "../../services/api";

export const FiveTracksContext = createContext();

const FiveTracksContextProvider = ({ children }) => {
   const [fiveTracks, setFiveTracks] = useState([]);

   useEffect(() => {
      const fetchAPI = async () => {
         setFiveTracks(await getFiveTracks());
      };

      fetchAPI();
   }, []);

   return <FiveTracksContext.Provider value={fiveTracks}>{children}</FiveTracksContext.Provider>;
};

export default FiveTracksContextProvider;
