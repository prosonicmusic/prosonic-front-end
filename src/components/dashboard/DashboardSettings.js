import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function DashboardSettings() {
  const router = useRouter();

  const settingStyles = `flex justify-between items-center px-6 py-4 hover:bg-[#2e303880] transition-all duration-300 cursor-pointer`;

  const settings = [
    { title: "User Profile", href: "/dashboard/user-profile" },
    { title: "Producer Profile", href: "/dashboard/producer-profile" },
    { title: "My Products", href: "/dashboard/my-products" },
    { title: "Password", href: "/dashboard/password" },
    { title: "Email", href: "/dashboard/email" },
    { title: "Upload a Track", href: "/dashboard/my-products/new" },
  ];

  return (
    <>
      <h3 className="font-semibold text-[#707688] text-lg py-4 px-6">Settings</h3>
      <hr className="h-[2px] w-[] bg-[#000000] border-none" />

      {settings.map(({ title, href }) => (
        <Fragment key={href}>
          <Link
            href={href}
            className={`${settingStyles} ${router.asPath === href && "bg-[#383a4480]"}`}
          >
            <h5 className="mr-8 text-[15px]">{title}</h5>
            <MdOutlineArrowForwardIos className="fill-[#444]" />
          </Link>

          <hr className="h-[2px] w-[] bg-[#000000] border-none" />
        </Fragment>
      ))}
    </>
  );
}
