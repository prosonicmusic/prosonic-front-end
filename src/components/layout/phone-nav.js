import Link from "next/link";

import { useAuth, useAuthActions } from "@/src/context/AuthContext";

// icons
import { FaHome, FaBox, FaUser, FaScrewdriver, FaArrowRight, FaMusic } from "react-icons/fa";

function PhoneNav({ status, setStatus }) {
  const listStyles =
    "bg-[#23252b] mb-[5px] rounded-[8px] flex items-center cursor-pointer hover:bg-[#17191d] transation duration-200";
  const linkStyles = "px-[12px] py-[11px] text-[#7e8893] text-[18px]";
  const menuStyles = `z-10 fixed w-full h-[100vh] bg-[#1e2025] bottom-0 top-0 left-0 transation duration-500 px-[10px] min-[900px]:hidden ${
    status ? "clickOpen" : "translate-x-full"
  }`;
  const logoutBtnStyles =
    "bg-[#23252b] mb-[5px] rounded-[8px] w-full flex items-center cursor-pointer hover:bg-[#17191d] transation duration-200";

  const { user } = useAuth();
  const dispatch = useAuthActions();

  const logoutHandler = () => {
    setStatus(false);
    dispatch({ type: "SIGNOUT" });
  };

  return (
    <div className={menuStyles}>
      <div className="left-0 mt-20">
        <Link href="/" className={listStyles} onClick={() => setStatus(false)}>
          <FaHome className="ml-[12px] text-[#bcc7d4]" />
          <div className={linkStyles}>Home</div>
        </Link>

        <Link href="/tracks" className={listStyles} onClick={() => setStatus(false)}>
          <FaMusic className="ml-[12px]" />
          <div className={linkStyles}>Tracks</div>
        </Link>

        <Link href="/packages" className={listStyles} onClick={() => setStatus(false)}>
          <FaBox className="ml-[12px]" />
          <div className={linkStyles}>Packages</div>
        </Link>

        <Link href="/services" className={listStyles} onClick={() => setStatus(false)}>
          <FaScrewdriver className="ml-[12px]" />
          <div className={linkStyles}>Services</div>
        </Link>

        {user ? (
          <Link href="/profile" className={listStyles} onClick={() => setStatus(false)}>
            <FaArrowRight className="ml-[12px]" />
            <div className={linkStyles}>Profile</div>
          </Link>
        ) : (
          <Link href="/signin" className={listStyles} onClick={() => setStatus(false)}>
            <FaArrowRight className="ml-[12px]" />
            <div className={linkStyles}>Login</div>
          </Link>
        )}

        {user && (
          <button className={logoutBtnStyles} onClick={logoutHandler}>
            <FaArrowRight className="ml-[12px]" />
            <div className={linkStyles}>Logout</div>
          </button>
        )}
      </div>
    </div>
  );
}

export default PhoneNav;
