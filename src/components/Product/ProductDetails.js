import { MdFolder } from "react-icons/md";
import { FaPlay, FaPause } from "react-icons/fa";

import PostInteraction from "../common/PostInteraction";
import { usePlayer, usePlayerActions } from "@/src/context/PlayerContext";

export default function ProductDetails({ productData }) {
  const {
    thumbnail,
    tag,
    title,
    author,
    id,
    product_price,
    product_type,
    genre,
    bpm,
    daw,
    length,
    like_count,
    project_image,
    product_description,
    file_description,
    sold,
    is_liked,
  } = productData;

  const dispatch = usePlayerActions();
  const player = usePlayer();

  const playerHandler = () => {
    dispatch({
      type: "SET_CURRENT_SONG_URL",
      payload: productData,
    });

    if (!player?.playing) {
      dispatch({ type: "PLAY_PAUSE", payload: true });
    } else if (player?.playing) {
      dispatch({ type: "PLAY_PAUSE", payload: false });
    }

    dispatch({ type: "OPEN" });
  };

  return (
    <main className="text-[#b6c1ce] max-w-5xl h-full w-full m-auto mt-[65px] flex max-[900px]:block">
      {/* Details */}
      <section className="bg-[#2e303880] rounded-[10px] transition-all duration-300 p-[25px] my-[15px] ml-[15px] max-[900px]:m-[15px] max-[900px]:pb-[10px] max-[900px]:mb-[10px]">
        <h3 className="font-semibold text-xl px-3 pb-4">Details</h3>

        <div className="relative w-full max-[900px]:w-full max-[900px]:flex max-[900px]:justify-center">
          <img src={thumbnail} alt="product cover" className="w-[200px] rounded-lg m-auto" />
          {/* Tag */}
          <ul className="flex items-start absolute top-2 text-xs font-bold invisible max-[900px]:left-1 max-[900px]:bottom-[-60px] max-[900px]:top-auto">
            <div className={tag}>
              <li> PREMIUM </li>
            </div>
          </ul>
          {/* Sold */}
          {sold && (
            <div className="absolute h-full w-full bg-[#23252bd2] top-0 left-0 right-0 z-50 flex items-center justify-center">
              <span className="text-[30px] font-bold"> SOLD </span>
            </div>
          )}
        </div>

        <div className="py-[10px] text-center">
          <h2 className="font-semibold text-2xl">{title}</h2>
          <h4>By {author}</h4>
        </div>

        <hr className="h-[1px] bg-[#383838] border-none" />
        <div className="bg-[#24252c44] p-2 my-5 rounded-[10px]">
          <div className="p-[3px]">
            <span className="pr-5 text-[#959faa]">ID</span>
            <span>{id}</span>
          </div>

          <div className="p-[3px]">
            <span className="pr-5 text-[#959faa]">Price</span>
            <span>{product_price} T</span>
          </div>

          {genre && (
            <div className="p-[3px]">
              <span className="pr-5 text-[#959faa]">Genre</span>
              <span>{genre}</span>
            </div>
          )}

          {length && (
            <div className="p-[3px]">
              <span className="pr-5 text-[#959faa]">Length</span>
              <span>{length}</span>
            </div>
          )}

          {bpm && (
            <div className="p-[3px]">
              <span className="pr-5 text-[#959faa]">BPM</span>
              <span>{bpm}</span>
            </div>
          )}

          {product_type !== "Package" && (
            <div className="p-[3px] flex">
              <span className="pr-5 text-[#959faa]">Daw</span>
              <div className="py-[3px] px-[5px] bg-[#282b32bb] rounded-[10px]">
                <div>
                  <img
                    src="/images/daw-icons/cubase_logo.png"
                    alt="Cubase"
                    className={`max-w-full h-[17px] align-middle ${
                      daw?.name === "Cubase" ? "block" : "hidden"
                    }`}
                  />
                  <img
                    src="/images/daw-icons/fl-logo.png"
                    alt="FL Studio"
                    className={`max-w-full h-[17px] align-middle ${
                      daw?.name === "FLStudio" ? "block" : "hidden"
                    }`}
                  />
                  <img
                    src="/images/daw-icons/ableton-logo.png"
                    alt="ableton"
                    className={`max-w-full h-[17px] align-middle ${
                      daw?.name === "Ableton" ? "block" : "hidden"
                    }`}
                  />
                  <img
                    src="/images/daw-icons/logicpro-logo.png"
                    alt="logicpro"
                    className={`max-w-full h-[17px] align-middle ${
                      daw?.name === "LogicPro" ? "block" : "hidden"
                    }`}
                  />
                  <img
                    src="/images/daw-icons/protools-logo.png"
                    alt="protools"
                    className={`max-w-full h-[17px] align-middle ${
                      daw?.name === "Protools" ? "block" : "hidden"
                    }`}
                  />
                  <img
                    src="/images/daw-icons/studioOne-logo.png"
                    alt="studioOne"
                    className={`max-w-full h-[17px] align-middle rounded-md ${
                      daw?.name === "StudioOne" ? "block" : "hidden"
                    }`}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Like */}
          <PostInteraction
            isLiked={is_liked}
            id={id}
            likeCount={like_count}
            styles={
              "flex items-center justify-center bg-[#282b32] py-2 mt-5 w-full rounded-[10px]"
            }
          />
        </div>

        <hr className="h-[1px] bg-[#383838] border-none" />

        {sold ? (
          <div className="flex py-4 justify-center">SOLD</div>
        ) : (
          <div className=" items-center justify-center">
            <button className="flex items-center justify-center p-3 transition-all duration-300 bg-[#cf1e59ee] hover:bg-[#dd1f5f] font-semibold text-[18px] text-white w-48 rounded-[10px] my-4 m-auto">
              Add to cart
            </button>

            <button
              className="bg-[#282b32] w-[100px] h-[50px] flex items-center justify-center transition-all duration-300 rounded-[10px] hover:bg-[#3b3f49] m-auto"
              onClick={playerHandler}
            >
              {player.playing && player?.currentSong?.id === id ? (
                <FaPause className="w-[20px] h-[20px]" />
              ) : (
                <FaPlay className="w-[20px] h-[20px]" />
              )}
            </button>
          </div>
        )}
      </section>

      <div>
        {/* Project Description */}
        <section className="bg-[#2e303880] rounded-[10px] p-[25px] m-[15px] min-h-[580px] max-[900px]:mb-[10px]">
          <h3 className="font-semibold text-xl px-3 pb-4">Project Description</h3>

          {project_image && (
            <img
              src={project_image}
              alt="project screenshot"
              className="w-[600px] rounded-lg max-[900px]:w-full"
            />
          )}

          <div
            className="py-6 mt-3"
            dangerouslySetInnerHTML={{ __html: product_description }}
          ></div>
          {/* <hr className="h-[1px] bg-[#383838] border-none" /> */}
        </section>

        {/* Files */}
        <section className="bg-[#2e303880] rounded-[10px] p-[25px] m-[15px]">
          <div className="mb-4 pl-3 flex items-center">
            <MdFolder className="h-6 w-6" />
            <h3 className="font-semibold text-xl pl-1">Files</h3>
          </div>

          <div
            className="font-extralight bg-[#1d1f24bb] p-6 rounded-xl"
            dangerouslySetInnerHTML={{ __html: file_description }}
          ></div>
        </section>
      </div>
    </main>
  );
}
