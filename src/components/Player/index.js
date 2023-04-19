import Link from "next/link";

import { FaPlay, FaPause } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { usePlayer, usePlayerActions } from "@/src/context/PlayerContext";

import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";

export default function Player() {
  const [domLoaded, setDomLoaded] = useState(false);

  const player = usePlayer();
  const dispatch = usePlayerActions();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    dispatch({ type: "PLAY_PAUSE", payload: true });
  }, [player?.currentSong]);

  const closeHandler = () => {
    dispatch({ type: "CLOSE" });
  };

  const playHandler = () => {
    dispatch({ type: "PLAY_PAUSE", payload: !player.playing });
  };

  const onEnded = () => {
    dispatch({ type: "PLAY_PAUSE", payload: false });
  };

  const audioUrl = player?.currentSong?.files?.demo_file;

  const buttonStyles =
    "bg-[#212227] w-[60px] h-[60px] flex items-center justify-center transition-all duration-300 absolute right-[11.5%] hover:bg-[#3b3f49] z-30";
  const buttonStyles2 =
    "max-[600px]:left-[47%] max-[600px]:bg-[#282b32] max-[600px]:w-[60px] max-[705px]:right-[19%] max-[890px]:right-[15%] max-[1000px]:right-[13%]";
  const closeButtonStyles =
    "hover:bg-[#363b47] absolute right-[60px] bg-[#282c35] text-gray-400 hover:text-rose-500 transition-all duration-300 p-1 mr-3 rounded-full z-30";
  const infoButtonStyles =
    "h-[60px] w-[60px] bg-[#282b32] hover:bg-[#3b3f49] transition-all duration-300 flex items-center justify-center font-semibold rounded-tr-[10px] z-30";

  return (
    <div>
      {domLoaded && (
        <section
          className={`fixed right-0 left-0 bottom-0 m-auto max-w-5xl h-[60px] z-30 transition-all duration-200 ${
            player?.open ? "" : "translate-y-[70px]"
          }`}
        >
          <div
            className={`flex items-center justify-start bg-[#23252be6] w-full h-[60px] rounded-[40px]`}
          >
            <img
              className="w-[60px] flex items-center justify-center rounded-tl-[10px] rounded-br-[10px]"
              src={player?.currentSong?.thumbnail}
              alt={player?.currentSong?.title}
            />

            <div className="h-[60px] flex-1">
              {/* <input
                className="bg-[#0000000e] relative rounded-[10px] top-[-15px] w-full h-[2px] cursor-pointer z-40"
                type="range"
                defaultValue="0"
                ref={progressBar}
                // onChange={changeRange}
              /> */}

              <div className="ml-[17px] mt-[4px]">
                <h3 className="font-medium text-lg">
                  {player?.currentSong?.id} - {player?.currentSong?.title}
                </h3>
                <h4 className="text-[#d3c7c794]">{player?.currentSong?.author}</h4>
              </div>

              <div className="max-[600px]:hidden">
                <ReactPlayer
                  playing={player?.playing}
                  url={audioUrl ? audioUrl : ""}
                  controls
                  width="100%"
                  height="100px"
                  onEnded={onEnded}
                  style={{
                    position: "relative",
                    top: "-43px",
                    left: "220px",
                    zIndex: "20",
                    position: "absolute",
                    paddingRight: "362px",
                  }}
                />
              </div>
            </div>

            {/* Play Button */}
            <button className={`${buttonStyles} ${buttonStyles2}`} onClick={playHandler}>
              {player?.playing ? (
                <FaPause className="w-[20px] h-[20px]" />
              ) : (
                <FaPlay className="w-[20px] h-[20px]" />
              )}
            </button>

            {/* Close Button */}
            <button className={closeButtonStyles} onClick={closeHandler}>
              <AiOutlineClose className="w-6 h-6" />
            </button>

            {/* Info Button */}
            <Link
              href={`/${player?.currentSong?.product_type?.toLowerCase()}s/${
                player?.currentSong?.id
              }`}
              className={infoButtonStyles}
            >
              INFO
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
