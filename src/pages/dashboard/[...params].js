import { useEffect } from "react";
import { useRouter } from "next/router";

import { parseCookies } from "nookies";

import DashboardSettings from "@/src/components/dashboard/DashboardSettings";
import UserProfile from "@/src/components/dashboard/UserProfile";
import ProducerProfile from "@/src/components/dashboard/ProducerProfile";
import MyProducts from "@/src/components/dashboard/MyProducts";
import Password from "@/src/components/dashboard/Password";
import UploadTrack from "@/src/components/dashboard/UploadTrack";

const Dashboard = () => {
  const { query, push } = useRouter();
  const { accessToken } = parseCookies();

  const settingsStyles =
    "bg-[#2e303880] rounded-[10px] transition-all duration-300 my-[15px] ml-[15px] max-[900px]:m-[15px] max-[900px]:pb-[10px] max-[900px]:mb-[10px]";
  const settingStyles =
    "bg-[#2e303880] rounded-[10px] p-[25px] m-[15px] min-h-[580px] max-[900px]:mb-[10px]";
  const dashboardStyles =
    "text-[#b6c1ce] max-w-5xl h-full w-full m-auto mt-[65px] flex max-[900px]:block";

  const renderSectionContent = () => {
    switch (query.params?.[0]) {
      case "user-profile":
        return <UserProfile />;
      case "producer-profile":
        return <ProducerProfile />;
      case "my-products":
        return !query.params?.[1] ? (
          <MyProducts />
        ) : query.params?.[1] === "new" ? (
          <UploadTrack />
        ) : null;
      case "password":
        return <Password />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (!accessToken) push("/signin");
  }, [accessToken]);

  return (
    <main className={dashboardStyles}>
      <section className={settingsStyles}>
        <DashboardSettings />
      </section>
      <section className={settingStyles}>{renderSectionContent()}</section>
    </main>
  );
};

export default Dashboard;
