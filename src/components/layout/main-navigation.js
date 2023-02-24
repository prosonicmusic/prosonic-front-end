import Link from "next/link";
import Image from "next/image";

import { FaShoppingCart } from "react-icons/fa";

function MainNavigation() {
  return (
    <nav>
      <div className="flex  items-center justify-between bg-[#141a22cc] w-[100%] h-[60px] fixed top-0 pt-[30px] pb-[30px] transition duration-500 z-50 rounded-b-2xl">
        <Link href="/" className="w-[160px] relative ml-10">
          <Image
            src="/images/prosonic-icon-white.png"
            alt="Prosonic"
            width={426}
            height={92}
          />
        </Link>

        <ul className="flex items-center mr-10 text-white">
          <li className="py-1 px-2.5 mx-1 rounded text-[15px] transition duration-500 hover:bg-[#5a5a7a81]">
            <Link href="">Home</Link>
          </li>
          <li className="py-1 px-2.5 mx-1 rounded text-[15px] transition duration-500 hover:bg-[#5a5a7a81]">
            <Link href="">Tracks</Link>
          </li>
          <li className="py-1 px-2.5 mx-1 rounded text-[15px] transition duration-500 hover:bg-[#5a5a7a81]">
            <Link href="">Packages</Link>
          </li>
          <li className="py-1 px-2.5 mx-1 rounded text-[15px] transition duration-500 hover:bg-[#5a5a7a81]">
            <Link href="">Services</Link>
          </li>
          <li className="py-1 px-2.5 mx-1 rounded text-[15px] transition duration-500 hover:bg-[#5a5a7a81]">
            <Link href="">Services</Link>
          </li>
          <Link
            href="/cart"
            className="flex rounded-[2px]  bg-[#5a5a7a66] mx-[14px] h-[29px] w-[32px] relative text-center transition duration-500 items-center hover:bg-[#5a5a7a99]"
          >
            <FaShoppingCart className="text-[#bcc7d4] h-[16px] w-full" />
            <span className="absolute top-[-9px] right-[-4px] rounded-full bg-[#e91c60] w-4 h-4 text-[11px] font-black">
              0
            </span>
          </Link>

          <button className="py-1 px-2.5 bg-[#e91c60e7] rounded-[5px] hover:bg-[#e91c60] transition duration-500 ml-[7px] mr-[0px]">
            <Link href="/login">Login</Link>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavigation;
