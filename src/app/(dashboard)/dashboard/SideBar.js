import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function SideBar() {
  const pathname = usePathname();

  const settingStyles = `flex justify-between items-center px-6 py-4 hover:bg-[#2e303880] transition-all duration-300 cursor-pointer`;
  const settingsStyles =
    "bg-[#2e303880] rounded-[10px] w-[350px] h-full overflow-hidden transition-all duration-300 my-[15px] ml-[15px] max-[900px]:w-full max-[900px]:m-[15px] max-[900px]:pb-[10px] max-[900px]:mb-[10px]";

  const settings = [
    { title: "User Profile", href: "/dashboard/user-profile" },
    { title: "Producer Profile", href: "/dashboard/producer-profile" },
    { title: "My Products", href: "/dashboard/my-products" },
    { title: "Password", href: "/dashboard/password" },
    { title: "Email", href: "/dashboard/email" },
    { title: "Upload a Track", href: "/dashboard/my-products/new" },
  ];

  return (
    <div className={settingsStyles}>
      <h3 className="font-semibold text-[#707688] text-lg py-4 px-6">Settings</h3>
      <hr className="h-[2px] w-[] bg-[#000000] border-none" />

      {settings.map(({ title, href }) => (
        <Fragment key={href}>
          <Link
            href={href}
            className={`${settingStyles} ${pathname === href && "bg-[#383a4480]"}`}
          >
            <h5 className="mr-8 text-[15px]">{title}</h5>
            <MdOutlineArrowForwardIos className="fill-[#444]" />
          </Link>

          <hr className="h-[2px] w-[] bg-[#000000] border-none" />
        </Fragment>
      ))}
    </div>
  );
}
