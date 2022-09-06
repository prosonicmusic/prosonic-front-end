import React, { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";

// icons
import { FaPlay, FaPause } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// Context
import playerContext from "../../context/player/PlayerContext";

const Player = () => {
   const { currentSong, products} = useContext(playerContext);
   const demoFile = products[0]
   const demoURL = demoFile
   console.log(demoURL);

   // state
   const [isPlaying, setIsPlaying] = useState(true);
   const [duration, setDuration] = useState(0);
   const [currentTime, setCurrentTime] = useState(0);
   const [close, setClose] = useState(false);

   // references
   const audioPlayer = useRef(); // reference our audio component
   const progressBar = useRef(); // reference our progress bar
   const animationRef = useRef(); // reference the animation

   useEffect(() => {
      const seconds = Math.floor(audioPlayer.current.duration);
      setDuration(seconds);
      progressBar.current.max = seconds;
   }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

   useEffect(() => {
      if (currentTime == duration) {
         togglePlayPause();
         timeTravel(0);
      }
   }, [currentTime]);

   const calculateTime = (secs) => {
      const minutes = Math.floor(secs / 60);
      const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(secs % 60);
      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${returnedMinutes}:${returnedSeconds}`;
   };

   const togglePlayPause = () => {
      const prevValue = isPlaying;
      setIsPlaying(!prevValue);

      if (!prevValue) {
         audioPlayer.current.play();
         animationRef.current = requestAnimationFrame(whilePlaying);
      } else {
         audioPlayer.current.pause();
         cancelAnimationFrame(animationRef.current);
      }
   };

   const closeHandler = () => {
      setClose(!close);
   };

   const whilePlaying = () => {
      progressBar.current.value = audioPlayer.current.currentTime;
      changePlayerCurrentTime();
      animationRef.current = requestAnimationFrame(whilePlaying);
   };

   const changeRange = () => {
      audioPlayer.current.currentTime = progressBar.current.value;
      changePlayerCurrentTime();
   };

   const changePlayerCurrentTime = () => {
      progressBar.current.style.setProperty(
         "--seek-before-width",
         `${(progressBar.current.value / duration) * 100}%`
      );
      setCurrentTime(progressBar.current.value);
   };

   const timeTravel = (newTime) => {
      progressBar.current.value = newTime;
      changeRange();
   };

   return (
      <div id="player">
         <div className={close ? "close" : ""}>
            <div className="container-layer">
               <audio ref={audioPlayer} src={products[currentSong]}></audio>

               <button className="play-buttons" onClick={togglePlayPause}>
                  <span>{isPlaying ? <FaPause /> : <FaPlay />}</span>
               </button>

               <div className="player">
                  <input type="range" defaultValue="0" ref={progressBar} onChange={changeRange} />
               </div>

               <button className="closeBtn" onClick={closeHandler}>
                  <span>
                     <AiOutlineClose />
                  </span>
               </button>

               <Link to="" className="p-info">
                  info
               </Link>

               <button className="buy">buy</button>
            </div>
         </div>
      </div>
   );
};

export default Player;
