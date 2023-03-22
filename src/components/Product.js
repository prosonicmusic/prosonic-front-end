import Link from "next/link";

import { TbPlayerPlay } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa";

// import cubaseIcon from "/images/cubase_logo.png";

export default function Product({ product }) {
  console.log(product);
  const strokeStyles =
    "block bg-[#f1f1f1] h-[20px] w-[2px] left-[9.6em] rounded-3xl mx-[1.5px] transition duration-200 stroke";

  return (
    <div className="basis-full min-[900px]:basis-[20%] min-[900px]:max-w-[20%] max-x-[100%] p-[7.5px] z-10">
      <div className="bg-[#23252b80] rounded-[10px] transition duration-200 max-[900px]:flex">
        {/* top */}
        <div className="relative w-full rounded-lg max-[900px]:max-w-[120px]">
          {product.sold && (
            <div className="absolute h-full w-full bg-[#23252bd2] top-0 left-0 right-0 z-50 flex items-center justify-center">
              <span className="text-[30px] font-bold"> SOLD </span>
            </div>
          )}

          {/* image */}
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-x-[100%] border-none align-middle rounded-[10px]"
            />
            {/* wave */}
            <div className="h-[5px] flex items-center absolute right-2 top-4">
              <div className={strokeStyles}></div>
              <div className={strokeStyles}></div>
              <div className={strokeStyles}></div>
              <div className={strokeStyles}></div>
            </div>
          </div>

          {/* play */}
          <div className="cursor-pointer transition-all duration-300 opacity-0 hover:opacity-100 icon">
            <div className="flex items-center justify-center text-[#d4d4d4] absolute top-[50px] right-[50px] max-md:top-[20px] max-md:right-[35px] max-md:w-[50px]">
              <TbPlayerPlay size={80} />
            </div>
          </div>

          {/* tag */}
          <div className="flex items-start flex-col absolute top-[8px] text-[#bcc7d4] md:text-[11px] text-[9px] font-black invisible">
            <div className={product.tag}>PREMIUM</div>
          </div>
        </div>

        {/* bottom */}
        <div className="relative text-[#bcc7d4] text-left w-full h-full">
          {product.sold ? (
            <div></div>
          ) : (
            <Link
              href={`/tracks/${product.id}`}
              className="absolute w-full h-full left-0 top-0 flex items-center justify-center cursor-pointer z-10"
            >
              <FaChevronRight className="min-[900px]:hidden absolute right-4 h-5 text-[#dd1f5f]" />
            </Link>
          )}

          <div className="p-[20px]">
            <span className="text-[#bcc7d4] text-[17px]">{product.title}</span>
            <br />
            <span className="text-[#5a626b] text-[15px]">{product.author}</span>
          </div>

          <div className="flex items-center justify-start font-bold text-[13px]">
            <span className="relative px-[12px] bg-[#282b32bb] rounded-[2px] mb-[10px] max-[900px]:ml-5">
              {product.product_price} T
            </span>
            {product.product_type !== "Package" && (
              <div className="px-[3px] py-[3px] min-[900px]:ml-[60px] ml-3 mb-[10px] bg-[#282b32bb] rounded-lg">
                <div className={product.daw}>
                  <img
                    src="images/cubase_logo.png"
                    alt="Cubase"
                    className={`max-w-full h-[17px] align-middle ${
                      product.daw === "Cubase" ? "block" : "hidden"
                    }`}
                  />
                  <img
                    src="images/fl-logo.png"
                    alt="FL Studio"
                    className={`max-w-full h-[17px] align-middle ${
                      product.daw === "FLStudio" ? "block" : "hidden"
                    }`}
                  />
                </div>
              </div>
            )}
          </div>
          <div
            className={`absolute top-0 transition-all duration-200 p-[10px] w-full h-full bg-[#16181b] rounded-[10px] max-[900px]:hidden ${
              product.sold && "hidden"
            } opacity-0 hover:opacity-100 z-10`}
          >
            <div className="h-[45%] w-full mb-[10px] bg-[#282b32] text-[#bcc7d4] transition-all duration-200 flex items-center justify-center rounded-[10px]">
              <Link href={`/tracks/${product.id}`}> More Info </Link>
            </div>
            <button className="bg-[#dd1f5f] font-semibold h-[45%] w-full text-white flex items-center justify-center rounded-[10px]">
              {" "}
              Add to cart{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
