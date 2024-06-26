import { useEffect } from "react";
import { useRouter } from "next/router";

import { parseCookies } from "nookies";

import DashboardSettings from "@/src/components/dashboard/DashboardSettings";
import UserProfile from "@/src/components/dashboard/UserProfile";
import ProducerProfile from "@/src/components/dashboard/ProducerProfile";
import MyProducts from "@/src/components/dashboard/MyProducts";
import Password from "@/src/components/dashboard/Password";
import Email from "@/src/components/dashboard/Email";
import UploadTrack from "@/src/components/dashboard/UploadTrack";

import { useAuth } from "@/src/context/AuthContext";
import useAxios from "@/src/utils/useAxios";

const Dashboard = ({ user, genres, daws, producerFavorites }) => {
  const { query, push } = useRouter();
  const { accessToken } = parseCookies();

  const settingsStyles =
    "bg-[#2e303880] rounded-[10px] w-[350px] h-full overflow-hidden transition-all duration-300 my-[15px] ml-[15px] max-[900px]:w-full max-[900px]:m-[15px] max-[900px]:pb-[10px] max-[900px]:mb-[10px]";
  const settingStyles =
    "bg-[#2e303880] rounded-[10px] w-full m-[15px] min-h-[500px] max-[900px]:mb-[10px]";
  const dashboardStyles =
    "text-[#b6c1ce] max-w-5xl m-auto mt-[65px] flex max-[900px]:items-center max-[900px]:flex-col max-[900px]:p-3";

  const renderSectionContent = (userData) => {
    switch (query.params?.[0]) {
      case "user-profile":
        return <UserProfile userData={userData} />;
      case "producer-profile":
        return (
          <ProducerProfile
            userData={userData}
            genres={genres.data}
            daws={daws.data}
            producerFavorites={producerFavorites}
          />
        );
      case "my-products":
        return !query.params?.[1] ? (
          <MyProducts />
        ) : query.params?.[1] === "new" ? (
          <UploadTrack />
        ) : null;
      case "password":
        return <Password userData={userData} />;
      case "email":
        return <Email userData={userData} />;
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
    const userData = await useAxios(context).get(`${baseUrl}/user/get`);
    const producerFavGenres = await useAxios(context).get(
      `${baseUrl}/producer/favorite/genre`
    );
    const producerFavDaws = await useAxios(context).get(`${baseUrl}/producer/favorite/daw`);
    const allGenresData = await useAxios().get(`${baseUrl}/product/genre/all`);
    const allDawsData = await useAxios().get(`${baseUrl}/producer/daws`);

    return {
      props: {
        user: userData?.data,
        genres: allGenresData?.data,
        daws: allDawsData?.data,
        producerFavorites: {
          genres: producerFavGenres?.data?.data,
          daws: producerFavDaws?.data?.data,
        },
      },
    };
  } catch (err) {
    return {
      props: {
        user: [],
        genres: [],
        daws: [],
        producerFavorites: [],
      },
    };
  }
}
