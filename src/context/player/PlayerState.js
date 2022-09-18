import React, { useReducer, useContext, useEffect, useState, useRef } from "react";

// Context
import { TracksContext } from "../TrackContextProvider";
import { PackagesContext } from "../PackageContextProvider";
import playerContext from "./PlayerContext";
import playerReducer from "./playerReducer";

const PlayerState = (props) => {
   const tracks = useContext(TracksContext);
   const packages = useContext(PackagesContext);

   // State
   const [audioInfo, setAudioInfo] = useState({
      currentTime: 0,
      duration: 0,
   });

   // Ref
   const audioRef = useRef(null);

   const initialState = {
      tracks: tracks,
      packages: packages,
      currentSong: 0,
      playing: false,
      close: true,
      demoFile: "",
   };

   //////////////////
   const initializer = (initialValue = initialState) =>
      JSON.parse(localStorage.getItem("player")) || initialValue;

   const [state, playerDispatch] = useReducer(playerReducer, initialState, initializer);

   useEffect(() => {
      localStorage.setItem("player", JSON.stringify(state));
   }, [state]);
   /////////////////

   const currentSongData = tracks.find((item) => item.id === state.currentSong);
   let currentAudioLink = currentSongData?.files?.demo_file;

   // Player
   const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setAudioInfo({ ...audioInfo, currentTime: current, duration });
   };

   const dragHandler = (e) => {
      audioRef.current.currentTime = e.target.value;
      setAudioInfo({ ...audioInfo, currentTime: e.target.value });
   };

   return (
      <playerContext.Provider
         value={{
            tracks: tracks,
            packages: packages,
            currentSong: state.currentSong,
            audioInfo: audioInfo,
            currentAudioLink: currentAudioLink,
            playerDispatch,
            playing: state.playing,
            state,
            audioRef,
            timeUpdateHandler,
            dragHandler,
            setAudioInfo,
         }}
      >
         {props.children}
      </playerContext.Provider>
   );
};

export default PlayerState;
