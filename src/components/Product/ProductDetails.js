import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";
import { MdFolder } from "react-icons/md";

export default function ProductDetails({ productData }) {
  const {
    thumbnail,
    tag,
    title,
    author,
    id,
    product_price,
    genre,
    bpm,
    daw,
    length,
    like_count,
    project_image,
    project_description,
    file_description,
  } = productData;

  return (
    <main className="text-[#b6c1ce] max-w-5xl h-full w-full m-auto mt-[65px] flex max-[900px]:block">
      {/* Details */}
      <section className="bg-[#2e303880] rounded-[10px] transition-all duration-300 p-[25px] my-[15px] ml-[15px] max-[900px]:m-[15px] max-[900px]:pb-[10px] max-[900px]:mb-[10px]">
        <h3 className="font-semibold text-xl px-3 pb-4">Details</h3>
        <div className="relative w-full max-[900px]:flex max-[900px]:justify-center">
          <img
            src={thumbnail}
            alt="product cover"
            className="w-[700px] rounded-lg max-[900px]:w-[200px]"
          />
          {/* Tag */}
          <ul className="flex items-start absolute top-2 text-xs font-bold invisible max-[900px]:left-1 max-[900px]:bottom-[-60px] max-[900px]:top-auto">
            <div className={tag}>
              <li> PREMIUM </li>
            </div>
          </ul>

          {/* <div className="">
            <span> SOLD </span>
          </div> */}
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

          {genre !== null && (
            <div className="p-[3px]">
              <span className="pr-5 text-[#959faa]">Genre</span>
              <span>{genre}</span>
            </div>
          )}
          {length !== null && (
            <div className="p-[3px]">
              <span className="pr-5 text-[#959faa]">Length</span>
              <span>{length}</span>
            </div>
          )}
          {bpm !== null && (
            <div className="p-[3px]">
              <span className="pr-5 text-[#959faa]">BPM</span>
              <span>{bpm}</span>
            </div>
          )}
          {daw !== "Package" && (
            <div className="p-[3px] flex">
              <span className="pr-5 text-[#959faa]">Daw</span>
              <div className="py-[3px] px-[5px] bg-[#282b32bb] rounded-[10px]">
                <div className={daw}>
                  <img
                    src="/images/cubase_logo.png"
                    alt="Cubase"
                    className={`max-w-full h-[17px] align-middle ${
                      daw === "Cubase" ? "block" : "hidden"
                    }`}
                  />
                  <img
                    src="/images/fl-logo.png"
                    alt="FL Studio"
                    className={`max-w-full h-[17px] align-middle ${
                      daw === "FLStudio" ? "block" : "hidden"
                    }`}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Like */}
          <div className="flex items-center justify-center bg-[#282b32] py-2 mt-5 rounded-[10px]">
            <HiOutlineHeart className="h-6 w-6 stroke-rose-500 hover:stroke-rose-700 cursor-pointer" />
            {/* <HiHeart className="h-6 w-6 cursor-pointer fill-[#dd1f5f]" /> */}
            <span className="text-xs ml-1 text-rose-200">{like_count}</span>
          </div>
        </div>
        <hr className="h-[1px] bg-[#383838] border-none" />

        <div className="flex items-center justify-center">
          <button className="p-3 transition-all duration-300 bg-[#cf1e59ee] hover:bg-[#dd1f5f] font-semibold text-[18px] text-white w-48 rounded-[10px] my-5">
            Add to cart
          </button>
        </div>
      </section>

      <div>
        {/* Project Description */}
        <section className="bg-[#2e303880] rounded-[10px] p-[25px] m-[15px] min-h-[580px] max-[900px]:mb-[10px]">
          <h3 className="font-semibold text-xl px-3 pb-4">
            Project Description
          </h3>
          {project_image && (
            <img
              src={project_image}
              alt="project screenshot"
              className="w-[600px] rounded-lg max-[900px]:w-full"
            />
          )}

          <div
            className="py-6 mt-3"
            dangerouslySetInnerHTML={{ __html: project_description }}
          ></div>
          <hr className="h-[1px] bg-[#383838] border-none" />
          {/* player */}
          <div>player</div>
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
