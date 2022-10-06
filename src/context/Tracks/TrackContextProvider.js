import React, { useState, useEffect, createContext } from "react";

// API
import { getTracks } from "../../services/api";

export const TracksContext = createContext();

const TrackContextProvider = ({ children }) => {
   const [tracks, setTracks] = useState([]);

   useEffect(() => {
      const fetchAPI = async () => {
         setTracks(await getTracks());
      };

      fetchAPI();
   }, []);

   return <TracksContext.Provider value={tracks}>{children}</TracksContext.Provider>;
};

export default TrackContextProvider;
