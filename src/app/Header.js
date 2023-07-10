"use client";

import Link from "next/link";
import Image from "next/image";

import { FaShoppingCart } from "react-icons/fa";
import { parseCookies } from "nookies";

import Burger from "@/components/navbar/burger";

export default function Header() {
  const listStyles =
    "py-[2.5px] px-2.5 mx-1 rounded text-[15px] transition duration-500 hover:bg-[#5a5a7a81] max-[900px]:hidden";
  const navbarStyles =
    "flex  items-center justify-between bg-[#141a22cc] w-[100%] h-[60px] fixed top-0 pt-[30px] pb-[30px] transition duration-500 z-50 rounded-b-2xl";
  const cartStyles =
    "flex rounded-[2px] bg-[#5a5a7a66] mx-[14px] h-[29px] w-[32px] relative text-center transition duration-500 items-center hover:bg-[#5a5a7a99] z-20 max-[900px]:mr-[40px]";
  const loginButtonStyles =
    "py-0.5 px-2.5 bg-[#e91c60e7] rounded-[5px] hover:bg-[#e91c60] transition duration-500 ml-[7px] mr-[0px] max-[900px]:hidden";
  const logoutButtonStyles =
    "py-0.5 px-2.5 rounded-[5px] text-[14px] hover:text-[#fc4e88] transition duration-300 ml-[7px] mr-[0px] max-[900px]:hidden";
  const cartCount =
    "absolute top-[-9px] right-[-4px] rounded-full bg-[#e91c60] w-4 h-4 text-[11px] font-black";

  const { accessToken } = parseCookies();

  const logoutHandler = () => {
    console.log("hi");
  };

  return (
    <nav className={navbarStyles}>
      <Link
        href="/"
        className="w-[160px] relative ml-10 z-20 max-[900px]:w-[100px] max-[900px]:ml-5"
      >
        <Image src="/images/prosonic-icon-white.png" alt="Prosonic" width={426} height={92} />
      </Link>

      <ul className="flex items-center mr-10 text-white">
        <li className={listStyles}>
          <Link href="/">Home</Link>
        </li>
        <li className={listStyles}>
          <Link href="/tracks">Tracks</Link>
        </li>
        <li className={listStyles}>
          <Link href="/packages">Packages</Link>
        </li>
        <li className={listStyles}>
          <Link href="/services">Services</Link>
        </li>
        <Link href="/cart" className={cartStyles}>
          <FaShoppingCart className="text-[#bcc7d4] h-[16px] w-full" />
          <span className={cartCount}>0</span>
        </Link>

        {/* {accessToken ? (
          <button className={loginButtonStyles}>
            <Link href="/dashboard/user-profile">Dashboard</Link>
          </button>
        ) : (
          <button className={loginButtonStyles}>
            <Link href="/auth">Login</Link>
          </button>
        )} */}

        {/* {accessToken && (
          <button className={logoutButtonStyles} onClick={logoutHandler}>
            Logout
          </button>
        )} */}

        <Burger />
      </ul>
    </nav>
  );
}
