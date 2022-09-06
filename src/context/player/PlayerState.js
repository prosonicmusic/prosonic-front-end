import React, { useReducer, useContext } from "react";

// Context
import { TracksContext } from "../../context/TrackContextProvider";
import playerContext from "./PlayerContext";
import playerReducer from "./playerReducer";

const PlayerState = (props) => {
   const products = useContext(TracksContext);
   // console.log(products);

   const initialState = {
      products: products,
      currentSong: 0,
      playing: false,
      audio: null,
   };

   // console.log(initialState);

   const [state, dispatch] = useReducer(playerReducer, initialState);

   // Set current song
   const setCurrent = (id) => dispatch({ type: "SET_CURRENT_SONG", data: id });

   // Set songs array
   const songsSet = (songsArr) => dispatch({ type: "SET_SONGS_ARRAY", data: songsArr });

   // Set playing state
   const togglePlaying = () =>
      dispatch({ type: "TOGGLE_PLAYING", data: state.playing ? false : true });

   return (
      <playerContext.Provider
         value={{
            currentSong: state.currentSong,
            products: products,
            playing: state.playing,
            audio: state.audio,
            setCurrent,
            songsSet,
            togglePlaying
         }}
      >
         {props.children}
      </playerContext.Provider>
   );
};

export default PlayerState;
