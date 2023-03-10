import Link from "next/link";

// icons
import {
  FaTelegram,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  const h2Styles = "relative text-[25px] font-[400] mb-[20px] h2";
  const linksListStyles =
    "mb-[10px] text-[#bcc7d49a] transation duration-300 hover:text-[#bcc7d4]";
  const contactListStyles = "flex mb-[15px] items-center";
  const contactSpanStyles =
    "text-[#bcc7d4ef] text-[20px] mr-[10px] transation duration-200 hover:text-[#fff]";
  const footerSectionStyles =
    "mr-[35px] max-[900px]:mr-0 max-[900px]:mb-[40px] max-[900px]:w-full max-[1000px]:ml-0";
  const footerStyles =
    "relative w-full  py-[50px] px-[100px] footer flex max-[900px]:p-[40px] max-[900px]:flex-col";

  return (
    <div className="footerBody">
      <footer className={footerStyles}>
        <div className={`${footerSectionStyles} w-[30%]`}>
          <h2 className={h2Styles}>About Us</h2>
          <p className="text-[#bcc7d4b2]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            voluptate voluptas et modi? Et consequatur iste corporis maiores, ea
            similique praesentium pariatur, optio eum soluta enim? Veritatis
            quae repellat nisi.
          </p>
        </div>

        <div className={`${footerSectionStyles} relative w-[20%]`}>
          <h2 className={h2Styles}>Quick Links</h2>
          <ul>
            <li className={linksListStyles}>
              <Link href="/about" id="footerLink">
                About us
              </Link>
            </li>
            <li className={linksListStyles}>
              <Link href="/jobs" id="footerLink">
                Jobs
              </Link>
            </li>
            <li className={linksListStyles}>
              <Link href="/contact" id="footerLink">
                Contact
              </Link>
            </li>
            <li className={linksListStyles}>
              <Link href="/terms" id="footerLink">
                Terms & Conditions
              </Link>
            </li>
            <li className={linksListStyles}>
              <Link href="/privacy-policy" id="footerLink">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className={`${footerSectionStyles}`}>
          <h2 className={h2Styles}>Contact Info</h2>
          <ul className="relative">
            <li className={contactListStyles}>
              <span className={contactSpanStyles}>
                <FaEnvelope />
              </span>
              <a
                href="mailto:prosonictunes@gmail.com"
                target="_blank rel=noopener"
                className="text-[#bcc7d49a] transation duration-150 hover:text-[#bcc7d4]"
              >
                prosonictunes@gmail.com
              </a>
            </li>
            <li className={contactListStyles}>
              <span className={contactSpanStyles}>
                <FaTelegram />
              </span>
              <a
                href="https://t.me/ProsonicSupport"
                target="_blank rel=noopener"
                className="text-[#bcc7d49a] transation duration-150 hover:text-[#bcc7d4]"
              >
                @ProsonicSupport
              </a>
            </li>
            <li className={contactListStyles}>
              <span className={contactSpanStyles}>
                <FaLinkedinIn />
              </span>
              <a
                href="https://www.linkedin.com/company/prosonictunes/"
                target="_blank rel=noopener"
                className="text-[#bcc7d49a] transation duration-150 hover:text-[#bcc7d4]"
              >
                @Prosonictunes
              </a>
            </li>
            <li className={contactListStyles}>
              <span className={contactSpanStyles}>
                <FaInstagram />
              </span>
              <a
                href="https://www.instagram.com/prosonictunes/"
                target="_blank rel=noopener"
                className="text-[#bcc7d49a] transation duration-150 hover:text-[#bcc7d4]"
              >
                @Prosonictunes
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="w-[10rem] bg-[#333] h-[10rem] rounded-xl">
          hi
        </div> */}
      </footer>

      <div className="text-[12px] uppercase font-[900] text-[#5a626b98] text-center tracking-wider mb-[10px] mt-[20px]">
        <p>Copyright © 2023 Prosonic. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
