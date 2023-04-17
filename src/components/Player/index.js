import Link from "next/link";

import { FaPlay, FaPause } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { usePlayer, usePlayerActions } from "@/src/context/PlayerContext";

export default function Player() {
  const player = usePlayer();
  const dispatch = usePlayerActions();

  const closeHandler = () => {
    dispatch({ type: "CLOSE" });

    if (player?.audio?.playing) {
      player?.audioPlayer.current.pause();
    }
  };

  return (
    <section
      className={`fixed right-0 left-0 bottom-0 m-auto max-w-5xl h-[60px] z-30 transition-all duration-200 ${
        player?.audio.open ? "" : "translate-y-[70px]"
      }`}
    >
      <div
        className={`flex items-center justify-start bg-[#23252be6] w-full h-[60px] rounded-[40px]`}
      >
        <audio
          ref={player?.audioPlayer}
          src={player?.audio?.currentSong?.files?.demo_file}
          preload="metadata"
        ></audio>

        <img
          className="w-[60px] flex items-center justify-center rounded-tl-[10px] rounded-br-[10px]"
          src={player?.audio?.currentSong?.thumbnail}
          alt={player?.audio?.currentSong?.title}
        />

        <div className="h-[60px] flex-1">
          <input
            className="bg-[#0000000e] relative rounded-[10px] top-[-14px] w-full h-[2px] cursor-pointer z-40"
            type="range"
            defaultValue="0"
            ref={player?.progressBar}
            onChange={player?.changeRange}
          />
          {/* <div style={{ width: "500px" }} className="bg-[#dadada] h-[2px] absolute top-0 left-[53px] z-50"></div> */}

          <div className="ml-[17px] mt-[-17px]">
            <h3 className="font-medium text-lg">
              {player?.audio?.currentSong?.id} - {player?.audio?.currentSong?.title}
            </h3>
            <h4 className="text-[#d3c7c794]">{player?.audio?.currentSong?.author}</h4>
          </div>
        </div>

        {/* Play Button */}
        <button
          className="bg-[#282b32] w-[60px] h-[60px] flex items-center justify-center transition-all duration-300 absolute left-[47%] hover:bg-[#3b3f49] z-30"
          onClick={player?.togglePlayPause}
        >
          {player.audio?.playing ? (
            <FaPause className="w-[20px] h-[20px]" />
          ) : (
            <FaPlay className="w-[20px] h-[20px]" />
          )}
        </button>

        <button
          className="hover:bg-[#363b47] bg-[#282c35] text-gray-400 hover:text-rose-500 transition-all duration-300 p-1 mr-3 rounded-full"
          onClick={closeHandler}
        >
          <AiOutlineClose className="w-6 h-6" />
        </button>

        <Link
          href={`/${player?.audio?.currentSong?.product_type.toLowerCase()}s/${
            player?.audio?.currentSong?.id
          }`}
          className="h-[60px] w-[60px] bg-[#282b32] hover:bg-[#3b3f49] transition-all duration-300 flex items-center justify-center font-semibold rounded-tr-[10px]"
        >
          INFO
        </Link>
      </div>
    </section>
  );
}
