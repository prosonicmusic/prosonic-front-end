import React, { useReducer, useContext, useState, useRef } from "react";

// Context
import { TracksContext } from "../Tracks/TrackContextProvider";
import { PackagesContext } from "../PackageContextProvider";
import playerContext from "./PlayerContext";
import playerReducer from "./playerReducer";
import { FiveTracksContext } from "../Tracks/FiveTracksContextProvider";
import { PremiumTracksContext } from "../Tracks/PremiumTracksContextProvider";

const PlayerState = (props) => {
   const tracks = useContext(TracksContext);
   const packages = useContext(PackagesContext);
   const FiveTracks = useContext(FiveTracksContext);
   const PremiumTracks = useContext(PremiumTracksContext);

   // State
   const initialState = {
      tracks: tracks,
      packages: packages,
      fiveTracks: FiveTracks,
      PremiumTracks: PremiumTracks,
      currentSong: 0,
      playing: false,
      close: true,
      open: false,
   };

   const [audioInfo, setAudioInfo] = useState({
      currentTime: 0,
      duration: 0,
      widthPercentage: 0,
   });

   // Ref
   const audioRef = useRef(null);

   const [state, playerDispatch] = useReducer(playerReducer, initialState);

   const currentSongData = tracks.find((item) => item.id === state.currentSong);
   let currentAudioLink = currentSongData?.files?.demo_file;

   // Player
   const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      // Calculate Precentage
      const roundedCurrent = Math.round(current);
      const roundedDuration = Math.round(duration);
      const widthPercentage = Math.round((roundedCurrent / roundedDuration) * 100);

      setAudioInfo({ ...audioInfo, currentTime: current, duration, widthPercentage });
   };

   const dragHandler = (e) => {
      audioRef.current.currentTime = e.target.value;
      setAudioInfo({ ...audioInfo, currentTime: e.target.value });
   };

   const audioEndHandler = async () => {
      playerDispatch({ type: "TOGGLE_PLAYING", payload: (state.playing = false) });
   };

   const openPlayer = () => {
      playerDispatch({ type: "OPEN", payload: (state.close = false) });
      // audioRef.current.play();
   };

   const closePlayer = () => {
      playerDispatch({ type: "CLOSE", payload: (state.close = true) });
      audioRef.current.pause();
      setAudioInfo({
         currentTime: 0,
         duration: 0,
         widthPercentage: 0,
      });
   };

   return (
      <playerContext.Provider
         value={{
            tracks: tracks,
            packages: packages,
            fiveTracks: FiveTracks,
            premiumTracks: PremiumTracks,
            packages: packages,
            currentSong: state.currentSong,
            playing: state.playing,
            close: state.close,
            audioInfo,
            currentAudioLink,
            playerDispatch,
            state,
            audioRef,
            timeUpdateHandler,
            dragHandler,
            setAudioInfo,
            audioEndHandler,
            currentSongData,
            closePlayer,
            openPlayer,
         }}
      >
         {props.children}
      </playerContext.Provider>
   );
};

export default PlayerState;
