import Link from "next/link";

import { FaPlay, FaPause } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Player() {
  return (
    <section className="fixed right-0 left-0 bottom-0 m-auto max-w-5xl h-[60px] z-30">
      <div
        className={`flex items-center justify-start bg-[#23252be6] w-full h-[60px] rounded-[40px]`}
      >
        <audio></audio>

        <img
          className="w-[60px] flex items-center justify-center rounded-tl-[10px] rounded-br-[10px]"
          src="images/beat1.jpg"
          alt={""}
        />

        <div className="h-[60px] flex-1">
          <input
            className="bg-[#0000000e] absolute rounded-[10px] left-[58px] w-[906.5px] h-[2px] px-4 cursor-pointer z-40"
            // min={0}
            // max={audioInfo.duration || 0}
            type="range"
            // value={audioInfo.currentTime}
            // onChange={dragHandler}
          />
          {/* <div style={{ width: "500px" }} className="bg-[#dadada] h-[2px] absolute top-0 left-[53px] z-50"></div> */}

          <div className="ml-[17px] mt-[4px]">
            <h3 className="font-medium text-lg">
              {/* {currentSongData?.id} - {currentSongData?.title} */}6 - Hello
            </h3>
            <h4 className="text-[#d3c7c794]">
              {/* {currentSongData?.author} */}Prosonic
            </h4>
          </div>
        </div>

        <button
          className="bg-[#282b32] w-[60px] h-[60px] flex items-center justify-center transition-all duration-300 absolute left-[48%] hover:bg-[#3b3f49] z-30"
          onClick={"playAudioHandler"}
        >
          {"playing" ? (
            <FaPause className="w-[20px] h-[20px]" />
          ) : (
            <FaPlay className="w-[20px] h-[20px]" />
          )}
        </button>

        <button
          className="hover:bg-[#363b47] bg-[#282c35] text-rose-500 hover:text-rose-700 transition-all duration-300 p-1 mr-2 rounded-full"
          onClick={"closeHandler"}
        >
          <AiOutlineClose className="w-6 h-6" />
        </button>

        <Link
          href={`/tracks/`}
          className="h-[60px] w-[60px] bg-[#282b32] hover:bg-[#3b3f49] transition-all duration-300 flex items-center justify-center font-semibold rounded-tr-[10px]"
        >
          INFO
        </Link>
      </div>
    </section>
  );
}
