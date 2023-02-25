import Link from "next/link";

// icons
import {
  FaHome,
  FaBox,
  FaUser,
  FaScrewdriver,
  FaArrowRight,
  FaMusic,
} from "react-icons/fa";

function PhoneNav({ status }) {
  const listStyles =
    "bg-[#23252b] mb-[5px] rounded-[8px] flex items-center cursor-pointer hover:bg-[#17191d] transation duration-200";
  const linkStyles = "px-[12px] py-[11px] text-[#7e8893] text-[18px]";
  const menuStyles = `z-10 fixed w-full h-[100vh] bg-[#1e2025] bottom-0 top-0 left-0 transation duration-500 px-[10px]  translate-x-full min-[900px]:hidden ${
    status ? "translate-x-0" : ""
  }`;

  return (
    <div className={menuStyles}>
      <div className="left-0 mt-20">
        <Link href="/" className={listStyles}>
          <FaHome className="ml-[12px] text-[#bcc7d4]" />
          <div className={linkStyles}>Home</div>
        </Link>

        <Link href="/tracks" className={listStyles}>
          <FaMusic className="ml-[12px]" />
          <div className={linkStyles}>Tracks</div>
        </Link>

        <Link href="/packages" className={listStyles}>
          <FaBox className="ml-[12px]" />
          <div className={linkStyles}>Packages</div>
        </Link>

        <Link href="/services" className={listStyles}>
          <FaScrewdriver className="ml-[12px]" />
          <div className={linkStyles}>Services</div>
        </Link>

        <Link href="/login" className={listStyles}>
          <FaArrowRight className="ml-[12px]" />
          <div className={linkStyles}>Login</div>
        </Link>
      </div>
    </div>
  );
}

export default PhoneNav;
