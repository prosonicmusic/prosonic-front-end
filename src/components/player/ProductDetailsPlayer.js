import React, { useEffect, useRef, useState } from "react";

// icons
import { FaPlay, FaPause } from "react-icons/fa";

const ProductDetailsPlayer = ({files}) => {
   let demoURL = files.demo_file
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
      <div id="ProductDetailsPlayer">
         <audio ref={audioPlayer} src={demoURL}></audio>

         <button className="play-buttons" onClick={togglePlayPause}>
            <span>{isPlaying ? <FaPause /> : <FaPlay />}</span>
         </button>

         <div className="player">
            <div>
               <input
                  type="range"
                  className="progress-bar"
                  defaultValue="0"
                  ref={progressBar}
                  onChange={changeRange}
               />
            </div>
         </div>
      </div>
   );
};

export default ProductDetailsPlayer;
