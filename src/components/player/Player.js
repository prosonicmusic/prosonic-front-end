import React, { useContext } from "react";
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
      close,
      currentAudioLink,
      playerDispatch,
      audioInfo,
      audioRef,
      dragHandler,
      timeUpdateHandler,
      audioEndHandler,
      currentSongData,
      closePlayer,
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

   const closeHandler = () => {
      closePlayer();
   };

   // Add the styles
   const audioWidth = {
      width: `${audioInfo.widthPercentage}%`,
   };

   return (
      <div id="player">
         <div className={close ? "close" : ""}>
            <div className="container-layer">
               <audio
                  onTimeUpdate={timeUpdateHandler}
                  ref={audioRef}
                  src={currentAudioLink}
                  onEnded={audioEndHandler}
               ></audio>

               <div className="audio-image">
                  <img src={currentSongData?.thumbnail} alt={currentSongData?.title} />
               </div>

               <div className="player">
                  <input
                     min={0}
                     max={audioInfo.duration || 0}
                     type="range"
                     value={audioInfo.currentTime}
                     onChange={dragHandler}
                  />
                  <div style={audioWidth} className="progress-animate"></div>

                  <div className="audio-info">
                     <h3>
                        {currentSongData?.id} - {currentSongData?.title}
                     </h3>
                     <h4>{currentSongData?.author}</h4>
                  </div>
               </div>

               <button className="play-buttons" onClick={playAudioHandler}>
                  <span>{playing ? <FaPause /> : <FaPlay />}</span>
               </button>

               <button className="closeBtn" onClick={closeHandler}>
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
