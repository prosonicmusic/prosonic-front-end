import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// icons
import { FaPlay, FaPause } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// Context
import playerContext from "../../context/player/PlayerContext";

const Player = () => {
   // Global state
   const {
      currentSong,
      playing,
      timeUpdateHandler,
      dragHandler,
      currentAudioLink,
      playerDispatch,
      audioInfo,
      audioRef,
      setAudioInfo,
   } = useContext(playerContext);

   // Event Handlers
   const playAudioHandler = () => {
      if (playing) {
         audioRef.current.pause();
         playerDispatch({ type: "TOGGLE_PLAYING", payload: !playing });
      } else {
         audioRef.current.play();
         playerDispatch({ type: "TOGGLE_PLAYING", payload: !playing });
      }
   };

   return (
      <div id="player">
         <div
         // className={close && "close"}
         >
            <div className="container-layer">
               <audio
                  onTimeUpdate={timeUpdateHandler}
                  ref={audioRef}
                  src={currentAudioLink}
               ></audio>

               <button className="play-buttons" onClick={playAudioHandler}>
                  <span>{playing ? <FaPause /> : <FaPlay />}</span>
               </button>

               <div className="player">
                  <input
                     min={0}
                     max={audioInfo.duration}
                     type="range"
                     value={audioInfo.currentTime}
                     onChange={dragHandler}
                     // ref={progressBar}
                  />
               </div>

               <button className="closeBtn" onClick={() => playerDispatch({ type: "CLOSE" })}>
                  <span>
                     <AiOutlineClose />
                  </span>
               </button>

               <Link to={`/tracks/${currentSong}`} className="buy">
                  info
               </Link>

               {/* <button className="buy">buy</button> */}
            </div>
         </div>
      </div>
   );
};

export default Player;
