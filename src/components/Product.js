import Link from "next/link";

import { TbPlayerPlay } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa";

// import cubaseIcon from "/images/cubase_logo.png";

export default function Product({ product }) {
  const strokeStyles =
    "block relative bg-[#f1f1f1] h-[20px] w-[2px] left-[9.6em] max-md:left-[5.5em] rounded-3xl mx-[1.5px] transition duration-200 stroke";

  return (
    <div
      className="md:basis-[20%] basis-[100%] md:max-w-[20%] max-x-[100%] p-[7.5px] z-10"
      key={product.id}
    >
      <div className="bg-[#23252b80] rounded-[10px] transition duration-200 max-md:flex">
        {/* top */}
        <div className="relative w-full rounded-lg max-md:max-w-[120px]">
          {product.sold && (
            <div className="absolute h-full w-full bg-[#23252bd2] top-0 left-0 right-0 z-10 flex items-center justify-center">
              <span className="text-[30px] font-bold"> SOLD </span>
            </div>
          )}

          {/* image */}
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-x-[100%] border-none align-middle rounded-[10px]"
          />

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

          {/* wave */}
          <div className="h-[5px] flex items-center absolute top-[17px] wave">
            <div className={strokeStyles}></div>
            <div className={strokeStyles}></div>
            <div className={strokeStyles}></div>
            <div className={strokeStyles}></div>
          </div>
        </div>

        {/* bottom */}
        <div className="relative text-[#bcc7d4] text-left max-md:self-center max-md:w-full max-md:h-[120px] max-md:flex max-md:items-center max-md:justify-center">
          {/* {product.sold ? (
            <div></div>
          ) : (
            <div className="moreInfoIcon">
              <Link href={`/tracks/${product.id}`} className="info"></Link>
              <FaChevronRight className="md:hidden" />
            </div>
          )} */}

          <div className="p-[20px]">
            <span className="text-[#bcc7d4] text-[17px]">{product.title}</span>
            <br />
            <span className="text-[#5a626b] text-[15px]">{product.author}</span>
          </div>

          <div className="flex items-center justify-start font-bold text-[13px]">
            <span className="relative px-[12px] bg-[#282b32bb] rounded-[2px] mb-[10px]">
              {product.product_price} T
            </span>
            <div className="px-[3px] py-[3px] ml-[60px] mb-[10px] bg-[#282b32bb] rounded-lg">
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
          </div>
        </div>
      </div>
    </div>
  );
}
