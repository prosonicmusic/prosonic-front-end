import { useEffect } from "react";
import { useRouter } from "next/router";

import { parseCookies } from "nookies";

import DashboardSettings from "@/src/components/dashboard/DashboardSettings";
import UserProfile from "@/src/components/dashboard/UserProfile";
import ProducerProfile from "@/src/components/dashboard/ProducerProfile";
import MyProducts from "@/src/components/dashboard/MyProducts";
import Password from "@/src/components/dashboard/Password";
import UploadTrack from "@/src/components/dashboard/UploadTrack";

import { useAuth } from "@/src/context/AuthContext";
import useAxios from "@/src/utils/useAxios";

const Dashboard = ({ user }) => {
  const { query, push } = useRouter();
  const { accessToken } = parseCookies();

  const settingsStyles =
    "bg-[#2e303880] rounded-[10px] w-[350px] h-full overflow-hidden transition-all duration-300 my-[15px] ml-[15px] max-[900px]:w-full max-[900px]:m-[15px] max-[900px]:pb-[10px] max-[900px]:mb-[10px]";
  const settingStyles =
    "bg-[#2e303880] rounded-[10px] w-full m-[15px] min-h-[580px] max-[900px]:mb-[10px]";
  const dashboardStyles =
    "text-[#b6c1ce] max-w-5xl m-auto mt-[65px] flex max-[900px]:flex-col";

  const renderSectionContent = (userData) => {
    switch (query.params?.[0]) {
      case "user-profile":
        return <UserProfile userData={userData} />;
      case "producer-profile":
        return <ProducerProfile userData={userData} />;
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
      <section className={settingStyles}>{renderSectionContent(user?.data)}</section>
    </main>
  );
};

export default Dashboard;

export async function getServerSideProps(context) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

  try {
    const response = await useAxios(context).get(`${baseUrl}/user/get`);

    return {
      props: {
        user: response.data,
      },
    };
  } catch (err) {
    return {
      props: {
        user: [],
      },
    };
  }
}
