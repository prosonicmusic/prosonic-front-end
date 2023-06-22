import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function ProducerProfile({ genres, daws, userData, producerFavorites }) {
  const [showDawOptions, setShowDawOptions] = useState(false);
  const [showGenresOptions, setShowGenresOptions] = useState(false);

  console.log(producerFavorites);
  const caretStyles =
    "relative top-3.5 ml-2 border-l-4 border-l-[transparent] border-r-4 border-r-[transparent] border-t-4 border-t-[#5a626b]";

  return (
    <>
      {userData?.is_producer ? (
        <div>
          <h3 className="font-semibold text-[#9ba3bb] text-lg py-4 px-6">Producer Profile</h3>
          <hr className="h-[2px] w-[] bg-[#000000] border-none" />

          <div>
            {/* favorites */}
            <h3 className="text-[#9ba3bb] text-lg font-extrabold mt-10 mb-3 px-4">
              Favorites
            </h3>

            <div className="bg-[#2e303880] p-3 m-4 rounded-lg flex justify-center">
              {/* Favorite Genres */}
              <div className="">
                <h3
                  onClick={() => setShowGenresOptions(!showGenresOptions)}
                  className="bg-[#1c1d22f3] p-3 inline-block mx-4 mt-4 mb-2 hover:bg-[#1f2127f3] transition duration-200 rounded-lg cursor-pointer"
                >
                  Favorite genres <span className={caretStyles}></span>
                </h3>
                {showGenresOptions && (
                  <ul className="bg-[#1c1d22f3] mx-4 rounded-lg absolute py-2 px-1">
                    {genres?.map((genre) => {
                      return (
                        <li className="px-2 hover:bg-[#393b46] transition duration-200 rounded-lg cursor-pointer">
                          {genre.name}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Producer favorite genres */}
                {producerFavorites?.genres?.map((genre) => {
                  return (
                    <div className="px- mx-4 my-2 rounded-lg bg-[#1c1d22f3] flex justify-between">
                      <div className="ml-3 text-[#9ca3b8]">{genre.genre}</div>
                      <button className="p-1 hover:text-rose-500 transition duration-200">
                        <AiOutlineClose />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Favorite Daws */}
              <div>
                <h3
                  onClick={() => setShowDawOptions(!showDawOptions)}
                  className="bg-[#1c1d22f3] p-3 inline-block mx-4 mt-4 mb-2 hover:bg-[#1f2127f3] transition duration-200 rounded-lg cursor-pointer"
                >
                  Favorite daws <span className={caretStyles}></span>
                </h3>
                {showDawOptions && (
                  <ul className="bg-[#1c1d22f3] mx-4 rounded-lg absolute py-2 px-1">
                    {daws?.map((daw) => {
                      return (
                        <li className="px-2 hover:bg-[#393b46] transition duration-200 rounded-lg cursor-pointer">
                          {daw.name === "flstudio" && "FL Studio"}
                          {daw.name === "cubase" && "Cubase"}
                          {daw.name === "logicpro" && "Logic Pro"}
                          {daw.name === "ableton" && "Ableton"}
                          {daw.name === "studioone" && "Studio One"}
                          {daw.name === "protools" && "Pro Tools"}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Producer favorite daws */}
                {producerFavorites?.daws?.map((daw) => {
                  return (
                    <div className="px- mx-4 my-2 rounded-lg bg-[#1c1d22f3] flex justify-between">
                      <div className="ml-3 text-[#9ca3b8]">
                        {daw.daw === "flstudio" && "FL Studio"}
                        {daw.daw === "cubase" && "Cubase"}
                        {daw.daw === "logicpro" && "Logic Pro"}
                        {daw.daw === "ableton" && "Ableton"}
                        {daw.daw === "studioone" && "Studio One"}
                        {daw.daw === "protools" && "Pro Tools"}
                      </div>
                      <button className="p-1 hover:text-rose-500 transition duration-200">
                        <AiOutlineClose />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>YOU ARE NOT PRODUCER</div>
      )}
    </>
  );
}
